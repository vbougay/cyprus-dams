import { Reservoir, ReservoirRegion, RegionTotal, YearlyInflowData } from '../types';
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
import {
  calculateDrainDate,
  calculateRegionDrainDate,
  getReservoirsByRegion as getReservoirsByRegionUtil,
  calculateRegionTotals as calculateRegionTotalsUtil,
  calculateGrandTotal as calculateGrandTotalUtil,
  getReservoirsWithDrainDates as getReservoirsWithDrainDatesUtil
} from './reservoirUtils';

// Define available data sets with their dates and module references
export const availableDataSets = [
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

/**
 * Default to the most recent data set (February 16, 2026)
 */
let currentDataSetId = '20-FEB-2026';

// Function to get the current data module
const getCurrentDataModule = () => {
  const dataset = availableDataSets.find(ds => ds.id === currentDataSetId);
  return dataset?.module || data20Feb;
};

// Function to set the current data set
export const setCurrentDataSet = (dataSetId: string) => {
  if (availableDataSets.some(ds => ds.id === dataSetId)) {
    currentDataSetId = dataSetId;
    return true;
  }
  return false;
};

// Function to get the current data set ID
export const getCurrentDataSetId = (): string => {
  return currentDataSetId;
};

// Re-export all functions from the data modules, but make them use the current data set
export const reservoirData = (): Reservoir[] => {
  return getCurrentDataModule().reservoirData;
};

// Export utility functions directly
export { calculateDrainDate, calculateRegionDrainDate };

// Apply utility functions to the current data set
export const getReservoirsByRegion = (region: ReservoirRegion): Reservoir[] => {
  return getReservoirsByRegionUtil(reservoirData(), region);
};

export const calculateRegionTotals = (): RegionTotal[] => {
  return calculateRegionTotalsUtil(reservoirData());
};

export const calculateGrandTotal = (): RegionTotal => {
  return calculateGrandTotalUtil(reservoirData());
};

export const getReservoirsWithDrainDates = (): Reservoir[] => {
  return getReservoirsWithDrainDatesUtil(reservoirData());
};

export const yearlyInflowData = (): YearlyInflowData[] => {
  return getCurrentDataModule().yearlyInflowData;
};

export const getReportDate = (): string => {
  return getCurrentDataModule().getReportDate();
};

/**
 * Get October baseline storage for water balance calculations.
 * Returns grand total storage from the earliest October dataset,
 * which serves as the season-start baseline.
 * - `currentStorage` ≈ Oct of current water year (e.g., Oct 2025 for 25/26)
 * - `lastYearStorage` ≈ Oct of previous water year (e.g., Oct 2024 for 24/25)
 */
export const getOctoberBaselineStorage = (): { currentStorage: number; lastYearStorage: number } | null => {
  // Find the earliest October dataset (closest to Oct 1st)
  const octDataset = availableDataSets
    .filter(ds => ds.id.includes('-OCT-'))
    .sort((a, b) => {
      // Sort by date ascending to get earliest October
      const dayA = parseInt(a.id.split('-')[0]);
      const dayB = parseInt(b.id.split('-')[0]);
      return dayA - dayB;
    })[0];

  if (!octDataset) return null;

  const octGrandTotal = calculateGrandTotalUtil(octDataset.module.reservoirData);
  return {
    currentStorage: octGrandTotal.storage.current.amount,
    lastYearStorage: octGrandTotal.storage.lastYear.amount,
  };
};

/**
 * Get summary of changes for the selected dataset.
 */
export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string | null => {
  const dataset = availableDataSets.find(ds => ds.id === currentDataSetId);
  const currentModule = dataset?.module;
  
  if (currentModule && 'getSummaryChanges' in currentModule && typeof currentModule.getSummaryChanges === 'function') {
    return currentModule.getSummaryChanges(language);
  }
  return null;
};
