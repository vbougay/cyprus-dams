"use client";

/**
 * Charts for the end-of-summer analysis articles.
 *
 * Every series is derived from `summerStats` against the article's own
 * dataSetId, so pointing an article at a newer bulletin moves the charts,
 * the annotations and the callout numbers together. Nothing is hard-coded.
 *
 * Drawn as plain SVG rather than Recharts: these are annotated editorial
 * figures (leader lines, brackets, reference bands) that Recharts' composable
 * API makes awkward, and they carry no interaction beyond a hover tooltip.
 */

import React, { useMemo, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import {
  endOfSummerSeries, endOfSummerStats, summerDrawdown, drawdownStats,
  peakMonths, summerInflow, damsByCapacity, yearTrace, autumnProjection,
  mainCapacity, referencePoint,
} from '@/utils/summerStats';

type Lang = 'en' | 'el' | 'ru';
const L = <T,>(m: Record<Lang, T>, lang: string): T => m[(lang as Lang)] ?? m.en;

/* Fixed hues legible on both the light and dark chart grounds.
   CURRENT/PRIOR are the validated blue/orange pair; MUTED recedes. */
const CURRENT = '#2f7fd8';
const PRIOR = '#e2691f';
const MUTED = '#9aa0a8';

const fmt = (v: number, d = 1) => v.toFixed(d);

/* ---------- shared frame ---------- */

interface FrameProps {
  title: string;
  subtitle: string;
  source: string;
  height: number;
  children: React.ReactNode;
  legend?: { color: string; label: string }[];
  minWidth?: number;
}

function Frame({ title, subtitle, source, height, children, legend, minWidth = 640 }: FrameProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 sm:p-5">
        <h4 className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{subtitle}</p>
        {legend && legend.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {legend.map(l => (
              <span key={l.label} className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <i className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: l.color }} />
                {l.label}
              </span>
            ))}
          </div>
        )}
        <div className="mt-3 overflow-x-auto">
          <svg
            viewBox={`0 0 1000 ${height}`}
            className="block h-auto w-full"
            style={{ minWidth }}
            role="img"
            aria-label={`${title}. ${subtitle}`}
          >
            {children}
          </svg>
        </div>
        <p className="mt-3 border-t border-gray-200 pt-2 text-[11px] leading-relaxed text-gray-500 dark:border-gray-700 dark:text-gray-500">
          {source}
        </p>
      </CardContent>
    </Card>
  );
}

const AxisText = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[10px] tabular-nums text-gray-500 dark:text-gray-400" />
);
const Note = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[11px] font-medium tabular-nums text-gray-700 dark:text-gray-300" />
);
const Grid = (p: React.SVGProps<SVGLineElement>) => (
  <line {...p} className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={1} />
);

/* ---------- tooltip ---------- */

function useTip() {
  const [tip, setTip] = useState<{ x: number; y: number; html: string } | null>(null);
  const show = useCallback((e: React.MouseEvent, html: string) => {
    setTip({ x: e.clientX, y: e.clientY, html });
  }, []);
  const hide = useCallback(() => setTip(null), []);
  const node = tip ? (
    <div
      className="pointer-events-none fixed z-50 whitespace-nowrap rounded border border-gray-200 bg-white px-2 py-1 text-[11px] leading-relaxed tabular-nums text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      style={{ left: Math.min(tip.x + 12, (typeof window !== 'undefined' ? window.innerWidth : 1e4) - 190), top: tip.y - 46 }}
      dangerouslySetInnerHTML={{ __html: tip.html }}
    />
  ) : null;
  return { show, hide, node };
}

/* ================= 1. End-of-summer storage, every year ================= */

