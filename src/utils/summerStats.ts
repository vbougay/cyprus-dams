/**
 * Derived statistics for the "last week of summer" analysis.
 *
 * Everything here is computed from the historical series and the selected
 * dataset at call time — nothing is hard-coded to a particular bulletin. Point
 * an article at a newer `dataSetId` and every figure and chart moves with it.
 *
 * All storage figures use the 18 MAIN_RES_KEYS dams (recharge reservoirs
 * excluded), the same basis as the site's headline percentage.
 */

import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';
import { MAIN_RES_KEYS } from './forecastEngine';
import { reservoirData, yearlyInflowData } from './dataManager';
import { parseReportDate } from './reservoirUtils';

const DAY = 86400000;

/** Total across the 18 main dams for one historical reading; null if incomplete. */
export function mainTotal(e: HistoricalStorageEntry): number | null {
  if (e.totalAll == null) return null;
  let sum = 0;
  for (const k of MAIN_RES_KEYS) {
    const v = e[k] as number | null | undefined;
    if (v != null) sum += v;
  }
  return sum;
}

const ts = (isoDate: string) => Date.parse(isoDate + 'T00:00:00Z');

/** Readings that have a usable main-dam total, ascending by date. */
function series(): { date: string; t: number; v: number }[] {
  const out: { date: string; t: number; v: number }[] = [];
  for (const e of historicalStorageData) {
    const v = mainTotal(e);
    if (v != null) out.push({ date: e.date, t: ts(e.date), v });
  }
  return out;
}

/**
 * Reading nearest a given month/day in `year`, within `maxDays`.
 *
 * Default window is 16 days, not ~7-8: pre-2014 readings sit on a bi-monthly
 * grid (1st and 15th), whose widest gap is ~17 days (e.g. 15th to next 1st in
 * a 31-day month). A window anchored to today's report date must clear half
 * that gap with margin, or it silently returns no match for older years once
 * the report date drifts away from the 21st — as happened when a 24 August
 * bulletin (9 days from the 15th) fell outside a 7-day window and quietly
 * dropped every pre-2025 year from a drawdown comparison.
 */
function nearest(year: number, month: number, day: number, maxDays = 16) {
  const target = Date.UTC(year, month - 1, day);
  let best: { date: string; t: number; v: number } | null = null;
  let bestDiff = Infinity;
  for (const r of series()) {
    const diff = Math.abs(r.t - target) / DAY;
    if (diff < bestDiff && diff <= maxDays) { bestDiff = diff; best = r; }
  }
  return best;
}

/** Resolve a dataset id ("21-AUG-2026") to a calendar reference point. */
export function referencePoint(dataSetId?: string): { year: number; month: number; day: number } {
  const parsed = dataSetId ? parseReportDate(dataSetId) : null;
  if (parsed) return { year: parsed.year, month: parsed.month, day: parsed.day };
  const now = new Date();
  return { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1, day: now.getUTCDate() };
}

export const FIRST_YEAR = 1988;

export interface YearValue { year: number; value: number; date: string }

/**
 * Storage in each year on (or nearest to) the same calendar day as the
 * reference date — the cross-year "where does this year sit" comparison.
 */
export function endOfSummerSeries(dataSetId?: string): YearValue[] {
  const ref = referencePoint(dataSetId);
  const out: YearValue[] = [];
  for (let y = FIRST_YEAR; y <= ref.year; y++) {
    const e = nearest(y, ref.month, ref.day);
    if (e) out.push({ year: y, value: e.v, date: e.date });
  }
  return out;
}

export interface EndOfSummerStats {
  current: YearValue;
  lastYear: YearValue | null;
  mean: number;
  median: number;
  rank: number;          // 1 = wettest
  total: number;         // years compared
  mostRecentWetterYear: number | null;
  deltaVsMean: number;
  ratioVsLastYear: number | null;
}

