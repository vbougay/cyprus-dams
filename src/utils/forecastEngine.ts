// forecastEngine.ts
//
// Cycle-aware reservoir drain date forecasting engine.
// Uses 38 years of historical storage data to:
// 1. Classify the current position in the multi-year drought-wet cycle
// 2. Build seasonal water balance profiles for dry/moderate/wet years
// 3. Simulate forward under three scenarios (drought/expected/recovery)
// 4. Produce multi-year storage trajectories and drain date estimates

import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';
import { CyclePhase, DrainForecast, ForecastTrajectoryPoint } from '../types';
import { parseReportDate } from './reservoirUtils';

// ============================================================
// Constants
// ============================================================

const FORECAST_YEARS = 10;
const MAX_ANALOGS = 6;
const RATIONING_THRESHOLD = 0.20; // Below 20% capacity, reduce outflow
const HISTORICAL_CONTEXT_MONTHS = 12; // Months of history to include in chart
const DEFAULT_RESTRICTION_PCT = 5; // Default restriction threshold percentage

// Main reservoir keys (excluding Recharge/Other: tamassos, klirouMalounta, solea)
export const MAIN_RES_KEYS: (keyof HistoricalStorageEntry)[] = [
  'kouris', 'kalavasos', 'lefkara', 'dipotamos', 'germasoyeia',
  'arminou', 'polemidia', 'asprokremmos', 'evretou', 'kannaviou',
  'mavrokolympos', 'vyzakia', 'xyliatos', 'argaka', 'pomos',
  'kalopanagiotis', 'agiaMarina', 'achna'
];

// Region → reservoir keys mapping
export const REGION_KEYS: Record<string, (keyof HistoricalStorageEntry)[]> = {
  'Southern Conveyor': ['kouris', 'kalavasos', 'lefkara', 'dipotamos', 'germasoyeia', 'arminou', 'polemidia', 'achna'],
  'Paphos': ['asprokremmos', 'kannaviou', 'mavrokolympos'],
  'Chrysochou': ['evretou', 'argaka', 'pomos', 'agiaMarina'],
  'Nicosia': ['vyzakia', 'xyliatos', 'kalopanagiotis'],
};

// Major dams shown individually in the dropdown
export const MAJOR_DAM_KEYS: (keyof HistoricalStorageEntry)[] = [
  'kouris', 'asprokremmos', 'evretou', 'kannaviou'
];

// Water year calendar months: Oct(index 0) through Sep(index 11)
const WY_CAL_MONTHS = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// ============================================================
// Data extraction helpers
// ============================================================

function sumKeys(entry: HistoricalStorageEntry, keys: (keyof HistoricalStorageEntry)[]): number {
  return keys.reduce(
    (sum, key) => sum + ((entry[key] as number | null) ?? 0), 0
  );
}

/**
 * Build a map of "YYYY-MM" → total MCM for specified reservoir keys,
 * using entries from the first few days of each month.
 */
function getMonthlyStorageForKeys(keys: (keyof HistoricalStorageEntry)[]): Map<string, number> {
  const result = new Map<string, number>();
  for (const entry of historicalStorageData) {
    const day = parseInt(entry.date.substring(8, 10));
    if (day <= 3) {
      const mapKey = entry.date.substring(0, 7);
      if (!result.has(mapKey)) {
        result.set(mapKey, sumKeys(entry, keys));
      }
    }
  }
  return result;
}

// ============================================================
// Water year profiles: monthly storage deltas from historical data
// ============================================================

interface WaterYearProfile {
  startYear: number;
  monthlyDeltas: (number | null)[]; // 12 elements: Oct..Sep
  annualNet: number;
  octStorage: number;
}

/**
 * For each water year (Oct Y → Sep Y+1), compute the monthly
 * change in total storage. This implicitly captures both inflow
 * and outflow effects.
 */
