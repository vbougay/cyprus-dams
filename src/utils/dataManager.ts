import { Reservoir, ReservoirRegion, RegionTotal, YearlyInflowData, DrainForecast } from '../types';
import * as data17Mar from './data-17-mar-2025';
import * as data28Mar from './data-28-mar-2025';
import * as data11Apr from './data-11-apr-2025';
import * as data28Apr from './data-28-apr-2025';
import * as data09May from './data-09-may-2025';
import * as data16May from './data-16-may-2025';
import * as data23May from './data-23-may-2025';
import * as data02Jun from './data-02-jun-2025';
import * as data06Jun from './data-06-jun-2025';
import * as data10Jun from './data-10-jun-2025';
import * as data17Jun from './data-17-jun-2025';
import * as data27Jun from './data-27-jun-2025';
import * as data28Jul from './data-28-jul-2025';
import * as data18Jul from './data-18-jul-2025';
import * as data04Jul from './data-04-jul-2025';
import * as data08Aug from './data-08-aug-2025';
import * as data25Aug from './data-25-aug-2025';
import * as data01Sep from './data-01-sep-2025';
import * as data22Sep from './data-22-sep-2025';
import * as data10Oct from './data-10-OCT-2025';
import * as data13Oct from './data-13-OCT-2025';
import * as data27Oct from './data-27-OCT-2025';
import * as data03Nov from './data-03-NOV-2025';
import * as data10Nov from './data-10-NOV-2025';
import * as data18Nov from './data-18-NOV-2025';
import * as data24Nov from './data-24-NOV-2025';
import * as data05Dec from './data-05-DEC-2025';
import * as data11Dec from './data-11-DEC-2025';
import * as data15Dec from './data-15-DEC-2025';
import * as data23Dec from './data-23-DEC-2025';
import * as data29Dec from './data-29-DEC-2025';
import * as data05Jan from './data-05-JAN-2026';
import * as data12Jan from './data-12-JAN-2026';
import * as data19Jan from './data-19-JAN-2026';
import * as data26Jan from './data-26-JAN-2026';
import * as data02Feb from './data-02-FEB-2026';
import * as data09Feb from './data-09-FEB-2026';
import * as data16Feb from './data-16-FEB-2026';
import * as data20Feb from './data-20-FEB-2026';
import * as data24Feb from './data-24-FEB-2026';
import * as data25Feb from './data-25-FEB-2026';
import * as data27Feb from './data-27-FEB-2026';
import {
  calculateDrainDate,
  calculateRegionDrainDate,
  getReservoirsByRegion as getReservoirsByRegionUtil,
  calculateRegionTotals as calculateRegionTotalsUtil,
  calculateGrandTotal as calculateGrandTotalUtil,
  getReservoirsWithDrainDates as getReservoirsWithDrainDatesUtil,
  parseReportDate
} from './reservoirUtils';
import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';
import { calculateGrandTotalForecast, calculateForecast, MAIN_RES_KEYS, REGION_KEYS, MAJOR_DAM_KEYS, getExpectedInflowYears } from './forecastEngine';

