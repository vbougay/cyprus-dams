import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for February 20, 2026 (parsed from 20-FEB-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.276, totalSince: 6.262 }, storage: { current: { amount: 19.339, percentage: 16.8 }, lastYear: { amount: 24.599, percentage: 21.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.011, totalSince: 0.49 }, storage: { current: { amount: 1.333, percentage: 7.8 }, lastYear: { amount: 4.667, percentage: 27.3 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.003, totalSince: 0.348 }, storage: { current: { amount: 1.684, percentage: 12.2 }, lastYear: { amount: 4.729, percentage: 34.1 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.014, totalSince: 0.854 }, storage: { current: { amount: 3.371, percentage: 21.7 }, lastYear: { amount: 5.284, percentage: 34.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.04, totalSince: 1.195 }, storage: { current: { amount: 1.14, percentage: 8.4 }, lastYear: { amount: 3.761, percentage: 27.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.266, totalSince: 6.085 }, storage: { current: { amount: 1.635, percentage: 38.0 }, lastYear: { amount: 2.256, percentage: 52.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.008, totalSince: 0.575 }, storage: { current: { amount: 1.305, percentage: 38.4 }, lastYear: { amount: 1.39, percentage: 40.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.133, percentage: 2.0 }, lastYear: { amount: 1.881, percentage: 27.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.259, totalSince: 7.269 }, storage: { current: { amount: 10.447, percentage: 19.9 }, lastYear: { amount: 14.313, percentage: 27.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.147, totalSince: 3.352 }, storage: { current: { amount: 4.114, percentage: 24.0 }, lastYear: { amount: 4.847, percentage: 28.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.003, totalSince: 0.605 }, storage: { current: { amount: 1.254, percentage: 57.5 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.11, totalSince: 3.371 }, storage: { current: { amount: 5.584, percentage: 23.3 }, lastYear: { amount: 6.14, percentage: 25.6 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.023, totalSince: 0.606 }, storage: { current: { amount: 0.606, percentage: 61.2 }, lastYear: { amount: 0.33, percentage: 33.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.782 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.33, percentage: 38.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.137 }, storage: { current: { amount: 0.192, percentage: 64.4 }, lastYear: { amount: 0.143, percentage: 48.0 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.03, totalSince: 0.351 }, storage: { current: { amount: 0.352, percentage: 20.8 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.035, totalSince: 0.765 }, storage: { current: { amount: 0.782, percentage: 54.7 }, lastYear: { amount: 0.317, percentage: 22.2 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.283, percentage: 78.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.019, totalSince: 0.855 }, storage: { current: { amount: 1.248, percentage: 44.6 }, lastYear: { amount: 1.037, percentage: 37.0 } }, maxStorage: { amount: 1.069, date: "12/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.006 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.439, percentage: 72.0 } }, maxStorage: { amount: 1.473, date: "26/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.034, totalSince: 1.929 }, storage: { current: { amount: 3.747, percentage: 84.1 }, lastYear: { amount: 2.912, percentage: 65.4 } }, maxStorage: { amount: 3.012, date: "12/3" }, region: "Recharge/Other" },

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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:18.49, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:33.358 },
];

export const getReportDate = (): string => "20-FEB-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 5.67 };

export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 - 20 Φεβρουαρίου 2026)

Συνολική αποθήκευση **18.7%** (54.5 ΕΚΜ), αύξηση από 17.2%. Οι εισροές Φεβρουαρίου έφτασαν τα 18.5 ΕΚΜ — οι υψηλότερες αυτής της περιόδου από το 2021/22.

**Αξιοσημείωτα:**
- Η Αρμίνου έπεσε στο 38.0% (από 56.1%) καθώς μεταφέρθηκαν 5.67 ΕΚΜ στο Κούρη, που ανέβηκε στο 16.8%
- Ο Ξυλιάτος αυξήθηκε σημαντικά στο 54.7% (από 46.4%), Κανναβιού στο 24.0%
- Η Πάφος βελτιώθηκε στο 22.1% και η Λευκωσία στο 43.0%

Παρά τη βελτίωση, τα αποθέματα παραμένουν στο μισό του περσινού (25.9%). Η Κύπρος βρίσκεται στο τέταρτο συνεχόμενο έτος ξηρασίας, με την κυβέρνηση να ανακοινώνει επτά νέες μονάδες αφαλάτωσης (στόχος 240,000 κ.μ./ημέρα έως 2029) και επέκταση της μονάδας Κούκλιας για το καλοκαίρι.

**Στα μέσα:**
- [Water levels remain critically low despite recent rains](https://cyprus-mail.com/2026/02/16/water-levels-remain-critically-low-despite-recent-rains) — Cyprus Mail
- [Weekend rain very beneficial for Cyprus dams](https://www.parikiaki.com/2026/02/weekend-rain-very-beneficial-for-cyprus-dams-water-development-department-says/) — Parikiaki
- [Rainfall raises Paphos dam levels](https://en.politis.com.cy/social-lens/social-lens-nature/987255/rainfall-raises-paphos-dam-levels-asprokremmos-above-18) — Politis
`;
  }
  return `
### Recent Changes (February 16 - 20, 2026)

Total storage rose to **18.7%** (54.5 MCM), up from 17.2%. February inflows have reached 18.5 MCM — the highest for this period since 2021/22.

**Notable movements:**
- Arminou dropped to 38.0% (from 56.1%) as 5.67 MCM was transferred to Kouris, which climbed to 16.8%
- Xyliatos jumped to 54.7% (from 46.4%), Kannaviou up to 24.0%
- Paphos region improved to 22.1% and Nicosia to 43.0%

Despite the gains, storage remains roughly half of last year's level (25.9%). Cyprus is in its fourth consecutive year of drought, with the government announcing seven new desalination plants targeting 240,000 m³/day by 2029 and an expansion of the Kouklia plant expected by summer.

**In the media:**
- [Water levels remain critically low despite recent rains](https://cyprus-mail.com/2026/02/16/water-levels-remain-critically-low-despite-recent-rains) — Cyprus Mail
- [Weekend rain very beneficial for Cyprus dams](https://www.parikiaki.com/2026/02/weekend-rain-very-beneficial-for-cyprus-dams-water-development-department-says/) — Parikiaki
- [Rainfall raises Paphos dam levels](https://en.politis.com.cy/social-lens/social-lens-nature/987255/rainfall-raises-paphos-dam-levels-asprokremmos-above-18) — Politis
`;
};
