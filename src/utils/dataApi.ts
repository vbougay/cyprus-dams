import { Reservoir, RegionTotal, ReservoirRegion } from '../types';
import {
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
import { availableDataSets } from './dataManager';
import {
  calculateRegionTotals as calcRegionTotals,
  calculateGrandTotal as calcGrandTotal,
  getReservoirsWithDrainDates as getWithDrainDates,
  getReservoirsByRegion as getByRegion,
  calculateYTDInflow,
  parseReportDate,
} from './reservoirUtils';
import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';

// --- Thread-safe dataset resolution ---

function resolveDataset(datasetId?: string) {
  const id = datasetId || availableDataSets[0].id;
  return availableDataSets.find(ds => ds.id === id) ?? null;
}

// Main reservoir keys (excluding Recharge/Other) — mirrors MAIN_RESERVOIR_KEYS in dataManager.ts
const MAIN_RESERVOIR_KEYS: (keyof HistoricalStorageEntry)[] = [
  'kouris', 'kalavasos', 'lefkara', 'dipotamos', 'germasoyeia',
  'arminou', 'polemidia', 'asprokremmos', 'evretou', 'kannaviou',
  'mavrokolympos', 'vyzakia', 'xyliatos', 'argaka', 'pomos',
  'kalopanagiotis', 'agiaMarina', 'achna'
];

function getOctoberStorageFromHistorical(year: number): number | null {
  const prefix = `${year}-10`;
  const octEntries = historicalStorageData.filter(entry => entry.date.startsWith(prefix));
  if (octEntries.length === 0) return null;
  const entry = octEntries[0];
  return MAIN_RESERVOIR_KEYS.reduce((sum, key) => sum + ((entry[key] as number | null) ?? 0), 0);
}

function getOctoberBaseline(datasetId: string): { currentStorage: number; lastYearStorage: number | null } | null {
  const parsed = parseReportDate(datasetId);
  if (!parsed) return null;
  const waterYearStart = parsed.month >= 10 ? parsed.year : parsed.year - 1;
  const currentBaseline = getOctoberStorageFromHistorical(waterYearStart);
  if (currentBaseline === null) return null;
  const lastYearBaseline = getOctoberStorageFromHistorical(waterYearStart - 1);
  return { currentStorage: currentBaseline, lastYearStorage: lastYearBaseline };
}

// --- Flattening helpers ---

function flattenReservoir(r: Reservoir): ApiReservoir {
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
    drainDate: r.drainDate ?? 'N/A',
  };
}

function flattenRegion(r: RegionTotal): ApiRegion {
  return {
    region: r.region,
    capacity: r.capacity,
    storageMCM: r.storage.current.amount,
    storagePercent: r.storage.current.percentage,
    lastYearMCM: r.storage.lastYear.amount,
    lastYearPercent: r.storage.lastYear.percentage,
    inflowLast24h: r.inflow.last24Hours,
    inflowSinceOctober: r.inflow.totalSince,
    drainDate: r.drainDate ?? 'N/A',
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

  const data = ds.module.reservoirData;
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

  return {
    dataset: ds.id,
    reportDate: ds.module.getReportDate(),
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
    drainDate: grandTotal.drainDate ?? 'N/A',
    regions,
  };
}

export function getApiReservoirs(datasetId?: string, region?: string): ApiReservoirsResponse | null {
  const ds = resolveDataset(datasetId);
  if (!ds) return null;

  let data = getWithDrainDates(ds.module.reservoirData);
  if (region) {
    data = getByRegion(data, region as ReservoirRegion);
  }

  return {
    dataset: ds.id,
    reportDate: ds.module.getReportDate(),
    count: data.length,
    reservoirs: data.map(flattenReservoir),
  };
}

export function getApiRegions(datasetId?: string): ApiRegionsResponse | null {
  const ds = resolveDataset(datasetId);
  if (!ds) return null;

  const data = ds.module.reservoirData;
  const regionTotals = calcRegionTotals(data);
  const grandTotal = calcGrandTotal(data);

  return {
    dataset: ds.id,
    reportDate: ds.module.getReportDate(),
    regions: regionTotals.map(flattenRegion),
    grandTotal: flattenRegion(grandTotal),
  };
}

export function getApiInflow(datasetId?: string): ApiInflowResponse | null {
  const ds = resolveDataset(datasetId);
  if (!ds) return null;

  const inflowData = ds.module.yearlyInflowData;
  const reportDate = ds.module.getReportDate();
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
