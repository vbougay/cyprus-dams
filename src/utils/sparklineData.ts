import { Reservoir } from '../types';
import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';

export interface SparklineDataPoint {
  date: string;
  percentage: number;
}

// Complete name-to-key mapping for all 21 reservoirs,
// handling both old and new name variants
const RESERVOIR_NAME_TO_HISTORICAL_KEY: Record<string, keyof HistoricalStorageEntry> = {
  'Kouris': 'kouris',
  'Kalavasos': 'kalavasos',
  'Lefkara': 'lefkara',
  'Dipotamos': 'dipotamos',
  'Germasoyeia': 'germasoyeia',
  'Arminou': 'arminou',
  'Polemidia': 'polemidia',
  'Achna': 'achna',
  'Asprokremmos': 'asprokremmos',
  'Kannaviou': 'kannaviou',
  'Mavrokolympos': 'mavrokolympos',
  'Evretou': 'evretou',
  'Argaka': 'argaka',
  'Pomos': 'pomos',
  'Agia Marina': 'agiaMarina',
  'Vyzakia': 'vyzakia',
  'Xyliatos': 'xyliatos',
  'Kalopanagiotis': 'kalopanagiotis',
  'Tamassos': 'tamassos',
  'Klirou-Malounta': 'klirouMalounta',
  'Solea': 'solea',
};

/**
 * Compute sparkline data for all reservoirs in a single pass.
 * Filters historical data to the trailing 12 months, converts MCM to percentage.
 */
export function getAllSparklineData(reservoirs: Reservoir[]): Map<string, SparklineDataPoint[]> {
  const result = new Map<string, SparklineDataPoint[]>();
  if (historicalStorageData.length === 0) return result;

  // Determine date range: last 12 months from the latest entry
  const latestDate = historicalStorageData[historicalStorageData.length - 1].date;
  const cutoff = new Date(latestDate);
  cutoff.setFullYear(cutoff.getFullYear() - 1);
  const cutoffStr = cutoff.toISOString().slice(0, 10);

  // Filter historical data to trailing 12 months
  const recentData = historicalStorageData.filter(entry => entry.date >= cutoffStr);

  // Build capacity lookup from current reservoir data
  const capacityMap = new Map<string, number>();
  for (const r of reservoirs) {
    const key = RESERVOIR_NAME_TO_HISTORICAL_KEY[r.name];
    if (key) capacityMap.set(r.name, r.capacity);
  }

  // Extract sparkline data for each reservoir
  for (const reservoir of reservoirs) {
    const histKey = RESERVOIR_NAME_TO_HISTORICAL_KEY[reservoir.name];
    if (!histKey || reservoir.capacity <= 0) {
      result.set(reservoir.name, []);
      continue;
    }

    const points: SparklineDataPoint[] = [];
    for (const entry of recentData) {
      const value = entry[histKey] as number | null;
      if (value != null) {
        points.push({
          date: entry.date,
          percentage: Math.min((value / reservoir.capacity) * 100, 100),
        });
      }
    }
    result.set(reservoir.name, points);
  }

  return result;
}

/**
 * Find the max and min data points in a sparkline series.
 */
export function getSparklineExtremes(data: SparklineDataPoint[]): { max: SparklineDataPoint; min: SparklineDataPoint } | null {
  if (data.length === 0) return null;
  let max = data[0];
  let min = data[0];
  for (const point of data) {
    if (point.percentage > max.percentage) max = point;
    if (point.percentage < min.percentage) min = point;
  }
  return { max, min };
}
