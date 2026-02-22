import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for January 26, 2026 (parsed from 26-JAN-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.524, totalSince: 1.939 }, storage: { current: { amount: 11.577, percentage: 10.1 }, lastYear: { amount: 25.16, percentage: 21.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.027, totalSince: 0.203 }, storage: { current: { amount: 1.438, percentage: 8.4 }, lastYear: { amount: 4.577, percentage: 26.8 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.026, totalSince: 0.172 }, storage: { current: { amount: 1.805, percentage: 13.0 }, lastYear: { amount: 5.177, percentage: 37.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.191, totalSince: 0.447 }, storage: { current: { amount: 3.036, percentage: 19.6 }, lastYear: { amount: 4.994, percentage: 32.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.057, totalSince: 0.141 }, storage: { current: { amount: 0.15, percentage: 1.1 }, lastYear: { amount: 3.787, percentage: 28.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.313, totalSince: 1.591 }, storage: { current: { amount: 1.301, percentage: 30.3 }, lastYear: { amount: 1.973, percentage: 45.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.032, totalSince: 0.355 }, storage: { current: { amount: 1.087, percentage: 32.0 }, lastYear: { amount: 1.34, percentage: 39.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.12, percentage: 1.8 }, lastYear: { amount: 1.877, percentage: 27.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.522, totalSince: 2.324 }, storage: { current: { amount: 5.55, percentage: 10.6 }, lastYear: { amount: 14.905, percentage: 28.5 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.169, totalSince: 0.931 }, storage: { current: { amount: 2.179, percentage: 12.7 }, lastYear: { amount: 5.03, percentage: 29.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.072, totalSince: 0.409 }, storage: { current: { amount: 0.929, percentage: 42.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.251, totalSince: 1.249 }, storage: { current: { amount: 3.492, percentage: 14.6 }, lastYear: { amount: 5.932, percentage: 24.7 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.062, totalSince: 0.216 }, storage: { current: { amount: 0.216, percentage: 21.8 }, lastYear: { amount: 0.287, percentage: 29.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.097, totalSince: 0.533 }, storage: { current: { amount: 0.615, percentage: 71.5 }, lastYear: { amount: 0.262, percentage: 30.5 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.01, totalSince: 0.088 }, storage: { current: { amount: 0.143, percentage: 48.0 }, lastYear: { amount: 0.122, percentage: 40.9 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.063, totalSince: 0.086 }, storage: { current: { amount: 0.087, percentage: 5.1 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.13, totalSince: 0.273 }, storage: { current: { amount: 0.29, percentage: 20.3 }, lastYear: { amount: 0.294, percentage: 20.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.246, percentage: 67.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.196, totalSince: 0.313 }, storage: { current: { amount: 0.731, percentage: 26.1 }, lastYear: { amount: 1.0, percentage: 35.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.25, totalSince: 0.47 }, storage: { current: { amount: 1.489, percentage: 74.5 }, lastYear: { amount: 1.405, percentage: 70.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.124, totalSince: 1.019 }, storage: { current: { amount: 2.838, percentage: 63.7 }, lastYear: { amount: 2.752, percentage: 61.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:9.07, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:11.268 }
];

export const getReportDate = (): string => "26-JAN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 1.68 };

export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (19 Ιανουαρίου - 26 Ιανουαρίου 2026)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου αυξήθηκε στο 11.8% (34.4 ΕΚΜ) από 10.8% μεταξύ 19 και 26 Ιανουαρίου 2026. Οι εισροές συνεχίστηκαν ισχυρές με συνολική εισροή 11.268 ΕΚΜ για την περίοδο 2025/26. Οι εισροές Ιανουαρίου έφτασαν τα 9.07 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ο Κούρης αυξήθηκε στα 11.58 ΕΚΜ (10.1% από 9.5%). Ο Αρμίνου αυξήθηκε στο 30.3% (από 23.0%). Ο Διπόταμος αυξήθηκε στο 19.6% (από 17.6%). Μεταφέρθηκαν 1.68 ΕΚΜ νερού από Αρμίνου σε Κούρη.
- **Πάφος:** Ο Ασπρόκρεμμος αυξήθηκε στο 10.6% (από 9.6%). Ο Κανναβιού αυξήθηκε στο 12.7% (από 11.8%). Ο Μαυροκόλυμπος αυξήθηκε στο 42.6% (από 37.5%).
- **Χρυσοχού:** Ο Εβρέτου αυξήθηκε στο 14.6% (από 13.1%). Ο Πόμος αυξήθηκε στο 71.5% (από 57.2%). Η Αργάκα αυξήθηκε στο 21.8% (από 14.7%).
- **Λευκωσία:** Ο Καλοπαναγιώτης παραμένει στο 100%. Ο Ξυλιάτος αυξήθηκε στο 20.3% (από 8.5%). Η Βυζακιά αυξήθηκε στο 5.1% (από 1.0%).
- **Επαναπλήρωση:** Ο Κλήρου-Μαλούντα αυξήθηκε στο 74.5% (από 60.2%). Η Σολέα αυξήθηκε στο 63.7% (από 58.2%). Ο Ταμασσός αυξήθηκε στο 26.1% (από 17.8%).

**Εκτίμηση:**
Σημαντική αύξηση λόγω συνεχιζόμενων χειμερινών βροχοπτώσεων. Τα επίπεδα αποθήκευσης παραμένουν χαμηλότερα από πέρυσι (11.8% έναντι 26.1%).
`;
  }
  return `
### Recent Changes (January 19 - January 26, 2026)

**General Overview:**
Total water storage in Cyprus reservoirs increased to 11.8% (34.4 MCM) from 10.8% between January 19 and 26, 2026. Inflows continued strongly with total inflow of 11.268 MCM for the 2025/26 period. January inflows reached 9.07 MCM.

**By Region:**
- **Southern Conveyor:** Kouris increased to 11.58 MCM (10.1% from 9.5%). Arminou increased to 30.3% (from 23.0%). Dipotamos increased to 19.6% (from 17.6%). 1.68 MCM of water was transferred from Arminou to Kouris.
- **Paphos:** Asprokremmos increased to 10.6% (from 9.6%). Kannaviou increased to 12.7% (from 11.8%). Mavrokolympos increased to 42.6% (from 37.5%).
- **Chrysochou:** Evretou increased to 14.6% (from 13.1%). Pomos increased to 71.5% (from 57.2%). Argaka increased to 21.8% (from 14.7%).
- **Nicosia:** Kalopanagiotis remains at 100% capacity. Xyliatos increased to 20.3% (from 8.5%). Vyzakia increased to 5.1% (from 1.0%).
- **Recharge:** Klirou-Malounta increased to 74.5% (from 60.2%). Solea increased to 63.7% (from 58.2%). Tamassos increased to 26.1% (from 17.8%).

**Assessment:**
Significant increases due to continued winter rainfall. Storage levels remain lower than last year (11.8% vs 26.1%).
`;
};
