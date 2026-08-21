import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.040, totalSince: 26.655 }, storage: { current: { amount: 45.519, percentage: 39.6 }, lastYear: { amount: 15.655, percentage: 13.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.967, percentage: 23.2 }, lastYear: { amount: 2.730, percentage: 16.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.725 }, storage: { current: { amount: 2.462, percentage: 17.8 }, lastYear: { amount: 2.141, percentage: 15.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.768 }, storage: { current: { amount: 4.719, percentage: 30.4 }, lastYear: { amount: 4.348, percentage: 28.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.146, percentage: 52.9 }, lastYear: { amount: 1.557, percentage: 11.5 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.383 }, storage: { current: { amount: 2.523, percentage: 58.7 }, lastYear: { amount: 2.139, percentage: 49.7 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.497, percentage: 44.0 }, lastYear: { amount: 0.936, percentage: 27.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.095, percentage: 1.4 }, lastYear: { amount: 0.315, percentage: 4.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.182, percentage: 38.5 }, lastYear: { amount: 7.534, percentage: 14.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.945, percentage: 46.3 }, lastYear: { amount: 2.875, percentage: 16.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.051, percentage: 48.2 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.207, percentage: 42.5 }, lastYear: { amount: 3.906, percentage: 16.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.605, percentage: 61.1 }, lastYear: { amount: 0.041, percentage: 4.1 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.620, percentage: 72.1 }, lastYear: { amount: 0.138, percentage: 16.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.190, percentage: 63.8 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.389, percentage: 82.2 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.215, percentage: 85.0 }, lastYear: { amount: 0.108, percentage: 7.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.358, percentage: 98.6 }, lastYear: { amount: 0.093, percentage: 25.6 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: -0.010, totalSince: 2.648 }, storage: { current: { amount: 2.453, percentage: 87.6 }, lastYear: { amount: 0.656, percentage: 23.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 1.144 }, storage: { current: { amount: 1.837, percentage: 91.9 }, lastYear: { amount: 1.214, percentage: 60.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: -0.004, totalSince: 2.632 }, storage: { current: { amount: 4.015, percentage: 90.1 }, lastYear: { amount: 2.218, percentage: 49.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 21, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.546 }, total:116.041 },
];

export const getReportDate = (): string => "21-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.6% (45.5 MCM) — essentially flat, 26.0pp above last year\'s 13.6%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.6% (45.5 ΕΚΜ) — σχεδόν σταθερός, 26.0μ.π. πάνω από πέρυσι (13.6%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.6% (45.5 МКМ) — почти без изменений. +26.0пп выше прошлогодних 13.6%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.2% (3.97 MCM) — unchanged day over day, still 7.2pp above last year\'s 16.0%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 23.2% (3.97 ΕΚΜ) — αμετάβλητος, πάνω από πέρυσι (16.0%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.2% (3.97 МКМ) — без изменений, выше прошлогодних 16.0%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.8% (2.46 MCM) — unchanged, 2.3pp above last year\'s 15.5%. Seasonal inflow 1.73 MCM.',
      el: 'Η Λεύκαρα στο 17.8% (2.46 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (15.5%). Εισροή σεζόν 1.73 ΕΚΜ.',
      ru: 'Лефкара на 17.8% (2.46 МКМ) — без изменений, выше прошлогодних 15.5%. Приток 1.73 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 30.4% (4.72 MCM) — a slight one-day dip, 2.3pp above last year\'s 28.1%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 30.4% (4.72 ΕΚΜ) — ελαφριά υποχώρηση, 2.3μ.π. πάνω από πέρυσι (28.1%).',
      ru: 'Дипотамос на 30.4% (4.72 МКМ) — небольшое снижение, +2.3пп выше прошлогодних 28.1%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 52.9% (7.15 MCM) — a slight one-day dip, 41.4pp above last year\'s 11.5%. Among the highest mid-August levels in years.',
      el: 'Η Γερμασόγεια στο 52.9% (7.15 ΕΚΜ) — ελαφριά υποχώρηση. 41.4μ.π. πάνω από πέρυσι (11.5%).',
      ru: 'Гермасойя на 52.9% (7.15 МКМ) — небольшое снижение. +41.4пп выше прошлогодних 11.5%.',
    },
    'Arminou': {
      en: 'Arminou at 58.7% (2.52 MCM) — still holding on its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.7% (2.52 ΕΚΜ) — παραμένει σταθερός στο καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.7% (2.52 МКМ) — по-прежнему стабилен на летнем плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 44.0% (1.50 MCM) — near-unchanged day over day, still 16.5pp above last year\'s 27.5%.',
      el: 'Η Πολεμίδια στο 44.0% (1.50 ΕΚΜ) — σχεδόν αμετάβλητη, 16.5μ.π. πάνω από πέρυσι (27.5%).',
      ru: 'Полемидия на 44.0% (1.50 МКМ) — почти без изменений, +16.5пп выше прошлогодних 27.5%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.4% (0.10 MCM), zero inflow all season. Far below last year\'s 4.6%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.4% (0.10 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.6%).',
      ru: 'Ахна критически низкая — 1.4% (0.10 МКМ), без притока за сезон. Далеко ниже прошлогодних 4.6%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.5% (20.18 MCM) — a slight one-day dip, 24.1pp above last year\'s 14.4%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.5% (20.18 ΕΚΜ) — ελαφριά υποχώρηση, 24.1μ.π. πάνω από πέρυσι (14.4%).',
      ru: 'Аспрокреммос на 38.5% (20.18 МКМ) — небольшое снижение, +24.1пп выше прошлогодних 14.4%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 46.3% (7.95 MCM) — near-unchanged, still 29.6pp above last year\'s 16.7%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 46.3% (7.95 ΕΚΜ) — σχεδόν αμετάβλητος, 29.6μ.π. πάνω από πέρυσι (16.7%).',
      ru: 'Каннавиу на 46.3% (7.95 МКМ) — почти без изменений, +29.6пп выше прошлогодних 16.7%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 48.2% (1.05 MCM) — the largest mover of this bulletin for a second straight day, down 1.9pp as its summer slide continues. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 48.2% (1.05 ΕΚΜ) — η μεγαλύτερη κίνηση του δελτίου για δεύτερη συνεχή ημέρα, -1.9μ.π. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 48.2% (1.05 МКМ) — крупнейшее изменение бюллетеня второй день подряд, -1.9пп. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 42.5% (10.21 MCM) — essentially flat, still 26.2pp above last year\'s 16.3%.',
      el: 'Ο Εύρετου στο 42.5% (10.21 ΕΚΜ) — σχεδόν σταθερός. 26.2μ.π. πάνω από πέρυσι (16.3%).',
      ru: 'Эвретоу на 42.5% (10.21 МКМ) — почти без изменений. +26.2пп выше прошлогодних 16.3%.',
    },
    'Argaka': {
      en: 'Argaka at 61.1% (0.61 MCM) — unchanged day over day, still up from 4.1% last year — a 15× year-over-year recovery.',
      el: 'Η Αργάκα στο 61.1% (0.61 ΕΚΜ) — αμετάβλητη. Από 4.1% πέρυσι — 15× ανάκαμψη.',
      ru: 'Аргака на 61.1% (0.61 МКМ) — без изменений. Год назад 4.1% — 15-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 72.1% (0.62 MCM) — the second-largest mover of the bulletin, down 0.8pp in one day, continued retreat from near-full. Up from 16.0% last year.',
      el: 'Ο Πόμος στο 72.1% (0.62 ΕΚΜ) — η δεύτερη μεγαλύτερη κίνηση του δελτίου, -0.8μ.π. σε μία ημέρα. Από 16.0% πέρυσι.',
      ru: 'Помос на 72.1% (0.62 МКМ) — второе по величине изменение бюллетеня, -0.8пп за один день. Год назад 16.0%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 63.8% (0.19 MCM) — down 1.3pp in one day, continuing its multi-week slide. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 63.8% (0.19 ΕΚΜ) — -1.3μ.π. σε μία ημέρα, συνεχίζει η πολυεβδομαδιαία πτώση. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 63.8% (0.19 МКМ) — -1.3пп за один день, продолжается многонедельное снижение. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 82.2% (1.39 MCM) — near-unchanged, still below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 82.2% (1.39 ΕΚΜ) — σχεδόν αμετάβλητα, κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 82.2% (1.39 МКМ) — почти без изменений, ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 85.0% (1.22 MCM) — essentially flat, still below 90%. Was 7.6% last year.',
      el: 'Ο Ξυλιάτος στο 85.0% (1.22 ΕΚΜ) — σχεδόν σταθερός, κάτω από το 90%. Από 7.6% πέρυσι.',
      ru: 'Ксилиатос на 85.0% (1.22 МКМ) — почти без изменений, ниже 90%. Год назад 7.6%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis at 98.6% (0.36 MCM) — drifting further off its four-month plateau at 100%, down 0.3pp in one day. Up from 25.6% last year.',
      el: 'Ο Καλοπαναγιώτης στο 98.6% (0.36 ΕΚΜ) — απομακρύνεται περαιτέρω από το τετράμηνο οροπέδιο στο 100%, -0.3μ.π. Αύξηση από 25.6% πέρυσι.',
      ru: 'Калопанайотис на 98.6% (0.36 МКМ) — дальше отдаляется от четырёхмесячного плато на 100%, -0.3пп. Рост с 25.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 87.6% (2.45 MCM) — down 0.5pp in one day. Was 23.4% last year — a 3.7× year-over-year recovery.',
      el: 'Ο Ταμασός στο 87.6% (2.45 ΕΚΜ) — -0.5μ.π. σε μία ημέρα. Από 23.4% πέρυσι — 3.7× ανάκαμψη.',
      ru: 'Тамассос на 87.6% (2.45 МКМ) — -0.5пп за один день. Год назад 23.4% — восстановление в 3.7×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 91.9% (1.84 MCM) — holding steady near full through the dry season. Up from 60.7% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 91.9% (1.84 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 60.7% πέρυσι.',
      ru: 'Клиру-Малунта на 91.9% (1.84 МКМ) — стабильно у полного уровня. Рост с 60.7% год назад.',
    },
    'Solea': {
      en: 'Solea at 90.1% (4.02 MCM) — holding near full as dry season progresses. Up from 49.8% last year — 1.81× year-over-year improvement.',
      el: 'Η Σολέα στο 90.1% (4.02 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 49.8% πέρυσι — 1.81× βελτίωση.',
      ru: 'Солеа на 90.1% (4.02 МКМ) — удерживается вблизи полного уровня. Рост с 49.8% год назад — улучшение в 1.81×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (13 — 21 Αυγούστου 2026)

Δελτίο Παρασκευής: συνολική αποθήκευση **38.4%** (111.7 ΕΚΜ) — από 38.9% (113.1 ΕΚΜ) πριν από οκτώ ημέρες, μια απώλεια περίπου 1.4 ΕΚΜ, στον ίδιο αργό ρυθμό υποχώρησης. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) είναι η μεγαλύτερη κίνηση της περιόδου, -9.6μ.π. στο 48.2%, συνεχίζοντας την απότομη καλοκαιρινή πτώση του. Η [Αγία Μαρίνα](/el/dam/agia-marina/) και η [Αργάκα](/el/dam/argaka/) ακολούθησαν με πτώσεις -6.7μ.π. και -5.2μ.π. αντίστοιχα. Το χάσμα με πέρυσι παραμένει στις **23.1 μονάδες**. Εισροή σεζόν: 116.0 ΕΚΜ. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 13 Αυγούστου):**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **48.2%** (-9.6μ.π.) — η μεγαλύτερη κίνηση της περιόδου, απότομη καλοκαιρινή πτώση
- [Αγία Μαρίνα](/el/dam/agia-marina/) **63.8%** (-6.7μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Αργάκα](/el/dam/argaka/) **61.1%** (-5.2μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Πόμος](/el/dam/pomos/) **72.1%** (-3.4μ.π.) — υποχωρεί από το σχεδόν πλήρες
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **98.6%** — απομακρύνεται περαιτέρω από το τετράμηνο οροπέδιο στο 100%
- [Αχνά](/el/dam/achna/) **1.4%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (13 — 21 августа 2026)

Бюллетень пятницы: общий запас **38.4%** (111.7 МКМ) — против 38.9% (113.1 МКМ) восемь дней назад, потеря около 1.4 МКМ, тот же медленный темп снижения. [Мавроколимпос](/ru/dam/mavrokolympos/) стал крупнейшим изменением периода, -9.6пп до 48.2%, продолжая своё резкое летнее снижение. [Агия Марина](/ru/dam/agia-marina/) и [Аргака](/ru/dam/argaka/) следуют за ним со снижениями -6.7пп и -5.2пп соответственно. Разрыв с прошлым годом остаётся на уровне **23.1 пункта**. Приток сезона: 116.0 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 13 августа):**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **48.2%** (-9.6пп) — крупнейшее изменение периода, резкое летнее снижение
- [Агия Марина](/ru/dam/agia-marina/) **63.8%** (-6.7пп) — продолжается многонедельное снижение
- [Аргака](/ru/dam/argaka/) **61.1%** (-5.2пп) — продолжается многонедельное снижение
- [Помос](/ru/dam/pomos/) **72.1%** (-3.4пп) — отступает от почти полного уровня
- [Калопанайотис](/ru/dam/kalopanagiotis/) **98.6%** — дальше отдаляется от четырёхмесячного плато на 100%
- [Ахна](/ru/dam/achna/) **1.4%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 13 — 21, 2026)

Friday bulletin: total storage at **38.4%** (111.7 MCM) — down from 38.9% (113.1 MCM) eight days ago, a loss of roughly 1.4 MCM, the same slow drawdown pace continuing. [Mavrokolympos](/dam/mavrokolympos/) was the largest mover of the period, down 9.6pp to 48.2% as its summer slide steepens; [Agia Marina](/dam/agia-marina/) and [Argaka](/dam/argaka/) followed with drops of 6.7pp and 5.2pp respectively. The gap over last year holds at **23.1 points**. Season inflow: 116.0 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. August 13):**
- [Mavrokolympos](/dam/mavrokolympos/) **48.2%** (-9.6pp) — largest mover of the period, steepening summer slide
- [Agia Marina](/dam/agia-marina/) **63.8%** (-6.7pp) — continuing its multi-week slide
- [Argaka](/dam/argaka/) **61.1%** (-5.2pp) — continuing its multi-week slide
- [Pomos](/dam/pomos/) **72.1%** (-3.4pp) — easing further from near-full
- [Kalopanagiotis](/dam/kalopanagiotis/) **98.6%** — drifting further off its four-month plateau at 100%
- [Achna](/dam/achna/) **1.4%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
