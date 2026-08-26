import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.011, totalSince: 26.707 }, storage: { current: { amount: 45.249, percentage: 39.3 }, lastYear: { amount: 15.302, percentage: 13.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.942, percentage: 23.1 }, lastYear: { amount: 2.660, percentage: 15.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.725 }, storage: { current: { amount: 2.451, percentage: 17.7 }, lastYear: { amount: 2.135, percentage: 15.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.768 }, storage: { current: { amount: 4.652, percentage: 30.0 }, lastYear: { amount: 4.251, percentage: 27.4 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.039, percentage: 52.1 }, lastYear: { amount: 1.463, percentage: 10.8 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.002, totalSince: 22.399 }, storage: { current: { amount: 2.519, percentage: 58.6 }, lastYear: { amount: 2.103, percentage: 48.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.487, percentage: 43.7 }, lastYear: { amount: 0.913, percentage: 26.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.086, percentage: 1.3 }, lastYear: { amount: 0.308, percentage: 4.5 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.043, percentage: 38.3 }, lastYear: { amount: 7.244, percentage: 13.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.864, percentage: 45.8 }, lastYear: { amount: 2.790, percentage: 16.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.944, percentage: 43.3 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.090, percentage: 42.0 }, lastYear: { amount: 3.808, percentage: 15.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.583, percentage: 58.9 }, lastYear: { amount: 0.025, percentage: 2.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.606, percentage: 70.5 }, lastYear: { amount: 0.133, percentage: 15.5 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.182, percentage: 61.1 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.354, percentage: 80.1 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.188, percentage: 83.1 }, lastYear: { amount: 0.102, percentage: 7.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.315 }, storage: { current: { amount: 0.359, percentage: 98.9 }, lastYear: { amount: 0.080, percentage: 22.0 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.431, percentage: 86.8 }, lastYear: { amount: 0.645, percentage: 23.0 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.801, percentage: 90.0 }, lastYear: { amount: 1.202, percentage: 60.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.992, percentage: 89.6 }, lastYear: { amount: 2.192, percentage: 49.2 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 26, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.617 }, total:116.112 },
];

export const getReportDate = (): string => "26-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.3% (45.2 MCM) — essentially flat overnight, 26.0pp above last year\'s 13.3%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.3% (45.2 ΕΚΜ) — σχεδόν σταθερός, 26.0μ.π. πάνω από πέρυσι (13.3%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.3% (45.2 МКМ) — почти без изменений. +26.0пп выше прошлогодних 13.3%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.1% (3.94 MCM) — unchanged overnight, still 7.5pp above last year\'s 15.6%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 23.1% (3.94 ΕΚΜ) — αμετάβλητος, πάνω από πέρυσι (15.6%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.1% (3.94 МКМ) — без изменений, выше прошлогодних 15.6%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.7% (2.45 MCM) — flat overnight, 2.3pp above last year\'s 15.4%. Seasonal inflow 1.73 MCM.',
      el: 'Η Λεύκαρα στο 17.7% (2.45 ΕΚΜ) — σταθερή, πάνω από πέρυσι (15.4%). Εισροή σεζόν 1.73 ΕΚΜ.',
      ru: 'Лефкара на 17.7% (2.45 МКМ) — без изменений, выше прошлогодних 15.4%. Приток 1.73 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 30.0% (4.65 MCM) — a slight dip overnight, 2.6pp above last year\'s 27.4%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 30.0% (4.65 ΕΚΜ) — ελαφριά υποχώρηση, 2.6μ.π. πάνω από πέρυσι (27.4%).',
      ru: 'Дипотамос на 30.0% (4.65 МКМ) — небольшое снижение, +2.6пп выше прошлогодних 27.4%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 52.1% (7.04 MCM) — a slight dip overnight, still 41.3pp above last year\'s 10.8%.',
      el: 'Η Γερμασόγεια στο 52.1% (7.04 ΕΚΜ) — ελαφριά υποχώρηση. 41.3μ.π. πάνω από πέρυσι (10.8%).',
      ru: 'Гермасойя на 52.1% (7.04 МКМ) — небольшое снижение. +41.3пп выше прошлогодних 10.8%.',
    },
    'Arminou': {
      en: 'Arminou at 58.6% (2.52 MCM) — still holding on its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.6% (2.52 ΕΚΜ) — παραμένει σταθερός στο καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.6% (2.52 МКМ) — по-прежнему стабилен на летнем плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.7% (1.49 MCM) — essentially flat overnight, still 16.8pp above last year\'s 26.9%.',
      el: 'Η Πολεμίδια στο 43.7% (1.49 ΕΚΜ) — σχεδόν αμετάβλητη, 16.8μ.π. πάνω από πέρυσι (26.9%).',
      ru: 'Полемидия на 43.7% (1.49 МКМ) — почти без изменений, +16.8пп выше прошлогодних 26.9%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.3% (0.09 MCM), zero inflow all season. Still below last year\'s 4.5%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.3% (0.09 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.5%).',
      ru: 'Ахна критически низкая — 1.3% (0.09 МКМ), без притока за сезон. По-прежнему ниже прошлогодних 4.5%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.3% (20.04 MCM) — essentially flat overnight, 24.5pp above last year\'s 13.8%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.3% (20.04 ΕΚΜ) — σχεδόν αμετάβλητος, 24.5μ.π. πάνω από πέρυσι (13.8%).',
      ru: 'Аспрокреммос на 38.3% (20.04 МКМ) — почти без изменений, +24.5пп выше прошлогодних 13.8%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 45.8% (7.86 MCM) — near-unchanged, still 29.5pp above last year\'s 16.3%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 45.8% (7.86 ΕΚΜ) — σχεδόν αμετάβλητος, 29.5μ.π. πάνω από πέρυσι (16.3%).',
      ru: 'Каннавиу на 45.8% (7.86 МКМ) — почти без изменений, +29.5пп выше прошлогодних 16.3%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 43.3% (0.94 MCM) — down 0.5pp overnight, slide continuing at a gentler pace than the weekend. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 43.3% (0.94 ΕΚΜ) — -0.5μ.π., η πτώση συνεχίζεται πιο ήπια απ\' ό,τι το Σαββατοκύριακο. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 43.3% (0.94 МКМ) — -0.5пп, снижение продолжается мягче, чем на выходных. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 42.0% (10.09 MCM) — down 0.2pp overnight, still 26.1pp above last year\'s 15.9%.',
      el: 'Ο Εύρετου στο 42.0% (10.09 ΕΚΜ) — -0.2μ.π. 26.1μ.π. πάνω από πέρυσι (15.9%).',
      ru: 'Эвретоу на 42.0% (10.09 МКМ) — -0.2пп. +26.1пп выше прошлогодних 15.9%.',
    },
    'Argaka': {
      en: 'Argaka at 58.9% (0.58 MCM) — down 0.3pp overnight, continuing its multi-week slide. Up from 2.5% last year — a 23.6× year-over-year recovery.',
      el: 'Η Αργάκα στο 58.9% (0.58 ΕΚΜ) — -0.3μ.π. Από 2.5% πέρυσι — 23.6× ανάκαμψη.',
      ru: 'Аргака на 58.9% (0.58 МКМ) — -0.3пп. Год назад 2.5% — рост в 23.6×.',
    },
    'Pomos': {
      en: 'Pomos at 70.5% (0.61 MCM) — down 0.3pp overnight, continued retreat from near-full. Up from 15.5% last year.',
      el: 'Ο Πόμος στο 70.5% (0.61 ΕΚΜ) — -0.3μ.π. Από 15.5% πέρυσι.',
      ru: 'Помос на 70.5% (0.61 МКМ) — -0.3пп. Год назад 15.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 61.1% (0.18 MCM) — down 0.6pp overnight, the largest mover of the day as its multi-week slide continues. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 61.1% (0.18 ΕΚΜ) — -0.6μ.π., η μεγαλύτερη κίνηση της ημέρας. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 61.1% (0.18 МКМ) — -0.6пп, крупнейшее изменение дня. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 80.1% (1.35 MCM) — down 0.3pp overnight. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 80.1% (1.35 ΕΚΜ) — -0.3μ.π. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 80.1% (1.35 МКМ) — -0.3пп. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 83.1% (1.19 MCM) — down 0.4pp overnight, still below 90%. Was 7.1% last year.',
      el: 'Ο Ξυλιάτος στο 83.1% (1.19 ΕΚΜ) — -0.4μ.π., κάτω από το 90%. Από 7.1% πέρυσι.',
      ru: 'Ксилиатос на 83.1% (1.19 МКМ) — -0.4пп, ниже 90%. Год назад 7.1%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis at 98.9% (0.36 MCM) — down 0.5pp overnight, receding further from its 100% plateau. Up from 22.0% last year.',
      el: 'Ο Καλοπαναγιώτης στο 98.9% (0.36 ΕΚΜ) — -0.5μ.π., απομακρύνεται περαιτέρω από το οροπέδιο του 100%. Αύξηση από 22.0% πέρυσι.',
      ru: 'Калопанайотис на 98.9% (0.36 МКМ) — -0.5пп, продолжает отступать от плато 100%. Рост с 22.0% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 86.8% (2.43 MCM) — down 0.2pp overnight. Was 23.0% last year — a 3.8× year-over-year recovery.',
      el: 'Ο Ταμασός στο 86.8% (2.43 ΕΚΜ) — -0.2μ.π. Από 23.0% πέρυσι — 3.8× ανάκαμψη.',
      ru: 'Тамассос на 86.8% (2.43 МКМ) — -0.2пп. Год назад 23.0% — восстановление в 3.8×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 90.0% (1.80 MCM) — down 0.1pp overnight, continuing its pullback from near-full. Up from 60.1% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 90.0% (1.80 ΕΚΜ) — -0.1μ.π. Αύξηση από 60.1% πέρυσι.',
      ru: 'Клиру-Малунта на 90.0% (1.80 МКМ) — -0.1пп. Рост с 60.1% год назад.',
    },
    'Solea': {
      en: 'Solea at 89.6% (3.99 MCM) — holding near full as dry season progresses. Up from 49.2% last year — 1.82× year-over-year improvement.',
      el: 'Η Σολέα στο 89.6% (3.99 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 49.2% πέρυσι — 1.82× βελτίωση.',
      ru: 'Солеа на 89.6% (3.99 МКМ) — удерживается вблизи полного уровня. Рост с 49.2% год назад — улучшение в 1.82×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (25 — 26 Αυγούστου 2026)

Δελτίο Τετάρτης: συνολική αποθήκευση **38.0%** (110.6 ΕΚΜ) — από 38.1% (110.8 ΕΚΜ) την Τρίτη, μια απώλεια περίπου 0.2 ΕΚΜ μέσα σε 24 ώρες, ο ίδιος αργός ρυθμός υποχώρησης. Η [Αγία Μαρίνα](/el/dam/agia-marina/) ήταν η μεγαλύτερη κίνηση της ημέρας, -0.6μ.π. στο 61.1%, καθώς συνεχίζεται η πολυεβδομαδιαία πτώση της. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) υποχώρησε -0.5μ.π. στο 98.9%, απομακρυνόμενος ξανά από το οροπέδιο του 100% μετά την ανάκαμψη της Δευτέρας. Το χάσμα με πέρυσι παραμένει στις **23.1 μονάδες**. Εισροή σεζόν: 116.1 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 0.62 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 25 Αυγούστου):**
- [Αγία Μαρίνα](/el/dam/agia-marina/) **61.1%** (-0.6μ.π.) — η μεγαλύτερη κίνηση, συνεχίζει η πολυεβδομαδιαία πτώση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **98.9%** (-0.5μ.π.) — υποχωρεί ξανά μετά την ανάκαμψη της Δευτέρας
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **43.3%** (-0.5μ.π.) — η πτώση συνεχίζεται
- [Αχνά](/el/dam/achna/) **1.3%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ξεπέρασε το 250% η μέση βροχόπτωση Αυγούστου](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-250-tis-ekato-i-mesi-vroxoptosi-avgoustou-metriseis-telefteou-24orou-kai-plirotita-fragmaton/) — kitasweather.com
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (25 — 26 августа 2026)

