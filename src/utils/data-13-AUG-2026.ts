import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.005, totalSince: 26.368 }, storage: { current: { amount: 45.664, percentage: 39.7 }, lastYear: { amount: 16.143, percentage: 14.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.999, percentage: 23.4 }, lastYear: { amount: 2.821, percentage: 16.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.473, percentage: 17.9 }, lastYear: { amount: 2.179, percentage: 15.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 4.819, percentage: 31.1 }, lastYear: { amount: 4.501, percentage: 29.0 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.298, percentage: 54.1 }, lastYear: { amount: 1.692, percentage: 12.5 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.002, totalSince: 22.357 }, storage: { current: { amount: 2.521, percentage: 58.6 }, lastYear: { amount: 2.199, percentage: 51.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.531, percentage: 45.0 }, lastYear: { amount: 0.974, percentage: 28.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.103, percentage: 1.5 }, lastYear: { amount: 0.328, percentage: 4.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.405, percentage: 39.0 }, lastYear: { amount: 7.970, percentage: 15.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.077, percentage: 47.0 }, lastYear: { amount: 2.981, percentage: 17.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.259, percentage: 57.8 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.438, percentage: 43.5 }, lastYear: { amount: 4.059, percentage: 16.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.656, percentage: 66.3 }, lastYear: { amount: 0.073, percentage: 7.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.649, percentage: 75.5 }, lastYear: { amount: 0.148, percentage: 17.2 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.210, percentage: 70.5 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.411, percentage: 83.5 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.237, percentage: 86.5 }, lastYear: { amount: 0.118, percentage: 8.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.361, percentage: 99.4 }, lastYear: { amount: 0.108, percentage: 29.8 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.491, percentage: 89.0 }, lastYear: { amount: 0.678, percentage: 24.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.857, percentage: 92.9 }, lastYear: { amount: 1.237, percentage: 61.9 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.071, percentage: 91.4 }, lastYear: { amount: 2.263, percentage: 50.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 13, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.213 }, total:115.708 },
];