function computeWaterYearProfiles(keys: (keyof HistoricalStorageEntry)[]): WaterYearProfile[] {
  const storage = getMonthlyStorageForKeys(keys);
  const profiles: WaterYearProfile[] = [];

  for (let sy = 1988; sy <= 2025; sy++) {
    // 13 monthly storage keys: Oct(sy)..Sep(sy+1), plus Oct(sy+1)
    const monthKeys: string[] = WY_CAL_MONTHS.map(m => {
      const y = m >= 10 ? sy : sy + 1;
      return `${y}-${String(m).padStart(2, '0')}`;
    });
    monthKeys.push(`${sy + 1}-10`);

    const vals = monthKeys.map(k => storage.get(k) ?? null);
    if (vals[0] === null) continue;

    const deltas: (number | null)[] = [];
    let validCount = 0;
    for (let i = 0; i < 12; i++) {
      if (vals[i] !== null && vals[i + 1] !== null) {
        deltas.push(vals[i + 1]! - vals[i]!);
        validCount++;
      } else {
        deltas.push(null);
      }
    }
    if (validCount < 6) continue;

    const annualNet = deltas.reduce((s, d) => s + (d ?? 0), 0);
    profiles.push({ startYear: sy, monthlyDeltas: deltas, annualNet, octStorage: vals[0]! });
  }

  return profiles;
}

// ============================================================
// Scenario profiles: average monthly deltas for dry/moderate/wet years
// ============================================================

interface ScenarioProfiles {
  dry: number[];      // 12 monthly deltas
  moderate: number[];
  wet: number[];
}

function buildScenarioProfiles(wyProfiles: WaterYearProfile[]): ScenarioProfiles {
  // Use only post-1995 profiles for more comparable infrastructure
  const recent = wyProfiles
    .filter(p => p.startYear >= 1995)
    .sort((a, b) => a.annualNet - b.annualNet);

  const n = recent.length;
  const third = Math.max(1, Math.floor(n / 3));

  const dryYears = recent.slice(0, third);
  const moderateYears = recent.slice(third, n - third);
  const wetYears = recent.slice(n - third);

  function avgProfile(years: WaterYearProfile[]): number[] {
    const result = new Array(12).fill(0);
    for (let m = 0; m < 12; m++) {
      const vals = years
        .map(y => y.monthlyDeltas[m])
        .filter((v): v is number => v !== null);
      result[m] = vals.length > 0
        ? vals.reduce((s, v) => s + v, 0) / vals.length
        : 0;
    }
    return result;
  }

  return {
    dry: avgProfile(dryYears),
    moderate: avgProfile(moderateYears),
    wet: avgProfile(wetYears),
  };
}

// ============================================================
// Cycle phase classification (always uses grand total)
// ============================================================

interface OctoberReading { year: number; storage: number }

function getOctoberSeries(): OctoberReading[] {
  const storage = getMonthlyStorageForKeys(MAIN_RES_KEYS);
  const series: OctoberReading[] = [];
  for (const [key, val] of storage) {
    if (key.endsWith('-10')) {
      series.push({ year: parseInt(key.substring(0, 4)), storage: val });
    }
  }
  return series.sort((a, b) => a.year - b.year);
}

interface CycleInfo {
  phase: CyclePhase;
  yearsInPhase: number;
  analogYears: string[];
}

function classifyCycle(currentStorage: number, reportDate: string): CycleInfo {
  const octSeries = getOctoberSeries();
  if (octSeries.length < 5) {
    return { phase: 'declining', yearsInPhase: 1, analogYears: [] };
  }

  const parsed = parseReportDate(reportDate);
  // Water year start: if month >= Oct then same year, else previous year
  const wyStart = parsed
    ? (parsed.month >= 10 ? parsed.year : parsed.year - 1)
    : 2025;

  // Direction from recent 3-year trend
  const recent = octSeries.filter(r => r.year >= wyStart - 3 && r.year <= wyStart);
  const isDecline = recent.length >= 2
    ? recent[recent.length - 1].storage < recent[0].storage
    : true;

  // Find peaks and troughs
  const peaks: OctoberReading[] = [];
  const troughs: OctoberReading[] = [];
  for (let i = 1; i < octSeries.length - 1; i++) {
    const [prev, curr, next] = [
      octSeries[i - 1].storage,
      octSeries[i].storage,
      octSeries[i + 1].storage,
    ];
    if (curr > prev && curr > next) peaks.push(octSeries[i]);
    if (curr < prev && curr < next) troughs.push(octSeries[i]);
  }

  const lastPeak = peaks.filter(p => p.year <= wyStart).sort((a, b) => b.year - a.year)[0];
  const lastTrough = troughs.filter(t => t.year <= wyStart).sort((a, b) => b.year - a.year)[0];

  let phase: CyclePhase;
  let yearsInPhase: number;

  if (isDecline) {
    yearsInPhase = lastPeak ? wyStart - lastPeak.year : 1;
    const peakStorage = lastPeak?.storage ?? 200;
    phase = yearsInPhase >= 3 && currentStorage < peakStorage * 0.25
      ? 'trough'
      : 'declining';
  } else {
    yearsInPhase = lastTrough ? wyStart - lastTrough.year : 1;
    phase = yearsInPhase >= 3 && currentStorage > 200
      ? 'peak'
      : 'recovering';
  }

  // Find analog years: similar storage + direction, with recency preference
  const analogs: { year: number; distance: number }[] = [];
  for (let i = 1; i < octSeries.length; i++) {
    const yr = octSeries[i].year;
    if (yr >= wyStart - 1 || yr < 1995) continue;

    const st = octSeries[i].storage;
    const prevSt = octSeries[i - 1].storage;
    const sameDir = (prevSt > st) === isDecline;

    const dist =
      Math.abs(st - currentStorage) / 200 +
      (sameDir ? 0 : 0.4) +
      (wyStart - yr) * 0.005;

    analogs.push({ year: yr, distance: dist });
  }
  analogs.sort((a, b) => a.distance - b.distance);

  const analogLabels = analogs
    .slice(0, MAX_ANALOGS)
    .map(a => `${a.year}/${String(a.year + 1).slice(2)}`);

  return { phase, yearsInPhase, analogYears: analogLabels };
}

