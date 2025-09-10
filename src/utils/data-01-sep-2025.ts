import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for September 1, 2025 (parsed from 01-SEP-2025UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.0, totalSince: 5.817 }, storage: { current: { amount: 14.884, percentage: 12.9 }, lastYear: { amount: 33.523, percentage: 29.2 } }, maxStorage: { amount: 48.004, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.0, totalSince: 1.319 }, storage: { current: { amount: 2.591, percentage: 15.2 }, lastYear: { amount: 4.075, percentage: 23.8 } }, maxStorage: { amount: 5.184, date: "22/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.0, totalSince: 0.222 }, storage: { current: { amount: 2.125, percentage: 15.3 }, lastYear: { amount: 8.145, percentage: 58.8 } }, maxStorage: { amount: 8.73, date: "20/3" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.0, totalSince: 0.546 }, storage: { current: { amount: 4.131, percentage: 26.7 }, lastYear: { amount: 3.469, percentage: 22.4 } }, maxStorage: { amount: 6.794, date: "23/2" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.0, totalSince: 2.58 }, storage: { current: { amount: 1.36, percentage: 10.1 }, lastYear: { amount: 3.914, percentage: 29.0 } }, maxStorage: { amount: 6.856, date: "19/2" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.0, totalSince: 2.844 }, storage: { current: { amount: 2.058, percentage: 47.9 }, lastYear: { amount: 1.265, percentage: 29.4 } }, maxStorage: { amount: 3.52, date: "19/1" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.876 }, storage: { current: { amount: 0.898, percentage: 26.4 }, lastYear: { amount: 0.833, percentage: 24.5 } }, maxStorage: { amount: 1.403, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.291, percentage: 4.3 }, lastYear: { amount: 0.881, percentage: 13.0 } }, maxStorage: { amount: 3.831, date: "22/3" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.0, totalSince: 1.224 }, storage: { current: { amount: 6.96, percentage: 13.3 }, lastYear: { amount: 19.739, percentage: 37.7 } }, maxStorage: { amount: 29.838, date: "20/2" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.0, totalSince: 0.922 }, storage: { current: { amount: 2.7, percentage: 15.7 }, lastYear: { amount: 6.88, percentage: 40.1 } }, maxStorage: { amount: 9.647, date: "22/2" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.199 }, storage: { current: { amount: 0.0, percentage: 0.0 }, lastYear: { amount: 0.341, percentage: 15.6 } }, maxStorage: { amount: 1.223, date: "26/2" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.0, totalSince: 1.026 }, storage: { current: { amount: 3.69, percentage: 15.4 }, lastYear: { amount: 8.284, percentage: 34.5 } }, maxStorage: { amount: 13.162, date: "8/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 0.263 }, storage: { current: { amount: 0.01, percentage: 1.0 }, lastYear: { amount: 0.141, percentage: 14.2 } }, maxStorage: { amount: 0.303, date: "28/3" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.239 }, storage: { current: { amount: 0.131, percentage: 15.2 }, lastYear: { amount: 0.288, percentage: 33.5 } }, maxStorage: { amount: 0.729, date: "28/3" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.13 }, storage: { current: { amount: 0.057, percentage: 19.1 }, lastYear: { amount: 0.049, percentage: 16.4 } }, maxStorage: { amount: 0.218, date: "2/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 0.002 }, storage: { current: { amount: 0.011, percentage: 0.7 }, lastYear: { amount: 0.219, percentage: 13.0 } }, maxStorage: { amount: 0.707, date: "9/2" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 0.157 }, storage: { current: { amount: 0.083, percentage: 5.8 }, lastYear: { amount: 0.399, percentage: 27.9 } }, maxStorage: { amount: 0.9, date: "29/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.294 }, storage: { current: { amount: 0.072, percentage: 19.8 }, lastYear: { amount: 0.018, percentage: 5.0 } }, maxStorage: { amount: 0.363, date: "1/1-19/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 0.194 }, storage: { current: { amount: 0.618, percentage: 22.1 }, lastYear: { amount: 1.174, percentage: 41.9 } }, maxStorage: { amount: 1.645, date: "29/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 0.283 }, storage: { current: { amount: 1.195, percentage: 59.8 }, lastYear: { amount: 1.321, percentage: 66.1 } }, maxStorage: { amount: 2.0, date: "16/2-8/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 0.61 }, storage: { current: { amount: 2.162, percentage: 48.5 }, lastYear: { amount: 2.894, percentage: 65.0 } }, maxStorage: { amount: 3.944, date: "14/3" }, region: "Recharge/Other" }
];