export function EndOfSummerChart() {
  const { currentDataSetId: ds } = useDataContext();
  const { language } = useLanguage();
  const u = useTranslation(language)('volumeUnit');
  const { show, hide, node } = useTip();

  const { rows, stats, cap } = useMemo(() => ({
    rows: endOfSummerSeries(ds), stats: endOfSummerStats(ds), cap: mainCapacity(ds),
  }), [ds]);
  if (!stats || !rows.length) return null;

  const cur = stats.current.year;
  const W = 1000, H = 360, m = { t: 26, r: 14, b: 42, l: 42 };
  const top = Math.ceil(Math.max(...rows.map(r => r.value)) / 50) * 50 + 20;
  const bw = (W - m.l - m.r) / rows.length;
  const x = (i: number) => m.l + i * bw;
  const y = (v: number) => (H - m.b) - (v / top) * (H - m.b - m.t);

  const ticks: number[] = [];
  for (let v = 0; v <= top; v += 50) ticks.push(v);

  const t = L({
    en: { title: `Storage in late ${monthName(ds, 'en')}, every year since ${rows[0].year}`,
          sub: `Each column is what the 18 main dams held in the same week of that year. ${cur} is well above ${cur - 1}, and still below the ${rows.length}-year average of ${fmt(stats.mean)} ${u}.`,
          src: `Reading nearest ${stats.current.date} in each year. Main dams only (${fmt(cap, 1)} ${u} capacity). Source: WDD.`,
          avg: `${rows.length}-year average`, mln: u, other: 'Other years' },
    el: { title: `Αποθήκευση στα τέλη ${monthName(ds, 'el')}, κάθε χρόνο από το ${rows[0].year}`,
          sub: `Κάθε στήλη είναι όσο συγκρατούσαν τα 18 κύρια φράγματα την ίδια εβδομάδα εκείνης της χρονιάς. Το ${cur} είναι πολύ πάνω από το ${cur - 1}, και ακόμη κάτω από τον μέσο όρο ${rows.length} ετών των ${fmt(stats.mean)} ${u}.`,
          src: `Για κάθε χρονιά κρατάμε τη μέτρηση που πέφτει πιο κοντά στην ίδια ημερομηνία. Μόνο τα κύρια φράγματα (${fmt(cap, 1)} ${u}). Πηγή: Τμήμα Αναπτύξεως Υδάτων.`,
          avg: `Μέσος όρος ${rows.length} ετών`, mln: u, other: 'Άλλα έτη' },
    ru: { title: `Запас в конце ${monthName(ds, 'ru')}, каждый год с ${rows[0].year}`,
          sub: `Каждый столбец — запас 18 основных дамб на ту же неделю соответствующего года. ${cur}-й заметно выше ${cur - 1}-го, но всё ещё ниже среднего за ${rows.length} лет: ${fmt(stats.mean)} ${u}.`,
          src: `Для каждого года взят замер, ближайший к той же дате. Только основные дамбы (${fmt(cap, 1)} ${u}). Источник: Департамент водного развития.`,
          avg: `Среднее за ${rows.length} лет`, mln: u, other: 'Прочие годы' },
  }, language);

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: CURRENT, label: String(cur) }, { color: PRIOR, label: String(cur - 1) }, { color: MUTED, label: t.other }]}>
        {ticks.map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 7} y={y(v) + 3.5} textAnchor="end">{v}</AxisText>
          </g>
        ))}
        <AxisText x={2} y={m.t - 10}>{t.mln}</AxisText>

        {rows.map((r, i) => {
          const hi = r.year === cur, lo = r.year === cur - 1;
          return (
            <g key={r.year}
              onMouseMove={e => show(e, `<b>${r.year}</b> · ${fmt(r.value, 2)} ${t.mln}<br>${fmt(r.value / cap * 100)}%`)}
              onMouseLeave={hide}>
              <rect x={x(i) + bw * 0.16} y={y(r.value)} width={bw * 0.68} height={y(0) - y(r.value)}
                rx={2} fill={hi ? CURRENT : lo ? PRIOR : MUTED} />
              <rect x={x(i)} y={m.t} width={bw} height={H - m.b - m.t} fill="transparent" />
              {(r.year % 5 === 0 || hi || lo || i === 0) && (
                <AxisText x={x(i) + bw / 2} y={H - m.b + 15} textAnchor="middle"
                  fill={hi ? CURRENT : lo ? PRIOR : undefined}>{`’${String(r.year).slice(2)}`}</AxisText>
              )}
            </g>
          );
        })}

        <line x1={m.l} x2={W - m.r} y1={y(stats.mean)} y2={y(stats.mean)}
          stroke={MUTED} strokeWidth={1.5} strokeDasharray="5 4" />
        <Note x={x(8)} y={y(stats.mean) - 7}>{`${t.avg} · ${fmt(stats.mean)}`}</Note>

        {/* current-year callout, parked clear of the bars */}
        <Note x={W - m.r} y={y(top * 0.62)} textAnchor="end" fill={CURRENT}>{String(cur)}</Note>
        <AxisText x={W - m.r} y={y(top * 0.62) + 14} textAnchor="end" fill={CURRENT}>
          {`${fmt(stats.current.value)} ${t.mln}`}
        </AxisText>
        <line x1={x(rows.length - 1) + bw / 2} x2={x(rows.length - 1) + bw / 2}
          y1={y(top * 0.62) + 22} y2={y(stats.current.value) - 4} stroke={CURRENT} strokeWidth={1.4} />
      </Frame>
    </>
  );
}

function monthName(ds: string | undefined, lang: Lang) {
  const { month } = referencePoint(ds);
  const names: Record<Lang, string[]> = {
    en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    el: ['Ιανουαρίου','Φεβρουαρίου','Μαρτίου','Απριλίου','Μαΐου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου'],
    ru: ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
  };
  return names[lang][month - 1];
}

/* ================= 2. Summer drawdown scatter ================= */