// Define available data sets with their dates and module references
export const availableDataSets = [
  { id: '27-FEB-2026', label: 'February 27, 2026', value: '27-FEB-2026', module: data27Feb },
  { id: '25-FEB-2026', label: 'February 25, 2026', value: '25-FEB-2026', module: data25Feb },
  { id: '24-FEB-2026', label: 'February 24, 2026', value: '24-FEB-2026', module: data24Feb },
  { id: '20-FEB-2026', label: 'February 20, 2026', value: '20-FEB-2026', module: data20Feb },
  { id: '16-FEB-2026', label: 'February 16, 2026', value: '16-FEB-2026', module: data16Feb },
  { id: '09-FEB-2026', label: 'February 9, 2026', value: '09-FEB-2026', module: data09Feb },
  { id: '02-FEB-2026', label: 'February 2, 2026', value: '02-FEB-2026', module: data02Feb },
  { id: '26-JAN-2026', label: 'January 26, 2026', value: '26-JAN-2026', module: data26Jan },
  { id: '19-JAN-2026', label: 'January 19, 2026', value: '19-JAN-2026', module: data19Jan },
  { id: '12-JAN-2026', label: 'January 12, 2026', value: '12-JAN-2026', module: data12Jan },
  { id: '05-JAN-2026', label: 'January 5, 2026', value: '05-JAN-2026', module: data05Jan },
  { id: '29-DEC-2025', label: 'December 29, 2025', value: '29-DEC-2025', module: data29Dec },
  { id: '23-DEC-2025', label: 'December 23, 2025', value: '23-DEC-2025', module: data23Dec },
  { id: '15-DEC-2025', label: 'December 15, 2025', value: '15-DEC-2025', module: data15Dec },
  { id: '11-DEC-2025', label: 'December 11, 2025', value: '11-DEC-2025', module: data11Dec },
  { id: '05-DEC-2025', label: 'December 5, 2025', value: '05-DEC-2025', module: data05Dec },
  { id: '24-NOV-2025', label: 'November 24, 2025', value: '24-NOV-2025', module: data24Nov },
  { id: '18-NOV-2025', label: 'November 18, 2025', value: '18-NOV-2025', module: data18Nov },
  { id: '10-NOV-2025', label: 'November 10, 2025', value: '10-NOV-2025', module: data10Nov },
  { id: '03-NOV-2025', label: 'November 3, 2025', value: '03-NOV-2025', module: data03Nov },
  { id: '27-OCT-2025', label: 'October 27, 2025', value: '27-OCT-2025', module: data27Oct },
  { id: '13-OCT-2025', label: 'October 13, 2025', value: '13-OCT-2025', module: data13Oct },
  { id: '10-OCT-2025', label: 'October 10, 2025', value: '10-OCT-2025', module: data10Oct },
  { id: '22-SEP-2025', label: 'September 22, 2025', value: '22-SEP-2025', module: data22Sep },
  { id: '01-SEP-2025', label: 'September 1, 2025', value: '01-SEP-2025', module: data01Sep },
  { id: '25-AUG-2025', label: 'August 25, 2025', value: '25-AUG-2025', module: data25Aug },
  { id: '08-AUG-2025', label: 'August 8, 2025', value: '08-AUG-2025', module: data08Aug },
  { id: '28-JUL-2025', label: 'July 28, 2025', value: '28-JUL-2025', module: data28Jul },
  { id: '18-JUL-2025', label: 'July 18, 2025', value: '18-JUL-2025', module: data18Jul },
  { id: '04-JUL-2025', label: 'July 4, 2025', value: '04-JUL-2025', module: data04Jul },
  { id: '27-JUN-2025', label: 'June 27, 2025', value: '27-JUN-2025', module: data27Jun },
  { id: '17-JUN-2025', label: 'June 17, 2025', value: '17-JUN-2025', module: data17Jun },
  { id: '10-JUN-2025', label: 'June 10, 2025', value: '10-JUN-2025', module: data10Jun },
  { id: '06-JUN-2025', label: 'June 6, 2025', value: '06-JUN-2025', module: data06Jun },
  { id: '02-JUN-2025', label: 'June 2, 2025', value: '02-JUN-2025', module: data02Jun },
  { id: '23-MAY-2025', label: 'May 23, 2025', value: '23-MAY-2025', module: data23May },
  { id: '16-MAY-2025', label: 'May 16, 2025', value: '16-MAY-2025', module: data16May },
  { id: '09-MAY-2025', label: 'May 9, 2025', value: '09-MAY-2025', module: data09May },
  { id: '28-APR-2025', label: 'April 28, 2025', value: '28-APR-2025', module: data28Apr },
  { id: '11-APR-2025', label: 'April 11, 2025', value: '11-APR-2025', module: data11Apr },
  { id: '28-MAR-2025', label: 'March 28, 2025', value: '28-MAR-2025', module: data28Mar },
  { id: '17-MAR-2025', label: 'March 17, 2025', value: '17-MAR-2025', module: data17Mar },
];

