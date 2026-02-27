
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
  drainDate?: string; // Forecasted date when the reservoir will be fully drained
  drainForecast?: DrainForecast;
}

export type ReservoirRegion = 'Southern Conveyor' | 'Paphos' | 'Chrysochou' | 'Nicosia' | 'Recharge/Other' | 'Total';

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
  drainDate?: string; // Forecasted date when the region will be fully drained
  drainForecast?: DrainForecast;
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

export type CyclePhase = 'declining' | 'trough' | 'recovering' | 'peak';

export interface ForecastTrajectoryPoint {
  month: string;       // "MM/YYYY"
  drought: number;     // MCM
  expected: number;
  recovery: number;
}

export interface DrainForecast {
  drought: string;      // "MM/YYYY" or "Not Draining" or "Beyond 10 Years"
  expected: string;
  recovery: string;
  droughtRestriction: string;  // When storage drops below restriction threshold
  expectedRestriction: string;
  recoveryRestriction: string;
  restrictionThresholdPct: number;  // e.g., 7 or 10
  restrictionThresholdMCM: number;  // capacity * threshold / 100
  cyclePhase: CyclePhase;
  yearsInPhase: number;
  analogYears: string[];  // e.g., ["1996/97", "2006/07"]
  confidence: 'low' | 'medium' | 'high';
  trajectories: ForecastTrajectoryPoint[];
}