// ============================================================
// Multi-year scenario sequencing
// ============================================================

/**
 * Select the appropriate annual profile for a given year offset.
 * Models multi-year cycle dynamics:
 * - Drought: dry every year (worst case)
 * - Recovery: wet for 2 years then moderate (best case)
 * - Expected: remaining decline then recovery then moderate (typical cycle)
 */
function getYearProfile(
  yearOffset: number,
  scenario: 'drought' | 'expected' | 'recovery',
  phase: CyclePhase,
  yearsInPhase: number,
  profiles: ScenarioProfiles
): number[] {
  if (scenario === 'drought') return profiles.dry;
  if (scenario === 'recovery') return yearOffset < 2 ? profiles.wet : profiles.moderate;

  // Expected: model the typical cycle continuation
  // Average decline lasts ~4 years, recovery ~3 years
  const isInDecline = phase === 'declining' || phase === 'trough';
  const remainingDecline = isInDecline ? Math.max(0, 4 - yearsInPhase) : 0;

  if (yearOffset < remainingDecline) return profiles.dry;
  if (yearOffset < remainingDecline + 3) return profiles.wet;
  // After a full cycle, alternate moderate/dry to model ongoing oscillation
  const cyclePos = (yearOffset - remainingDecline - 3) % 7;
  return cyclePos < 3 ? profiles.moderate : profiles.dry;
}

// ============================================================
// Forward simulation
// ============================================================

function simulate(
  startStorage: number,
  capacity: number,
  startWYMonthIdx: number, // 0=Oct, 1=Nov, ..., 11=Sep
  scenario: 'drought' | 'expected' | 'recovery',
  phase: CyclePhase,
  yearsInPhase: number,
  profiles: ScenarioProfiles,
  totalMonths: number
): number[] {
  const trajectory: number[] = [startStorage];
  let storage = startStorage;
  let wyMonth = startWYMonthIdx;
  let yearOffset = 0;

  for (let i = 0; i < totalMonths; i++) {
    const yearProfile = getYearProfile(yearOffset, scenario, phase, yearsInPhase, profiles);
    let delta = yearProfile[wyMonth];

    // Rationing: reduce outflow when storage is critically low
    const pct = storage / capacity;
    if (delta < 0 && pct < RATIONING_THRESHOLD) {
      delta *= Math.max(0.1, pct / RATIONING_THRESHOLD);
    }

    storage = Math.max(0, Math.min(capacity, storage + delta));
    trajectory.push(storage);

    wyMonth = (wyMonth + 1) % 12;
    if (wyMonth === 0) yearOffset++;
  }

  return trajectory;
}

// ============================================================
// Historical context: recent actual storage for chart background
// ============================================================

interface HistoricalPoint {
  month: string; // "M/YYYY"
  storage: number;
}

function getRecentHistory(
  reportDate: string,
  monthsBack: number,
  keys: (keyof HistoricalStorageEntry)[]
): HistoricalPoint[] {
  const parsed = parseReportDate(reportDate);
  if (!parsed) return [];

  const storageMap = getMonthlyStorageForKeys(keys);
  const points: HistoricalPoint[] = [];

  for (let i = monthsBack; i >= 0; i--) {
    let m = parsed.month - i;
    let y = parsed.year;
    while (m <= 0) { m += 12; y--; }

    const key = `${y}-${String(m).padStart(2, '0')}`;
    const storage = storageMap.get(key);
    if (storage !== undefined) {
      points.push({ month: `${m}/${y}`, storage: Math.round(storage * 10) / 10 });
    }
  }

  return points;
}

