# Session Log

## 2026-07-30 — Session `95bccc2b-06cf-492a-a10e-5c0ab52038ea`

- Moved the data watcher off the laptop: `scripts/watch-wdd.sh` (5-min poll + local `claude -p`) replaced by Vercel Cron → in-app check → `/fire` on the user's existing "Fragmata data update" routine
- Verified the two contracts the design rested on from docs: `POST /v1/claude_code/routines/{id}/fire` (bearer + `experimental-cc-routine-2026-04-01` beta header, `text` arrives wrapped in an untrusted `<routine-fire-payload>` block the saved prompt must opt into) and Vercel's cron limits (Hobby = daily only, Pro = per-minute)
- Audited the existing routine (`trig_01QjK5oSx5c9vib3qxwNYmpC`) and found 5 blockers to cloud operation: cloud env network is allowlist-only (gov.cy would 403), `scripts/post-telegram.ts` and `community/` are both gitignored so absent from a fresh checkout, output branch pointed at a `claude/*` branch (nothing deploys → repeat firing), and no `.env.local` for the bot token
- User chose: Pro cadence, push straight to `main`, and a relay route so the Telegram token stays in Vercel
- Built [check-wdd/route.ts](app/api/cron/check-wdd/route.ts) (fetch both gov.cy pages, compare to the deployed dataset, fire only when newer) + [wddDates.ts](src/utils/wddDates.ts) (both filename schemes + the `Graphs-*` early signal), [internal/telegram](app/api/internal/telegram/route.ts), [internal/narrative](app/api/internal/narrative/route.ts) (serves committed `getSummaryChanges` history as continuity for gitignored `community/`), [internalAuth.ts](src/utils/internalAuth.ts), [vercel.json](vercel.json)
- Chose hourly (`17 5-15 * * *`) over 30-min after measuring real run durations from `logs/watch-wdd-*.log` (7–10 min), paired with a push guard that reads `dataManager.ts` from `main` — closes the push→deploy window so two sessions can't race one bulletin; fails closed when GitHub is unreachable
- Verified before shipping: live parsing → `29-JUL-2026` (Greek `ΔΕΛΤΙΟ_ΝΕΡΟΥ_DASHBOARD` file correctly ignored, `31_02_2026` rejected, stale-data/fresh-Graphs case picks the newer date), route 401s without the secret, push guard, narrative (real trilingual summaries), Telegram dry-run, clean build, no new lint findings
- Set 5 production env vars via the Vercel CLI — 2 generated with `openssl rand -hex 32`, Telegram creds piped from `.env.local`, no value printed; left `CLAUDE_ROUTINE_TOKEN` for the user rather than handling a live token
- Rewrote the routine prompt to explicitly opt into the fire payload and point at the skill's new "Cloud runs" section; committed [a85ceb2](https://github.com/vbougay/fragmata.info/commit/a85ceb251a771e69bb0041315e5228b6995c560d) and pushed
- Live smoke test confirmed gov.cy serves Vercel's serverless IPs with the browser UA (`pagesFetched: 2`) — the one assumption that would have forced a proxy redesign
- Forced test run behaved correctly: no dataset commit, no Telegram post (nothing newer than the deployed bulletin), and the routine pushed a real skill fix of its own — Node holding the event loop open on an idle gov.cy keep-alive socket and being mislabeled as hung
- Caught a regression where editing the routine in the web UI reset its output branch to a generated `claude/*` name (silently stops runs from deploying); restored `main`, kept the user's new environment + Sonnet model, and documented the trap in [CLOUD-AUTOMATION.md](CLOUD-AUTOMATION.md) ([6ed86f7](https://github.com/vbougay/fragmata.info/commit/6ed86f7))
- Corrected a command in that runbook that implied the routine's `/fire` token works against the trigger-management endpoint — it doesn't; the update went through the claude.ai OAuth path
- Open: no run has yet exercised the path where new data exists (commits a dataset + posts to Telegram) — that waits on the next real bulletin; `watch-wdd.sh` stays available until then. Also noted claude.ai session URLs 403 to both curl and WebFetch, so run logs can't be read from the CLI

---

