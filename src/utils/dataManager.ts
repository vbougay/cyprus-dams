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
import * as data18Jul from './data-18-jul-2025';
import * as data04Jul from './data-04-jul-2025';
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
 * Default to the most recent data set (July 18, 2025)
 */
let currentDataSetId = '18-JUL-2025';

// Function to get the current data module
const getCurrentDataModule = () => {
  const dataset = availableDataSets.find(ds => ds.id === currentDataSetId);
  return dataset?.module || data17Mar;
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
