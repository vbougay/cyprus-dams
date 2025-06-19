import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (10-JUN-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0.026,
      totalSince: 5.806,
    },
    storage: {
      current: {
        amount: 20.401,
        percentage: 17.74,
      },
      lastYear: {
        amount: 41.291,
        percentage: 35.91,
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
        amount: 3.862,
        percentage: 22.58,
      },
      lastYear: {
        amount: 4.818,
        percentage: 28.18,
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
        amount: 2.355,
        percentage: 17.00,
      },
      lastYear: {
        amount: 8.564,
        percentage: 61.83,
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
        amount: 5.847,
        percentage: 37.72,
      },
      lastYear: {
        amount: 5.222,
        percentage: 33.69,
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
        amount: 2.804,
        percentage: 20.77,
      },
      lastYear: {
        amount: 5.717,
        percentage: 42.35,
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
        amount: 2.628,
        percentage: 61.12,
      },
      lastYear: {
        amount: 1.787,
        percentage: 41.56,
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
        amount: 1.165,
        percentage: 34.26,
      },
      lastYear: {
        amount: 1.181,
        percentage: 34.74,
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
        amount: 0.468,
        percentage: 6.88,
      },
      lastYear: {
        amount: 2.648,
        percentage: 38.94,
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
        amount: 10.880,
        percentage: 20.77,
      },
      lastYear: {
        amount: 25.363,
        percentage: 48.43,
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
        amount: 3.828,
        percentage: 22.30,
      },
      lastYear: {
        amount: 8.580,
        percentage: 49.98,
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
        amount: 0.917,
        percentage: 42.06,
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
        amount: 5.209,
        percentage: 21.70,
      },
      lastYear: {
        amount: 11.444,
        percentage: 47.68,
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
        amount: 0.300,
        percentage: 30.30,
      },
      lastYear: {
        amount: 0.175,
        percentage: 17.68,
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
        amount: 0.298,
        percentage: 34.65,
      },
      lastYear: {
        amount: 0.580,
        percentage: 67.44,
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
        amount: 0.124,
        percentage: 41.61,
      },
      lastYear: {
        amount: 0.214,
        percentage: 71.81,
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
        amount: 0.024,
        percentage: 1.42,
      },
      lastYear: {
        amount: 0.467,
        percentage: 27.63,
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
        amount: 0.250,
        percentage: 17.48,
      },
      lastYear: {
        amount: 0.725,
        percentage: 50.70,
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
        amount: 0.239,
        percentage: 65.84,
      },
      lastYear: {
        amount: 0.260,
        percentage: 71.63,
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
      last24Hours: -0.014,
      totalSince: 0.180,
    },
    storage: {
      current: {
        amount: 0.876,
        percentage: 31.29,
      },
      lastYear: {
        amount: 1.507,
        percentage: 53.82,
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
        amount: 1.397,
        percentage: 69.85,
      },
      lastYear: {
        amount: 1.481,
        percentage: 74.05,
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
      last24Hours: -0.002,
      totalSince: 0.608,
    },
    storage: {
      current: {
        amount: 2.665,
        percentage: 59.84,
      },
      lastYear: {
        amount: 3.500,
        percentage: 78.58,
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
      June: 0.065,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 18.649,
  },
];

// Get formatted date from the data (6/10/25)
export const getReportDate = (): string => {
  return '6/10/25';
};

/**
 * Summary of changes between June 6 and June 10, 2025
 */
export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
Μεταξύ 6 Ιουνίου και 10 Ιουνίου 2025, οι ταμιευτήρες της Κύπρου συνέχισαν να παρουσιάζουν μειώσεις στην αποθήκευση νερού καθώς η ξηρή περίοδος του καλοκαιριού εντείνεται.

Στον Νότιο Αγωγό, όλοι οι ταμιευτήρες παρουσίασαν περαιτέρω μειώσεις στα επίπεδα αποθήκευσης. Οι μεγαλύτεροι ταμιευτήρες όπως ο Κούρης, τα Καλαβασός και τα Λεύκαρα συνέχισαν την πτωτική τους πορεία, ενώ και οι μικρότεροι ταμιευτήρες της περιοχής έδειξαν παρόμοιες τάσεις.

Στην περιοχή της Πάφου, τόσο ο Ασπρόκρεμμος όσο και ο Κανναβιού μειώθηκαν, ενώ ο Μαυροκόλυμπος παραμένει εντελώς άδειος.

Στην περιοχή Χρυσοχούς, όλοι οι ταμιευτήρες παρουσίασαν μειώσεις, με τον Ευρέτου να οδηγεί τις απώλειες στην περιοχή.

Οι ταμιευτήρες της Λευκωσίας επίσης έδειξαν μειώσεις, με όλους τους τρεις ταμιευτήρες της περιοχής να καταγράφουν χαμηλότερα επίπεδα.

Μεταξύ των ταμιευτήρων εμπλουτισμού, παρατηρήθηκαν μικρές μειώσεις σε όλους τους ταμιευτήρες της κατηγορίας.

Όσον αφορά την εισροή, η συνολική εισροή για το 2024/25 αυξήθηκε ελαφρώς από 18.623 MCM σε 18.649 MCM, με τον Ιούνιο να συνεισφέρει 0.065 MCM μέχρι στιγμής.

Συνολικά, η περίοδος χαρακτηρίστηκε από συνεχιζόμενες μειώσεις σε όλες τις περιοχές. Το συνολικό ποσοστό αποθήκευσης μειώθηκε από 21.1% στις 6 Ιουνίου σε 20.9% στις 10 Ιουνίου, αντικατοπτρίζοντας την τυπική καλοκαιρινή ξηρή περίοδο.
`;
  }

  return `
Between June 6 and June 10, 2025, Cyprus's reservoirs continued to show decreases in water storage as the dry summer period intensifies.

In the Southern Conveyor, all reservoirs showed further decreases in storage levels. The major reservoirs including Kouris, Kalavasos, and Lefkara continued their downward trajectory, while smaller reservoirs in the region showed similar trends.

In the Paphos region, both Asprokremmos and Kannaviou decreased, while Mavrokolymbos remains completely empty.

In Chrysochou, all reservoirs showed decreases, with Evretou leading the losses in the region.

Nicosia's reservoirs also showed decreases, with all three reservoirs in the region recording lower levels.

Among the recharge and other reservoirs, small decreases were observed across all reservoirs in this category.

In terms of inflow, the total inflow for 2024/25 increased slightly from 18.623 MCM to 18.649 MCM, with June contributing 0.065 MCM so far.

Overall, the period was characterized by continuing decreases across all regions. The total storage percentage decreased from 21.1% on June 6 to 20.9% on June 10, reflecting the typical summer dry period.
`;
};
