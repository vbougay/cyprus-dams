import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 2, 2026 (parsed from 02-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.088, totalSince: 7.544 }, storage: { current: { amount: 21.692, percentage: 18.9 }, lastYear: { amount: 24.187, percentage: 21.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.004, totalSince: 0.666 }, storage: { current: { amount: 1.421, percentage: 8.3 }, lastYear: { amount: 4.702, percentage: 27.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.003, totalSince: 0.431 }, storage: { current: { amount: 1.667, percentage: 12.0 }, lastYear: { amount: 4.539, percentage: 32.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.011, totalSince: 1.034 }, storage: { current: { amount: 3.565, percentage: 23.0 }, lastYear: { amount: 5.363, percentage: 34.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.054, totalSince: 1.710 }, storage: { current: { amount: 1.579, percentage: 11.7 }, lastYear: { amount: 3.72, percentage: 27.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.071, totalSince: 7.310 }, storage: { current: { amount: 1.62, percentage: 37.7 }, lastYear: { amount: 2.343, percentage: 54.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.635 }, storage: { current: { amount: 1.361, percentage: 40.0 }, lastYear: { amount: 1.385, percentage: 40.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.508, percentage: 22.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.046, totalSince: 8.234 }, storage: { current: { amount: 11.334, percentage: 21.6 }, lastYear: { amount: 14.038, percentage: 26.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.037, totalSince: 3.936 }, storage: { current: { amount: 4.516, percentage: 26.3 }, lastYear: { amount: 4.768, percentage: 27.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.630 }, storage: { current: { amount: 1.336, percentage: 61.3 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.038, totalSince: 3.987 }, storage: { current: { amount: 6.186, percentage: 25.8 }, lastYear: { amount: 6.201, percentage: 25.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.002, totalSince: 0.721 }, storage: { current: { amount: 0.713, percentage: 72.0 }, lastYear: { amount: 0.344, percentage: 34.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.783 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.348, percentage: 40.5 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.151 }, storage: { current: { amount: 0.206, percentage: 69.1 }, lastYear: { amount: 0.149, percentage: 50.0 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.008, totalSince: 0.462 }, storage: { current: { amount: 0.463, percentage: 27.4 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.008, totalSince: 0.897 }, storage: { current: { amount: 0.914, percentage: 63.9 }, lastYear: { amount: 0.326, percentage: 22.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.289, percentage: 79.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.008, totalSince: 1.007 }, storage: { current: { amount: 1.39, percentage: 49.6 }, lastYear: { amount: 1.06, percentage: 37.9 } }, maxStorage: { amount: 1.069, date: "12/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.016 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.455, percentage: 72.8 } }, maxStorage: { amount: 1.473, date: "26/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.029, totalSince: 2.346 }, storage: { current: { amount: 4.165, percentage: 93.5 }, lastYear: { amount: 2.971, percentage: 66.7 } }, maxStorage: { amount: 3.012, date: "12/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:0.373, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:39.442 },
];

export const getReportDate = (): string => "02-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 6.92 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 Φεβρουαρίου - 2 Μαρτίου 2026)

Συνολική αποθήκευση **20.6%** (59.9 ΕΚΜ), αύξηση από 18.7% (54.5 ΕΚΜ). Ο Φεβρουάριος ολοκληρώθηκε με 24.2 ΕΚΜ εισροών — ο υψηλότερος Φεβρουάριος από το 2021/22. Συνολική εισροή 25/26 στα 39.4 ΕΚΜ, ξεπερνώντας ήδη ολόκληρο το 24/25 (18.7 ΕΚΜ).

**Αξιοσημείωτα:**
- Κούρης στο 18.9% (από 16.8% στις 20/2) — μεταφορές 6.92 ΕΚΜ από Αρμίνου
- Εύρετου πλησιάζει ετήσιο ρεκόρ στο 25.8% (6.186 ΕΚΜ vs max 6.201)
- Πόμος, Καλοπαναγιώτης και Κληρού-Μαλούντα στο 100%

Παρά τη βελτίωση, τα αποθέματα υπολείπονται του περσινού (25.5%). Η κυβέρνηση προχωρά σε μείωση υδροδότησης 10% σε ολόκληρο το νησί.

**Στα μέσα:**
- [Έσωσε τη χρονιά το εντυπωσιακό «ξύπνημα» των ποταμών;](https://www.24sports.com.cy/gr/news/nea/koinonia/esose-ti-xronia-to-entyposiako-xypnima-ton-potamwn) — 24Sports
- [«Ψαλίδι» στο νερό: Πώς αποφασίστηκε η μείωση 10% στην υδροδότηση](https://www.alphanews.live/cyprus/psalidi-sto-nero-pos-apofasistike-i-meiosi-10-stin-ydrodotisi/) — AlphaNews
- [Έρχονται αυξήσεις στο νερό; Το δίλημμα του 2026](https://www.tothemaonline.com/Article/447937/erhontai-ayxhseis-sto-nero-to-dilhmma-toy-2026-kai-to-stoihhma-ths-afalatwshs) — ToThemaOnline
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 февраля — 2 марта 2026)

Общий запас вырос до **20.6%** (59.9 МКМ) с 18.7% (54.5 МКМ). Февраль завершился с рекордным за последние 4 года притоком — 24.2 МКМ. Общий приток 25/26 достиг 39.4 МКМ, уже превысив весь сезон 24/25 (18.7 МКМ).

**Основные изменения:**
- Курис поднялся до 18.9% (с 16.8% на 20/2) — перекачка из Арминоу составила 6.92 МКМ
- Эвретоу приближается к годовому максимуму — 25.8% (6.186 МКМ при макс. 6.201)
- Помос, Калопанайотис и Клиру-Малунта на 100%

Несмотря на улучшение, запасы ниже прошлогодних (25.5%). Правительство ввело сокращение водоснабжения на 10% по всему острову.

**В СМИ:**
- [Дожди идут, но воды по-прежнему мало](https://vkcyprus.com/society/1467412349435-dozhdi-idut-no-vody-po-prezhnemu-malo/) — Вестник Кипра
- [На Кипре — сезон дождей, но засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (February 20 — March 2, 2026)

Total storage rose to **20.6%** (59.9 MCM), up from 18.7% (54.5 MCM). February closed with 24.2 MCM of inflows — the highest February since 2021/22. Total 25/26 inflow now at 39.4 MCM, already surpassing the entire 24/25 season (18.7 MCM).

**Notable movements:**
- Kouris climbed to 18.9% (from 16.8% on Feb 20) — Arminou transfers reached 6.92 MCM since October
- Evretou approaching annual max at 25.8% (6.186 MCM vs max 6.201)
- Pomos, Kalopanagiotis and Klirou-Malounta at 100%

Despite gains, storage remains below last year's level (25.5%). The government has implemented a 10% island-wide water supply cut.

**In the media:**
- [Weekend rain very beneficial for Cyprus dams](https://www.parikiaki.com/2026/02/weekend-rain-very-beneficial-for-cyprus-dams-water-development-department-says/) — Parikiaki
- [Storage capacity in dams reaches 19.8 per cent](https://cyprus-mail.com/2026/02/24/storage-capacity-in-dams-reaches-19-8-per-cent) — Cyprus Mail
- [Cyprus confronts a record drought as reservoirs run dry](https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry) — Smart Water Magazine
`;
};
