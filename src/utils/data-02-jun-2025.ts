import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (02-JUN-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0.003,
      totalSince: 5.744,
    },
    storage: {
      current: {
        amount: 20.662,
        percentage: 17.97,
      },
      lastYear: {
        amount: 42.013,
        percentage: 36.53,
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
        amount: 4.021,
        percentage: 23.51,
      },
      lastYear: {
        amount: 4.895,
        percentage: 28.63,
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
        amount: 2.374,
        percentage: 17.14,
      },
      lastYear: {
        amount: 8.596,
        percentage: 62.06,
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
        amount: 5.957,
        percentage: 38.43,
      },
      lastYear: {
        amount: 5.446,
        percentage: 35.14,
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
        amount: 2.909,
        percentage: 21.55,
      },
      lastYear: {
        amount: 5.901,
        percentage: 43.71,
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
        amount: 2.669,
        percentage: 62.07,
      },
      lastYear: {
        amount: 1.881,
        percentage: 43.74,
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
        amount: 1.193,
        percentage: 35.09,
      },
      lastYear: {
        amount: 1.218,
        percentage: 35.82,
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
        amount: 0.526,
        percentage: 7.74,
      },
      lastYear: {
        amount: 2.933,
        percentage: 43.13,
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
        amount: 11.185,
        percentage: 21.36,
      },
      lastYear: {
        amount: 25.877,
        percentage: 49.41,
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
        amount: 3.917,
        percentage: 22.82,
      },
      lastYear: {
        amount: 8.715,
        percentage: 50.76,
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
        amount: 0.971,
        percentage: 44.54,
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
        amount: 5.310,
        percentage: 22.13,
      },
      lastYear: {
        amount: 11.689,
        percentage: 48.70,
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
        amount: 0.318,
        percentage: 32.12,
      },
      lastYear: {
        amount: 0.193,
        percentage: 19.49,
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
        amount: 0.315,
        percentage: 36.63,
      },
      lastYear: {
        amount: 0.609,
        percentage: 70.81,
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
        amount: 0.135,
        percentage: 45.30,
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
        amount: 0.040,
        percentage: 2.37,
      },
      lastYear: {
        amount: 0.494,
        percentage: 29.23,
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
        amount: 0.263,
        percentage: 18.39,
      },
      lastYear: {
        amount: 0.755,
        percentage: 52.80,
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
        amount: 0.247,
        percentage: 68.04,
      },
      lastYear: {
        amount: 0.291,
        percentage: 80.17,
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
        amount: 0.910,
        percentage: 32.5,
      },
      lastYear: {
        amount: 1.542,
        percentage: 55.07,
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
        amount: 1.411,
        percentage: 70.55,
      },
      lastYear: {
        amount: 1.498,
        percentage: 74.9,
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
        amount: 2.713,
        percentage: 60.90,
      },
      lastYear: {
        amount: 3.548,
        percentage: 79.66,
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
      June: 0.003,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 18.587,
  },
];

// Get formatted date from the data (6/2/25)
export const getReportDate = (): string => {
  return '6/2/25';
};

/**
 * Summary of changes between May 23 and June 2, 2025
 */
export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
Μεταξύ 23 Μαΐου και 2 Ιουνίου 2025, οι ταμιευτήρες της Κύπρου συνέχισαν να παρουσιάζουν μείωση στην αποθήκευση νερού καθώς η ξηρή περίοδος εντείνεται.

Στον Νότιο Αγωγό, οι περισσότεροι ταμιευτήρες είδαν περαιτέρω μείωση. Ο Κούρης μειώθηκε από 21.013 MCM σε 20.662 MCM, ενώ τα Λεύκαρα μειώθηκαν από 2.547 MCM σε 2.374 MCM. Η Άχνα συνέχισε την πτωτική της τάση, μειωμένη από 0.633 MCM σε 0.526 MCM. Η Γερμασόγεια μειώθηκε από 3.035 MCM σε 2.909 MCM, ενώ η Πολεμίδια μειώθηκε από 1.222 MCM σε 1.193 MCM. Ο Αρμίνου παρουσίασε μικρή μείωση από 2.714 MCM σε 2.669 MCM.

