import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.131, totalSince: 27.058 }, storage: { current: { amount: 44.818, percentage: 39.0 }, lastYear: { amount: 14.603, percentage: 12.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.202 }, storage: { current: { amount: 3.879, percentage: 22.7 }, lastYear: { amount: 2.537, percentage: 14.8 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.738 }, storage: { current: { amount: 2.442, percentage: 17.6 }, lastYear: { amount: 2.118, percentage: 15.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.446, percentage: 28.7 }, lastYear: { amount: 4.041, percentage: 26.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.877, percentage: 50.9 }, lastYear: { amount: 1.303, percentage: 9.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.027, totalSince: 22.426 }, storage: { current: { amount: 2.528, percentage: 58.8 }, lastYear: { amount: 2.032, percentage: 47.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.478, percentage: 43.5 }, lastYear: { amount: 0.886, percentage: 26.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.082, percentage: 1.2 }, lastYear: { amount: 0.267, percentage: 3.9 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.711, percentage: 37.6 }, lastYear: { amount: 6.749, percentage: 12.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.679, percentage: 44.7 }, lastYear: { amount: 2.644, percentage: 15.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.746, percentage: 34.2 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.830, percentage: 41.0 }, lastYear: { amount: 3.603, percentage: 15.0 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.536, percentage: 54.1 }, lastYear: { amount: 0.005, percentage: 0.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.583, percentage: 67.8 }, lastYear: { amount: 0.131, percentage: 15.2 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.167, percentage: 56.0 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.318, percentage: 78.0 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.161, percentage: 81.2 }, lastYear: { amount: 0.080, percentage: 5.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.067, percentage: 18.5 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.376, percentage: 84.9 }, lastYear: { amount: 0.610, percentage: 21.8 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.792, percentage: 89.6 }, lastYear: { amount: 1.193, percentage: 59.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.951, percentage: 88.7 }, lastYear: { amount: 2.175, percentage: 48.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 7, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.127 }, total:116.622 },
];

export const getReportDate = (): string => "07-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.0% (44.8 MCM) — a slight dip over the past week, 26.3pp above last year\'s 12.7%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.0% (44.8 ΕΚΜ) — ελαφριά υποχώρηση, 26.3μ.π. πάνω από πέρυσι (12.7%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.0% (44.8 МКМ) — небольшое снижение за неделю. +26.3пп выше прошлогодних 12.7%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.7% (3.88 MCM) — essentially flat over the past week, still 7.9pp above last year\'s 14.8%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 22.7% (3.88 ΕΚΜ) — σχεδόν σταθερός, πάνω από πέρυσι (14.8%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 22.7% (3.88 МКМ) — почти без изменений, выше прошлогодних 14.8%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.6% (2.44 MCM) — essentially unchanged over the past week, 2.3pp above last year\'s 15.3%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα στο 17.6% (2.44 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (15.3%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара на 17.6% (2.44 МКМ) — без изменений, выше прошлогодних 15.3%. Приток 1.74 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 28.7% (4.45 MCM) — down slightly over the past week, 2.6pp above last year\'s 26.1%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 28.7% (4.45 ΕΚΜ) — ελαφριά υποχώρηση, 2.6μ.π. πάνω από πέρυσι (26.1%).',
      ru: 'Дипотамос на 28.7% (4.45 МКМ) — небольшое снижение, +2.6пп выше прошлогодних 26.1%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 50.9% (6.88 MCM) — down slightly over the past week, still 41.2pp above last year\'s 9.7%.',
      el: 'Η Γερμασόγεια στο 50.9% (6.88 ΕΚΜ) — ελαφριά υποχώρηση. 41.2μ.π. πάνω από πέρυσι (9.7%).',
      ru: 'Гермасойя на 50.9% (6.88 МКМ) — небольшое снижение. +41.2пп выше прошлогодних 9.7%.',
    },
    'Arminou': {
      en: 'Arminou at 58.8% (2.53 MCM) — up slightly over the past week, the only riser among the 21 dams. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.8% (2.53 ΕΚΜ) — ελαφριά άνοδος, ο μόνος από τα 21 φράγματα που ανέβηκε. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.8% (2.53 МКМ) — небольшой рост, единственный из 21 водохранилища. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.5% (1.48 MCM) — essentially flat over the past week, still 17.4pp above last year\'s 26.1%.',
      el: 'Η Πολεμίδια στο 43.5% (1.48 ΕΚΜ) — σχεδόν αμετάβλητη, 17.4μ.π. πάνω από πέρυσι (26.1%).',
      ru: 'Полемидия на 43.5% (1.48 МКМ) — почти без изменений, +17.4пп выше прошлогодних 26.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.2% (0.08 MCM), zero inflow all season. Still below last year\'s 3.9%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.2% (0.08 ΕΚΜ), χωρίς εισροή εφέτος. Κάτω από πέρυσι (3.9%).',
      ru: 'Ахна критически низкая — 1.2% (0.08 МКМ), без притока за сезон. По-прежнему ниже прошлогодних 3.9%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 37.6% (19.71 MCM) — down slightly over the past week, 24.7pp above last year\'s 12.9%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 37.6% (19.71 ΕΚΜ) — ελαφριά υποχώρηση, 24.7μ.π. πάνω από πέρυσι (12.9%).',
      ru: 'Аспрокреммос на 37.6% (19.71 МКМ) — небольшое снижение, +24.7пп выше прошлогодних 12.9%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 44.7% (7.68 MCM) — down slightly over the past week, still 29.3pp above last year\'s 15.4%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 44.7% (7.68 ΕΚΜ) — ελαφριά υποχώρηση, 29.3μ.π. πάνω από πέρυσι (15.4%).',
      ru: 'Каннавиу на 44.7% (7.68 МКМ) — небольшое снижение, +29.3пп выше прошлогодних 15.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down 4.8pp over the past week to 34.2% (0.75 MCM) — the steepest slide again, extending last week\'s drop. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος -4.8μ.π. την τελευταία εβδομάδα, στο 34.2% (0.75 ΕΚΜ) — η μεγαλύτερη πτώση, συνεχίζοντας από την προηγούμενη εβδομάδα. Από 0% πέρυσι.',
      ru: 'Мавроколимпос -4.8пп за неделю, до 34.2% (0.75 МКМ) — вновь самое резкое снижение. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 41.0% (9.83 MCM) — down slightly over the past week, still 26.0pp above last year\'s 15.0%.',
      el: 'Ο Εύρετου στο 41.0% (9.83 ΕΚΜ) — ελαφριά υποχώρηση. 26.0μ.π. πάνω από πέρυσι (15.0%).',
      ru: 'Эвретоу на 41.0% (9.83 МКМ) — небольшое снижение. +26.0пп выше прошлогодних 15.0%.',
    },
    'Argaka': {
      en: 'Argaka down 2.0pp over the past week to 54.1% (0.54 MCM), continuing its multi-week slide. Up from 0.5% last year — a 107× year-over-year recovery.',
      el: 'Η Αργάκα -2.0μ.π. την τελευταία εβδομάδα, στο 54.1% (0.54 ΕΚΜ). Από 0.5% πέρυσι — 107× ανάκαμψη.',
      ru: 'Аргака -2.0пп за неделю, до 54.1% (0.54 МКМ). Год назад 0.5% — рост в 107×.',
    },
    'Pomos': {
      en: 'Pomos down 1.7pp over the past week to 67.8% (0.58 MCM), continued retreat from near-full. Up from 15.2% last year.',
      el: 'Ο Πόμος -1.7μ.π. την τελευταία εβδομάδα, στο 67.8% (0.58 ΕΚΜ). Από 15.2% πέρυσι.',
      ru: 'Помос -1.7пп за неделю, до 67.8% (0.58 МКМ). Год назад 15.2%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down 2.7pp over the past week to 56.0% (0.17 MCM), its multi-week slide continuing. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα -2.7μ.π. την τελευταία εβδομάδα, στο 56.0% (0.17 ΕΚΜ), η πολυεβδομαδιαία πτώση συνεχίζεται. Από 19.1% πέρυσι.',
      ru: 'Агия Марина -2.7пп за неделю, до 56.0% (0.17 МКМ), многонедельное снижение продолжается. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 78.0% (1.32 MCM) — down 1.1pp over the past week. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 78.0% (1.32 ΕΚΜ) — -1.1μ.π. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 78.0% (1.32 МКМ) — -1.1пп. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 81.2% (1.16 MCM) — down 0.7pp over the past week, still below 90%. Was 5.6% last year.',
      el: 'Ο Ξυλιάτος στο 81.2% (1.16 ΕΚΜ) — -0.7μ.π., κάτω από το 90%. Από 5.6% πέρυσι.',
      ru: 'Ксилиатос на 81.2% (1.16 МКМ) — -0.7пп, ниже 90%. Год назад 5.6%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis holding at 100% (0.36 MCM), still overflowing after flipping back last week. Up from 18.5% last year.',
      el: 'Ο Καλοπαναγιώτης παραμένει στο 100% (0.36 ΕΚΜ), συνεχίζει να υπερχειλίζει μετά την επιστροφή την προηγούμενη εβδομάδα. Αύξηση από 18.5% πέρυσι.',
      ru: 'Калопанайотис держится на 100% (0.36 МКМ), продолжает переливаться после возврата на прошлой неделе. Рост с 18.5% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 84.9% (2.38 MCM) — down 1.1pp over the past week. Was 21.8% last year — a 3.9× year-over-year recovery.',
      el: 'Ο Ταμασός στο 84.9% (2.38 ΕΚΜ) — -1.1μ.π. Από 21.8% πέρυσι — 3.9× ανάκαμψη.',
      ru: 'Тамассос на 84.9% (2.38 МКМ) — -1.1пп. Год назад 21.8% — восстановление в 3.9×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 89.6% (1.79 MCM) — essentially flat over the past week. Up from 59.7% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 89.6% (1.79 ΕΚΜ) — σχεδόν αμετάβλητη. Αύξηση από 59.7% πέρυσι.',
      ru: 'Клиру-Малунта на 89.6% (1.79 МКМ) — почти без изменений. Рост с 59.7% год назад.',
    },
    'Solea': {
      en: 'Solea at 88.7% (3.95 MCM) — holding near full as dry season progresses. Up from 48.8% last year — 1.82× year-over-year improvement.',
      el: 'Η Σολέα στο 88.7% (3.95 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 48.8% πέρυσι — 1.82× βελτίωση.',
      ru: 'Солеа на 88.7% (3.95 МКМ) — удерживается вблизи полного уровня. Рост с 48.8% год назад — улучшение в 1.82×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (1 — 7 Σεπτεμβρίου 2026)

Δελτίο Δευτέρας, καλύπτοντας την περασμένη εβδομάδα: συνολική αποθήκευση **37.4%** (108.6 ΕΚΜ) — από 37.7% (109.7 ΕΚΜ) την 1η Σεπτεμβρίου, απώλεια περίπου 1.1 ΕΚΜ σε έξι ημέρες, παρόμοιος αργός ρυθμός με την προηγούμενη εβδομάδα. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) είχε ξανά τη μεγαλύτερη πτώση, -4.8μ.π. στο 34.2%, συνεχίζοντας την πτώση της προηγούμενης εβδομάδας. Ο [Αρμίνου](/el/dam/arminou/) ήταν ο μόνος που ανέβηκε, +0.6μ.π. στο 58.8%. Το χάσμα με πέρυσι παραμένει σχεδόν αμετάβλητο στις **23.2 μονάδες**. Εισροή σεζόν: 116.6 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.13 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 1 Σεπτεμβρίου):**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **34.2%** (-4.8μ.π.) — η μεγαλύτερη πτώση, για δεύτερη συνεχόμενη εβδομάδα
- [Αγία Μαρίνα](/el/dam/agia-marina/) **56.0%** (-2.7μ.π.) — η πολυεβδομαδιαία πτώση συνεχίζεται
- [Αργάκα](/el/dam/argaka/) **54.1%** (-2.0μ.π.) — συνεχίζεται η πτώση
- [Αρμίνου](/el/dam/arminou/) **58.8%** (+0.6μ.π.) — ο μόνος από τα 21 φράγματα που ανέβηκε
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει στο οροπέδιο υπερχείλισης
- [Αχνά](/el/dam/achna/) **1.2%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — dialogos.com.cy
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (1 — 7 сентября 2026)