export const getReportDate = (): string => "13-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.7% (45.7 MCM) — steady slow decline, 25.7pp above last year\'s 14.0%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.7% (45.7 ΕΚΜ) — αργή υποχώρηση. 25.7μ.π. πάνω από πέρυσι (14.0%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.7% (45.7 МКМ) — медленное снижение. +25.7пп выше прошлогодних 14.0%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.4% (4.00 MCM) — essentially unchanged, well above last year\'s 16.5%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 23.4% (4.00 ΕΚΜ) — σχεδόν αμετάβλητος, πάνω από πέρυσι (16.5%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.4% (4.00 МКМ) — почти без изменений, выше прошлогодних 16.5%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.9% (2.47 MCM) — essentially unchanged for weeks, above last year\'s 15.7%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 17.9% (2.47 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (15.7%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 17.9% (2.47 МКМ) — без изменений неделями, выше прошлогодних 15.7%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 31.1% (4.82 MCM) — easing in dry season; 2.1pp above last year\'s 29.0%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 31.1% (4.82 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.1μ.π. πάνω από πέρυσι (29.0%).',
      ru: 'Дипотамос на 31.1% (4.82 МКМ) — снижение в сухой сезон, +2.1пп выше прошлогодних 29.0%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 54.1% (7.30 MCM) — gradual summer decline, 41.6pp above last year\'s 12.5%. Highest mid-August level in years.',
      el: 'Η Γερμασόγεια στο 54.1% (7.30 ΕΚΜ) — σταδιακή υποχώρηση. 41.6μ.π. πάνω από πέρυσι (12.5%).',
      ru: 'Гермасойя на 54.1% (7.30 МКМ) — постепенное летнее снижение. +41.6пп выше прошлогодних 12.5%.',
    },
    'Arminou': {
      en: 'Arminou at 58.6% (2.52 MCM) — holding flat on its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.6% (2.52 ΕΚΜ) — σταθερός στο καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.6% (2.52 МКМ) — стабилен на летнем плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 45.0% (1.53 MCM) — down 0.2pp since Tuesday, holding below the 50% mark. Still 16.4pp above last year\'s 28.6%.',
      el: 'Η Πολεμίδια στο 45.0% (1.53 ΕΚΜ) — υποχώρησε 0.2μ.π. από την Τρίτη, κάτω από το 50%. 16.4μ.π. πάνω από πέρυσι (28.6%).',
      ru: 'Полемидия на 45.0% (1.53 МКМ) — снизилась на 0.2пп со вторника, ниже отметки 50%. +16.4пп выше прошлогодних 28.6%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.5% (0.10 MCM), zero inflow all season. Far below last year\'s 4.8%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.5% (0.10 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.8%).',
      ru: 'Ахна критически низкая — 1.5% (0.10 МКМ), без притока за сезон. Далеко ниже прошлогодних 4.8%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.0% (20.41 MCM) — slow drawdown, 23.8pp above last year\'s 15.2%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.0% (20.41 ΕΚΜ) — αργή υποχώρηση, 23.8μ.π. πάνω από πέρυσι (15.2%).',
      ru: 'Аспрокреммос на 39.0% (20.41 МКМ) — медленное снижение, +23.8пп выше прошлогодних 15.2%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 47.0% (8.08 MCM) — just below the 50% threshold, still 29.6pp above last year\'s 17.4%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 47.0% (8.08 ΕΚΜ) — λίγο κάτω από το 50%, 29.6μ.π. πάνω από πέρυσι (17.4%).',
      ru: 'Каннавиу на 47.0% (8.08 МКМ) — чуть ниже границы 50%, +29.6пп выше прошлогодних 17.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 57.8% (1.26 MCM) — the largest mover of this bulletin, down 1.1pp since Tuesday as it continues easing from its summer peak. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 57.8% (1.26 ΕΚΜ) — η μεγαλύτερη κίνηση του δελτίου, -1.1μ.π. από την Τρίτη. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 57.8% (1.26 МКМ) — крупнейшее изменение бюллетеня, -1.1пп со вторника. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 43.5% (10.44 MCM) — drifting steadily lower through the dry season; still 26.6pp above last year\'s 16.9%.',
      el: 'Ο Εύρετου στο 43.5% (10.44 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 26.6μ.π. πάνω από πέρυσι (16.9%).',
      ru: 'Эвретоу на 43.5% (10.44 МКМ) — устойчивое снижение в сухой сезон. +26.6пп выше прошлогодних 16.9%.',
    },
    'Argaka': {
      en: 'Argaka at 66.3% (0.66 MCM) — extending its multi-week slide, down 0.7pp since Tuesday. Up from 7.4% last year — a 9.0× year-over-year recovery.',
      el: 'Η Αργάκα στο 66.3% (0.66 ΕΚΜ) — συνεχίζει η πολυεβδομαδιαία πτώση, -0.7μ.π. από την Τρίτη. Από 7.4% πέρυσι — 9.0× ανάκαμψη.',
      ru: 'Аргака на 66.3% (0.66 МКМ) — продолжается многонедельное снижение, -0.7пп со вторника. Год назад 7.4% — 9.0-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 75.5% (0.65 MCM) — down 0.7pp since Tuesday, continued retreat from near-full. Up from 17.2% last year.',
      el: 'Ο Πόμος στο 75.5% (0.65 ΕΚΜ) — υποχώρησε 0.7μ.π. από την Τρίτη, υποχωρεί από το σχεδόν πλήρες. Από 17.2% πέρυσι.',
      ru: 'Помос на 75.5% (0.65 МКМ) — снизился на 0.7пп со вторника, отступает от почти полного уровня. Год назад 17.2%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 70.5% (0.21 MCM) — the second-largest mover of the bulletin, down 1.0pp since Tuesday. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 70.5% (0.21 ΕΚΜ) — η δεύτερη μεγαλύτερη κίνηση του δελτίου, -1.0μ.π. από την Τρίτη. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 70.5% (0.21 МКМ) — второе по величине изменение бюллетеня, -1.0пп со вторника. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 83.5% (1.41 MCM) — continued slow decline below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 83.5% (1.41 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 83.5% (1.41 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 86.5% (1.24 MCM) — slow decline continues below 90%. Was 8.3% last year.',
      el: 'Ο Ξυλιάτος στο 86.5% (1.24 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 8.3% πέρυσι.',
      ru: 'Ксилиатос на 86.5% (1.24 МКМ) — медленное снижение ниже 90% продолжается. Год назад 8.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis at 99.4% (0.36 MCM) — no longer overflowing after four months at full capacity, easing 0.6pp since Tuesday. Up from 29.8% last year.',
      el: 'Ο Καλοπαναγιώτης στο 99.4% (0.36 ΕΚΜ) — δεν υπερχειλίζει πλέον μετά από τέσσερις μήνες στο μέγιστο, -0.6μ.π. από την Τρίτη. Αύξηση από 29.8% πέρυσι.',
      ru: 'Калопанайотис на 99.4% (0.36 МКМ) — больше не переливается после четырёх месяцев на максимуме, -0.6пп со вторника. Рост с 29.8% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 89.0% (2.49 MCM) — easing from full, down 0.1pp since Tuesday. Was 24.2% last year — a 3.7× year-over-year recovery.',
      el: 'Ο Ταμασός στο 89.0% (2.49 ΕΚΜ) — υποχωρεί από το πλήρες, -0.1μ.π. από την Τρίτη. Από 24.2% πέρυσι — 3.7× ανάκαμψη.',
      ru: 'Тамассос на 89.0% (2.49 МКМ) — снижение от полного уровня, -0.1пп со вторника. Год назад 24.2% — восстановление в 3.7×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 92.9% (1.86 MCM) — holding steady near full through the dry season. Up from 61.9% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 92.9% (1.86 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 61.9% πέρυσι.',
      ru: 'Клиру-Малунта на 92.9% (1.86 МКМ) — стабильно у полного уровня. Рост с 61.9% год назад.',
    },
    'Solea': {
      en: 'Solea at 91.4% (4.07 MCM) — holding near full as dry season progresses. Up from 50.8% last year — 1.80× year-over-year improvement.',
      el: 'Η Σολέα στο 91.4% (4.07 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 50.8% πέρυσι — 1.80× βελτίωση.',
      ru: 'Солеа на 91.4% (4.07 МКМ) — удерживается вблизи полного уровня. Рост с 50.8% год назад — улучшение в 1.80×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (11 — 13 Αυγούστου 2026)

Δελτίο Πέμπτης: συνολική αποθήκευση **38.9%** (113.1 ΕΚΜ) — από 39.0% (113.5 ΕΚΜ) την Τρίτη, μια απώλεια 0.4 ΕΚΜ σε δύο ημέρες, με τον ίδιο αργό ρυθμό υποχώρησης να συνεχίζεται. Το πιο αξιοσημείωτο: ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) δεν υπερχειλίζει πλέον — υποχώρησε στο 99.4% μετά από τέσσερις μήνες στο 100%, ο μοναδικός σταθερός σταθμός της σεζόν. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) ήταν η μεγαλύτερη κίνηση, -1.1μ.π. στο 57.8%. Το χάσμα με πέρυσι παραμένει στις **23.0 μονάδες**. Εισροή σεζόν: 115.7 ΕΚΜ. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι Τρίτης):**
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **99.4%** (-0.6μ.π.) — δεν υπερχειλίζει πλέον, μετά από τέσσερις μήνες στο 100%
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **57.8%** (-1.1μ.π.) — η μεγαλύτερη κίνηση του δελτίου
- [Αγία Μαρίνα](/el/dam/agia-marina/) **70.5%** (-1.0μ.π.) — δεύτερη μεγαλύτερη κίνηση
- [Αργάκα](/el/dam/argaka/) **66.3%** (-0.7μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Πόμος](/el/dam/pomos/) **75.5%** (-0.7μ.π.) — συνεχίζει να υποχωρεί από το σχεδόν πλήρες
- [Αχνά](/el/dam/achna/) **1.5%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (11 — 13 августа 2026)

