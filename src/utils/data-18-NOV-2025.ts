import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for November 18, 2025 (parsed from 18-NOV-2025 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.0, totalSince: 0.014 }, storage: { current: { amount: 10.196, percentage: 8.87 }, lastYear: { amount: 25.989, percentage: 22.60 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.0, totalSince: 0.007 }, storage: { current: { amount: 1.679, percentage: 9.82 }, lastYear: { amount: 3.792, percentage: 22.18 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.0, totalSince: 0.015 }, storage: { current: { amount: 1.976, percentage: 14.27 }, lastYear: { amount: 6.532, percentage: 47.16 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.0, totalSince: 0.009 }, storage: { current: { amount: 2.885, percentage: 18.61 }, lastYear: { amount: 3.929, percentage: 25.35 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 0.556, percentage: 4.12 }, lastYear: { amount: 2.660, percentage: 19.70 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.002, totalSince: 0.013 }, storage: { current: { amount: 1.679, percentage: 39.05 }, lastYear: { amount: 1.016, percentage: 23.63 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.006 }, storage: { current: { amount: 0.809, percentage: 23.79 }, lastYear: { amount: 0.703, percentage: 20.68 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.090, percentage: 1.32 }, lastYear: { amount: 0.674, percentage: 9.91 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.0, totalSince: 0.027 }, storage: { current: { amount: 4.428, percentage: 8.45 }, lastYear: { amount: 15.695, percentage: 29.97 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.0, totalSince: 0.008 }, storage: { current: { amount: 1.789, percentage: 10.42 }, lastYear: { amount: 5.489, percentage: 31.97 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.0, percentage: 0.0 }, lastYear: { amount: 0.422, percentage: 19.36 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.0, totalSince: 0.010 }, storage: { current: { amount: 2.556, percentage: 10.65 }, lastYear: { amount: 5.708, percentage: 23.78 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.0, percentage: 0.0 }, lastYear: { amount: 0.132, percentage: 13.33 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.100, percentage: 11.63 }, lastYear: { amount: 0.149, percentage: 17.33 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.002 }, storage: { current: { amount: 0.057, percentage: 19.13 }, lastYear: { amount: 0.051, percentage: 17.11 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.001, percentage: 0.06 }, lastYear: { amount: 0.070, percentage: 4.14 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.019, percentage: 1.33 }, lastYear: { amount: 0.191, percentage: 13.36 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.007 }, storage: { current: { amount: 0.049, percentage: 13.50 }, lastYear: { amount: 0.054, percentage: 14.88 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other (using previous values as not in current report)
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.481, percentage: 17.2 }, lastYear: { amount: 0.943, percentage: 33.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.088, percentage: 54.4 }, lastYear: { amount: 1.181, percentage: 59.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.876, percentage: 42.1 }, lastYear: { amount: 2.470, percentage: 55.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
];

// Yearly inflow data - updated with new 25/26 data from current report
export const yearlyInflowData: YearlyInflowData[] = [
  { year: "15/16", months: { October:1.024, November:0.608, December:1.248, January:3.685, February:2.824, March:6.132, April:1.314, May:0.961, June:0.105, July:0.0, "Aug-Sep":0.006 }, total:17.907 },
  { year: "16/17", months: { October:0.247, November:0.657, December:7.424, January:21.083, February:4.181, March:8.891, April:4.398, May:1.78, June:0.228, July:0.0, "Aug-Sep":0.0 }, total:48.889 },
  { year: "17/18", months: { October:0.142, November:0.614, December:0.881, January:20.661, February:9.528, March:5.944, April:2.176, May:2.802, June:2.022, July:0.05, "Aug-Sep":0.077 }, total:44.897 },
  { year: "18/19", months: { October:0.858, November:0.757, December:16.665, January:118.11, February:53.909, March:32.283, April:25.326, May:8.869, June:6.199, July:1.524, "Aug-Sep":0.542 }, total:265.042 },
  { year: "19/20", months: { October:2.430, November:1.545, December:30.495, January:47.740, February:15.916, March:15.670, April:11.062, May:7.317, June:2.747, July:0.866, "Aug-Sep":0.161 }, total:135.949 },
  { year: "20/21", months: { October:0.165, November:0.942, December:3.107, January:12.540, February:8.016, March:6.022, April:4.156, May:0.899, June:0.192, July:0.024, "Aug-Sep":0.035 }, total:36.098 },
  { year: "21/22", months: { October:0.084, November:0.397, December:11.923, January:74.614, February:33.963, March:19.801, April:8.139, May:3.440, June:1.264, July:0.093, "Aug-Sep":0.035 }, total:153.753 },
  { year: "22/23", months: { October:3.946, November:2.976, December:2.922, January:8.268, February:12.603, March:9.517, April:4.741, May:2.728, June:0.891, July:0.0, "Aug-Sep":0.186 }, total:48.778 },
  { year: "23/24", months: { October:0.583, November:1.581, December:2.340, January:7.300, February:6.676, March:2.920, April:1.801, May:0.910, June:0.297, July:0.098, "Aug-Sep":0.208 }, total:24.714 },
  { year: "24/25", months: { October:0.0, November:3.084, December:5.710, January:4.062, February:2.451, March:1.465, April:1.096, May:0.716, June:0.076, July:0.0, "Aug-Sep":0.004 }, total:18.664 },
  { year: "25/26", months: { October:0.095, November:0.0, December:0.0, January:0.0, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:0.095 }
];

export const getReportDate = (): string => "18-NOV-2025";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.0 };

export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (10 - 18 Νοεμβρίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου παρουσίασε ελαφρά μείωση περίπου στο 9,93% μεταξύ 10 και 18 Νοεμβρίου 2025. Οι εισροές παραμένουν εξαιρετικά χαμηλές, με μόνο 0,095 ΕΚΜ συνολική εισροή για την περίοδο 2025/26. Η κατανάλωση συνεχίζεται σταθερά με ελάχιστες βροχοπτώσεις.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ελαφρά μείωση, με τον Κούρη να πέφτει στα 10,196 ΕΚΜ (8,87%) και τις περισσότερες δεξαμενές να δείχνουν μικρή πτώση.
- **Πάφος:** Σταθερή περίπου, με τον Ασπρόκρεμμο να παραμένει χαμηλός στα 4,428 ΕΚΜ (8,45%).
- **Χρυσοχού:** Σταθερή περίπου, με τον Ευρέτου στα 2,556 ΕΚΜ (10,65%).
- **Λευκωσία:** Σταθερή σε πολύ χαμηλά επίπεδα (περίπου 1,5%).

**Εκτίμηση:**
Οι εισροές παραμένουν αμελητέες με τα αποθέματα να μειώνονται αργά λόγω της κατανάλωσης. Τα επίπεδα αποθήκευσης συνεχίζουν να είναι σημαντικά χαμηλότερα από τον περασμένο χρόνο σε όλες τις περιοχές. Περιμένουμε αυξημένες βροχοπτώσεις για να αναπληρώσουν τα επίπεδα των δεξαμενών.
`;
  }
  return `
### Recent Changes (November 10 - 18, 2025)

**General Overview:**
Total water storage in Cyprus reservoirs showed a slight decline to approximately 9.93% between November 10 and 18, 2025. Inflows remain extremely low, with only 0.095 MCM total inflow for the 2025/26 period. Consumption continues steadily with minimal rainfall.

**By Region:**
- **Southern Conveyor:** Slight decline, with Kouris falling to 10.196 MCM (8.87%) and most reservoirs showing small decreases.
- **Paphos:** Relatively stable, with Asprokremmos remaining low at 4.428 MCM (8.45%).
- **Chrysochou:** Relatively stable, with Evretou at 2.556 MCM (10.65%).
- **Nicosia:** Stable at very low levels (approximately 1.5%).

**Assessment:**
Inflows remain negligible with storage declining slowly due to consumption. Storage levels continue to be significantly lower than last year across all regions. We await increased rainfall to replenish reservoir levels.
`;
};