export function SummerDrawdownChart() {
  const { currentDataSetId: ds } = useDataContext();
  const { language } = useLanguage();
  const u = useTranslation(language)('volumeUnit');
  const { show, hide, node } = useTip();

  const { rows, stats } = useMemo(() => ({ rows: summerDrawdown(ds), stats: drawdownStats(ds) }), [ds]);
  if (!stats.current || !rows.length) return null;
  const cur = stats.current.year;

  const W = 1000, H = 420, m = { t: 30, r: 28, b: 54, l: 56 };
  const maxX = Math.ceil(Math.max(...rows.map(r => r.start)) / 50) * 50;
  const maxY = Math.ceil(Math.max(...rows.map(r => r.rate)) * 20) / 20;
  const x = (v: number) => m.l + (v / maxX) * (W - m.l - m.r);
  const y = (v: number) => (H - m.b) - (v / maxY) * (H - m.b - m.t);

  const yTicks: number[] = []; for (let v = 0; v <= maxY + 1e-9; v += 0.1) yTicks.push(+v.toFixed(2));
  const xTicks: number[] = []; for (let v = 0; v <= maxX; v += 50) xTicks.push(v);

  const t = L({
    en: { title: `Every year that entered summer with real water drained faster than this one`,
          sub: `Horizontal: what the dams held on 15 June. Vertical: how fast they fell between then and the ${stats.current.year} reading. Of the ${stats.stockedCount} years that began summer above ${stats.threshold} ${u}, ${cur} drained the slowest.`,
          src: `Drawdown measured 15 June to the same week each year. Years lower on the chart than ${cur} began summer near empty. Source: WDD.`,
          ax: `${u.toUpperCase()} LOST PER DAY`, ay: `STORAGE ON 15 JUNE (${u.toUpperCase()})`,
          thr: `${stats.stockedCount} years began summer above ${stats.threshold}`, other: 'Other years',
          slow: `${cur} — slowest of the ${stats.stockedCount}`, perDay: '/day', jun15: '15 Jun' },
    el: { title: `Κάθε χρονιά που μπήκε στο καλοκαίρι με πραγματικό απόθεμα άδειασε πιο γρήγορα από φέτος`,
          sub: `Οριζόντια: πόσο νερό είχαν τα φράγματα στις 15 Ιουνίου. Κάθετα: πόσο γρήγορα το έχασαν από τότε ως σήμερα. Από τις ${stats.stockedCount} χρονιές που ξεκίνησαν το καλοκαίρι πάνω από ${stats.threshold} ${u}, το ${cur} το ξόδεψε πιο αργά απ' όλες.`,
          src: `Η πτώση μετριέται από τις 15 Ιουνίου ως την ίδια εβδομάδα κάθε χρονιάς. Όσες κουκκίδες βρίσκονται πιο χαμηλά από το ${cur} είναι χρονιές που μπήκαν στο καλοκαίρι σχεδόν άδειες. Πηγή: Τμήμα Αναπτύξεως Υδάτων.`,
          ax: `${u.toUpperCase()} ΑΝΑ ΗΜΕΡΑ`, ay: `ΑΠΟΘΗΚΕΥΣΗ 15 ΙΟΥΝΙΟΥ (${u.toUpperCase()})`,
          thr: `${stats.stockedCount} χρονιές ξεκίνησαν πάνω από ${stats.threshold}`, other: 'Άλλες χρονιές',
          slow: `${cur} — το πιο αργό από τα ${stats.stockedCount}`, perDay: '/ημέρα', jun15: '15 Ιουν' },
    ru: { title: `Любой год, вошедший в лето с настоящим запасом, тратил воду быстрее нынешнего`,
          sub: `По горизонтали — сколько воды было в дамбах 15 июня. По вертикали — как быстро она уходила с тех пор и до сегодняшнего дня. Из ${stats.stockedCount} лет, начавших лето с запасом выше ${stats.threshold} ${u}, ${cur}-й расходовал воду медленнее всех.`,
          src: `Убыль считается с 15 июня по ту же неделю каждого года. Точки, лежащие ниже ${cur}-го, — это годы, которые вошли в лето почти пустыми. Источник: Департамент водного развития.`,
          ax: `${u.toUpperCase()} В СУТКИ`, ay: `ЗАПАС НА 15 ИЮНЯ (${u.toUpperCase()})`,
          thr: `${stats.stockedCount} лет начали лето выше ${stats.threshold}`, other: 'Другие годы',
          slow: `${cur} — медленнее всех`, perDay: ' в сутки', jun15: '15 июня' },
  }, language);

  const cx = x(stats.current.start), cy = y(stats.current.rate);

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: CURRENT, label: String(cur) }, { color: PRIOR, label: String(cur - 1) }, { color: MUTED, label: t.other }]}>
        {yTicks.map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 7} y={y(v) + 3.5} textAnchor="end">{v.toFixed(2)}</AxisText>
          </g>
        ))}
        {xTicks.map(v => <AxisText key={v} x={x(v)} y={H - m.b + 17} textAnchor="middle">{v}</AxisText>)}
        <AxisText x={2} y={m.t - 12}>{t.ax}</AxisText>
        <AxisText x={(W + m.l - m.r) / 2} y={H - 13} textAnchor="middle">{t.ay}</AxisText>

        <line x1={x(stats.threshold)} x2={x(stats.threshold)} y1={m.t} y2={H - m.b}
          stroke={MUTED} strokeWidth={1} strokeDasharray="3 4" />
        <AxisText x={x(stats.threshold) + 7} y={m.t + 11}>{t.thr}</AxisText>

        {rows.map(r => {
          const hi = r.year === cur, lo = r.year === cur - 1;
          return (
            <circle key={r.year} cx={x(r.start)} cy={y(r.rate)} r={hi ? 8 : lo ? 6.5 : 5}
              fill={hi ? CURRENT : lo ? PRIOR : MUTED}
              className="stroke-current text-white dark:text-gray-900" strokeWidth={1.8}
              onMouseMove={e => show(e, `<b>${r.year}</b><br>${t.jun15}: ${fmt(r.start)} ${u}<br>${fmt(r.rate, 3)} ${u}${t.perDay}`)}
              onMouseLeave={hide} />
          );
        })}

        <line x1={cx + 12} y1={cy - 4} x2={cx + 86} y2={cy - 38} stroke={CURRENT} strokeWidth={1.4} />
        <Note x={cx + 92} y={cy - 41} fill={CURRENT}>{t.slow}</Note>
        <AxisText x={cx + 92} y={cy - 27}>{`${fmt(stats.current.start)} → ${fmt(stats.current.rate, 3)}${t.perDay}`}</AxisText>
      </Frame>
    </>
  );
}

/* ================= 3. Peak month ================= */

