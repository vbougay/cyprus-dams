import { Reservoir, YearlyInflowData } from '../types';

// Reservoir data parsed from the provided data (18-JUL-2025)
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
        amount: 18.050,
        percentage: 15.7,
      },
      lastYear: {
        amount: 38.012,
        percentage: 33.1,
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
        amount: 2.951,
        percentage: 17.3,
      },
      lastYear: {
        amount: 4.465,
        percentage: 26.1,
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
        amount: 2.252,
        percentage: 16.3,
      },
      lastYear: {
        amount: 8.381,
        percentage: 60.5,
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
        amount: 5.032,
        percentage: 32.5,
      },
      lastYear: {
        amount: 4.199,
        percentage: 27.1,
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
        amount: 2.188,
        percentage: 16.2,
      },
      lastYear: {
        amount: 4.881,
        percentage: 36.2,
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
        amount: 2.377,
        percentage: 55.3,
      },
      lastYear: {
        amount: 1.551,
        percentage: 36.1,
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
        amount: 1.050,
        percentage: 30.9,
      },
      lastYear: {
        amount: 1.005,
        percentage: 29.6,
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
        amount: 0.375,
        percentage: 5.5,
      },
      lastYear: {
        amount: 1.790,
        percentage: 26.3,
      },
    },
    maxStorage: {
      amount: 3.831,
      date: '22/3',
    },
    region: 'Southern Conveyor',
  },

  // Pafos Region
  {
    name: 'Asprokremmos',
    capacity: 52.375,
    inflow: {
      last24Hours: 0,
      totalSince: 1.224,
    },
    storage: {
      current: {
        amount: 9.215,
        percentage: 17.6,
      },
      lastYear: {
        amount: 22.737,
        percentage: 43.4,
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
        amount: 3.350,
        percentage: 19.5,
      },
      lastYear: {
        amount: 7.842,
        percentage: 45.7,
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
        amount: 0.672,
        percentage: 30.8,
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
        amount: 4.557,
        percentage: 19.0,
      },
      lastYear: {
        amount: 10.097,
        percentage: 42.1,
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
        amount: 0.171,
        percentage: 17.3,
      },
      lastYear: {
        amount: 0.150,
        percentage: 15.2,
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
        amount: 0.209,
        percentage: 24.3,
      },
      lastYear: {
        amount: 0.441,
        percentage: 51.3,
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
        amount: 0.061,
        percentage: 20.5,
      },
      lastYear: {
        amount: 0.103,
        percentage: 34.6,
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
        amount: 0.013,
        percentage: 0.8,
      },
      lastYear: {
        amount: 0.347,
        percentage: 20.5,
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
        amount: 0.173,
        percentage: 12.1,
      },
      lastYear: {
        amount: 0.571,
        percentage: 39.9,
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
        amount: 0.161,
        percentage: 44.4,
      },
      lastYear: {
        amount: 0.128,
        percentage: 35.3,
      },
    },
    maxStorage: {
      amount: 0.363,
      date: '1/1-19/4',
    },
    region: 'Nicosia',
  },

  // Recharge/Other
  {
    name: 'Tamassos',
    capacity: 2.800,
    inflow: {
      last24Hours: 0,
      totalSince: 0.194,
    },
    storage: {
      current: {
        amount: 0.765,
        percentage: 27.3,
      },
      lastYear: {
        amount: 1.322,
        percentage: 47.2,
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
        amount: 1.316,
        percentage: 65.8,
      },
      lastYear: {
        amount: 1.411,
        percentage: 70.6,
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
        amount: 2.407,
        percentage: 54.0,
      },
      lastYear: {
        amount: 3.248,
        percentage: 72.9,
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
      May: 0.716,
      June: 0.076,
      July: 0.000,
      'Aug-Sep': 0.000,
    },
    total: 18.660,
  },
];

// Get formatted date from the data (7/18/25)
export const getReportDate = (): string => {
  return '7/18/25';
};

/**
 * Summary of changes between July 4 and July 18, 2025
 */
export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (4 Ιουλίου - 18 Ιουλίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου μειώθηκε από 19,1% σε 17,9% μεταξύ 4 και 18 Ιουλίου 2025. Αυτή η μείωση κατά 1,2 ποσοστιαίες μονάδες συνεχίζει την τάση της αυξημένης κατανάλωσης νερού κατά τους καλοκαιρινούς μήνες. Η συνολική εισροή για την περίοδο 2024/25 παρέμεινε σταθερή στα 18,660 εκατομμύρια κυβικά μέτρα (ΕΚΜ).

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Η αποθήκευση μειώθηκε από 16,3% σε 18,1%, με τον ταμιευτήρα του Κούρη να παρουσιάζει μείωση από 18,801 σε 18,050 ΕΚΜ (από 16,3% σε 15,7%).
- **Πάφος:** Η αποθήκευση μειώθηκε από 18,7% σε 17,5%, με τον Ασπρόκρεμμο να σημειώνει πτώση από 9,884 σε 9,215 ΕΚΜ.
- **Χρυσοχού:** Η αποθήκευση μειώθηκε από 20,5% σε 19,1%, με μικρές μειώσεις στους περισσότερους ταμιευτήρες.
- **Λευκωσία:** Η αποθήκευση μειώθηκε από 12,2% σε 10,0%, με μικρές μειώσεις σε όλους τους ταμιευτήρες.

**Εισροές και Μελλοντικές Προοπτικές:**
Οι εισροές παρέμειναν μηδενικές, όπως αναμένεται για την εποχή. Η διαχείριση των αποθεμάτων νερού θα είναι κρίσιμη κατά τους επόμενους μήνες για την κάλυψη των αναγκών σε ύδρευση και άρδευση. Η μεταφορά 0,290 ΕΚΜ από τον Αρμίνου στον Κούρη συνεχίζεται για τη βελτιστοποίηση της διανομής νερού.
`;
  }

  return `
### Recent Changes (July 4 - July 18, 2025)

**General Overview:**
The total water storage in Cyprus's reservoirs decreased from 19.1% to 17.9% between July 4 and July 18, 2025. This decline of 1.2 percentage points continues the trend of increased water consumption during the summer months. The total inflow for the 2024/25 season remained stable at 18.660 million cubic meters (MCM).

**By Region:**
- **Southern Conveyor:** Storage decreased from 16.3% to 18.1%, with the Kouris reservoir showing a drop from 18.801 to 18.050 MCM (from 16.3% to 15.7%).
- **Paphos:** Storage decreased from 18.7% to 17.5%, with Asprokremmos experiencing a decline from 9.884 to 9.215 MCM.
- **Chrysochou:** Storage decreased from 20.5% to 19.1%, with minor decreases across most reservoirs.
- **Nicosia:** Storage decreased from 12.2% to 10.0%, with small decreases across all reservoirs.

**Inflows and Future Outlook:**
Inflows remained at zero, as expected for the season. Water resource management will be critical in the coming months to meet irrigation and domestic needs. The transfer of 0.290 MCM from Arminou to Kouris dam continues to optimize water distribution.
`;
};