Бюллетень среды: общий запас **38.0%** (110.6 МКМ) — против 38.1% (110.8 МКМ) во вторник, потеря около 0.2 МКМ за сутки, тот же медленный темп снижения. [Агия Марина](/ru/dam/agia-marina/) стала крупнейшим изменением дня, -0.6пп до 61.1%, продолжая многонедельное снижение. [Калопанайотис](/ru/dam/kalopanagiotis/) отступил на -0.5пп до 98.9%, снова удаляясь от плато 100% после подъёма в понедельник. Разрыв с прошлым годом остаётся на уровне **23.1 пункта**. Приток сезона: 116.1 МКМ (авг-сен пока: 0.62 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 25 августа):**
- [Агия Марина](/ru/dam/agia-marina/) **61.1%** (-0.6пп) — крупнейшее изменение, продолжается многонедельное снижение
- [Калопанайотис](/ru/dam/kalopanagiotis/) **98.9%** (-0.5пп) — снова отступает после подъёма в понедельник
- [Мавроколимпос](/ru/dam/mavrokolympos/) **43.3%** (-0.5пп) — снижение продолжается
- [Ахна](/ru/dam/achna/) **1.3%** — без изменений, без притока за весь сезон

**В СМИ:**
- [В августе в горах Кипра третий день подряд идут дожди](https://ruscyprus.com/news/v-avguste-v-gorah-kipra-tretiy-den-podryad/62794) — ruscyprus.com
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 25 — 26, 2026)

