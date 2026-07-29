import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.009, totalSince: 26.129 }, storage: { current: { amount: 46.484, percentage: 40.4 }, lastYear: { amount: 17.181, percentage: 14.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.053, percentage: 23.7 }, lastYear: { amount: 2.904, percentage: 17.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.506, percentage: 18.1 }, lastYear: { amount: 2.199, percentage: 15.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.150, percentage: 33.2 }, lastYear: { amount: 4.778, percentage: 30.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.544, percentage: 55.9 }, lastYear: { amount: 1.962, percentage: 14.5 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.004, totalSince: 22.309 }, storage: { current: { amount: 2.533, percentage: 58.9 }, lastYear: { amount: 2.297, percentage: 53.4 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.646, percentage: 48.4 }, lastYear: { amount: 1.016, percentage: 29.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.352, percentage: 5.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.843, percentage: 39.8 }, lastYear: { amount: 8.717, percentage: 16.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.322, percentage: 48.5 }, lastYear: { amount: 3.181, percentage: 18.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.395, percentage: 64.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.843, percentage: 45.2 }, lastYear: { amount: 4.336, percentage: 18.1 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.721, percentage: 72.8 }, lastYear: { amount: 0.127, percentage: 12.8 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.709, percentage: 82.4 }, lastYear: { amount: 0.188, percentage: 21.9 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.245, percentage: 82.2 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.472, percentage: 87.1 }, lastYear: { amount: 0.012, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.295, percentage: 90.6 }, lastYear: { amount: 0.145, percentage: 10.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.133, percentage: 36.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.590, percentage: 92.5 }, lastYear: { amount: 0.726, percentage: 25.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.897, percentage: 94.9 }, lastYear: { amount: 1.270, percentage: 63.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.151, percentage: 93.2 }, lastYear: { amount: 2.352, percentage: 52.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 29, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.038, "Aug-Sep":0.0 }, total:115.421 },
];