## 2026-07-07 — Session `db8ee96f-1b65-4b72-977d-61a90c6e54ea`

- Investigated why OG images don't show in Google search results; verified the OG setup is actually **correct** (og:image → 200, image/png, 1200×630, absolute, all locales) — the premise was a category confusion
- Diagnosed the real cause: og:image is a social-sharing signal Google Search largely ignores for SERP thumbnails; Google uses crawlable raster `<img>` + structured-data `image`, and the site had **neither** (0 `<img>`, 83 `<svg>`; no `image` in any JSON-LD; article pages emitted **zero** structured data)
- Fix #1 — [page.tsx](app/[locale]/page.tsx): added `image` to the homepage `WebApplication` + `Dataset` nodes, pointing at the per-locale `/og/dashboard.{locale}.png` (`?v=` cache-busted)
- Fix #2 — [dam/[slug]/page.tsx](app/[locale]/dam/[slug]/page.tsx): restructured JSON-LD into a `@graph` with a `WebPage` node (`image` + `primaryImageOfPage`) that renders **always** (previously the whole block was gated on `damSummary`), plus the existing FAQ when available
- Fix #3 — [articles/[slug]/page.tsx](app/[locale]/articles/[slug]/page.tsx): added a full `Article` JSON-LD (headline, image, datePublished, author, publisher+logo `/icon-640.png`, mainEntityOfPage) where there was none — also earns Article rich-result eligibility
- Verified in local dev: all three page types emit valid JSON-LD with `image`, all referenced images resolve 200 image/png, no server errors
- Flagged the caveat that SERP thumbnails stay algorithmic/mostly-mobile and never guaranteed, but the missing precondition is now in place; recommended deploy + Rich Results Test + re-index

---

## 2026-07-07 — Session `017129bc-f7f8-4c4b-ae60-62465f4b523d`

