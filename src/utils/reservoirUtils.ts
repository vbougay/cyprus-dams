import { Reservoir, ReservoirRegion, RegionTotal } from '../types';

// Constants for drain date calculations
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const CURRENT_MONTH_INDEX = new Date().getMonth(); // 0-based (0 = January)
export const CURRENT_YEAR = new Date().getFullYear();

// Calculate average monthly outflow rate based on historical data and current storage trends
export const calculateMonthlyOutflowRate = (reservoir: Reservoir): number => {
  // Calculate the rate of storage decrease over the past year
  const yearlyDecrease = reservoir.storage.lastYear.amount - reservoir.storage.current.amount;
  
  // If storage is increasing, return a negative value to indicate no drain date
  if (yearlyDecrease <= 0) {
    return -1;
  }
  
  // Calculate average monthly decrease (divide by 12 months)
  const avgMonthlyDecrease = yearlyDecrease / 12;
  
  return avgMonthlyDecrease;
};

// Calculate the drain date for a reservoir
export const calculateDrainDate = (reservoir: Reservoir): string => {
  // If reservoir is already empty, return "Already Empty"
  if (reservoir.storage.current.amount <= 0) {
    return "Already Empty";
  }
  
  // Calculate monthly outflow rate
  const monthlyOutflowRate = calculateMonthlyOutflowRate(reservoir);
  
  // If outflow rate is negative or zero, reservoir is not draining
  if (monthlyOutflowRate <= 0) {
    return "Not Draining";
  }
  
  // Calculate months until empty
  const monthsUntilEmpty = reservoir.storage.current.amount / monthlyOutflowRate;
  
  // If more than 10 years, return "Beyond 10 Years"
  if (monthsUntilEmpty > 120) {
    return "Beyond 10 Years";
  }
  
  // Calculate the drain date
  const drainDate = new Date();
  drainDate.setMonth(drainDate.getMonth() + Math.floor(monthsUntilEmpty));
  
  // Format the date as MM/YYYY
  const month = drainDate.getMonth() + 1; // Convert 0-based to 1-based
  const year = drainDate.getFullYear();
  
  return `${month}/${year}`;
};

// Calculate the drain date for a region based on its reservoirs
export const calculateRegionDrainDate = (regionTotal: RegionTotal, reservoirs: Reservoir[]): string => {
  // If region is already empty, return "Already Empty"
  if (regionTotal.storage.current.amount <= 0) {
    return "Already Empty";
  }
  
  // Calculate yearly decrease rate for the region
  const yearlyDecrease = regionTotal.storage.lastYear.amount - regionTotal.storage.current.amount;
  
  // If storage is increasing, return "Not Draining"
  if (yearlyDecrease <= 0) {
    return "Not Draining";
  }
  
  // Calculate average monthly decrease
  const avgMonthlyDecrease = yearlyDecrease / 12;
  
  // Calculate months until empty
  const monthsUntilEmpty = regionTotal.storage.current.amount / avgMonthlyDecrease;
  
  // If more than 10 years, return "Beyond 10 Years"
  if (monthsUntilEmpty > 120) {
    return "Beyond 10 Years";
  }
  
  // Calculate the drain date
  const drainDate = new Date();
  drainDate.setMonth(drainDate.getMonth() + Math.floor(monthsUntilEmpty));
  
  // Format the date as MM/YYYY
  const month = drainDate.getMonth() + 1; // Convert 0-based to 1-based
  const year = drainDate.getFullYear();
  
  return `${month}/${year}`;
};

// Group reservoirs by region
export const getReservoirsByRegion = (reservoirData: Reservoir[], region: ReservoirRegion): Reservoir[] => {
  return reservoirData.filter(reservoir => reservoir.region === region);
};

