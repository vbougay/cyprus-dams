import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.030, totalSince: 26.685 }, storage: { current: { amount: 45.357, percentage: 39.4 }, lastYear: { amount: 15.434, percentage: 13.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.949, percentage: 23.1 }, lastYear: { amount: 2.688, percentage: 15.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.725 }, storage: { current: { amount: 2.455, percentage: 17.7 }, lastYear: { amount: 2.206, percentage: 15.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.768 }, storage: { current: { amount: 4.675, percentage: 30.2 }, lastYear: { amount: 4.285, percentage: 27.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.067, percentage: 52.3 }, lastYear: { amount: 1.500, percentage: 11.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.010, totalSince: 22.393 }, storage: { current: { amount: 2.521, percentage: 58.6 }, lastYear: { amount: 2.117, percentage: 49.2 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.494, percentage: 43.9 }, lastYear: { amount: 0.921, percentage: 27.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.088, percentage: 1.3 }, lastYear: { amount: 0.311, percentage: 4.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.098, percentage: 38.4 }, lastYear: { amount: 7.359, percentage: 14.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.896, percentage: 46.0 }, lastYear: { amount: 2.823, percentage: 16.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.968, percentage: 44.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.145, percentage: 42.3 }, lastYear: { amount: 3.843, percentage: 16.0 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.588, percentage: 59.4 }, lastYear: { amount: 0.033, percentage: 3.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.611, percentage: 71.0 }, lastYear: { amount: 0.135, percentage: 15.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.185, percentage: 62.1 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.360, percentage: 80.5 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.196, percentage: 83.6 }, lastYear: { amount: 0.104, percentage: 7.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.003, totalSince: 0.315 }, storage: { current: { amount: 0.361, percentage: 99.4 }, lastYear: { amount: 0.085, percentage: 23.4 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.439, percentage: 87.1 }, lastYear: { amount: 0.649, percentage: 23.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.822, percentage: 91.1 }, lastYear: { amount: 1.206, percentage: 60.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.003, percentage: 89.9 }, lastYear: { amount: 2.203, percentage: 49.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 24, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.589 }, total:116.084 },
];

export const getReportDate = (): string => "24-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.4% (45.4 MCM) — essentially flat over the weekend, 26.0pp above last year\'s 13.4%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.4% (45.4 ΕΚΜ) — σχεδόν σταθερός το Σαββατοκύριακο, 26.0μ.π. πάνω από πέρυσι (13.4%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.4% (45.4 МКМ) — почти без изменений за выходные. +26.0пп выше прошлогодних 13.4%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.1% (3.95 MCM) — essentially unchanged over the weekend, still 7.4pp above last year\'s 15.7%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 23.1% (3.95 ΕΚΜ) — σχεδόν αμετάβλητος, πάνω από πέρυσι (15.7%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.1% (3.95 МКМ) — почти без изменений, выше прошлогодних 15.7%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.7% (2.46 MCM) — flat over the weekend, 1.8pp above last year\'s 15.9%. Seasonal inflow 1.73 MCM.',
      el: 'Η Λεύκαρα στο 17.7% (2.46 ΕΚΜ) — σταθερή, πάνω από πέρυσι (15.9%). Εισροή σεζόν 1.73 ΕΚΜ.',
      ru: 'Лефкара на 17.7% (2.46 МКМ) — без изменений, выше прошлогодних 15.9%. Приток 1.73 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 30.2% (4.68 MCM) — a slight dip over the weekend, 2.6pp above last year\'s 27.6%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 30.2% (4.68 ΕΚΜ) — ελαφριά υποχώρηση, 2.6μ.π. πάνω από πέρυσι (27.6%).',
      ru: 'Дипотамос на 30.2% (4.68 МКМ) — небольшое снижение, +2.6пп выше прошлогодних 27.6%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 52.3% (7.07 MCM) — a slight dip over the weekend, still 41.2pp above last year\'s 11.1%.',
      el: 'Η Γερμασόγεια στο 52.3% (7.07 ΕΚΜ) — ελαφριά υποχώρηση. 41.2μ.π. πάνω από πέρυσι (11.1%).',
      ru: 'Гермасойя на 52.3% (7.07 МКМ) — небольшое снижение. +41.2пп выше прошлогодних 11.1%.',
    },
    'Arminou': {
      en: 'Arminou at 58.6% (2.52 MCM) — still holding on its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.6% (2.52 ΕΚΜ) — παραμένει σταθερός στο καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.6% (2.52 МКМ) — по-прежнему стабилен на летнем плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.9% (1.49 MCM) — essentially flat over the weekend, still 16.8pp above last year\'s 27.1%.',
      el: 'Η Πολεμίδια στο 43.9% (1.49 ΕΚΜ) — σχεδόν αμετάβλητη, 16.8μ.π. πάνω από πέρυσι (27.1%).',
      ru: 'Полемидия на 43.9% (1.49 МКМ) — почти без изменений, +16.8пп выше прошлогодних 27.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.3% (0.09 MCM), zero inflow all season. Far below last year\'s 4.6%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.3% (0.09 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.6%).',
      ru: 'Ахна критически низкая — 1.3% (0.09 МКМ), без притока за сезон. Далеко ниже прошлогодних 4.6%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.4% (20.10 MCM) — a slight dip over the weekend, 24.3pp above last year\'s 14.1%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.4% (20.10 ΕΚΜ) — ελαφριά υποχώρηση, 24.3μ.π. πάνω από πέρυσι (14.1%).',
      ru: 'Аспрокреммос на 38.4% (20.10 МКМ) — небольшое снижение, +24.3пп выше прошлогодних 14.1%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 46.0% (7.90 MCM) — near-unchanged, still 29.6pp above last year\'s 16.4%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 46.0% (7.90 ΕΚΜ) — σχεδόν αμετάβλητος, 29.6μ.π. πάνω από πέρυσι (16.4%).',
      ru: 'Каннавиу на 46.0% (7.90 МКМ) — почти без изменений, +29.6пп выше прошлогодних 16.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 44.4% (0.97 MCM) — the largest mover of this bulletin, down 3.8pp over the weekend as its summer slide steepens. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 44.4% (0.97 ΕΚΜ) — η μεγαλύτερη κίνηση του δελτίου, -3.8μ.π. το Σαββατοκύριακο. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 44.4% (0.97 МКМ) — крупнейшее изменение бюллетеня, -3.8пп за выходные. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 42.3% (10.15 MCM) — essentially flat, still 26.3pp above last year\'s 16.0%.',
      el: 'Ο Εύρετου στο 42.3% (10.15 ΕΚΜ) — σχεδόν σταθερός. 26.3μ.π. πάνω από πέρυσι (16.0%).',
      ru: 'Эвретоу на 42.3% (10.15 МКМ) — почти без изменений. +26.3пп выше прошлогодних 16.0%.',
    },
    'Argaka': {
      en: 'Argaka at 59.4% (0.59 MCM) — down 1.7pp over the weekend, continuing its multi-week slide. Up from 3.3% last year — an 18× year-over-year recovery.',
      el: 'Η Αργάκα στο 59.4% (0.59 ΕΚΜ) — -1.7μ.π. το Σαββατοκύριακο. Από 3.3% πέρυσι — 18× ανάκαμψη.',
      ru: 'Аргака на 59.4% (0.59 МКМ) — -1.7пп за выходные. Год назад 3.3% — 18-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 71.0% (0.61 MCM) — down 1.1pp over the weekend, continued retreat from near-full. Up from 15.7% last year.',
      el: 'Ο Πόμος στο 71.0% (0.61 ΕΚΜ) — -1.1μ.π. το Σαββατοκύριακο. Από 15.7% πέρυσι.',
      ru: 'Помос на 71.0% (0.61 МКМ) — -1.1пп за выходные. Год назад 15.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 62.1% (0.19 MCM) — down 1.7pp over the weekend, continuing its multi-week slide. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 62.1% (0.19 ΕΚΜ) — -1.7μ.π. το Σαββατοκύριακο, συνεχίζει η πολυεβδομαδιαία πτώση. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 62.1% (0.19 МКМ) — -1.7пп за выходные, продолжается многонедельное снижение. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 80.5% (1.36 MCM) — down 1.7pp over the weekend, dropping below 82% for the first time in weeks. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 80.5% (1.36 ΕΚΜ) — -1.7μ.π. το Σαββατοκύριακο. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 80.5% (1.36 МКМ) — -1.7пп за выходные. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 83.6% (1.20 MCM) — down 1.4pp over the weekend, still below 90%. Was 7.3% last year.',
      el: 'Ο Ξυλιάτος στο 83.6% (1.20 ΕΚΜ) — -1.4μ.π. το Σαββατοκύριακο, κάτω από το 90%. Από 7.3% πέρυσι.',
      ru: 'Ксилиатос на 83.6% (1.20 МКМ) — -1.4пп за выходные, ниже 90%. Год назад 7.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis at 99.4% (0.36 MCM) — ticked back up 0.8pp toward its 100% plateau after weeks of drift, on a touch of weekend inflow. Up from 23.4% last year.',
      el: 'Ο Καλοπαναγιώτης στο 99.4% (0.36 ΕΚΜ) — ανέβηκε 0.8μ.π. πιο κοντά στο οροπέδιο του 100% μετά από εβδομάδες απομάκρυνσης. Αύξηση από 23.4% πέρυσι.',
      ru: 'Калопанайотис на 99.4% (0.36 МКМ) — вырос на 0.8пп ближе к плато 100% после недель отдаления. Рост с 23.4% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 87.1% (2.44 MCM) — down 0.5pp over the weekend. Was 23.2% last year — a 3.8× year-over-year recovery.',
      el: 'Ο Ταμασός στο 87.1% (2.44 ΕΚΜ) — -0.5μ.π. το Σαββατοκύριακο. Από 23.2% πέρυσι — 3.8× ανάκαμψη.',
      ru: 'Тамассос на 87.1% (2.44 МКМ) — -0.5пп за выходные. Год назад 23.2% — восстановление в 3.8×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 91.1% (1.82 MCM) — holding steady near full through the dry season. Up from 60.3% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 91.1% (1.82 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 60.3% πέρυσι.',
      ru: 'Клиру-Малунта на 91.1% (1.82 МКМ) — стабильно у полного уровня. Рост с 60.3% год назад.',
    },
    'Solea': {
      en: 'Solea at 89.9% (4.00 MCM) — holding near full as dry season progresses. Up from 49.5% last year — 1.82× year-over-year improvement.',
      el: 'Η Σολέα στο 89.9% (4.00 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 49.5% πέρυσι — 1.82× βελτίωση.',
      ru: 'Солеа на 89.9% (4.00 МКМ) — удерживается вблизи полного уровня. Рост с 49.5% год назад — улучшение в 1.82×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (21 — 24 Αυγούστου 2026)

Δελτίο Δευτέρας, καλύπτει το Σαββατοκύριακο: συνολική αποθήκευση **38.2%** (111.0 ΕΚΜ) — από 38.4% (111.7 ΕΚΜ) την Παρασκευή, μια απώλεια περίπου 0.7 ΕΚΜ σε τρεις ημέρες, στον ίδιο αργό ρυθμό υποχώρησης. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) είναι ξανά η μεγαλύτερη κίνηση, -3.8μ.π. στο 44.4%, καθώς η καλοκαιρινή πτώση του επιταχύνεται. Η [Αργάκα](/el/dam/argaka/), η [Αγία Μαρίνα](/el/dam/agia-marina/) και τα [Βυζακιά](/el/dam/vyzakia/) ακολούθησαν με πτώσεις -1.7μ.π. η καθεμία. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) ξεχώρισε αντίθετα, ανεβαίνοντας +0.8μ.π. στο 99.4% με μια μικρή εισροή Σαββατοκύριακου — η πρώτη του άνοδος μετά από εβδομάδες απομάκρυνσης από το οροπέδιο του 100%. Το χάσμα με πέρυσι παραμένει στις **23.1 μονάδες**. Εισροή σεζόν: 116.1 ΕΚΜ. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 21 Αυγούστου):**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **44.4%** (-3.8μ.π.) — η μεγαλύτερη κίνηση, επιταχυνόμενη πτώση
- [Αργάκα](/el/dam/argaka/) **59.4%** (-1.7μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Αγία Μαρίνα](/el/dam/agia-marina/) **62.1%** (-1.7μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Βυζακιά](/el/dam/vyzakia/) **80.5%** (-1.7μ.π.) — κάτω από το 82% για πρώτη φορά εδώ και εβδομάδες
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **99.4%** (+0.8μ.π.) — ανέβηκε πιο κοντά στο οροπέδιο του 100% με μικρή εισροή
- [Αχνά](/el/dam/achna/) **1.3%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (21 — 24 августа 2026)

