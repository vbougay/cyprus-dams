import { Reservoir, RegionTotal, ReservoirRegion } from '../types';
import {
  ApiForecast,
  ApiReservoir,
  ApiRegion,
  ApiRegionSummary,
  ApiSummaryResponse,
  ApiReservoirsResponse,
  ApiRegionsResponse,
  ApiDatasetsResponse,
  ApiInflowResponse,
  ApiHistoricalResponse,
  ApiHistoricalEntry,
} from '../types/api';
import {
  availableDataSets,
  reservoirData,
  yearlyInflowData,
  getReportDate,
  getStorageForKeys,
  RESERVOIR_NAME_TO_KEY,
} from './dataManager';
import {
  calculateRegionTotals as calcRegionTotals,
  calculateGrandTotal as calcGrandTotal,
  getReservoirsWithDrainDates as getWithDrainDates,
  getReservoirsByRegion as getByRegion,
  calculateYTDInflow,
  calculateDrainDate,
} from './reservoirUtils';
import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';
import { calculateForecast, MAIN_RES_KEYS, REGION_KEYS } from './forecastEngine';

// --- Thread-safe dataset resolution (returns full entry for API-specific needs) ---

function resolveDataset(datasetId?: string) {
  const id = datasetId || availableDataSets[0].id;
  return availableDataSets.find(ds => ds.id === id) ?? null;
}

// --- Forecast helpers ---

function computeApiForecast(
  storage: number,
  capacity: number,
  datasetId: string,
  keys: (keyof HistoricalStorageEntry)[],
  thresholdPct: number
): ApiForecast {
  const f = calculateForecast(storage, capacity, datasetId, keys, thresholdPct);
  return {
    restrictionDate: f.expectedRestriction,
    droughtRestrictionDate: f.droughtRestriction,
    recoveryRestrictionDate: f.recoveryRestriction,
    restrictionThresholdPct: f.restrictionThresholdPct,
    cyclePhase: f.cyclePhase,
    confidence: f.confidence,
  };
}

// --- Flattening helpers ---

function flattenReservoir(r: Reservoir, datasetId: string): ApiReservoir {
  const key = RESERVOIR_NAME_TO_KEY[r.name];
  let forecast: ApiForecast | null = null;
  let drainDate = r.drainDate ?? 'N/A';

  if (key && r.region !== 'Recharge/Other') {
    forecast = computeApiForecast(
      r.storage.current.amount, r.capacity, datasetId, [key], 5
    );
    drainDate = forecast.restrictionDate;
  } else {
    // Fallback for Recharge/Other
    drainDate = calculateDrainDate(r) ?? 'N/A';
  }

  return {
    name: r.name,
    region: r.region,
    capacity: r.capacity,
    storageMCM: r.storage.current.amount,
    storagePercent: r.storage.current.percentage,
    lastYearMCM: r.storage.lastYear.amount,
    lastYearPercent: r.storage.lastYear.percentage,
    inflowLast24h: r.inflow.last24Hours,
    inflowSinceOctober: r.inflow.totalSince,
    maxStorageMCM: r.maxStorage.amount,
    maxStorageDate: r.maxStorage.date,
    drainDate,
    forecast,
  };
}

function flattenRegion(r: RegionTotal, datasetId: string): ApiRegion {
  let forecast: ApiForecast | null = null;
  let drainDate = r.drainDate ?? 'N/A';

  const regionKeys = REGION_KEYS[r.region];
  if (regionKeys) {
    const { storage, capacity } = getStorageForKeys(regionKeys, datasetId);
    forecast = computeApiForecast(storage, capacity, datasetId, regionKeys, 7);
    drainDate = forecast.restrictionDate;
  }

  return {
    region: r.region,
    capacity: r.capacity,
    storageMCM: r.storage.current.amount,
    storagePercent: r.storage.current.percentage,
    lastYearMCM: r.storage.lastYear.amount,
    lastYearPercent: r.storage.lastYear.percentage,
    inflowLast24h: r.inflow.last24Hours,
    inflowSinceOctober: r.inflow.totalSince,
    drainDate,
    forecast,
  };
}

// --- Public API data functions ---

const VALID_REGIONS: ReservoirRegion[] = ['Southern Conveyor', 'Paphos', 'Chrysochou', 'Nicosia', 'Recharge/Other'];

export function getApiDatasets(): ApiDatasetsResponse {
  return {
    count: availableDataSets.length,
    current: availableDataSets[0].id,
    datasets: availableDataSets.map(ds => ({ id: ds.id, label: ds.label })),
  };
}

