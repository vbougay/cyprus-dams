import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (16-MAY-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0.008,
      totalSince: 5.636,
    },
    storage: {
      current: {
        amount: 21.306,
        percentage: 18.5,
      },
      lastYear: {
        amount: 43.346,
        percentage: 37.7,
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
        amount: 4.284,
        percentage: 25.1,
      },
      lastYear: {
        amount: 5.026,
        percentage: 29.4,
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
        amount: 2.717,
        percentage: 19.6,
      },
      lastYear: {
        amount: 8.649,
        percentage: 62.4,
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
        amount: 5.915,
        percentage: 38.2,
      },
      lastYear: {
        amount: 5.847,
        percentage: 37.7,
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
        amount: 3.125,
        percentage: 23.1,
      },
      lastYear: {
        amount: 6.290,
        percentage: 46.6,
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
      last24Hours: 0.002,
      totalSince: 2.833,
    },
    storage: {
      current: {
        amount: 2.731,
        percentage: 63.5,
      },
      lastYear: {
        amount: 2.062,
        percentage: 48.0,
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
        amount: 1.243,
        percentage: 36.6,
      },
      lastYear: {
        amount: 1.287,
        percentage: 37.9,
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
        amount: 0.787,
        percentage: 11.6,
      },
      lastYear: {
        amount: 3.164,
        percentage: 46.5,
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
        amount: 11.859,
        percentage: 22.6,
      },
      lastYear: {
        amount: 26.707,
        percentage: 51.0,
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
      totalSince: 0.910,
    },
    storage: {
      current: {
        amount: 4.099,
        percentage: 23.9,
      },
      lastYear: {
        amount: 8.978,
        percentage: 52.3,
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
        amount: 1.056,
        percentage: 48.4,
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
        amount: 5.542,
        percentage: 23.1,
      },
      lastYear: {
        amount: 12.198,
        percentage: 50.8,
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
        amount: 0.357,
        percentage: 36.1,
      },
      lastYear: {
        amount: 0.179,
        percentage: 18.1,
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
        amount: 0.352,
        percentage: 40.9,
      },
      lastYear: {
        amount: 0.657,
        percentage: 76.4,
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
        amount: 0.166,
        percentage: 55.7,
      },
      lastYear: {
        amount: 0.235,
        percentage: 78.9,
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
        amount: 0.042,
        percentage: 2.5,
      },
      lastYear: {
        amount: 0.543,
        percentage: 32.1,
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
        amount: 0.294,
        percentage: 20.6,
      },
      lastYear: {
        amount: 0.811,
        percentage: 56.7,
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
        amount: 0.277,
        percentage: 76.3,
      },
      lastYear: {
        amount: 0.328,
        percentage: 90.4,
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
        amount: 0.964,
        percentage: 34.4,
      },
      lastYear: {
        amount: 1.605,
        percentage: 57.3,
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
        amount: 1.439,
        percentage: 72.0,
      },
      lastYear: {
        amount: 1.526,
        percentage: 76.3,
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
        amount: 2.806,
        percentage: 63.0,
      },
      lastYear: {
        amount: 3.632,
        percentage: 81.5,
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
      May: 0.588,
      June: 0.000,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 18.456,
  },
];

// Get formatted date from the data (5/16/25)
export const getReportDate = (): string => {
  return '5/16/25';
};

/**
 * Summary of changes between May 9 and May 16, 2025
 */
export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
Μεταξύ 9 Μαΐου και 16 Μαΐου 2025, οι ταμιευτήρες της Κύπρου συνέχισαν να παρουσιάζουν μείωση στην αποθήκευση νερού καθώς η ξηρή περίοδος προχωρά.

Στον Νότιο Αγωγό, οι περισσότεροι ταμιευτήρες είδαν περαιτέρω μείωση. Ο Κούρης μειώθηκε από 21.568 MCM σε 21.306 MCM, ενώ τα Λεύκαρα μειώθηκαν σημαντικά από 2.881 MCM σε 2.717 MCM. Η Άχνα συνέχισε την πτωτική της τάση, μειωμένη από 0.853 MCM σε 0.787 MCM. Ο Διπόταμος παρουσίασε μια μικρή αύξηση από 5.857 MCM σε 5.915 MCM.

Στην περιοχή της Πάφου, ο Ασπρόκρεμμος μειώθηκε από 12.075 MCM σε 11.859 MCM, ενώ ο Κανναβιού μειώθηκε ελαφρώς από 4.164 MCM σε 4.099 MCM. Ο Μαυροκόλυμπος παρέμεινε στο μηδέν.

Στην περιοχή Χρυσοχούς, ο Ευρέτου μειώθηκε από 5.613 MCM σε 5.542 MCM, ενώ η Αργάκα μειώθηκε ελαφρώς από 0.368 MCM σε 0.357 MCM. Ο Πόμος μειώθηκε από 0.363 MCM σε 0.352 MCM, και η Αγία Μαρίνα μειώθηκε από 0.173 MCM σε 0.166 MCM.

Οι ταμιευτήρες της Λευκωσίας παρουσίασαν μικρές μειώσεις, με τον Βυζακιά να παραμένει σχεδόν σταθερός στα 0.042 MCM, τον Ξυλιάτου να μειώνεται από 0.302 MCM σε 0.294 MCM, και τον Καλοπαναγιώτη να μειώνεται από 0.297 MCM σε 0.277 MCM.

Μεταξύ των μικρότερων ταμιευτήρων εμπλουτισμού, ο Ταμασός μειώθηκε από 0.983 MCM σε 0.964 MCM, ο Κλήρου-Μαλούντα παρέμεινε σχετικά σταθερός, και η Σολέα μειώθηκε ελαφρώς από 2.838 MCM σε 2.806 MCM.

Όσον αφορά την εισροή, η συνολική εισροή για το 2024/25 αυξήθηκε από 18.305 MCM σε 18.456 MCM, με τον Μάιο να συνεισφέρει περίπου 0.588 MCM μέχρι στιγμής, αύξηση από 0.437 MCM που είχε καταγραφεί στις 9 Μαΐου.

Συνολικά, η περίοδος χαρακτηρίστηκε από συνεχιζόμενες μειώσεις στους περισσότερους ταμιευτήρες, με λίγες εξαιρέσεις, καθώς η ξηρή περίοδος προχωρά. Το συνολικό ποσοστό αποθήκευσης μειώθηκε από 22.8% στις 9 Μαΐου σε 22.4% στις 16 Μαΐου.
`;
  }

  return `
Between May 9 and May 16, 2025, Cyprus's reservoirs continued to show decreases in water storage as the dry season progresses.

In the Southern Conveyor, most reservoirs saw further decreases. Kouris decreased from 21.568 MCM to 21.306 MCM, while Lefkara decreased significantly from 2.881 MCM to 2.717 MCM. Achna continued its downward trend, decreasing from 0.853 MCM to 0.787 MCM. Dipotamos showed a slight increase from 5.857 MCM to 5.915 MCM.

In the Paphos region, Asprokremmos decreased from 12.075 MCM to 11.859 MCM, while Kannaviou decreased slightly from 4.164 MCM to 4.099 MCM. Mavrokolymbos remained at zero.

In Chrysochou, Evretou decreased from 5.613 MCM to 5.542 MCM, while Argaka decreased slightly from 0.368 MCM to 0.357 MCM. Pomos decreased from 0.363 MCM to 0.352 MCM, and Agia Marina decreased from 0.173 MCM to 0.166 MCM.

Nicosia's reservoirs showed small decreases, with Vyzakia remaining almost stable at 0.042 MCM, Xyliatou decreasing from 0.302 MCM to 0.294 MCM, and Kalopanagiotis decreasing from 0.297 MCM to 0.277 MCM.

Among the smaller recharge and other reservoirs, Tamassos decreased from 0.983 MCM to 0.964 MCM, Klirou-Malounta remained relatively stable, and Solea decreased slightly from 2.838 MCM to 2.806 MCM.

In terms of inflow, the total inflow for 2024/25 increased from 18.305 MCM to 18.456 MCM, with May contributing about 0.588 MCM so far, up from 0.437 MCM recorded on May 9.

Overall, the period was characterized by continuing decreases in most reservoirs, with a few exceptions, as the dry season progresses. The total storage percentage decreased from 22.8% on May 9 to 22.4% on May 16.
`;
};