Бюллетень понедельника, охватывает выходные: общий запас **38.2%** (111.0 МКМ) — против 38.4% (111.7 МКМ) в пятницу, потеря около 0.7 МКМ за три дня, тот же медленный темп снижения. [Мавроколимпос](/ru/dam/mavrokolympos/) снова стал крупнейшим изменением, -3.8пп до 44.4%, по мере ускорения летнего снижения. [Аргака](/ru/dam/argaka/), [Агия Марина](/ru/dam/agia-marina/) и [Визакия](/ru/dam/vyzakia/) последовали со снижениями -1.7пп каждый. [Калопанайотис](/ru/dam/kalopanagiotis/) выделился в противоположную сторону, поднявшись на +0.8пп до 99.4% благодаря небольшому притоку за выходные — первый рост после недель отдаления от плато 100%. Разрыв с прошлым годом остаётся на уровне **23.1 пункта**. Приток сезона: 116.1 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 21 августа):**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **44.4%** (-3.8пп) — крупнейшее изменение, ускоряющееся снижение
- [Аргака](/ru/dam/argaka/) **59.4%** (-1.7пп) — продолжается многонедельное снижение
- [Агия Марина](/ru/dam/agia-marina/) **62.1%** (-1.7пп) — продолжается многонедельное снижение
- [Визакия](/ru/dam/vyzakia/) **80.5%** (-1.7пп) — впервые за недели ниже 82%
- [Калопанайотис](/ru/dam/kalopanagiotis/) **99.4%** (+0.8пп) — поднялся ближе к плато 100% благодаря небольшому притоку
- [Ахна](/ru/dam/achna/) **1.3%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 21 — 24, 2026)

