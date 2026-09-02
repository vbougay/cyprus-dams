import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.001, totalSince: 26.717 }, storage: { current: { amount: 45.051, percentage: 39.2 }, lastYear: { amount: 14.884, percentage: 12.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.914, percentage: 22.9 }, lastYear: { amount: 2.591, percentage: 15.2 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.725 }, storage: { current: { amount: 2.453, percentage: 17.7 }, lastYear: { amount: 2.125, percentage: 15.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.768 }, storage: { current: { amount: 4.564, percentage: 29.4 }, lastYear: { amount: 4.131, percentage: 26.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.961, percentage: 51.6 }, lastYear: { amount: 1.360, percentage: 10.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.399 }, storage: { current: { amount: 2.503, percentage: 58.2 }, lastYear: { amount: 2.058, percentage: 47.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.483, percentage: 43.6 }, lastYear: { amount: 0.898, percentage: 26.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.082, percentage: 1.2 }, lastYear: { amount: 0.291, percentage: 4.3 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 19.918, percentage: 38.0 }, lastYear: { amount: 6.960, percentage: 13.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.778, percentage: 45.3 }, lastYear: { amount: 2.700, percentage: 15.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.851, percentage: 39.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.973, percentage: 41.6 }, lastYear: { amount: 3.690, percentage: 15.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.555, percentage: 56.1 }, lastYear: { amount: 0.006, percentage: 0.6 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.598, percentage: 69.5 }, lastYear: { amount: 0.131, percentage: 15.2 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.175, percentage: 58.7 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.337, percentage: 79.1 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.171, percentage: 81.9 }, lastYear: { amount: 0.083, percentage: 5.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.315 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.073, percentage: 20.1 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.407, percentage: 86.0 }, lastYear: { amount: 0.618, percentage: 22.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.794, percentage: 89.7 }, lastYear: { amount: 1.195, percentage: 59.8 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.967, percentage: 89.1 }, lastYear: { amount: 2.181, percentage: 49.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 1, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.627 }, total:116.122 },
];

export const getReportDate = (): string => "01-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.2% (45.1 MCM) — nearly flat over the past week, 26.3pp above last year\'s 12.9%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.2% (45.1 ΕΚΜ) — σχεδόν σταθερός την τελευταία εβδομάδα, 26.3μ.π. πάνω από πέρυσι (12.9%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.2% (45.1 МКМ) — почти без изменений за неделю. +26.3пп выше прошлогодних 12.9%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.9% (3.91 MCM) — a slight dip over the past week, still 7.7pp above last year\'s 15.2%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 22.9% (3.91 ΕΚΜ) — ελαφριά υποχώρηση, πάνω από πέρυσι (15.2%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 22.9% (3.91 МКМ) — небольшое снижение, выше прошлогодних 15.2%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.7% (2.45 MCM) — essentially unchanged over the past week, 2.4pp above last year\'s 15.3%. Seasonal inflow 1.73 MCM.',
      el: 'Η Λεύκαρα στο 17.7% (2.45 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (15.3%). Εισροή σεζόν 1.73 ΕΚΜ.',
      ru: 'Лефкара на 17.7% (2.45 МКМ) — без изменений, выше прошлогодних 15.3%. Приток 1.73 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 29.4% (4.56 MCM) — down slightly over the past week, 2.7pp above last year\'s 26.7%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 29.4% (4.56 ΕΚΜ) — ελαφριά υποχώρηση, 2.7μ.π. πάνω από πέρυσι (26.7%).',
      ru: 'Дипотамос на 29.4% (4.56 МКМ) — небольшое снижение, +2.7пп выше прошлогодних 26.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 51.6% (6.96 MCM) — down slightly over the past week, still 41.5pp above last year\'s 10.1%.',
      el: 'Η Γερμασόγεια στο 51.6% (6.96 ΕΚΜ) — ελαφριά υποχώρηση. 41.5μ.π. πάνω από πέρυσι (10.1%).',
      ru: 'Гермасойя на 51.6% (6.96 МКМ) — небольшое снижение. +41.5пп выше прошлогодних 10.1%.',
    },
    'Arminou': {
      en: 'Arminou at 58.2% (2.50 MCM) — easing gently off its summer plateau. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.2% (2.50 ΕΚΜ) — ήπια υποχώρηση από το καλοκαιρινό οροπέδιο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.2% (2.50 МКМ) — плавно снижается с летнего плато. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.6% (1.48 MCM) — essentially flat over the past week, still 17.2pp above last year\'s 26.4%.',
      el: 'Η Πολεμίδια στο 43.6% (1.48 ΕΚΜ) — σχεδόν αμετάβλητη, 17.2μ.π. πάνω από πέρυσι (26.4%).',
      ru: 'Полемидия на 43.6% (1.48 МКМ) — почти без изменений, +17.2пп выше прошлогодних 26.4%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.2% (0.08 MCM), zero inflow all season. Still below last year\'s 4.3%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.2% (0.08 ΕΚΜ), χωρίς εισροή εφέτος. Κάτω από πέρυσι (4.3%).',
      ru: 'Ахна критически низкая — 1.2% (0.08 МКМ), без притока за сезон. По-прежнему ниже прошлогодних 4.3%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.0% (19.92 MCM) — down slightly over the past week, 24.7pp above last year\'s 13.3%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.0% (19.92 ΕΚΜ) — ελαφριά υποχώρηση, 24.7μ.π. πάνω από πέρυσι (13.3%).',
      ru: 'Аспрокреммос на 38.0% (19.92 МКМ) — небольшое снижение, +24.7пп выше прошлогодних 13.3%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 45.3% (7.78 MCM) — down slightly over the past week, still 29.6pp above last year\'s 15.7%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 45.3% (7.78 ΕΚΜ) — ελαφριά υποχώρηση, 29.6μ.π. πάνω από πέρυσι (15.7%).',
      ru: 'Каннавиу на 45.3% (7.78 МКМ) — небольшое снижение, +29.6пп выше прошлогодних 15.7%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down 4.3pp over the past week to 39.0% (0.85 MCM) — the steepest slide of the week. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος -4.3μ.π. την τελευταία εβδομάδα, στο 39.0% (0.85 ΕΚΜ) — η μεγαλύτερη πτώση της εβδομάδας. Από 0% πέρυσι.',
      ru: 'Мавроколимпос -4.3пп за неделю, до 39.0% (0.85 МКМ) — самое резкое снижение недели. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 41.6% (9.97 MCM) — down slightly over the past week, still 26.2pp above last year\'s 15.4%.',
      el: 'Ο Εύρετου στο 41.6% (9.97 ΕΚΜ) — ελαφριά υποχώρηση. 26.2μ.π. πάνω από πέρυσι (15.4%).',
      ru: 'Эвретоу на 41.6% (9.97 МКМ) — небольшое снижение. +26.2пп выше прошлогодних 15.4%.',
    },
    'Argaka': {
      en: 'Argaka down 2.8pp over the past week to 56.1% (0.56 MCM), continuing its multi-week slide. Up from 0.6% last year — a 92.5× year-over-year recovery.',
      el: 'Η Αργάκα -2.8μ.π. την τελευταία εβδομάδα, στο 56.1% (0.56 ΕΚΜ). Από 0.6% πέρυσι — 92.5× ανάκαμψη.',
      ru: 'Аргака -2.8пп за неделю, до 56.1% (0.56 МКМ). Год назад 0.6% — рост в 92.5×.',
    },
    'Pomos': {
      en: 'Pomos down 1.0pp over the past week to 69.5% (0.60 MCM), continued retreat from near-full. Up from 15.2% last year.',
      el: 'Ο Πόμος -1.0μ.π. την τελευταία εβδομάδα, στο 69.5% (0.60 ΕΚΜ). Από 15.2% πέρυσι.',
      ru: 'Помос -1.0пп за неделю, до 69.5% (0.60 МКМ). Год назад 15.2%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down 2.4pp over the past week to 58.7% (0.18 MCM), its multi-week slide continuing. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα -2.4μ.π. την τελευταία εβδομάδα, στο 58.7% (0.18 ΕΚΜ), η πολυεβδομαδιαία πτώση συνεχίζεται. Από 19.1% πέρυσι.',
      ru: 'Агия Марина -2.4пп за неделю, до 58.7% (0.18 МКМ), многонедельное снижение продолжается. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 79.1% (1.34 MCM) — down 1.0pp over the past week. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 79.1% (1.34 ΕΚΜ) — -1.0μ.π. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 79.1% (1.34 МКМ) — -1.0пп. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 81.9% (1.17 MCM) — down 1.2pp over the past week, still below 90%. Was 5.8% last year.',
      el: 'Ο Ξυλιάτος στο 81.9% (1.17 ΕΚΜ) — -1.2μ.π., κάτω από το 90%. Από 5.8% πέρυσι.',
      ru: 'Ксилиатос на 81.9% (1.17 МКМ) — -1.2пп, ниже 90%. Год назад 5.8%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis back to 100% (0.36 MCM), overflowing again after dipping to 98.9% last week. Up from 20.1% last year.',
      el: 'Ο Καλοπαναγιώτης ξανά στο 100% (0.36 ΕΚΜ), υπερχειλίζει και πάλι μετά την πτώση στο 98.9% την προηγούμενη εβδομάδα. Αύξηση από 20.1% πέρυσι.',
      ru: 'Калопанайотис снова на 100% (0.36 МКМ), опять переливается через край после падения до 98.9% на прошлой неделе. Рост с 20.1% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 86.0% (2.41 MCM) — down 0.8pp over the past week. Was 22.1% last year — a 3.9× year-over-year recovery.',
      el: 'Ο Ταμασός στο 86.0% (2.41 ΕΚΜ) — -0.8μ.π. Από 22.1% πέρυσι — 3.9× ανάκαμψη.',
      ru: 'Тамассос на 86.0% (2.41 МКМ) — -0.8пп. Год назад 22.1% — восстановление в 3.9×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 89.7% (1.79 MCM) — down 0.3pp over the past week, continuing its pullback from near-full. Up from 59.8% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 89.7% (1.79 ΕΚΜ) — -0.3μ.π. Αύξηση από 59.8% πέρυσι.',
      ru: 'Клиру-Малунта на 89.7% (1.79 МКМ) — -0.3пп. Рост с 59.8% год назад.',
    },
    'Solea': {
      en: 'Solea at 89.1% (3.97 MCM) — holding near full as dry season progresses. Up from 49.0% last year — 1.82× year-over-year improvement.',
      el: 'Η Σολέα στο 89.1% (3.97 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 49.0% πέρυσι — 1.82× βελτίωση.',
      ru: 'Солеа на 89.1% (3.97 МКМ) — удерживается вблизи полного уровня. Рост с 49.0% год назад — улучшение в 1.82×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (26 Αυγούστου — 1 Σεπτεμβρίου 2026)

Δελτίο Τρίτης, καλύπτοντας την περασμένη εβδομάδα: συνολική αποθήκευση **37.7%** (109.7 ΕΚΜ) — από 38.0% (110.6 ΕΚΜ) στις 26 Αυγούστου, απώλεια περίπου 0.9 ΕΚΜ σε έξι ημέρες, πιο αργός ρυθμός από τον συνήθη για αρχές Σεπτεμβρίου. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) είχε τη μεγαλύτερη πτώση της εβδομάδας, -4.3μ.π. στο 39.0%. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) επέστρεψε στο 100%, υπερχειλίζοντας ξανά μετά την πτώση στο 98.9% την προηγούμενη εβδομάδα. Το χάσμα με πέρυσι διευρύνθηκε στις **23.3 μονάδες** (από 23.1μ.π. στις 26 Αυγούστου). Εισροή σεζόν: 116.1 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 0.63 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 26 Αυγούστου):**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **39.0%** (-4.3μ.π.) — η μεγαλύτερη πτώση της εβδομάδας
- [Αργάκα](/el/dam/argaka/) **56.1%** (-2.8μ.π.) — συνεχίζεται η πολυεβδομαδιαία πτώση
- [Αγία Μαρίνα](/el/dam/agia-marina/) **58.7%** (-2.4μ.π.) — η πτώση συνεχίζεται, πιο ήπια απ' ό,τι τον Αύγουστο
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — ξανά στο οροπέδιο υπερχείλισης
- [Αχνά](/el/dam/achna/) **1.2%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — dialogos.com.cy
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (26 августа — 1 сентября 2026)

