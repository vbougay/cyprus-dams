import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for February 25, 2026 (parsed from 25-FEB-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.172, totalSince: 7.055 }, storage: { current: { amount: 20.695, percentage: 18.0 }, lastYear: { amount: 24.383, percentage: 21.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.015, totalSince: 0.595 }, storage: { current: { amount: 1.411, percentage: 8.3 }, lastYear: { amount: 4.683, percentage: 27.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.004, totalSince: 0.421 }, storage: { current: { amount: 1.753, percentage: 12.7 }, lastYear: { amount: 4.64, percentage: 33.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.017, totalSince: 0.951 }, storage: { current: { amount: 3.44, percentage: 22.2 }, lastYear: { amount: 5.328, percentage: 34.4 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.046, totalSince: 1.49 }, storage: { current: { amount: 1.398, percentage: 10.4 }, lastYear: { amount: 3.737, percentage: 27.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.112, totalSince: 6.873 }, storage: { current: { amount: 1.803, percentage: 41.9 }, lastYear: { amount: 2.297, percentage: 53.4 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.01, totalSince: 0.609 }, storage: { current: { amount: 1.337, percentage: 39.3 }, lastYear: { amount: 1.389, percentage: 40.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.139, percentage: 2.0 }, lastYear: { amount: 1.698, percentage: 25.0 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.063, totalSince: 7.923 }, storage: { current: { amount: 11.086, percentage: 21.2 }, lastYear: { amount: 14.177, percentage: 27.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.047, totalSince: 3.739 }, storage: { current: { amount: 4.391, percentage: 25.6 }, lastYear: { amount: 4.806, percentage: 28.0 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.619 }, storage: { current: { amount: 1.297, percentage: 59.5 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.055, totalSince: 3.773 }, storage: { current: { amount: 5.981, percentage: 24.9 }, lastYear: { amount: 6.181, percentage: 25.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.017, totalSince: 0.711 }, storage: { current: { amount: 0.711, percentage: 71.8 }, lastYear: { amount: 0.338, percentage: 34.1 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.783 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.341, percentage: 39.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.147 }, storage: { current: { amount: 0.202, percentage: 67.8 }, lastYear: { amount: 0.148, percentage: 49.7 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.011, totalSince: 0.427 }, storage: { current: { amount: 0.428, percentage: 25.3 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.022, totalSince: 0.855 }, storage: { current: { amount: 0.872, percentage: 61.0 }, lastYear: { amount: 0.322, percentage: 22.5 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.286, percentage: 78.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 0.957 }, storage: { current: { amount: 1.345, percentage: 48.0 }, lastYear: { amount: 1.055, percentage: 37.7 } }, maxStorage: { amount: 1.069, date: "12/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.011 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.444, percentage: 72.2 } }, maxStorage: { amount: 1.473, date: "26/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.042, totalSince: 2.162 }, storage: { current: { amount: 3.98, percentage: 89.4 }, lastYear: { amount: 2.945, percentage: 66.1 } }, maxStorage: { amount: 3.012, date: "12/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:22.414, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:37.282 },
];

export const getReportDate = (): string => "25-FEB-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 6.32 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 - 25 Φεβρουαρίου 2026)

Συνολική αποθήκευση **20.0%** (58.2 ΕΚΜ), αύξηση από 17.2% (50.0 ΕΚΜ). Οι εισροές Φεβρουαρίου έφτασαν τα 22.4 ΕΚΜ — οι υψηλότερες αυτής της περιόδου από το 2021/22. Συνολική εισροή 25/26 στα 37.3 ΕΚΜ.

**Αξιοσημείωτα:**
- Η Αρμίνου έπεσε στο 41.9% (από 56.1%) καθώς μεταφέρθηκαν 6.32 ΕΚΜ στο Κούρη, που ανέβηκε στο 18.0%
- Αργάκα εκτινάχθηκε στο 71.8% (από 50.2%), Ξυλιάτος στο 61.0% (από 46.4%)
- Ασπρόκρεμμος βελτιώθηκε στο 21.2% (από 18.0%)

Παρά τη βελτίωση, τα αποθέματα παραμένουν κάτω από τα περσινά (25.7%). Η ξηρή γη απορροφά μεγάλο μέρος των βροχοπτώσεων, περιορίζοντας τις εισροές. Τρεις κινητές μονάδες αφαλάτωσης σχεδιάζονται εντός του 2026.

**Στα μέσα:**
- [Επιτέλους νερό στα φράγματα, συνεχίζουν τα καιρικά φαινόμενα](https://www.alphanews.live/cyprus/epitelous-nero-sta-fragmata-synechizoun-ta-kairika-fainomena/) — AlphaNews
- [«Ψαλίδι» στο νερό: Πώς αποφασίστηκε η μείωση 10% στην υδροδότηση](https://www.alphanews.live/cyprus/psalidi-sto-nero-pos-apofasistike-i-meiosi-10-stin-ydrodotisi/) — AlphaNews
- [Απελπιστική η κατάσταση στα φράγματα παρά τις βροχοπτώσεις](https://24h.com.cy/apelpistiki-i-katastasi-sta-fragmata-para-tis-vrochoptoseis-poia-i-plirotita/) — 24h
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (16 – 25 февраля 2026)

Общий запас вырос до **20.0%** (58.2 МКМ) с 17.2% (50.0 МКМ). Приток за февраль достиг 22.4 МКМ — максимум за этот период с 2021/22 г. Общий приток 25/26 — 37.3 МКМ.

**Основные изменения:**
- Арминоу упало до 41.9% (с 56.1%) после перекачки 6.32 МКМ в Курис, который поднялся до 18.0%
- Аргака подскочила до 71.8% (с 50.2%), Ксилиатос — до 61.0% (с 46.4%)
- Аспрокреммос улучшился до 21.2% (с 18.0%)

Несмотря на улучшение, запасы ниже прошлогоднего уровня (25.7%). Пересохшая почва поглощает значительную часть осадков. На 2026 год запланированы три мобильные опреснительные установки.

**В СМИ:**
- [На Кипре — сезон дождей, но засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Дожди на Кипре будут идти до конца февраля](https://evropakipr.com/istorii/dozhdi-na-kipre-budut-idti-do-konca-fevralya) — Европа Кипр
- [Водохранилища Кипра наполнились мусором вместе с водой](https://www.cyplive.com/news/news-cyprus/vmeste-s-dragocennoj-vodoj-vodohranilishcha-kipra-napolnilis-musorom.html) — CypLive
`;
  }
  return `
### Recent Changes (February 16 - 25, 2026)

Total storage rose to **20.0%** (58.2 MCM), up from 17.2% (50.0 MCM). February inflows have reached 22.4 MCM — the highest for this period since 2021/22. Total 25/26 inflow now stands at 37.3 MCM.

**Notable movements:**
- Arminou dropped to 41.9% (from 56.1%) as 6.32 MCM was transferred to Kouris, which climbed to 18.0%
- Argaka surged to 71.8% (from 50.2%), Xyliatos up to 61.0% (from 46.4%)
- Asprokremmos improved to 21.2% (from 18.0%)

Despite gains, storage remains below last year's level (25.7%). Parched soil from three years of drought absorbs much of the rainfall, limiting inflows. Three mobile desalination units are planned for deployment in 2026.

**In the media:**
- [Cyprus dam levels rise after weekend rain](https://en.sigmalive.com/cyprus-dam-levels-rise-after-weekend-rain/) — Sigmalive
- [Water levels remain critically low despite recent rains](https://cyprus-mail.com/2026/02/16/water-levels-remain-critically-low-despite-recent-rains) — Cyprus Mail
- [Pomos dam overflows amidst severe water shortages](https://www.stockwatch.com.cy/en/news/pomos-dam-overflows-amidst-severe-water-shortages-in-cyprus) — StockWatch
`;
};
