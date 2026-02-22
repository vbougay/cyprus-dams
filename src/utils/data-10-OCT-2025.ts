import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for October 10, 2025 (parsed from 10-OCT-2025UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.0, totalSince: 0.014 }, storage: { current: { amount: 12.471, percentage: 10.8 }, lastYear: { amount: 29.256, percentage: 25.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 2.084, percentage: 12.2 }, lastYear: { amount: 3.879, percentage: 22.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.0, totalSince: 0.003 }, storage: { current: { amount: 2.029, percentage: 14.6 }, lastYear: { amount: 7.532, percentage: 54.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.0, totalSince: 0.006 }, storage: { current: { amount: 3.397, percentage: 21.9 }, lastYear: { amount: 3.494, percentage: 22.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 0.95, percentage: 7.0 }, lastYear: { amount: 3.094, percentage: 22.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 1.819, percentage: 42.3 }, lastYear: { amount: 1.055, percentage: 24.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 0.862, percentage: 25.4 }, lastYear: { amount: 0.721, percentage: 21.2 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.106, percentage: 1.6 }, lastYear: { amount: 0.655, percentage: 9.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.0, totalSince: 0.027 }, storage: { current: { amount: 5.298, percentage: 10.1 }, lastYear: { amount: 17.202, percentage: 32.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.0, totalSince: 0.006 }, storage: { current: { amount: 2.192, percentage: 12.8 }, lastYear: { amount: 6.092, percentage: 35.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.0, percentage: 0.0 }, lastYear: { amount: 0.23, percentage: 10.6 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.0, totalSince: 0.007 }, storage: { current: { amount: 2.965, percentage: 12.4 }, lastYear: { amount: 6.677, percentage: 27.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.003, percentage: 0.3 }, lastYear: { amount: 0.134, percentage: 13.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.117, percentage: 13.6 }, lastYear: { amount: 0.183, percentage: 21.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.055, percentage: 18.5 }, lastYear: { amount: 0.045, percentage: 15.1 } }, maxStorage: { amount: 0.177, date: "30,4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.005, percentage: 0.3 }, lastYear: { amount: 0.125, percentage: 7.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.035, percentage: 2.4 }, lastYear: { amount: 0.271, percentage: 19.0 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.001, totalSince: 0.001 }, storage: { current: { amount: 0.038, percentage: 10.5 }, lastYear: { amount: 0.029, percentage: 8.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.533, percentage: 19.0 }, lastYear: { amount: 1.02, percentage: 36.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.13, percentage: 56.5 }, lastYear: { amount: 1.231, percentage: 61.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.979, percentage: 44.4 }, lastYear: { amount: 2.604, percentage: 58.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
];

// Yearly inflow data - updated with new 25/26 data
export const yearlyInflowData: YearlyInflowData[] = [
  { year: "14/15", months: { October:0.32, November:0.92, December:2.14, January:38.35, February:44.52, March:17.67, April:8.23, May:3.14, June:0.98, July:0.09, "Aug-Sep":0.01 }, total:116.35 },
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
  { year: "25/26", months: { October:0.084, November:0.0, December:0.0, January:0.0, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:0.084 }
];

export const getReportDate = (): string => "10-OCT-2025";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.0 };

export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (22 Σεπτεμβρίου - 10 Οκτωβρίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου μειώθηκε από 12,9% σε 11,8% μεταξύ 22 Σεπτεμβρίου και 10 Οκτωβρίου 2025. Αυτή η μείωση κατά 1,1 ποσοστιαίες μονάδες συνεχίζει την τάση της θερινής κατανάλωσης χωρίς σημαντικές εισροές. Η συνολική εισροή για την περίοδο 2025/26 ξεκίνησε με μόνο 0,084 ΕΚΜ τον Οκτώβριο.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Μείωση από 13,6% σε 12,5%, με τον Κούρη να μειώνεται από 13,523 σε 12,471 ΕΚΜ (από 11,8% σε 10,8%).
- **Πάφος:** Μείωση από 11,5% σε 10,4%, με τον Ασπρόκρεμμο να πέφτει από 5,871 σε 5,298 ΕΚΜ.
- **Χρυσοχού:** Μείωση από 12,9% σε 12,0%.
- **Λευκωσία:** Μείωση από 3,8% σε 2,2%.

**Εκτίμηση:**
Οι εισροές παραμένουν ελάχιστες καθώς η περίοδος των βροχών δεν έχει ξεκινήσει ακόμα. Η κατανάλωση συνεχίζεται κανονικά. Δεν υπάρχει μεταφορά νερού από τον Αρμίνου στον Κούρη αυτή τη στιγμή.
`;
  }
  return `
### Recent Changes (September 22 - October 10, 2025)

**General Overview:**
The total water storage in Cyprus reservoirs decreased from 12.9% to 11.8% between September 22 and October 10, 2025. This decline of 1.1 percentage points continues the summer consumption trend without significant inflows. The total inflow for the 2025/26 period started with only 0.084 MCM in October.

**By Region:**
- **Southern Conveyor:** Down from 13.6% to 12.5%, with Kouris decreasing from 13.523 to 12.471 MCM (from 11.8% to 10.8%).
- **Paphos:** Down from 11.5% to 10.4%, with Asprokremmos dropping from 5.871 to 5.298 MCM.
- **Chrysochou:** Down from 12.9% to 12.0%.
- **Nicosia:** Down from 3.8% to 2.2%.

**Assessment:**
Inflows remain minimal as the rainy season has not yet begun. Consumption continues normally. There is no water transfer from Arminou to Kouris at this time.
`;
};