/** The most recent dataset ID (first entry in the sorted array). */
export const DEFAULT_DATASET_ID = availableDataSets[0].id;

// Resolve a dataset module from an optional ID (defaults to latest).
function resolveModule(datasetId?: string) {
  const id = datasetId || DEFAULT_DATASET_ID;
  return availableDataSets.find(ds => ds.id === id)?.module || availableDataSets[0].module;
}

// Resolve a valid dataset ID (defaults to latest).
function resolveId(datasetId?: string): string {
  const id = datasetId || DEFAULT_DATASET_ID;
  return availableDataSets.some(ds => ds.id === id) ? id : DEFAULT_DATASET_ID;
}

// Data access functions — all accept an optional datasetId (defaults to latest).
export const reservoirData = (datasetId?: string): Reservoir[] => {
  return resolveModule(datasetId).reservoirData;
};

// Export utility functions directly
export { calculateDrainDate, calculateRegionDrainDate };

export const getReservoirsByRegion = (region: ReservoirRegion, datasetId?: string): Reservoir[] => {
  return getReservoirsByRegionUtil(reservoirData(datasetId), region);
};

export const calculateRegionTotals = (datasetId?: string): RegionTotal[] => {
  return calculateRegionTotalsUtil(reservoirData(datasetId));
};

export const calculateGrandTotal = (datasetId?: string): RegionTotal => {
  return calculateGrandTotalUtil(reservoirData(datasetId));
};

export const getReservoirsWithDrainDates = (datasetId?: string): Reservoir[] => {
  return getReservoirsWithDrainDatesUtil(reservoirData(datasetId));
};

export const yearlyInflowData = (datasetId?: string): YearlyInflowData[] => {
  return resolveModule(datasetId).yearlyInflowData;
};

export const getReportDate = (datasetId?: string): string => {
  return resolveModule(datasetId).getReportDate();
};

export { calculateGrandTotalForecast, calculateForecast, MAIN_RES_KEYS, REGION_KEYS, MAJOR_DAM_KEYS };

/**
 * Compute the drain forecast for a dataset's grand total.
 * Uses the cycle-aware scenario engine.
 */
export const getGrandTotalForecast = (datasetId?: string): DrainForecast => {
  const dsId = resolveId(datasetId);
  const grandTotal = calculateGrandTotalUtil(reservoirData(dsId));
  return calculateGrandTotalForecast(
    grandTotal.storage.current.amount,
    grandTotal.capacity,
    dsId
  );
};

/**
 * Reservoir key → display name mapping (English).
 * Used by the forecast dropdown to match data keys to reservoir names.
 */
const RESERVOIR_KEY_TO_NAMES: Record<string, string[]> = {
  kouris: ['Kouris'],
  kalavasos: ['Kalavasos'],
  lefkara: ['Lefkara'],
  dipotamos: ['Dipotamos'],
  germasoyeia: ['Germasoyeia'],
  arminou: ['Arminou'],
  polemidia: ['Polemidia'],
  achna: ['Achna'],
  asprokremmos: ['Asprokremmos'],
  kannaviou: ['Kannaviou'],
  mavrokolympos: ['Mavrokolympos'],
  evretou: ['Evretou'],
  argaka: ['Argaka'],
  pomos: ['Pomos'],
  agiaMarina: ['Agia Marina'],
  vyzakia: ['Vyzakia'],
  xyliatos: ['Xyliatos'],
  kalopanagiotis: ['Kalopanagiotis'],
};

/**
 * Get storage and capacity for a set of reservoir keys.
 * Matches reservoir data by name using the key→name mapping.
 */
