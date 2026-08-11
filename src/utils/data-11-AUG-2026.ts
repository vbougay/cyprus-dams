import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.022, totalSince: 26.353 }, storage: { current: { amount: 45.791, percentage: 39.8 }, lastYear: { amount: 16.274, percentage: 14.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.006, percentage: 23.4 }, lastYear: { amount: 2.844, percentage: 16.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.477, percentage: 17.9 }, lastYear: { amount: 2.183, percentage: 15.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 4.860, percentage: 31.4 }, lastYear: { amount: 4.533, percentage: 29.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.327, percentage: 54.3 }, lastYear: { amount: 1.725, percentage: 12.8 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.003, totalSince: 22.352 }, storage: { current: { amount: 2.524, percentage: 58.7 }, lastYear: { amount: 2.213, percentage: 51.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.538, percentage: 45.2 }, lastYear: { amount: 0.979, percentage: 28.8 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.106, percentage: 1.6 }, lastYear: { amount: 0.331, percentage: 4.9 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.461, percentage: 39.1 }, lastYear: { amount: 8.076, percentage: 15.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.109, percentage: 47.2 }, lastYear: { amount: 3.005, percentage: 17.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.283, percentage: 58.9 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.501, percentage: 43.8 }, lastYear: { amount: 4.098, percentage: 17.1 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.663, percentage: 67.0 }, lastYear: { amount: 0.077, percentage: 7.8 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.655, percentage: 76.2 }, lastYear: { amount: 0.152, percentage: 17.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.213, percentage: 71.5 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.417, percentage: 83.8 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.244, percentage: 87.0 }, lastYear: { amount: 0.119, percentage: 8.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.112, percentage: 30.9 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.494, percentage: 89.1 }, lastYear: { amount: 0.683, percentage: 24.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.859, percentage: 93.0 }, lastYear: { amount: 1.242, percentage: 62.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.083, percentage: 91.7 }, lastYear: { amount: 2.284, percentage: 51.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 11, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.193 }, total:115.688 },
];