// Calculate region totals
export const calculateRegionTotals = (reservoirData: Reservoir[]): RegionTotal[] => {
  const regions: ReservoirRegion[] = ['Southern Conveyor', 'Paphos', 'Chrysochou', 'Nicosia', 'Recharge/Other'];
  
  return regions.map(region => {
    const reservoirs = getReservoirsByRegion(reservoirData, region);
    
    const capacity = reservoirs.reduce((total, reservoir) => total + reservoir.capacity, 0);
    
    const inflowLast24Hours = reservoirs.reduce((total, reservoir) => total + reservoir.inflow.last24Hours, 0);
    const inflowTotalSince = reservoirs.reduce((total, reservoir) => total + reservoir.inflow.totalSince, 0);
    
    const currentStorage = reservoirs.reduce((total, reservoir) => total + reservoir.storage.current.amount, 0);
    const currentPercentage = capacity > 0 ? (currentStorage / capacity) * 100 : 0;
    
    const lastYearStorage = reservoirs.reduce((total, reservoir) => total + reservoir.storage.lastYear.amount, 0);
    const lastYearPercentage = capacity > 0 ? (lastYearStorage / capacity) * 100 : 0;
    
    // Find the most recent max storage date
    const maxStorageDates = reservoirs.map(r => r.maxStorage.date).filter(d => d !== '');
    const maxStorageDate = maxStorageDates.length > 0 ? maxStorageDates.reduce((a, b) => a > b ? a : b) : '';
    
    const maxStorageAmount = reservoirs.reduce((total, reservoir) => total + reservoir.maxStorage.amount, 0);
    
    // Calculate drain date for the region
    const regionTotal = {
      region,
      capacity,
      inflow: {
        last24Hours: inflowLast24Hours,
        totalSince: inflowTotalSince,
      },
      storage: {
        current: {
          amount: currentStorage,
          percentage: parseFloat(currentPercentage.toFixed(1)),
        },
        lastYear: {
          amount: lastYearStorage,
          percentage: parseFloat(lastYearPercentage.toFixed(1)),
        },
      },
      maxStorage: {
        amount: maxStorageAmount,
        date: maxStorageDate,
      },
    };
    
    const drainDate = calculateRegionDrainDate(regionTotal, reservoirs);
    
    return {
      ...regionTotal,
      drainDate,
    };
  });
};

// Calculate grand total
export const calculateGrandTotal = (reservoirData: Reservoir[]): RegionTotal => {
  const regionTotals = calculateRegionTotals(reservoirData);
  
  const capacity = regionTotals.reduce((total, region) => total + region.capacity, 0);
  
  const inflowLast24Hours = regionTotals.reduce((total, region) => total + region.inflow.last24Hours, 0);
  const inflowTotalSince = regionTotals.reduce((total, region) => total + region.inflow.totalSince, 0);
  
  const currentStorage = regionTotals.reduce((total, region) => total + region.storage.current.amount, 0);
  const currentPercentage = capacity > 0 ? (currentStorage / capacity) * 100 : 0;
  
  const lastYearStorage = regionTotals.reduce((total, region) => total + region.storage.lastYear.amount, 0);
  const lastYearPercentage = capacity > 0 ? (lastYearStorage / capacity) * 100 : 0;
  
  // Find the most recent max storage date from all regions
  const maxStorageDates = regionTotals
    .map(r => r.maxStorage.date)
    .filter(d => d !== '');
  const maxStorageDate = maxStorageDates.length > 0 ? maxStorageDates.reduce((a, b) => a > b ? a : b) : '';
  
  const maxStorageAmount = regionTotals.reduce((total, region) => total + region.maxStorage.amount, 0);
  
  // Calculate drain date for the grand total
  const grandTotalObj = {
    region: 'Total' as ReservoirRegion,
    capacity,
    inflow: {
      last24Hours: inflowLast24Hours,
      totalSince: inflowTotalSince,
    },
    storage: {
      current: {
        amount: currentStorage,
        percentage: parseFloat(currentPercentage.toFixed(1)),
      },
      lastYear: {
        amount: lastYearStorage,
        percentage: parseFloat(lastYearPercentage.toFixed(1)),
      },
    },
    maxStorage: {
      amount: maxStorageAmount,
      date: maxStorageDate,
    },
  };
  
  const drainDate = calculateRegionDrainDate(grandTotalObj, reservoirData);
  
  return {
    ...grandTotalObj,
    drainDate,
  };
};

// Update reservoir data with drain dates
export const getReservoirsWithDrainDates = (reservoirData: Reservoir[]): Reservoir[] => {
  return reservoirData.map(reservoir => ({
    ...reservoir,
    drainDate: calculateDrainDate(reservoir),
  }));
};