export function endOfSummerStats(dataSetId?: string): EndOfSummerStats | null {
  const rows = endOfSummerSeries(dataSetId);
  if (!rows.length) return null;
  const current = rows[rows.length - 1];
  const lastYear = rows.find(r => r.year === current.year - 1) ?? null;
  const mean = rows.reduce((s, r) => s + r.value, 0) / rows.length;
  const sorted = [...rows].map(r => r.value).sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const desc = [...rows].sort((a, b) => b.value - a.value);
  const rank = desc.findIndex(r => r.year === current.year) + 1;
  const wetter = rows.filter(r => r.year < current.year && r.value > current.value);
  return {
    current,
    lastYear,
    mean,
    median,
    rank,
    total: rows.length,
    mostRecentWetterYear: wetter.length ? wetter[wetter.length - 1].year : null,
    deltaVsMean: current.value - mean,
    ratioVsLastYear: lastYear && lastYear.value > 0 ? current.value / lastYear.value : null,
  };
}

export interface DrawdownRow {
  year: number;
  start: number;   // storage on 15 June
  end: number;
  lost: number;
  rate: number;    // mln m³ per day
  pctLost: number;
}

/**
 * Summer drawdown for every year: 15 June through the reference calendar day.
 * The window is anchored to the reference date, so it stays comparable as the
 * article's dataset advances.
 */
export function summerDrawdown(dataSetId?: string): DrawdownRow[] {
  const ref = referencePoint(dataSetId);
  const out: DrawdownRow[] = [];
  for (let y = FIRST_YEAR; y <= ref.year; y++) {
    const a = nearest(y, 6, 15, 6);
    const b = nearest(y, ref.month, ref.day);
    if (!a || !b) continue;
    const days = (b.t - a.t) / DAY;
    if (days < 40) continue;
    const lost = a.v - b.v;
    out.push({ year: y, start: a.v, end: b.v, lost, rate: lost / days, pctLost: (lost / a.v) * 100 });
  }
  return out;
}

export interface DrawdownStats {
  current: DrawdownRow | null;
  lastYear: DrawdownRow | null;
  /** Rank among years that began summer at or above `threshold` (1 = slowest). */
  rankAmongStocked: number;
  stockedCount: number;
  threshold: number;
  pctRank: number;   // rank by fraction lost, 1 = gentlest
}

export function drawdownStats(dataSetId?: string, threshold = 100): DrawdownStats {
  const rows = summerDrawdown(dataSetId);
  const ref = referencePoint(dataSetId);
  const current = rows.find(r => r.year === ref.year) ?? null;
  const lastYear = rows.find(r => r.year === ref.year - 1) ?? null;
  const stocked = rows.filter(r => r.start >= threshold).sort((a, b) => a.rate - b.rate);
  const byPct = [...rows].sort((a, b) => a.pctLost - b.pctLost);
  return {
    current,
    lastYear,
    rankAmongStocked: current ? stocked.findIndex(r => r.year === current.year) + 1 : 0,
    stockedCount: stocked.length,
    threshold,
    pctRank: current ? byPct.findIndex(r => r.year === current.year) + 1 : 0,
  };
}

export interface PeakRow { year: number; month: number; value: number; date: string }

/**
 * The month in which each year's reserve reached its seasonal high.
 *
 * Binned to the MONTH deliberately: readings before 2014 were taken twice a
 * month (1st and 15th), so the record cannot place a peak to the day and a
 * date-level comparison would flatter recent years, which have daily readings.
 *
 * Years in which the dams never refilled above their 1 January level are
 * excluded — they have no seasonal peak, only a January carryover.
 */
export function peakMonths(dataSetId?: string, minGain = 2): PeakRow[] {
  const ref = referencePoint(dataSetId);
  const all = series();
  const out: PeakRow[] = [];
  for (let y = FIRST_YEAR; y <= ref.year; y++) {
    const inYear = all.filter(r => r.date.startsWith(String(y)) && +r.date.slice(5, 7) <= 7);
    if (!inYear.length) continue;
    const january = inYear[0].v;
    const peak = inYear.reduce((a, b) => (b.v > a.v ? b : a));
    if (peak.v - january <= minGain) continue;      // no genuine refill
    out.push({ year: y, month: +peak.date.slice(5, 7), value: peak.v, date: peak.date });
  }
  return out;
}