export const getReportDate = (): string => "11-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.8% (45.8 MCM) — steady slow decline, 25.6pp above last year\'s 14.2%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.8% (45.8 ΕΚΜ) — αργή υποχώρηση. 25.6μ.π. πάνω από πέρυσι (14.2%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.8% (45.8 МКМ) — медленное снижение. +25.6пп выше прошлогодних 14.2%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.4% (4.01 MCM) — essentially unchanged, well above last year\'s 16.6%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 23.4% (4.01 ΕΚΜ) — σχεδόν αμετάβλητος, πάνω από πέρυσι (16.6%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.4% (4.01 МКМ) — почти без изменений, выше прошлогодних 16.6%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.9% (2.48 MCM) — essentially unchanged for weeks, above last year\'s 15.8%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 17.9% (2.48 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (15.8%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 17.9% (2.48 МКМ) — без изменений неделями, выше прошлогодних 15.8%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 31.4% (4.86 MCM) — easing in dry season; 2.2pp above last year\'s 29.2%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 31.4% (4.86 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.2μ.π. πάνω από πέρυσι (29.2%).',
      ru: 'Дипотамос на 31.4% (4.86 МКМ) — снижение в сухой сезон, +2.2пп выше прошлогодних 29.2%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 54.3% (7.33 MCM) — gradual summer decline, 41.5pp above last year\'s 12.8%. Highest mid-August level in years.',
      el: 'Η Γερμασόγεια στο 54.3% (7.33 ΕΚΜ) — σταδιακή υποχώρηση. 41.5μ.π. πάνω από πέρυσι (12.8%).',
      ru: 'Гермасойя на 54.3% (7.33 МКМ) — постепенное летнее снижение. +41.5пп выше прошлогодних 12.8%.',
    },
    'Arminou': {
      en: 'Arminou at 58.7% (2.52 MCM) — holding flat on its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.7% (2.52 ΕΚΜ) — σταθερός στο καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.7% (2.52 МКМ) — стабилен на летнем плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 45.2% (1.54 MCM) — down 0.5pp since Friday, holding below the 50% mark. Still 16.4pp above last year\'s 28.8%.',
      el: 'Η Πολεμίδια στο 45.2% (1.54 ΕΚΜ) — υποχώρησε 0.5μ.π. από την Παρασκευή, κάτω από το 50%. 16.4μ.π. πάνω από πέρυσι (28.8%).',
      ru: 'Полемидия на 45.2% (1.54 МКМ) — снизилась на 0.5пп с пятницы, ниже отметки 50%. +16.4пп выше прошлогодних 28.8%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.6% (0.11 MCM), zero inflow all season. Far below last year\'s 4.9%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.6% (0.11 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.9%).',
      ru: 'Ахна критически низкая — 1.6% (0.11 МКМ), без притока за сезон. Далеко ниже прошлогодних 4.9%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.1% (20.46 MCM) — slow drawdown, 23.7pp above last year\'s 15.4%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.1% (20.46 ΕΚΜ) — αργή υποχώρηση, 23.7μ.π. πάνω από πέρυσι (15.4%).',
      ru: 'Аспрокреммос на 39.1% (20.46 МКМ) — медленное снижение, +23.7пп выше прошлогодних 15.4%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 47.2% (8.11 MCM) — just below the 50% threshold, still 29.7pp above last year\'s 17.5%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 47.2% (8.11 ΕΚΜ) — λίγο κάτω από το 50%, 29.7μ.π. πάνω από πέρυσι (17.5%).',
      ru: 'Каннавиу на 47.2% (8.11 МКМ) — чуть ниже границы 50%, +29.7пп выше прошлогодних 17.5%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 58.9% (1.28 MCM) — the largest Paphos mover, down 1.7pp since Friday as it continues easing from its summer peak. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 58.9% (1.28 ΕΚΜ) — η μεγαλύτερη κίνηση στην Πάφο, -1.7μ.π. από την Παρασκευή. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 58.9% (1.28 МКМ) — крупнейшее изменение в Пафосе, -1.7пп с пятницы. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 43.8% (10.50 MCM) — drifting steadily lower through the dry season; still 26.7pp above last year\'s 17.1%.',
      el: 'Ο Εύρετου στο 43.8% (10.50 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 26.7μ.π. πάνω από πέρυσι (17.1%).',
      ru: 'Эвретоу на 43.8% (10.50 МКМ) — устойчивое снижение в сухой сезон. +26.7пп выше прошлогодних 17.1%.',
    },
    'Argaka': {
      en: 'Argaka at 67.0% (0.66 MCM) — extending its multi-week slide, down 2.3pp since Friday. Up from 7.8% last year — a 8.6× year-over-year recovery.',
      el: 'Η Αργάκα στο 67.0% (0.66 ΕΚΜ) — συνεχίζει η πολυεβδομαδιαία πτώση, -2.3μ.π. από την Παρασκευή. Από 7.8% πέρυσι — 8.6× ανάκαμψη.',
      ru: 'Аргака на 67.0% (0.66 МКМ) — продолжается многонедельное снижение, -2.3пп с пятницы. Год назад 7.8% — 8.6-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 76.2% (0.66 MCM) — down 1.8pp since Friday, continued retreat from near-full. Up from 17.7% last year.',
      el: 'Ο Πόμος στο 76.2% (0.66 ΕΚΜ) — υποχώρησε 1.8μ.π. από την Παρασκευή, υποχωρεί από το σχεδόν πλήρες. Από 17.7% πέρυσι.',
      ru: 'Помос на 76.2% (0.66 МКМ) — снизился на 1.8пп с пятницы, отступает от почти полного уровня. Год назад 17.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 71.5% (0.21 MCM) — the largest mover for a second straight bulletin, down 3.3pp since Friday. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 71.5% (0.21 ΕΚΜ) — η μεγαλύτερη κίνηση για δεύτερο συνεχόμενο δελτίο, -3.3μ.π. από την Παρασκευή. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 71.5% (0.21 МКМ) — крупнейшее изменение второй бюллетень подряд, -3.3пп с пятницы. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 83.8% (1.42 MCM) — continued slow decline below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 83.8% (1.42 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 83.8% (1.42 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 87.0% (1.24 MCM) — slow decline continues below 90%. Was 8.3% last year.',
      el: 'Ο Ξυλιάτος στο 87.0% (1.24 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 8.3% πέρυσι.',
      ru: 'Ксилиатос на 87.0% (1.24 МКМ) — медленное снижение ниже 90% продолжается. Год назад 8.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 30.9% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 30.9% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 30.9% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 89.1% (2.49 MCM) — easing from full, down 1.7pp since Friday. Was 24.4% last year — a 3.6× year-over-year recovery.',
      el: 'Ο Ταμασός στο 89.1% (2.49 ΕΚΜ) — υποχωρεί από το πλήρες, -1.7μ.π. από την Παρασκευή. Από 24.4% πέρυσι — 3.6× ανάκαμψη.',
      ru: 'Тамассос на 89.1% (2.49 МКМ) — снижение от полного уровня, -1.7пп с пятницы. Год назад 24.4% — восстановление в 3.6×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 93.0% (1.86 MCM) — holding steady near full through the dry season. Up from 62.1% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 93.0% (1.86 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 62.1% πέρυσι.',
      ru: 'Клиру-Малунта на 93.0% (1.86 МКМ) — стабильно у полного уровня. Рост с 62.1% год назад.',
    },
    'Solea': {
      en: 'Solea at 91.7% (4.08 MCM) — holding near full as dry season progresses. Up from 51.3% last year — 1.79× year-over-year improvement.',
      el: 'Η Σολέα στο 91.7% (4.08 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 51.3% πέρυσι — 1.79× βελτίωση.',
      ru: 'Солеа на 91.7% (4.08 МКМ) — удерживается вблизи полного уровня. Рост с 51.3% год назад — улучшение в 1.79×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (7 — 11 Αυγούστου 2026)

Δελτίο Τρίτης: συνολική αποθήκευση **39.0%** (113.5 ΕΚΜ) — από 39.3% (114.4 ΕΚΜ) την Παρασκευή, μια απώλεια 0.8 ΕΚΜ σε τέσσερις ημέρες, με τον ίδιο αργό ρυθμό υποχώρησης να συνεχίζεται. Η [Αγία Μαρίνα](/el/dam/agia-marina/) είναι ξανά η μεγαλύτερη κίνηση, -3.3μ.π. από την Παρασκευή στο 71.5%. Το χάσμα με πέρυσι ξεπέρασε πλέον τις **23 μονάδες** (+23.0μ.π.), το ευρύτερο μέχρι στιγμής. Εισροή σεζόν: 115.7 ΕΚΜ. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι Παρασκευής):**
- [Αγία Μαρίνα](/el/dam/agia-marina/) **71.5%** (-3.3μ.π.) — μεγαλύτερη κίνηση για δεύτερο συνεχόμενο δελτίο
- [Αργάκα](/el/dam/argaka/) **67.0%** (-2.3μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Πόμος](/el/dam/pomos/) **76.2%** (-1.8μ.π.) — συνεχίζει να υποχωρεί από το σχεδόν πλήρες
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **58.9%** (-1.7μ.π.) — συνεχίζει να υποχωρεί από την κορύφωση του καλοκαιριού
- [Ταμασός](/el/dam/tamassos/) **89.1%** (-1.7μ.π.) — υποχωρεί σταδιακά από το πλήρες
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.6%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (7 — 11 августа 2026)

