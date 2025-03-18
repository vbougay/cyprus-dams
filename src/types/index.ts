
// Types for the Cyprus reservoir data

export interface Reservoir {
  name: string;
  capacity: number;
  inflow: {
    last24Hours: number;
    totalSince: number;
  };
  storage: {
    current: {
      amount: number;
      percentage: number;
    };
    lastYear: {
      amount: number;
      percentage: number;
    };
  };
  maxStorage: {
    amount: number;
    date: string;
  };
  region: ReservoirRegion;
}

export type ReservoirRegion = 'Southern Conveyor' | 'Paphos' | 'Chrysochou' | 'Nicosia' | 'Recharge/Other';

export interface RegionTotal {
  region: ReservoirRegion;
  capacity: number;
  inflow: {
    last24Hours: number;
    totalSince: number;
  };
  storage: {
    current: {
      amount: number;
      percentage: number;
    };
    lastYear: {
      amount: number;
      percentage: number;
    };
  };
  maxStorage: {
    amount: number;
    date: string;
  };
}

export interface MonthlyData {
  month: string;
  value: number;
  year: string;
}

export interface YearlyInflowData {
  year: string;
  months: {
    [key: string]: number;
  };
  total: number;
}
