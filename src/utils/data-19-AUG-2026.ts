import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.118, totalSince: 26.575 }, storage: { current: { amount: 45.555, percentage: 39.6 }, lastYear: { amount: 15.792, percentage: 13.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 3.974, percentage: 23.2 }, lastYear: { amount: 2.758, percentage: 16.1 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 1.725 }, storage: { current: { amount: 2.466, percentage: 17.8 }, lastYear: { amount: 2.147, percentage: 15.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.017, totalSince: 3.773 }, storage: { current: { amount: 4.778, percentage: 30.8 }, lastYear: { amount: 4.408, percentage: 28.4 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.182, percentage: 53.2 }, lastYear: { amount: 1.585, percentage: 11.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.004, totalSince: 22.381 }, storage: { current: { amount: 2.521, percentage: 58.6 }, lastYear: { amount: 2.152, percentage: 50.0 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.504, percentage: 44.2 }, lastYear: { amount: 0.946, percentage: 27.8 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.096, percentage: 1.4 }, lastYear: { amount: 0.318, percentage: 4.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.237, percentage: 38.6 }, lastYear: { amount: 7.638, percentage: 14.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.978, percentage: 46.5 }, lastYear: { amount: 2.902, percentage: 16.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.133, percentage: 52.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.270, percentage: 42.8 }, lastYear: { amount: 3.936, percentage: 16.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.611, percentage: 61.7 }, lastYear: { amount: 0.047, percentage: 4.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.630, percentage: 73.3 }, lastYear: { amount: 0.140, percentage: 16.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.196, percentage: 65.8 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.395, percentage: 82.5 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.220, percentage: 85.3 }, lastYear: { amount: 0.110, percentage: 7.7 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.359, percentage: 98.9 }, lastYear: { amount: 0.096, percentage: 26.4 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.469, percentage: 88.2 }, lastYear: { amount: 0.661, percentage: 23.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.846, percentage: 92.3 }, lastYear: { amount: 1.220, percentage: 61.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: -0.010, totalSince: 2.626 }, storage: { current: { amount: 4.030, percentage: 90.5 }, lastYear: { amount: 2.198, percentage: 49.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 19, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.469 }, total:115.964 },
];

export const getReportDate = (): string => "19-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 39.6% (45.6 MCM) — slow decline continues, 25.9pp above last year\'s 13.7%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 39.6% (45.6 ΕΚΜ) — αργή υποχώρηση, 25.9μ.π. πάνω από πέρυσι (13.7%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 39.6% (45.6 МКМ) — медленное снижение. +25.9пп выше прошлогодних 13.7%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.2% (3.97 MCM) — easing slightly over six days, still 7.1pp above last year\'s 16.1%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 23.2% (3.97 ΕΚΜ) — ελαφριά υποχώρηση, πάνω από πέρυσι (16.1%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.2% (3.97 МКМ) — небольшое снижение, выше прошлогодних 16.1%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.8% (2.47 MCM) — essentially steady for weeks, 2.3pp above last year\'s 15.5%. Seasonal inflow 1.73 MCM.',
      el: 'Η Λεύκαρα στο 17.8% (2.47 ΕΚΜ) — σχεδόν σταθερή επί εβδομάδες, πάνω από πέρυσι (15.5%). Εισροή σεζόν 1.73 ΕΚΜ.',
      ru: 'Лефкара на 17.8% (2.47 МКМ) — почти стабильна неделями, выше прошлогодних 15.5%. Приток 1.73 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 30.8% (4.78 MCM) — continued dry-season easing, 2.4pp above last year\'s 28.4%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 30.8% (4.78 ΕΚΜ) — συνεχίζει η υποχώρηση στην ξηρή περίοδο, 2.4μ.π. πάνω από πέρυσι (28.4%).',
      ru: 'Дипотамос на 30.8% (4.78 МКМ) — продолжается снижение в сухой сезон, +2.4пп выше прошлогодних 28.4%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 53.2% (7.18 MCM) — gradual summer decline, 41.5pp above last year\'s 11.7%. Among the highest mid-August levels in years.',
      el: 'Η Γερμασόγεια στο 53.2% (7.18 ΕΚΜ) — σταδιακή υποχώρηση. 41.5μ.π. πάνω από πέρυσι (11.7%).',
      ru: 'Гермасойя на 53.2% (7.18 МКМ) — постепенное снижение. +41.5пп выше прошлогодних 11.7%.',
    },
    'Arminou': {
      en: 'Arminou at 58.6% (2.52 MCM) — holding flat on its summer plateau for a second bulletin. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.6% (2.52 ΕΚΜ) — σταθερός στο καλοκαιρινό οροπέδιο για δεύτερο δελτίο. Εισροή σεζόν: 22.4 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.6% (2.52 МКМ) — стабилен на летнем плато второй бюллетень подряд. Приток сезона: 22.4 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 44.2% (1.50 MCM) — down 0.8pp over six days, still 16.4pp above last year\'s 27.8%.',
      el: 'Η Πολεμίδια στο 44.2% (1.50 ΕΚΜ) — υποχώρησε 0.8μ.π. σε έξι ημέρες, 16.4μ.π. πάνω από πέρυσι (27.8%).',
      ru: 'Полемидия на 44.2% (1.50 МКМ) — снизилась на 0.8пп за шесть дней, +16.4пп выше прошлогодних 27.8%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.4% (0.10 MCM), zero inflow all season. Far below last year\'s 4.7%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.4% (0.10 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (4.7%).',
      ru: 'Ахна критически низкая — 1.4% (0.10 МКМ), без притока за сезон. Далеко ниже прошлогодних 4.7%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.6% (20.24 MCM) — slow drawdown, 24.0pp above last year\'s 14.6%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.6% (20.24 ΕΚΜ) — αργή υποχώρηση, 24.0μ.π. πάνω από πέρυσι (14.6%).',
      ru: 'Аспрокреммос на 38.6% (20.24 МКМ) — медленное снижение, +24.0пп выше прошлогодних 14.6%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 46.5% (7.98 MCM) — easing further below 50%, still 29.6pp above last year\'s 16.9%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 46.5% (7.98 ΕΚΜ) — υποχωρεί περαιτέρω κάτω από το 50%, 29.6μ.π. πάνω από πέρυσι (16.9%).',
      ru: 'Каннавиу на 46.5% (7.98 МКМ) — снижается дальше ниже 50%, +29.6пп выше прошлогодних 16.9%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 52.0% (1.13 MCM) — the largest mover of this bulletin, down 5.8pp over six days as its summer slide continues. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 52.0% (1.13 ΕΚΜ) — η μεγαλύτερη κίνηση του δελτίου, -5.8μ.π. σε έξι ημέρες. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 52.0% (1.13 МКМ) — крупнейшее изменение бюллетеня, -5.8пп за шесть дней. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 42.8% (10.27 MCM) — drifting steadily lower through the dry season, still 26.4pp above last year\'s 16.4%.',
      el: 'Ο Εύρετου στο 42.8% (10.27 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 26.4μ.π. πάνω από πέρυσι (16.4%).',
      ru: 'Эвретоу на 42.8% (10.27 МКМ) — устойчивое снижение в сухой сезон. +26.4пп выше прошлогодних 16.4%.',
    },
    'Argaka': {
      en: 'Argaka at 61.7% (0.61 MCM) — extending its multi-week slide, down 4.6pp over six days. Up from 4.7% last year — a 13× year-over-year recovery.',
      el: 'Η Αργάκα στο 61.7% (0.61 ΕΚΜ) — συνεχίζει η πολυεβδομαδιαία πτώση, -4.6μ.π. σε έξι ημέρες. Από 4.7% πέρυσι — 13× ανάκαμψη.',
      ru: 'Аргака на 61.7% (0.61 МКМ) — продолжается многонедельное снижение, -4.6пп за шесть дней. Год назад 4.7% — 13-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 73.3% (0.63 MCM) — down 2.2pp over six days, continued retreat from near-full. Up from 16.3% last year.',
      el: 'Ο Πόμος στο 73.3% (0.63 ΕΚΜ) — υποχώρησε 2.2μ.π. σε έξι ημέρες, υποχωρεί από το σχεδόν πλήρες. Από 16.3% πέρυσι.',
      ru: 'Помос на 73.3% (0.63 МКМ) — снизился на 2.2пп за шесть дней, отступает от почти полного уровня. Год назад 16.3%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 65.8% (0.20 MCM) — the second-largest mover of the bulletin, down 4.7pp over six days. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 65.8% (0.20 ΕΚΜ) — η δεύτερη μεγαλύτερη κίνηση του δελτίου, -4.7μ.π. σε έξι ημέρες. Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 65.8% (0.20 МКМ) — второе по величине изменение бюллетеня, -4.7пп за шесть дней. Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 82.5% (1.40 MCM) — slow decline continues below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 82.5% (1.40 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 82.5% (1.40 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 85.3% (1.22 MCM) — gradual decline continues below 90%. Was 7.7% last year.',
      el: 'Ο Ξυλιάτος στο 85.3% (1.22 ΕΚΜ) — σταδιακή υποχώρηση κάτω από το 90%. Από 7.7% πέρυσι.',
      ru: 'Ксилиатос на 85.3% (1.22 МКМ) — постепенное снижение ниже 90%. Год назад 7.7%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis at 98.9% (0.36 MCM) — easing further off its four-month plateau at 100%, down 0.5pp over six days. Up from 26.4% last year.',
      el: 'Ο Καλοπαναγιώτης στο 98.9% (0.36 ΕΚΜ) — υποχωρεί περαιτέρω από το τετράμηνο οροπέδιο στο 100%, -0.5μ.π. σε έξι ημέρες. Αύξηση από 26.4% πέρυσι.',
      ru: 'Калопанайотис на 98.9% (0.36 МКМ) — продолжает снижаться после четырёхмесячного плато на 100%, -0.5пп за шесть дней. Рост с 26.4% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 88.2% (2.47 MCM) — easing from full, down 0.8pp over six days. Was 23.6% last year — a 3.7× year-over-year recovery.',
      el: 'Ο Ταμασός στο 88.2% (2.47 ΕΚΜ) — υποχωρεί από το πλήρες, -0.8μ.π. σε έξι ημέρες. Από 23.6% πέρυσι — 3.7× ανάκαμψη.',
      ru: 'Тамассос на 88.2% (2.47 МКМ) — снижение от полного уровня, -0.8пп за шесть дней. Год назад 23.6% — восстановление в 3.7×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 92.3% (1.85 MCM) — holding steady near full through the dry season. Up from 61.0% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 92.3% (1.85 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 61.0% πέρυσι.',
      ru: 'Клиру-Малунта на 92.3% (1.85 МКМ) — стабильно у полного уровня. Рост с 61.0% год назад.',
    },
    'Solea': {
      en: 'Solea at 90.5% (4.03 MCM) — holding near full as dry season progresses. Up from 49.3% last year — 1.83× year-over-year improvement.',
      el: 'Η Σολέα στο 90.5% (4.03 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 49.3% πέρυσι — 1.83× βελτίωση.',
      ru: 'Солеа на 90.5% (4.03 МКМ) — удерживается вблизи полного уровня. Рост с 49.3% год назад — улучшение в 1.83×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (13 — 19 Αυγούστου 2026)

Δελτίο Τετάρτης: συνολική αποθήκευση **38.6%** (112.1 ΕΚΜ) — από 38.9% (113.1 ΕΚΜ) την Πέμπτη, μια απώλεια περίπου 1.0 ΕΚΜ σε έξι ημέρες. Η μεγαλύτερη κίνηση ήταν ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/), -5.8μ.π. στο 52.0%, ακολουθούμενος από την [Αγία Μαρίνα](/el/dam/agia-marina/) (-4.7μ.π.) και την [Αργάκα](/el/dam/argaka/) (-4.6μ.π.), που συνεχίζουν την πολυεβδομαδιαία πτώση τους. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) υποχώρησε περαιτέρω στο 98.9%, απομακρυνόμενος σταδιακά από το τετράμηνο οροπέδιο στο 100%. Το χάσμα με πέρυσι διευρύνθηκε ελαφρώς στις **23.1 μονάδες**. Εισροή σεζόν: 116.0 ΕΚΜ. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 13 Αυγούστου):**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **52.0%** (-5.8μ.π.) — η μεγαλύτερη κίνηση του δελτίου
- [Αγία Μαρίνα](/el/dam/agia-marina/) **65.8%** (-4.7μ.π.) — δεύτερη μεγαλύτερη κίνηση
- [Αργάκα](/el/dam/argaka/) **61.7%** (-4.6μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Πόμος](/el/dam/pomos/) **73.3%** (-2.2μ.π.) — συνεχίζει να υποχωρεί από το σχεδόν πλήρες
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **98.9%** (-0.5μ.π.) — απομακρύνεται περαιτέρω από το πλήρες
- [Αχνά](/el/dam/achna/) **1.4%** — σχεδόν αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (13 — 19 августа 2026)

