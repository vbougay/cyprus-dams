import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for October 27, 2025 (parsed from 27-OCT-2025UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.0, totalSince: 0.014 }, storage: { current: { amount: 11.375, percentage: 9.9 }, lastYear: { amount: 27.361, percentage: 23.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.0, totalSince: 0.007 }, storage: { current: { amount: 1.851, percentage: 10.8 }, lastYear: { amount: 3.758, percentage: 22.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.0, totalSince: 0.003 }, storage: { current: { amount: 1.997, percentage: 14.4 }, lastYear: { amount: 7.066, percentage: 51.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.0, totalSince: 0.009 }, storage: { current: { amount: 3.11, percentage: 20.1 }, lastYear: { amount: 3.685, percentage: 23.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 0.766, percentage: 5.7 }, lastYear: { amount: 2.85, percentage: 21.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 1.745, percentage: 40.6 }, lastYear: { amount: 0.983, percentage: 22.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.005 }, storage: { current: { amount: 0.835, percentage: 24.6 }, lastYear: { amount: 0.684, percentage: 20.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.097, percentage: 1.4 }, lastYear: { amount: 0.627, percentage: 9.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.0, totalSince: 0.027 }, storage: { current: { amount: 4.849, percentage: 9.3 }, lastYear: { amount: 16.236, percentage: 31.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.0, totalSince: 0.006 }, storage: { current: { amount: 2.009, percentage: 11.7 }, lastYear: { amount: 5.792, percentage: 33.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.0, percentage: 0.0 }, lastYear: { amount: 0.182, percentage: 8.3 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.0, totalSince: 0.007 }, storage: { current: { amount: 2.753, percentage: 11.5 }, lastYear: { amount: 6.095, percentage: 25.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.002, percentage: 0.2 }, lastYear: { amount: 0.131, percentage: 13.2 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.114, percentage: 13.3 }, lastYear: { amount: 0.156, percentage: 18.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.055, percentage: 18.5 }, lastYear: { amount: 0.045, percentage: 15.1 } }, maxStorage: { amount: 0.177, date: "30,4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.004, percentage: 0.2 }, lastYear: { amount: 0.094, percentage: 5.6 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.028, percentage: 2.0 }, lastYear: { amount: 0.228, percentage: 15.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.003 }, storage: { current: { amount: 0.04, percentage: 11.0 }, lastYear: { amount: 0.029, percentage: 8.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.503, percentage: 18.0 }, lastYear: { amount: 0.97, percentage: 34.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.108, percentage: 55.4 }, lastYear: { amount: 1.205, percentage: 60.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 1.916, percentage: 43.0 }, lastYear: { amount: 2.511, percentage: 56.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" }
];

// Yearly inflow data - updated with new 25/26 data
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
  { year: "25/26", months: { October:0.091, November:0.0, December:0.0, January:0.0, February:0.0, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:0.091 }
];

export const getReportDate = (): string => "27-OCT-2025";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.0 };

export const getSummaryChanges = (language: 'en' | 'el' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (13 - 27 Οκτωβρίου 2025)

**Γενική Επισκόπηση:**
Η συνολική αποθήκευση νερού στους ταμιευτήρες της Κύπρου μειώθηκε από 11,7% σε 10,9% μεταξύ 13 και 27 Οκτωβρίου 2025. Αυτή η μείωση κατά 0,8 ποσοστιαίες μονάδες αντικατοπτρίζει τη συνεχιζόμενη κατανάλωση με ελάχιστες εισροές. Η συνολική εισροή για την περίοδο 2025/26 αυξήθηκε ελαφρώς από 0,086 σε 0,091 ΕΚΜ.

**Ανά Περιοχή:**
- **Νότιος Αγωγός:** Μείωση από 12,4% σε 11,5%, με τον Κούρη να μειώνεται από 12,298 σε 11,375 ΕΚΜ (από 10,7% σε 9,9%).
- **Πάφος:** Μείωση από 10,3% σε 9,6%, με τον Ασπρόκρεμμο να πέφτει από 5,213 σε 4,849 ΕΚΜ.
- **Χρυσοχού:** Μείωση από 12,0% σε 11,2%, με τον Ευρέτου να μειώνεται από 2,943 σε 2,753 ΕΚΜ.
- **Λευκωσία:** Μείωση από 2,2% σε 2,1%.

**Εκτίμηση:**
Οι εισροές παραμένουν εξαιρετικά χαμηλές, με μόνο 0,005 ΕΚΜ επιπλέον εισροή κατά τη διάρκεια αυτής της περιόδου 14 ημερών. Η κατανάλωση συνεχίζεται σταθερά καθώς περιμένουμε την έναρξη της βροχερής περιόδου. Τα επίπεδα αποθήκευσης συνεχίζουν να είναι σημαντικά χαμηλότερα από τον περασμένο χρόνο σε όλες τις περιοχές.
`;
  }
  return `
### Recent Changes (October 13 - 27, 2025)

**General Overview:**
The total water storage in Cyprus reservoirs decreased from 11.7% to 10.9% between October 13 and 27, 2025. This decline of 0.8 percentage points reflects ongoing consumption with minimal inflows. The total inflow for the 2025/26 period increased slightly from 0.086 to 0.091 MCM.

**By Region:**
- **Southern Conveyor:** Decrease from 12.4% to 11.5%, with Kouris declining from 12.298 to 11.375 MCM (from 10.7% to 9.9%).
- **Paphos:** Decrease from 10.3% to 9.6%, with Asprokremmos dropping from 5.213 to 4.849 MCM.
- **Chrysochou:** Decrease from 12.0% to 11.2%, with Evretou declining from 2.943 to 2.753 MCM.
- **Nicosia:** Decrease from 2.2% to 2.1%.

**Assessment:**
Inflows remain extremely low, with only 0.005 MCM of additional inflow during this 14-day period. Consumption continues steadily as we await the start of the rainy season. Storage levels continue to be significantly lower than last year across all regions.
`;
};