Бюллетень понедельника, за прошедшую неделю: общий запас **37.4%** (108.6 МКМ) — против 37.7% (109.7 МКМ) 1 сентября, потеря около 1.1 МКМ за шесть дней, темп схожий с прошлой неделей. [Мавроколимпос](/ru/dam/mavrokolympos/) снова показал крупнейшее снижение, -4.8пп до 34.2%, продолжая падение прошлой недели. [Арминоу](/ru/dam/arminou/) стал единственным, кто вырос, +0.6пп до 58.8%. Разрыв с прошлым годом почти не изменился — **23.2 пункта**. Приток сезона: 116.6 МКМ (авг-сен пока: 1.13 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 1 сентября):**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **34.2%** (-4.8пп) — крупнейшее снижение, вторую неделю подряд
- [Агия Марина](/ru/dam/agia-marina/) **56.0%** (-2.7пп) — многонедельное снижение продолжается
- [Аргака](/ru/dam/argaka/) **54.1%** (-2.0пп) — снижение продолжается
- [Арминоу](/ru/dam/arminou/) **58.8%** (+0.6пп) — единственный из 21 водохранилища, показавший рост
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему на плато перелива
- [Ахна](/ru/dam/achna/) **1.2%** — без изменений, без притока за весь сезон

**В СМИ:**
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — dialogos.com.cy
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 1 — September 7, 2026)

