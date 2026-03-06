import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 6, 2026 (parsed from 06-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.099, totalSince: 7.887 }, storage: { current: { amount: 22.156, percentage: 19.3 }, lastYear: { amount: 24.081, percentage: 20.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.003, totalSince: 0.68 }, storage: { current: { amount: 1.375, percentage: 8.0 }, lastYear: { amount: 4.718, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 0.439 }, storage: { current: { amount: 1.611, percentage: 11.6 }, lastYear: { amount: 4.465, percentage: 32.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.006, totalSince: 1.064 }, storage: { current: { amount: 3.636, percentage: 23.5 }, lastYear: { amount: 5.411, percentage: 34.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.008, totalSince: 1.764 }, storage: { current: { amount: 1.601, percentage: 11.9 }, lastYear: { amount: 3.717, percentage: 27.5 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.054, totalSince: 7.556 }, storage: { current: { amount: 1.67, percentage: 38.8 }, lastYear: { amount: 2.387, percentage: 55.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.635 }, storage: { current: { amount: 1.331, percentage: 39.1 }, lastYear: { amount: 1.377, percentage: 40.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.466, percentage: 21.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.04, totalSince: 8.415 }, storage: { current: { amount: 11.464, percentage: 21.9 }, lastYear: { amount: 13.929, percentage: 26.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.023, totalSince: 4.035 }, storage: { current: { amount: 4.567, percentage: 26.6 }, lastYear: { amount: 4.741, percentage: 27.6 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.637 }, storage: { current: { amount: 1.341, percentage: 61.5 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.027, totalSince: 4.112 }, storage: { current: { amount: 6.302, percentage: 26.3 }, lastYear: { amount: 6.201, percentage: 25.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.005, totalSince: 0.742 }, storage: { current: { amount: 0.733, percentage: 74.0 }, lastYear: { amount: 0.349, percentage: 35.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.784 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.351, percentage: 40.8 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.156 }, storage: { current: { amount: 0.211, percentage: 70.8 }, lastYear: { amount: 0.15, percentage: 50.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.004, totalSince: 0.478 }, storage: { current: { amount: 0.479, percentage: 28.3 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.004, totalSince: 0.916 }, storage: { current: { amount: 0.933, percentage: 65.2 }, lastYear: { amount: 0.327, percentage: 22.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.294, percentage: 81.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 1.015 }, storage: { current: { amount: 1.394, percentage: 49.8 }, lastYear: { amount: 1.063, percentage: 38.0 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.02 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.46, percentage: 73.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.04, totalSince: 2.511 }, storage: { current: { amount: 4.329, percentage: 97.2 }, lastYear: { amount: 2.99, percentage: 67.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:1.542, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:40.611 },
];

export const getReportDate = (): string => "06-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 7.13 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (25 Φεβρουαρίου — 6 Μαρτίου 2026)

Συνολική αποθήκευση **20.9%** (60.8 ΕΚΜ), αύξηση από 19.5% (56.8 ΕΚΜ) στις 25/2. Οι εισροές Μαρτίου φτάνουν τα 1.54 ΕΚΜ. Συνολική εισροή 25/26 στα 40.6 ΕΚΜ — υπερδιπλάσια σε σχέση με πέρυσι (18.7 ΕΚΜ).

**Αξιοσημείωτα:**
- Κούρης +1.46 ΕΚΜ σε 10 ημέρες (19.3%) — μεγαλύτερη αύξηση στο νότο
- Εύρετου ξεπερνά και πάλι ετήσιο ρεκόρ — 26.3% (6.302 ΕΚΜ vs max 6.201)
- Μεταφορά Αρμίνου→Κούρης αυξήθηκε σε 7.13 ΕΚΜ
- Σολιά ξεπέρασε ετήσιο ρεκόρ — 97.2% (4.329 ΕΚΜ vs max 3.012)

Τα αποθέματα εξακολουθούν να υπολείπονται του περσινού (25.5%). Η μείωση υδροδότησης 10% παραμένει σε ισχύ.

**Στα μέσα:**
- [Δορυφορική εικόνα αποτυπώνει την τραγική κατάσταση των φραγμάτων στην Κύπρο](https://www.sigmalive.com/news/local/1304891/doriforiki-eikona-apotipwnei-tin-traghiki-katastasi-ton-fraghmaton-stin-kypro) — SigmaLive
- [Σημαντική η συνολική εισροή νερού στα φράγματα — Ξεπέρασε τα 9 ΕΚΜ](https://kitasweather.com/news/fragmata-vroxoptosi/simantiki-i-sinoliki-eisroi-nerou-sta-fragmata-to-telefteo-triimero-kseperase-ta-9-ekm-nerou/) — KitasWeather
- [Γιατί ενώ βρέχει δεν γεμίζουν τα φράγματα — Δεν αποκλείεται η σπορά νεφών](https://www.sigmalive.com/news/all/1304121/giati-enw-vrekhei-den-ghemizoyn-ta-fraghmata-den-apoklietai-i-spora-nefwn) — SigmaLive
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (25 февраля — 6 марта 2026)

Общий запас вырос до **20.9%** (60.8 МКМ), с 19.5% (56.8 МКМ) на 25/2. Мартовский приток составил 1.54 МКМ. Общий приток сезона 25/26 — 40.6 МКМ, более чем вдвое больше прошлого года (18.7 МКМ).

**Основные изменения:**
- Курис +1.46 МКМ за 10 дней (19.3%) — наибольший рост на юге
- Эвретоу снова превысил годовой максимум — 26.3% (6.302 МКМ при макс. 6.201)
- Перекачка Арминоу→Курис достигла 7.13 МКМ
- Солеа превысила годовой рекорд — 97.2% (4.329 МКМ при макс. 3.012)

Несмотря на рост, запасы ниже прошлогодних (25.5%). Сокращение водоснабжения на 10% остаётся в силе.

**В СМИ:**
- [Крупнейшее водохранилище Кипра Курис заполнено на 12,3%](https://evropakipr.com/istorii/krupneyshee-vodohranilishche-kipra-kuris-zapolneno-na-123-ved-byli-gody-kogda-cerkov) — Европа Кипр
- [Беречь каждую каплю воды — какие меры в борьбе с засухой](https://evropakipr.com/novosti/berech-kazhduyu-kaplyu-vody-kakie-mery-v-borbe-s-zasuhoy-pomimo-prizyvov-k-ekonomii) — Европа Кипр
- [Засуха накрыла Кипр — жителей попросили включать воду только на две минуты](https://www.vokrugsveta.ru/news/zasukha-nakryla-kipr-zhitelei-poprosili-vklyuchat-vodu-tolko-na-dve-minuty-v-den-id6839742/) — Вокруг Света
`;
  }
  return `
### Recent Changes (February 25 — March 6, 2026)

Total storage at **20.9%** (60.8 MCM), up from 19.5% (56.8 MCM) on Feb 25. March inflows at 1.54 MCM so far. Total 25/26 inflow now 40.6 MCM — more than double last year's full season (18.7 MCM).

**Notable movements:**
- Kouris gained +1.46 MCM in 10 days (19.3%) — largest rise in the south
- Evretou again exceeds annual max — 26.3% (6.302 MCM vs max 6.201)
- Arminou→Kouris transfers reached 7.13 MCM since October
- Solea surpassed annual max — 97.2% (4.329 MCM vs max 3.012)

Despite steady gains, storage remains below last year's level (25.5%). The 10% island-wide water supply cut remains in effect.

**In the media:**
- [Severe drought in Cyprus — Copernicus satellite imagery](https://www.copernicus.eu/en/media/image-day-gallery/severe-drought-cyprus-february-2026) — Copernicus
- [Cyprus deploys mobile desalination units from UAE](https://smartwatermagazine.com/news/smart-water-magazine/cyprus-deploys-mobile-desalination-units-uae-avert-water-crisis) — Smart Water Magazine
- [Cyprus warns of possible summer water cuts as reserves fall](https://famagusta-gazette.com/cyprus-warns-of-possible-summer-water-cuts-as-reserves-fall/) — Famagusta Gazette
`;
};