export const getStorageForKeys = (keys: (keyof HistoricalStorageEntry)[], datasetId?: string): { storage: number; capacity: number } => {
  const data = reservoirData(datasetId);
  let storage = 0;
  let capacity = 0;
  for (const key of keys) {
    const names = RESERVOIR_KEY_TO_NAMES[key as string];
    if (!names) continue;
    const res = data.find(r => names.includes(r.name));
    if (res) {
      storage += res.storage.current.amount;
      capacity += res.capacity;
    }
  }
  return { storage, capacity };
};

/**
 * Compute forecast for a specific selection (region, dam, or all).
 * @param selectionId - 'all', region name, or reservoir key
 * @param restrictionThresholdPct - threshold percentage
 * @param datasetId - optional dataset ID (defaults to latest)
 */
export const getForecastForSelection = (
  selectionId: string,
  restrictionThresholdPct: number,
  datasetId?: string,
): DrainForecast => {
  const dsId = resolveId(datasetId);
  let keys: (keyof HistoricalStorageEntry)[];

  if (selectionId === 'all') {
    keys = MAIN_RES_KEYS;
  } else if (selectionId in REGION_KEYS) {
    keys = REGION_KEYS[selectionId];
  } else {
    // Single reservoir key
    keys = [selectionId as keyof HistoricalStorageEntry];
  }

  const { storage, capacity } = getStorageForKeys(keys, dsId);
  return calculateForecast(storage, capacity, dsId, keys, restrictionThresholdPct);
};

/**
 * Look up October storage from historical data for a given year.
 * Uses the earliest October entry (closest to Oct 1st) and sums
 * main reservoirs only (excluding Recharge/Other).
 */
function getOctoberStorageFromHistorical(year: number): number | null {
  const prefix = `${year}-10`;
  const octEntries = historicalStorageData.filter(entry => entry.date.startsWith(prefix));
  if (octEntries.length === 0) return null;

  const entry = octEntries[0]; // earliest Oct entry (data is chronological)
  return MAIN_RES_KEYS.reduce((sum, key) => sum + ((entry[key] as number | null) ?? 0), 0);
}

/**
 * Get October baseline storage for water balance calculations.
 * Uses historical storage data to find the correct October baseline
 * for the water year of the given dataset.
 */
export const getOctoberBaselineStorage = (datasetId?: string): { currentStorage: number; lastYearStorage: number | null } | null => {
  const dsId = resolveId(datasetId);
  const parsed = parseReportDate(dsId);
  if (!parsed) return null;

  // Determine water year: Oct–Sep cycle
  const waterYearStart = parsed.month >= 10 ? parsed.year : parsed.year - 1;

  const currentBaseline = getOctoberStorageFromHistorical(waterYearStart);
  if (currentBaseline === null) return null;

  const lastYearBaseline = getOctoberStorageFromHistorical(waterYearStart - 1);

  return {
    currentStorage: currentBaseline,
    lastYearStorage: lastYearBaseline,
  };
};

// Reverse mapping: reservoir display name → historical data key
export const RESERVOIR_NAME_TO_KEY: Record<string, keyof HistoricalStorageEntry> = Object.fromEntries(
  Object.entries(RESERVOIR_KEY_TO_NAMES).flatMap(([k, names]) => names.map(name => [name, k as keyof HistoricalStorageEntry]))
);

const MAIN_REGION_NAMES: ReservoirRegion[] = ['Southern Conveyor', 'Paphos', 'Chrysochou', 'Nicosia'];

/**
 * Get reservoirs with forecast-based expected restriction dates.
 * Main reservoirs use the cycle-aware forecast engine (7% threshold).
 * Recharge/Other reservoirs fall back to simple linear drain date.
 */