Бюллетень среды: общий запас **38.6%** (112.1 МКМ) — против 38.9% (113.1 МКМ) в четверг, потеря около 1.0 МКМ за шесть дней. Крупнейшим изменением стал [Мавроколимпос](/ru/dam/mavrokolympos/), -5.8пп до 52.0%, за ним [Агия Марина](/ru/dam/agia-marina/) (-4.7пп) и [Аргака](/ru/dam/argaka/) (-4.6пп), которые продолжают своё многонедельное снижение. [Калопанайотис](/ru/dam/kalopanagiotis/) снизился дальше до 98.9%, постепенно отдаляясь от четырёхмесячного плато на 100%. Разрыв с прошлым годом немного увеличился до **23.1 пункта**. Приток сезона: 116.0 МКМ. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 13 августа):**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **52.0%** (-5.8пп) — крупнейшее изменение бюллетеня
- [Агия Марина](/ru/dam/agia-marina/) **65.8%** (-4.7пп) — второе по величине изменение
- [Аргака](/ru/dam/argaka/) **61.7%** (-4.6пп) — продолжается многонедельное снижение
- [Помос](/ru/dam/pomos/) **73.3%** (-2.2пп) — продолжает отступать от почти полного уровня
- [Калопанайотис](/ru/dam/kalopanagiotis/) **98.9%** (-0.5пп) — продолжает отдаляться от полного уровня
- [Ахна](/ru/dam/achna/) **1.4%** — почти без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 13 — 19, 2026)

