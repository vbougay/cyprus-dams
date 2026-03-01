import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (28-APR-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0.052,
      totalSince: 5.364,
    },
    storage: {
      current: {
        amount: 21.883,
        percentage: 19.0,
      },
      lastYear: {
        amount: 44.385,
        percentage: 38.6,
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
      last24Hours: 0.004,
      totalSince: 1.303,
    },
    storage: {
      current: {
        amount: 4.438,
        percentage: 26.0,
      },
      lastYear: {
        amount: 5.100,
        percentage: 29.8,
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
      last24Hours: 0.005,
      totalSince: 0.189,
    },
    storage: {
      current: {
        amount: 3.161,
        percentage: 22.8,
      },
      lastYear: {
        amount: 8.698,
        percentage: 62.8,
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
      last24Hours: 0.008,
      totalSince: 0.525,
    },
    storage: {
      current: {
        amount: 5.805,
        percentage: 37.5,
      },
      lastYear: {
        amount: 6.150,
        percentage: 39.7,
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
      totalSince: 2.570,
    },
    storage: {
      current: {
        amount: 3.317,
        percentage: 24.6,
      },
      lastYear: {
        amount: 6.428,
        percentage: 47.6,
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
      last24Hours: 0.015,
      totalSince: 2.671,
    },
    storage: {
      current: {
        amount: 2.641,
        percentage: 61.4,
      },
      lastYear: {
        amount: 2.200,
        percentage: 51.2,
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
      totalSince: 0.865,
    },
    storage: {
      current: {
        amount: 1.272,
        percentage: 37.4,
      },
      lastYear: {
        amount: 1.338,
        percentage: 39.4,
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
        amount: 0.992,
        percentage: 14.6,
      },
      lastYear: {
        amount: 3.486,
        percentage: 51.3,
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
      totalSince: 1.163,
    },
    storage: {
      current: {
        amount: 12.356,
        percentage: 23.6,
      },
      lastYear: {
        amount: 27.537,
        percentage: 52.6,
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
      last24Hours: 0.006,
      totalSince: 0.870,
    },
    storage: {
      current: {
        amount: 4.266,
        percentage: 24.8,
      },
      lastYear: {
        amount: 9.202,
        percentage: 53.6,
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
        amount: 1.118,
        percentage: 51.3,
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
      totalSince: 1.010,
    },
    storage: {
      current: {
        amount: 5.680,
        percentage: 23.7,
      },
      lastYear: {
        amount: 12.569,
        percentage: 52.4,
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
      last24Hours: 0.001,
      totalSince: 0.263,
    },
    storage: {
      current: {
        amount: 0.381,
        percentage: 38.5,
      },
      lastYear: {
        amount: 0.236,
        percentage: 23.8,
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
      totalSince: 0.239,
    },
    storage: {
      current: {
        amount: 0.378,
        percentage: 44.0,
      },
      lastYear: {
        amount: 0.693,
        percentage: 80.6,
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
      totalSince: 0.128,
    },
    storage: {
      current: {
        amount: 0.177,
        percentage: 59.2,
      },
      lastYear: {
        amount: 0.232,
        percentage: 77.9,
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
        amount: 0.046,
        percentage: 2.7,
      },
      lastYear: {
        amount: 0.586,
        percentage: 34.7,
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
        amount: 0.311,
        percentage: 21.7,
      },
      lastYear: {
        amount: 0.845,
        percentage: 59.1,
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
      totalSince: 0.291,
    },
    storage: {
      current: {
        amount: 0.305,
        percentage: 84.0,
      },
      lastYear: {
        amount: 0.350,
        percentage: 96.4,
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
        amount: 1.000,
        percentage: 35.7,
      },
      lastYear: {
        amount: 1.638,
        percentage: 58.5,
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
        amount: 1.459,
        percentage: 73.0,
      },
      lastYear: {
        amount: 1.522,
        percentage: 76.1,
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
        amount: 2.866,
        percentage: 64.4,
      },
      lastYear: {
        amount: 3.717,
        percentage: 83.5,
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
      April: 1.037,
      May: 0.000,
      June: 0.000,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 17.809,
  },
];

// Get formatted date from the data (4/28/25)
export const getReportDate = (): string => {
  return '4/28/25';
};

/**
 * Summary of changes between April 11 and April 28, 2025
 */
export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
Μεταξύ 11 Απριλίου και 28 Απριλίου 2025, οι ταμιευτήρες της Κύπρου παρουσίασαν μικτές αλλαγές καθώς η ξηρή περίοδος ξεκίνησε.

Στον Νότιο Αγωγό, οι περισσότεροι ταμιευτήρες είδαν μείωση στην αποθήκευση νερού. Ο Κούρης μειώθηκε κατά περίπου 0.4 εκατομμύρια κυβικά μέτρα (MCM), ενώ ο Λεύκαρα, η Γερμασόγεια και η Άχνα επίσης σημείωσαν μειώσεις. Ο Διπόταμος παρουσίασε μια μικρή αύξηση, ενώ ο Αρμίνου παρέμεινε σχετικά σταθερός.

Στην περιοχή της Πάφου, ο Ασπρόκρεμμος και ο Κανναβιού συνέχισαν τη σταδιακή μείωσή τους, χάνοντας περίπου 0.5 και 0.15 MCM αντίστοιχα, ενώ ο Μαυροκόλυμπος παρέμεινε στο μηδέν.

Στην περιοχή Χρυσοχούς, ο Ευρέτου έχασε περίπου 0.15 MCM, ενώ η Αργάκα, ο Πόμος και η Αγία Μαρίνα παρέμειναν σχετικά σταθεροί.

Οι ταμιευτήρες της Λευκωσίας παρουσίασαν μικρές μειώσεις, με τον Ξυλιάτου να χάνει περίπου 0.01 MCM και τον Καλοπαναγιώτη να μειώνεται ελαφρώς.

Μεταξύ των μικρότερων ταμιευτήρων εμπλουτισμού, ο Ταμασός μειώθηκε κατά περίπου 0.03 MCM, ενώ ο Κλήρου-Μαλούντα και η Σολέα παρέμειναν σχετικά σταθεροί.

Όσον αφορά την εισροή, οι περισσότεροι ταμιευτήρες κατέγραψαν μικρές αυξήσεις από την αρχή του υδρολογικού έτους. Η συνολική εισροή για το 2024/25 αυξήθηκε κατά περίπου 0.5 MCM σε 17.81 MCM, με τον Απρίλιο να συνεισφέρει περίπου 1.04 MCM.

Συνολικά, η περίοδος χαρακτηρίστηκε από αργές μειώσεις στους περισσότερους ταμιευτήρες, με λίγες τοπικές αυξήσεις, καθώς η ξηρή περίοδος ξεκίνησε. Δεν παρατηρήθηκαν σημαντικές αλλαγές στη μέγιστη αποθήκευση ή χωρητικότητα.
`;
  }
  
  return `
Between April 11 and April 28, 2025, Cyprus's reservoirs experienced mixed changes as the dry season began.

In the Southern Conveyor, most reservoirs saw decreases in water storage. Kouris decreased by about 0.4 million cubic meters (MCM), while Lefkara, Germasoyeia, and Achna also recorded decreases. Dipotamos showed a small increase, while Arminou remained relatively stable.

The Paphos region continued its gradual decline, with Asprokremmos and Kannaviou losing about 0.5 and 0.15 MCM respectively, while Mavrokolympos remained at zero.

In Chrysochou, Evretou lost about 0.15 MCM, while Argaka, Pomos, and Agia Marina remained relatively stable.

Nicosia's reservoirs showed small decreases, with Xyliatos losing about 0.01 MCM and Kalopanagiotis decreasing slightly.

Among the smaller recharge and other reservoirs, Tamassos decreased by about 0.03 MCM, while Klirou-Malounta and Solea remained relatively stable.

In terms of inflow, most reservoirs recorded small increases since the start of the hydrological year. The total inflow for 2024/25 increased by about 0.5 MCM to 17.81 MCM, with April contributing about 1.04 MCM.

Overall, the period was characterized by slow decreases in most reservoirs, with a few local increases, as the dry season began. No major changes in maximum storage or capacity were observed.
`;
};
