import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.030, totalSince: 26.109 }, storage: { current: { amount: 46.594, percentage: 40.5 }, lastYear: { amount: 17.345, percentage: 15.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.067, percentage: 23.8 }, lastYear: { amount: 2.910, percentage: 17.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.511, percentage: 18.1 }, lastYear: { amount: 2.209, percentage: 15.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.198, percentage: 33.5 }, lastYear: { amount: 4.825, percentage: 31.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.570, percentage: 56.1 }, lastYear: { amount: 2.001, percentage: 14.8 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.019, totalSince: 22.301 }, storage: { current: { amount: 2.533, percentage: 58.9 }, lastYear: { amount: 2.311, percentage: 53.7 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.653, percentage: 48.6 }, lastYear: { amount: 1.022, percentage: 30.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.357, percentage: 5.3 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.899, percentage: 39.9 }, lastYear: { amount: 8.803, percentage: 16.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.355, percentage: 48.7 }, lastYear: { amount: 3.213, percentage: 18.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.424, percentage: 65.3 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.894, percentage: 45.4 }, lastYear: { amount: 4.372, percentage: 18.2 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.732, percentage: 73.9 }, lastYear: { amount: 0.135, percentage: 13.6 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.715, percentage: 83.1 }, lastYear: { amount: 0.190, percentage: 22.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.249, percentage: 83.6 }, lastYear: { amount: 0.060, percentage: 20.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.479, percentage: 87.5 }, lastYear: { amount: 0.012, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.299, percentage: 90.8 }, lastYear: { amount: 0.150, percentage: 10.5 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.138, percentage: 38.0 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.605, percentage: 93.0 }, lastYear: { amount: 0.732, percentage: 26.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.899, percentage: 95.0 }, lastYear: { amount: 1.277, percentage: 63.9 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.159, percentage: 93.4 }, lastYear: { amount: 2.361, percentage: 53.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 27, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.01, "Aug-Sep":0.0 }, total:115.393 },
];

