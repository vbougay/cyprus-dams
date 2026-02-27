import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for February 27, 2026 (parsed from 27-FEB-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.095, totalSince: 7.251 }, storage: { current: { amount: 21.09, percentage: 18.3 }, lastYear: { amount: 24.247, percentage: 21.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.023, totalSince: 0.649 }, storage: { current: { amount: 1.446, percentage: 8.5 }, lastYear: { amount: 4.69, percentage: 27.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 0.419 }, storage: { current: { amount: 1.714, percentage: 12.4 }, lastYear: { amount: 4.601, percentage: 33.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.013, totalSince: 0.985 }, storage: { current: { amount: 3.491, percentage: 22.5 }, lastYear: { amount: 5.343, percentage: 34.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.02, totalSince: 1.55 }, storage: { current: { amount: 1.442, percentage: 10.7 }, lastYear: { amount: 3.727, percentage: 27.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.108, totalSince: 7.074 }, storage: { current: { amount: 1.756, percentage: 40.8 }, lastYear: { amount: 2.316, percentage: 53.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.009, totalSince: 0.634 }, storage: { current: { amount: 1.361, percentage: 40.0 }, lastYear: { amount: 1.388, percentage: 40.8 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.139, percentage: 2.0 }, lastYear: { amount: 1.562, percentage: 23.0 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.089, totalSince: 8.095 }, storage: { current: { amount: 11.244, percentage: 21.5 }, lastYear: { amount: 14.114, percentage: 26.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.048, totalSince: 3.825 }, storage: { current: { amount: 4.446, percentage: 25.9 }, lastYear: { amount: 4.79, percentage: 27.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.004, totalSince: 0.624 }, storage: { current: { amount: 1.322, percentage: 60.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.051, totalSince: 3.87 }, storage: { current: { amount: 6.075, percentage: 25.3 }, lastYear: { amount: 6.191, percentage: 25.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.001, totalSince: 0.717 }, storage: { current: { amount: 0.717, percentage: 72.4 }, lastYear: { amount: 0.34, percentage: 34.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.783 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.343, percentage: 39.9 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.148 }, storage: { current: { amount: 0.203, percentage: 68.1 }, lastYear: { amount: 0.148, percentage: 49.7 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.004, totalSince: 0.439 }, storage: { current: { amount: 0.44, percentage: 26.0 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.011, totalSince: 0.874 }, storage: { current: { amount: 0.891, percentage: 62.3 }, lastYear: { amount: 0.323, percentage: 22.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.287, percentage: 79.1 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 0.982 }, storage: { current: { amount: 1.368, percentage: 48.9 }, lastYear: { amount: 1.055, percentage: 37.7 } }, maxStorage: { amount: 1.069, date: "12/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.013 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.45, percentage: 72.5 } }, maxStorage: { amount: 1.473, date: "26/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.043, totalSince: 2.249 }, storage: { current: { amount: 4.067, percentage: 91.3 }, lastYear: { amount: 2.955, percentage: 66.3 } }, maxStorage: { amount: 3.012, date: "12/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:23.38, March:0.0, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:38.248 },
];

export const getReportDate = (): string => "27-FEB-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 6.56 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 - 27 Φεβρουαρίου 2026)

Συνολική αποθήκευση **20.3%** (59.0 ΕΚΜ), αύξηση από 18.7% (54.5 ΕΚΜ). Οι εισροές Φεβρουαρίου έφτασαν τα 23.4 ΕΚΜ — οι υψηλότερες αυτής της περιόδου από το 2021/22. Συνολική εισροή 25/26 στα 38.2 ΕΚΜ.

**Αξιοσημείωτα:**
- Το Κούρη ανέβηκε στο 18.3% (από 16.8%) — σταθερή αύξηση χάρη στις μεταφορές από Αρμίνου (6.56 ΕΚΜ)
- Ξυλιάτος στο 62.3% (από 54.7%), Ασπρόκρεμμος στο 21.5% (από 19.9%)
- Πόμος και Καλοπαναγιώτης στο 100%, Κληρού-Μαλούντα στο 100%

Παρά τη βελτίωση, τα αποθέματα παραμένουν κάτω από τα περσινά (25.6%). Η κυβέρνηση προχωρά με σχέδια για νέες μονάδες αφαλάτωσης — 14 κινητές μονάδες αναμένεται να λειτουργήσουν έως τέλος 2026.

**Στα μέσα:**
- [Έσωσε τη χρονιά το εντυπωσιακό «ξύπνημα» των ποταμών;](https://www.24sports.com.cy/gr/news/nea/koinonia/esose-ti-xronia-to-entyposiako-xypnima-ton-potamwn) — 24Sports
- [Το νερό χάνεται στο έδαφος, όχι στα φράγματα](https://dialogos.com.cy/to-nero-chanetai-sto-edafos-ochi-sta-fragmata/) — Dialogos
- [Οριακά απελπιστική η κατάσταση στα φράγματα](https://www.tothemaonline.com/Article/420932/oriaka-apelpistikh-h-katastash-sta-fragmata---o-heiroteros-febroyarios-thn-teleytaia-dekaetia---yparhei-kindynos-gia-perikopes) — ToThemaOnline
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 – 27 февраля 2026)

Общий запас вырос до **20.3%** (59.0 МКМ) с 18.7% (54.5 МКМ). Приток за февраль достиг 23.4 МКМ — максимум за этот период с 2021/22 г. Общий приток 25/26 — 38.2 МКМ.

**Основные изменения:**
- Курис поднялся до 18.3% (с 16.8%) — устойчивый рост благодаря перекачке из Арминоу (6.56 МКМ)
- Ксилиатос вырос до 62.3% (с 54.7%), Аспрокреммос до 21.5% (с 19.9%)
- Помос и Калопанайотис на 100%, Клиру-Малунта на 100%

Несмотря на улучшение, запасы ниже прошлогоднего уровня (25.6%). Правительство продвигает планы по установке 14 мобильных опреснительных установок к концу 2026 года.

**В СМИ:**
- [Кипр на грани засухи](https://vkcyprus.com/cyprus/1467412346435-kipr-na-grani-zasuhi/) — Вестник Кипра
- [В водохранилищах Кипра скоро останется только грязь](https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz) — Европа Кипр
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (February 20 - 27, 2026)

Total storage rose to **20.3%** (59.0 MCM), up from 18.7% (54.5 MCM). February inflows have reached 23.4 MCM — the highest for this period since 2021/22. Total 25/26 inflow now stands at 38.2 MCM.

**Notable movements:**
- Kouris climbed to 18.3% (from 16.8%) — steady gains from Arminou transfers (6.56 MCM since October)
- Xyliatos up to 62.3% (from 54.7%), Asprokremmos to 21.5% (from 19.9%)
- Pomos and Kalopanagiotis at 100%, Klirou-Malounta at 100%

Despite gains, storage remains well below last year's level (25.6%). The government plans to deploy 14 mobile desalination units by year-end, donated by the UAE, boosting daily production by ~15,000 m³.

**In the media:**
- [Cyprus drought pushes Kouris reservoir to historic low](https://www.muser.press/2026/02/25/cyprus-drought-kouris-historic-low/) — Muser Press
- [Weekend rain very beneficial for Cyprus dams](https://www.parikiaki.com/2026/02/weekend-rain-very-beneficial-for-cyprus-dams-water-development-department-says/) — Parikiaki
- [Storage capacity in dams reaches 19.8 per cent](https://cyprus-mail.com/2026/02/24/storage-capacity-in-dams-reaches-19-8-per-cent) — Cyprus Mail
`;
};
