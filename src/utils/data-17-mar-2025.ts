import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided image
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0.005,
      totalSince: 4.699,
    },
    storage: {
      current: {
        amount: 23.782,
        percentage: 20.7,
      },
      lastYear: {
        amount: 47.129,
        percentage: 41.0,
      },
    },
    maxStorage: {
      amount: 48.004,
      date: '21/2',
    },
    region: 'Southern Conveyor',
  },
  {
    name: 'Kalavasos',
    capacity: 17.100,
    inflow: {
      last24Hours: 0.001,
      totalSince: 1.195,
    },
    storage: {
      current: {
        amount: 4.726,
        percentage: 27.6,
      },
      lastYear: {
        amount: 5.175,
        percentage: 30.3,
      },
    },
    maxStorage: {
      amount: 5.184,
      date: '22/3',
    },
    region: 'Southern Conveyor',
  },
  {
    name: 'Lefkara',
    capacity: 13.850,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.147,
    },
    storage: {
      current: {
        amount: 4.287,
        percentage: 30.7,
      },
      lastYear: {
        amount: 8.706,
        percentage: 62.9,
      },
    },
    maxStorage: {
      amount: 8.730,
      date: '20/3',
    },
    region: 'Southern Conveyor',
  },
  {
    name: 'Dipotamos',
    capacity: 15.500,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.431,
    },
    storage: {
      current: {
        amount: 5.491,
        percentage: 35.4,
      },
      lastYear: {
        amount: 6.634,
        percentage: 42.8,
      },
    },
    maxStorage: {
      amount: 6.794,
      date: '23/2',
    },
    region: 'Southern Conveyor',
  },
  {
    name: 'Germasoyeia',
    capacity: 13.500,
    inflow: {
      last24Hours: 0.001,
      totalSince: 2.411,
    },
    storage: {
      current: {
        amount: 3.659,
        percentage: 27.1,
      },
      lastYear: {
        amount: 6.703,
        percentage: 49.7,
      },
    },
    maxStorage: {
      amount: 6.856,
      date: '19/2',
    },
    region: 'Southern Conveyor',
  },
  {
    name: 'Arminou',
    capacity: 4.300,
    inflow: {
      last24Hours: 0.009,
      totalSince: 2.299,
    },
    storage: {
      current: {
        amount: 2.442,
        percentage: 56.8,
      },
      lastYear: {
        amount: 2.139,
        percentage: 49.7,
      },
    },
    maxStorage: {
      amount: 3.520,
      date: '19/1',
    },
    region: 'Southern Conveyor',
  },
  {
    name: 'Polemidia',
    capacity: 3.400,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.851,
    },
    storage: {
      current: {
        amount: 1.356,
        percentage: 39.9,
      },
      lastYear: {
        amount: 1.388,
        percentage: 40.8,
      },
    },
    maxStorage: {
      amount: 1.403,
      date: '28/3',
    },
    region: 'Southern Conveyor',
  },
  {
    name: 'Achna',
    capacity: 6.800,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.000,
    },
    storage: {
      current: {
        amount: 1.446,
        percentage: 21.3,
      },
      lastYear: {
        amount: 3.831,
        percentage: 56.3,
      },
    },
    maxStorage: {
      amount: 3.831,
      date: '22/3',
    },
    region: 'Southern Conveyor',
  },
  
  // Paphos Region
  {
    name: 'Asprokremmos',
    capacity: 52.375,
    inflow: {
      last24Hours: 0.000,
      totalSince: 1.136,
    },
    storage: {
      current: {
        amount: 13.683,
        percentage: 26.1,
      },
      lastYear: {
        amount: 29.244,
        percentage: 55.8,
      },
    },
    maxStorage: {
      amount: 29.838,
      date: '20/2',
    },
    region: 'Paphos',
  },
  {
    name: 'Kannaviou',
    capacity: 17.168,
    inflow: {
      last24Hours: 0.003,
      totalSince: 0.751,
    },
    storage: {
      current: {
        amount: 4.680,
        percentage: 27.3,
      },
      lastYear: {
        amount: 9.574,
        percentage: 55.8,
      },
    },
    maxStorage: {
      amount: 9.647,
      date: '22/2',
    },
    region: 'Paphos',
  },
  {
    name: 'Mavrokolymbos',
    capacity: 2.180,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.199,
    },
    storage: {
      current: {
        amount: 0.000,
        percentage: 0.0,
      },
      lastYear: {
        amount: 1.208,
        percentage: 55.4,
      },
    },
    maxStorage: {
      amount: 1.223,
      date: '20/2',
    },
    region: 'Paphos',
  },
  
  // Chrysochou
  {
    name: 'Evretou',
    capacity: 24.000,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.971,
    },
    storage: {
      current: {
        amount: 6.135,
        percentage: 25.6,
      },
      lastYear: {
        amount: 13.137,
        percentage: 54.7,
      },
    },
    maxStorage: {
      amount: 13.162,
      date: '8/3',
    },
    region: 'Chrysochou',
  },
  {
    name: 'Argaka',
    capacity: 0.990,
    inflow: {
      last24Hours: 0.002,
      totalSince: 0.239,
    },
    storage: {
      current: {
        amount: 0.368,
        percentage: 37.2,
      },
      lastYear: {
        amount: 0.302,
        percentage: 30.5,
      },
    },
    maxStorage: {
      amount: 0.303,
      date: '28/3',
    },
    region: 'Chrysochou',
  },
  {
    name: 'Pomos',
    capacity: 0.860,
    inflow: {
      last24Hours: 0.001,
      totalSince: 0.221,
    },
    storage: {
      current: {
        amount: 0.361,
        percentage: 42.0,
      },
      lastYear: {
        amount: 0.722,
        percentage: 84.0,
      },
    },
    maxStorage: {
      amount: 0.729,
      date: '28/3',
    },
    region: 'Chrysochou',
  },
  {
    name: 'Agia Marina',
    capacity: 0.298,
    inflow: {
      last24Hours: 0.004,
      totalSince: 0.110,
    },
    storage: {
      current: {
        amount: 0.159,
        percentage: 53.4,
      },
      lastYear: {
        amount: 0.208,
        percentage: 69.8,
      },
    },
    maxStorage: {
      amount: 0.218,
      date: '2/4',
    },
    region: 'Chrysochou',
  },
  
  // Nicosia Region
  {
    name: 'Vyzakia',
    capacity: 1.690,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.002,
    },
    storage: {
      current: {
        amount: 0.048,
        percentage: 2.8,
      },
      lastYear: {
        amount: 0.680,
        percentage: 40.2,
      },
    },
    maxStorage: {
      amount: 0.707,
      date: '9/2',
    },
    region: 'Nicosia',
  },
  {
    name: 'Xyliatou',
    capacity: 1.430,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.152,
    },
    storage: {
      current: {
        amount: 0.330,
        percentage: 23.1,
      },
      lastYear: {
        amount: 0.892,
        percentage: 62.4,
      },
    },
    maxStorage: {
      amount: 0.900,
      date: '',
    },
    region: 'Nicosia',
  },
  {
    name: 'Kalopanagiotis',
    capacity: 0.363,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.277,
    },
    storage: {
      current: {
        amount: 0.306,
        percentage: 84.3,
      },
      lastYear: {
        amount: 0.363,
        percentage: 100.0,
      },
    },
    maxStorage: {
      amount: 0.363,
      date: '1/1-19/4',
    },
    region: 'Nicosia',
  },
  
  // Recharge Other
  {
    name: 'Tamassos',
    capacity: 2.800,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.205,
    },
    storage: {
      current: {
        amount: 1.063,
        percentage: 38.0,
      },
      lastYear: {
        amount: 1.627,
        percentage: 58.1,
      },
    },
    maxStorage: {
      amount: 1.645,
      date: '29/3',
    },
    region: 'Recharge/Other',
  },
  {
    name: 'Klirou-Malounta',
    capacity: 2.000,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.297,
    },
    storage: {
      current: {
        amount: 1.467,
        percentage: 73.4,
      },
      lastYear: {
        amount: 1.717,
        percentage: 85.9,
      },
    },
    maxStorage: {
      amount: 2.000,
      date: '16/2-8/3',
    },
    region: 'Recharge/Other',
  },
  {
    name: 'Solea',
    capacity: 4.454,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.656,
    },
    storage: {
      current: {
        amount: 3.010,
        percentage: 67.6,
      },
      lastYear: {
        amount: 3.944,
        percentage: 88.5,
      },
    },
    maxStorage: {
      amount: 3.944,
      date: '14/3',
    },
    region: 'Recharge/Other',
  },
];


