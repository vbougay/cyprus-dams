import { ReservoirRegion } from '@/types';
import { HistoricalStorageEntry } from '@/utils/historicalStorageData';

// Region slug → ReservoirRegion
export const REGION_SLUG_MAP: Record<string, ReservoirRegion> = {
  'southern-conveyor': 'Southern Conveyor',
  'paphos': 'Paphos',
  'chrysochou': 'Chrysochou',
  'nicosia': 'Nicosia',
  'recharge-other': 'Recharge/Other',
};

// Region slug → heatmapConfig region key (translation key)
export const REGION_SLUG_TO_HEATMAP_KEY: Record<string, string> = {
  'southern-conveyor': 'southernConveyor',
  'paphos': 'paphos',
  'chrysochou': 'chrysochou',
  'nicosia': 'nicosia',
  'recharge-other': 'rechargeOther',
};

// Region slug → forecast selection ID (region name used by getForecastForSelection)
export const REGION_SLUG_TO_FORECAST_ID: Record<string, string> = {
  'southern-conveyor': 'Southern Conveyor',
  'paphos': 'Paphos',
  'chrysochou': 'Chrysochou',
  'nicosia': 'Nicosia',
  // Recharge/Other has no forecast
};

// ReservoirRegion → slug
const REGION_NAME_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(REGION_SLUG_MAP).map(([slug, name]) => [name, slug])
);

// Dam slug → { reservoir display name, historical data key }
export const DAM_SLUG_MAP: Record<string, { name: string; key: keyof HistoricalStorageEntry }> = {
  'kouris': { name: 'Kouris', key: 'kouris' },
  'kalavasos': { name: 'Kalavasos', key: 'kalavasos' },
  'lefkara': { name: 'Lefkara', key: 'lefkara' },
  'dipotamos': { name: 'Dipotamos', key: 'dipotamos' },
  'germasoyeia': { name: 'Germasoyeia', key: 'germasoyeia' },
  'arminou': { name: 'Arminou', key: 'arminou' },
  'polemidia': { name: 'Polemidia', key: 'polemidia' },
  'achna': { name: 'Achna', key: 'achna' },
  'asprokremmos': { name: 'Asprokremmos', key: 'asprokremmos' },
  'kannaviou': { name: 'Kannaviou', key: 'kannaviou' },
  'mavrokolympos': { name: 'Mavrokolympos', key: 'mavrokolympos' },
  'evretou': { name: 'Evretou', key: 'evretou' },
  'argaka': { name: 'Argaka', key: 'argaka' },
  'pomos': { name: 'Pomos', key: 'pomos' },
  'agia-marina': { name: 'Agia Marina', key: 'agiaMarina' },
  'vyzakia': { name: 'Vyzakia', key: 'vyzakia' },
  'xyliatos': { name: 'Xyliatos', key: 'xyliatos' },
  'kalopanagiotis': { name: 'Kalopanagiotis', key: 'kalopanagiotis' },
  'tamassos': { name: 'Tamassos', key: 'tamassos' },
  'klirou-malounta': { name: 'Klirou-Malounta', key: 'klirouMalounta' },
  'solea': { name: 'Solea', key: 'solea' },
};

// Reverse: reservoir display name → slug
const DAM_NAME_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(DAM_SLUG_MAP).map(([slug, { name }]) => [name, slug])
);

// Lookups
export function getRegionBySlug(slug: string): ReservoirRegion | undefined {
  return REGION_SLUG_MAP[slug];
}

export function getDamBySlug(slug: string): { name: string; key: keyof HistoricalStorageEntry } | undefined {
  return DAM_SLUG_MAP[slug];
}

export function getRegionSlug(region: ReservoirRegion | string): string | undefined {
  return REGION_NAME_TO_SLUG[region];
}

export function getDamSlug(name: string): string | undefined {
  return DAM_NAME_TO_SLUG[name];
}

export function getAllRegionSlugs(): string[] {
  return Object.keys(REGION_SLUG_MAP);
}

export function getAllDamSlugs(): string[] {
  return Object.keys(DAM_SLUG_MAP);
}

// Dam slug → region slug (for breadcrumbs / context)
const DAM_TO_REGION: Record<string, string> = {
  'kouris': 'southern-conveyor', 'kalavasos': 'southern-conveyor', 'lefkara': 'southern-conveyor',
  'dipotamos': 'southern-conveyor', 'germasoyeia': 'southern-conveyor', 'arminou': 'southern-conveyor',
  'polemidia': 'southern-conveyor', 'achna': 'southern-conveyor',
  'asprokremmos': 'paphos', 'kannaviou': 'paphos', 'mavrokolympos': 'paphos',
  'evretou': 'chrysochou', 'argaka': 'chrysochou', 'pomos': 'chrysochou', 'agia-marina': 'chrysochou',
  'vyzakia': 'nicosia', 'xyliatos': 'nicosia', 'kalopanagiotis': 'nicosia',
  'tamassos': 'recharge-other', 'klirou-malounta': 'recharge-other', 'solea': 'recharge-other',
};

export function getRegionSlugForDam(damSlug: string): string | undefined {
  return DAM_TO_REGION[damSlug];
}

// Ordered list of dams per region slug (for footer rendering)
export const REGION_DAMS: Record<string, string[]> = {
  'nicosia': ['vyzakia', 'xyliatos', 'kalopanagiotis'],
  'paphos': ['asprokremmos', 'kannaviou', 'mavrokolympos'],
  'southern-conveyor': ['kouris', 'kalavasos', 'lefkara', 'dipotamos', 'germasoyeia', 'arminou', 'polemidia', 'achna'],
  'chrysochou': ['evretou', 'argaka', 'pomos', 'agia-marina'],
  'recharge-other': ['tamassos', 'klirou-malounta', 'solea'],
};
