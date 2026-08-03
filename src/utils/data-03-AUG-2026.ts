import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.024, totalSince: 26.213 }, storage: { current: { amount: 46.246, percentage: 40.2 }, lastYear: { amount: 16.803, percentage: 14.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.035, percentage: 23.6 }, lastYear: { amount: 2.888, percentage: 16.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.494, percentage: 18.0 }, lastYear: { amount: 2.192, percentage: 15.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.036, percentage: 32.5 }, lastYear: { amount: 4.679, percentage: 30.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.459, percentage: 55.3 }, lastYear: { amount: 1.872, percentage: 13.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.006, totalSince: 22.329 }, storage: { current: { amount: 2.533, percentage: 58.9 }, lastYear: { amount: 2.265, percentage: 52.7 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.566, percentage: 46.1 }, lastYear: { amount: 1.003, percentage: 29.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.121, percentage: 1.8 }, lastYear: { amount: 0.344, percentage: 5.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.673, percentage: 39.5 }, lastYear: { amount: 8.480, percentage: 16.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.240, percentage: 48.0 }, lastYear: { amount: 3.106, percentage: 18.1 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.355, percentage: 62.2 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.714, percentage: 44.6 }, lastYear: { amount: 4.242, percentage: 17.7 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.701, percentage: 70.8 }, lastYear: { amount: 0.109, percentage: 11.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.683, percentage: 79.4 }, lastYear: { amount: 0.173, percentage: 20.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.232, percentage: 77.9 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.448, percentage: 85.7 }, lastYear: { amount: 0.012, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.271, percentage: 88.9 }, lastYear: { amount: 0.140, percentage: 9.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.125, percentage: 34.4 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.563, percentage: 91.5 }, lastYear: { amount: 0.714, percentage: 25.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.883, percentage: 94.2 }, lastYear: { amount: 1.267, percentage: 63.4 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.125, percentage: 92.6 }, lastYear: { amount: 2.327, percentage: 52.2 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 3, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.03 }, total:115.525 },
];

