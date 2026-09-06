/**
 * Derived statistics for the El Niño article.
 *
 * Rainfall × ENSO comes from the static `ENSO_RAIN` table (NOAA ONI joined to
 * the DoM island-mean rainfall series). Dam refill is computed here from the
 * historical storage series so it moves with the dataset like the other
 * article figures.
 *
 * Phase rule: NOAA CPC's ±0.5 °C threshold applied to the NDJ season of each
 * hydro-year (CPC's official episode list additionally requires five
 * consecutive seasons; the single-season rule is stated in the article).
 */

import { ENSO_RAIN, EnsoYear } from './ensoData';
import { historicalStorageData } from './historicalStorageData';
import { mainTotal } from './summerStats';
import { yearlyInflowData } from './dataManager';

export type Phase = 'nino' | 'nina' | 'neutral';

export const phaseOf = (ndj: number): Phase =>
  ndj >= 0.5 ? 'nino' : ndj <= -0.5 ? 'nina' : 'neutral';

export const STRONG_NINO = 1.5;

const mean = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length;
const median = (a: number[]) => {
  const s = [...a].sort((x, y) => x - y);
  const h = s.length >> 1;
  return s.length % 2 ? s[h] : (s[h - 1] + s[h]) / 2;
};

export function pearson(xs: number[], ys: number[]): number {
  const mx = mean(xs), my = mean(ys);
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < xs.length; i++) {
    const dx = xs[i] - mx, dy = ys[i] - my;
    sxy += dx * dy; sxx += dx * dx; syy += dy * dy;
  }
  return sxy / Math.sqrt(sxx * syy);
}

/** Least-squares line y = a + b·x. */
export function fitLine(xs: number[], ys: number[]): { a: number; b: number } {
  const mx = mean(xs), my = mean(ys);
  let sxy = 0, sxx = 0;
  for (let i = 0; i < xs.length; i++) { sxy += (xs[i] - mx) * (ys[i] - my); sxx += (xs[i] - mx) ** 2; }
  const b = sxy / sxx;
  return { a: my - b * mx, b };
}

export interface PhaseSummary { phase: Phase; n: number; mean: number; median: number; below80: number; above120: number }

export interface RainStats {
  rows: EnsoYear[];
  r: number;
  line: { a: number; b: number };
  byPhase: Record<Phase, PhaseSummary>;
  strongNinos: EnsoYear[];
  strongNinoMean: number;
  driest: EnsoYear;
  wettest: EnsoYear;
}

export function rainStats(): RainStats {
  const rows = ENSO_RAIN;
  const xs = rows.map(r => r.ndj), ys = rows.map(r => r.pct);
  const byPhase = {} as Record<Phase, PhaseSummary>;
  for (const phase of ['nino', 'nina', 'neutral'] as Phase[]) {
    const g = rows.filter(r => phaseOf(r.ndj) === phase).map(r => r.pct);
    byPhase[phase] = { phase, n: g.length, mean: mean(g), median: median(g),
      below80: g.filter(v => v < 80).length, above120: g.filter(v => v >= 120).length };
  }
  const strongNinos = rows.filter(r => r.ndj >= STRONG_NINO);
  return {
    rows, r: pearson(xs, ys), line: fitLine(xs, ys), byPhase, strongNinos,
    strongNinoMean: mean(strongNinos.map(r => r.pct)),
    driest: rows.reduce((p, c) => (c.pct < p.pct ? c : p)),
    wettest: rows.reduce((p, c) => (c.pct > p.pct ? c : p)),
  };
}

export interface RefillRow {
  year: number;         // hydro-year start (Oct)
  ndj: number;
  phase: Phase;
  low: number;          // autumn minimum, main dams, MCM
  lowDate: string;
  peak: number;
  peakDate: string;
  refill: number;
}

/** Autumn minimum (Oct–Jan) → following peak, per hydro-year, 18 main dams. */
export function refillByYear(): RefillRow[] {
  const byYear = new Map<number, { date: string; v: number }[]>();
  for (const e of historicalStorageData) {
    const v = mainTotal(e);
    if (v == null) continue;
    const Y = +e.date.slice(0, 4), M = +e.date.slice(5, 7);
    const hy = M >= 10 ? Y : Y - 1;
    if (!byYear.has(hy)) byYear.set(hy, []);
    byYear.get(hy)!.push({ date: e.date, v });
  }
  const oni = new Map(ENSO_RAIN.map(r => [r.year, r.ndj]));
  const out: RefillRow[] = [];
  for (const [year, a] of [...byYear.entries()].sort((x, y) => x[0] - y[0])) {
    const ndj = oni.get(year);
    if (ndj == null) continue;
    const early = a.filter(r => { const M = +r.date.slice(5, 7); return M >= 10 || M <= 1; });
    if (!early.length) continue;
    const lo = early.reduce((p, c) => (c.v < p.v ? c : p));
    const pk = a.filter(r => r.date >= lo.date).reduce((p, c) => (c.v > p.v ? c : p));
    out.push({ year, ndj, phase: phaseOf(ndj), low: lo.v, lowDate: lo.date, peak: pk.v, peakDate: pk.date, refill: pk.v - lo.v });
  }
  return out;
}

export interface RefillStats {
  rows: RefillRow[];
  r: number;
  byPhase: Record<Phase, { n: number; mean: number; median: number }>;
  best: RefillRow[];
  worst: RefillRow[];
}

export function refillStats(): RefillStats {
  const rows = refillByYear();
  const byPhase = {} as RefillStats['byPhase'];
  for (const phase of ['nino', 'nina', 'neutral'] as Phase[]) {
    const g = rows.filter(r => r.phase === phase).map(r => r.refill);
    byPhase[phase] = { n: g.length, mean: mean(g), median: median(g) };
  }
  const sorted = [...rows].sort((x, y) => y.refill - x.refill);
  return { rows, r: pearson(rows.map(r => r.ndj), rows.map(r => r.refill)), byPhase,
    best: sorted.slice(0, 5), worst: sorted.slice(-5).reverse() };
}

export interface InflowRow { season: string; year: number; ndj: number; phase: Phase; total: number }

/** WDD seasonal inflow (the 11-season table) tagged with the ENSO phase. */
export function inflowByPhase(dataSetId?: string): InflowRow[] {
  const oni = new Map(ENSO_RAIN.map(r => [r.year, r.ndj]));
  return yearlyInflowData(dataSetId).flatMap(y => {
    const year = 2000 + +y.year.slice(0, 2);
    const ndj = oni.get(year);
    return ndj == null ? [] : [{ season: y.year, year, ndj, phase: phaseOf(ndj), total: y.total }];
  });
}
