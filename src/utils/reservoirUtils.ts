import { Reservoir, ReservoirRegion, RegionTotal, YearlyInflowData } from '../types';

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

// Shared drain date logic: given current amount and monthly outflow rate, return a status string or date
const formatDrainDate = (currentAmount: number, monthlyOutflowRate: number): string => {
  if (currentAmount <= 0) return "Already Empty";
  if (monthlyOutflowRate <= 0) return "Not Draining";

  const monthsUntilEmpty = currentAmount / monthlyOutflowRate;
  if (monthsUntilEmpty > 120) return "Beyond 10 Years";

  const drainDate = new Date();
  drainDate.setMonth(drainDate.getMonth() + Math.floor(monthsUntilEmpty));
  return `${drainDate.getMonth() + 1}/${drainDate.getFullYear()}`;
};

// Calculate the drain date for a reservoir
export const calculateDrainDate = (reservoir: Reservoir): string => {
  return formatDrainDate(reservoir.storage.current.amount, calculateMonthlyOutflowRate(reservoir));
};

// Calculate the drain date for a region based on its reservoirs
export const calculateRegionDrainDate = (regionTotal: RegionTotal, reservoirs: Reservoir[]): string => {
  const yearlyDecrease = regionTotal.storage.lastYear.amount - regionTotal.storage.current.amount;
  const monthlyRate = yearlyDecrease > 0 ? yearlyDecrease / 12 : -1;
  return formatDrainDate(regionTotal.storage.current.amount, monthlyRate);
};

// Get the Tailwind color class for a drain date status
export const getDrainDateColor = (drainDate: string | undefined): string => {
  if (!drainDate) return '';
  if (drainDate === 'Already Empty' || drainDate === 'Already Restricted') return 'text-red-500 dark:text-red-400';
  if (drainDate === 'Not Draining' || drainDate === 'Not Restricted' || drainDate === 'Beyond 10 Years') return 'text-green-500 dark:text-green-400';
  return 'text-amber-500 dark:text-amber-400';
};

// Get the display text for a drain date status
export const getDrainDateText = (drainDate: string | undefined, t: (key: string) => string): string => {
  if (!drainDate) return t('calculating');
  if (drainDate === 'Already Empty' || drainDate === 'Already Restricted') return t('alreadyRestricted');
  if (drainDate === 'Not Draining' || drainDate === 'Not Restricted' || drainDate === 'Beyond 10 Years') return t('notRestricted');
  if (drainDate === 'Calculating...') return t('calculating');
  return drainDate;
};

// Water year month keys (October through August-September)
const WATER_YEAR_MONTH_KEYS = [
  "October", "November", "December", "January", "February", "March",
  "April", "May", "June", "July", "Aug-Sep"
];

// Map of month abbreviations from report date format to calendar month number (1-based)
const MONTH_ABBREV_TO_NUMBER: Record<string, number> = {
  'JAN': 1, 'FEB': 2, 'MAR': 3, 'APR': 4, 'MAY': 5, 'JUN': 6,
  'JUL': 7, 'AUG': 8, 'SEP': 9, 'OCT': 10, 'NOV': 11, 'DEC': 12
};

// Parse report date string into components
// Supports "DD-MMM-YYYY" (e.g., "16-FEB-2026") and "M/DD/YY" (e.g., "7/28/25")
export const parseReportDate = (reportDate: string): { day: number; month: number; year: number } | null => {
  // Try DD-MMM-YYYY format first
  const dashParts = reportDate.split('-');
  if (dashParts.length === 3) {
    const day = parseInt(dashParts[0], 10);
    const monthAbbrev = dashParts[1].toUpperCase();
    const year = parseInt(dashParts[2], 10);
    const month = MONTH_ABBREV_TO_NUMBER[monthAbbrev];
    if (month && !isNaN(day) && !isNaN(year)) return { day, month, year };
  }

  // Try M/DD/YY format (older data files)
  const slashParts = reportDate.split('/');
  if (slashParts.length === 3) {
    const month = parseInt(slashParts[0], 10);
    const day = parseInt(slashParts[1], 10);
    let year = parseInt(slashParts[2], 10);
    if (year < 100) year += 2000;
    if (!isNaN(month) && !isNaN(day) && !isNaN(year)) return { day, month, year };
  }

  return null;
};