export const getReportDate = (): string => "03-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 40.2% (46.2 MCM) — steady slow decline, 25.6pp above last year\'s 14.6%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 40.2% (46.2 ΕΚΜ) — αργή υποχώρηση. 25.6μ.π. πάνω από πέρυσι (14.6%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 40.2% (46.2 МКМ) — медленное снижение. +25.6пп выше прошлогодних 14.6%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.6% (4.04 MCM) — essentially unchanged, well above last year\'s 16.9%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 23.6% (4.04 ΕΚΜ) — σχεδόν αμετάβλητος, πάνω από πέρυσι (16.9%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.6% (4.04 МКМ) — почти без изменений, выше прошлогодних 16.9%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.0% (2.49 MCM) — essentially unchanged for weeks, above last year\'s 15.8%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.0% (2.49 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (15.8%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.0% (2.49 МКМ) — без изменений неделями, выше прошлогодних 15.8%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 32.5% (5.04 MCM) — easing in dry season; 2.3pp above last year\'s 30.2%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 32.5% (5.04 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.3μ.π. πάνω από πέρυσι (30.2%).',
      ru: 'Дипотамос на 32.5% (5.04 МКМ) — снижение в сухой сезон, +2.3пп выше прошлогодних 30.2%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 55.3% (7.46 MCM) — gradual summer decline, 41.4pp above last year\'s 13.9%. Highest early-August level in years.',
      el: 'Η Γερμασόγεια στο 55.3% (7.46 ΕΚΜ) — σταδιακή υποχώρηση. 41.4μ.π. πάνω από πέρυσι (13.9%).',
      ru: 'Гермасойя на 55.3% (7.46 МКМ) — постепенное летнее снижение. +41.4пп выше прошлогодних 13.9%.',
    },
    'Arminou': {
      en: 'Arminou at 58.9% (2.53 MCM) — Friday\'s brief uptick to 59.0% didn\'t hold. Season inflow 22.3 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.9% (2.53 ΕΚΜ) — η σύντομη άνοδος της Παρασκευής στο 59.0% δεν κράτησε. Εισροή σεζόν: 22.3 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.9% (2.53 МКМ) — пятничный рост до 59.0% не удержался. Приток сезона: 22.3 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 46.1% (1.57 MCM) — down 2.1pp over the weekend, dropping further below the 50% mark. Still 16.6pp above last year\'s 29.5%.',
      el: 'Η Πολεμίδια στο 46.1% (1.57 ΕΚΜ) — υποχώρησε 2.1μ.π. το σαββατοκύριακο, κάτω από το 50%. 16.6μ.π. πάνω από πέρυσι (29.5%).',
      ru: 'Полемидия на 46.1% (1.57 МКМ) — снизилась на 2.1пп за выходные, ниже отметки 50%. +16.6пп выше прошлогодних 29.5%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.8% (0.12 MCM), zero inflow all season. Far below last year\'s 5.1%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.8% (0.12 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.1%).',
      ru: 'Ахна критически низкая — 1.8% (0.12 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.1%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.5% (20.67 MCM) — slow drawdown, 23.3pp above last year\'s 16.2%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.5% (20.67 ΕΚΜ) — αργή υποχώρηση, 23.3μ.π. πάνω από πέρυσι (16.2%).',
      ru: 'Аспрокреммос на 39.5% (20.67 МКМ) — медленное снижение, +23.3пп выше прошлогодних 16.2%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.0% (8.24 MCM) — just below the 50% threshold, still 29.9pp above last year\'s 18.1%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 48.0% (8.24 ΕΚΜ) — λίγο κάτω από το 50%, 29.9μ.π. πάνω από πέρυσι (18.1%).',
      ru: 'Каннавиу на 48.0% (8.24 МКМ) — чуть ниже границы 50%, +29.9пп выше прошлогодних 18.1%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 62.2% (1.36 MCM) — continued easing from its summer peak, down 0.8pp over the weekend. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 62.2% (1.36 ΕΚΜ) — συνεχίζει να υποχωρεί από την κορύφωση του καλοκαιριού. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 62.2% (1.36 МКМ) — продолжает снижаться от летнего пика. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 44.6% (10.71 MCM) — drifting steadily lower through the dry season; still 26.9pp above last year\'s 17.7%.',
      el: 'Ο Εύρετου στο 44.6% (10.71 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 26.9μ.π. πάνω από πέρυσι (17.7%).',
      ru: 'Эвретоу на 44.6% (10.71 МКМ) — устойчивое снижение в сухой сезон. +26.9пп выше прошлогодних 17.7%.',
    },
    'Argaka': {
      en: 'Argaka at 70.8% (0.70 MCM) — extending its multi-week slide, down 1.5pp over the weekend. Up from 11.0% last year — a 6.4× year-over-year recovery.',
      el: 'Η Αργάκα στο 70.8% (0.70 ΕΚΜ) — συνεχίζει η πολυεβδομαδιαία πτώση, -1.5μ.π. το σαββατοκύριακο. Από 11.0% πέρυσι — 6.4× ανάκαμψη.',
      ru: 'Аргака на 70.8% (0.70 МКМ) — продолжается многонедельное снижение, -1.5пп за выходные. Год назад 11.0% — 6.4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 79.4% (0.68 MCM) — down 1.6pp over the weekend, continued retreat from near-full. Up from 20.1% last year.',
      el: 'Ο Πόμος στο 79.4% (0.68 ΕΚΜ) — υποχώρησε 1.6μ.π. το σαββατοκύριακο, υποχωρεί από το σχεδόν πλήρες. Από 20.1% πέρυσι.',
      ru: 'Помос на 79.4% (0.68 МКМ) — снизился на 1.6пп за выходные, отступает от почти полного уровня. Год назад 20.1%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 77.9% (0.23 MCM) — the steepest decline of the period, down 2.6pp over the weekend as it eases off its summer plateau. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 77.9% (0.23 ΕΚΜ) — η μεγαλύτερη πτώση της περιόδου, -2.6μ.π. το σαββατοκύριακο, καθώς υποχωρεί από το καλοκαιρινό πλατό. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 77.9% (0.23 МКМ) — самое сильное снижение периода, -2.6пп за выходные, отступает от летнего плато. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 85.7% (1.45 MCM) — continued slow decline below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 85.7% (1.45 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 85.7% (1.45 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 88.9% (1.27 MCM) — slow decline continues below 90%. Was 9.8% last year.',
      el: 'Ο Ξυλιάτος στο 88.9% (1.27 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 9.8% πέρυσι.',
      ru: 'Ксилиатос на 88.9% (1.27 МКМ) — медленное снижение ниже 90% продолжается. Год назад 9.8%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 34.4% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 34.4% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 34.4% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 91.5% (2.56 MCM) — easing slowly from full. Was 25.5% last year — a 3.6× year-over-year recovery.',
      el: 'Ο Ταμασός στο 91.5% (2.56 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 25.5% πέρυσι — 3.6× ανάκαμψη.',
      ru: 'Тамассос на 91.5% (2.56 МКМ) — медленное снижение от полного уровня. Год назад 25.5% — восстановление в 3.6×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 94.2% (1.88 MCM) — holding steady near full through the dry season. Up from 63.4% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 94.2% (1.88 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 63.4% πέρυσι.',
      ru: 'Клиру-Малунта на 94.2% (1.88 МКМ) — стабильно у полного уровня. Рост с 63.4% год назад.',
    },
    'Solea': {
      en: 'Solea at 92.6% (4.13 MCM) — holding near full as dry season progresses. Up from 52.2% last year — 1.77× year-over-year improvement.',
      el: 'Η Σολέα στο 92.6% (4.13 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 52.2% πέρυσι — 1.77× βελτίωση.',
      ru: 'Солеа на 92.6% (4.13 МКМ) — удерживается вблизи полного уровня. Рост с 52.2% год назад — улучшение в 1.77×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (31 Ιουλίου — 3 Αυγούστου 2026)

Δελτίο Δευτέρας, καλύπτοντας το σαββατοκύριακο: συνολική αποθήκευση **39.6%** (115.2 ΕΚΜ) — από 39.8% (115.8 ΕΚΜ) την Παρασκευή, μια απώλεια 0.7 ΕΚΜ. Η [Αγία Μαρίνα](/el/dam/agia-marina/) κατέγραψε τη μεγαλύτερη πτώση του σαββατοκύριακου, υποχωρώντας από 80.5% σε 77.9% (-2.6μ.π.). Η άνοδος του [Αρμίνου](/el/dam/arminou/) την Παρασκευή δεν κράτησε — υποχώρησε πάλι στο 58.9% (-0.1μ.π.). Το χάσμα με πέρυσι κρατά στο **+22.9μ.π.** Εισροή σεζόν 25/26: **115.5 ΕΚΜ**. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι Παρασκευής):**
- [Αγία Μαρίνα](/el/dam/agia-marina/) **77.9%** (-2.6μ.π.) — η μεγαλύτερη πτώση του σαββατοκύριακου
- [Πολεμίδια](/el/dam/polemidia/) **46.1%** (-2.1μ.π.) — κάτω από το 50%
- [Πόμος](/el/dam/pomos/) **79.4%** (-1.6μ.π.) — συνεχίζει να υποχωρεί από το σχεδόν πλήρες
- [Αργάκα](/el/dam/argaka/) **70.8%** (-1.5μ.π.) — συνεχίζει να υποχωρεί
- [Αρμίνου](/el/dam/arminou/) **58.9%** (-0.1μ.π.) — δεν κράτησε η άνοδος της Παρασκευής
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.8%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (31 июля — 3 августа 2026)

