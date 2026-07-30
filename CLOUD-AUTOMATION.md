# Cloud automation — WDD check and data update without a laptop

**Session:** 95bccc2b-06cf-492a-a10e-5c0ab52038ea
**Date:** 2026-07-30
**Status:** Live. Verified end to end on 2026-07-30 — a forced run reached gov.cy from the
cloud environment, found no bulletin newer than the deployed dataset, and correctly made no
dataset commit and sent no Telegram post.

Replaces `scripts/watch-wdd.sh`, which polled gov.cy every 5 minutes from a laptop and
launched Claude Code locally. The deterministic check now runs inside the app; the agent
work runs in the existing **Fragmata data update** routine.

```
Vercel Cron ──► GET /api/cron/check-wdd ──► POST …/routines/{id}/fire ──► routine session
 (every 10m)     compares gov.cy vs the        only when the bulletin        pushes to main
                 deployed dataset             is actually newer            → Vercel deploys
```

The routine reaches back into the app for the two things a fresh checkout doesn't have:

| Endpoint | Replaces | Why |
|---|---|---|
| `POST /api/internal/telegram` | `scripts/post-telegram.ts` | `scripts/*` is gitignored; keeps the bot token in Vercel only |
| `GET /api/internal/narrative` | reading `community/TELEGRAM.md` | `community/` is gitignored; serves the same story arc from committed `getSummaryChanges` |

## Files

- `app/api/cron/check-wdd/route.ts` — the check and the fire call
- `src/utils/wddDates.ts` — bulletin-date parsing (both gov.cy filename schemes + the `Graphs-*` companion)
- `app/api/internal/telegram/route.ts` — Telegram relay
- `app/api/internal/narrative/route.ts` — narrative history for the routine
- `src/utils/internalAuth.ts` — bearer check shared by the two internal routes
- `vercel.json` — the cron schedule
- `.claude/skills/fetch-and-update/SKILL.md` — "Cloud runs" section overrides the local-only steps

## Setup

### 1. Vercel environment variables (Production)

| Variable | Value |
|---|---|
| `CRON_SECRET` | any random string — Vercel sends it as the `Authorization: Bearer` header on cron invocations, and the route rejects anything else |
| `CLAUDE_ROUTINE_ID` | `trig_01QjK5oSx5c9vib3qxwNYmpC` |
| `CLAUDE_ROUTINE_TOKEN` | the routine's API token (`sk-ant-oat01-…`) |
| `INTERNAL_API_SECRET` | any random string — shared with the cloud environment below |
| `TELEGRAM_BOT_TOKEN` | same value as in `.env.local` |
| `TELEGRAM_CHAT_ID` | same value as in `.env.local` |

The routine token is shown once when generated. If it's lost, generate a new one on the
routine at claude.ai/code/routines and update this variable.

### 2. Claude cloud environment (`env_01WHkXtHbqGCnA55mBF8iqnj`)

- **Environment variable** `INTERNAL_API_SECRET` — same value as in Vercel. Note that
  environment variables are visible to anyone who uses that environment, which is exactly
  why the Telegram bot token isn't one of them.
- **Network access → Custom**, keeping the default package-manager allowlist, plus:
  - `www.gov.cy` — without it the XLSX download fails with `403 host_not_allowed`
  - `fragmata.info` — the two internal endpoints

  WebFetch/WebSearch (news for the ticker) route through Anthropic's servers and need no
  allowlist entry.

### 3. Routine configuration

Routine `trig_01QjK5oSx5c9vib3qxwNYmpC`. Its prompt references the fire payload and the
skill, and its output branch must be **`main`** so that a run deploys itself. Model is
`claude-sonnet-5`, matching what the local script used.