export const getReservoirsWithForecastDates = (datasetId?: string): Reservoir[] => {
  const dsId = resolveId(datasetId);
  const data = reservoirData(dsId);
  return data.map(reservoir => {
    const key = RESERVOIR_NAME_TO_KEY[reservoir.name];
    if (key && reservoir.region !== 'Recharge/Other') {
      const { storage, capacity } = getStorageForKeys([key], dsId);
      const forecast = calculateForecast(storage, capacity, dsId, [key], 7);
      return { ...reservoir, drainDate: forecast.expectedRestriction };
    }
    // Fallback for Recharge/Other (no historical data)
    return { ...reservoir, drainDate: calculateDrainDate(reservoir) };
  });
};

/**
 * Get region totals with forecast-based expected restriction dates.
 * Main regions use the cycle-aware forecast engine (7% threshold).
 * Recharge/Other keeps the simple linear drain date.
 */
export const getRegionTotalsWithForecasts = (datasetId?: string): RegionTotal[] => {
  const dsId = resolveId(datasetId);
  const totals = calculateRegionTotalsUtil(reservoirData(dsId));
  return totals.map(regionTotal => {
    if (MAIN_REGION_NAMES.includes(regionTotal.region)) {
      const forecast = getForecastForSelection(regionTotal.region, 7, dsId);
      return { ...regionTotal, drainDate: forecast.expectedRestriction };
    }
    return regionTotal;
  });
};

/**
 * Get grand total with forecast-based expected restriction date.
 * Uses the cycle-aware forecast engine (7% threshold).
 */
export const getGrandTotalWithForecast = (datasetId?: string): RegionTotal => {
  const dsId = resolveId(datasetId);
  const grandTotal = calculateGrandTotalUtil(reservoirData(dsId));
  const forecast = getGrandTotalForecast(dsId);
  return { ...grandTotal, drainDate: forecast.expectedRestriction };
};

/**
 * Get cycle-aware monthly inflow averages for the "expected" scenario.
 * Instead of averaging all historical years, only averages years matching
 * the expected year type (dry/moderate/wet) based on the current cycle phase.
 * @param monthKeys - array of month key strings (e.g., ["October", "November", ...])
 * @param latestYear - the latest (current) year label to exclude from averaging
 */
export const getScenarioInflowAverages = (
  monthKeys: string[],
  latestYear: string,
  datasetId?: string,
): { averages: Record<string, number>; yearType: 'dry' | 'moderate' | 'wet' } => {
  const dsId = resolveId(datasetId);
  const { type, startYears } = getExpectedInflowYears(dsId);
  const inflowData = yearlyInflowData(dsId);

  // Map startYears to inflow year labels: startYear 2015 → "15/16"
  const matchingLabels = new Set(
    startYears.map(sy => {
      const shortStart = sy % 100;
      const shortEnd = (sy + 1) % 100;
      return `${shortStart}/${shortEnd < 10 ? '0' + shortEnd : shortEnd}`;
    })
  );

  // Filter to matching years, excluding the current (incomplete) year
  const matchingSeasons = inflowData.filter(
    d => d.year !== latestYear && matchingLabels.has(d.year)
  );

  // Fall back to all completed seasons if no matches
  const seasons = matchingSeasons.length > 0
    ? matchingSeasons
    : inflowData.filter(d => d.year !== latestYear);

  const averages: Record<string, number> = {};
  monthKeys.forEach(month => {
    const values = seasons.map(s => s.months[month] || 0);
    averages[month] = values.length > 0
      ? values.reduce((a, b) => a + b, 0) / values.length
      : 0;
  });

  return { averages, yearType: type };
};

/**
 * Get summary of changes for the selected dataset.
 */
export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en', datasetId?: string): string | null => {
  const dsId = resolveId(datasetId);
  const dataset = availableDataSets.find(ds => ds.id === dsId);
  const mod = dataset?.module;

  if (mod && 'getSummaryChanges' in mod && typeof mod.getSummaryChanges === 'function') {
    return mod.getSummaryChanges(language);
  }
  return null;
};