// Yearly inflow data - keeping the same as previous datasets since this typically doesn't change frequently
export const yearlyInflowData: YearlyInflowData[] = [
  { year: "14/15", months: { October:0.32, November:0.92, December:2.14, January:38.35, February:44.52, March:17.67, April:8.23, May:3.14, June:0.98, July:0.09, "Aug-Sep":0.01 }, total:116.35 },
  { year: "15/16", months: { October:1.02, November:0.61, December:1.25, January:3.69, February:2.82, March:6.13, April:1.31, May:0.96, June:0.11, July:0.0, "Aug-Sep":0.01 }, total:17.907 },
  { year: "16/17", months: { October:0.247, November:0.657, December:7.424, January:21.083, February:4.181, March:8.891, April:4.398, May:1.78, June:0.228, July:0.0, "Aug-Sep":0.0 }, total:48.889 },
  { year: "17/18", months: { October:0.142, November:0.614, December:0.881, January:20.661, February:9.528, March:5.944, April:2.176, May:2.802, June:2.022, July:0.05, "Aug-Sep":0.077 }, total:44.897 },
  { year: "18/19", months: { October:0.858, November:0.757, December:16.665, January:118.11, February:53.909, March:32.283, April:25.326, May:8.869, June:6.199, July:1.524, "Aug-Sep":0.542 }, total:265.042 },
  { year: "19/20", months: { October:2.43, November:1.545, December:30.495, January:47.74, February:15.916, March:15.67, April:11.062, May:7.317, June:2.747, July:0.866, "Aug-Sep":0.161 }, total:135.949 },
  { year: "20/21", months: { October:0.165, November:0.942, December:3.107, January:12.54, February:8.016, March:6.022, April:4.156, May:0.899, June:0.192, July:0.024, "Aug-Sep":0.035 }, total:36.098 },
  { year: "21/22", months: { October:0.084, November:0.397, December:11.923, January:74.614, February:33.963, March:19.801, April:8.139, May:3.44, June:1.264, July:0.093, "Aug-Sep":0.035 }, total:153.753 },
  { year: "22/23", months: { October:3.946, November:2.976, December:2.922, January:8.268, February:12.603, March:9.517, April:4.741, May:2.728, June:0.891, July:0.0, "Aug-Sep":0.186 }, total:48.778 },
  { year: "23/24", months: { October:0.583, November:1.581, December:2.34, January:7.3, February:6.676, March:2.92, April:1.801, May:0.91, June:0.297, July:0.098, "Aug-Sep":0.208 }, total:24.714 },
  { year: "24/25", months: { October:0.0, November:3.084, December:5.71, January:4.062, February:2.451, March:1.465, April:1.096, May:0.716, June:0.076, July:0.0, "Aug-Sep":0.0 }, total:18.66 }
];

export const getReportDate = (): string => "1-SEP-2025";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.290 };

export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (25 Αυγούστου - 1 Σεπτεμβρίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου μειώθηκε από 15,0% σε 14,5% μεταξύ 25 Αυγούστου και 1 Σεπτεμβρίου 2025. Αυτή η μικρή μείωση κατά 0,5 ποσοστιαίες μονάδες συνεχίζει την τάση της καλοκαιρινής κατανάλωσης. Η συνολική εισροή για την περίοδο 2024/25 παρέμεινε σχεδόν σταθερή στα 18,66 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Μείωση από 15,4% σε 15,0%, με τον Κούρη να μειώνεται από 15,365 σε 14,884 ΕΚΜ (από 13,4% σε 12,9%).
- **Πάφος:** Μείωση από 14,1% σε 13,5%, με τον Ασπρόκρεμμο να πέφτει από 7,299 σε 6,96 ΕΚΜ.
- **Χρυσοχού:** Μείωση από 15,5% σε 14,6%.
- **Λευκωσία:** Μείωση από 5,6% σε 4,8%.

**Εκτίμηση:**
Οι εισροές παραμένουν μηδενικές όπως αναμένεται για την εποχή. Η μεταφορά 0,29 ΕΚΜ από τον Αρμίνου στον Κούρη συνεχίζεται.
`;
  }
  return `
### Recent Changes (August 25 - September 1, 2025)

**General Overview:**
The total water storage in Cyprus reservoirs decreased from 15.0% to 14.5% between August 25 and September 1, 2025. This small decline of 0.5 percentage points continues the summer consumption trend. The total inflow for the 2024/25 period remained nearly stable at 18.66 MCM.

**By Region:**
- **Southern Conveyor:** Down from 15.4% to 15.0%, with Kouris decreasing from 15.365 to 14.884 MCM (from 13.4% to 12.9%).
- **Paphos:** Down from 14.1% to 13.5%, with Asprokremmos dropping from 7.299 to 6.96 MCM.
- **Chrysochou:** Down from 15.5% to 14.6%.
- **Nicosia:** Down from 5.6% to 4.8%.

**Assessment:**
Inflows remain at zero as expected for the season. Water transfer of 0.29 MCM from Arminou to Kouris continues.
`;
};