// ============================================================
// Main entry point: parameterized forecast
// ============================================================

// Cache to avoid recomputing on every call (keyed by inputs)
let cachedResult: { key: string; forecast: DrainForecast } | null = null;

/**
 * Calculate a forecast for a given set of reservoir keys.
 * @param currentStorage - current total storage (MCM) for the selected reservoirs
 * @param capacity - total capacity (MCM) for the selected reservoirs
 * @param reportDate - dataset ID / report date string
 * @param reservoirKeys - which reservoir keys to use for historical profiles
 * @param restrictionThresholdPct - % of capacity that triggers water restrictions (default 10)
 */
export function calculateForecast(
  currentStorage: number,
  capacity: number,
  reportDate: string,
  reservoirKeys: (keyof HistoricalStorageEntry)[],
  restrictionThresholdPct: number = DEFAULT_RESTRICTION_PCT
): DrainForecast {
  const restrictionThresholdMCM = capacity * restrictionThresholdPct / 100;

  // Check cache
  const cacheKey = `${currentStorage.toFixed(1)}_${capacity.toFixed(1)}_${reportDate}_${reservoirKeys.join(',')}_${restrictionThresholdPct}`;
  if (cachedResult && cachedResult.key === cacheKey) {
    return cachedResult.forecast;
  }

  // Handle edge case: already below restriction threshold
  if (currentStorage <= restrictionThresholdMCM) {
    const emptyForecast: DrainForecast = {
      drought: 'Already Empty',
      expected: 'Already Empty',
      recovery: 'Already Empty',
      droughtRestriction: 'Already Restricted',
      expectedRestriction: 'Already Restricted',
      recoveryRestriction: 'Already Restricted',
      restrictionThresholdPct,
      restrictionThresholdMCM,
      cyclePhase: 'trough',
      yearsInPhase: 0,
      analogYears: [],
      confidence: 'low',
      trajectories: [],
    };
    cachedResult = { key: cacheKey, forecast: emptyForecast };
    return emptyForecast;
  }

  // 1. Classify cycle phase (always uses grand total for system-wide cycle)
  const cycle = classifyCycle(currentStorage, reportDate);

  // 2. Build scenario profiles from historical water year data for these keys
  const wyProfiles = computeWaterYearProfiles(reservoirKeys);
  const profiles = buildScenarioProfiles(wyProfiles);

  // 3. Determine current water year month index
  const parsed = parseReportDate(reportDate);
  const calMonth = parsed?.month ?? 2;
  const startYear = parsed?.year ?? 2026;
  const wyMonthIdx = calMonth >= 10 ? calMonth - 10 : calMonth + 2;

  // 4. Get historical context for this reservoir subset
  const history = getRecentHistory(reportDate, HISTORICAL_CONTEXT_MONTHS, reservoirKeys);

  // 5. Simulate three scenarios
  const totalForecastMonths = FORECAST_YEARS * 12;

  const droughtTraj = simulate(
    currentStorage, capacity, wyMonthIdx,
    'drought', cycle.phase, cycle.yearsInPhase, profiles, totalForecastMonths
  );
  const expectedTraj = simulate(
    currentStorage, capacity, wyMonthIdx,
    'expected', cycle.phase, cycle.yearsInPhase, profiles, totalForecastMonths
  );
  const recoveryTraj = simulate(
    currentStorage, capacity, wyMonthIdx,
    'recovery', cycle.phase, cycle.yearsInPhase, profiles, totalForecastMonths
  );

  // 6. Build trajectory points
  const trajectories: ForecastTrajectoryPoint[] = [];

  for (const pt of history) {
    trajectories.push({
      month: pt.month,
      drought: pt.storage,
      expected: pt.storage,
      recovery: pt.storage,
    });
  }

  // Add forecast points (start from i=1 to avoid duplicating the current month)
  for (let i = 1; i <= totalForecastMonths; i++) {
    const m = ((calMonth - 1 + i) % 12) + 1;
    const y = startYear + Math.floor((calMonth - 1 + i) / 12);
    trajectories.push({
      month: `${m}/${y}`,
      drought: Math.round(droughtTraj[i] * 10) / 10,
      expected: Math.round(expectedTraj[i] * 10) / 10,
      recovery: Math.round(recoveryTraj[i] * 10) / 10,
    });
  }

  // 7. Extract drain dates (original: below 0.5 MCM)
  function getDrainDate(traj: number[]): string {
    for (let i = 1; i < traj.length; i++) {
      if (traj[i] <= 0.5) {
        const m = ((calMonth - 1 + i) % 12) + 1;
        const y = startYear + Math.floor((calMonth - 1 + i) / 12);
        return `${m}/${y}`;
      }
    }
    return 'Not Draining';
  }

  // 7b. Extract restriction dates (below threshold MCM)
  function getRestrictionDate(traj: number[]): string {
    for (let i = 1; i < traj.length; i++) {
      if (traj[i] <= restrictionThresholdMCM) {
        const m = ((calMonth - 1 + i) % 12) + 1;
        const y = startYear + Math.floor((calMonth - 1 + i) / 12);
        return `${m}/${y}`;
      }
    }
    return 'Not Restricted';
  }

  // 8. Confidence based on analog count and data quality
  const confidence = cycle.analogYears.length >= 5
    ? 'high'
    : cycle.analogYears.length >= 3
      ? 'medium'
      : 'low';

  const forecast: DrainForecast = {
    drought: getDrainDate(droughtTraj),
    expected: getDrainDate(expectedTraj),
    recovery: getDrainDate(recoveryTraj),
    droughtRestriction: getRestrictionDate(droughtTraj),
    expectedRestriction: getRestrictionDate(expectedTraj),
    recoveryRestriction: getRestrictionDate(recoveryTraj),
    restrictionThresholdPct,
    restrictionThresholdMCM,
    cyclePhase: cycle.phase,
    yearsInPhase: cycle.yearsInPhase,
    analogYears: cycle.analogYears,
    confidence,
    trajectories,
  };

  cachedResult = { key: cacheKey, forecast };
  return forecast;
}

