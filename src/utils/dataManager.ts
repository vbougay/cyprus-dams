import { Reservoir, ReservoirRegion, RegionTotal, YearlyInflowData, DrainForecast } from '../types';
import * as dataDefault from './data-25-AUG-2026';
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

// --- Lazy data module loading ---
// Only the default (latest) dataset is statically imported.
// All others are loaded on demand to reduce initial bundle size.

interface DataModule {
  reservoirData: Reservoir[];
  yearlyInflowData: YearlyInflowData[];
  getReportDate: () => string;
  getDamSummary?: (damName: string, language?: 'en' | 'el' | 'ru') => string | null;
  getSummaryChanges?: (language?: 'en' | 'el' | 'ru') => string;
  waterTransferred?: { from: string; to: string; sinceOct: number };
}

const moduleCache = new Map<string, DataModule>([
  ['25-AUG-2026', dataDefault],
]);

const importMap: Record<string, () => Promise<DataModule>> = {
  '24-AUG-2026': () => import('./data-24-AUG-2026'),
  '21-AUG-2026': () => import('./data-21-AUG-2026'),
  '20-AUG-2026': () => import('./data-20-AUG-2026'),
  '19-AUG-2026': () => import('./data-19-AUG-2026'),
  '13-AUG-2026': () => import('./data-13-AUG-2026'),
  '11-AUG-2026': () => import('./data-11-AUG-2026'),
  '07-AUG-2026': () => import('./data-07-AUG-2026'),
  '06-AUG-2026': () => import('./data-06-AUG-2026'),
  '05-AUG-2026': () => import('./data-05-AUG-2026'),
  '03-AUG-2026': () => import('./data-03-AUG-2026'),
  '31-JUL-2026': () => import('./data-31-JUL-2026'),
  '29-JUL-2026': () => import('./data-29-JUL-2026'),
  '27-JUL-2026': () => import('./data-27-JUL-2026'),
  '24-JUL-2026': () => import('./data-24-JUL-2026'),
  '23-JUL-2026': () => import('./data-23-JUL-2026'),
  '22-JUL-2026': () => import('./data-22-JUL-2026'),
  '21-JUL-2026': () => import('./data-21-JUL-2026'),
  '20-JUL-2026': () => import('./data-20-JUL-2026'),
  '16-JUL-2026': () => import('./data-16-JUL-2026'),
  '15-JUL-2026': () => import('./data-15-JUL-2026'),
  '14-JUL-2026': () => import('./data-14-JUL-2026'),
  '13-JUL-2026': () => import('./data-13-JUL-2026'),
  '10-JUL-2026': () => import('./data-10-JUL-2026'),
  '09-JUL-2026': () => import('./data-09-JUL-2026'),
  '08-JUL-2026': () => import('./data-08-JUL-2026'),
  '07-JUL-2026': () => import('./data-07-JUL-2026'),
  '06-JUL-2026': () => import('./data-06-JUL-2026'),
  '30-JUN-2026': () => import('./data-30-JUN-2026'),
  '29-JUN-2026': () => import('./data-29-JUN-2026'),
  '26-JUN-2026': () => import('./data-26-JUN-2026'),
  '25-JUN-2026': () => import('./data-25-JUN-2026'),
  '23-JUN-2026': () => import('./data-23-JUN-2026'),
  '22-JUN-2026': () => import('./data-22-JUN-2026'),
  '19-JUN-2026': () => import('./data-19-JUN-2026'),
  '17-JUN-2026': () => import('./data-17-JUN-2026'),
  '16-JUN-2026': () => import('./data-16-JUN-2026'),
  '15-JUN-2026': () => import('./data-15-JUN-2026'),
  '12-JUN-2026': () => import('./data-12-JUN-2026'),
  '11-JUN-2026': () => import('./data-11-JUN-2026'),
  '10-JUN-2026': () => import('./data-10-JUN-2026'),
  '09-JUN-2026': () => import('./data-09-JUN-2026'),
  '08-JUN-2026': () => import('./data-08-JUN-2026'),
  '05-JUN-2026': () => import('./data-05-JUN-2026'),
  '04-JUN-2026': () => import('./data-04-JUN-2026'),
  '03-JUN-2026': () => import('./data-03-JUN-2026'),
  '02-JUN-2026': () => import('./data-02-JUN-2026'),
  '29-MAY-2026': () => import('./data-29-MAY-2026'),
  '28-MAY-2026': () => import('./data-28-MAY-2026'),
  '27-MAY-2026': () => import('./data-27-MAY-2026'),
  '26-MAY-2026': () => import('./data-26-MAY-2026'),
  '22-MAY-2026': () => import('./data-22-MAY-2026'),
  '21-MAY-2026': () => import('./data-21-MAY-2026'),
  '20-MAY-2026': () => import('./data-20-MAY-2026'),
  '12-MAY-2026': () => import('./data-12-MAY-2026'),
  '11-MAY-2026': () => import('./data-11-MAY-2026'),
  '08-MAY-2026': () => import('./data-08-MAY-2026'),
  '07-MAY-2026': () => import('./data-07-MAY-2026'),
  '06-MAY-2026': () => import('./data-06-MAY-2026'),
  '05-MAY-2026': () => import('./data-05-MAY-2026'),
  '04-MAY-2026': () => import('./data-04-MAY-2026'),
  '30-APR-2026': () => import('./data-30-APR-2026'),
  '29-APR-2026': () => import('./data-29-APR-2026'),
  '28-APR-2026': () => import('./data-28-APR-2026'),
  '27-APR-2026': () => import('./data-27-APR-2026'),
  '24-APR-2026': () => import('./data-24-APR-2026'),
  '23-APR-2026': () => import('./data-23-APR-2026'),
  '22-APR-2026': () => import('./data-22-APR-2026'),
  '21-APR-2026': () => import('./data-21-APR-2026'),
  '20-APR-2026': () => import('./data-20-APR-2026'),
  '16-APR-2026': () => import('./data-16-APR-2026'),
  '15-APR-2026': () => import('./data-15-APR-2026'),
  '09-APR-2026': () => import('./data-09-APR-2026'),
  '08-APR-2026': () => import('./data-08-APR-2026'),
  '07-APR-2026': () => import('./data-07-APR-2026'),
  '06-APR-2026': () => import('./data-06-APR-2026'),
  '03-APR-2026': () => import('./data-03-APR-2026'),
  '02-APR-2026': () => import('./data-02-APR-2026'),
  '31-MAR-2026': () => import('./data-31-MAR-2026'),
  '30-MAR-2026': () => import('./data-30-MAR-2026'),
  '27-MAR-2026': () => import('./data-27-MAR-2026'),
  '26-MAR-2026': () => import('./data-26-MAR-2026'),
  '24-MAR-2026': () => import('./data-24-MAR-2026'),
  '23-MAR-2026': () => import('./data-23-MAR-2026'),
  '20-MAR-2026': () => import('./data-20-MAR-2026'),
  '18-MAR-2026': () => import('./data-18-MAR-2026'),
  '16-MAR-2026': () => import('./data-16-MAR-2026'),
  '13-MAR-2026': () => import('./data-13-MAR-2026'),
  '11-MAR-2026': () => import('./data-11-MAR-2026'),
  '09-MAR-2026': () => import('./data-09-MAR-2026'),
  '06-MAR-2026': () => import('./data-06-MAR-2026'),
  '04-MAR-2026': () => import('./data-04-MAR-2026'),
  '02-MAR-2026': () => import('./data-02-MAR-2026'),
  '27-FEB-2026': () => import('./data-27-FEB-2026'),
  '25-FEB-2026': () => import('./data-25-FEB-2026'),
  '24-FEB-2026': () => import('./data-24-FEB-2026'),
  '20-FEB-2026': () => import('./data-20-FEB-2026'),
  '16-FEB-2026': () => import('./data-16-FEB-2026'),
  '09-FEB-2026': () => import('./data-09-FEB-2026'),
  '02-FEB-2026': () => import('./data-02-FEB-2026'),
  '26-JAN-2026': () => import('./data-26-JAN-2026'),
  '19-JAN-2026': () => import('./data-19-JAN-2026'),
  '12-JAN-2026': () => import('./data-12-JAN-2026'),
  '05-JAN-2026': () => import('./data-05-JAN-2026'),
  '29-DEC-2025': () => import('./data-29-DEC-2025'),
  '23-DEC-2025': () => import('./data-23-DEC-2025'),
  '15-DEC-2025': () => import('./data-15-DEC-2025'),
  '11-DEC-2025': () => import('./data-11-DEC-2025'),
  '05-DEC-2025': () => import('./data-05-DEC-2025'),
  '24-NOV-2025': () => import('./data-24-NOV-2025'),
  '18-NOV-2025': () => import('./data-18-NOV-2025'),
  '10-NOV-2025': () => import('./data-10-NOV-2025'),
  '03-NOV-2025': () => import('./data-03-NOV-2025'),
  '27-OCT-2025': () => import('./data-27-OCT-2025'),
  '13-OCT-2025': () => import('./data-13-OCT-2025'),
  '10-OCT-2025': () => import('./data-10-OCT-2025'),
  '22-SEP-2025': () => import('./data-22-sep-2025'),
  '01-SEP-2025': () => import('./data-01-sep-2025'),
  '25-AUG-2025': () => import('./data-25-aug-2025'),
  '08-AUG-2025': () => import('./data-08-aug-2025'),
  '28-JUL-2025': () => import('./data-28-jul-2025'),
  '18-JUL-2025': () => import('./data-18-jul-2025'),
  '04-JUL-2025': () => import('./data-04-jul-2025'),
  '27-JUN-2025': () => import('./data-27-jun-2025'),
  '17-JUN-2025': () => import('./data-17-jun-2025'),
  '10-JUN-2025': () => import('./data-10-jun-2025'),
  '06-JUN-2025': () => import('./data-06-jun-2025'),
  '02-JUN-2025': () => import('./data-02-jun-2025'),
  '23-MAY-2025': () => import('./data-23-may-2025'),
  '16-MAY-2025': () => import('./data-16-may-2025'),
  '09-MAY-2025': () => import('./data-09-may-2025'),
  '28-APR-2025': () => import('./data-28-apr-2025'),
  '11-APR-2025': () => import('./data-11-apr-2025'),
  '28-MAR-2025': () => import('./data-28-mar-2025'),
  '17-MAR-2025': () => import('./data-17-mar-2025'),
};

