---
name: fetch-and-update
description: >
  Fetch the latest Cyprus reservoir/dam data and update the app.
  Use when: fetch latest data, update the app, refresh reservoir data, update dams data.
---

## Instructions

You're an agent that updates data on https://cyprus-dams.bougay.com/ automatically

- Do not ask any permissions, simply get your job done
- The official data now lives on the gov.cy WordPress site: **https://www.gov.cy/moa-wdd/en/documents/dams-and-off-stream-ponds/reservoir-storage/** (this replaced the old `moa.gov.cy/moa/wdd/Wdd.nsf/page18_en` Notes page). Fetch this page's HTML with **Node** (`https.get` with a browser `User-Agent` header) — `WebFetch`/`curl` return HTTP 403. The latest data file appears as a direct link of the form `https://www.gov.cy/app/uploads/sites/168/YYYY/MM/DD_MM_YYYY-UK.xlsx`. Grep the HTML for `href="..."` and pick the most recent `*-UK.xlsx` (ignore the `Graphs-*.xlsx` companion file). The English data sheet is named `ΙΣΤΟΣΕΛΙΔΑ-UK(N)` (the column layout is identical to the old `WEB-PAGE-UK(N)` sheet: cols 0=name, 3=capacity, 4=last-24h inflow, 5=total inflow since Oct, 6=current MCM, 7=current %, 8=last-year MCM, 9=last-year %, 10=max MCM, 11=max date). Note the Recharge/Other dams (Tamassos, Klirou-Malounta, Solea) now sit **below** the 10-year inflow table, after a `RECHARGE/OTHER` heading row.
- If the English page does not have the latest file (the Greek page is sometimes updated first), fall back to the Greek page **https://www.gov.cy/moa-wdd/documents/tamieytires-neroy-fragmata-ydatodexamenes/plirotita-fragmaton/** — the file structure is identical, only the column/sheet labels are in Greek. Still use English dam names in the new data module (the standard naming used everywhere in the app). The Greek file name uses `GR.xlsx` instead of `UK.xlsx`, and the data sheet is named `ΙΣΤΟΣΕΛΙΔΑ-GR(N)`.
- **Fresh bulletin, stale data link**: sometimes the Greek page shows a newer bulletin date — the `Graphs-DD_MM_YYYY.xlsx` companion gets refreshed to the new date (e.g. `Graphs-20_07_2026.xlsx` alongside a stale `16_07_2026-GR.xlsx`) — while the data XLSX for that date is not linked yet. It is usually **already uploaded at a predictable URL** — probe directly (HTTP HEAD/GET) before concluding there's no new data:
  - `https://www.gov.cy/app/uploads/sites/168/YYYY/MM/DD-MONTHNAME-YYYY-UK.xlsx` (e.g. `.../2026/02/20-JULY-2026-UK.xlsx`; full uppercase English month name; the `/YYYY/MM/` path segment is the upload folder — reuse the one from the currently linked files, it does not track the report month)
  - Same name under `https://www.gov.cy/media/sites/168/YYYY/MM/` and the `-GR.xlsx` variants
- Download the latest XLSX data and save it to @data folder (filename format `DD-MMM-YYYYUK.xlsx`, e.g. `19-JUN-2026UK.xlsx`). Use Node to download the XLSX file (not Curl) and parse it. DON'T continue until you downloaded the latest data file
- Create a new datafile in the app based on the downloaded data.
- Make sure that the app builds with the latest changes, commit them to Git and push to the origin
- After push, send the latest community post to Telegram (see **Telegram delivery** below)
- Exit once done

## Cloud runs (the "Fragmata data update" routine)

The update also runs unattended in the cloud: a Vercel cron job checks the gov.cy pages
every 10 minutes and fires this routine when a newer bulletin appears (see
`CLOUD-AUTOMATION.md`).
A cloud session is a **fresh checkout**, so anything gitignored is simply absent —
`community/`, `logs/`, `.env.local`, and all of `scripts/` except `scripts/og/`.
When those files are missing, you are in a cloud run: apply these overrides.

