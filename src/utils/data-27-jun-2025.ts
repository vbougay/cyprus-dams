import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (27-JUN-2025)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  {
    name: 'Kouris',
    capacity: 115.000,
    inflow: {
      last24Hours: 0,
      totalSince: 5.817,
    },
    storage: {
      current: {
        amount: 19.214,
        percentage: 16.71,
      },
      lastYear: {
        amount: 39.956,
        percentage: 34.74,
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
      last24Hours: 0,
      totalSince: 1.319,
    },
    storage: {
      current: {
        amount: 3.536,
        percentage: 20.68,
      },
      lastYear: {
        amount: 4.655,
        percentage: 27.22,
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
      last24Hours: 0,
      totalSince: 0.222,
    },
    storage: {
      current: {
        amount: 2.313,
        percentage: 16.70,
      },
      lastYear: {
        amount: 8.484,
        percentage: 61.26,
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
      last24Hours: 0,
      totalSince: 0.546,
    },
    storage: {
      current: {
        amount: 5.486,
        percentage: 35.39,
      },
      lastYear: {
        amount: 4.724,
        percentage: 30.48,
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
      last24Hours: 0,
      totalSince: 2.580,
    },
    storage: {
      current: {
        amount: 2.549,
        percentage: 18.88,
      },
      lastYear: {
        amount: 5.355,
        percentage: 39.67,
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
      last24Hours: 0,
      totalSince: 2.844,
    },
    storage: {
      current: {
        amount: 2.523,
        percentage: 58.67,
      },
      lastYear: {
        amount: 1.681,
        percentage: 39.09,
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
      last24Hours: 0,
      totalSince: 0.876,
    },
    storage: {
      current: {
        amount: 1.113,
        percentage: 32.74,
      },
      lastYear: {
        amount: 1.106,
        percentage: 32.53,
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
      last24Hours: 0,
      totalSince: 0,
    },
    storage: {
      current: {
        amount: 0.413,
        percentage: 6.07,
      },
      lastYear: {
        amount: 2.116,
        percentage: 31.12,
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
      last24Hours: 0,
      totalSince: 1.224,
    },
    storage: {
      current: {
        amount: 10.191,
        percentage: 19.46,
      },
      lastYear: {
        amount: 24.137,
        percentage: 46.08,
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
      last24Hours: 0,
      totalSince: 0.922,
    },
    storage: {
      current: {
        amount: 3.638,
        percentage: 21.19,
      },
      lastYear: {
        amount: 8.240,
        percentage: 48.00,
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
      last24Hours: 0,
      totalSince: 0.199,
    },
    storage: {
      current: {
        amount: 0,
        percentage: 0.0,
      },
      lastYear: {
        amount: 0.816,
        percentage: 37.43,
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
      last24Hours: 0,
      totalSince: 1.026,
    },
    storage: {
      current: {
        amount: 4.951,
        percentage: 20.63,
      },
      lastYear: {
        amount: 10.865,
        percentage: 45.27,
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
      last24Hours: 0,
      totalSince: 0.263,
    },
    storage: {
      current: {
        amount: 0.251,
        percentage: 25.35,
      },
      lastYear: {
        amount: 0.155,
        percentage: 15.66,
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
      last24Hours: 0,
      totalSince: 0.239,
    },
    storage: {
      current: {
        amount: 0.261,
        percentage: 30.35,
      },
      lastYear: {
        amount: 0.521,
        percentage: 60.58,
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
      last24Hours: 0,
      totalSince: 0.130,
    },
    storage: {
      current: {
        amount: 0.093,
        percentage: 31.21,
      },
      lastYear: {
        amount: 0.160,
        percentage: 53.69,
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
      last24Hours: 0,
      totalSince: 0.002,
    },
    storage: {
      current: {
        amount: 0.022,
        percentage: 1.30,
      },
      lastYear: {
        amount: 0.411,
        percentage: 24.32,
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
      last24Hours: 0,
      totalSince: 0.157,
    },
    storage: {
      current: {
        amount: 0.218,
        percentage: 15.24,
      },
      lastYear: {
        amount: 0.660,
        percentage: 46.15,
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
      last24Hours: 0,
      totalSince: 0.294,
    },
    storage: {
      current: {
        amount: 0.214,
        percentage: 58.95,
      },
      lastYear: {
        amount: 0.189,
        percentage: 52.07,
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
      last24Hours: 0,
      totalSince: 0.194,
    },
    storage: {
      current: {
        amount: 0.830,
        percentage: 29.64,
      },
      lastYear: {
        amount: 1.423,
        percentage: 50.82,
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
      last24Hours: 0,
      totalSince: 0.283,
    },
    storage: {
      current: {
        amount: 1.361,
        percentage: 68.05,
      },
      lastYear: {
        amount: 1.449,
        percentage: 72.45,
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
      last24Hours: 0,
      totalSince: 0.610,
    },
    storage: {
      current: {
        amount: 2.555,
        percentage: 57.38,
      },
      lastYear: {
        amount: 3.387,
        percentage: 76.04,
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
      June: 0.076,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 18.660,
  },
];

// Get formatted date from the data (6/27/25)
export const getReportDate = (): string => {
  return '6/27/25';
};

/**
 * Summary of changes between June 17 and June 27, 2025
 */
export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (17 Ιουνίου - 27 Ιουνίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου μειώθηκε από 20,6% σε 19,6% μεταξύ 17 και 27 Ιουνίου 2025. Αυτή η μείωση είναι χαρακτηριστική της αυξημένης ζήτησης νερού κατά τους καλοκαιρινούς μήνες. Η συνολική εισροή για την περίοδο 2024/25 παρέμεινε σταθερή στα 18,660 εκατομμύρια κυβικά μέτρα (ΕΚΜ).

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Η αποθήκευση μειώθηκε από 17,4% σε 16,7%, με τον ταμιευτήρα του Κούρη να παρουσιάζει τη μεγαλύτερη μείωση.
- **Πάφος:** Η αποθήκευση μειώθηκε από 20,3% σε 19,5%, με τον Ασπρόκρεμμο να σημειώνει σημαντική πτώση.
- **Χρυσοχού:** Η αποθήκευση μειώθηκε από 21,3% σε 20,6%, με τον ταμιευτήρα του Ευρέτου να παρουσιάζει τη μεγαλύτερη μείωση.
- **Λευκωσία:** Η αποθήκευση μειώθηκε από 13,0% σε 12,8%, με μικρές μειώσεις σε όλους τους ταμιευτήρες.

**Εισροές και Μελλοντικές Προοπτικές:**
Οι εισροές παρέμειναν μηδενικές, όπως αναμένεται για την εποχή. Η διαχείριση των αποθεμάτων νερού θα είναι κρίσιμη κατά τους επόμενους μήνες για την κάλυψη των αναγκών σε ύδρευση και άρδευση.
`;
  }

  return `
### Recent Changes (June 17 - June 27, 2025)

**General Overview:**
The total water storage in Cyprus's reservoirs decreased from 20.6% to 19.6% between June 17 and June 27, 2025. This decline is typical of the increased water demand during the summer months. The total inflow for the 2024/25 season remained stable at 18.660 million cubic meters (MCM).

**By Region:**
- **Southern Conveyor:** Storage decreased from 17.4% to 16.7%, with the Kouris reservoir showing the largest drop.
- **Paphos:** Storage decreased from 20.3% to 19.5%, with Asprokremmos experiencing a significant decline.
- **Chrysochou:** Storage decreased from 21.3% to 20.6%, with the Evretou reservoir showing the largest decrease.
- **Nicosia:** Storage decreased from 13.0% to 12.8%, with minor decreases across all reservoirs.

**Inflows and Future Outlook:**
Inflows remained at zero, as expected for the season. Water resource management will be critical in the coming months to meet irrigation and domestic needs.
`;
};