- Set up the `google-search-console` skill, which had been dropped in as a verbatim copy from the `pcc-local` (Parker's Crazy Cookies) project — wrong domain, and none of its pipeline (SQLite DB, sync script, deps) existed here
- Located the original working pipeline at `/Users/smartvlad/Projects/pcc-local` and replicated it for `fragmata.info`; asked the user two gating questions — chose **new service account** (separate GCP project) + **domain property** (`sc-domain:fragmata.info`)
- Installed `better-sqlite3`, `googleapis`, `commander` (date-fns already present); added a `pnpm.onlyBuiltDependencies` allowlist to [package.json](package.json) so the native binding compiles under pnpm 10
- Created the sync CLI (`sync`/`export`/`status`) and fixed two porting bugs: ESM `__dirname` (project is `"type": "module"`) and pnpm blocking the native build script
- Rewrote [SKILL.md](.claude/skills/google-search-console/SKILL.md) for fragmata.info — dropped the Parker's cookie branded-keyword section, added EN/EL/RU multilingual query guidance + Cyprus country codes, set `user-invocable: true`
- Per user request, made the skill **self-contained**: moved the script + DB + credentials all under `.claude/skills/google-search-console/`, repointed paths to `__dirname`-relative, updated `.gitignore` to ignore only the DB + credentials while keeping `gsc-sync.tsx` and `SKILL.md` tracked
- Installed the user's service-account key (`gsc-access@fragmata-info.iam.gserviceaccount.com`) and ran the first sync: 89 days backfilled, 32,514 page-level + 14,093 query-level rows; verified multilingual capture (English, Greek `πληρότητα φραγμάτων σημερα`, brand terms) and flagged a CTR opportunity (Greek term at 13.2k impressions / 3.49% CTR, pos 6.1)

---

## 2026-07-07 — Session `2ef0a8b8-ae4a-47e1-b9bd-159576e02f78`

- Ran an SEO analysis from GSC data (last 30d, via the `google-search-console` skill) focused on the Cypriot Greek audience; found Greek is already the biggest segment (16.8k impressions, 67% of total) but converts worst — `/el` ranks pos 3.9 yet gets 5.77% CTR vs the English homepage's 13.09% at pos 3.8
- Root cause: title/description were static and never surfaced the live fill % that `πληρότητα φραγμάτων σημερα`-type queries demand
- Fix #1 — made `generateMetadata` in [layout.tsx](app/[locale]/layout.tsx) inject the live total fill % + report date into title/description/OG/Twitter per locale (`.` decimals for en, `,` for el/ru via `toLocaleString`), with a safe fallback to the static copy; e.g. el title now `Φράγματα Κύπρου: 41,4% Πληρότητα Σήμερα | Fragmata`
- Fix #2 — promoted the keyword-rich subtitle to the homepage `<h1>` (was the SEO-dead "Fragmata" wordmark) in [Header.tsx](src/components/Header.tsx); pure semantic tag swap, zero visual change, kept wording per user; verified sub-pages keep their own single `<h1>`
- Verified all three locales in the local dev preview (title/desc/H1 render correctly, layout pixel-identical, no new console errors)
- Investigated then **retracted** two hypotheses after user pushback + evidence: dam pages have strong crawlable internal linking (35 SSR links / 21 unique from homepage, footer, table, cards, sitemap) and already carry per-language data summaries — so page-2 bare-name rankings (`kouris dam` pos 7.5) are an intent/encyclopedic-competition issue, not a deficiency; concluded dam pages are well-built and left them alone
- Net deliverable: one high-value metadata change shipped + verified; recommended deploying and watching whether `/el` CTR climbs toward 13%

---

## 2026-07-06 — Session `2f829eff-d759-4806-b07b-b98be75453db`

- Investigated backfilling missing historical levels for the recharge/other dams (Tamassos, Klirou-Malounta, Solea) in [historicalStorageData.ts](src/utils/historicalStorageData.ts); found the `cyprus-water.appspot.com` API only tracks 17–18 dams and has none of the three
- User supplied `dams.wdd.moa.gov.cy/api/historical/storage?dam=…`; verified it matches our existing pre-2021 data exactly (170/170 dates) but has the same 2021–2025 gap — only two real anchor readings (2024-01-01, 2025-01-01) exist, which I backfilled; the rest is genuinely unreported (WDD `/api/data` monthly is forward-filled, not real)
- Mapped the full WDD API surface (`/api/latest`, `/api/data`, `/api/month`, `/api/daily`, `/api/pipelines`, `/api/transfers`, `/api/historical/storage`, `/api/historical/project-storage`); noted name-spelling differences (Germasogeia/Tamasou/Klirou)
- Built a Dam Facts feature: new [damMetadata.ts](src/utils/damMetadata.ts) (year/height/river/type/size for all 21 dams from WDD) + [DamFacts.tsx](src/components/DamFacts.tsx), wired into dam detail pages below the StatCardGrid, with en/el/ru labels + dam-type translations; iterated layout to a single centered, responsive horizontal row (no scrollbar)
- Researched interesting facts for all 21 dams via 6 parallel subagents; corrected two disputed build years per user (Lefkara→1973, Solea→2013) with source-note comments
- Created a trilingual educational article "The Anatomy of a Cyprus Dam" ([content/articles/2026-07-06-anatomy-of-cyprus-dams/](content/articles/2026-07-06-anatomy-of-cyprus-dams/) en/el/ru) — dam-type explainer, 3 deep-dives (Kouris/Asprokremmos/Germasoyeia), an all-21 roundup, and `dam-card`/`heatmap` embeds; registered in [articles.ts](src/utils/articles.ts)
- Fixed the article dam-card embed stretching full-width: added a `wideDetails` prop to [ReservoirCard.tsx](src/components/ReservoirCard.tsx) that lays Inflow/History/Restrictions out in 3 horizontal columns on wide screens (via [ArticleClient.tsx](src/components/ArticleClient.tsx)), leaving region-grid cards untouched
- Reread and rewrote the RU/EL article bodies to remove English calques (e.g. "punch above their weight", "workhorses", "loses to the sky") and fixed a stray soft-hyphen in "Мавроколимбос"; verified 3 embeds + 28 links parity across all locales, all routes 200

---

## Archives

- [2026-06](SESSION-LOG-2026-06.md) — 3 sessions
- [2026-04](SESSION-LOG-2026-04.md) — 3 sessions