Wednesday bulletin: total storage at **38.0%** (110.6 MCM) — down from 38.1% (110.8 MCM) on Tuesday, a loss of roughly 0.2 MCM in 24 hours, the same slow drawdown pace continuing. [Agia Marina](/dam/agia-marina/) was the largest mover of the day, down 0.6pp to 61.1% as its multi-week slide continues; [Kalopanagiotis](/dam/kalopanagiotis/) eased 0.5pp to 98.9%, receding again from its 100% plateau after Monday's uptick. The gap over last year holds at **23.1 points**. Season inflow: 116.1 MCM (Aug-Sep so far: 0.62 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. August 25):**
- [Agia Marina](/dam/agia-marina/) **61.1%** (-0.6pp) — largest mover, continuing its multi-week slide
- [Kalopanagiotis](/dam/kalopanagiotis/) **98.9%** (-0.5pp) — receding again after Monday's uptick
- [Mavrokolympos](/dam/mavrokolympos/) **43.3%** (-0.5pp) — slide continues
- [Achna](/dam/achna/) **1.3%** — unchanged, zero inflow all season

**In the media:**
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail
- [Ξεπέρασε το 250% η μέση βροχόπτωση Αυγούστου](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-250-tis-ekato-i-mesi-vroxoptosi-avgoustou-metriseis-telefteou-24orou-kai-plirotita-fragmaton/) — kitasweather.com
- [В августе в горах Кипра третий день подряд идут дожди](https://ruscyprus.com/news/v-avguste-v-gorah-kipra-tretiy-den-podryad/62794) — ruscyprus.com

🔗 https://fragmata.info
`;
};