/** Load a dataset module into the cache. No-op if already cached. */
export async function ensureDatasetLoaded(id: string): Promise<void> {
  if (moduleCache.has(id)) return;
  const loader = importMap[id];
  if (loader) {
    const mod = await loader();
    moduleCache.set(id, mod);
  }
}

// Define available data sets (metadata only — modules loaded on demand)
export const availableDataSets = [
  { id: '25-AUG-2026', label: 'August 25, 2026', value: '25-AUG-2026' },
  { id: '24-AUG-2026', label: 'August 24, 2026', value: '24-AUG-2026' },
  { id: '21-AUG-2026', label: 'August 21, 2026', value: '21-AUG-2026' },
  { id: '20-AUG-2026', label: 'August 20, 2026', value: '20-AUG-2026' },
  { id: '19-AUG-2026', label: 'August 19, 2026', value: '19-AUG-2026' },
  { id: '13-AUG-2026', label: 'August 13, 2026', value: '13-AUG-2026' },
  { id: '11-AUG-2026', label: 'August 11, 2026', value: '11-AUG-2026' },
  { id: '07-AUG-2026', label: 'August 7, 2026', value: '07-AUG-2026' },
  { id: '06-AUG-2026', label: 'August 6, 2026', value: '06-AUG-2026' },
  { id: '05-AUG-2026', label: 'August 5, 2026', value: '05-AUG-2026' },
  { id: '03-AUG-2026', label: 'August 3, 2026', value: '03-AUG-2026' },
  { id: '31-JUL-2026', label: 'July 31, 2026', value: '31-JUL-2026' },
  { id: '29-JUL-2026', label: 'July 29, 2026', value: '29-JUL-2026' },
  { id: '27-JUL-2026', label: 'July 27, 2026', value: '27-JUL-2026' },
  { id: '24-JUL-2026', label: 'July 24, 2026', value: '24-JUL-2026' },
  { id: '23-JUL-2026', label: 'July 23, 2026', value: '23-JUL-2026' },
  { id: '22-JUL-2026', label: 'July 22, 2026', value: '22-JUL-2026' },
  { id: '21-JUL-2026', label: 'July 21, 2026', value: '21-JUL-2026' },
  { id: '20-JUL-2026', label: 'July 20, 2026', value: '20-JUL-2026' },
  { id: '16-JUL-2026', label: 'July 16, 2026', value: '16-JUL-2026' },
  { id: '15-JUL-2026', label: 'July 15, 2026', value: '15-JUL-2026' },
  { id: '14-JUL-2026', label: 'July 14, 2026', value: '14-JUL-2026' },
  { id: '13-JUL-2026', label: 'July 13, 2026', value: '13-JUL-2026' },
  { id: '10-JUL-2026', label: 'July 10, 2026', value: '10-JUL-2026' },
  { id: '09-JUL-2026', label: 'July 9, 2026', value: '09-JUL-2026' },
  { id: '08-JUL-2026', label: 'July 8, 2026', value: '08-JUL-2026' },
  { id: '07-JUL-2026', label: 'July 7, 2026', value: '07-JUL-2026' },
  { id: '06-JUL-2026', label: 'July 6, 2026', value: '06-JUL-2026' },
  { id: '30-JUN-2026', label: 'June 30, 2026', value: '30-JUN-2026' },
  { id: '29-JUN-2026', label: 'June 29, 2026', value: '29-JUN-2026' },
  { id: '26-JUN-2026', label: 'June 26, 2026', value: '26-JUN-2026' },
  { id: '25-JUN-2026', label: 'June 25, 2026', value: '25-JUN-2026' },
  { id: '23-JUN-2026', label: 'June 23, 2026', value: '23-JUN-2026' },
  { id: '22-JUN-2026', label: 'June 22, 2026', value: '22-JUN-2026' },
  { id: '19-JUN-2026', label: 'June 19, 2026', value: '19-JUN-2026' },
  { id: '17-JUN-2026', label: 'June 17, 2026', value: '17-JUN-2026' },
  { id: '16-JUN-2026', label: 'June 16, 2026', value: '16-JUN-2026' },
  { id: '15-JUN-2026', label: 'June 15, 2026', value: '15-JUN-2026' },
  { id: '12-JUN-2026', label: 'June 12, 2026', value: '12-JUN-2026' },
  { id: '11-JUN-2026', label: 'June 11, 2026', value: '11-JUN-2026' },
  { id: '10-JUN-2026', label: 'June 10, 2026', value: '10-JUN-2026' },
  { id: '09-JUN-2026', label: 'June 9, 2026', value: '09-JUN-2026' },
  { id: '08-JUN-2026', label: 'June 8, 2026', value: '08-JUN-2026' },
  { id: '05-JUN-2026', label: 'June 5, 2026', value: '05-JUN-2026' },
  { id: '04-JUN-2026', label: 'June 4, 2026', value: '04-JUN-2026' },
  { id: '03-JUN-2026', label: 'June 3, 2026', value: '03-JUN-2026' },
  { id: '02-JUN-2026', label: 'June 2, 2026', value: '02-JUN-2026' },
  { id: '29-MAY-2026', label: 'May 29, 2026', value: '29-MAY-2026' },
  { id: '28-MAY-2026', label: 'May 28, 2026', value: '28-MAY-2026' },
  { id: '27-MAY-2026', label: 'May 27, 2026', value: '27-MAY-2026' },
  { id: '26-MAY-2026', label: 'May 26, 2026', value: '26-MAY-2026' },
  { id: '22-MAY-2026', label: 'May 22, 2026', value: '22-MAY-2026' },
  { id: '21-MAY-2026', label: 'May 21, 2026', value: '21-MAY-2026' },
  { id: '20-MAY-2026', label: 'May 20, 2026', value: '20-MAY-2026' },
  { id: '12-MAY-2026', label: 'May 12, 2026', value: '12-MAY-2026' },
  { id: '11-MAY-2026', label: 'May 11, 2026', value: '11-MAY-2026' },
  { id: '08-MAY-2026', label: 'May 8, 2026', value: '08-MAY-2026' },
  { id: '07-MAY-2026', label: 'May 7, 2026', value: '07-MAY-2026' },
  { id: '06-MAY-2026', label: 'May 6, 2026', value: '06-MAY-2026' },
  { id: '05-MAY-2026', label: 'May 5, 2026', value: '05-MAY-2026' },
  { id: '04-MAY-2026', label: 'May 4, 2026', value: '04-MAY-2026' },
  { id: '30-APR-2026', label: 'April 30, 2026', value: '30-APR-2026' },
  { id: '29-APR-2026', label: 'April 29, 2026', value: '29-APR-2026' },
  { id: '28-APR-2026', label: 'April 28, 2026', value: '28-APR-2026' },
  { id: '27-APR-2026', label: 'April 27, 2026', value: '27-APR-2026' },
  { id: '24-APR-2026', label: 'April 24, 2026', value: '24-APR-2026' },
  { id: '23-APR-2026', label: 'April 23, 2026', value: '23-APR-2026' },
  { id: '22-APR-2026', label: 'April 22, 2026', value: '22-APR-2026' },
  { id: '21-APR-2026', label: 'April 21, 2026', value: '21-APR-2026' },
  { id: '20-APR-2026', label: 'April 20, 2026', value: '20-APR-2026' },
  { id: '16-APR-2026', label: 'April 16, 2026', value: '16-APR-2026' },
  { id: '15-APR-2026', label: 'April 15, 2026', value: '15-APR-2026' },
  { id: '09-APR-2026', label: 'April 9, 2026', value: '09-APR-2026' },
  { id: '08-APR-2026', label: 'April 8, 2026', value: '08-APR-2026' },
  { id: '07-APR-2026', label: 'April 7, 2026', value: '07-APR-2026' },
  { id: '06-APR-2026', label: 'April 6, 2026', value: '06-APR-2026' },
  { id: '03-APR-2026', label: 'April 3, 2026', value: '03-APR-2026' },
  { id: '02-APR-2026', label: 'April 2, 2026', value: '02-APR-2026' },
  { id: '31-MAR-2026', label: 'March 31, 2026', value: '31-MAR-2026' },
  { id: '30-MAR-2026', label: 'March 30, 2026', value: '30-MAR-2026' },
  { id: '27-MAR-2026', label: 'March 27, 2026', value: '27-MAR-2026' },
  { id: '26-MAR-2026', label: 'March 26, 2026', value: '26-MAR-2026' },
  { id: '24-MAR-2026', label: 'March 24, 2026', value: '24-MAR-2026' },
  { id: '23-MAR-2026', label: 'March 23, 2026', value: '23-MAR-2026' },
  { id: '20-MAR-2026', label: 'March 20, 2026', value: '20-MAR-2026' },
  { id: '18-MAR-2026', label: 'March 18, 2026', value: '18-MAR-2026' },
  { id: '16-MAR-2026', label: 'March 16, 2026', value: '16-MAR-2026' },
  { id: '13-MAR-2026', label: 'March 13, 2026', value: '13-MAR-2026' },
  { id: '11-MAR-2026', label: 'March 11, 2026', value: '11-MAR-2026' },
  { id: '09-MAR-2026', label: 'March 9, 2026', value: '09-MAR-2026' },
  { id: '06-MAR-2026', label: 'March 6, 2026', value: '06-MAR-2026' },
  { id: '04-MAR-2026', label: 'March 4, 2026', value: '04-MAR-2026' },
  { id: '02-MAR-2026', label: 'March 2, 2026', value: '02-MAR-2026' },
  { id: '27-FEB-2026', label: 'February 27, 2026', value: '27-FEB-2026' },
  { id: '25-FEB-2026', label: 'February 25, 2026', value: '25-FEB-2026' },
  { id: '24-FEB-2026', label: 'February 24, 2026', value: '24-FEB-2026' },
  { id: '20-FEB-2026', label: 'February 20, 2026', value: '20-FEB-2026' },
  { id: '16-FEB-2026', label: 'February 16, 2026', value: '16-FEB-2026' },
  { id: '09-FEB-2026', label: 'February 9, 2026', value: '09-FEB-2026' },
  { id: '02-FEB-2026', label: 'February 2, 2026', value: '02-FEB-2026' },
  { id: '26-JAN-2026', label: 'January 26, 2026', value: '26-JAN-2026' },
  { id: '19-JAN-2026', label: 'January 19, 2026', value: '19-JAN-2026' },
  { id: '12-JAN-2026', label: 'January 12, 2026', value: '12-JAN-2026' },
  { id: '05-JAN-2026', label: 'January 5, 2026', value: '05-JAN-2026' },
  { id: '29-DEC-2025', label: 'December 29, 2025', value: '29-DEC-2025' },
  { id: '23-DEC-2025', label: 'December 23, 2025', value: '23-DEC-2025' },
  { id: '15-DEC-2025', label: 'December 15, 2025', value: '15-DEC-2025' },
  { id: '11-DEC-2025', label: 'December 11, 2025', value: '11-DEC-2025' },
  { id: '05-DEC-2025', label: 'December 5, 2025', value: '05-DEC-2025' },
  { id: '24-NOV-2025', label: 'November 24, 2025', value: '24-NOV-2025' },
  { id: '18-NOV-2025', label: 'November 18, 2025', value: '18-NOV-2025' },
  { id: '10-NOV-2025', label: 'November 10, 2025', value: '10-NOV-2025' },
  { id: '03-NOV-2025', label: 'November 3, 2025', value: '03-NOV-2025' },
  { id: '27-OCT-2025', label: 'October 27, 2025', value: '27-OCT-2025' },
  { id: '13-OCT-2025', label: 'October 13, 2025', value: '13-OCT-2025' },
  { id: '10-OCT-2025', label: 'October 10, 2025', value: '10-OCT-2025' },
  { id: '22-SEP-2025', label: 'September 22, 2025', value: '22-SEP-2025' },
  { id: '01-SEP-2025', label: 'September 1, 2025', value: '01-SEP-2025' },
  { id: '25-AUG-2025', label: 'August 25, 2025', value: '25-AUG-2025' },
  { id: '08-AUG-2025', label: 'August 8, 2025', value: '08-AUG-2025' },
  { id: '28-JUL-2025', label: 'July 28, 2025', value: '28-JUL-2025' },
  { id: '18-JUL-2025', label: 'July 18, 2025', value: '18-JUL-2025' },
  { id: '04-JUL-2025', label: 'July 4, 2025', value: '04-JUL-2025' },
  { id: '27-JUN-2025', label: 'June 27, 2025', value: '27-JUN-2025' },
  { id: '17-JUN-2025', label: 'June 17, 2025', value: '17-JUN-2025' },
  { id: '10-JUN-2025', label: 'June 10, 2025', value: '10-JUN-2025' },
  { id: '06-JUN-2025', label: 'June 6, 2025', value: '06-JUN-2025' },
  { id: '02-JUN-2025', label: 'June 2, 2025', value: '02-JUN-2025' },
  { id: '23-MAY-2025', label: 'May 23, 2025', value: '23-MAY-2025' },
  { id: '16-MAY-2025', label: 'May 16, 2025', value: '16-MAY-2025' },
  { id: '09-MAY-2025', label: 'May 9, 2025', value: '09-MAY-2025' },
  { id: '28-APR-2025', label: 'April 28, 2025', value: '28-APR-2025' },
  { id: '11-APR-2025', label: 'April 11, 2025', value: '11-APR-2025' },
  { id: '28-MAR-2025', label: 'March 28, 2025', value: '28-MAR-2025' },
  { id: '17-MAR-2025', label: 'March 17, 2025', value: '17-MAR-2025' },
];