- **Install first**: `corepack enable && pnpm install --frozen-lockfile`. Retry once on registry failure.
- **The fire payload**: the `<routine-fire-payload>` block carries `detected_bulletin_date`
  and the `deployed_dataset` the cron compared against. Treat the date as a hint that saves
  you a lookup — still confirm it against the pages, and if the data XLSX for it isn't
  linked yet, probe the predictable URLs (see the stale-link note above).
- **Narrative context** replaces reading `community/TELEGRAM.md`:
  ```bash
  curl -s -H "Authorization: Bearer $INTERNAL_API_SECRET" \
    "https://fragmata.info/api/internal/narrative?limit=6"
  ```
  Returns the recent datasets' `getSummaryChanges` narratives in all three languages,
  newest first, plus `daysSinceLatest` — use that for the major/minor post rule.
- **Telegram** replaces `tsx scripts/post-telegram.ts`:
  ```bash
  curl -s -X POST "https://fragmata.info/api/internal/telegram" \
    -H "Authorization: Bearer $INTERNAL_API_SECRET" \
    -H "Content-Type: application/json" \
    -d @post.json   # {"text": "<the Telegram post body>"}   add "dryRun": true to preview
  ```
  Write the body to a temp JSON file rather than inlining it, to avoid shell-quoting
  problems. Expect `{"ok":true,"messageId":…,"chatId":…}`; a 422 means the post exceeds
  Telegram's 4096-char limit — shorten it and retry. Retry once on a network failure.
- **Don't write `community/*.md`** — untracked, so the edit is lost when the session ends.
  Print the exact Telegram post text plus the returned `messageId` in your final report
  instead; that report is the record.
- **Push straight to `main`** — Vercel deploys from it, which is what closes the loop and
  stops the cron from firing again for the same bulletin.

## Best Practices to Avoid Issues

**Inline Node.js in Bash:**

- Use single quotes around the entire `-e` script to prevent bash variable substitution issues
- Reference objects/arrays with proper syntax: `jsonData[i][j]` works, but avoid template expressions
- Test extraction logic with simple console.logs before building complex transformations
- **Make the script exit cleanly.** Node keeps running until the event loop drains, and an idle keep-alive socket to gov.cy can hold it open long past the point where all output has printed — the process then gets reaped by the Bash timeout and mislabeled as "hung." Two guards, use both:
  - Send `"Connection": "close"` in the request headers so sockets don't linger.
  - End the top-level async IIFE with `.then(() => process.exit(0), e => { console.error(e); process.exit(1); })` so the process terminates the moment its work is done. (All `console.log`s have already run by then, so nothing is lost.)

**File Creation:**

- Never create temporary script files (like parse-xlsx.js) - always use inline bash commands
- Keep all ad-hoc scripts as one-liners or multi-line inline bash, not separate files

 **Data Module Creation:**

- Follow existing data-*.ts patterns exactly
- Ensure all 21 reservoirs are included with correct regional assignments
- Compare to the latest previous dataset available
- Update dataManager.ts imports AND availableDataSets array AND default dataset ID

**Historical Storage Data (`historicalStorageData.ts`):**

The historical heatmap chart uses `src/utils/historicalStorageData.ts` — it must be updated alongside each new data module or the chart will stop at the previous date.

- Add a new entry to the `historicalStorageData` array with the current storage amounts from the new data module
- Use the format: `{ date: "YYYY-MM-DD", kouris: X, kalavasos: X, ... , totalSCP: X, totalAll: X }`
- `totalSCP` = sum of Southern Conveyor reservoirs (kouris, kalavasos, lefkara, dipotamos, germasoyeia, arminou, polemidia, achna)
- `totalAll` = sum of all 21 reservoirs
- The storage values come from each reservoir's `storage.current.amount` in the new data module