export function getApiSummary(datasetId?: string): ApiSummaryResponse | null {
  const ds = resolveDataset(datasetId);
  if (!ds) return null;

  const data = reservoirData(ds.id);
  const grandTotal = calcGrandTotal(data);
  const regionTotals = calcRegionTotals(data);

  const regions: Record<string, ApiRegionSummary> = {};
  for (const rt of regionTotals) {
    if (rt.region !== 'Recharge/Other') {
      regions[rt.region] = {
        storagePercent: rt.storage.current.percentage,
        storageMCM: rt.storage.current.amount,
      };
    }
  }

  // Compute grand total forecast (all main reservoirs, 7% threshold)
  const { storage: mainStorage, capacity: mainCapacity } = getStorageForKeys(MAIN_RES_KEYS, ds.id);
  const forecast = computeApiForecast(mainStorage, mainCapacity, ds.id, MAIN_RES_KEYS, 7);

  return {
    dataset: ds.id,
    reportDate: getReportDate(ds.id),
    totalCapacity: grandTotal.capacity,
    totalStorage: grandTotal.storage.current.amount,
    totalStoragePercent: grandTotal.storage.current.percentage,
    lastYearStorage: grandTotal.storage.lastYear.amount,
    lastYearStoragePercent: grandTotal.storage.lastYear.percentage,
    yearOverYearChange: parseFloat(
      (grandTotal.storage.current.percentage - grandTotal.storage.lastYear.percentage).toFixed(1)
    ),
    inflowLast24h: grandTotal.inflow.last24Hours,
    inflowSinceOctober: grandTotal.inflow.totalSince,
    reservoirCount: data.filter(r => r.region !== 'Recharge/Other').length,
    drainDate: forecast.restrictionDate,
    forecast,
    regions,
  };
}

export function getApiReservoirs(datasetId?: string, region?: string): ApiReservoirsResponse | null {
  const ds = resolveDataset(datasetId);
  if (!ds) return null;

  let data = getWithDrainDates(reservoirData(ds.id));
  if (region) {
    data = getByRegion(data, region as ReservoirRegion);
  }

  return {
    dataset: ds.id,
    reportDate: getReportDate(ds.id),
    count: data.length,
    reservoirs: data.map(r => flattenReservoir(r, ds.id)),
  };
}

export function getApiRegions(datasetId?: string): ApiRegionsResponse | null {
  const ds = resolveDataset(datasetId);
  if (!ds) return null;

  const data = reservoirData(ds.id);
  const regionTotals = calcRegionTotals(data);
  const grandTotal = calcGrandTotal(data);

  // Grand total forecast uses all main reservoir keys at 7% threshold
  const { storage: mainStorage, capacity: mainCapacity } = getStorageForKeys(MAIN_RES_KEYS, ds.id);
  const grandForecast = computeApiForecast(mainStorage, mainCapacity, ds.id, MAIN_RES_KEYS, 7);

  const flatGrandTotal = flattenRegion(grandTotal, ds.id);
  flatGrandTotal.drainDate = grandForecast.restrictionDate;
  flatGrandTotal.forecast = grandForecast;

  return {
    dataset: ds.id,
    reportDate: getReportDate(ds.id),
    regions: regionTotals.map(r => flattenRegion(r, ds.id)),
    grandTotal: flatGrandTotal,
  };
}

export function getApiInflow(datasetId?: string): ApiInflowResponse | null {
  const ds = resolveDataset(datasetId);
  if (!ds) return null;

  const inflowData = yearlyInflowData(ds.id);
  const reportDate = getReportDate(ds.id);
  const ytdResult = calculateYTDInflow(inflowData, reportDate);

  return {
    dataset: ds.id,
    reportDate,
    ytd: ytdResult ? {
      currentYear: ytdResult.currentYear,
      currentYTD: ytdResult.currentYTD,
      lastYear: ytdResult.lastYear,
      lastYearYTD: ytdResult.lastYearYTD,
      percentChange: ytdResult.percentChange,
    } : null,
    years: inflowData.map(y => ({ year: y.year, total: y.total, months: y.months })),
  };
}

export function getApiHistorical(
  from?: string,
  to?: string,
  reservoir?: string
): ApiHistoricalResponse | null {
  let entries = historicalStorageData;

  // Default: last 12 months
  if (!from && !to) {
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 1);
    const cutoffStr = cutoff.toISOString().slice(0, 10);
    entries = entries.filter(e => e.date >= cutoffStr);
  } else {
    if (from) entries = entries.filter(e => e.date >= from);
    if (to) entries = entries.filter(e => e.date <= to);
  }

  const mapped: ApiHistoricalEntry[] = entries.map(e => {
    if (reservoir) {
      const key = reservoir as keyof HistoricalStorageEntry;
      return { date: e.date, [reservoir]: e[key] ?? null };
    }
    // Return all columns
    const entry: ApiHistoricalEntry = { date: e.date };
    for (const key of Object.keys(e)) {
      if (key !== 'date') {
        entry[key] = e[key as keyof HistoricalStorageEntry] as number | null;
      }
    }
    return entry;
  });

  return {
    count: mapped.length,
    from: mapped.length > 0 ? mapped[0].date : '',
    to: mapped.length > 0 ? mapped[mapped.length - 1].date : '',
    entries: mapped,
  };
}

export function isValidDataset(id: string): boolean {
  return availableDataSets.some(ds => ds.id === id);
}

export function isValidRegion(region: string): boolean {
  return VALID_REGIONS.includes(region as ReservoirRegion);
}

export { VALID_REGIONS };