/** The most recent dataset ID (first entry in the sorted array). */
export const DEFAULT_DATASET_ID = availableDataSets[0].id;

// Resolve a dataset module from cache (falls back to default if not yet loaded).
function resolveModule(datasetId?: string): DataModule {
  const id = datasetId || DEFAULT_DATASET_ID;
  return moduleCache.get(id) || moduleCache.get(DEFAULT_DATASET_ID)!;
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

export const getWaterTransferred = (datasetId?: string): { from: string; to: string; sinceOct: number } | undefined => {
  return resolveModule(datasetId).waterTransferred;
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
 * Compute last-7-days inflow for each reservoir by comparing the current dataset
 * to the closest dataset ~7 days prior. Returns a map of reservoir name → 7-day inflow MCM.
 * Returns null if no suitable prior dataset is found.
 */
export const getLast7DaysInflow = async (datasetId?: string): Promise<Map<string, number> | null> => {
  const dsId = resolveId(datasetId);
  const currentParsed = parseReportDate(dsId);
  if (!currentParsed) return null;

  const currentDate = new Date(currentParsed.year, currentParsed.month - 1, currentParsed.day);

  // Find the dataset closest to 7 days before the current one (between 5-10 days)
  let bestDatasetId: string | null = null;
  let bestDiff = Infinity;

  for (const ds of availableDataSets) {
    if (ds.id === dsId) continue;
    const parsed = parseReportDate(ds.id);
    if (!parsed) continue;
    const dsDate = new Date(parsed.year, parsed.month - 1, parsed.day);
    const diffDays = (currentDate.getTime() - dsDate.getTime()) / (1000 * 60 * 60 * 24);
    if (diffDays >= 5 && diffDays <= 10) {
      const distFrom7 = Math.abs(diffDays - 7);
      if (distFrom7 < bestDiff) {
        bestDiff = distFrom7;
        bestDatasetId = ds.id;
      }
    }
  }

  if (!bestDatasetId) return null;

  // Ensure both datasets are loaded before accessing their data
  await ensureDatasetLoaded(dsId);
  await ensureDatasetLoaded(bestDatasetId);

  const currentData = reservoirData(dsId);
  const priorData = reservoirData(bestDatasetId);
  const result = new Map<string, number>();

  for (const reservoir of currentData) {
    const prior = priorData.find(r => r.name === reservoir.name);
    if (prior) {
      const diff = reservoir.inflow.totalSince - prior.inflow.totalSince;
      result.set(reservoir.name, Math.max(0, diff));
    }
  }

  return result;
};

/**
 * Get summary of changes for the selected dataset.
 */
export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en', datasetId?: string): string | null => {
  const mod = resolveModule(datasetId);
  return mod.getSummaryChanges?.(language) ?? null;
};

/**
 * Get a short summary for an individual dam from the selected dataset.
 */
export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en', datasetId?: string): string | null => {
  const mod = resolveModule(datasetId);
  return mod.getDamSummary?.(damName, language) ?? null;
};