export function PeakMonthChart() {
  const { currentDataSetId: ds } = useDataContext();
  const { language } = useLanguage();
  const u = useTranslation(language)('volumeUnit');
  const { show, hide, node } = useTip();

  const rows = useMemo(() => peakMonths(ds), [ds]);
  if (!rows.length) return null;
  const cur = referencePoint(ds).year;

  const MONTHS = [1, 2, 3, 4, 5, 6];
  const byMonth = MONTHS.map(mn => rows.filter(r => r.month === mn).sort((a, b) => a.year - b.year));
  const tallest = Math.max(...byMonth.map(b => b.length));
  const juneYears = byMonth[5].map(r => r.year);
  const beforeJune = rows.length - byMonth[5].length;

  const R = 6, GAP = 3, lane = R * 2 + GAP;
  const W = 1000, m = { t: 74, r: 30, b: 52, l: 30 };
  const H = m.t + tallest * lane + m.b;
  const base = H - m.b;
  const colW = (W - m.l - m.r) / MONTHS.length;

  const MN: Record<Lang, string[]> = {
    en: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    el: ['ΙΑΝ', 'ΦΕΒ', 'ΜΑΡ', 'ΑΠΡ', 'ΜΑΪ', 'ΙΟΥΝ'],
    ru: ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН'],
  };
  const months = L(MN, language);

  const t = L({
    en: { title: 'The dams were still filling in June',
          sub: `One dot per year, stacked in the month its reserve reached the seasonal high. ${beforeJune} of the ${rows.length} refill years had peaked by the end of May. Only ${juneYears.length} were still filling in June — ${juneYears.join(' and ')}.`,
          src: `Binned by month because that is the finest resolution the record supports: readings before 2014 were taken twice a month, on the 1st and the 15th, so an exact peak date does not exist for most of these years. Years in which the dams never refilled above their 1 January level are excluded. Source: WDD.`,
          unit: 'ONE DOT = ONE YEAR', only: `Only ${juneYears.join(' and ')}`, still: 'were still filling in June',
          bulk: `${beforeJune} of ${rows.length} years had peaked`, bulk2: 'by the end of May',
          yr: (n: number) => `${n} ${n === 1 ? 'year' : 'years'}`, peaked: 'peaked in' },
    el: { title: 'Τα φράγματα γέμιζαν ακόμη τον Ιούνιο',
          sub: `Μία κουκκίδα ανά έτος, στοιβαγμένη στον μήνα που το απόθεμα έφτασε στο εποχιακό ανώτατο. ${beforeJune} από τα ${rows.length} έτη επαναπλήρωσης είχαν κορυφωθεί ως το τέλος Μαΐου. Μόνο ${juneYears.length} γέμιζαν ακόμη τον Ιούνιο — ${juneYears.join(' και ')}.`,
          src: `Η ομαδοποίηση γίνεται ανά μήνα επειδή πιο αναλυτικά δεν το επιτρέπει το αρχείο: πριν από το 2014 οι μετρήσεις γίνονταν δύο φορές τον μήνα, την 1η και τη 15η. Οι χρονιές που δεν ξαναγέμισαν ποτέ εξαιρούνται. Πηγή: Τμήμα Αναπτύξεως Υδάτων.`,
          unit: 'ΜΙΑ ΚΟΥΚΚΙΔΑ = ΕΝΑ ΕΤΟΣ', only: `Μόνο ${juneYears.join(' και ')}`, still: 'γέμιζαν ακόμη τον Ιούνιο',
          bulk: `${beforeJune} από ${rows.length} έτη κορυφώθηκαν`, bulk2: 'ως το τέλος Μαΐου',
          yr: (n: number) => `${n} ${n === 1 ? 'έτος' : 'έτη'}`, peaked: 'κορυφώθηκε' },
    ru: { title: 'В июне дамбы всё ещё наполнялись',
          sub: `Одна точка — один год; колонка показывает месяц, в котором запас достиг сезонного максимума. Из ${rows.length} лет, когда дамбы наполнялись, ${beforeJune} прошли пик до конца мая. В июне воду набирали лишь ${juneYears.length}: ${juneYears.join(' и ')}.`,
          src: `Группировка по месяцам: точнее архив не позволяет — до 2014 года замеры делали дважды в месяц, 1-го и 15-го. Годы, когда дамбы так и не наполнились, исключены. Источник: Департамент водного развития.`,
          unit: 'ОДНА ТОЧКА = ОДИН ГОД', only: `Только ${juneYears.join(' и ')}`, still: 'наполнялись в июне',
          bulk: `${beforeJune} из ${rows.length} лет прошли пик`, bulk2: 'до конца мая',
          yr: (n: number) => `${n} ${n === 1 ? 'год' : 'лет'}`, peaked: 'пик' },
  }, language);

  const junX = m.l + 5 * colW + colW / 2;

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}>
        <AxisText x={2} y={m.t - 26}>{t.unit}</AxisText>
        {MONTHS.map((mn, i) => {
          const cx = m.l + i * colW + colW / 2;
          const isJune = i === 5;
          return (
            <g key={mn}>
              <Grid x1={m.l + i * colW} x2={m.l + i * colW} y1={m.t - 16} y2={base} />
              <AxisText x={cx} y={base + 18} textAnchor="middle" fill={isJune ? CURRENT : undefined}>{months[i]}</AxisText>
              <AxisText x={cx} y={base + 32} textAnchor="middle" fill={isJune ? CURRENT : undefined}>{t.yr(byMonth[i].length)}</AxisText>
              {byMonth[i].map((r, k) => {
                const hi = r.year === cur;
                return (
                  <circle key={r.year} cx={cx} cy={base - R - 4 - k * lane} r={hi ? 7.4 : R}
                    fill={hi ? CURRENT : MUTED}
                    className="stroke-current text-white dark:text-gray-900" strokeWidth={1.8}
                    onMouseMove={e => show(e, `<b>${r.year}</b> — ${t.peaked} ${months[i]}`)}
                    onMouseLeave={hide} />
                );
              })}
            </g>
          );
        })}
        <line x1={m.l} x2={W - m.r} y1={base} y2={base} className="stroke-current text-gray-300 dark:text-gray-600" strokeWidth={1} />

        <Note x={junX} y={m.t - 48} textAnchor="middle" fill={CURRENT}>{t.only}</Note>
        <AxisText x={junX} y={m.t - 34} textAnchor="middle">{t.still}</AxisText>
        <line x1={junX} x2={junX} y1={m.t - 28} y2={base - byMonth[5].length * lane - 10} stroke={CURRENT} strokeWidth={1.4} />

        <Note x={m.l + 3.5 * colW} y={m.t - 48} textAnchor="middle">{t.bulk}</Note>
        <AxisText x={m.l + 3.5 * colW} y={m.t - 34} textAnchor="middle">{t.bulk2}</AxisText>
      </Frame>
    </>
  );
}