**Narrative coherence** — the `getSummaryChanges` text, articles, and community posts are all part of one evolving story. Before writing any of them:
- Read the recent entries in `community/TELEGRAM.md` and the latest `getSummaryChanges` to understand the current narrative arc (cloud runs: the narrative endpoint above returns the same `getSummaryChanges` history)
- Each new update should advance the story — reference what changed since the last post, build on previous milestones, and avoid restating old news as if it's new
- Let the data drive the narrative: when the situation shifts (e.g. a drought easing, a new region recovering, a plateau forming), the tone and focus should shift with it
- Keep all three outputs consistent — they can differ in length and format but should not contradict each other or tell different stories
- Articles or community posts with future dates are pre-scheduled drafts — ignore them when determining the current narrative state

**Summary / Recent Changes (`getSummaryChanges`):**

- For comparison use the date 7-10 days away
- Keep it concise — highlight only notable or important changes, not every region or reservoir
- Lead with overall storage change (percentage and MCM)
- Mention notable individual reservoir movements (large swings, transfers, overflows) — skip small incremental changes
- **Link dam names to their detail pages**: every dam name mentioned in the text (both bold and non-bold, including inline references like transfers) should be a markdown link to its detail page:
  - English: `[Kouris](/dam/kouris/)`, `[Arminou](/dam/arminou/)→[Kouris](/dam/kouris/)`
  - Greek: `[Κούρης](/el/dam/kouris/)`, `[Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/)`
  - Russian: `[Курис](/ru/dam/kouris/)`, `[Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/)`
  - Use the English slug from `DAM_SLUG_MAP` in `src/utils/slugs.ts` (e.g., `agia-marina`, `klirou-malounta`)
  - The locale prefix is: none for `en`, `/el` for Greek, `/ru` for Russian
- Search the web for Cyprus water/reservoir/drought news from the past week and incorporate relevant context (government plans, drought status, weather events)
- Add up to 3 media article links at the end under an "In the media" / "Στα μέσα" section
- Write both English, Russian and Greek versions with the same structure
- Tone: informative and factual, not verbose

**Per-Dam Summaries (`getDamSummary`):**

Each data module should export a `getDamSummary(damName, language)` function that returns a short 1-2 sentence summary for each of the 21 dams. These are displayed as subtitles on dam pages and used as SEO meta descriptions.

- Write concise, single-line summaries (110–155 characters for SEO — not shorter, or Google will substitute its own snippet; not longer, or it will be truncated)
- Include: current fill %, storage in MCM, year-over-year comparison
- Highlight notable conditions: at full capacity, critically low, transfers, dramatic recovery, new annual max
- Support all 3 languages (`'en' | 'el' | 'ru'`)
- Return `string | null` — return `null` if dam name not found
- Follow the pattern in `data-20-MAR-2026.ts` as reference
- The function is exposed via `dataManager.ts` (`getDamSummary` wrapper) — no changes needed there, it auto-detects the function

**Telegram delivery:**

(Local runs. In a cloud run the script isn't in the checkout — POST to the relay endpoint
in **Cloud runs** above instead.)

After the git push, send the Telegram version of the community post you just wrote by piping it into the CLI:

```bash
tsx scripts/post-telegram.ts <<'EOF'
<paste the exact text that belongs inside the ### Telegram code fence in community/TELEGRAM.md>
EOF
```

