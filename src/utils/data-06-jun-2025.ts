import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (06-JUN-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0.014,
      totalSince: 5.780,
    },
    storage: {
      current: {
        amount: 20.531,
        percentage: 17.85,
      },
      lastYear: {
        amount: 41.646,
        percentage: 36.21,
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
      last24Hours: 0.000,
      totalSince: 1.319,
    },
    storage: {
      current: {
        amount: 3.942,
        percentage: 23.05,
      },
      lastYear: {
        amount: 4.860,
        percentage: 28.42,
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
      totalSince: 0.222,
    },
    storage: {
      current: {
        amount: 2.368,
        percentage: 17.10,
      },
      lastYear: {
        amount: 8.583,
        percentage: 61.97,
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
      totalSince: 0.546,
    },
    storage: {
      current: {
        amount: 5.894,
        percentage: 38.03,
      },
      lastYear: {
        amount: 5.325,
        percentage: 34.35,
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
      last24Hours: 0.000,
      totalSince: 2.580,
    },
    storage: {
      current: {
        amount: 2.854,
        percentage: 21.14,
      },
      lastYear: {
        amount: 5.811,
        percentage: 43.04,
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
      last24Hours: 0.000,
      totalSince: 2.844,
    },
    storage: {
      current: {
        amount: 2.651,
        percentage: 61.65,
      },
      lastYear: {
        amount: 1.830,
        percentage: 42.56,
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
      totalSince: 0.876,
    },
    storage: {
      current: {
        amount: 1.180,
        percentage: 34.71,
      },
      lastYear: {
        amount: 1.200,
        percentage: 35.29,
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
        amount: 0.472,
        percentage: 6.94,
      },
      lastYear: {
        amount: 2.785,
        percentage: 40.96,
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
      totalSince: 1.224,
    },
    storage: {
      current: {
        amount: 11.037,
        percentage: 21.07,
      },
      lastYear: {
        amount: 25.667,
        percentage: 49.01,
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
      last24Hours: 0.000,
      totalSince: 0.922,
    },
    storage: {
      current: {
        amount: 3.872,
        percentage: 22.55,
      },
      lastYear: {
        amount: 8.649,
        percentage: 50.38,
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
        amount: 0.948,
        percentage: 43.49,
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
      last24Hours: 0.000,
      totalSince: 1.026,
    },
    storage: {
      current: {
        amount: 5.255,
        percentage: 21.90,
      },
      lastYear: {
        amount: 11.557,
        percentage: 48.15,
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
      last24Hours: 0.000,
      totalSince: 0.263,
    },
    storage: {
      current: {
        amount: 0.312,
        percentage: 31.52,
      },
      lastYear: {
        amount: 0.200,
        percentage: 20.20,
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
      last24Hours: 0.000,
      totalSince: 0.239,
    },
    storage: {
      current: {
        amount: 0.308,
        percentage: 35.81,
      },
      lastYear: {
        amount: 0.598,
        percentage: 69.53,
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
      last24Hours: 0.000,
      totalSince: 0.130,
    },
    storage: {
      current: {
        amount: 0.130,
        percentage: 43.62,
      },
      lastYear: {
        amount: 0.232,
        percentage: 77.85,
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
        amount: 0.028,
        percentage: 1.66,
      },
      lastYear: {
        amount: 0.483,
        percentage: 28.58,
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
        amount: 0.259,
        percentage: 18.11,
      },
      lastYear: {
        amount: 0.742,
        percentage: 51.89,
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
      totalSince: 0.294,
    },
    storage: {
      current: {
        amount: 0.244,
        percentage: 67.22,
      },
      lastYear: {
        amount: 0.276,
        percentage: 76.03,
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
      totalSince: 0.194,
    },
    storage: {
      current: {
        amount: 0.899,
        percentage: 32.11,
      },
      lastYear: {
        amount: 1.535,
        percentage: 54.82,
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
      totalSince: 0.283,
    },
    storage: {
      current: {
        amount: 1.404,
        percentage: 70.20,
      },
      lastYear: {
        amount: 1.489,
        percentage: 74.45,
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
      totalSince: 0.610,
    },
    storage: {
      current: {
        amount: 2.689,
        percentage: 60.37,
      },
      lastYear: {
        amount: 3.525,
        percentage: 79.14,
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
      October: 0.315,
      November: 0.915,
      December: 2.140,
      January: 38.354,
      February: 44.515,
      March: 17.669,
      April: 8.233,
      May: 3.137,
      June: 0.976,
      July: 0.091,
      'Aug-Sep': 0.007,
    },
    total: 116.352,
  },
  {
    year: '15/16',
    months: {
      October: 1.024,
      November: 0.608,
      December: 1.248,
      January: 3.685,
      February: 2.824,
      March: 6.132,
      April: 1.314,
      May: 0.961,
      June: 0.105,
      July: 0.000,
      'Aug-Sep': 0.006,
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
      'Aug-Sep': 0.186,
    },
    total: 48.778,
  },
  {
    year: '23/24',
    months: {
      October: 0.583,
      November: 1.581,
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
      March: 1.465,
      April: 1.096,
      May: 0.716,
      June: 0.039,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 18.623,
  },
];

// Get formatted date from the data (6/6/25)
export const getReportDate = (): string => {
  return '6/6/25';
};

/**
 * Summary of changes between June 2 and June 6, 2025
 */
export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
Μεταξύ 2 Ιουνίου και 6 Ιουνίου 2025, οι ταμιευτήρες της Κύπρου συνέχισαν να παρουσιάζουν μικρές μειώσεις στην αποθήκευση νερού καθώς η ξηρή περίοδος του καλοκαιριού συνεχίζεται.

Στον Νότιο Αγωγό, οι περισσότεροι ταμιευτήρες είδαν περαιτέρω μικρές μειώσεις. Ο Κούρης μειώθηκε ελαφρώς από 20.662 MCM σε 20.531 MCM, ενώ τα Λεύκαρα μειώθηκαν από 2.374 MCM σε 2.368 MCM. Η Άχνα συνέχισε την πτωτική της τάση, μειωμένη από 0.526 MCM σε 0.472 MCM. Η Γερμασόγεια μειώθηκε από 2.909 MCM σε 2.854 MCM, ενώ η Πολεμίδια μειώθηκε ελαφρώς από 1.193 MCM σε 1.180 MCM. Ο Αρμίνου παρουσίασε μικρή μείωση από 2.669 MCM σε 2.651 MCM. Τα Καλαβασός μειώθηκαν από 4.021 MCM σε 3.942 MCM.

Στην περιοχή της Πάφου, ο Ασπρόκρεμμος μειώθηκε από 11.185 MCM σε 11.037 MCM, ενώ ο Κανναβιού μειώθηκε ελαφρώς από 3.917 MCM σε 3.872 MCM. Ο Μαυροκόλυμπος παρέμεινε στο μηδέν.

Στην περιοχή Χρυσοχούς, ο Ευρέτου μειώθηκε από 5.310 MCM σε 5.255 MCM, ενώ η Αργάκα μειώθηκε ελαφρώς από 0.318 MCM σε 0.312 MCM. Ο Πόμος μειώθηκε ελαφρώς από 0.315 MCM σε 0.308 MCM, ενώ η Αγία Μαρίνα μειώθηκε ελαφρώς από 0.135 MCM σε 0.130 MCM.

Οι ταμιευτήρες της Λευκωσίας παρουσίασαν μικρές μειώσεις, με τον Βυζακιά να μειώνεται από 0.040 MCM σε 0.028 MCM, τον Ξυλιάτου να μειώνεται ελαφρώς από 0.263 MCM σε 0.259 MCM, και τον Καλοπαναγιώτη να μειώνεται ελαφρώς από 0.247 MCM σε 0.244 MCM.

Μεταξύ των μικρότερων ταμιευτήρων εμπλουτισμού, ο Ταμασός μειώθηκε ελαφρώς από 0.910 MCM σε 0.899 MCM, ο Κλήρου-Μαλούντα μειώθηκε ελαφρώς από 1.411 MCM σε 1.404 MCM, και η Σολέα μειώθηκε ελαφρώς από 2.713 MCM σε 2.689 MCM.

Όσον αφορά την εισροή, η συνολική εισροή για το 2024/25 αυξήθηκε ελαφρώς από 18.587 MCM σε 18.623 MCM, με τον Ιούνιο να συνεισφέρει 0.039 MCM μέχρι στιγμής, αυξημένη από 0.003 MCM στις 2 Ιουνίου.

Συνολικά, η περίοδος χαρακτηρίστηκε από συνεχιζόμενες μικρές μειώσεις σε όλους τους ταμιευτήρες. Το συνολικό ποσοστό αποθήκευσης μειώθηκε ελαφρώς από 21.3% στις 2 Ιουνίου σε 21.1% στις 6 Ιουνίου.
`;
  }

  return `
Between June 2 and June 6, 2025, Cyprus's reservoirs continued to show small decreases in water storage as the dry summer period continues.

In the Southern Conveyor, most reservoirs saw further small decreases. Kouris decreased slightly from 20.662 MCM to 20.531 MCM, while Lefkara decreased from 2.374 MCM to 2.368 MCM. Achna continued its downward trend, decreasing from 0.526 MCM to 0.472 MCM. Germasoyeia decreased from 2.909 MCM to 2.854 MCM, while Polemidia decreased slightly from 1.193 MCM to 1.180 MCM. Arminou showed a small decrease from 2.669 MCM to 2.651 MCM. Kalavasos decreased from 4.021 MCM to 3.942 MCM.

In the Paphos region, Asprokremmos decreased from 11.185 MCM to 11.037 MCM, while Kannaviou decreased slightly from 3.917 MCM to 3.872 MCM. Mavrokolymbos remained at zero.

In Chrysochou, Evretou decreased from 5.310 MCM to 5.255 MCM, while Argaka decreased slightly from 0.318 MCM to 0.312 MCM. Pomos decreased slightly from 0.315 MCM to 0.308 MCM, and Agia Marina decreased slightly from 0.135 MCM to 0.130 MCM.

Nicosia's reservoirs showed small decreases, with Vyzakia decreasing from 0.040 MCM to 0.028 MCM, Xyliatou decreasing slightly from 0.263 MCM to 0.259 MCM, and Kalopanagiotis decreasing slightly from 0.247 MCM to 0.244 MCM.

Among the smaller recharge and other reservoirs, Tamassos decreased slightly from 0.910 MCM to 0.899 MCM, Klirou-Malounta decreased slightly from 1.411 MCM to 1.404 MCM, and Solea decreased slightly from 2.713 MCM to 2.689 MCM.

In terms of inflow, the total inflow for 2024/25 increased slightly from 18.587 MCM to 18.623 MCM, with June contributing 0.039 MCM so far, up from 0.003 MCM on June 2.

Overall, the period was characterized by continuing small decreases across all reservoirs. The total storage percentage decreased slightly from 21.3% on June 2 to 21.1% on June 6.
`;
};