Бюллетень вторника: общий запас **39.0%** (113.5 МКМ) — против 39.3% (114.4 МКМ) в пятницу, потеря 0.8 МКМ за четыре дня, тот же медленный темп снижения продолжается. [Агия Марина](/ru/dam/agia-marina/) снова стала крупнейшим изменением, -3.3пп с пятницы до 71.5%. Разрыв с прошлым годом впервые превысил **23 пункта** (+23.0пп) — самый широкий на сегодня. Приток сезона: 115.7 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с пятницы):**
- [Агия Марина](/ru/dam/agia-marina/) **71.5%** (-3.3пп) — крупнейшее изменение второй бюллетень подряд
- [Аргака](/ru/dam/argaka/) **67.0%** (-2.3пп) — продолжается многонедельное снижение
- [Помос](/ru/dam/pomos/) **76.2%** (-1.8пп) — продолжает отступать от почти полного уровня
- [Мавроколимпос](/ru/dam/mavrokolympos/) **58.9%** (-1.7пп) — продолжает снижаться от летнего пика
- [Тамассос](/ru/dam/tamassos/) **89.1%** (-1.7пп) — постепенно снижается от полного уровня
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.6%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 7 — 11, 2026)

Tuesday bulletin: total storage at **39.0%** (113.5 MCM) — down from 39.3% (114.4 MCM) on Friday, a loss of 0.8 MCM over four days, the same slow drawdown pace continuing. [Agia Marina](/dam/agia-marina/) is the largest mover again, down 3.3pp since Friday to 71.5%. The gap over last year has now crossed **23 points** (+23.0pp), the widest yet. Season inflow: 115.7 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. Friday):**
- [Agia Marina](/dam/agia-marina/) **71.5%** (-3.3pp) — largest mover for a second straight bulletin
- [Argaka](/dam/argaka/) **67.0%** (-2.3pp) — extending its multi-week slide
- [Pomos](/dam/pomos/) **76.2%** (-1.8pp) — continues easing from near-full
- [Mavrokolympos](/dam/mavrokolympos/) **58.9%** (-1.7pp) — continues easing from its summer peak
- [Tamassos](/dam/tamassos/) **89.1%** (-1.7pp) — gradually easing from full
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.6%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
