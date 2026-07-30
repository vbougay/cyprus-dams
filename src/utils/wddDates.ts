/**
 * Date parsing for the WDD bulletin check (`app/api/cron/check-wdd`).
 *
 * Ported from `scripts/watch-wdd.sh`, which polled the same two gov.cy pages
 * from a laptop. Everything in this module is deterministic string work — no
 * network, no clock — so the cron route stays trivial to reason about.
 */

const MONTH_ABBR: readonly string[] = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

/**
 * Date-bearing XLSX links on a gov.cy reservoir page. Two naming schemes have
 * been used for the data file:
 *   - `DD-MONTHNAME-YYYY-UK.xlsx`, e.g. `23-JUNE-2026-UK.xlsx` (current, since ~23-JUN-2026)
 *   - `DD_MM_YYYY-UK.xlsx`,        e.g. `19_06_2026-UK.xlsx`   (older)
 * (`-GR` variants on the Greek page.) The `Graphs-DD_MM_YYYY.xlsx` companion
 * counts as a date signal too: the Greek page sometimes refreshes it to the new
 * bulletin date *before* the data XLSX for that date is linked, which makes it
 * the earliest notice we get that a bulletin exists.
 */
const XLSX_DATE_RE =
  /(?:(\d{1,2}[-_][0-9A-Za-z]+[-_]\d{4})-(?:UK|GR)|Graphs-(\d{1,2}_\d{1,2}_\d{4}))\.xlsx/gi;

export interface WddDate {
  /** Canonical dataset id, e.g. `30-JUL-2026` — the form used by `availableDataSets`. */
  id: string;
  /** UTC midnight, in ms. Only used for ordering. */
  epoch: number;
}

function toWddDate(day: number, monthIndex: number, year: number): WddDate | null {
  if (!Number.isInteger(day) || !Number.isInteger(year)) return null;
  if (day < 1 || day > 31) return null;
  if (monthIndex < 0 || monthIndex > 11) return null;
  if (year < 2000 || year > 2100) return null;

  const epoch = Date.UTC(year, monthIndex, day);
  // Date.UTC silently rolls impossible dates over (31_02 -> 03 Mar); reject those.
  if (new Date(epoch).getUTCDate() !== day) return null;

  return { id: `${String(day).padStart(2, '0')}-${MONTH_ABBR[monthIndex]}-${year}`, epoch };
}

/**
 * Parse a filename date token or a dataset id into canonical form.
 * Accepts `19_06_2026`, `23-JUNE-2026` and `29-JUL-2026`.
 */
export function parseDateToken(token: string): WddDate | null {
  const parts = token.split(/[-_]/);
  if (parts.length !== 3) return null;

  const [dayPart, monthPart, yearPart] = parts;
  const monthIndex = /^\d+$/.test(monthPart)
    ? Number(monthPart) - 1
    : MONTH_ABBR.indexOf(monthPart.slice(0, 3).toUpperCase());

  return toWddDate(Number(dayPart), monthIndex, Number(yearPart));
}

/** Newest bulletin date linked across the given page bodies, or null if none parse. */
export function newestWddDate(pages: string[]): WddDate | null {
  let newest: WddDate | null = null;

  for (const html of pages) {
    for (const match of html.matchAll(XLSX_DATE_RE)) {
      const token = match[1] ?? match[2];
      const parsed = token ? parseDateToken(token) : null;
      if (parsed && (!newest || parsed.epoch > newest.epoch)) newest = parsed;
    }
  }

  return newest;
}
