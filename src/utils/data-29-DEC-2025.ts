import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for December 29, 2025 (parsed from 29-DEC-2025 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.029, totalSince: 0.197 }, storage: { current: { amount: 9.154, percentage: 8.0 }, lastYear: { amount: 25.44, percentage: 22.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.004, totalSince: 0.042 }, storage: { current: { amount: 1.606, percentage: 9.4 }, lastYear: { amount: 4.193, percentage: 24.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.003, totalSince: 0.044 }, storage: { current: { amount: 1.983, percentage: 14.3 }, lastYear: { amount: 5.703, percentage: 41.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.018, totalSince: 0.098 }, storage: { current: { amount: 2.743, percentage: 17.7 }, lastYear: { amount: 4.549, percentage: 29.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.007, totalSince: 0.043 }, storage: { current: { amount: 0.206, percentage: 1.5 }, lastYear: { amount: 3.333, percentage: 24.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.029, totalSince: 0.288 }, storage: { current: { amount: 1.3, percentage: 30.2 }, lastYear: { amount: 1.556, percentage: 36.2 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.003, totalSince: 0.099 }, storage: { current: { amount: 0.844, percentage: 24.8 }, lastYear: { amount: 1.308, percentage: 38.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.12, percentage: 1.8 }, lastYear: { amount: 1.351, percentage: 19.9 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.024, totalSince: 0.228 }, storage: { current: { amount: 3.83, percentage: 7.3 }, lastYear: { amount: 15.297, percentage: 29.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.006, totalSince: 0.069 }, storage: { current: { amount: 1.546, percentage: 9.0 }, lastYear: { amount: 5.172, percentage: 30.1 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.011, totalSince: 0.236 }, storage: { current: { amount: 0.61, percentage: 28.0 }, lastYear: { amount: 1.11, percentage: 50.9 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.016, totalSince: 0.09 }, storage: { current: { amount: 2.461, percentage: 10.3 }, lastYear: { amount: 5.646, percentage: 23.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.003, totalSince: 0.014 }, storage: { current: { amount: 0.014, percentage: 1.4 }, lastYear: { amount: 0.17, percentage: 17.2 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.008, totalSince: 0.018 }, storage: { current: { amount: 0.1, percentage: 11.6 }, lastYear: { amount: 0.158, percentage: 18.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.003, totalSince: 0.032 }, storage: { current: { amount: 0.087, percentage: 29.2 }, lastYear: { amount: 0.087, percentage: 29.2 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 0.002 }, storage: { current: { amount: 0.003, percentage: 0.2 }, lastYear: { amount: 0.051, percentage: 3.0 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.004, totalSince: 0.044 }, storage: { current: { amount: 0.061, percentage: 4.3 }, lastYear: { amount: 0.245, percentage: 17.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.002, totalSince: 0.169 }, storage: { current: { amount: 0.221, percentage: 60.9 }, lastYear: { amount: 0.179, percentage: 49.3 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.438, percentage: 15.6 }, lastYear: { amount: 0.959, percentage: 34.3 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.04, percentage: 52.0 }, lastYear: { amount: 1.281, percentage: 64.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.06, totalSince: 0.299 }, storage: { current: { amount: 2.119, percentage: 47.6 }, lastYear: { amount: 2.374, percentage: 53.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
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
  { year: "25/26", months: { October:0.095, November:0.200, December:1.418, January:0.0, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:1.713 }
];

export const getReportDate = (): string => "29-DEC-2025";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.46 };

export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (23 - 29 Δεκεμβρίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου μειώθηκε ελαφρώς στο 9,2% (26,89 ΕΚΜ) από 9,3% μεταξύ 23 και 29 Δεκεμβρίου 2025. Οι εισροές συνεχίστηκαν με συνολική εισροή 1,713 ΕΚΜ για την περίοδο 2025/26. Οι εισροές Δεκεμβρίου έφτασαν τα 1,418 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ο Κούρης αυξήθηκε στα 9,154 ΕΚΜ (8,0% από 7,6%). Ο Αρμίνου μειώθηκε στο 30,2% (από 41,7%). Μεταφέρθηκαν 0,46 ΕΚΜ νερού από Αρμίνου σε Κούρη.
- **Πάφος:** Ο Μαυροκόλυμπος αυξήθηκε στο 28,0% (από 26,0%). Ο Ασπρόκρεμμος μειώθηκε ελαφρώς στο 7,3%.
- **Χρυσοχού:** Η Αγία Μαρίνα αυξήθηκε στο 29,2%, ο Εύρετου στο 10,3% (από 10,2%).
- **Λευκωσία:** Ο Καλοπαναγιώτης αυξήθηκε στο 60,9% (από 60,3%), ο Ξυλιάτος στο 4,3% (από 4,0%).

**Εκτίμηση:**
Οι χειμερινές βροχοπτώσεις συνεχίζουν να ενισχύουν τις εισροές. Τα επίπεδα αποθήκευσης παραμένουν χαμηλότερα από πέρυσι (9,2% έναντι 26,0%).
`;
  }
  return `
### Recent Changes (December 23 - 29, 2025)

**General Overview:**
Total water storage in Cyprus reservoirs slightly decreased to 9.2% (26.89 MCM) from 9.3% between December 23 and 29, 2025. Inflows continued with total inflow of 1.713 MCM for the 2025/26 period. December inflows reached 1.418 MCM.

**By Region:**
- **Southern Conveyor:** Kouris increased to 9.154 MCM (8.0% from 7.6%). Arminou decreased to 30.2% (from 41.7%). 0.46 MCM of water was transferred from Arminou to Kouris.
- **Paphos:** Mavrokolympos increased to 28.0% (from 26.0%). Asprokremmos slightly decreased to 7.3%.
- **Chrysochou:** Agia Marina increased to 29.2%, Evretou to 10.3% (from 10.2%).
- **Nicosia:** Kalopanagiotis increased to 60.9% (from 60.3%), Xyliatos to 4.3% (from 4.0%).

**Assessment:**
Winter rainfall continues to boost inflows. Storage levels remain lower than last year (9.2% vs 26.0%).
`;
};