// Yearly inflow data from the image
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
      April: 8.28,
      May: 3.14,
      June: 0.98,
      July: 0.09,
      'Aug-Sep': 0.01,
    },
    total: 116.35,
  },
  {
    year: '15/16',
    months: {
      October: 1.02,
      November: 0.12,
      December: 1.25,
      January: 3.69,
      February: 28.90,
      March: 6.13,
      April: 1.31,
      May: 0.26,
      June: 0.11,
      July: 0.00,
      'Aug-Sep': 0.01,
    },
    total: 17.907,
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
      May: 1.796,
      June: 0.228,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 48.889,
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
      'Aug-Sep': 0.077,
    },
    total: 44.897,
  },
  {
    year: '18/19',
    months: {
      October: 0.858,
      November: 0.757,
      December: 16.665,
      January: 118.110,
      February: 53.909,
      March: 32.283,
      April: 25.326,
      May: 8.869,
      June: 6.199,
      July: 1.524,
      'Aug-Sep': 0.542,
    },
    total: 265.042,
  },
  {
    year: '19/20',
    months: {
      October: 2.430,
      November: 1.545,
      December: 30.495,
      January: 47.740,
      February: 15.916,
      March: 15.670,
      April: 11.062,
      May: 7.317,
      June: 2.747,
      July: 0.866,
      'Aug-Sep': 0.161,
    },
    total: 135.949,
  },
  {
    year: '20/21',
    months: {
      October: 0.165,
      November: 0.942,
      December: 3.107,
      January: 12.540,
      February: 8.016,
      April: 4.158,
      March: 6.022,
      May: 0.899,
      June: 0.192,
      July: 0.024,
      'Aug-Sep': 0.035,
    },
    total: 36.098,
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
      May: 3.440,
      June: 1.264,
      July: 0.093,
      'Aug-Sep': 0.035,
    },
    total: 153.753,
  },
  {
    year: '22/23',
    months: {
      October: 0.397,
      November: 2.976,
      December: 2.922,
      January: 8.268,
      February: 12.667,
      March: 9.517,
      April: 4.741,
      May: 2.728,
      June: 0.891,
      July: 0.098,
      'Aug-Sep': 0.186,
    },
    total: 43.778,
  },
  {
    year: '23/24',
    months: {
      October: 3.946,
      November: 2.976,
      December: 2.340,
      January: 7.300,
      February: 6.676,
      March: 2.920,
      April: 1.801,
      May: 0.910,
      June: 0.297,
      July: 0.098,
      'Aug-Sep': 0.208,
    },
    total: 24.714,
  },
  {
    year: '24/25',
    months: {
      October: 0.583,
      November: 1.581,
      December: 5.710,
      January: 4.062,
      February: 2.453,
      March: 0.784,
      April: 0.000,
      May: 0.000,
      June: 0.000,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 16.091,
  },
];

// Get formatted date from the image (3/17/25)
export const getReportDate = (): string => {
  return '3/17/25';
};
