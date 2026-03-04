import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 4, 2026 (parsed from 04-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.07, totalSince: 7.706 }, storage: { current: { amount: 21.974, percentage: 19.1 }, lastYear: { amount: 24.157, percentage: 21.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.003, totalSince: 0.672 }, storage: { current: { amount: 1.398, percentage: 8.2 }, lastYear: { amount: 4.71, percentage: 27.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 0.434 }, storage: { current: { amount: 1.64, percentage: 11.8 }, lastYear: { amount: 4.5, percentage: 32.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.009, totalSince: 1.052 }, storage: { current: { amount: 3.606, percentage: 23.3 }, lastYear: { amount: 5.382, percentage: 34.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.015, totalSince: 1.745 }, storage: { current: { amount: 1.598, percentage: 11.8 }, lastYear: { amount: 3.727, percentage: 27.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.06, totalSince: 7.446 }, storage: { current: { amount: 1.608, percentage: 37.4 }, lastYear: { amount: 2.37, percentage: 55.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 0.635 }, storage: { current: { amount: 1.337, percentage: 39.3 }, lastYear: { amount: 1.382, percentage: 40.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.517, percentage: 22.3 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.046, totalSince: 8.33 }, storage: { current: { amount: 11.404, percentage: 21.8 }, lastYear: { amount: 13.985, percentage: 26.7 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.023, totalSince: 3.988 }, storage: { current: { amount: 4.543, percentage: 26.5 }, lastYear: { amount: 4.757, percentage: 27.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.633 }, storage: { current: { amount: 1.339, percentage: 61.4 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.038, totalSince: 4.063 }, storage: { current: { amount: 6.257, percentage: 26.1 }, lastYear: { amount: 6.201, percentage: 25.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 0.722 }, storage: { current: { amount: 0.713, percentage: 72.0 }, lastYear: { amount: 0.347, percentage: 35.1 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.001, totalSince: 0.784 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.35, percentage: 40.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.152 }, storage: { current: { amount: 0.207, percentage: 69.5 }, lastYear: { amount: 0.15, percentage: 50.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.004, totalSince: 0.47 }, storage: { current: { amount: 0.471, percentage: 27.9 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.004, totalSince: 0.908 }, storage: { current: { amount: 0.925, percentage: 64.7 }, lastYear: { amount: 0.327, percentage: 22.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.29, percentage: 79.9 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.003, totalSince: 1.013 }, storage: { current: { amount: 1.394, percentage: 49.8 }, lastYear: { amount: 1.063, percentage: 38.0 } }, maxStorage: { amount: 1.069, date: "12/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.018 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.46, percentage: 73.0 } }, maxStorage: { amount: 1.473, date: "26/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.057, totalSince: 2.429 }, storage: { current: { amount: 4.247, percentage: 95.4 }, lastYear: { amount: 2.982, percentage: 67.0 } }, maxStorage: { amount: 3.012, date: "12/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:0.982, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:40.051 },
];

export const getReportDate = (): string => "04-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 7.08 };

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (24 Φεβρουαρίου — 4 Μαρτίου 2026)

Συνολική αποθήκευση **20.8%** (60.4 ΕΚΜ), αύξηση από 20.0% (58.2 ΕΚΜ) στις 24/2. Οι εισροές Μαρτίου ξεκίνησαν με 0.98 ΕΚΜ. Συνολική εισροή 25/26 στα 40.1 ΕΚΜ.

**Αξιοσημείωτα:**
- Εύρετου ξεπέρασε το ετήσιο ρεκόρ — 26.1% (6.257 ΕΚΜ vs max 6.201)
- Μεταφορά νερού Αρμίνου→Κούρης αυξήθηκε σε 7.08 ΕΚΜ
- Πόμος, Καλοπαναγιώτης και Κληρού-Μαλούντα παραμένουν στο 100%

Παρά τη σταθερή αύξηση, τα αποθέματα υπολείπονται του περσινού (25.5%). Η μείωση υδροδότησης 10% παραμένει σε ισχύ.

**Στα μέσα:**
- [Με περίπου κανονική βροχόπτωση έκλεισε ο Φεβρουάριος — Πληρότητα φραγμάτων](https://kitasweather.com/news/forecasts/me-peripou-kanoniki-vroxoptosi-ekleise-o-fevrouarios-xartis-plirotita-fragmaton-se-sxesi-me-persi/) — KitasWeather
- [Αυτή είναι η πληρότητα του νερού στα φράγματα](https://www.sigmalive.com/news/local/1301318/auti-inai-i-plirotita-toy-nerou-sta-fraghmta-poso-auksithike-meta-tis-vrokhes) — SigmaLive
- [«Ψαλίδι» στο νερό: Πώς αποφασίστηκε η μείωση 10% στην υδροδότηση](https://www.alphanews.live/cyprus/apogoiteftiki-i-eisroi-nerou-sta-fragmata-anisychia-para-tin-afximeni-plirotita/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (24 февраля — 4 марта 2026)

Общий запас вырос до **20.8%** (60.4 МКМ), с 20.0% (58.2 МКМ) на 24/2. Мартовский приток начался с 0.98 МКМ. Общий приток сезона 25/26 достиг 40.1 МКМ.

**Основные изменения:**
- Эвретоу превысил годовой максимум — 26.1% (6.257 МКМ при макс. 6.201)
- Перекачка Арминоу→Курис увеличилась до 7.08 МКМ
- Помос, Калопанайотис и Клиру-Малунта по-прежнему на 100%

Несмотря на рост, запасы ниже прошлогодних (25.5%). Сокращение водоснабжения на 10% остаётся в силе.

**В СМИ:**
- [На Кипре — сезон дождей, но засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [В водохранилищах Кипра скоро останется только грязь](https://evropakipr.com/istorii/v-vodohranilishchah-kipra-skoro-ostanetsya-tolko-gryaz) — Европа Кипр
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (February 24 — March 4, 2026)

Total storage at **20.8%** (60.4 MCM), up from 20.0% (58.2 MCM) on Feb 24. March inflows have begun with 0.98 MCM. Total 25/26 inflow now at 40.1 MCM.

**Notable movements:**
- Evretou surpassed its annual max — 26.1% (6.257 MCM vs max 6.201)
- Arminou→Kouris transfers increased to 7.08 MCM since October
- Pomos, Kalopanagiotis and Klirou-Malounta remain at 100%

Despite steady gains, storage remains below last year's level (25.5%). The 10% island-wide water supply cut remains in effect.

**In the media:**
- [Cyprus drought pushes Kouris reservoir to historic low](https://www.muser.press/2026/02/25/cyprus-drought-kouris-historic-low/) — Muser Press
- [Weekend rain very beneficial for Cyprus dams](https://www.parikiaki.com/2026/02/weekend-rain-very-beneficial-for-cyprus-dams-water-development-department-says/) — Parikiaki
- [Cyprus confronts a record drought as reservoirs run dry](https://smartwatermagazine.com/news/smart-water-magazine/cyprus-confronts-a-record-drought-reservoirs-run-dry) — Smart Water Magazine
`;
};
