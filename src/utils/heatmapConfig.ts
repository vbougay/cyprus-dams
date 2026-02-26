import { HistoricalStorageEntry } from '@/utils/historicalStorageData';

export interface ReservoirMeta {
  key: keyof HistoricalStorageEntry;
  name: string;
  capacity: number;
}

export interface RegionGroup {
  region: string;
  reservoirs: ReservoirMeta[];
}

export const REGIONS: RegionGroup[] = [
  {
    region: 'southernConveyor',
    reservoirs: [
      { key: 'kouris', name: 'Kouris', capacity: 115.0 },
      { key: 'kalavasos', name: 'Kalavasos', capacity: 17.1 },
      { key: 'lefkara', name: 'Lefkara', capacity: 13.85 },
      { key: 'dipotamos', name: 'Dipotamos', capacity: 15.5 },
      { key: 'germasoyeia', name: 'Germasoyeia', capacity: 13.5 },
      { key: 'arminou', name: 'Arminou', capacity: 4.3 },
      { key: 'polemidia', name: 'Polemidia', capacity: 3.4 },
      { key: 'achna', name: 'Achna', capacity: 6.8 },
    ],
  },
  {
    region: 'paphos',
    reservoirs: [
      { key: 'asprokremmos', name: 'Asprokremmos', capacity: 52.375 },
      { key: 'kannaviou', name: 'Kannaviou', capacity: 17.168 },
      { key: 'mavrokolympos', name: 'Mavrokolympos', capacity: 2.18 },
    ],
  },
  {
    region: 'chrysochou',
    reservoirs: [
      { key: 'evretou', name: 'Evretou', capacity: 24.0 },
      { key: 'argaka', name: 'Argaka', capacity: 0.99 },
      { key: 'pomos', name: 'Pomos', capacity: 0.86 },
      { key: 'agiaMarina', name: 'Agia Marina', capacity: 0.298 },
    ],
  },
  {
    region: 'nicosia',
    reservoirs: [
      { key: 'vyzakia', name: 'Vyzakia', capacity: 1.69 },
      { key: 'xyliatos', name: 'Xyliatos', capacity: 1.43 },
      { key: 'kalopanagiotis', name: 'Kalopanagiotis', capacity: 0.363 },
    ],
  },
  {
    region: 'rechargeOther',
    reservoirs: [
      { key: 'tamassos', name: 'Tamassos', capacity: 2.8 },
      { key: 'klirouMalounta', name: 'Klirou-Malounta', capacity: 2.0 },
      { key: 'solea', name: 'Solea', capacity: 4.454 },
    ],
  },
];

export function getCellColor(percentage: number | null, isDark: boolean): string {
  if (percentage === null) return isDark ? '#1f2937' : '#e5e7eb';
  if (percentage >= 100) return isDark ? '#0e7490' : '#0ea5e9';
  const p = Math.max(0, Math.min(100, percentage));
  const hue = (p / 100) * 120;
  const sat = isDark ? 65 : 75;
  const lit = isDark ? 35 : 45;
  return `hsl(${hue}, ${sat}%, ${lit}%)`;
}