/**
 * Determine the expected year type (dry/moderate/wet) for the current position
 * and return the historical startYears that belong to that group.
 * Used by the Monthly Inflow chart to filter historical data for prediction.
 */
export function getExpectedInflowYears(reportDate: string): { type: 'dry' | 'moderate' | 'wet'; startYears: number[] } {
  const wyProfiles = computeWaterYearProfiles(MAIN_RES_KEYS);
  const recent = wyProfiles
    .filter(p => p.startYear >= 1995)
    .sort((a, b) => a.annualNet - b.annualNet);

  const n = recent.length;
  const third = Math.max(1, Math.floor(n / 3));

  const dryYears = recent.slice(0, third);
  const moderateYears = recent.slice(third, n - third);
  const wetYears = recent.slice(n - third);

  // Determine current cycle phase (uses grand total storage for classification)
  const parsed = parseReportDate(reportDate);
  const calMonth = parsed?.month ?? 2;
  // Rough estimate of current grand total storage for cycle classification
  // We only need the phase, so a rough value is fine
  const storageMap = getMonthlyStorageForKeys(MAIN_RES_KEYS);
  const currentKey = parsed
    ? `${parsed.year}-${String(parsed.month).padStart(2, '0')}`
    : '2026-02';
  const currentStorage = storageMap.get(currentKey) ?? 100;

  const cycle = classifyCycle(currentStorage, reportDate);

  // Replicate getYearProfile logic for 'expected' scenario at offset 0
  const isInDecline = cycle.phase === 'declining' || cycle.phase === 'trough';
  const remainingDecline = isInDecline ? Math.max(0, 4 - cycle.yearsInPhase) : 0;

  let type: 'dry' | 'moderate' | 'wet';
  let matchingYears: WaterYearProfile[];

  // Mirror getYearProfile('expected') at offset 0:
  // offset 0 < remainingDecline → dry (still declining)
  // offset 0 < remainingDecline + 3 → wet (recovery expected)
  // else → moderate
  if (0 < remainingDecline) {
    type = 'dry';
    matchingYears = dryYears;
  } else if (0 < remainingDecline + 3) {
    type = 'wet';
    matchingYears = wetYears;
  } else {
    type = 'moderate';
    matchingYears = moderateYears;
  }

  return {
    type,
    startYears: matchingYears.map(p => p.startYear),
  };
}

/**
 * Backward-compatible wrapper: calculates forecast for all 18 main reservoirs.
 */
export function calculateGrandTotalForecast(
  currentStorage: number,
  totalCapacity: number,
  reportDate: string
): DrainForecast {
  return calculateForecast(currentStorage, totalCapacity, reportDate, MAIN_RES_KEYS, DEFAULT_RESTRICTION_PCT);
}
