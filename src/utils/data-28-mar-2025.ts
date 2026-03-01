import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (28-MAR-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0.014,
      totalSince: 4.850,
    },
    storage: {
      current: {
        amount: 22.638,
        percentage: 19.7,
      },
      lastYear: {
        amount: 46.612,
        percentage: 40.5,
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
      totalSince: 1.211,
    },
    storage: {
      current: {
        amount: 4.726,
        percentage: 27.6,
      },
      lastYear: {
        amount: 5.178,
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
      totalSince: 0.148,
    },
    storage: {
      current: {
        amount: 3.887,
        percentage: 28.1,
      },
      lastYear: {
        amount: 8.714,
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
      last24Hours: 0.002,
      totalSince: 0.452,
    },
    storage: {
      current: {
        amount: 5.571,
        percentage: 35.9,
      },
      lastYear: {
        amount: 6.527,
        percentage: 42.1,
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
      totalSince: 2.451,
    },
    storage: {
      current: {
        amount: 3.549,
        percentage: 26.3,
      },
      lastYear: {
        amount: 6.655,
        percentage: 49.3,
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
      totalSince: 2.439,
    },
    storage: {
      current: {
        amount: 2.533,
        percentage: 58.9,
      },
      lastYear: {
        amount: 2.219,
        percentage: 51.6,
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
      totalSince: 0.852,
    },
    storage: {
      current: {
        amount: 1.326,
        percentage: 39.0,
      },
      lastYear: {
        amount: 1.403,
        percentage: 41.3,
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
        amount: 1.312,
        percentage: 19.3,
      },
      lastYear: {
        amount: 3.766,
        percentage: 55.4,
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
      totalSince: 1.142,
    },
    storage: {
      current: {
        amount: 13.265,
        percentage: 25.3,
      },
      lastYear: {
        amount: 28.794,
        percentage: 55.0,
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
      last24Hours: 0.001,
      totalSince: 0.788,
    },
    storage: {
      current: {
        amount: 4.555,
        percentage: 26.5,
      },
      lastYear: {
        amount: 9.514,
        percentage: 55.4,
      },
    },
    maxStorage: {
      amount: 9.647,
      date: '22/2',
    },
    region: 'Paphos',
  },
  {
    name: 'Mavrokolympos',
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
        amount: 1.204,
        percentage: 55.2,
      },
    },
    maxStorage: {
      amount: 1.223,
      date: '26/2',
    },
    region: 'Paphos',
  },
  
  // Chrysochou
  {
    name: 'Evretou',
    capacity: 24.000,
    inflow: {
      last24Hours: 0.001,
      totalSince: 0.989,
    },
    storage: {
      current: {
        amount: 5.966,
        percentage: 24.9,
      },
      lastYear: {
        amount: 13.040,
        percentage: 54.3,
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
      totalSince: 0.251,
    },
    storage: {
      current: {
        amount: 0.380,
        percentage: 38.4,
      },
      lastYear: {
        amount: 0.303,
        percentage: 30.6,
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
      totalSince: 0.231,
    },
    storage: {
      current: {
        amount: 0.371,
        percentage: 43.1,
      },
      lastYear: {
        amount: 0.729,
        percentage: 84.8,
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
    capacity: 0.300,
    inflow: {
      last24Hours: 0.001,
      totalSince: 0.118,
    },
    storage: {
      current: {
        amount: 0.167,
        percentage: 56.0,
      },
      lastYear: {
        amount: 0.213,
        percentage: 71.5,
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
        amount: 0.660,
        percentage: 39.1,
      },
    },
    maxStorage: {
      amount: 0.707,
      date: '9/2',
    },
    region: 'Nicosia',
  },
  {
    name: 'Xyliatos',
    capacity: 1.430,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.157,
    },
    storage: {
      current: {
        amount: 0.328,
        percentage: 22.9,
      },
      lastYear: {
        amount: 0.900,
        percentage: 62.9,
      },
    },
    maxStorage: {
      amount: 0.900,
      date: '29/3',
    },
    region: 'Nicosia',
  },
  {
    name: 'Kalopanagiotis',
    capacity: 0.363,
    inflow: {
      last24Hours: 0.000,
      totalSince: 0.286,
    },
    storage: {
      current: {
        amount: 0.315,
        percentage: 86.8,
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
        amount: 1.042,
        percentage: 37.2,
      },
      lastYear: {
        amount: 1.645,
        percentage: 58.8,
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
      totalSince: 0.303,
    },
    storage: {
      current: {
        amount: 1.471,
        percentage: 73.6,
      },
      lastYear: {
        amount: 1.485,
        percentage: 74.3,
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
      totalSince: 0.661,
    },
    storage: {
      current: {
        amount: 2.984,
        percentage: 67.0,
      },
      lastYear: {
        amount: 3.887,
        percentage: 87.3,
      },
    },
    maxStorage: {
      amount: 3.944,
      date: '14/3',
    },
    region: 'Recharge/Other',
  },
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
      'Aug-Sep': 0.01,
    },
    total: 116.35,
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
      May: 1.780,
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
      March: 6.022,
      April: 4.156,
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
      February: 12.603,
      March: 9.517,
      April: 4.741,
      May: 2.728,
      June: 0.891,
      July: 0.000,
      'Aug-Sep': 0.186,
    },
    total: 48.778,
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
      October: 0.000,
      November: 3.084,
      December: 5.710,
      January: 4.062,
      February: 2.451,
      March: 1.259,
      April: 0.000,
      May: 0.000,
      June: 0.000,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 16.566,
  },
];

// Get formatted date from the data (3/28/25)
export const getReportDate = (): string => {
  return '3/28/25';
};

// Summary of changes between March 17 and March 28, 2025
export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
Αλλαγές από 17 Μαρτίου έως 28 Μαρτίου 2025:

Αλλαγές Αποθήκευσης:
- Συνολική μείωση στην αποθήκευση νερού στους περισσότερους ταμιευτήρες
- Νότιος Αγωγός: Οι περισσότεροι ταμιευτήρες παρουσίασαν μειώσεις
  - Κούρης: -1.144 MCM (20.7% → 19.7%)
  - Λεύκαρα: -0.400 MCM (30.7% → 28.1%)
  - Άχνα: -0.134 MCM (21.3% → 19.3%)
- Περιοχή Πάφου:
  - Ασπρόκρεμμος: -0.418 MCM (26.1% → 25.3%)
  - Κανναβιού: -0.125 MCM (27.3% → 26.5%)
- Χρυσοχού:
  - Ευρέτου: -0.169 MCM (25.6% → 24.9%)
  - Πόμος: +0.010 MCM (42.0% → 43.1%)
- Περιοχή Λευκωσίας: Σχετικά σταθερή με μικρές μειώσεις
- Μερικοί ταμιευτήρες παρουσίασαν αυξήσεις:
  - Αρμίνου: +0.091 MCM (56.8% → 58.9%)
  - Αργάκα: +0.012 MCM (37.2% → 38.4%)

Αλλαγές Εισροής:
- Η συνολική εισροή αυξήθηκε στους περισσότερους ταμιευτήρες
- Κούρης: +0.151 MCM (4.699 → 4.850)
- Αρμίνου: +0.140 MCM (2.299 → 2.439)
- Κανναβιού: +0.037 MCM (0.751 → 0.788)

Ετήσια Δεδομένα Εισροής:
- Η εισροή Μαρτίου αυξήθηκε από 0.784 MCM σε 1.259 MCM
- Η συνολική ετήσια εισροή για 24/25 αυξήθηκε από 16.091 MCM σε 16.566 MCM
- Διόρθωση δεδομένων για 22/23 σύνολο (43.778 → 48.778 MCM)

Άλλες Αξιοσημείωτες Αλλαγές:
- Η χωρητικότητα της Αγίας Μαρίνας διορθώθηκε από 0.298 MCM σε 0.300 MCM
- Προστέθηκε ημερομηνία μέγιστης αποθήκευσης για Ξυλιάτου (29/3)
`;
  }
  
  return `
Changes from March 17 to March 28, 2025:

Storage Changes:
- Overall decrease in water storage across most reservoirs
- Southern Conveyor: Most reservoirs showed decreases
  - Kouris: -1.144 MCM (20.7% → 19.7%)
  - Lefkara: -0.400 MCM (30.7% → 28.1%)
  - Achna: -0.134 MCM (21.3% → 19.3%)
- Paphos Region:
  - Asprokremmos: -0.418 MCM (26.1% → 25.3%)
  - Kannaviou: -0.125 MCM (27.3% → 26.5%)
- Chrysochou:
  - Evretou: -0.169 MCM (25.6% → 24.9%)
  - Pomos: +0.010 MCM (42.0% → 43.1%)
- Nicosia Region: Mostly stable with slight decreases
- Some reservoirs showed increases:
  - Arminou: +0.091 MCM (56.8% → 58.9%)
  - Argaka: +0.012 MCM (37.2% → 38.4%)

Inflow Changes:
- Total inflow increased in most reservoirs
- Kouris: +0.151 MCM (4.699 → 4.850)
- Arminou: +0.140 MCM (2.299 → 2.439)
- Kannaviou: +0.037 MCM (0.751 → 0.788)

Yearly Inflow Data:
- March inflow increased from 0.784 MCM to 1.259 MCM
- Total yearly inflow for 24/25 increased from 16.091 MCM to 16.566 MCM
- Data correction for 22/23 total (43.778 → 48.778 MCM)

Other Notable Changes:
- Agia Marina capacity corrected from 0.298 MCM to 0.300 MCM
- Xyliatos maxStorage date added (29/3)
`;
};