(`tsx` is expected to be on the user's PATH — installed globally via `pnpm add -g tsx`.)

- The script reads the message from stdin and POSTs it via the Telegram Bot API — it does not parse `TELEGRAM.md` itself; you pass the text
- It auto-loads `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` from `.env.local` at the repo root (gitignored)
- Currently posts to the user's DM with the bot; user forwards to the channel manually. To switch to direct channel posting later, either change `TELEGRAM_CHAT_ID` to the channel's `@handle` or pass `--chat-id @handle` (bot must be an admin there)
- Use `--dry-run` to print the length and preview without sending
- The script prints the returned `message_id` and `chat_id` on stdout — capture them

**After a successful send**, record the identifiers inside `community/TELEGRAM.md` so a later edit or delete can target the right message:

- Add a visible one-line annotation directly under the `### Telegram` heading of the post you just sent (above the opening ``` fence), in this exact format:
  ```
  ### Telegram
  Sent: message_id=<id>, chat_id=<chat_id>, at=<YYYY-MM-DDTHH:MM:SSZ>
  ```
  `` ``` ``
  ...message text...
  `` ``` ``
- Use the exact `message_id` and `chat_id` printed by the script, and the current UTC timestamp for `at=`
- `community/` is gitignored — the annotation stays in the local file; no commit needed
- If the send fails, skip this step — nothing to record

**News Ticker Refresh:**

The dashboard has a scrolling news ticker showing recent water crisis articles. Keep it current on each data update:

- Search the web for recent Cyprus water/reservoir/drought articles in all three languages (EN, EL, RU)
- Update `src/utils/newsArticles.ts` — add new articles following the existing `{ title, url, lang, source }` format
- Update `NEWS.md` to keep it in sync (grouped by language: English, Russian, Greek)
- Keep the list reasonable — cap at ~10 articles per language, removing older or less relevant ones
- Prefer articles from established Cyprus outlets (Cyprus Mail, Politis, AlphaNews, Европа Кипр, Вестник Кипра, etc.)

**Community Post (`community/TELEGRAM.md` + `community/WHATSAPP.md`):**

After each data update, append a new community post entry to both `community/TELEGRAM.md` and `community/WHATSAPP.md`. Each entry carries the same `## <date>` heading and summary line in both files, followed by that platform's code block (`### Telegram` in TELEGRAM.md, `### WhatsApp` in WHATSAPP.md).

- **Schedule**: Major updates on Mon/Wed/Fri, minor updates on Tue/Thu. If more than 1 day has passed since the last data update, always do a major update regardless of day.
- **Determining the last update**: Check the last `## March XX` heading in `community/TELEGRAM.md` to find when the previous post was made. In a cloud run that file doesn't exist — use `daysSinceLatest` from the narrative endpoint.

**Minor data updates** (📊):
- Headline: total storage % and MCM, delta from previous update (e.g. "up from 26.9% yesterday")
- 24-hour inflow: total across all dams, plus the top 2-3 individual dam inflows
- Bullet points: only notable changes since previous update — new season highs, milestones (crossing round numbers like 30%), large pp swings (>1pp), transfers, unchanged laggards
- Show pp deltas in parentheses (e.g. "+1.3pp") for reservoirs that moved significantly
- End with gap vs last year and dashboard link
- Keep concise — 6-8 bullet points max

**Major updates** (📰):
- Used when publishing an article or after a gap of >1 day
- Narrative summary paragraph describing what happened
- Detailed bullet points with context (year-over-year comparisons, multi-day trends)
- Include article link if one was published, plus dashboard link
- Can reference previous articles/predictions when relevant

**Headline total calculation**: Exclude Recharge/Other dams (Tamassos, Klirou-Malounta, Solea) from the headline storage % and MCM — this matches the dashboard. Individual Recharge dams can still appear in bullet points.

**Platform formatting** — one code block per file:

Telegram (`### Telegram`):
- Plain text, no markdown formatting (asterisks show literally when pasted)
- Use `•` for bullets
- Bold is applied manually after pasting (select + Cmd+B)
- 📊 or 📰 emoji prefix on the first line
- End with `🔗 https://fragmata.info`

WhatsApp (`### WhatsApp`):
- Wrap key numbers and headings in `*asterisks*` for native bold rendering
- Use `•` for bullets
- 📊 or 📰 emoji prefix on the first line
- End with `🔗 https://fragmata.info`

**What to highlight** — let the data decide, don't repeat a fixed list of dams:
- Compare today's data vs previous update: pick the largest pp and MCM movers
- Milestones: crossing round-number thresholds (e.g. 30%, 50%, 100%), first-time events (exceeding last year, overflowing)
- Extremes: dams at 100% or near 0%, dramatic year-over-year ratios
- Active transfers between dams (if `waterTransferred` changed)
- Aim for variety across posts — rotate which dams get mentioned rather than always leading with the same ones
- Use `×` (multiplication sign) not `x` for multipliers
