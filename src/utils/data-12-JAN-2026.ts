import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for January 12, 2026 (parsed from 12-JAN-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.378, totalSince: 1.572 }, storage: { current: { amount: 10.912, percentage: 9.5 }, lastYear: { amount: 25.456, percentage: 22.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.006, totalSince: 0.08 }, storage: { current: { amount: 1.512, percentage: 8.8 }, lastYear: { amount: 4.465, percentage: 26.1 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 0.057 }, storage: { current: { amount: 1.989, percentage: 14.4 }, lastYear: { amount: 5.436, percentage: 39.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.005, totalSince: 0.168 }, storage: { current: { amount: 2.69, percentage: 17.4 }, lastYear: { amount: 4.781, percentage: 30.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.002, totalSince: 0.066 }, storage: { current: { amount: 0.154, percentage: 1.1 }, lastYear: { amount: 3.723, percentage: 27.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.049, totalSince: 0.595 }, storage: { current: { amount: 0.921, percentage: 21.4 }, lastYear: { amount: 1.805, percentage: 42.0 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.007, totalSince: 0.147 }, storage: { current: { amount: 0.884, percentage: 26.0 }, lastYear: { amount: 1.344, percentage: 39.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.12, percentage: 1.8 }, lastYear: { amount: 1.658, percentage: 24.4 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.051, totalSince: 0.626 }, storage: { current: { amount: 4.003, percentage: 7.6 }, lastYear: { amount: 15.151, percentage: 28.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.019, totalSince: 0.218 }, storage: { current: { amount: 1.618, percentage: 9.4 }, lastYear: { amount: 5.147, percentage: 30.0 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.005, totalSince: 0.284 }, storage: { current: { amount: 0.737, percentage: 33.8 }, lastYear: { amount: 1.303, percentage: 59.8 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.02, totalSince: 0.373 }, storage: { current: { amount: 2.636, percentage: 11.0 }, lastYear: { amount: 5.84, percentage: 24.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.002, totalSince: 0.051 }, storage: { current: { amount: 0.051, percentage: 5.2 }, lastYear: { amount: 0.258, percentage: 26.1 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.014, totalSince: 0.197 }, storage: { current: { amount: 0.279, percentage: 32.4 }, lastYear: { amount: 0.239, percentage: 27.8 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.055 }, storage: { current: { amount: 0.11, percentage: 36.9 }, lastYear: { amount: 0.112, percentage: 37.6 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 0.003 }, storage: { current: { amount: 0.004, percentage: 0.2 }, lastYear: { amount: 0.05, percentage: 3.0 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 0.062 }, storage: { current: { amount: 0.079, percentage: 5.5 }, lastYear: { amount: 0.285, percentage: 19.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.008, totalSince: 0.244 }, storage: { current: { amount: 0.296, percentage: 81.5 }, lastYear: { amount: 0.223, percentage: 61.4 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.006, totalSince: 0.019 }, storage: { current: { amount: 0.453, percentage: 16.2 }, lastYear: { amount: 1.006, percentage: 35.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.005, totalSince: 0.016 }, storage: { current: { amount: 1.052, percentage: 52.6 }, lastYear: { amount: 1.387, percentage: 69.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.019, totalSince: 0.525 }, storage: { current: { amount: 2.344, percentage: 52.6 }, lastYear: { amount: 2.684, percentage: 60.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:2.6, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:4.798 }
];

export const getReportDate = (): string => "12-JAN-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 1.12 };

export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (5 Ιανουαρίου - 12 Ιανουαρίου 2026)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου αυξήθηκε στο 10.0% (29.0 ΕΚΜ) από 9.4% μεταξύ 5 και 12 Ιανουαρίου 2026. Οι εισροές συνεχίστηκαν δυναμικά με συνολική εισροή 4.798 ΕΚΜ για την περίοδο 2025/26. Οι εισροές Ιανουαρίου φτάνουν τα 2.6 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ο Κούρης αυξήθηκε σημαντικά στα 10.91 ΕΚΜ (9.5% από 8.4%). Ο Αρμίνου αυξήθηκε στο 21.4% (από 19.3%). Μεταφέρθηκαν 1.12 ΕΚΜ νερού από Αρμίνου σε Κούρη.
- **Πάφος:** Ο Μαυροκόλυμπος αυξήθηκε στο 33.8% (από 31.1%). Ο Ασπρόκρεμμος αυξήθηκε στο 7.6% (από 7.5%).
- **Χρυσοχού:** Η Αγία Μαρίνα αυξήθηκε στο 36.9% (από 33.6%), ο Πόμος αυξήθηκε στο 32.4% (από 25.7%).
- **Λευκωσία:** Ο Καλοπαναγιώτης αυξήθηκε στο 81.5% (από 71.9%), ο Ξυλιάτος στο 5.5% (από 4.9%).

**Εκτίμηση:**
Οι χειμερινές βροχοπτώσεις ενισχύουν σημαντικά τις εισροές. Τα επίπεδα αποθήκευσης παραμένουν χαμηλότερα από πέρυσι (10.0% έναντι 26.6%).
`;
  }
  return `
### Recent Changes (January 5 - January 12, 2026)

**General Overview:**
Total water storage in Cyprus reservoirs increased to 10.0% (29.0 MCM) from 9.4% between January 5 and 12, 2026. Inflows continued strongly with total inflow of 4.798 MCM for the 2025/26 period. January inflows reached 2.6 MCM.

**By Region:**
- **Southern Conveyor:** Kouris increased significantly to 10.91 MCM (9.5% from 8.4%). Arminou increased to 21.4% (from 19.3%). 1.12 MCM of water was transferred from Arminou to Kouris.
- **Paphos:** Mavrokolympos increased to 33.8% (from 31.1%). Asprokremmos increased to 7.6% (from 7.5%).
- **Chrysochou:** Agia Marina increased to 36.9% (from 33.6%), Pomos increased to 32.4% (from 25.7%).
- **Nicosia:** Kalopanagiotis increased to 81.5% (from 71.9%), Xyliatos to 5.5% (from 4.9%).

**Assessment:**
Winter rainfall continues to significantly boost inflows. Storage levels remain lower than last year (10.0% vs 26.6%).
`;
};
