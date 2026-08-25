import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.011, totalSince: 26.696 }, storage: { current: { amount: 45.303, percentage: 39.4 }, lastYear: { amount: 15.365, percentage: 13.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.946, percentage: 23.1 }, lastYear: { amount: 2.674, percentage: 15.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.725 }, storage: { current: { amount: 2.453, percentage: 17.7 }, lastYear: { amount: 2.137, percentage: 15.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.768 }, storage: { current: { amount: 4.661, percentage: 30.1 }, lastYear: { amount: 4.268, percentage: 27.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.053, percentage: 52.2 }, lastYear: { amount: 1.478, percentage: 10.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.004, totalSince: 22.397 }, storage: { current: { amount: 2.521, percentage: 58.6 }, lastYear: { amount: 2.110, percentage: 49.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.490, percentage: 43.8 }, lastYear: { amount: 0.916, percentage: 26.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.087, percentage: 1.3 }, lastYear: { amount: 0.309, percentage: 4.5 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.070, percentage: 38.3 }, lastYear: { amount: 7.299, percentage: 13.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.880, percentage: 45.9 }, lastYear: { amount: 2.804, percentage: 16.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.954, percentage: 43.8 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.117, percentage: 42.2 }, lastYear: { amount: 3.823, percentage: 15.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.586, percentage: 59.2 }, lastYear: { amount: 0.030, percentage: 3.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.609, percentage: 70.8 }, lastYear: { amount: 0.133, percentage: 15.5 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.184, percentage: 61.7 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.359, percentage: 80.4 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.194, percentage: 83.5 }, lastYear: { amount: 0.102, percentage: 7.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.315 }, storage: { current: { amount: 0.361, percentage: 99.4 }, lastYear: { amount: 0.081, percentage: 22.3 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.436, percentage: 87.0 }, lastYear: { amount: 0.647, percentage: 23.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.803, percentage: 90.1 }, lastYear: { amount: 1.202, percentage: 60.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.997, percentage: 89.7 }, lastYear: { amount: 2.198, percentage: 49.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 25, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.604 }, total:116.099 },
];

export const getReportDate = (): string => "25-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.4% (45.3 MCM) — essentially flat overnight, 26.0pp above last year\'s 13.4%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.4% (45.3 ΕΚΜ) — σχεδόν σταθερός, 26.0μ.π. πάνω από πέρυσι (13.4%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.4% (45.3 МКМ) — почти без изменений. +26.0пп выше прошлогодних 13.4%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.1% (3.95 MCM) — unchanged overnight, still 7.5pp above last year\'s 15.6%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 23.1% (3.95 ΕΚΜ) — αμετάβλητος, πάνω από πέρυσι (15.6%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.1% (3.95 МКМ) — без изменений, выше прошлогодних 15.6%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.7% (2.45 MCM) — flat overnight, 2.3pp above last year\'s 15.4%. Seasonal inflow 1.73 MCM.',
      el: 'Η Λεύκαρα στο 17.7% (2.45 ΕΚΜ) — σταθερή, πάνω από πέρυσι (15.4%). Εισροή σεζόν 1.73 ΕΚΜ.',
      ru: 'Лефкара на 17.7% (2.45 МКМ) — без изменений, выше прошлогодних 15.4%. Приток 1.73 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 30.1% (4.66 MCM) — a slight dip overnight, 2.6pp above last year\'s 27.5%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 30.1% (4.66 ΕΚΜ) — ελαφριά υποχώρηση, 2.6μ.π. πάνω από πέρυσι (27.5%).',
      ru: 'Дипотамос на 30.1% (4.66 МКМ) — небольшое снижение, +2.6пп выше прошлогодних 27.5%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 52.2% (7.05 MCM) — a slight dip overnight, still 41.3pp above last year\'s 10.9%.',
      el: 'Η Γερμασόγεια στο 52.2% (7.05 ΕΚΜ) — ελαφριά υποχώρηση. 41.3μ.π. πάνω από πέρυσι (10.9%).',
      ru: 'Гермасойя на 52.2% (7.05 МКМ) — небольшое снижение. +41.3пп выше прошлогодних 10.9%.',
    },
    'Arminou': {
      en: 'Arminou at 58.6% (2.52 MCM) — still holding on its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.6% (2.52 ΕΚΜ) — παραμένει σταθερός στο καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.6% (2.52 МКМ) — по-прежнему стабилен на летнем плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.8% (1.49 MCM) — essentially flat overnight, still 16.9pp above last year\'s 26.9%.',
      el: 'Η Πολεμίδια στο 43.8% (1.49 ΕΚΜ) — σχεδόν αμετάβλητη, 16.9μ.π. πάνω από πέρυσι (26.9%).',
      ru: 'Полемидия на 43.8% (1.49 МКМ) — почти без изменений, +16.9пп выше прошлогодних 26.9%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.3% (0.09 MCM), zero inflow all season. Far below last year\'s 4.5%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.3% (0.09 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.5%).',
      ru: 'Ахна критически низкая — 1.3% (0.09 МКМ), без притока за сезон. Далеко ниже прошлогодних 4.5%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.3% (20.07 MCM) — a slight dip overnight, 24.4pp above last year\'s 13.9%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.3% (20.07 ΕΚΜ) — ελαφριά υποχώρηση, 24.4μ.π. πάνω από πέρυσι (13.9%).',
      ru: 'Аспрокреммос на 38.3% (20.07 МКМ) — небольшое снижение, +24.4пп выше прошлогодних 13.9%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 45.9% (7.88 MCM) — near-unchanged, still 29.6pp above last year\'s 16.3%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 45.9% (7.88 ΕΚΜ) — σχεδόν αμετάβλητος, 29.6μ.π. πάνω από πέρυσι (16.3%).',
      ru: 'Каннавиу на 45.9% (7.88 МКМ) — почти без изменений, +29.6пп выше прошлогодних 16.3%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 43.8% (0.95 MCM) — down 0.6pp overnight, its slide continuing but at a gentler pace than the weekend. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 43.8% (0.95 ΕΚΜ) — -0.6μ.π., η πτώση συνεχίζεται πιο ήπια απ\' ό,τι το Σαββατοκύριακο. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 43.8% (0.95 МКМ) — -0.6пп, снижение продолжается мягче, чем на выходных. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 42.2% (10.12 MCM) — essentially flat, still 26.3pp above last year\'s 15.9%.',
      el: 'Ο Εύρετου στο 42.2% (10.12 ΕΚΜ) — σχεδόν σταθερός. 26.3μ.π. πάνω από πέρυσι (15.9%).',
      ru: 'Эвретоу на 42.2% (10.12 МКМ) — почти без изменений. +26.3пп выше прошлогодних 15.9%.',
    },
    'Argaka': {
      en: 'Argaka at 59.2% (0.59 MCM) — down 0.2pp overnight, continuing its multi-week slide. Up from 3.0% last year — a 19.7× year-over-year recovery.',
      el: 'Η Αργάκα στο 59.2% (0.59 ΕΚΜ) — -0.2μ.π. Από 3.0% πέρυσι — 19.7× ανάκαμψη.',
      ru: 'Аргака на 59.2% (0.59 МКМ) — -0.2пп. Год назад 3.0% — 19.7-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 70.8% (0.61 MCM) — down 0.2pp overnight, continued retreat from near-full. Up from 15.5% last year.',
      el: 'Ο Πόμος στο 70.8% (0.61 ΕΚΜ) — -0.2μ.π. Από 15.5% πέρυσι.',
      ru: 'Помос на 70.8% (0.61 МКМ) — -0.2пп. Год назад 15.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 61.7% (0.18 MCM) — down 0.4pp overnight, continuing its multi-week slide. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 61.7% (0.18 ΕΚΜ) — -0.4μ.π., συνεχίζει η πολυεβδομαδιαία πτώση. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 61.7% (0.18 МКМ) — -0.4пп, продолжается многонедельное снижение. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 80.4% (1.36 MCM) — nearly flat overnight. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 80.4% (1.36 ΕΚΜ) — σχεδόν σταθερά. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 80.4% (1.36 МКМ) — почти без изменений. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 83.5% (1.19 MCM) — essentially flat overnight, still below 90%. Was 7.1% last year.',
      el: 'Ο Ξυλιάτος στο 83.5% (1.19 ΕΚΜ) — σχεδόν σταθερός, κάτω από το 90%. Από 7.1% πέρυσι.',
      ru: 'Ксилиатос на 83.5% (1.19 МКМ) — почти без изменений, ниже 90%. Год назад 7.1%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis at 99.4% (0.36 MCM) — flat overnight, holding just under its 100% plateau. Up from 22.3% last year.',
      el: 'Ο Καλοπαναγιώτης στο 99.4% (0.36 ΕΚΜ) — σταθερός, ακριβώς κάτω από το οροπέδιο του 100%. Αύξηση από 22.3% πέρυσι.',
      ru: 'Калопанайотис на 99.4% (0.36 МКМ) — без изменений, чуть ниже плато 100%. Рост с 22.3% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 87.0% (2.44 MCM) — essentially flat overnight. Was 23.1% last year — a 3.8× year-over-year recovery.',
      el: 'Ο Ταμασός στο 87.0% (2.44 ΕΚΜ) — σχεδόν σταθερός. Από 23.1% πέρυσι — 3.8× ανάκαμψη.',
      ru: 'Тамассос на 87.0% (2.44 МКМ) — почти без изменений. Год назад 23.1% — восстановление в 3.8×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 90.1% (1.80 MCM) — the largest mover of the day, down 1.0pp as it pulls back from near-full. Up from 60.1% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 90.1% (1.80 ΕΚΜ) — η μεγαλύτερη κίνηση της ημέρας, -1.0μ.π. Αύξηση από 60.1% πέρυσι.',
      ru: 'Клиру-Малунта на 90.1% (1.80 МКМ) — крупнейшее изменение дня, -1.0пп. Рост с 60.1% год назад.',
    },
    'Solea': {
      en: 'Solea at 89.7% (4.00 MCM) — holding near full as dry season progresses. Up from 49.3% last year — 1.82× year-over-year improvement.',
      el: 'Η Σολέα στο 89.7% (4.00 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 49.3% πέρυσι — 1.82× βελτίωση.',
      ru: 'Солеа на 89.7% (4.00 МКМ) — удерживается вблизи полного уровня. Рост с 49.3% год назад — улучшение в 1.82×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (24 — 25 Αυγούστου 2026)

Δελτίο Τρίτης: συνολική αποθήκευση **38.1%** (110.8 ΕΚΜ) — από 38.2% (111.0 ΕΚΜ) τη Δευτέρα, μια απώλεια περίπου 0.2 ΕΚΜ μέσα σε 24 ώρες, ο ίδιος αργός ρυθμός υποχώρησης. Η [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) ήταν η μεγαλύτερη κίνηση, -1.0μ.π. στο 90.1%, καθώς υποχωρεί από το σχεδόν πλήρες. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) συνέχισε την πτώση του πιο ήπια απ' ό,τι το Σαββατοκύριακο (-0.6μ.π. στο 43.8%). Το χάσμα με πέρυσι παραμένει στις **23.1 μονάδες**. Εισροή σεζόν: 116.1 ΕΚΜ. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 24 Αυγούστου):**
- [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/) **90.1%** (-1.0μ.π.) — η μεγαλύτερη κίνηση, υποχωρεί από το σχεδόν πλήρες
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **43.8%** (-0.6μ.π.) — η πτώση συνεχίζεται πιο ήπια
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **99.4%** — αμετάβλητος, ακριβώς κάτω από το οροπέδιο του 100%
- [Αχνά](/el/dam/achna/) **1.3%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (24 — 25 августа 2026)

Бюллетень вторника: общий запас **38.1%** (110.8 МКМ) — против 38.2% (111.0 МКМ) в понедельник, потеря около 0.2 МКМ за сутки, тот же медленный темп снижения. [Клиру-Малунта](/ru/dam/klirou-malounta/) стала крупнейшим изменением, -1.0пп до 90.1%, отступая от почти полного уровня. [Мавроколимпос](/ru/dam/mavrokolympos/) продолжил снижение мягче, чем на выходных (-0.6пп до 43.8%). Разрыв с прошлым годом остаётся на уровне **23.1 пункта**. Приток сезона: 116.1 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 24 августа):**
- [Клиру-Малунта](/ru/dam/klirou-malounta/) **90.1%** (-1.0пп) — крупнейшее изменение, отступает от почти полного уровня
- [Мавроколимпос](/ru/dam/mavrokolympos/) **43.8%** (-0.6пп) — снижение продолжается мягче
- [Калопанайотис](/ru/dam/kalopanagiotis/) **99.4%** — без изменений, чуть ниже плато 100%
- [Ахна](/ru/dam/achna/) **1.3%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 24 — 25, 2026)

Tuesday bulletin: total storage at **38.1%** (110.8 MCM) — down from 38.2% (111.0 MCM) on Monday, a loss of roughly 0.2 MCM in 24 hours, the same slow drawdown pace continuing. [Klirou-Malounta](/dam/klirou-malounta/) was the largest mover, down 1.0pp to 90.1% as it pulls back from near-full; [Mavrokolympos](/dam/mavrokolympos/) continued its slide at a gentler pace (-0.6pp to 43.8%) than over the weekend. The gap over last year holds at **23.1 points**. Season inflow: 116.1 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. August 24):**
- [Klirou-Malounta](/dam/klirou-malounta/) **90.1%** (-1.0pp) — largest mover, pulling back from near-full
- [Mavrokolympos](/dam/mavrokolympos/) **43.8%** (-0.6pp) — slide continues at a gentler pace
- [Kalopanagiotis](/dam/kalopanagiotis/) **99.4%** — unchanged, holding just under its 100% plateau
- [Achna](/dam/achna/) **1.3%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
