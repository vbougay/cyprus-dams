import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.015, totalSince: 26.164 }, storage: { current: { amount: 46.392, percentage: 40.3 }, lastYear: { amount: 17.003, percentage: 14.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.046, percentage: 23.7 }, lastYear: { amount: 2.893, percentage: 16.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.502, percentage: 18.1 }, lastYear: { amount: 2.195, percentage: 15.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.102, percentage: 32.9 }, lastYear: { amount: 4.733, percentage: 30.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.518, percentage: 55.7 }, lastYear: { amount: 1.927, percentage: 14.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.004, totalSince: 22.319 }, storage: { current: { amount: 2.535, percentage: 59.0 }, lastYear: { amount: 2.284, percentage: 53.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.639, percentage: 48.2 }, lastYear: { amount: 1.011, percentage: 29.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.349, percentage: 5.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.772, percentage: 39.7 }, lastYear: { amount: 8.622, percentage: 16.5 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.290, percentage: 48.3 }, lastYear: { amount: 3.149, percentage: 18.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.374, percentage: 63.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.786, percentage: 44.9 }, lastYear: { amount: 4.296, percentage: 17.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.716, percentage: 72.3 }, lastYear: { amount: 0.123, percentage: 12.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.697, percentage: 81.0 }, lastYear: { amount: 0.186, percentage: 21.6 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.240, percentage: 80.5 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.463, percentage: 86.6 }, lastYear: { amount: 0.012, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.287, percentage: 90.0 }, lastYear: { amount: 0.142, percentage: 9.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.129, percentage: 35.5 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.581, percentage: 92.2 }, lastYear: { amount: 0.724, percentage: 25.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.895, percentage: 94.8 }, lastYear: { amount: 1.268, percentage: 63.4 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.139, percentage: 92.9 }, lastYear: { amount: 2.340, percentage: 52.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 31, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.083, "Aug-Sep":0.0 }, total:115.466 },
];