Monday bulletin, covering the weekend: total storage at **38.2%** (111.0 MCM) — down from 38.4% (111.7 MCM) on Friday, a loss of roughly 0.7 MCM over three days, the same slow drawdown pace continuing. [Mavrokolympos](/dam/mavrokolympos/) was the largest mover again, down 3.8pp to 44.4% as its summer slide steepens; [Argaka](/dam/argaka/), [Agia Marina](/dam/agia-marina/) and [Vyzakia](/dam/vyzakia/) followed with drops of 1.7pp each. [Kalopanagiotis](/dam/kalopanagiotis/) bucked the trend, ticking up 0.8pp to 99.4% on a touch of weekend inflow — its first rise after weeks of drift off the 100% plateau. The gap over last year holds at **23.1 points**. Season inflow: 116.1 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. August 21):**
- [Mavrokolympos](/dam/mavrokolympos/) **44.4%** (-3.8pp) — largest mover, steepening summer slide
- [Argaka](/dam/argaka/) **59.4%** (-1.7pp) — continuing its multi-week slide
- [Agia Marina](/dam/agia-marina/) **62.1%** (-1.7pp) — continuing its multi-week slide
- [Vyzakia](/dam/vyzakia/) **80.5%** (-1.7pp) — below 82% for the first time in weeks
- [Kalopanagiotis](/dam/kalopanagiotis/) **99.4%** (+0.8pp) — ticked back up toward its 100% plateau on light inflow
- [Achna](/dam/achna/) **1.3%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