Бюллетень четверга: общий запас **38.9%** (113.1 МКМ) — против 39.0% (113.5 МКМ) во вторник, потеря 0.4 МКМ за два дня, тот же медленный темп снижения продолжается. Главное событие: [Калопанайотис](/ru/dam/kalopanagiotis/) больше не переливается — снизился до 99.4% после четырёх месяцев на уровне 100%, единственный устойчивый ориентир сезона. [Мавроколимпос](/ru/dam/mavrokolympos/) стал крупнейшим изменением, -1.1пп до 57.8%. Разрыв с прошлым годом держится на **23.0 пунктах**. Приток сезона: 115.7 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период со вторника):**
- [Калопанайотис](/ru/dam/kalopanagiotis/) **99.4%** (-0.6пп) — больше не переливается, после четырёх месяцев на 100%
- [Мавроколимпос](/ru/dam/mavrokolympos/) **57.8%** (-1.1пп) — крупнейшее изменение бюллетеня
- [Агия Марина](/ru/dam/agia-marina/) **70.5%** (-1.0пп) — второе по величине изменение
- [Аргака](/ru/dam/argaka/) **66.3%** (-0.7пп) — продолжается многонедельное снижение
- [Помос](/ru/dam/pomos/) **75.5%** (-0.7пп) — продолжает отступать от почти полного уровня
- [Ахна](/ru/dam/achna/) **1.5%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 11 — 13, 2026)

Thursday bulletin: total storage at **38.9%** (113.1 MCM) — down from 39.0% (113.5 MCM) on Tuesday, a loss of 0.4 MCM over two days, the same slow drawdown pace continuing. The standout story: [Kalopanagiotis](/dam/kalopanagiotis/) is no longer overflowing — it eased to 99.4% after four months at 100%, the season's one steady fixture finally moving. [Mavrokolympos](/dam/mavrokolympos/) was the largest mover, down 1.1pp to 57.8%. The gap over last year holds at **23.0 points**. Season inflow: 115.7 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. Tuesday):**
- [Kalopanagiotis](/dam/kalopanagiotis/) **99.4%** (-0.6pp) — no longer overflowing, after four months at 100%
- [Mavrokolympos](/dam/mavrokolympos/) **57.8%** (-1.1pp) — largest mover of this bulletin
- [Agia Marina](/dam/agia-marina/) **70.5%** (-1.0pp) — second-largest mover
- [Argaka](/dam/argaka/) **66.3%** (-0.7pp) — extending its multi-week slide
- [Pomos](/dam/pomos/) **75.5%** (-0.7pp) — continues easing from near-full
- [Achna](/dam/achna/) **1.5%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