Στην περιοχή της Πάφου, ο Ασπρόκρεμμος μειώθηκε από 11.574 MCM σε 11.185 MCM, ενώ ο Κανναβιού μειώθηκε ελαφρώς από 4.021 MCM σε 3.917 MCM. Ο Μαυροκόλυμπος παρέμεινε στο μηδέν.

Στην περιοχή Χρυσοχούς, ο Ευρέτου μειώθηκε από 5.453 MCM σε 5.310 MCM, ενώ η Αργάκα μειώθηκε από 0.342 MCM σε 0.318 MCM. Ο Πόμος μειώθηκε από 0.337 MCM σε 0.315 MCM, ενώ η Αγία Μαρίνα μειώθηκε από 0.154 MCM σε 0.135 MCM.

Οι ταμιευτήρες της Λευκωσίας παρουσίασαν μικρές μειώσεις, με τον Βυζακιά να μειώνεται ελαφρώς από 0.041 MCM σε 0.040 MCM, τον Ξυλιάτου να μειώνεται από 0.281 MCM σε 0.263 MCM, και τον Καλοπαναγιώτη να μειώνεται από 0.265 MCM σε 0.247 MCM.

Μεταξύ των μικρότερων ταμιευτήρων εμπλουτισμού, ο Ταμασός μειώθηκε από 0.936 MCM σε 0.910 MCM, ο Κλήρου-Μαλούντα μειώθηκε από 1.429 MCM σε 1.411 MCM, και η Σολέα μειώθηκε από 2.766 MCM σε 2.713 MCM.

Όσον αφορά την εισροή, η συνολική εισροή για το 2024/25 αυξήθηκε ελαφρώς από 18.505 MCM σε 18.587 MCM, με τον Ιούνιο να συνεισφέρει μόλις 0.003 MCM μέχρι στιγμής, αντικατοπτρίζοντας την τυπική ξηρή περίοδο του καλοκαιριού.

Συνολικά, η περίοδος χαρακτηρίστηκε από συνεχιζόμενες μειώσεις σε όλους τους ταμιευτήρες, καθώς η ξηρή περίοδος εντείνεται. Το συνολικό ποσοστό αποθήκευσης μειώθηκε από 21.9% στις 23 Μαΐου σε 21.3% στις 2 Ιουνίου.
`;
  }

  return `
Between May 23 and June 2, 2025, Cyprus's reservoirs continued to show decreases in water storage as the dry season intensifies.

In the Southern Conveyor, most reservoirs saw further decreases. Kouris decreased from 21.013 MCM to 20.662 MCM, while Lefkara decreased from 2.547 MCM to 2.374 MCM. Achna continued its downward trend, decreasing from 0.633 MCM to 0.526 MCM. Germasoyeia decreased from 3.035 MCM to 2.909 MCM, while Polemidia decreased from 1.222 MCM to 1.193 MCM. Arminou showed a small decrease from 2.714 MCM to 2.669 MCM.

In the Paphos region, Asprokremmos decreased from 11.574 MCM to 11.185 MCM, while Kannaviou decreased slightly from 4.021 MCM to 3.917 MCM. Mavrokolympos remained at zero.

In Chrysochou, Evretou decreased from 5.453 MCM to 5.310 MCM, while Argaka decreased from 0.342 MCM to 0.318 MCM. Pomos decreased from 0.337 MCM to 0.315 MCM, and Agia Marina decreased from 0.154 MCM to 0.135 MCM.

Nicosia's reservoirs showed small decreases, with Vyzakia decreasing slightly from 0.041 MCM to 0.040 MCM, Xyliatos decreasing from 0.281 MCM to 0.263 MCM, and Kalopanagiotis decreasing from 0.265 MCM to 0.247 MCM.

Among the smaller recharge and other reservoirs, Tamassos decreased from 0.936 MCM to 0.910 MCM, Klirou-Malounta decreased from 1.429 MCM to 1.411 MCM, and Solea decreased from 2.766 MCM to 2.713 MCM.

In terms of inflow, the total inflow for 2024/25 increased slightly from 18.505 MCM to 18.587 MCM, with June contributing only 0.003 MCM so far, reflecting the typical dry summer period.

Overall, the period was characterized by continuing decreases across all reservoirs as the dry season intensifies. The total storage percentage decreased from 21.9% on May 23 to 21.3% on June 2.
`;
};
