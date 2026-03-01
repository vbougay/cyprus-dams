import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (11-APR-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: { last24Hours: 0.024, totalSince: 5.167 },
    storage: {
      current: { amount: 22.293, percentage: 19.4 },
      lastYear: { amount: 45.573, percentage: 39.6 }
    },
    maxStorage: { amount: 48.004, date: '21/2' },
    region: 'Southern Conveyor'
  },
  {
    name: 'Kalavasos',
    capacity: 17.100,
    inflow: { last24Hours: 0.001, totalSince: 1.277 },
    storage: {
      current: { amount: 4.604, percentage: 26.9 },
      lastYear: { amount: 5.150, percentage: 30.1 }
    },
    maxStorage: { amount: 5.184, date: '22/3' },
    region: 'Southern Conveyor'
  },
  {
    name: 'Lefkara',
    capacity: 13.850,
    inflow: { last24Hours: 0.000, totalSince: 0.181 },
    storage: {
      current: { amount: 3.584, percentage: 25.9 },
      lastYear: { amount: 8.711, percentage: 62.9 }
    },
    maxStorage: { amount: 8.730, date: '20/3' },
    region: 'Southern Conveyor'
  },
  {
    name: 'Dipotamos',
    capacity: 15.500,
    inflow: { last24Hours: 0.001, totalSince: 0.501 },
    storage: {
      current: { amount: 5.713, percentage: 36.9 },
      lastYear: { amount: 6.421, percentage: 41.4 }
    },
    maxStorage: { amount: 6.794, date: '23/2' },
    region: 'Southern Conveyor'
  },
  {
    name: 'Germasoyeia',
    capacity: 13.500,
    inflow: { last24Hours: 0.002, totalSince: 2.524 },
    storage: {
      current: { amount: 3.474, percentage: 25.7 },
      lastYear: { amount: 6.539, percentage: 48.4 }
    },
    maxStorage: { amount: 6.856, date: '19/2' },
    region: 'Southern Conveyor'
  },
  {
    name: 'Arminou',
    capacity: 4.300,
    inflow: { last24Hours: 0.004, totalSince: 2.550 },
    storage: {
      current: { amount: 2.588, percentage: 60.2 },
      lastYear: { amount: 2.254, percentage: 52.4 }
    },
    maxStorage: { amount: 3.520, date: '19/1' },
    region: 'Southern Conveyor'
  },
  {
    name: 'Polemidia',
    capacity: 3.400,
    inflow: { last24Hours: 0.000, totalSince: 0.855 },
    storage: {
      current: { amount: 1.304, percentage: 38.4 },
      lastYear: { amount: 1.374, percentage: 40.4 }
    },
    maxStorage: { amount: 1.403, date: '28/3' },
    region: 'Southern Conveyor'
  },
  {
    name: 'Achna',
    capacity: 6.800,
    inflow: { last24Hours: 0.000, totalSince: 0.000 },
    storage: {
      current: { amount: 1.205, percentage: 17.7 },
      lastYear: { amount: 3.718, percentage: 54.7 }
    },
    maxStorage: { amount: 3.831, date: '22/3' },
    region: 'Southern Conveyor'
  },

  // Pafos
  {
    name: 'Asprokremmos',
    capacity: 52.375,
    inflow: { last24Hours: 0.000, totalSince: 1.142 },
    storage: {
      current: { amount: 12.859, percentage: 24.6 },
      lastYear: { amount: 28.264, percentage: 54.0 }
    },
    maxStorage: { amount: 29.838, date: '20/2' },
    region: 'Paphos'
  },
  {
    name: 'Kannaviou',
    capacity: 17.168,
    inflow: { last24Hours: 0.000, totalSince: 0.826 },
    storage: {
      current: { amount: 4.423, percentage: 25.8 },
      lastYear: { amount: 9.373, percentage: 54.6 }
    },
    maxStorage: { amount: 9.647, date: '22/2' },
    region: 'Paphos'
  },
  {
    name: 'Mavrokolympos',
    capacity: 2.180,
    inflow: { last24Hours: 0.000, totalSince: 0.199 },
    storage: {
      current: { amount: 0.000, percentage: 0.0 },
      lastYear: { amount: 1.177, percentage: 54.0 }
    },
    maxStorage: { amount: 1.223, date: '26/2' },
    region: 'Paphos'
  },

  // Chrysochou
  {
    name: 'Evretou',
    capacity: 24.000,
    inflow: { last24Hours: 0.000, totalSince: 1.000 },
    storage: {
      current: { amount: 5.829, percentage: 24.3 },
      lastYear: { amount: 12.870, percentage: 53.6 }
    },
    maxStorage: { amount: 13.162, date: '8/3' },
    region: 'Chrysochou'
  },
  {
    name: 'Argaka',
    capacity: 0.990,
    inflow: { last24Hours: 0.000, totalSince: 0.260 },
    storage: {
      current: { amount: 0.389, percentage: 39.3 },
      lastYear: { amount: 0.280, percentage: 28.3 }
    },
    maxStorage: { amount: 0.303, date: '28/3' },
    region: 'Chrysochou'
  },
  {
    name: 'Pomos',
    capacity: 0.860,
    inflow: { last24Hours: 0.000, totalSince: 0.236 },
    storage: {
      current: { amount: 0.376, percentage: 43.7 },
      lastYear: { amount: 0.718, percentage: 83.5 }
    },
    maxStorage: { amount: 0.729, date: '28/3' },
    region: 'Chrysochou'
  },
  {
    name: 'Agia Marina',
    capacity: 0.298,
    inflow: { last24Hours: 0.000, totalSince: 0.123 },
    storage: {
      current: { amount: 0.172, percentage: 57.7 },
      lastYear: { amount: 0.225, percentage: 75.5 }
    },
    maxStorage: { amount: 0.218, date: '2/4' },
    region: 'Chrysochou'
  },

  // Nicosia
  {
    name: 'Vyzakia',
    capacity: 1.690,
    inflow: { last24Hours: 0.000, totalSince: 0.002 },
    storage: {
      current: { amount: 0.048, percentage: 2.8 },
      lastYear: { amount: 0.629, percentage: 37.2 }
    },
    maxStorage: { amount: 0.707, date: '9/2' },
    region: 'Nicosia'
  },
  {
    name: 'Xyliatos',
    capacity: 1.430,
    inflow: { last24Hours: 0.000, totalSince: 0.157 },
    storage: {
      current: { amount: 0.325, percentage: 22.7 },
      lastYear: { amount: 0.878, percentage: 61.4 }
    },
    maxStorage: { amount: 0.900, date: '29/3' },
    region: 'Nicosia'
  },
  {
    name: 'Kalopanagiotis',
    capacity: 0.363,
    inflow: { last24Hours: 0.000, totalSince: 0.289 },
    storage: {
      current: { amount: 0.318, percentage: 87.6 },
      lastYear: { amount: 0.360, percentage: 99.2 }
    },
    maxStorage: { amount: 0.363, date: '1/1-19/4' },
    region: 'Nicosia'
  },

  // Recharge/Other
  {
    name: 'Tamassos',
    capacity: 2.800,
    inflow: { last24Hours: 0.000, totalSince: 0.194 },
    storage: {
      current: { amount: 1.027, percentage: 36.7 },
      lastYear: { amount: 1.645, percentage: 58.8 }
    },
    maxStorage: { amount: 1.645, date: '29/3' },
    region: 'Recharge/Other'
  },
  {
    name: 'Klirou-Malounta',
    capacity: 2.000,
    inflow: { last24Hours: 0.000, totalSince: 0.283 },
    storage: {
      current: { amount: 1.467, percentage: 73.4 },
      lastYear: { amount: 1.505, percentage: 75.3 }
    },
    maxStorage: { amount: 2.000, date: '16/2-8/3' },
    region: 'Recharge/Other'
  },
  {
    name: 'Solea',
    capacity: 4.454,
    inflow: { last24Hours: 0.000, totalSince: 0.610 },
    storage: {
      current: { amount: 2.952, percentage: 66.3 },
      lastYear: { amount: 3.809, percentage: 85.5 }
    },
    maxStorage: { amount: 3.944, date: '14/3' },
    region: 'Recharge/Other'
  }
];