Wednesday bulletin: total storage at **38.6%** (112.1 MCM) — down from 38.9% (113.1 MCM) on Thursday, a loss of roughly 1.0 MCM over six days. The largest mover was [Mavrokolympos](/dam/mavrokolympos/), down 5.8pp to 52.0%, followed by [Agia Marina](/dam/agia-marina/) (-4.7pp) and [Argaka](/dam/argaka/) (-4.6pp), both extending their multi-week slides. [Kalopanagiotis](/dam/kalopanagiotis/) eased further to 98.9%, drifting gradually away from its four-month plateau at 100%. The gap over last year widened slightly to **23.1 points**. Season inflow: 116.0 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. August 13):**
- [Mavrokolympos](/dam/mavrokolympos/) **52.0%** (-5.8pp) — largest mover of this bulletin
- [Agia Marina](/dam/agia-marina/) **65.8%** (-4.7pp) — second-largest mover
- [Argaka](/dam/argaka/) **61.7%** (-4.6pp) — extending its multi-week slide
- [Pomos](/dam/pomos/) **73.3%** (-2.2pp) — continues easing from near-full
- [Kalopanagiotis](/dam/kalopanagiotis/) **98.9%** (-0.5pp) — drifting further from its 100% plateau
- [Achna](/dam/achna/) **1.4%** — essentially unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
