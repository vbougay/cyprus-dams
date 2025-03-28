import { Reservoir, ReservoirRegion, RegionTotal, YearlyInflowData } from '../types';
import * as data17Mar from './data-17-mar-2025';
import * as data28Mar from './data-28-mar-2025';
import { 
  calculateDrainDate, 
  calculateRegionDrainDate, 
  getReservoirsByRegion as getReservoirsByRegionUtil, 
  calculateRegionTotals as calculateRegionTotalsUtil, 
  calculateGrandTotal as calculateGrandTotalUtil, 
  getReservoirsWithDrainDates as getReservoirsWithDrainDatesUtil 
} from './reservoirUtils';

// Define available data sets with their dates
export const availableDataSets = [
  { id: '28-MAR-2025', label: 'March 28, 2025', value: '28-MAR-2025' },
  { id: '17-MAR-2025', label: 'March 17, 2025', value: '17-MAR-2025' },
];

// Default to the most recent data set
let currentDataSetId = '28-MAR-2025';

// Function to get the current data module
const getCurrentDataModule = () => {
  return currentDataSetId === '17-MAR-2025' ? data17Mar : data28Mar;
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

// Get summary of changes between March 17 and March 28, 2025
// Only available for the March 28, 2025 dataset
export const getSummaryChanges = (): string | null => {
  // Check if the current data module has the getSummaryChanges function
  if (currentDataSetId === '28-MAR-2025' && 'getSummaryChanges' in data28Mar) {
    return data28Mar.getSummaryChanges();
  }
  return null;
};