// Yearly inflow data from the provided data
export const yearlyInflowData: YearlyInflowData[] = [
  {
    year: '14/15',
    months: {
      October: 0.32,
      November: 0.92,
      December: 2.14,
      January: 38.35,
      February: 44.52,
      March: 17.67,
      April: 8.23,
      May: 3.14,
      June: 0.98,
      July: 0.09,
      'Aug-Sep': 0.01
    },
    total: 116.35
  },
  {
    year: '15/16',
    months: {
      October: 1.02,
      November: 0.61,
      December: 1.25,
      January: 3.69,
      February: 2.82,
      March: 6.13,
      April: 1.31,
      May: 0.96,
      June: 0.11,
      July: 0.00,
      'Aug-Sep': 0.01
    },
    total: 17.907
  },
  {
    year: '16/17',
    months: {
      October: 0.247,
      November: 0.657,
      December: 7.424,
      January: 21.083,
      February: 4.181,
      March: 8.891,
      April: 4.398,
      May: 1.78,
      June: 0.228,
      July: 0.000,
      'Aug-Sep': 0.000
    },
    total: 48.889
  },
  {
    year: '17/18',
    months: {
      October: 0.142,
      November: 0.614,
      December: 0.881,
      January: 20.661,
      February: 9.528,
      March: 5.944,
      April: 2.176,
      May: 2.802,
      June: 2.022,
      July: 0.050,
      'Aug-Sep': 0.077
    },
    total: 44.897
  },
  {
    year: '18/19',
    months: {
      October: 0.858,
      November: 0.757,
      December: 16.665,
      January: 118.11,
      February: 53.909,
      March: 32.283,
      April: 25.326,
      May: 8.869,
      June: 6.199,
      July: 1.524,
      'Aug-Sep': 0.542
    },
    total: 265.042
  },
  {
    year: '19/20',
    months: {
      October: 2.43,
      November: 1.545,
      December: 30.495,
      January: 47.74,
      February: 15.916,
      March: 15.67,
      April: 11.062,
      May: 7.317,
      June: 2.747,
      July: 0.866,
      'Aug-Sep': 0.161
    },
    total: 135.949
  },
  {
    year: '20/21',
    months: {
      October: 0.165,
      November: 0.942,
      December: 3.107,
      January: 12.54,
      February: 8.016,
      March: 6.022,
      April: 4.156,
      May: 0.899,
      June: 0.192,
      July: 0.024,
      'Aug-Sep': 0.035
    },
    total: 36.098
  },
  {
    year: '21/22',
    months: {
      October: 0.084,
      November: 0.397,
      December: 11.923,
      January: 74.614,
      February: 33.963,
      March: 19.801,
      April: 8.139,
      May: 3.44,
      June: 1.264,
      July: 0.093,
      'Aug-Sep': 0.035
    },
    total: 153.753
  },
  {
    year: '22/23',
    months: {
      October: 3.946,
      November: 2.976,
      December: 2.922,
      January: 8.268,
      February: 12.603,
      March: 9.517,
      April: 4.741,
      May: 2.728,
      June: 0.891,
      July: 0.000,
      'Aug-Sep': 0.186
    },
    total: 48.778
  },
  {
    year: '23/24',
    months: {
      October: 0.583,
      November: 1.581,
      December: 2.34,
      January: 7.3,
      February: 6.676,
      March: 2.92,
      April: 1.801,
      May: 0.91,
      June: 0.297,
      July: 0.098,
      'Aug-Sep': 0.208
    },
    total: 24.714
  },
  {
    year: '24/25',
    months: {
      October: 0.000,
      November: 3.084,
      December: 5.71,
      January: 4.062,
      February: 2.451,
      March: 1.465,
      April: 0.517,
      May: 0.000,
      June: 0.000,
      July: 0.000,
      'Aug-Sep': 0.000
    },
    total: 17.289
  }
];