Бюллетень понедельника, за выходные: общий запас **39.6%** (115.2 МКМ) — против 39.8% (115.8 МКМ) в пятницу, потеря 0.7 МКМ. [Агия Марина](/ru/dam/agia-marina/) показала крупнейшее падение за выходные, снизившись с 80.5% до 77.9% (-2.6пп). Пятничный рост [Арминоу](/ru/dam/arminou/) не удержался — вернулся к 58.9% (-0.1пп). Разрыв с прошлым годом держится на **+22.9пп**. Приток сезона 25/26: **115.5 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за выходные):**
- [Агия Марина](/ru/dam/agia-marina/) **77.9%** (-2.6пп) — крупнейшее падение за выходные
- [Полемидия](/ru/dam/polemidia/) **46.1%** (-2.1пп) — опустилась ниже 50%
- [Помос](/ru/dam/pomos/) **79.4%** (-1.6пп) — продолжает отступать от почти полного уровня
- [Аргака](/ru/dam/argaka/) **70.8%** (-1.5пп) — продолжает снижаться
- [Арминоу](/ru/dam/arminou/) **58.9%** (-0.1пп) — пятничный рост не удержался
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.8%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (July 31 — August 3, 2026)

Monday bulletin, covering the weekend: total storage at **39.6%** (115.2 MCM) — down from 39.8% (115.8 MCM) on Friday, a loss of 0.7 MCM. [Agia Marina](/dam/agia-marina/) posted the largest weekend drop, sliding from 80.5% to 77.9% (-2.6pp). [Arminou](/dam/arminou/)'s Friday uptick didn't hold — it settled back to 58.9% (-0.1pp). The gap over last year holds at **+22.9pp**. Season total inflow: **115.5 MCM**. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. Friday):**
- [Agia Marina](/dam/agia-marina/) **77.9%** (-2.6pp) — the largest weekend drop
- [Polemidia](/dam/polemidia/) **46.1%** (-2.1pp) — dropped further below the 50% mark
- [Pomos](/dam/pomos/) **79.4%** (-1.6pp) — continues easing from near-full
- [Argaka](/dam/argaka/) **70.8%** (-1.5pp) — still sliding
- [Arminou](/dam/arminou/) **58.9%** (-0.1pp) — Friday's uptick didn't hold
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.8%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
