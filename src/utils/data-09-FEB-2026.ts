import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for February 9, 2026 (parsed from 09-FEB-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.255, totalSince: 3.275 }, storage: { current: { amount: 14.001, percentage: 12.2 }, lastYear: { amount: 24.917, percentage: 21.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.029, totalSince: 0.3 }, storage: { current: { amount: 1.379, percentage: 8.1 }, lastYear: { amount: 4.62, percentage: 27.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.021, totalSince: 0.246 }, storage: { current: { amount: 1.595, percentage: 11.5 }, lastYear: { amount: 4.939, percentage: 35.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.03, totalSince: 0.628 }, storage: { current: { amount: 3.322, percentage: 21.4 }, lastYear: { amount: 5.185, percentage: 33.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.04, totalSince: 0.46 }, storage: { current: { amount: 0.44, percentage: 3.3 }, lastYear: { amount: 3.769, percentage: 27.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.147, totalSince: 2.585 }, storage: { current: { amount: 0.879, percentage: 20.4 }, lastYear: { amount: 2.139, percentage: 49.7 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.009, totalSince: 0.464 }, storage: { current: { amount: 1.196, percentage: 35.2 }, lastYear: { amount: 1.341, percentage: 39.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.12, percentage: 1.8 }, lastYear: { amount: 1.916, percentage: 28.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.099, totalSince: 3.321 }, storage: { current: { amount: 6.527, percentage: 12.5 }, lastYear: { amount: 14.588, percentage: 27.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.085, totalSince: 1.814 }, storage: { current: { amount: 2.787, percentage: 16.2 }, lastYear: { amount: 4.92, percentage: 28.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.019, totalSince: 0.506 }, storage: { current: { amount: 1.08, percentage: 49.5 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.099, totalSince: 2.066 }, storage: { current: { amount: 4.292, percentage: 17.9 }, lastYear: { amount: 6.03, percentage: 25.1 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.008, totalSince: 0.323 }, storage: { current: { amount: 0.323, percentage: 32.6 }, lastYear: { amount: 0.314, percentage: 31.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.02, totalSince: 0.728 }, storage: { current: { amount: 0.81, percentage: 94.2 }, lastYear: { amount: 0.3, percentage: 34.9 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.112 }, storage: { current: { amount: 0.167, percentage: 56.0 }, lastYear: { amount: 0.135, percentage: 45.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.008, totalSince: 0.199 }, storage: { current: { amount: 0.2, percentage: 11.8 }, lastYear: { amount: 0.047, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.01, totalSince: 0.427 }, storage: { current: { amount: 0.444, percentage: 31.0 }, lastYear: { amount: 0.304, percentage: 21.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.26, percentage: 71.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.022, totalSince: 0.501 }, storage: { current: { amount: 0.905, percentage: 32.3 }, lastYear: { amount: 0.999, percentage: 35.7 } }, maxStorage: { amount: 1.069, date: "12/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.04, totalSince: 0.885 }, storage: { current: { amount: 1.89, percentage: 94.5 }, lastYear: { amount: 1.418, percentage: 70.9 } }, maxStorage: { amount: 1.473, date: "26/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.097, totalSince: 1.552 }, storage: { current: { amount: 3.371, percentage: 75.7 }, lastYear: { amount: 2.817, percentage: 63.2 } }, maxStorage: { amount: 3.012, date: "12/3" }, region: "Recharge/Other" }
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:2.897, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:17.765 }
];

export const getReportDate = (): string => "09-FEB-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 3.04 };

export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (2 Φεβρουαρίου - 9 Φεβρουαρίου 2026)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου αυξήθηκε στο 13.7% (39.9 ΕΚΜ) από 13.1% (38.0 ΕΚΜ) μεταξύ 2 και 9 Φεβρουαρίου 2026. Οι εισροές Φεβρουαρίου αυξήθηκαν στα 2.9 ΕΚΜ. Συνολική εισροή 17.765 ΕΚΜ για την περίοδο 2025/26. Μεταφέρθηκαν 3.04 ΕΚΜ από Αρμίνου σε Κούρη.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Ο Κούρης αυξήθηκε στο 12.2% (από 11.4%). Η Πολεμίδια στο 35.2% (από 34.0%). Η Γερμασόγεια στο 3.3% (από 2.4%). Ο Αρμίνου μειώθηκε στο 20.4% (από 22.4%).
- **Πάφος:** Ο Ασπρόκρεμμος αυξήθηκε στο 12.5% (από 11.7%). Ο Κανναβιού στο 16.2% (από 15.5%). Ο Μαυροκόλυμπος στο 49.5% (από 46.7%).
- **Χρυσοχού:** Ο Πόμος αυξήθηκε στο 94.2% (από 86.7%). Ο Ευρέτου στο 17.9% (από 16.7%). Η Αγία Μαρίνα στο 56.0% (από 53.0%). Η Αργάκα στο 32.6% (από 30.1%).
- **Λευκωσία:** Ο Καλοπαναγιώτης παραμένει στο 100%. Ο Ξυλιάτος αυξήθηκε στο 31.0% (από 28.4%). Η Βυζακιά στο 11.8% (από 10.1%).
- **Εμπλουτισμός:** Η Κλήρου-Μαλούντα αυξήθηκε στο 94.5% (από 89.5%). Η Σολέα στο 75.7% (από 70.1%). Ο Ταμασσός στο 32.3% (από 30.7%).

**Εκτίμηση:**
Συνεχής αύξηση λόγω βροχοπτώσεων Φεβρουαρίου. Ο Πόμος πλησιάζει πλήρη χωρητικότητα (94.2%). Τα επίπεδα παραμένουν χαμηλότερα από πέρυσι (13.7% έναντι 26.0%).
`;
  }
  return `
### Recent Changes (February 2 - February 9, 2026)

**General Overview:**
Total water storage in Cyprus reservoirs increased to 13.7% (39.9 MCM) from 13.1% (38.0 MCM) between February 2 and 9, 2026. February inflows increased to 2.9 MCM. Total inflow for 2025/26 reached 17.765 MCM. 3.04 MCM transferred from Arminou to Kouris.

**By Region:**
- **Southern Conveyor:** Kouris increased to 12.2% (from 11.4%). Polemidia to 35.2% (from 34.0%). Germasoyeia to 3.3% (from 2.4%). Arminou decreased to 20.4% (from 22.4%).
- **Paphos:** Asprokremmos increased to 12.5% (from 11.7%). Kannaviou to 16.2% (from 15.5%). Mavrokolympos to 49.5% (from 46.7%).
- **Chrysochou:** Pomos increased to 94.2% (from 86.7%). Evretou to 17.9% (from 16.7%). Agia Marina to 56.0% (from 53.0%). Argaka to 32.6% (from 30.1%).
- **Nicosia:** Kalopanagiotis remains at 100% capacity. Xyliatos increased to 31.0% (from 28.4%). Vyzakia to 11.8% (from 10.1%).
- **Recharge/Other:** Klirou-Malounta increased to 94.5% (from 89.5%). Solea to 75.7% (from 70.1%). Tamassos to 32.3% (from 30.7%).

**Assessment:**
Continued increases due to February rainfall. Pomos approaching full capacity (94.2%). Overall levels remain lower than last year (13.7% vs 26.0%).
`;
};
