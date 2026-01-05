import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for January 5, 2026 (parsed from 05-JAN-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.048, totalSince: 0.368 }, storage: { current: { amount: 9.71, percentage: 8.4 }, lastYear: { amount: 25.538, percentage: 22.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.002, totalSince: 0.059 }, storage: { current: { amount: 1.536, percentage: 9.0 }, lastYear: { amount: 4.361, percentage: 25.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.0, totalSince: 0.052 }, storage: { current: { amount: 1.985, percentage: 14.3 }, lastYear: { amount: 5.572, percentage: 40.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.002, totalSince: 0.15 }, storage: { current: { amount: 2.74, percentage: 17.7 }, lastYear: { amount: 4.667, percentage: 30.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.003, totalSince: 0.055 }, storage: { current: { amount: 0.168, percentage: 1.2 }, lastYear: { amount: 3.638, percentage: 26.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.032, totalSince: 0.405 }, storage: { current: { amount: 0.829, percentage: 19.3 }, lastYear: { amount: 1.689, percentage: 39.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.003, totalSince: 0.118 }, storage: { current: { amount: 0.858, percentage: 25.2 }, lastYear: { amount: 1.345, percentage: 39.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.12, percentage: 1.8 }, lastYear: { amount: 1.511, percentage: 22.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.065, totalSince: 0.451 }, storage: { current: { amount: 3.953, percentage: 7.5 }, lastYear: { amount: 15.313, percentage: 29.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.034, totalSince: 0.137 }, storage: { current: { amount: 1.576, percentage: 9.2 }, lastYear: { amount: 5.198, percentage: 30.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.006, totalSince: 0.257 }, storage: { current: { amount: 0.678, percentage: 31.1 }, lastYear: { amount: 1.214, percentage: 55.7 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.057, totalSince: 0.265 }, storage: { current: { amount: 2.556, percentage: 10.7 }, lastYear: { amount: 5.764, percentage: 24.0 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.009, totalSince: 0.043 }, storage: { current: { amount: 0.043, percentage: 4.3 }, lastYear: { amount: 0.234, percentage: 23.6 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.038, totalSince: 0.139 }, storage: { current: { amount: 0.221, percentage: 25.7 }, lastYear: { amount: 0.218, percentage: 25.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.005, totalSince: 0.045 }, storage: { current: { amount: 0.1, percentage: 33.6 }, lastYear: { amount: 0.105, percentage: 35.2 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 0.003 }, storage: { current: { amount: 0.004, percentage: 0.2 }, lastYear: { amount: 0.051, percentage: 3.0 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.004, totalSince: 0.053 }, storage: { current: { amount: 0.07, percentage: 4.9 }, lastYear: { amount: 0.276, percentage: 19.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.009, totalSince: 0.209 }, storage: { current: { amount: 0.261, percentage: 71.9 }, lastYear: { amount: 0.201, percentage: 55.2 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.436, percentage: 15.6 }, lastYear: { amount: 0.995, percentage: 35.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.038, percentage: 51.9 }, lastYear: { amount: 1.364, percentage: 68.2 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.033, totalSince: 0.407 }, storage: { current: { amount: 2.227, percentage: 50.0 }, lastYear: { amount: 2.627, percentage: 59.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
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
  { year: "25/26", months: { October:0.095, November:0.200, December:1.903, January:0.611, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:2.809 }
];

export const getReportDate = (): string => "05-JAN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 1.02 };

export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (29 Δεκεμβρίου 2025 - 5 Ιανουαρίου 2026)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου μειώθηκε ελαφρώς στο 9.4% (27.41 ΕΚΜ) από 9.2% μεταξύ 29 Δεκεμβρίου και 5 Ιανουαρίου 2026. Οι εισροές συνεχίστηκαν με συνολική εισροή 2.809 ΕΚΜ για την περίοδο 2025/26. Οι εισροές Ιανουαρίου ξεκίνησαν με 0.611 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ο Κούρης αυξήθηκε στα 9.71 ΕΚΜ (8.4% από 8.0%). Ο Αρμίνου μειώθηκε στο 19.3% (από 30.2%). Μεταφέρθηκαν 1.02 ΕΚΜ νερού από Αρμίνου σε Κούρη.
- **Πάφος:** Ο Μαυροκόλυμπος αυξήθηκε στο 31.1% (από 28.0%). Ο Ασπρόκρεμμος αυξήθηκε στο 7.5% (από 7.3%).
- **Χρυσοχού:** Η Αγία Μαρίνα αυξήθηκε στο 33.6% (από 29.2%), ο Πόμος αυξήθηκε στο 25.7% (από 11.6%).
- **Λευκωσία:** Ο Καλοπαναγιώτης αυξήθηκε στο 71.9% (από 60.9%), ο Ξυλιάτος στο 4.9% (από 4.3%).

**Εκτίμηση:**
Οι χειμερινές βροχοπτώσεις ενισχύουν τις εισροές. Τα επίπεδα αποθήκευσης παραμένουν χαμηλότερα από πέρυσι (9.4% έναντι 26.4%).
`;
  }
  return `
### Recent Changes (December 29, 2025 - January 5, 2026)

**General Overview:**
Total water storage in Cyprus reservoirs slightly increased to 9.4% (27.41 MCM) from 9.2% between December 29 and January 5, 2026. Inflows continued with total inflow of 2.809 MCM for the 2025/26 period. January inflows started with 0.611 MCM.

**By Region:**
- **Southern Conveyor:** Kouris increased to 9.71 MCM (8.4% from 8.0%). Arminou decreased to 19.3% (from 30.2%). 1.02 MCM of water was transferred from Arminou to Kouris.
- **Paphos:** Mavrokolympos increased to 31.1% (from 28.0%). Asprokremmos increased to 7.5% (from 7.3%).
- **Chrysochou:** Agia Marina increased to 33.6% (from 29.2%), Pomos increased to 25.7% (from 11.6%).
- **Nicosia:** Kalopanagiotis increased to 71.9% (from 60.9%), Xyliatos to 4.9% (from 4.3%).

**Assessment:**
Winter rainfall continues to boost inflows. Storage levels remain lower than last year (9.4% vs 26.4%).
`;
};
