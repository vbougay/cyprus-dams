import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.016, totalSince: 26.244 }, storage: { current: { amount: 46.118, percentage: 40.1 }, lastYear: { amount: 16.688, percentage: 14.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.028, percentage: 23.6 }, lastYear: { amount: 2.885, percentage: 16.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.490, percentage: 18.0 }, lastYear: { amount: 2.190, percentage: 15.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 4.989, percentage: 32.2 }, lastYear: { amount: 4.643, percentage: 30.0 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.436, percentage: 55.1 }, lastYear: { amount: 1.836, percentage: 13.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.002, totalSince: 22.334 }, storage: { current: { amount: 2.530, percentage: 58.8 }, lastYear: { amount: 2.251, percentage: 52.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.559, percentage: 45.9 }, lastYear: { amount: 0.998, percentage: 29.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.117, percentage: 1.7 }, lastYear: { amount: 0.341, percentage: 5.0 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 20.616, percentage: 39.4 }, lastYear: { amount: 8.385, percentage: 16.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.208, percentage: 47.8 }, lastYear: { amount: 3.080, percentage: 17.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.336, percentage: 61.3 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 10.657, percentage: 44.4 }, lastYear: { amount: 4.204, percentage: 17.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.694, percentage: 70.1 }, lastYear: { amount: 0.101, percentage: 10.2 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.678, percentage: 78.8 }, lastYear: { amount: 0.169, percentage: 19.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.228, percentage: 76.5 }, lastYear: { amount: 0.059, percentage: 19.8 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.442, percentage: 85.3 }, lastYear: { amount: 0.012, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.266, percentage: 88.5 }, lastYear: { amount: 0.137, percentage: 9.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.123, percentage: 33.9 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.557, percentage: 91.3 }, lastYear: { amount: 0.710, percentage: 25.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.879, percentage: 94.0 }, lastYear: { amount: 1.267, percentage: 63.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.114, percentage: 92.4 }, lastYear: { amount: 2.313, percentage: 51.9 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through August 5, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":0.066 }, total:115.561 },
];

export const getReportDate = (): string => "05-AUG-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 40.1% (46.1 MCM) — steady slow decline, 25.6pp above last year\'s 14.5%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 40.1% (46.1 ΕΚΜ) — αργή υποχώρηση. 25.6μ.π. πάνω από πέρυσι (14.5%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 40.1% (46.1 МКМ) — медленное снижение. +25.6пп выше прошлогодних 14.5%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.6% (4.03 MCM) — essentially unchanged, well above last year\'s 16.9%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 23.6% (4.03 ΕΚΜ) — σχεδόν αμετάβλητος, πάνω από πέρυσι (16.9%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 23.6% (4.03 МКМ) — почти без изменений, выше прошлогодних 16.9%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.0% (2.49 MCM) — essentially unchanged for weeks, above last year\'s 15.8%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.0% (2.49 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (15.8%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.0% (2.49 МКМ) — без изменений неделями, выше прошлогодних 15.8%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 32.2% (4.99 MCM) — easing in dry season; 2.2pp above last year\'s 30.0%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 32.2% (4.99 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.2μ.π. πάνω από πέρυσι (30.0%).',
      ru: 'Дипотамос на 32.2% (4.99 МКМ) — снижение в сухой сезон, +2.2пп выше прошлогодних 30.0%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 55.1% (7.44 MCM) — gradual summer decline, 41.5pp above last year\'s 13.6%. Highest early-August level in years.',
      el: 'Η Γερμασόγεια στο 55.1% (7.44 ΕΚΜ) — σταδιακή υποχώρηση. 41.5μ.π. πάνω από πέρυσι (13.6%).',
      ru: 'Гермасойя на 55.1% (7.44 МКМ) — постепенное летнее снижение. +41.5пп выше прошлогодних 13.6%.',
    },
    'Arminou': {
      en: 'Arminou at 58.8% (2.53 MCM) — settling into a flat plateau after last week\'s brief uptick. Season inflow 22.3 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.8% (2.53 ΕΚΜ) — σταθεροποιείται μετά τη σύντομη άνοδο της περασμένης εβδομάδας. Εισροή σεζόν: 22.3 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.8% (2.53 МКМ) — стабилизировался после недавнего кратковременного роста. Приток сезона: 22.3 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 45.9% (1.56 MCM) — down 0.2pp since Monday, holding below the 50% mark. Still 16.5pp above last year\'s 29.4%.',
      el: 'Η Πολεμίδια στο 45.9% (1.56 ΕΚΜ) — υποχώρησε 0.2μ.π. από τη Δευτέρα, κάτω από το 50%. 16.5μ.π. πάνω από πέρυσι (29.4%).',
      ru: 'Полемидия на 45.9% (1.56 МКМ) — снизилась на 0.2пп с понедельника, ниже отметки 50%. +16.5пп выше прошлогодних 29.4%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.7% (0.12 MCM), zero inflow all season. Far below last year\'s 5.0%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.7% (0.12 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.0%).',
      ru: 'Ахна критически низкая — 1.7% (0.12 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.0%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 39.4% (20.62 MCM) — slow drawdown, 23.4pp above last year\'s 16.0%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 39.4% (20.62 ΕΚΜ) — αργή υποχώρηση, 23.4μ.π. πάνω από πέρυσι (16.0%).',
      ru: 'Аспрокреммос на 39.4% (20.62 МКМ) — медленное снижение, +23.4пп выше прошлогодних 16.0%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 47.8% (8.21 MCM) — just below the 50% threshold, still 29.9pp above last year\'s 17.9%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 47.8% (8.21 ΕΚΜ) — λίγο κάτω από το 50%, 29.9μ.π. πάνω από πέρυσι (17.9%).',
      ru: 'Каннавиу на 47.8% (8.21 МКМ) — чуть ниже границы 50%, +29.9пп выше прошлогодних 17.9%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 61.3% (1.34 MCM) — the largest 2-day mover in Paphos, down 0.9pp as it continues easing from its summer peak. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος στο 61.3% (1.34 ΕΚΜ) — η μεγαλύτερη κίνηση 2 ημερών στην Πάφο, -0.9μ.π. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 61.3% (1.34 МКМ) — крупнейшее 2-дневное изменение в Пафосе, -0.9пп. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 44.4% (10.66 MCM) — drifting steadily lower through the dry season; still 26.9pp above last year\'s 17.5%.',
      el: 'Ο Εύρετου στο 44.4% (10.66 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 26.9μ.π. πάνω από πέρυσι (17.5%).',
      ru: 'Эвретоу на 44.4% (10.66 МКМ) — устойчивое снижение в сухой сезон. +26.9пп выше прошлогодних 17.5%.',
    },
    'Argaka': {
      en: 'Argaka at 70.1% (0.69 MCM) — extending its multi-week slide, down 0.7pp since Monday. Up from 10.2% last year — a 6.9× year-over-year recovery.',
      el: 'Η Αργάκα στο 70.1% (0.69 ΕΚΜ) — συνεχίζει η πολυεβδομαδιαία πτώση, -0.7μ.π. από τη Δευτέρα. Από 10.2% πέρυσι — 6.9× ανάκαμψη.',
      ru: 'Аргака на 70.1% (0.69 МКМ) — продолжается многонедельное снижение, -0.7пп с понедельника. Год назад 10.2% — 6.9-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 78.8% (0.68 MCM) — down 0.6pp since Monday, continued retreat from near-full. Up from 19.7% last year.',
      el: 'Ο Πόμος στο 78.8% (0.68 ΕΚΜ) — υποχώρησε 0.6μ.π. από τη Δευτέρα, υποχωρεί από το σχεδόν πλήρες. Από 19.7% πέρυσι.',
      ru: 'Помос на 78.8% (0.68 МКМ) — снизился на 0.6пп с понедельника, отступает от почти полного уровня. Год назад 19.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 76.5% (0.23 MCM) — the largest mover for a third straight bulletin, though the decline is easing to -1.4pp. Up from 19.8% last year.',
      el: 'Η Αγία Μαρίνα στο 76.5% (0.23 ΕΚΜ) — η μεγαλύτερη κίνηση για τρίτο συνεχόμενο δελτίο, αν και η πτώση επιβραδύνεται (-1.4μ.π.). Από 19.8% πέρυσι.',
      ru: 'Агия Марина на 76.5% (0.23 МКМ) — крупнейшее изменение третий бюллетень подряд, хотя темп снижения замедляется (-1.4пп). Год назад 19.8%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 85.3% (1.44 MCM) — continued slow decline below 90%. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 85.3% (1.44 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 85.3% (1.44 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 88.5% (1.27 MCM) — slow decline continues below 90%. Was 9.6% last year.',
      el: 'Ο Ξυλιάτος στο 88.5% (1.27 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 9.6% πέρυσι.',
      ru: 'Ксилиатос на 88.5% (1.27 МКМ) — медленное снижение ниже 90% продолжается. Год назад 9.6%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 33.9% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 33.9% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 33.9% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 91.3% (2.56 MCM) — easing slowly from full. Was 25.4% last year — a 3.6× year-over-year recovery.',
      el: 'Ο Ταμασός στο 91.3% (2.56 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 25.4% πέρυσι — 3.6× ανάκαμψη.',
      ru: 'Тамассос на 91.3% (2.56 МКМ) — медленное снижение от полного уровня. Год назад 25.4% — восстановление в 3.6×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 94.0% (1.88 MCM) — holding steady near full through the dry season. Up from 63.3% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 94.0% (1.88 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 63.3% πέρυσι.',
      ru: 'Клиру-Малунта на 94.0% (1.88 МКМ) — стабильно у полного уровня. Рост с 63.3% год назад.',
    },
    'Solea': {
      en: 'Solea at 92.4% (4.11 MCM) — holding near full as dry season progresses. Up from 51.9% last year — 1.78× year-over-year improvement.',
      el: 'Η Σολέα στο 92.4% (4.11 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 51.9% πέρυσι — 1.78× βελτίωση.',
      ru: 'Солеа на 92.4% (4.11 МКМ) — удерживается вблизи полного уровня. Рост с 51.9% год назад — улучшение в 1.78×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (3 — 5 Αυγούστου 2026)

Δελτίο Τετάρτης: συνολική αποθήκευση **39.5%** (114.8 ΕΚΜ) — από 39.6% (115.2 ΕΚΜ) τη Δευτέρα, μια απώλεια 0.4 ΕΚΜ, με τον ίδιο αργό ρυθμό υποχώρησης να συνεχίζεται. Η [Αγία Μαρίνα](/el/dam/agia-marina/) κατέγραψε τη μεγαλύτερη πτώση για τρίτο συνεχόμενο δελτίο, από 77.9% σε 76.5% (-1.4μ.π.), αν και ο ρυθμός επιβραδύνεται. Ο [Αρμίνου](/el/dam/arminou/) παρέμεινε σχεδόν σταθερός στο 58.8% (-0.1μ.π.). Το χάσμα με πέρυσι κρατά στο **+22.9μ.π.** Εισροή σεζόν 25/26: **115.6 ΕΚΜ**. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι Δευτέρας):**
- [Αγία Μαρίνα](/el/dam/agia-marina/) **76.5%** (-1.4μ.π.) — μεγαλύτερη πτώση για τρίτο συνεχόμενο δελτίο
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **61.3%** (-0.9μ.π.) — συνεχίζει να υποχωρεί από την κορύφωση του καλοκαιριού
- [Αργάκα](/el/dam/argaka/) **70.1%** (-0.7μ.π.) — συνεχίζει η πολυεβδομαδιαία πτώση
- [Πόμος](/el/dam/pomos/) **78.8%** (-0.6μ.π.) — συνεχίζει να υποχωρεί από το σχεδόν πλήρες
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.7%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (3 — 5 августа 2026)

Бюллетень среды: общий запас **39.5%** (114.8 МКМ) — против 39.6% (115.2 МКМ) в понедельник, потеря 0.4 МКМ, тот же медленный темп снижения продолжается. [Агия Марина](/ru/dam/agia-marina/) показала крупнейшее падение третий бюллетень подряд, снизившись с 77.9% до 76.5% (-1.4пп), хотя темп замедляется. [Арминоу](/ru/dam/arminou/) остался почти без изменений на уровне 58.8% (-0.1пп). Разрыв с прошлым годом держится на **+22.9пп**. Приток сезона 25/26: **115.6 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с понедельника):**
- [Агия Марина](/ru/dam/agia-marina/) **76.5%** (-1.4пп) — крупнейшее падение третий бюллетень подряд
- [Мавроколимпос](/ru/dam/mavrokolympos/) **61.3%** (-0.9пп) — продолжает снижаться от летнего пика
- [Аргака](/ru/dam/argaka/) **70.1%** (-0.7пп) — продолжается многонедельное снижение
- [Помос](/ru/dam/pomos/) **78.8%** (-0.6пп) — продолжает отступать от почти полного уровня
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.7%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (August 3 — 5, 2026)

Wednesday bulletin: total storage at **39.5%** (114.8 MCM) — down from 39.6% (115.2 MCM) on Monday, a loss of 0.4 MCM, the same slow drawdown pace continuing. [Agia Marina](/dam/agia-marina/) posted the largest drop for a third straight bulletin, easing from 77.9% to 76.5% (-1.4pp), though the pace is slowing. [Arminou](/dam/arminou/) held nearly flat at 58.8% (-0.1pp). The gap over last year holds at **+22.9pp**. Season total inflow: **115.6 MCM**. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. Monday):**
- [Agia Marina](/dam/agia-marina/) **76.5%** (-1.4pp) — largest drop for a third straight bulletin
- [Mavrokolympos](/dam/mavrokolympos/) **61.3%** (-0.9pp) — continues easing from its summer peak
- [Argaka](/dam/argaka/) **70.1%** (-0.7pp) — extending its multi-week slide
- [Pomos](/dam/pomos/) **78.8%** (-0.6pp) — continues easing from near-full
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.7%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};