export const getReportDate = (): string => "31-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 40.3% (46.4 MCM) — steady slow decline, 25.5pp above last year\'s 14.8%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 40.3% (46.4 ΕΚΜ) — αργή υποχώρηση. 25.5μ.π. πάνω από πέρυσι (14.8%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 40.3% (46.4 МКМ) — медленное снижение. +25.5пп выше прошлогодних 14.8%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.7% (4.05 MCM) — essentially unchanged, well above last year\'s 16.9%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 23.7% (4.05 ΕΚΜ) — σχεδόν αμετάβλητος, πάνω από πέρυσι (16.9%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.7% (4.05 МКМ) — почти без изменений, выше прошлогодних 16.9%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.1% (2.50 MCM) — essentially unchanged for weeks, above last year\'s 15.8%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.1% (2.50 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (15.8%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.1% (2.50 МКМ) — без изменений неделями, выше прошлогодних 15.8%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 32.9% (5.10 MCM) — easing in dry season; 2.4pp above last year\'s 30.5%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 32.9% (5.10 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.4μ.π. πάνω από πέρυσι (30.5%).',
      ru: 'Дипотамос на 32.9% (5.10 МКМ) — снижение в сухой сезон, +2.4пп выше прошлогодних 30.5%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 55.7% (7.52 MCM) — gradual summer decline, 41.4pp above last year\'s 14.3%. Highest late-July level in years.',
      el: 'Η Γερμασόγεια στο 55.7% (7.52 ΕΚΜ) — σταδιακή υποχώρηση. 41.4μ.π. πάνω από πέρυσι (14.3%).',
      ru: 'Гермасойя на 55.7% (7.52 МКМ) — постепенное летнее снижение. +41.4пп выше прошлогодних 14.3%.',
    },
    'Arminou': {
      en: 'Arminou at 59.0% (2.54 MCM) — holding steady after leveling off. Season inflow 22.3 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 59.0% (2.54 ΕΚΜ) — σταθερός μετά τη σταθεροποίηση. Εισροή σεζόν: 22.3 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 59.0% (2.54 МКМ) — держится стабильно после стабилизации. Приток сезона: 22.3 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 48.2% (1.64 MCM) — slow drift below the 50% mark; still 18.5pp above last year\'s 29.7%.',
      el: 'Η Πολεμίδια στο 48.2% (1.64 ΕΚΜ) — αργή υποχώρηση κάτω από το 50%. 18.5μ.π. πάνω από πέρυσι (29.7%).',
      ru: 'Полемидия на 48.2% (1.64 МКМ) — медленное снижение ниже отметки 50%; +18.5пп выше прошлогодних 29.7%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.1%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.1%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.1%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.7% (20.77 MCM) — slow drawdown, 23.2pp above last year\'s 16.5%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.7% (20.77 ΕΚΜ) — αργή υποχώρηση, 23.2μ.π. πάνω από πέρυσι (16.5%).',
      ru: 'Аспрокреммос на 39.7% (20.77 МКМ) — медленное снижение, +23.2пп выше прошлогодних 16.5%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.3% (8.29 MCM) — just below the 50% threshold, still 30.0pp above last year\'s 18.3%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 48.3% (8.29 ΕΚΜ) — λίγο κάτω από το 50%, 30.0μ.π. πάνω από πέρυσι (18.3%).',
      ru: 'Каннавиу на 48.3% (8.29 МКМ) — чуть ниже границы 50%, +30.0пп выше прошлогодних 18.3%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 63.0% (1.37 MCM) — continued easing from its summer peak, down 1.0pp in two days. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 63.0% (1.37 ΕΚΜ) — συνεχίζει να υποχωρεί από την κορύφωση του καλοκαιριού. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 63.0% (1.37 МКМ) — продолжает снижаться от летнего пика. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 44.9% (10.79 MCM) — drifting steadily lower through the dry season; still 27.0pp above last year\'s 17.9%.',
      el: 'Ο Εύρετου στο 44.9% (10.79 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 27.0μ.π. πάνω από πέρυσι (17.9%).',
      ru: 'Эвретоу на 44.9% (10.79 МКМ) — устойчивое снижение в сухой сезон. +27.0пп выше прошлогодних 17.9%.',
    },
    'Argaka': {
      en: 'Argaka at 72.3% (0.72 MCM) — continued steep decline. Up from 12.4% last year — a 5.8× year-over-year recovery.',
      el: 'Η Αργάκα στο 72.3% (0.72 ΕΚΜ) — συνεχίζεται η απότομη πτώση. Από 12.4% πέρυσι — 5.8× ανάκαμψη.',
      ru: 'Аргака на 72.3% (0.72 МКМ) — продолжается резкое снижение. Год назад 12.4% — 5.8-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 81.0% (0.70 MCM) — easing back from near-full, down 1.4pp in two days. Up from 21.6% last year.',
      el: 'Ο Πόμος στο 81.0% (0.70 ΕΚΜ) — υποχωρεί από το σχεδόν πλήρες. Από 21.6% πέρυσι.',
      ru: 'Помос на 81.0% (0.70 МКМ) — отступает от почти полного уровня. Год назад 21.6%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 80.5% (0.24 MCM) — easing after weeks near the top, down 1.7pp in two days. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 80.5% (0.24 ΕΚΜ) — υποχωρεί μετά από εβδομάδες κοντά στην κορυφή. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 80.5% (0.24 МКМ) — снижается после недель у максимума. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 86.6% (1.46 MCM) — continued slow decline below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 86.6% (1.46 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 86.6% (1.46 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 90.0% (1.29 MCM) — very slow decline continues, just touching the round number. Was 9.9% last year.',
      el: 'Ο Ξυλιάτος στο 90.0% (1.29 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 9.9% πέρυσι.',
      ru: 'Ксилиатос на 90.0% (1.29 МКМ) — очень медленное снижение продолжается. Год назад 9.9%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 35.5% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 35.5% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 35.5% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 92.2% (2.58 MCM) — easing slowly from full. Was 25.9% last year — a 3.6× year-over-year recovery.',
      el: 'Ο Ταμασός στο 92.2% (2.58 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 25.9% πέρυσι — 3.6× ανάκαμψη.',
      ru: 'Тамассос на 92.2% (2.58 МКМ) — медленное снижение от полного уровня. Год назад 25.9% — восстановление в 3.6×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 94.8% (1.90 MCM) — holding steady near full through the dry season. Up from 63.4% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 94.8% (1.90 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 63.4% πέρυσι.',
      ru: 'Клиру-Малунта на 94.8% (1.90 МКМ) — стабильно у полного уровня. Рост с 63.4% год назад.',
    },
    'Solea': {
      en: 'Solea at 92.9% (4.14 MCM) — holding near full as dry season progresses. Up from 52.5% last year — 1.77× year-over-year improvement.',
      el: 'Η Σολέα στο 92.9% (4.14 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 52.5% πέρυσι — 1.77× βελτίωση.',
      ru: 'Солеа на 92.9% (4.14 МКМ) — удерживается вблизи полного уровня. Рост с 52.5% год назад — улучшение в 1.77×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (29 — 31 Ιουλίου 2026)

Δελτίο Παρασκευής: συνολική αποθήκευση **39.8%** (115.8 ΕΚΜ) — από 40.0% στις 29 Ιουλίου, μια απώλεια 0.4 ΕΚΜ σε δύο ημέρες. Ο ρυθμός υποχώρησης παραμένει ήπιος, χωρίς μεγάλες κινήσεις σε κανένα φράγμα — η [Αγία Μαρίνα](/el/dam/agia-marina/) κατέγραψε τη μεγαλύτερη πτώση (-1.7μ.π.). Ο [Αρμίνου](/el/dam/arminou/) παραμένει σταθερός στο **59.0%**, χωρίς νέα εισροή. Το χάσμα με πέρυσι κρατά στο **+22.9μ.π.** Εισροή σεζόν 25/26: **115.5 ΕΚΜ**. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 29 Ιουλίου):**
- [Αγία Μαρίνα](/el/dam/agia-marina/) **80.5%** (-1.7μ.π.) — η μεγαλύτερη πτώση της περιόδου
- [Πόμος](/el/dam/pomos/) **81.0%** (-1.4μ.π.) — συνεχίζει να υποχωρεί από το σχεδόν πλήρες
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **63.0%** (-1.0μ.π.) — κάτω από το 64%
- [Ξυλιάτος](/el/dam/xyliatos/) **90.0%** — ακριβώς στη στρογγυλή τιμή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.9%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (29 — 31 июля 2026)