/**
 * Summary of changes between March 28 and April 11, 2025
 */
export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  // Only English provided for now
  return `
Between March 28 and April 11, 2025, Cyprus's reservoirs experienced mostly modest changes as the wet season tapered off.

In the Southern Conveyor, most reservoirs saw slight decreases in water storage, with Kouris, Kalavasos, Lefkara, Germasoyeia, Polemidia, and Achna all dropping by around 0.1 to 0.3 million cubic meters (MCM). Notably, Dipotamos and Arminou bucked the trend, each recording small increases in storage, suggesting some localized inflow or reduced outflow.

The Paphos region continued its gradual decline, with Asprokremmos and Kannaviou both losing about 0.1 to 0.4 MCM, while Mavrokolympos remained unchanged at zero storage.

In Chrysochou, the picture was mixed: Evretou lost a bit of water, but Argaka, Pomos, and Agia Marina all saw minor gains, reflecting localized rainfall or inflow events.

Nicosia’s reservoirs were largely stable, with only minimal changes—Kalopanagiotis edged up slightly, while Xyliatos dipped a fraction.

Among the smaller recharge and other reservoirs, Tamassos, Klirou-Malounta, and Solea all saw small decreases in storage.

In terms of inflow, most reservoirs recorded only modest increases since the start of the hydrological year, with Kouris, Germasoyeia, and Arminou seeing the largest gains. Yearly inflow for March increased by about 0.2 MCM, and April saw its first inflow of the season (0.52 MCM), bringing the total for 2024/25 up by 0.72 MCM to 17.29 MCM.

Overall, the period was characterized by slow declines in most reservoirs, a few local increases, and the first signs of April inflow. No major changes in maximum storage or capacity were observed.
`;
};

// Get formatted date from the data (4/11/25)
export const getReportDate = (): string => {
  return '4/11/25';
};
