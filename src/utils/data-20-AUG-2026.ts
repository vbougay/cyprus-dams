import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.040, totalSince: 26.615 }, storage: { current: { amount: 45.537, percentage: 39.6 }, lastYear: { amount: 15.728, percentage: 13.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.971, percentage: 23.2 }, lastYear: { amount: 2.744, percentage: 16.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.725 }, storage: { current: { amount: 2.464, percentage: 17.8 }, lastYear: { amount: 2.145, percentage: 15.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.768 }, storage: { current: { amount: 4.737, percentage: 30.6 }, lastYear: { amount: 4.378, percentage: 28.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.167, percentage: 53.1 }, lastYear: { amount: 1.570, percentage: 11.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.002, totalSince: 22.383 }, storage: { current: { amount: 2.523, percentage: 58.7 }, lastYear: { amount: 2.145, percentage: 49.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.502, percentage: 44.2 }, lastYear: { amount: 0.941, percentage: 27.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.095, percentage: 1.4 }, lastYear: { amount: 0.317, percentage: 4.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.210, percentage: 38.6 }, lastYear: { amount: 7.582, percentage: 14.5 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.962, percentage: 46.4 }, lastYear: { amount: 2.890, percentage: 16.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.092, percentage: 50.1 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.242, percentage: 42.7 }, lastYear: { amount: 3.921, percentage: 16.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.605, percentage: 61.1 }, lastYear: { amount: 0.044, percentage: 4.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.627, percentage: 72.9 }, lastYear: { amount: 0.139, percentage: 16.2 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.194, percentage: 65.1 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.392, percentage: 82.4 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.217, percentage: 85.1 }, lastYear: { amount: 0.109, percentage: 7.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.359, percentage: 98.9 }, lastYear: { amount: 0.094, percentage: 25.9 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.466, percentage: 88.1 }, lastYear: { amount: 0.658, percentage: 23.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.841, percentage: 92.1 }, lastYear: { amount: 1.217, percentage: 60.9 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.024, percentage: 90.4 }, lastYear: { amount: 2.223, percentage: 49.9 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 20, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.506 }, total:116.001 },
];

export const getReportDate = (): string => "20-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.6% (45.5 MCM) — essentially flat, 25.9pp above last year\'s 13.7%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.6% (45.5 ΕΚΜ) — σχεδόν σταθερός, 25.9μ.π. πάνω από πέρυσι (13.7%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.6% (45.5 МКМ) — почти без изменений. +25.9пп выше прошлогодних 13.7%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.2% (3.97 MCM) — steady day over day, still 7.2pp above last year\'s 16.0%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 23.2% (3.97 ΕΚΜ) — σταθερός, πάνω από πέρυσι (16.0%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.2% (3.97 МКМ) — стабилен, выше прошлогодних 16.0%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.8% (2.46 MCM) — unchanged, 2.3pp above last year\'s 15.5%. Seasonal inflow 1.73 MCM.',
      el: 'Η Λεύκαρα στο 17.8% (2.46 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (15.5%). Εισροή σεζόν 1.73 ΕΚΜ.',
      ru: 'Лефкара на 17.8% (2.46 МКМ) — без изменений, выше прошлогодних 15.5%. Приток 1.73 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 30.6% (4.74 MCM) — a slight one-day dip, 2.4pp above last year\'s 28.2%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 30.6% (4.74 ΕΚΜ) — ελαφριά υποχώρηση, 2.4μ.π. πάνω από πέρυσι (28.2%).',
      ru: 'Дипотамос на 30.6% (4.74 МКМ) — небольшое снижение, +2.4пп выше прошлогодних 28.2%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 53.1% (7.17 MCM) — essentially flat, 41.5pp above last year\'s 11.6%. Among the highest mid-August levels in years.',
      el: 'Η Γερμασόγεια στο 53.1% (7.17 ΕΚΜ) — σχεδόν σταθερή. 41.5μ.π. πάνω από πέρυσι (11.6%).',
      ru: 'Гермасойя на 53.1% (7.17 МКМ) — почти без изменений. +41.5пп выше прошлогодних 11.6%.',
    },
    'Arminou': {
      en: 'Arminou at 58.7% (2.52 MCM) — still holding on its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.7% (2.52 ΕΚΜ) — παραμένει σταθερός στο καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.7% (2.52 МКМ) — по-прежнему стабилен на летнем плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 44.2% (1.50 MCM) — unchanged day over day, still 16.5pp above last year\'s 27.7%.',
      el: 'Η Πολεμίδια στο 44.2% (1.50 ΕΚΜ) — αμετάβλητη, 16.5μ.π. πάνω από πέρυσι (27.7%).',
      ru: 'Полемидия на 44.2% (1.50 МКМ) — без изменений, +16.5пп выше прошлогодних 27.7%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.4% (0.10 MCM), zero inflow all season. Far below last year\'s 4.7%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.4% (0.10 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.7%).',
      ru: 'Ахна критически низкая — 1.4% (0.10 МКМ), без притока за сезон. Далеко ниже прошлогодних 4.7%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.6% (20.21 MCM) — steady day over day, 24.1pp above last year\'s 14.5%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.6% (20.21 ΕΚΜ) — σταθερός, 24.1μ.π. πάνω από πέρυσι (14.5%).',
      ru: 'Аспрокреммос на 38.6% (20.21 МКМ) — стабилен, +24.1пп выше прошлогодних 14.5%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 46.4% (7.96 MCM) — near-unchanged, still 29.6pp above last year\'s 16.8%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 46.4% (7.96 ΕΚΜ) — σχεδόν αμετάβλητος, 29.6μ.π. πάνω από πέρυσι (16.8%).',
      ru: 'Каннавиу на 46.4% (7.96 МКМ) — почти без изменений, +29.6пп выше прошлогодних 16.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 50.1% (1.09 MCM) — the largest mover of this bulletin, down 1.9pp in one day as its summer slide continues. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 50.1% (1.09 ΕΚΜ) — η μεγαλύτερη κίνηση του δελτίου, -1.9μ.π. σε μία ημέρα. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 50.1% (1.09 МКМ) — крупнейшее изменение бюллетеня, -1.9пп за один день. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 42.7% (10.24 MCM) — essentially flat, still 26.4pp above last year\'s 16.3%.',
      el: 'Ο Εύρετου στο 42.7% (10.24 ΕΚΜ) — σχεδόν σταθερός. 26.4μ.π. πάνω από πέρυσι (16.3%).',
      ru: 'Эвретоу на 42.7% (10.24 МКМ) — почти без изменений. +26.4пп выше прошлогодних 16.3%.',
    },
    'Argaka': {
      en: 'Argaka at 61.1% (0.61 MCM) — extending its multi-week slide, down 0.6pp in one day. Up from 4.4% last year — a 14× year-over-year recovery.',
      el: 'Η Αργάκα στο 61.1% (0.61 ΕΚΜ) — συνεχίζει η πολυεβδομαδιαία πτώση, -0.6μ.π. σε μία ημέρα. Από 4.4% πέρυσι — 14× ανάκαμψη.',
      ru: 'Аргака на 61.1% (0.61 МКМ) — продолжается многонедельное снижение, -0.6пп за один день. Год назад 4.4% — 14-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 72.9% (0.63 MCM) — down 0.4pp in one day, continued retreat from near-full. Up from 16.2% last year.',
      el: 'Ο Πόμος στο 72.9% (0.63 ΕΚΜ) — υποχώρησε 0.4μ.π. σε μία ημέρα, υποχωρεί από το σχεδόν πλήρες. Από 16.2% πέρυσι.',
      ru: 'Помос на 72.9% (0.63 МКМ) — снизился на 0.4пп за один день, отступает от почти полного уровня. Год назад 16.2%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 65.1% (0.19 MCM) — the second-largest mover of the bulletin, down 0.7pp in one day. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 65.1% (0.19 ΕΚΜ) — η δεύτερη μεγαλύτερη κίνηση του δελτίου, -0.7μ.π. σε μία ημέρα. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 65.1% (0.19 МКМ) — второе по величине изменение бюллетеня, -0.7пп за один день. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 82.4% (1.39 MCM) — near-unchanged, still below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 82.4% (1.39 ΕΚΜ) — σχεδόν αμετάβλητα, κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 82.4% (1.39 МКМ) — почти без изменений, ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 85.1% (1.22 MCM) — essentially flat, still below 90%. Was 7.6% last year.',
      el: 'Ο Ξυλιάτος στο 85.1% (1.22 ΕΚΜ) — σχεδόν σταθερός, κάτω από το 90%. Από 7.6% πέρυσι.',
      ru: 'Ксилиатос на 85.1% (1.22 МКМ) — почти без изменений, ниже 90%. Год назад 7.6%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis at 98.9% (0.36 MCM) — holding steady off its four-month plateau at 100%, unchanged in one day. Up from 25.9% last year.',
      el: 'Ο Καλοπαναγιώτης στο 98.9% (0.36 ΕΚΜ) — σταθερός μετά το τετράμηνο οροπέδιο στο 100%, αμετάβλητος. Αύξηση από 25.9% πέρυσι.',
      ru: 'Калопанайотис на 98.9% (0.36 МКМ) — стабилен после четырёхмесячного плато на 100%, без изменений. Рост с 25.9% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 88.1% (2.47 MCM) — steady, down just 0.1pp in one day. Was 23.5% last year — a 3.7× year-over-year recovery.',
      el: 'Ο Ταμασός στο 88.1% (2.47 ΕΚΜ) — σταθερός, -0.1μ.π. σε μία ημέρα. Από 23.5% πέρυσι — 3.7× ανάκαμψη.',
      ru: 'Тамассос на 88.1% (2.47 МКМ) — стабилен, -0.1пп за один день. Год назад 23.5% — восстановление в 3.7×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 92.1% (1.84 MCM) — holding steady near full through the dry season. Up from 60.9% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 92.1% (1.84 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 60.9% πέρυσι.',
      ru: 'Клиру-Малунта на 92.1% (1.84 МКМ) — стабильно у полного уровня. Рост с 60.9% год назад.',
    },
    'Solea': {
      en: 'Solea at 90.4% (4.02 MCM) — holding near full as dry season progresses. Up from 49.9% last year — 1.81× year-over-year improvement.',
      el: 'Η Σολέα στο 90.4% (4.02 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 49.9% πέρυσι — 1.81× βελτίωση.',
      ru: 'Солеа на 90.4% (4.02 МКМ) — удерживается вблизи полного уровня. Рост с 49.9% год назад — улучшение в 1.81×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (13 — 20 Αυγούστου 2026)

Δελτίο Πέμπτης: συνολική αποθήκευση **38.5%** (111.9 ΕΚΜ) — από 38.9% (113.1 ΕΚΜ) την Πέμπτη πριν από μία εβδομάδα, μια απώλεια περίπου 1.2 ΕΚΜ σε επτά ημέρες, στον ίδιο αργό ρυθμό υποχώρησης. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) ήταν η μεγαλύτερη κίνηση του τελευταίου εικοσιτετραώρου, -1.9μ.π. στο 50.1%, συνεχίζοντας την πολυεβδομαδιαία πτώση του. Η εισροή του τελευταίου εικοσιτετραώρου ήταν μόλις 0.04 ΕΚΜ, σχεδόν αποκλειστικά στον [Κούρη](/el/dam/kouris/). Το χάσμα με πέρυσι παραμένει στις **23.1 μονάδες**. Εισροή σεζόν: 116.0 ΕΚΜ. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 19 Αυγούστου):**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **50.1%** (-1.9μ.π.) — η μεγαλύτερη κίνηση, συνεχίζει η καλοκαιρινή πτώση
- [Αγία Μαρίνα](/el/dam/agia-marina/) **65.1%** (-0.7μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Αργάκα](/el/dam/argaka/) **61.1%** (-0.6μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **98.9%** — σταθερός μετά το τετράμηνο οροπέδιο στο 100%
- [Αχνά](/el/dam/achna/) **1.4%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (13 — 20 августа 2026)

Бюллетень четверга: общий запас **38.5%** (111.9 МКМ) — против 38.9% (113.1 МКМ) в четверг неделю назад, потеря около 1.2 МКМ за семь дней, тот же медленный темп снижения. [Мавроколимпос](/ru/dam/mavrokolympos/) стал крупнейшим изменением за последние сутки, -1.9пп до 50.1%, продолжая своё многонедельное снижение. Приток за сутки составил всего 0.04 МКМ, почти весь на [Курисе](/ru/dam/kouris/). Разрыв с прошлым годом остаётся на уровне **23.1 пункта**. Приток сезона: 116.0 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 19 августа):**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **50.1%** (-1.9пп) — крупнейшее изменение, продолжается летнее снижение
- [Агия Марина](/ru/dam/agia-marina/) **65.1%** (-0.7пп) — продолжается многонедельное снижение
- [Аргака](/ru/dam/argaka/) **61.1%** (-0.6пп) — продолжается многонедельное снижение
- [Калопанайотис](/ru/dam/kalopanagiotis/) **98.9%** — стабилен после четырёхмесячного плато на 100%
- [Ахна](/ru/dam/achna/) **1.4%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 13 — 20, 2026)

Thursday bulletin: total storage at **38.5%** (111.9 MCM) — down from 38.9% (113.1 MCM) a week ago on Thursday, a loss of roughly 1.2 MCM over seven days, the same slow drawdown pace continuing. [Mavrokolympos](/dam/mavrokolympos/) was the largest mover over the last day, down 1.9pp to 50.1%, extending its multi-week slide. 24-hour inflow totaled just 0.04 MCM, almost all of it at [Kouris](/dam/kouris/). The gap over last year holds at **23.1 points**. Season inflow: 116.0 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. August 19):**
- [Mavrokolympos](/dam/mavrokolympos/) **50.1%** (-1.9pp) — largest mover, extending its summer slide
- [Agia Marina](/dam/agia-marina/) **65.1%** (-0.7pp) — continuing its multi-week slide
- [Argaka](/dam/argaka/) **61.1%** (-0.6pp) — continuing its multi-week slide
- [Kalopanagiotis](/dam/kalopanagiotis/) **98.9%** — steady, off its four-month plateau at 100%
- [Achna](/dam/achna/) **1.4%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