export interface SummerInflowRow { season: string; value: number }

/** Inflow booked in June + July + the Aug–Sep bucket, by water year. */
export function summerInflow(dataSetId?: string): SummerInflowRow[] {
  return yearlyInflowData(dataSetId).map(y => ({
    season: y.year,
    value: (y.months.June ?? 0) + (y.months.July ?? 0) + (y.months['Aug-Sep'] ?? 0),
  }));
}

export interface DamRow {
  name: string;
  capacity: number;
  amount: number;
  percentage: number;
  lastYearPercentage: number;
  region: string;
}

/** All reservoirs, largest capacity first. */
export function damsByCapacity(dataSetId?: string): DamRow[] {
  return reservoirData(dataSetId)
    .map(r => ({
      name: r.name,
      capacity: r.capacity,
      amount: r.storage.current.amount,
      percentage: r.storage.current.percentage,
      lastYearPercentage: r.storage.lastYear.percentage,
      region: r.region,
    }))
    .sort((a, b) => b.capacity - a.capacity);
}

export interface TracePoint { doy: number; value: number; date: string }

const dayOfYear = (iso: string) =>
  Math.floor((ts(iso) - Date.UTC(+iso.slice(0, 4), 0, 1)) / DAY) + 1;

export function yearTrace(year: number): TracePoint[] {
  return series()
    .filter(r => r.date.startsWith(String(year)))
    .map(r => ({ doy: dayOfYear(r.date), value: r.v, date: r.date }));
}

export interface AutumnProjection {
  from: number;          // storage at the reference date
  medianDrop: number;
  q1Drop: number;
  q3Drop: number;
  minDrop: number;
  maxDrop: number;
  floorMedian: number;
  floorHigh: number;     // shallower drop
  floorLow: number;      // deeper drop
  sampleYears: number;
  priorYearFloor: number | null;
}

/**
 * How much further the island typically falls between the start of September
 * and the annual minimum, applied to the current reading. A precedent range
 * from the last `lookback` years, not a hydrological model.
 */
export function autumnProjection(dataSetId?: string, lookback = 11): AutumnProjection | null {
  const ref = referencePoint(dataSetId);
  const all = series();
  const drops: number[] = [];
  let priorYearFloor: number | null = null;

  for (let y = ref.year - lookback; y < ref.year; y++) {
    const sep = all.find(r => r.date >= `${y}-08-28` && r.date <= `${y}-09-08`);
    const after = all.filter(r => r.date > `${y}-09-01` && r.date <= `${y}-12-31`);
    if (!sep || !after.length) continue;
    const min = after.reduce((a, b) => (b.v < a.v ? b : a));
    drops.push(sep.v - min.v);
    if (y === ref.year - 1) priorYearFloor = min.v;
  }
  if (drops.length < 3) return null;

  drops.sort((a, b) => a - b);
  const q = (p: number) => drops[Math.min(drops.length - 1, Math.floor(p * drops.length))];
  const medianDrop = q(0.5), q1Drop = q(0.25), q3Drop = q(0.75);

  const current = endOfSummerSeries(dataSetId).slice(-1)[0];
  if (!current) return null;

  return {
    from: current.value,
    medianDrop, q1Drop, q3Drop,
    minDrop: drops[0], maxDrop: drops[drops.length - 1],
    floorMedian: current.value - medianDrop,
    floorHigh: current.value - q1Drop,
    floorLow: current.value - q3Drop,
    sampleYears: drops.length,
    priorYearFloor,
  };
}

/** Capacity of the 18 main dams, from the dataset itself. */
export function mainCapacity(dataSetId?: string): number {
  return reservoirData(dataSetId)
    .filter(r => r.region !== 'Recharge/Other')
    .reduce((s, r) => s + r.capacity, 0);
}