/* ================= 4. Summer inflow ================= */

export function SummerInflowChart() {
  const { currentDataSetId: ds } = useDataContext();
  const { language } = useLanguage();
  const u = useTranslation(language)('volumeUnit');
  const { show, hide, node } = useTip();

  const rows = useMemo(() => summerInflow(ds), [ds]);
  if (!rows.length) return null;
  const latest = rows[rows.length - 1];
  const ranked = [...rows].sort((a, b) => b.value - a.value);
  const rank = ranked.findIndex(r => r.season === latest.season) + 1;

  const W = 1000, H = 250, m = { t: 26, r: 18, b: 40, l: 42 };
  const top = Math.ceil(Math.max(...rows.map(r => r.value)));
  const bw = (W - m.l - m.r) / rows.length;
  const y = (v: number) => (H - m.b) - (v / top) * (H - m.b - m.t);
  const ticks: number[] = []; for (let v = 0; v <= top; v += 2) ticks.push(v);

  const ord = L({ en: ['', 'wettest', '2nd-wettest', '3rd-wettest'], el: ['', 'πιο υγρό', '2ο πιο υγρό', '3ο πιο υγρό'], ru: ['', 'самое влажное', '2-е по влажности', '3-е по влажности'] }, language);
  const ordinal = ord[rank] ?? `#${rank}`;

  const t = L({
    en: { title: `The ${ordinal} summer in ${rows.length} years`,
          sub: `Water reaching the dams across June, July and August — the three months when, in most years, effectively none does.`,
          src: `The ${latest.season} figure runs to the latest bulletin and can only rise — September is still to come. Source: WDD monthly inflow series.`, mln: 'MLN. M³' },
    el: { title: `Το ${ordinal} καλοκαίρι σε ${rows.length} χρόνια`,
          sub: `Νερό που έφτασε στα φράγματα σε Ιούνιο, Ιούλιο και Αύγουστο — τους τρεις μήνες που, τις περισσότερες χρονιές, δεν φτάνει ουσιαστικά τίποτα.`,
          src: `Το νούμερο για το ${latest.season} φτάνει ως το τελευταίο δελτίο και μόνο να ανέβει μπορεί — ο Σεπτέμβριος δεν έχει καν αρχίσει. Πηγή: Τμήμα Αναπτύξεως Υδάτων.`, mln: u },
    ru: { title: `${ordinal.charAt(0).toUpperCase() + ordinal.slice(1)} лето за ${rows.length} лет`,
          sub: `Вода, поступившая в дамбы за июнь, июль и август — три месяца, когда в большинстве лет не поступает практически ничего.`,
          src: `Показатель за ${latest.season} доведён до последнего бюллетеня и может только вырасти — сентябрь ещё впереди. Источник: Департамент водного развития.`, mln: u },
  }, language);

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H} minWidth={560}>
        {ticks.map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 7} y={y(v) + 3.5} textAnchor="end">{v}</AxisText>
          </g>
        ))}
        <AxisText x={2} y={m.t - 10}>{t.mln}</AxisText>
        {rows.map((r, i) => {
          const hi = r.season === latest.season;
          const bx = m.l + i * bw + bw * 0.18;
          return (
            <g key={r.season}
              onMouseMove={e => show(e, `<b>${r.season}</b> · ${fmt(r.value, 3)} ${t.mln}`)} onMouseLeave={hide}>
              <rect x={bx} y={y(r.value)} width={bw * 0.64} height={y(0) - y(r.value)} rx={2} fill={hi ? CURRENT : MUTED} />
              <rect x={m.l + i * bw} y={m.t} width={bw} height={H - m.b - m.t} fill="transparent" />
              <AxisText x={bx + bw * 0.32} y={H - m.b + 15} textAnchor="middle" fill={hi ? CURRENT : undefined}>{r.season}</AxisText>
              {r.value > top * 0.22 && (
                <Note x={bx + bw * 0.32} y={y(r.value) - 7} textAnchor="middle" fill={hi ? CURRENT : undefined}>{fmt(r.value)}</Note>
              )}
            </g>
          );
        })}
      </Frame>
    </>
  );
}

/* ================= 5. Dam fullness vs capacity ================= */

