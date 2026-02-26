import { Reservoir, RegionTotal, ReservoirRegion, YearlyInflowData } from './index';

// Cycle-aware forecast data
export interface ApiForecast {
  restrictionDate: string;        // expectedRestriction (the main date shown)
  droughtRestrictionDate: string;  // worst case
  recoveryRestrictionDate: string; // best case
  restrictionThresholdPct: number;
  cyclePhase: string;             // declining | trough | recovering | peak
  confidence: string;             // low | medium | high
}

// Flattened reservoir for API responses
export interface ApiReservoir {
  name: Reservoir['name'];
  region: Reservoir['region'];
  capacity: Reservoir['capacity'];
  storageMCM: number;       // storage.current.amount
  storagePercent: number;    // storage.current.percentage
  lastYearMCM: number;      // storage.lastYear.amount
  lastYearPercent: number;   // storage.lastYear.percentage
  inflowLast24h: number;    // inflow.last24Hours
  inflowSinceOctober: number; // inflow.totalSince
  maxStorageMCM: number;    // maxStorage.amount
  maxStorageDate: string;   // maxStorage.date
  drainDate: string;
  forecast: ApiForecast | null;
}

// Flattened region total for API responses
export interface ApiRegion {
  region: RegionTotal['region'];
  capacity: RegionTotal['capacity'];
  storageMCM: number;
  storagePercent: number;
  lastYearMCM: number;
  lastYearPercent: number;
  inflowLast24h: number;
  inflowSinceOctober: number;
  drainDate: string;
  forecast: ApiForecast | null;
}

// Region summary used in the summary endpoint
export interface ApiRegionSummary {
  storagePercent: number;
  storageMCM: number;
}

export interface ApiSummaryResponse {
  dataset: string;
  reportDate: string;
  totalCapacity: number;
  totalStorage: number;
  totalStoragePercent: number;
  lastYearStorage: number;
  lastYearStoragePercent: number;
  yearOverYearChange: number;
  inflowLast24h: number;
  inflowSinceOctober: number;
  reservoirCount: number;
  drainDate: string;
  forecast: ApiForecast | null;
  regions: Record<string, ApiRegionSummary>;
}

export interface ApiReservoirsResponse {
  dataset: string;
  reportDate: string;
  count: number;
  reservoirs: ApiReservoir[];
}

export interface ApiRegionsResponse {
  dataset: string;
  reportDate: string;
  regions: ApiRegion[];
  grandTotal: ApiRegion;
}

export interface ApiDataset {
  id: string;
  label: string;
}

export interface ApiDatasetsResponse {
  count: number;
  current: string;
  datasets: ApiDataset[];
}

export interface ApiYTD {
  currentYear: string;
  currentYTD: number;
  lastYear: string;
  lastYearYTD: number;
  percentChange: number | null;
}

export interface ApiInflowYear {
  year: YearlyInflowData['year'];
  total: YearlyInflowData['total'];
  months: YearlyInflowData['months'];
}

export interface ApiInflowResponse {
  dataset: string;
  reportDate: string;
  ytd: ApiYTD | null;
  years: ApiInflowYear[];
}

export interface ApiHistoricalEntry {
  date: string;
  [reservoir: string]: string | number | null;
}

export interface ApiHistoricalResponse {
  count: number;
  from: string;
  to: string;
  entries: ApiHistoricalEntry[];
}

export interface ApiErrorResponse {
  error: string;
  status: number;
}
