import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for December 15, 2025 (parsed from 15-DEC-2025 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.014, totalSince: 0.138 }, storage: { current: { amount: 9.006, percentage: 7.8 }, lastYear: { amount: 25.382, percentage: 22.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.003, totalSince: 0.033 }, storage: { current: { amount: 1.66, percentage: 9.7 }, lastYear: { amount: 4.035, percentage: 23.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 0.038 }, storage: { current: { amount: 1.981, percentage: 14.3 }, lastYear: { amount: 5.957, percentage: 43.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.006, totalSince: 0.065 }, storage: { current: { amount: 2.784, percentage: 18.0 }, lastYear: { amount: 4.304, percentage: 27.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.001, totalSince: 0.033 }, storage: { current: { amount: 0.326, percentage: 2.4 }, lastYear: { amount: 3.047, percentage: 22.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.031, totalSince: 0.194 }, storage: { current: { amount: 1.762, percentage: 41.0 }, lastYear: { amount: 1.195, percentage: 27.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.085 }, storage: { current: { amount: 0.855, percentage: 25.1 }, lastYear: { amount: 1.118, percentage: 32.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.106, percentage: 1.6 }, lastYear: { amount: 1.092, percentage: 16.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.013, totalSince: 0.148 }, storage: { current: { amount: 4.009, percentage: 7.7 }, lastYear: { amount: 15.254, percentage: 29.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.001, totalSince: 0.049 }, storage: { current: { amount: 1.611, percentage: 9.4 }, lastYear: { amount: 5.206, percentage: 30.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.006, totalSince: 0.189 }, storage: { current: { amount: 0.483, percentage: 22.2 }, lastYear: { amount: 0.834, percentage: 38.3 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.007, totalSince: 0.06 }, storage: { current: { amount: 2.467, percentage: 10.3 }, lastYear: { amount: 5.597, percentage: 23.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.001, totalSince: 0.002 }, storage: { current: { amount: 0.002, percentage: 0.2 }, lastYear: { amount: 0.132, percentage: 13.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.007 }, storage: { current: { amount: 0.093, percentage: 10.8 }, lastYear: { amount: 0.149, percentage: 17.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.007, totalSince: 0.022 }, storage: { current: { amount: 0.077, percentage: 25.8 }, lastYear: { amount: 0.069, percentage: 23.2 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.001, totalSince: 0.002 }, storage: { current: { amount: 0.003, percentage: 0.2 }, lastYear: { amount: 0.054, percentage: 3.2 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.006, totalSince: 0.035 }, storage: { current: { amount: 0.052, percentage: 3.6 }, lastYear: { amount: 0.188, percentage: 13.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.016, totalSince: 0.126 }, storage: { current: { amount: 0.178, percentage: 49.0 }, lastYear: { amount: 0.101, percentage: 27.8 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.446, percentage: 15.9 }, lastYear: { amount: 0.918, percentage: 32.8 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.046, percentage: 52.3 }, lastYear: { amount: 1.179, percentage: 59.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.016, totalSince: 0.146 }, storage: { current: { amount: 1.966, percentage: 44.1 }, lastYear: { amount: 2.386, percentage: 53.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
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
  { year: "25/26", months: { October:0.095, November:0.200, December:0.931, January:0.0, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:1.226 }
];

export const getReportDate = (): string => "15-DEC-2025";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.0 };

export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (11 - 15 Δεκεμβρίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου παρέμεινε στο 9,4% (27,46 ΕΚΜ) μεταξύ 11 και 15 Δεκεμβρίου 2025. Οι εισροές συνεχίστηκαν με συνολική εισροή 1,226 ΕΚΜ για την περίοδο 2025/26. Οι εισροές Δεκεμβρίου έφτασαν τα 0,931 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ο Αρμίνου αυξήθηκε στο 41,0% (από 40,3%). Ο Κούρης μειώθηκε ελαφρά στα 9,006 ΕΚΜ (7,8%). Η Γερμασόγεια μειώθηκε στο 2,4%.
- **Πάφος:** Ο Μαυροκόλυμπος αυξήθηκε στο 22,2% (από 19,6%). Ο Ασπρόκρεμμος και Κανναβιού παρέμειναν σταθεροί.
- **Χρυσοχού:** Η Αγία Μαρίνα αυξήθηκε στο 25,8% (από 23,2%), και πάλι πάνω από το περσινό επίπεδο. Η Αργάκα έλαβε μικρές εισροές.
- **Λευκωσία:** Ο Καλοπαναγιώτης αυξήθηκε στο 49,0% (από 43,4%), ο Ξυλιάτος στο 3,6% (από 2,7%).

**Εκτίμηση:**
Οι χειμερινές βροχοπτώσεις συνεχίζουν να ενισχύουν τις εισροές. Τα επίπεδα αποθήκευσης παραμένουν χαμηλότερα από πέρυσι (9,4% έναντι 25,3%), αλλά οι μικρότεροι ταμιευτήρες δείχνουν σημάδια ανάκαμψης.
`;
  }
  return `
### Recent Changes (December 11 - 15, 2025)

**General Overview:**
Total water storage in Cyprus reservoirs remained at 9.4% (27.46 MCM) between December 11 and 15, 2025. Inflows continued with total inflow of 1.226 MCM for the 2025/26 period. December inflows reached 0.931 MCM.

**By Region:**
- **Southern Conveyor:** Arminou increased to 41.0% (from 40.3%). Kouris slightly decreased to 9.006 MCM (7.8%). Germasoyeia decreased to 2.4%.
- **Paphos:** Mavrokolympos increased to 22.2% (from 19.6%). Asprokremmos and Kannaviou remained stable.
- **Chrysochou:** Agia Marina increased to 25.8% (from 23.2%), again above last year's level. Argaka received minor inflows.
- **Nicosia:** Kalopanagiotis increased to 49.0% (from 43.4%), Xyliatos to 3.6% (from 2.7%).

**Assessment:**
Winter rainfall continues to boost inflows. Storage levels remain lower than last year (9.4% vs 25.3%), but smaller reservoirs show signs of recovery.
`;
};