export function DamFullnessChart() {
  const { currentDataSetId: ds } = useDataContext();
  const { language } = useLanguage();
  const u = useTranslation(language)('volumeUnit');
  const { show, hide, node } = useTip();

  const rows = useMemo(() => damsByCapacity(ds), [ds]);
  if (!rows.length) return null;

  const twoBiggest = rows.slice(0, 2);
  const totalStored = rows.reduce((s, r) => s + r.amount, 0);
  const bigShare = (twoBiggest.reduce((s, r) => s + r.amount, 0) / totalStored) * 100;
  const full = rows.filter(r => r.percentage >= 80);
  const fullStored = full.reduce((s, r) => s + r.amount, 0);

  const W = 1000, rowH = 17.5, top = 52;
  const H = top + rows.length * rowH + 40;
  const NAME_R = 150, BAR_L = 162, BAR_R = 660, CAP_R = 780, ANN_L = 806;
  const x = (v: number) => BAR_L + (v / 100) * (BAR_R - BAR_L);

  const t = L({
    en: { title: 'The fullest dams are the smallest ones',
          sub: `All ${rows.length} reservoirs, largest to smallest. Read down and the bars get longer: every dam above 80% sits in the bottom half. ${twoBiggest.map(r => r.name).join(' and ')} — between them ${Math.round(bigShare)}% of everything stored — are the short bars at the top.`,
          src: `Capacity in ${u}. Includes the recharge dams, which sit outside the headline total. Source: WDD.`,
          c1: 'LARGEST FIRST', c2: 'HOW FULL', c3: 'CAPACITY', thr: '80% full',
          a1: `${Math.round(bigShare)}% of all the`, a2: 'water Cyprus holds', a3: '— both under 40%',
          b1: 'Every dam above', b2: '80% is down here', b3: `${full.length} of them, holding`, b4: `~${fmt(fullStored)} ${u} in all`,
          ly: 'a year ago' },
    el: { title: 'Τα πιο γεμάτα φράγματα είναι τα μικρότερα',
          sub: `Και τα ${rows.length} φράγματα, από το μεγαλύτερο στο μικρότερο. Όσο κατεβαίνεις τη λίστα, τόσο μεγαλώνουν οι μπάρες: όλα τα φράγματα πάνω από 80% βρίσκονται στο κάτω μισό. Ο ${twoBiggest.map(r => r.name).join(' και ο ')} κρατούν μαζί το ${Math.round(bigShare)}% του αποθέματος — κι είναι οι δύο κοντές μπάρες στην κορυφή.`,
          src: `Χωρητικότητα σε ${u}. Περιλαμβάνονται και τα φράγματα εμπλουτισμού, που δεν μπαίνουν στο βασικό σύνολο. Πηγή: Τμήμα Αναπτύξεως Υδάτων.`,
          c1: 'ΜΕΓΑΛΥΤΕΡΑ ΠΡΩΤΑ', c2: 'ΠΛΗΡΟΤΗΤΑ', c3: 'ΧΩΡΗΤ.', thr: '80% γεμάτο',
          a1: `${Math.round(bigShare)}% όλου του`, a2: 'νερού της Κύπρου', a3: '— και τα δύο κάτω από 40%',
          b1: 'Κάθε φράγμα πάνω', b2: 'από 80% είναι εδώ κάτω', b3: `${full.length} από αυτά, με`, b4: `~${fmt(fullStored)} ${u} συνολικά`,
          ly: 'πριν έναν χρόνο' },
    ru: { title: 'Самые полные дамбы — самые маленькие',
          sub: `Все ${rows.length} водохранилищ, от крупного к мелкому. Чем ниже по списку, тем длиннее полосы: все дамбы выше 80% оказались в нижней половине. ${twoBiggest.map(r => r.name).join(' и ')} держат вместе ${Math.round(bigShare)}% всего запаса — и это две короткие полосы наверху.`,
          src: `Ёмкость в ${u}. Включая подпитывающие дамбы, которые не входят в основной итог. Источник: Департамент водного развития.`,
          c1: 'СНАЧАЛА КРУПНЫЕ', c2: 'ЗАПОЛНЕНИЕ', c3: 'ЁМКОСТЬ', thr: '80% заполнения',
          a1: `${Math.round(bigShare)}% всей воды,`, a2: 'накопленной Кипром', a3: '— обе ниже 40%',
          b1: 'Все дамбы выше 80%', b2: 'находятся здесь', b3: `их шесть, а вместе`, b4: `держат ~${fmt(fullStored)} ${u}`,
          ly: 'год назад' },
  }, language);

  const iFullest = rows.findIndex(r => r.percentage === Math.max(...rows.map(q => q.percentage)));
  const ky = top + iFullest * rowH + rowH / 2;
  const b0 = top + 2, b1 = top + 2 * rowH - 2;

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H} minWidth={760}>
        <AxisText x={NAME_R} y={top - 22} textAnchor="end">{t.c1}</AxisText>
        <AxisText x={BAR_L} y={top - 22}>{t.c2}</AxisText>
        <AxisText x={CAP_R} y={top - 22} textAnchor="end">{t.c3}</AxisText>

        {[0, 20, 40, 60, 80, 100].map(v => (
          <g key={v}>
            <Grid x1={x(v)} x2={x(v)} y1={top - 10} y2={top + rows.length * rowH + 4} />
            <AxisText x={x(v)} y={top + rows.length * rowH + 20} textAnchor="middle">{v}%</AxisText>
          </g>
        ))}
        <line x1={x(80)} x2={x(80)} y1={top - 10} y2={top + rows.length * rowH + 4}
          stroke={MUTED} strokeWidth={1.3} strokeDasharray="4 4" />
        <AxisText x={x(80) + 6} y={top - 14}>{t.thr}</AxisText>

        {rows.map((r, i) => {
          const cy = top + i * rowH;
          const big = i < 2;
          return (
            <g key={r.name}
              onMouseMove={e => show(e, `<b>${r.name}</b><br>${fmt(r.percentage)}% · ${fmt(r.amount, 2)} / ${r.capacity}<br>${t.ly}: ${fmt(r.lastYearPercentage)}%`)}
              onMouseLeave={hide}>
              <rect x={BAR_L} y={cy + 3} width={Math.max(0, x(r.percentage) - BAR_L)} height={rowH - 6.5}
                rx={2} fill={big ? CURRENT : MUTED} />
              <text x={NAME_R} y={cy + rowH / 2 + 3} textAnchor="end"
                className="fill-current text-[10.5px] text-gray-700 dark:text-gray-300"
                style={big ? { fill: CURRENT, fontWeight: 600 } : undefined}>{r.name}</text>
              <text x={x(r.percentage) + 7} y={cy + rowH / 2 + 3}
                className="fill-current text-[10.5px] tabular-nums text-gray-600 dark:text-gray-400"
                style={big ? { fill: CURRENT, fontWeight: 600 } : undefined}>{fmt(r.percentage)}%</text>
              <AxisText x={CAP_R} y={cy + rowH / 2 + 3} textAnchor="end">{r.capacity}</AxisText>
              <rect x={0} y={cy} width={W} height={rowH} fill="transparent" />
            </g>
          );
        })}

        <path d={`M ${ANN_L - 11} ${b0} L ${ANN_L - 4} ${b0} L ${ANN_L - 4} ${b1} L ${ANN_L - 11} ${b1}`}
          stroke={CURRENT} strokeWidth={1.5} fill="none" />
        <Note x={ANN_L + 4} y={b0 + 11} fill={CURRENT}>{t.a1}</Note>
        <Note x={ANN_L + 4} y={b0 + 24} fill={CURRENT}>{t.a2}</Note>
        <AxisText x={ANN_L + 4} y={b0 + 38}>{t.a3}</AxisText>

        <line x1={ANN_L - 11} x2={ANN_L - 4} y1={ky} y2={ky} stroke={MUTED} strokeWidth={1.3} />
        <Note x={ANN_L + 4} y={ky - 15}>{t.b1}</Note>
        <Note x={ANN_L + 4} y={ky - 2}>{t.b2}</Note>
        <AxisText x={ANN_L + 4} y={ky + 12}>{t.b3}</AxisText>
        <AxisText x={ANN_L + 4} y={ky + 24}>{t.b4}</AxisText>
      </Frame>
    </>
  );
}