export const getReportDate = (): string => "29-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 40.4% (46.5 MCM) — steady slow decline, 25.5pp above last year\'s 14.9%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 40.4% (46.5 ΕΚΜ) — αργή υποχώρηση. 25.5μ.π. πάνω από πέρυσι (14.9%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 40.4% (46.5 МКМ) — медленное снижение. +25.5пп выше прошлогодних 14.9%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.7% (4.05 MCM) — stable, well above last year\'s 17.0%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 23.7% (4.05 ΕΚΜ) — σταθερός, πάνω από πέρυσι (17.0%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.7% (4.05 МКМ) — стабильно, выше прошлогодних 17.0%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.1% (2.51 MCM) — essentially unchanged for weeks, above last year\'s 15.9%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.1% (2.51 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (15.9%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.1% (2.51 МКМ) — без изменений неделями, выше прошлогодних 15.9%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 33.2% (5.15 MCM) — easing in dry season; 2.4pp above last year\'s 30.8%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 33.2% (5.15 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.4μ.π. πάνω από πέρυσι (30.8%).',
      ru: 'Дипотамос на 33.2% (5.15 МКМ) — снижение в сухой сезон, +2.4пп выше прошлогодних 30.8%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 55.9% (7.54 MCM) — gradual summer decline, 41.4pp above last year\'s 14.5%. Highest late-July level in years.',
      el: 'Η Γερμασόγεια στο 55.9% (7.54 ΕΚΜ) — σταδιακή υποχώρηση. 41.4μ.π. πάνω από πέρυσι (14.5%).',
      ru: 'Гермасойя на 55.9% (7.54 МКМ) — постепенное летнее снижение. +41.4пп выше прошлогодних 14.5%.',
    },
    'Arminou': {
      en: 'Arminou at 58.9% (2.53 MCM) — leveled off, unchanged from two days ago. Season inflow 22.3 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.9% (2.53 ΕΚΜ) — σταθεροποιήθηκε, αμετάβλητος από πριν δύο μέρες. Εισροή σεζόν: 22.3 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.9% (2.53 МКМ) — стабилизировался, без изменений за два дня. Приток сезона: 22.3 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 48.4% (1.65 MCM) — slow drift below the 50% mark; still 18.5pp above last year\'s 29.9%.',
      el: 'Η Πολεμίδια στο 48.4% (1.65 ΕΚΜ) — αργή υποχώρηση κάτω από το 50%. 18.5μ.π. πάνω από πέρυσι (29.9%).',
      ru: 'Полемидия на 48.4% (1.65 МКМ) — медленное снижение ниже отметки 50%; +18.5пп выше прошлогодних 29.9%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.2%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.2%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.2%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.8% (20.84 MCM) — slow drawdown, 23.2pp above last year\'s 16.6%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.8% (20.84 ΕΚΜ) — αργή υποχώρηση, 23.2μ.π. πάνω από πέρυσι (16.6%).',
      ru: 'Аспрокреммос на 39.8% (20.84 МКМ) — медленное снижение, +23.2пп выше прошлогодних 16.6%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.5% (8.32 MCM) — just below the 50% threshold, still 30.0pp above last year\'s 18.5%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 48.5% (8.32 ΕΚΜ) — λίγο κάτω από το 50%, 30.0μ.π. πάνω από πέρυσι (18.5%).',
      ru: 'Каннавиу на 48.5% (8.32 МКМ) — чуть ниже границы 50%, +30.0пп выше прошлогодних 18.5%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 64.0% (1.40 MCM) — continued easing from its summer peak, its steepest 2-day drop in weeks. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 64.0% (1.40 ΕΚΜ) — συνεχίζει να υποχωρεί από την κορύφωση του καλοκαιριού. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 64.0% (1.40 МКМ) — продолжает снижаться от летнего пика. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 45.2% (10.84 MCM) — drifting steadily lower through the dry season; still 27.1pp above last year\'s 18.1%.',
      el: 'Ο Εύρετου στο 45.2% (10.84 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 27.1μ.π. πάνω από πέρυσι (18.1%).',
      ru: 'Эвретоу на 45.2% (10.84 МКМ) — устойчивое снижение в сухой сезон. +27.1пп выше прошлогодних 18.1%.',
    },
    'Argaka': {
      en: 'Argaka at 72.8% (0.72 MCM) — continued steep decline. Up from 12.8% last year — a 5.7× year-over-year recovery.',
      el: 'Η Αργάκα στο 72.8% (0.72 ΕΚΜ) — συνεχίζεται η απότομη πτώση. Από 12.8% πέρυσι — 5.7× ανάκαμψη.',
      ru: 'Аргака на 72.8% (0.72 МКМ) — продолжается резкое снижение. Год назад 12.8% — 5.7-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 82.4% (0.71 MCM) — easing back from near-full. Up from 21.9% last year — more than 3.7× year over year.',
      el: 'Ο Πόμος στο 82.4% (0.71 ΕΚΜ) — υποχωρεί από το σχεδόν πλήρες. Από 21.9% πέρυσι — πάνω από 3.7× ανάκαμψη.',
      ru: 'Помос на 82.4% (0.71 МКМ) — отступает от почти полного уровня. Год назад 21.9% — рост более чем в 3.7×.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 82.2% (0.25 MCM) — easing after weeks near the top, its steepest 2-day drop recently. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 82.2% (0.25 ΕΚΜ) — υποχωρεί μετά από εβδομάδες κοντά στην κορυφή. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 82.2% (0.25 МКМ) — снижается после недель у максимума. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 87.1% (1.47 MCM) — continued slow decline below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 87.1% (1.47 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 87.1% (1.47 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 90.6% (1.30 MCM) — very slow decline continues. Was 10.1% last year — an 8.9× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 90.6% (1.30 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 10.1% πέρυσι — 8.9× ανάκαμψη.',
      ru: 'Ксилиатос на 90.6% (1.30 МКМ) — очень медленное снижение продолжается. Год назад 10.1% — восстановление в 8.9×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 36.6% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 36.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 36.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 92.5% (2.59 MCM) — easing slowly from full. Was 25.9% last year — a 3.6× year-over-year recovery.',
      el: 'Ο Ταμασός στο 92.5% (2.59 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 25.9% πέρυσι — 3.6× ανάκαμψη.',
      ru: 'Тамассос на 92.5% (2.59 МКМ) — медленное снижение от полного уровня. Год назад 25.9% — восстановление в 3.6×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 94.9% (1.90 MCM) — holding steady near full through the dry season. Up from 63.5% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 94.9% (1.90 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 63.5% πέρυσι.',
      ru: 'Клиру-Малунта на 94.9% (1.90 МКМ) — стабильно у полного уровня. Рост с 63.5% год назад.',
    },
    'Solea': {
      en: 'Solea at 93.2% (4.15 MCM) — holding near full as dry season progresses. Up from 52.8% last year — 1.76× year-over-year improvement.',
      el: 'Η Σολέα στο 93.2% (4.15 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 52.8% πέρυσι — 1.76× βελτίωση.',
      ru: 'Солеа на 93.2% (4.15 МКМ) — удерживается вблизи полного уровня. Рост с 52.8% год назад — улучшение в 1.76×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 — 29 Ιουλίου 2026)

Δελτίο Τετάρτης: συνολική αποθήκευση **40.0%** (116.3 ΕΚΜ) — από 40.6% στις 20 Ιουλίου, μια απώλεια 1.85 ΕΚΜ σε εννέα ημέρες. Ο [Αρμίνου](/el/dam/arminou/) σταθεροποιήθηκε στο **58.9%** μετά από εβδομάδες ανόδου, σπάζοντας το σερί ανόδου του. Η μεγαλύτερη πτώση της περιόδου καταγράφηκε στην [Αργάκα](/el/dam/argaka/) (-9.1μ.π. σε 9 μέρες), ακολουθούμενη από τον [Μαυροκόλυμπο](/el/dam/mavrokolympos/) (-5.2μ.π.). Το χάσμα με πέρυσι κρατά στο **+22.9μ.π.** Εισροή σεζόν 25/26: **115.4 ΕΚΜ** (Ιούλιος: 1.04 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 20 Ιουλίου):**
- [Αργάκα](/el/dam/argaka/) **72.8%** (-9.1μ.π.) — η μεγαλύτερη πτώση της περιόδου, συνεχίζεται η απότομη υποχώρηση
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **64.0%** (-5.2μ.π.) — κάτω από το 65%
- [Αγία Μαρίνα](/el/dam/agia-marina/) **82.2%** (-4.0μ.π.) — σταθερή υποχώρηση
- [Αρμίνου](/el/dam/arminou/) **58.9%** — σταθεροποιήθηκε, έσπασε το σερί ανόδου δύο εβδομάδων
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.9%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 — 29 июля 2026)

