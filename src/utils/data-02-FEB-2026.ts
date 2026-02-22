import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for February 2, 2026 (parsed from 02-FEB-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.077, totalSince: 2.691 }, storage: { current: { amount: 13.079, percentage: 11.4 }, lastYear: { amount: 25.048, percentage: 21.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.005, totalSince: 0.252 }, storage: { current: { amount: 1.428, percentage: 8.4 }, lastYear: { amount: 4.6, percentage: 26.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.008, totalSince: 0.214 }, storage: { current: { amount: 1.71, percentage: 12.3 }, lastYear: { amount: 5.057, percentage: 36.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.009, totalSince: 0.557 }, storage: { current: { amount: 3.21, percentage: 20.7 }, lastYear: { amount: 5.091, percentage: 32.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.019, totalSince: 0.332 }, storage: { current: { amount: 0.319, percentage: 2.4 }, lastYear: { amount: 3.788, percentage: 28.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.071, totalSince: 2.171 }, storage: { current: { amount: 0.963, percentage: 22.4 }, lastYear: { amount: 2.054, percentage: 47.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.005, totalSince: 0.425 }, storage: { current: { amount: 1.157, percentage: 34.0 }, lastYear: { amount: 1.332, percentage: 39.2 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.12, percentage: 1.8 }, lastYear: { amount: 1.936, percentage: 28.5 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.057, totalSince: 2.928 }, storage: { current: { amount: 6.144, percentage: 11.7 }, lastYear: { amount: 14.75, percentage: 28.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.058, totalSince: 1.547 }, storage: { current: { amount: 2.661, percentage: 15.5 }, lastYear: { amount: 4.968, percentage: 28.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.007, totalSince: 0.468 }, storage: { current: { amount: 1.018, percentage: 46.7 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.062, totalSince: 1.77 }, storage: { current: { amount: 4.005, percentage: 16.7 }, lastYear: { amount: 5.97, percentage: 24.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.008, totalSince: 0.298 }, storage: { current: { amount: 0.298, percentage: 30.1 }, lastYear: { amount: 0.297, percentage: 30.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.015, totalSince: 0.664 }, storage: { current: { amount: 0.746, percentage: 86.7 }, lastYear: { amount: 0.269, percentage: 31.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.003, totalSince: 0.103 }, storage: { current: { amount: 0.158, percentage: 53.0 }, lastYear: { amount: 0.13, percentage: 43.6 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.007, totalSince: 0.169 }, storage: { current: { amount: 0.17, percentage: 10.1 }, lastYear: { amount: 0.047, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.01, totalSince: 0.389 }, storage: { current: { amount: 0.406, percentage: 28.4 }, lastYear: { amount: 0.296, percentage: 20.7 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.25, percentage: 68.9 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.009, totalSince: 0.865 }, storage: { current: { amount: 0.86, percentage: 30.7 }, lastYear: { amount: 0.995, percentage: 35.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.022, totalSince: 1.463 }, storage: { current: { amount: 1.789, percentage: 89.5 }, lastYear: { amount: 1.408, percentage: 70.4 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.039, totalSince: 2.146 }, storage: { current: { amount: 3.124, percentage: 70.1 }, lastYear: { amount: 2.775, percentage: 62.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
];

// Yearly inflow data - updated with new 25/26 data from current report
export const yearlyInflowData: YearlyInflowData[] = [
  { year: "15/16", months: { October:1.024, November:0.608, December:1.248, January:3.685, February:2.824, March:6.132, April:1.314, May:0.961, June:0.105, July:0.0, "Aug-Sep":0.006 }, total:17.907 },
  { year: "16/17", months: { October:0.247, November:0.657, December:7.424, January:21.083, February:4.181, March:8.891, April:4.398, May:1.78, June:0.228, July:0.0, "Aug-Sep":0.0 }, total:48.889 },
  { year: "17/18", months: { October:0.142, November:0.614, December:0.881, January:20.661, February:9.528, March:5.944, April:2.176, May:2.802, June:2.022, July:0.05, "Aug-Sep":0.077 }, total:44.897 },
  { year: "18/19", months: { October:0.858, November:0.757, December:16.665, January:118.11, February:53.909, March:32.283, April:25.326, May:8.869, June:6.199, July:1.524, "Aug-Sep":0.542 }, total:265.042 },
  { year: "19/20", months: { October:2.43, November:1.545, December:30.495, January:47.74, February:15.916, March:15.67, April:11.062, May:7.317, June:2.747, July:0.866, "Aug-Sep":0.161 }, total:135.949 },
  { year: "20/21", months: { October:0.165, November:0.942, December:3.107, January:12.54, February:8.016, March:6.022, April:4.156, May:0.899, June:0.192, July:0.024, "Aug-Sep":0.035 }, total:36.098 },
  { year: "21/22", months: { October:0.084, November:0.397, December:11.923, January:74.614, February:33.963, March:19.801, April:8.139, May:3.44, June:1.264, July:0.093, "Aug-Sep":0.035 }, total:153.753 },
  { year: "22/23", months: { October:3.946, November:2.976, December:2.922, January:8.268, February:12.603, March:9.517, April:4.741, May:2.728, June:0.891, July:0.0, "Aug-Sep":0.186 }, total:48.778 },
  { year: "23/24", months: { October:0.583, November:1.581, December:2.34, January:7.3, February:6.676, March:2.92, April:1.801, May:0.91, June:0.297, July:0.098, "Aug-Sep":0.208 }, total:24.714 },
  { year: "24/25", months: { October:0.0, November:3.084, December:5.71, January:4.062, February:2.451, March:1.465, April:1.096, May:0.716, June:0.076, July:0.0, "Aug-Sep":0.004 }, total:18.664 },
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:0.421, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:15.289 }
];

export const getReportDate = (): string => "02-FEB-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 2.55 };

export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (26 Ιανουαρίου - 2 Φεβρουαρίου 2026)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου αυξήθηκε στο 13.1% (38.0 ΕΚΜ) από 11.8% μεταξύ 26 Ιανουαρίου και 2 Φεβρουαρίου 2026. Οι εισροές συνεχίστηκαν με συνολική εισροή 15.289 ΕΚΜ για την περίοδο 2025/26. Οι εισροές Φεβρουαρίου ξεκίνησαν με 0.421 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ο Κούρης αυξήθηκε στα 13.08 ΕΚΜ (11.4% από 10.1%). Ο Αρμίνου μειώθηκε στο 22.4% (από 30.3%). Ο Διπόταμος αυξήθηκε στο 20.7% (από 19.6%). Μεταφέρθηκαν 2.55 ΕΚΜ νερού από Αρμίνου σε Κούρη.
- **Πάφος:** Ο Ασπρόκρεμμος αυξήθηκε στο 11.7% (από 10.6%). Ο Κανναβιού αυξήθηκε στο 15.5% (από 12.7%). Ο Μαυροκόλυμπος αυξήθηκε στο 46.7% (από 42.6%).
- **Χρυσοχού:** Ο Εβρέτου αυξήθηκε στο 16.7% (από 14.6%). Ο Πόμος αυξήθηκε στο 86.7% (από 71.5%). Η Αργάκα αυξήθηκε στο 30.1% (από 21.8%).
- **Λευκωσία:** Ο Καλοπαναγιώτης παραμένει στο 100%. Ο Ξυλιάτος αυξήθηκε στο 28.4% (από 20.3%). Η Βυζακιά αυξήθηκε στο 10.1% (από 5.1%).
- **Επαναπλήρωση:** Ο Κλήρου-Μαλούντα αυξήθηκε στο 89.5% (από 74.5%). Η Σολέα αυξήθηκε στο 70.1% (από 63.7%). Ο Ταμασσός αυξήθηκε στο 30.7% (από 26.1%).

**Εκτίμηση:**
Σημαντική αύξηση λόγω συνεχιζόμενων χειμερινών βροχοπτώσεων. Τα επίπεδα αποθήκευσης παραμένουν χαμηλότερα από πέρυσι (13.1% έναντι 26.1%).
`;
  }
  return `
### Recent Changes (January 26 - February 2, 2026)

**General Overview:**
Total water storage in Cyprus reservoirs increased to 13.1% (38.0 MCM) from 11.8% between January 26 and February 2, 2026. Inflows continued with total inflow of 15.289 MCM for the 2025/26 period. February inflows started with 0.421 MCM.

**By Region:**
- **Southern Conveyor:** Kouris increased to 13.08 MCM (11.4% from 10.1%). Arminou decreased to 22.4% (from 30.3%). Dipotamos increased to 20.7% (from 19.6%). 2.55 MCM of water was transferred from Arminou to Kouris.
- **Paphos:** Asprokremmos increased to 11.7% (from 10.6%). Kannaviou increased to 15.5% (from 12.7%). Mavrokolympos increased to 46.7% (from 42.6%).
- **Chrysochou:** Evretou increased to 16.7% (from 14.6%). Pomos increased to 86.7% (from 71.5%). Argaka increased to 30.1% (from 21.8%).
- **Nicosia:** Kalopanagiotis remains at 100% capacity. Xyliatos increased to 28.4% (from 20.3%). Vyzakia increased to 10.1% (from 5.1%).
- **Recharge:** Klirou-Malounta increased to 89.5% (from 74.5%). Solea increased to 70.1% (from 63.7%). Tamassos increased to 30.7% (from 26.1%).

**Assessment:**
Significant increases due to continued winter rainfall. Storage levels remain lower than last year (13.1% vs 26.1%).
`;
};