/* ================= 6. Two-year trace + autumn projection ================= */

export function TwoYearTraceChart() {
  const { currentDataSetId: ds } = useDataContext();
  const { language } = useLanguage();
  const u = useTranslation(language)('volumeUnit');
  const { show, hide, node } = useTip();

  const ref = referencePoint(ds);
  const { cur, prev, proj, peak, nowPoint } = useMemo(() => {
    const cur = yearTrace(ref.year);
    const prev = yearTrace(ref.year - 1);
    const proj = autumnProjection(ds);
    const peak = cur.length ? cur.reduce((a, b) => (b.value > a.value ? b : a)) : null;
    return { cur, prev, proj, peak, nowPoint: cur.length ? cur[cur.length - 1] : null };
  }, [ds, ref.year]);

  if (!cur.length || !prev.length || !nowPoint) return null;

  const W = 1000, H = 400, m = { t: 28, r: 118, b: 50, l: 48 };
  const top = Math.ceil(Math.max(...cur.concat(prev).map(p => p.value)) / 25) * 25 + 15;
  const x = (d: number) => m.l + (d / 366) * (W - m.l - m.r);
  const y = (v: number) => (H - m.b) - (v / top) * (H - m.b - m.t);
  const path = (pts: { doy: number; value: number }[]) =>
    pts.map((p, i) => `${i ? 'L' : 'M'} ${x(p.doy).toFixed(1)} ${y(p.value).toFixed(1)}`).join(' ');

  const ticks: number[] = []; for (let v = 0; v <= top; v += 25) ticks.push(v);
  const MN: Record<Lang, string[]> = {
    en: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    el: ['ΙΑΝ','ΦΕΒ','ΜΑΡ','ΑΠΡ','ΜΑΪ','ΙΟΥΝ','ΙΟΥΛ','ΑΥΓ','ΣΕΠ','ΟΚΤ','ΝΟΕ','ΔΕΚ'],
    ru: ['ЯНВ','ФЕВ','МАР','АПР','МАЙ','ИЮН','ИЮЛ','АВГ','СЕН','ОКТ','НОЯ','ДЕК'],
  };
  const months = L(MN, language);
  const mStarts = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

  const prevFloor = prev.reduce((a, b) => (b.value < a.value ? b : a));
  const ratio = proj && proj.priorYearFloor ? proj.floorMedian / proj.priorYearFloor : null;

  const t = L({
    en: { title: ratio ? `About ${ratio.toFixed(1)}× the buffer, going into the winter that decides everything` : 'The two years side by side',
          sub: `Both years on the same calendar. ${ref.year - 1} fell all year to a December floor of ${fmt(prevFloor.value)} ${u}. ${ref.year} climbed until June and has barely moved since — the shaded band is where ${proj?.sampleYears ?? 0} years of autumn precedent put its floor.`,
          src: `Projection is the median and interquartile range of the 1 September-to-annual-minimum drop over the last ${proj?.sampleYears ?? 0} years, applied to the latest reading. A precedent range, not a hydrological model. Source: WDD.`,
          mln: 'MLN. M³', peak: 'peak', proj: 'projected', lateNov: 'late Nov', floor: `${ref.year - 1} floor`, now: 'latest', actual: 'actual', band: `${ref.year} projected range` },
    el: { title: ratio ? `Περίπου ${ratio.toFixed(1)}× το περιθώριο, μπαίνοντας στον χειμώνα που τα κρίνει όλα` : 'Οι δύο χρονιές δίπλα-δίπλα',
          sub: `Και οι δύο χρονιές στο ίδιο ημερολόγιο. Το ${ref.year - 1} έπεφτε όλο τον χρόνο κι έφτασε τον Δεκέμβριο στα ${fmt(prevFloor.value)} ${u}. Το ${ref.year} ανέβαινε ως τον Ιούνιο και από τότε μετά βίας κουνήθηκε· η σκιασμένη ζώνη δείχνει πού τοποθετούν το χαμηλό του οι ${proj?.sampleYears ?? 0} προηγούμενες χρονιές.`,
          src: `Η ζώνη προκύπτει από την πτώση που σημειώθηκε από την 1η Σεπτεμβρίου ως το ετήσιο ελάχιστο τις τελευταίες ${proj?.sampleYears ?? 0} χρονιές: παίρνουμε τη διάμεσο και το ενδοτεταρτημοριακό εύρος και τα εφαρμόζουμε στην τελευταία μέτρηση. Είναι εύρος βασισμένο σε προηγούμενες χρονιές, όχι υδρολογικό μοντέλο. Πηγή: Τμήμα Αναπτύξεως Υδάτων.`,
          mln: u, peak: 'κορυφή', proj: 'προβλεπόμενο', lateNov: 'τέλη Νοε', floor: `χαμηλό ${ref.year - 1}`, now: 'τελευταίο', actual: 'πραγματικό', band: `εύρος πρόβλεψης ${ref.year}` },
    ru: { title: ratio ? `Примерно ${ratio.toFixed(1)}× запаса прочности на входе в решающую зиму` : 'Два года рядом',
          sub: `Оба года на одном календаре. ${ref.year - 1}-й падал весь год и опустился к декабрю до ${fmt(prevFloor.value)} ${u}. ${ref.year}-й рос до июня и с тех пор почти не двигался, а затенённая полоса показывает, куда его минимум помещают ${proj?.sampleYears ?? 0} прежних лет.`,
          src: `Полоса построена так: берём падение с 1 сентября до годового минимума за последние ${proj?.sampleYears ?? 0} лет, считаем по нему медиану и межквартильный размах и прикладываем к последнему замеру. Это диапазон по прежним годам, а не гидрологическая модель. Источник: Департамент водного развития.`,
          mln: u, peak: 'пик', proj: 'прогноз', lateNov: 'конец нояб.', floor: `минимум ${ref.year - 1}`, now: 'последний', actual: 'факт', band: `диапазон прогноза ${ref.year}` },
  }, language);

  const PROJ_END = 330;

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[
          { color: CURRENT, label: `${ref.year} ${t.actual}` },
          { color: PRIOR, label: `${ref.year - 1} ${t.actual}` },
          { color: 'rgba(47,127,216,.28)', label: t.band },
        ]}>
        {ticks.map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 7} y={y(v) + 3.5} textAnchor="end">{v}</AxisText>
          </g>
        ))}
        <AxisText x={2} y={m.t - 10}>{t.mln}</AxisText>
        {mStarts.map((d, i) => (
          <g key={d}>
            <Grid x1={x(d)} x2={x(d)} y1={m.t} y2={H - m.b} opacity={0.55} />
            <AxisText x={x(d) + 4} y={H - m.b + 16}>{months[i]}</AxisText>
          </g>
        ))}

        {proj && (
          <>
            <path d={`M ${x(nowPoint.doy)} ${y(nowPoint.value)} L ${x(PROJ_END)} ${y(proj.floorHigh)} L ${x(PROJ_END)} ${y(proj.floorLow)} Z`}
              fill={CURRENT} fillOpacity={0.2} />
            <path d={`M ${x(nowPoint.doy)} ${y(nowPoint.value)} L ${x(PROJ_END)} ${y(proj.floorMedian)}`}
              stroke={CURRENT} strokeWidth={1.8} strokeDasharray="6 5" fill="none" opacity={0.9} />
            <Note x={W - m.r + 10} y={y(proj.floorMedian) - 4} fill={CURRENT}>{`~${Math.round(proj.floorMedian)} ${t.proj}`}</Note>
            <AxisText x={W - m.r + 10} y={y(proj.floorMedian) + 10}>{t.lateNov}</AxisText>
          </>
        )}

        <path d={path(prev)} fill="none" stroke={PRIOR} strokeWidth={2.2} strokeLinejoin="round" strokeLinecap="round" />
        <path d={path(cur)} fill="none" stroke={CURRENT} strokeWidth={2.6} strokeLinejoin="round" strokeLinecap="round" />

        {peak && (
          <>
            <circle cx={x(peak.doy)} cy={y(peak.value)} r={4.5} fill={CURRENT} className="stroke-current text-white dark:text-gray-900" strokeWidth={1.8} />
            <Note x={x(peak.doy)} y={y(peak.value) - 12} textAnchor="middle" fill={CURRENT}>{`${t.peak} · ${fmt(peak.value)}`}</Note>
          </>
        )}
        <circle cx={x(nowPoint.doy)} cy={y(nowPoint.value)} r={5} fill={CURRENT} className="stroke-current text-white dark:text-gray-900" strokeWidth={1.8} />
        <circle cx={x(prevFloor.doy)} cy={y(prevFloor.value)} r={4.5} fill={PRIOR} className="stroke-current text-white dark:text-gray-900" strokeWidth={1.8} />
        <Note x={W - m.r + 10} y={y(prevFloor.value) + 4} fill={PRIOR}>{fmt(prevFloor.value)}</Note>
        <AxisText x={W - m.r + 10} y={y(prevFloor.value) + 18}>{t.floor}</AxisText>

        <line x1={x(nowPoint.doy)} x2={x(nowPoint.doy)} y1={m.t} y2={H - m.b} stroke={MUTED} strokeWidth={1} strokeDasharray="3 4" />
        <AxisText x={x(nowPoint.doy) - 6} y={m.t + 11} textAnchor="end">{t.now}</AxisText>

        {cur.map(p => (
          <circle key={`c${p.doy}`} cx={x(p.doy)} cy={y(p.value)} r={7} fill="transparent"
            onMouseMove={e => show(e, `<b>${ref.year}</b> · ${p.date}<br>${fmt(p.value, 2)} ${t.mln}`)} onMouseLeave={hide} />
        ))}
        {prev.map(p => (
          <circle key={`p${p.doy}`} cx={x(p.doy)} cy={y(p.value)} r={7} fill="transparent"
            onMouseMove={e => show(e, `<b>${ref.year - 1}</b> · ${p.date}<br>${fmt(p.value, 2)} ${t.mln}`)} onMouseLeave={hide} />
        ))}
      </Frame>
    </>
  );
}