Бюллетень среды: общий запас **40.0%** (116.3 МКМ) — против 40.6% на 20 июля, потеря 1.85 МКМ за девять дней. [Арминоу](/ru/dam/arminou/) стабилизировался на **58.9%** после недель роста, прервав серию подъёма. Крупнейшее падение периода зафиксировано у [Аргаки](/ru/dam/argaka/) (-9.1пп за 9 дней), за ней [Мавроколимпос](/ru/dam/mavrokolympos/) (-5.2пп). Разрыв с прошлым годом держится на **+22.9пп**. Приток сезона 25/26: **115.4 МКМ** (июль: 1.04 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за 9 дней с 20 июля):**
- [Аргака](/ru/dam/argaka/) **72.8%** (-9.1пп) — крупнейшее падение периода, продолжается резкое снижение
- [Мавроколимпос](/ru/dam/mavrokolympos/) **64.0%** (-5.2пп) — опустился ниже 65%
- [Агия Марина](/ru/dam/agia-marina/) **82.2%** (-4.0пп) — устойчивое снижение
- [Арминоу](/ru/dam/arminou/) **58.9%** — стабилизировался, прервав двухнедельную серию роста
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (July 20 — July 29, 2026)

Wednesday bulletin: total storage at **40.0%** (116.3 MCM) — down from 40.6% on July 20, a loss of 1.85 MCM over nine days. [Arminou](/dam/arminou/) leveled off at **58.9%**, breaking its two-week rising streak. The largest decline of the period came from [Argaka](/dam/argaka/) (-9.1pp over 9 days), followed by [Mavrokolympos](/dam/mavrokolympos/) (-5.2pp). The gap over last year holds at **+22.9pp**. Season total inflow: **115.4 MCM** (July so far: 1.04 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. July 20):**
- [Argaka](/dam/argaka/) **72.8%** (-9.1pp) — the largest decline of the period, continuing its steep slide
- [Mavrokolympos](/dam/mavrokolympos/) **64.0%** (-5.2pp) — dropped below 65%
- [Agia Marina](/dam/agia-marina/) **82.2%** (-4.0pp) — steady easing
- [Arminou](/dam/arminou/) **58.9%** — leveled off, breaking its two-week rising streak
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