export const getReportDate = (): string => "27-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 40.5% (46.6 MCM) — steady slow decline, 25.4pp above last year\'s 15.1%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 40.5% (46.6 ΕΚΜ) — αργή υποχώρηση. 25.4μ.π. πάνω από πέρυσι (15.1%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 40.5% (46.6 МКМ) — медленное снижение. +25.4пп выше прошлогодних 15.1%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.8% (4.07 MCM) — stable, well above last year\'s 17.0%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 23.8% (4.07 ΕΚΜ) — σταθερός, πάνω από πέρυσι (17.0%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.8% (4.07 МКМ) — стабильно, выше прошлогодних 17.0%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.1% (2.51 MCM) — essentially unchanged for weeks, above last year\'s 15.9%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.1% (2.51 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (15.9%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.1% (2.51 МКМ) — без изменений неделями, выше прошлогодних 15.9%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 33.5% (5.20 MCM) — easing in dry season; 2.4pp above last year\'s 31.1%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 33.5% (5.20 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.4μ.π. πάνω από πέρυσι (31.1%).',
      ru: 'Дипотамос на 33.5% (5.20 МКМ) — снижение в сухой сезон, +2.4пп выше прошлогодних 31.1%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 56.1% (7.57 MCM) — gradual summer decline, 41.3pp above last year\'s 14.8%. Highest late-July level in years.',
      el: 'Η Γερμασόγεια στο 56.1% (7.57 ΕΚΜ) — σταδιακή υποχώρηση. 41.3μ.π. πάνω από πέρυσι (14.8%).',
      ru: 'Гермасойя на 56.1% (7.57 МКМ) — постепенное летнее снижение. +41.3пп выше прошлогодних 14.8%.',
    },
    'Arminou': {
      en: 'Arminou at 58.9% (2.53 MCM) — ticked back up slightly after leveling off. Season inflow 22.3 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.9% (2.53 ΕΚΜ) — ελαφρά άνοδος μετά τη σταθεροποίηση. Εισροή σεζόν: 22.3 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.9% (2.53 МКМ) — небольшой рост после стабилизации. Приток сезона: 22.3 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 48.6% (1.65 MCM) — has slipped below the 50% mark; still 18.5pp above last year\'s 30.1%.',
      el: 'Η Πολεμίδια στο 48.6% (1.65 ΕΚΜ) — υποχώρησε κάτω από το 50%. 18.5μ.π. πάνω από πέρυσι (30.1%).',
      ru: 'Полемидия на 48.6% (1.65 МКМ) — опустилась ниже отметки 50%; +18.5пп выше прошлогодних 30.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.3%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.3%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.9% (20.90 MCM) — slow drawdown, 23.1pp above last year\'s 16.8%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.9% (20.90 ΕΚΜ) — αργή υποχώρηση, 23.1μ.π. πάνω από πέρυσι (16.8%).',
      ru: 'Аспрокреммос на 39.9% (20.90 МКМ) — медленное снижение, +23.1пп выше прошлогодних 16.8%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.7% (8.36 MCM) — just below the 50% threshold, still 30.0pp above last year\'s 18.7%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 48.7% (8.36 ΕΚΜ) — λίγο κάτω από το 50%, 30.0μ.π. πάνω από πέρυσι (18.7%).',
      ru: 'Каннавиу на 48.7% (8.36 МКМ) — чуть ниже границы 50%, +30.0пп выше прошлогодних 18.7%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 65.3% (1.42 MCM) — continued easing from its summer peak. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 65.3% (1.42 ΕΚΜ) — συνεχίζει να υποχωρεί από την κορύφωση του καλοκαιριού. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 65.3% (1.42 МКМ) — продолжает снижаться от летнего пика. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 45.4% (10.89 MCM) — drifting steadily lower through the dry season; still 27.2pp above last year\'s 18.2%.',
      el: 'Ο Εύρετου στο 45.4% (10.89 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 27.2μ.π. πάνω από πέρυσι (18.2%).',
      ru: 'Эвретоу на 45.4% (10.89 МКМ) — устойчивое снижение в сухой сезон. +27.2пп выше прошлогодних 18.2%.',
    },
    'Argaka': {
      en: 'Argaka at 73.9% (0.73 MCM) — its steepest drop in weeks. Up from 13.6% last year — a 5.4× year-over-year recovery.',
      el: 'Η Αργάκα στο 73.9% (0.73 ΕΚΜ) — η μεγαλύτερη πτώση εβδομάδων. Από 13.6% πέρυσι — 5.4× ανάκαμψη.',
      ru: 'Аргака на 73.9% (0.73 МКМ) — самое резкое падение за недели. Год назад 13.6% — 5.4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 83.1% (0.72 MCM) — easing back from near-full. Up from 22.1% last year — more than 3.7× year over year.',
      el: 'Ο Πόμος στο 83.1% (0.72 ΕΚΜ) — υποχωρεί από το σχεδόν πλήρες. Από 22.1% πέρυσι — πάνω από 3.7× ανάκαμψη.',
      ru: 'Помос на 83.1% (0.72 МКМ) — отступает от почти полного уровня. Год назад 22.1% — рост более чем в 3.7×.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 83.6% (0.25 MCM) — easing after weeks near the top. Up from 20.1% last year — more than 4× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 83.6% (0.25 ΕΚΜ) — υποχωρεί μετά από εβδομάδες κοντά στην κορυφή. Από 20.1% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Агия Марина на 83.6% (0.25 МКМ) — снижается после недель у максимума. Год назад 20.1% — рост более чем в 4×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 87.5% (1.48 MCM) — continued slow decline below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 87.5% (1.48 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 87.5% (1.48 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 90.8% (1.30 MCM) — very slow decline continues. Was 10.5% last year — an 8.6× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 90.8% (1.30 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 10.5% πέρυσι — 8.6× ανάκαμψη.',
      ru: 'Ксилиатос на 90.8% (1.30 МКМ) — очень медленное снижение продолжается. Год назад 10.5% — восстановление в 8.6×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 38.0% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 38.0% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 38.0% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 93.0% (2.61 MCM) — easing slowly from full. Was 26.1% last year — a 3.6× year-over-year recovery.',
      el: 'Ο Ταμασός στο 93.0% (2.61 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 26.1% πέρυσι — 3.6× ανάκαμψη.',
      ru: 'Тамассос на 93.0% (2.61 МКМ) — медленное снижение от полного уровня. Год назад 26.1% — восстановление в 3.6×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 95.0% (1.90 MCM) — holding steady near full through the dry season. Up from 63.9% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 95.0% (1.90 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 63.9% πέρυσι.',
      ru: 'Клиру-Малунта на 95.0% (1.90 МКМ) — стабильно у полного уровня. Рост с 63.9% год назад.',
    },
    'Solea': {
      en: 'Solea at 93.4% (4.16 MCM) — holding near full as dry season progresses. Up from 53.0% last year — 1.76× year-over-year improvement.',
      el: 'Η Σολέα στο 93.4% (4.16 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 53.0% πέρυσι — 1.76× βελτίωση.',
      ru: 'Солеа на 93.4% (4.16 МКМ) — удерживается вблизи полного уровня. Рост с 53.0% год назад — улучшение в 1.76×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (18 — 27 Ιουλίου 2026)

Δελτίο Δευτέρας, μετά από κενό 3 ημερών χωρίς δημοσίευση: συνολική αποθήκευση **40.1%** (116.7 ΕΚΜ) — πτώση 0.6 ΕΚΜ από την Παρασκευή, ρυθμός σταθερός με τις προηγούμενες μέρες. Ο [Αρμίνου](/el/dam/arminou/) έκανε μια μικρή ανάκαμψη στο **58.9%** (+0.2μ.π.) μετά τη σταθεροποίηση της περασμένης εβδομάδας. Η [Πολεμίδια](/el/dam/polemidia/) γλίστρησε κάτω από το 50% όριο στο 48.6%, ενώ η μεγαλύτερη εβδομαδιαία πτώση καταγράφηκε στην [Αργάκα](/el/dam/argaka/) (-8.0μ.π. σε 7 μέρες). Το χάσμα με πέρυσι κρατά στο **+22.9μ.π.** Εισροή σεζόν 25/26: **115.4 ΕΚΜ** (Ιούλιος: 1.01 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 20 Ιουλίου):**
- [Αρμίνου](/el/dam/arminou/) **58.9%** (+0.5μ.π.) — ελαφρά άνοδος, ο μόνος θετικός δείκτης της εβδομάδας
- [Αργάκα](/el/dam/argaka/) **73.9%** (-8.0μ.π.) — η μεγαλύτερη εβδομαδιαία πτώση
- [Πολεμίδια](/el/dam/polemidia/) **48.6%** (-1.3μ.π.) — πέρασε κάτω από το 50%
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **65.3%** (-3.9μ.π.) — συνεχίζει να υποχωρεί από την κορύφωση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.9%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (18 — 27 июля 2026)

Бюллетень понедельника, после 3-дневного перерыва в публикации: общий запас **40.1%** (116.7 МКМ) — снижение на 0.6 МКМ с пятницы, темп остаётся таким же, как в предыдущие дни. [Арминоу](/ru/dam/arminou/) немного подрос до **58.9%** (+0.2пп) после стабилизации на прошлой неделе. [Полемидия](/ru/dam/polemidia/) опустилась ниже границы 50% до 48.6%, а крупнейшее недельное падение зафиксировано у [Аргаки](/ru/dam/argaka/) (-8.0пп за 7 дней). Разрыв с прошлым годом держится на **+22.9пп**. Приток сезона 25/26: **115.4 МКМ** (июль: 1.01 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за неделю с 20 июля):**
- [Арминоу](/ru/dam/arminou/) **58.9%** (+0.5пп) — небольшой рост, единственный позитивный показатель недели
- [Аргака](/ru/dam/argaka/) **73.9%** (-8.0пп) — крупнейшее недельное падение
- [Полемидия](/ru/dam/polemidia/) **48.6%** (-1.3пп) — опустилась ниже 50%
- [Мавроколимпос](/ru/dam/mavrokolympos/) **65.3%** (-3.9пп) — продолжает снижаться от пика
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (July 18 — July 27, 2026)

Monday bulletin, after a 3-day gap in publication: total storage at **40.1%** (116.7 MCM) — down 0.6 MCM from Friday, roughly the same pace as prior days. [Arminou](/dam/arminou/) ticked back up slightly to **58.9%** (+0.2pp) after leveling off last week. [Polemidia](/dam/polemidia/) slipped below the 50% mark to 48.6%, while the largest weekly decline came from [Argaka](/dam/argaka/) (-8.0pp over 7 days). The gap over last year holds at **+22.9pp**. Season total inflow: **115.4 MCM** (July so far: 1.01 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. July 20):**
- [Arminou](/dam/arminou/) **58.9%** (+0.5pp) — a slight uptick, the only riser this week
- [Argaka](/dam/argaka/) **73.9%** (-8.0pp) — the largest weekly decline
- [Polemidia](/dam/polemidia/) **48.6%** (-1.3pp) — dropped below the 50% threshold
- [Mavrokolympos](/dam/mavrokolympos/) **65.3%** (-3.9pp) — continued easing from its summer peak
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