// Map calendar month (1-12) to water year index (Oct=0, Nov=1, ..., Sep=10)
const calendarMonthToWaterYearIndex = (calMonth: number): number => {
  if (calMonth >= 10) return calMonth - 10; // Oct=0, Nov=1, Dec=2
  if (calMonth <= 7) return calMonth + 2;   // Jan=3, Feb=4, ..., Jul=9
  return 10; // Aug and Sep both map to the combined "Aug-Sep" index
};

export interface YTDInflowResult {
  currentYTD: number;
  lastYearYTD: number;
  percentChange: number | null; // null when last year YTD is 0
  currentYear: string;
  lastYear: string;
}

// Calculate YTD inflow comparison between current and previous water year
export const calculateYTDInflow = (inflowData: YearlyInflowData[], reportDate: string): YTDInflowResult | null => {
  const parsed = parseReportDate(reportDate);
  if (!parsed) return null;

  const waterYearIndex = calendarMonthToWaterYearIndex(parsed.month);
  const monthsToInclude = WATER_YEAR_MONTH_KEYS.slice(0, waterYearIndex + 1);

  // Determine water year strings (e.g., "25/26" and "24/25")
  const waterYearStart = parsed.month >= 10 ? parsed.year : parsed.year - 1;
  const pad = (n: number) => (n % 100).toString().padStart(2, '0');
  const currentYearStr = `${pad(waterYearStart)}/${pad(waterYearStart + 1)}`;
  const prevYearStr = `${pad(waterYearStart - 1)}/${pad(waterYearStart)}`;

  const currentYearData = inflowData.find(d => d.year === currentYearStr);
  const lastYearData = inflowData.find(d => d.year === prevYearStr);

  if (!currentYearData || !lastYearData) return null;

  const currentYTD = monthsToInclude.reduce((sum, m) => sum + (currentYearData.months[m] || 0), 0);
  const lastYearYTD = monthsToInclude.reduce((sum, m) => sum + (lastYearData.months[m] || 0), 0);

  const percentChange = lastYearYTD > 0
    ? ((currentYTD / lastYearYTD) - 1) * 100
    : null;

  return {
    currentYTD,
    lastYearYTD,
    percentChange,
    currentYear: currentYearStr,
    lastYear: prevYearStr,
  };
};

export interface YTDOutflowResult {
  currentOutflow: number;
  lastYearOutflow: number;
  percentChange: number | null;
}

// Calculate implied YTD outflow using water balance:
// outflow = inflow_since_oct - (current_storage - oct_start_storage)
export const calculateYTDOutflow = (
  grandTotal: RegionTotal,
  ytdInflow: YTDInflowResult,
  octoberBaseline: { currentStorage: number; lastYearStorage: number | null }
): YTDOutflowResult | null => {
  // Current year: outflow = total inflow since Oct - storage increase since Oct
  const currentOutflow = grandTotal.inflow.totalSince
    - (grandTotal.storage.current.amount - octoberBaseline.currentStorage);

  // Last year: outflow = last year YTD inflow - last year storage increase since Oct
  let lastYearOutflow = 0;
  if (octoberBaseline.lastYearStorage !== null) {
    lastYearOutflow = Math.max(0, ytdInflow.lastYearYTD
      - (grandTotal.storage.lastYear.amount - octoberBaseline.lastYearStorage));
  }

  const percentChange = lastYearOutflow > 0
    ? ((Math.max(0, currentOutflow) / lastYearOutflow) - 1) * 100
    : null;

  return {
    currentOutflow: Math.max(0, currentOutflow),
    lastYearOutflow,
    percentChange,
  };
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
  
  // Exclude Recharge/Other from grand total calculation
  const mainRegionTotals = regionTotals.filter(region => region.region !== 'Recharge/Other');
  
  const capacity = mainRegionTotals.reduce((total, region) => total + region.capacity, 0);
  
  const inflowLast24Hours = mainRegionTotals.reduce((total, region) => total + region.inflow.last24Hours, 0);
  const inflowTotalSince = mainRegionTotals.reduce((total, region) => total + region.inflow.totalSince, 0);
  
  const currentStorage = mainRegionTotals.reduce((total, region) => total + region.storage.current.amount, 0);
  const currentPercentage = capacity > 0 ? (currentStorage / capacity) * 100 : 0;
  
  const lastYearStorage = mainRegionTotals.reduce((total, region) => total + region.storage.lastYear.amount, 0);
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