Бюллетень пятницы: общий запас **39.8%** (115.8 МКМ) — против 40.0% на 29 июля, потеря 0.4 МКМ за два дня. Темп снижения остаётся мягким, без резких движений ни по одному водохранилищу — крупнейшее падение у [Агия Марина](/ru/dam/agia-marina/) (-1.7пп). [Арминоу](/ru/dam/arminou/) держится стабильно на **59.0%**, без нового притока. Разрыв с прошлым годом держится на **+22.9пп**. Приток сезона 25/26: **115.5 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за 2 дня с 29 июля):**
- [Агия Марина](/ru/dam/agia-marina/) **80.5%** (-1.7пп) — крупнейшее падение периода
- [Помос](/ru/dam/pomos/) **81.0%** (-1.4пп) — продолжает отступать от почти полного уровня
- [Мавроколимпос](/ru/dam/mavrokolympos/) **63.0%** (-1.0пп) — опустился ниже 64%
- [Ксилиатос](/ru/dam/xyliatos/) **90.0%** — ровно на круглой отметке
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (July 29 — July 31, 2026)

Friday bulletin: total storage at **39.8%** (115.8 MCM) — down from 40.0% on July 29, a loss of 0.4 MCM over two days. The pace of decline stayed mild, with no sharp moves at any single dam — [Agia Marina](/dam/agia-marina/) posted the largest drop (-1.7pp). [Arminou](/dam/arminou/) held steady at **59.0%** with no fresh inflow. The gap over last year holds at **+22.9pp**. Season total inflow: **115.5 MCM**. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. July 29):**
- [Agia Marina](/dam/agia-marina/) **80.5%** (-1.7pp) — the largest decline of the period
- [Pomos](/dam/pomos/) **81.0%** (-1.4pp) — continues easing back from near-full
- [Mavrokolympos](/dam/mavrokolympos/) **63.0%** (-1.0pp) — dropped below 64%
- [Xyliatos](/dam/xyliatos/) **90.0%** — landed right on the round number
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