> **Editing the routine in the web UI resets the output branch** to a fresh auto-generated
> name (`claude/dreamy-cannon`, `claude/loving-tesla`, …) — observed twice on 2026-07-30. A
> run that pushes to a branch never deploys, so the check keeps seeing the old dataset and
> re-fires every hour until the branch is merged.
>
> After *any* UI edit to this routine, put the branch back to `main`. The field is
> `job_config.ccr.session_context.outcomes[0].git_repository.git_info.branches`; the simplest
> fix is to ask Claude Code to restore it, which it does through the claude.ai remote-trigger
> API. The routine's own `/fire` token is not the credential for that endpoint, so don't
> expect a plain curl with `$CLAUDE_ROUTINE_TOKEN` to work.

## Schedule

`*/10 5-15 * * *` — every 10 minutes, 05:00–15:00 UTC (≈08:00–18:00 Cyprus in summer,
07:00–17:00 in winter), every day. Bulletins have historically appeared 09:30–15:00 Cyprus
time on weekdays; the window covers that with room on both sides, and weekends cost 66
trivial invocations for insurance.

**Duplicate-run risk at this interval.** A run takes ~10 minutes and pushes only at the
end, so for the whole run the deployed site still reports the old dataset. The only thing
preventing a second fire for the same bulletin is `mainHasDataset()`, which sees the run
only *after* its push lands. At 10-minute ticks that leaves no margin: a run that takes
longer than one tick — a slow `pnpm install`, a retry, anything — gets a second routine
fired on top of it, and the cost of that is a duplicate Telegram post, not just wasted
compute. Chosen deliberately on 2026-07-30 in exchange for ~10-minute detection latency.

Closing the gap properly needs a real lock recording the in-flight bulletin (Vercel KV or
Edge Config, written before the fire and cleared by the run) — no such store is wired up
today.

Vercel Pro is required for sub-daily crons — Hobby rejects these expressions at deploy time.

## Testing

Dry run (fetches the pages, compares, never fires):

```bash
curl -s -H "Authorization: Bearer $CRON_SECRET" "https://fragmata.info/api/cron/check-wdd?dry=1"
```

Force a real run regardless of dates (equivalent to the old `watch-wdd.sh --force`):

```bash
curl -s -H "Authorization: Bearer $CRON_SECRET" "https://fragmata.info/api/cron/check-wdd?force=1"
```

Telegram relay, without sending:

```bash
curl -s -X POST "https://fragmata.info/api/internal/telegram" -H "Authorization: Bearer $INTERNAL_API_SECRET" -H "Content-Type: application/json" -d '{"text":"test","dryRun":true}'
```

### Reading the response

Every check returns `action`:

| `action` | Meaning |
|---|---|
| `no-new-data` | gov.cy is not ahead of the deployed dataset — the normal case |
| `fired` | routine started; `sessionUrl` links to the live session |
| `already-pushed` | a run for this bulletin already landed on `main`; waiting on the deploy |
| `push-guard-unavailable` | GitHub couldn't be reached, so the check declined to fire rather than risk a duplicate run. Self-corrects on the next tick |
| `dry-run` | would have fired |

A `502` means both gov.cy pages failed, no dates parsed, or the fire call was rejected —
the body carries the reason. Cron invocations are visible under the project's Cron Jobs tab
in Vercel, and the routine also sends a push notification per run.

## Known limitations

- **Post text is no longer archived.** `community/TELEGRAM.md` and `WHATSAPP.md` stay
  local-only, so a cloud run's post exists in the routine's session log and in Telegram
  itself, not in a file. The narrative that matters for continuity — `getSummaryChanges` —
  *is* committed, which is what the narrative endpoint serves back.
- **`/fire` is a research preview** behind the dated beta header
  `experimental-cc-routine-2026-04-01`, and is claude.ai-only. Breaking changes ship behind
  new dated headers with the two previous versions still working, so expect an eventual
  bump of that constant in `app/api/cron/check-wdd/route.ts`.
- **The local script still works.** `./scripts/watch-wdd.sh --once` remains the fallback;
  disable the cloud loop by removing the `crons` entry from `vercel.json` or disabling the
  routine.