Monday's bulletin, covering the past week: total storage at **37.4%** (108.6 MCM) — down from 37.7% (109.7 MCM) on September 1, a loss of roughly 1.1 MCM over six days, a similar slow drawdown pace to the previous week. [Mavrokolympos](/dam/mavrokolympos/) led the slide again, down 4.8pp to 34.2%, extending last week's steepest-drop title into a second week. [Arminou](/dam/arminou/) was the only riser among the 21 dams, up 0.6pp to 58.8%. The gap over last year held nearly steady at **23.2 points**. Season inflow: 116.6 MCM (Aug-Sep so far: 1.13 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 1):**
- [Mavrokolympos](/dam/mavrokolympos/) **34.2%** (-4.8pp) — steepest drop for a second straight week
- [Agia Marina](/dam/agia-marina/) **56.0%** (-2.7pp) — multi-week slide continues
- [Argaka](/dam/argaka/) **54.1%** (-2.0pp) — continuing to slide
- [Arminou](/dam/arminou/) **58.8%** (+0.6pp) — the only one of the 21 dams to rise
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still on its overflow plateau
- [Achna](/dam/achna/) **1.2%** — unchanged, zero inflow all season

**In the media:**
- [Reservoir levels over double from same time last year](https://cyprus-mail.com/2026/08/24/reservoir-levels-over-double-from-same-time-last-year) — Cyprus Mail
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — dialogos.com.cy

🔗 https://fragmata.info
`;
};
