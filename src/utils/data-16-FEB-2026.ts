import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for February 16, 2026 (parsed from 16-FEB-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 1.595, totalSince: 5.218 }, storage: { current: { amount: 16.66, percentage: 14.5 }, lastYear: { amount: 24.683, percentage: 21.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.078, totalSince: 0.41 }, storage: { current: { amount: 1.385, percentage: 8.1 }, lastYear: { amount: 4.647, percentage: 27.2 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.057, totalSince: 0.32 }, storage: { current: { amount: 1.66, percentage: 12.0 }, lastYear: { amount: 4.812, percentage: 34.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.089, totalSince: 0.769 }, storage: { current: { amount: 3.364, percentage: 21.7 }, lastYear: { amount: 5.25, percentage: 33.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.461, totalSince: 0.983 }, storage: { current: { amount: 0.957, percentage: 7.1 }, lastYear: { amount: 3.754, percentage: 27.8 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 2.217, totalSince: 5.065 }, storage: { current: { amount: 2.411, percentage: 56.1 }, lastYear: { amount: 2.216, percentage: 51.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.031, totalSince: 0.525 }, storage: { current: { amount: 1.256, percentage: 36.9 }, lastYear: { amount: 1.37, percentage: 40.3 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 1.879, percentage: 27.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 2.684, totalSince: 6.247 }, storage: { current: { amount: 9.438, percentage: 18.0 }, lastYear: { amount: 14.428, percentage: 27.5 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.838, totalSince: 2.784 }, storage: { current: { amount: 3.635, percentage: 21.2 }, lastYear: { amount: 4.869, percentage: 28.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.019, totalSince: 0.575 }, storage: { current: { amount: 1.185, percentage: 54.4 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.675, totalSince: 2.891 }, storage: { current: { amount: 5.11, percentage: 21.3 }, lastYear: { amount: 6.1, percentage: 25.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.162, totalSince: 0.497 }, storage: { current: { amount: 0.497, percentage: 50.2 }, lastYear: { amount: 0.326, percentage: 32.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.02, totalSince: 0.782 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.323, percentage: 37.6 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.007, totalSince: 0.128 }, storage: { current: { amount: 0.183, percentage: 61.4 }, lastYear: { amount: 0.141, percentage: 47.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.069, totalSince: 0.271 }, storage: { current: { amount: 0.272, percentage: 16.1 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.198, totalSince: 0.647 }, storage: { current: { amount: 0.664, percentage: 46.4 }, lastYear: { amount: 0.31, percentage: 21.7 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.276, percentage: 76.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.21, totalSince: 0.728 }, storage: { current: { amount: 1.125, percentage: 40.2 }, lastYear: { amount: 1.001, percentage: 35.8 } }, maxStorage: { amount: 1.069, date: "12/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.081, totalSince: 1.002 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.43, percentage: 71.5 } }, maxStorage: { amount: 1.473, date: "26/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.283, totalSince: 1.957 }, storage: { current: { amount: 3.775, percentage: 84.8 }, lastYear: { amount: 2.891, percentage: 64.9 } }, maxStorage: { amount: 3.012, date: "12/3" }, region: "Recharge/Other" },

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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:13.555, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:28.423 },
];

export const getReportDate = (): string => "16-FEB-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 3.91 };

export const getSummaryChanges = (language: 'en' | 'gr' = 'en'): string => {
  if (language === 'gr') {
    return `
### Πρόσφατες Αλλαγές (9 Φεβρουαρίου - 16 Φεβρουαρίου 2026)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση αυξήθηκε στο 19.0% (56.9 ΕΚΜ) από 15.4% (46.1 ΕΚΜ). Οι εισροές Φεβρουαρίου έφτασαν τα 13.6 ΕΚΜ και η συνολική εισροή 2025/26 τα 28.423 ΕΚΜ. Μεταφέρθηκαν 3.91 ΕΚΜ από Αρμίνου προς Κούρη.

**Ανά Περιοχή:**
- **Southern Conveyor:** 12.1% -> 14.7%
- **Paphos:** 14.5% -> 19.9%
- **Chrysochou:** 21.4% -> 25.4%
- **Nicosia:** 28.9% -> 37.3%
- **Recharge/Other:** 66.6% -> 74.6%

**Κύρια Σημεία:**
- **Arminou:** 20.4% -> 56.1%
- **Asprokremmos:** 12.5% -> 18.0%
- **Pomos:** 94.2% -> 100.0%
- **Xyliatos:** 31.0% -> 46.4%
- **Klirou-Malounta:** 94.5% -> 100.0%

**Εκτίμηση:**
Ισχυρές εισροές στα μέσα Φεβρουαρίου βελτίωσαν όλους τους τομείς. Τα συνολικά αποθέματα (19.0%) παραμένουν χαμηλότερα από το περσινό επίπεδο (26.9%).
`;
  }
  return `
### Recent Changes (February 9 - February 16, 2026)

**General Overview:**
Total storage increased to 19.0% (56.9 MCM) from 15.4% (46.1 MCM). February inflows reached 13.6 MCM and total 2025/26 inflow reached 28.423 MCM. 3.91 MCM was transferred from Arminou to Kouris.

**By Region:**
- **Southern Conveyor:** 12.1% -> 14.7%
- **Paphos:** 14.5% -> 19.9%
- **Chrysochou:** 21.4% -> 25.4%
- **Nicosia:** 28.9% -> 37.3%
- **Recharge/Other:** 66.6% -> 74.6%

**Key Highlights:**
- **Arminou:** 20.4% -> 56.1%
- **Asprokremmos:** 12.5% -> 18.0%
- **Pomos:** 94.2% -> 100.0%
- **Xyliatos:** 31.0% -> 46.4%
- **Klirou-Malounta:** 94.5% -> 100.0%

**Assessment:**
Strong mid-February inflows improved all regions. Overall storage (19.0%) remains below last year (26.9%).
`;
};