Бюллетень вторника, за прошедшую неделю: общий запас **37.7%** (109.7 МКМ) — против 38.0% (110.6 МКМ) 26 августа, потеря около 0.9 МКМ за шесть дней, темп медленнее обычного для начала сентября. [Мавроколимпос](/ru/dam/mavrokolympos/) показал крупнейшее снижение недели, -4.3пп до 39.0%. [Калопанайотис](/ru/dam/kalopanagiotis/) вернулся к 100%, снова переливаясь через край после падения до 98.9% на прошлой неделе. Разрыв с прошлым годом расширился до **23.3 пункта** (с 23.1пп 26 августа). Приток сезона: 116.1 МКМ (авг-сен пока: 0.63 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 26 августа):**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **39.0%** (-4.3пп) — крупнейшее снижение недели
- [Аргака](/ru/dam/argaka/) **56.1%** (-2.8пп) — многонедельное снижение продолжается
- [Агия Марина](/ru/dam/agia-marina/) **58.7%** (-2.4пп) — снижение продолжается, мягче, чем в августе
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — снова на плато перелива
- [Ахна](/ru/dam/achna/) **1.2%** — без изменений, без притока за весь сезон

**В СМИ:**
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — dialogos.com.cy
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 26 — September 1, 2026)

Tuesday's bulletin, covering the past week: total storage at **37.7%** (109.7 MCM) — down from 38.0% (110.6 MCM) on August 26, a loss of roughly 0.9 MCM over six days, a slower drawdown than typical for early September. [Mavrokolympos](/dam/mavrokolympos/) led the slide, down 4.3pp to 39.0% — the steepest weekly drop; [Kalopanagiotis](/dam/kalopanagiotis/) flipped back to 100%, overflowing again after dipping to 98.9% last week. The gap over last year widened to **23.3 points** (from 23.1pp on August 26). Season inflow: 116.1 MCM (Aug-Sep so far: 0.63 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. August 26):**
- [Mavrokolympos](/dam/mavrokolympos/) **39.0%** (-4.3pp) — steepest weekly drop
- [Argaka](/dam/argaka/) **56.1%** (-2.8pp) — continuing its multi-week slide
- [Agia Marina](/dam/agia-marina/) **58.7%** (-2.4pp) — still sliding, though gentler than August's pace
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — back on its overflow plateau
- [Achna](/dam/achna/) **1.2%** — unchanged, zero inflow all season

**In the media:**
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — dialogos.com.cy

🔗 https://fragmata.info
`;
};
