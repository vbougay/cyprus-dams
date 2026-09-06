"use client";

/**
 * Charts for the El Niño article.
 *
 * Rainfall × ENSO comes from the static ENSO_RAIN table; dam refill is derived
 * from the historical storage series at render time (see ensoStats.ts).
 * Plain SVG, same editorial-figure approach as ArticleSummerCharts.
 */

import React, { useMemo, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { ENSO_RAIN } from '@/utils/ensoData';
import { rainStats, refillStats, phaseOf, Phase, STRONG_NINO } from '@/utils/ensoStats';

type Lang = 'en' | 'el' | 'ru';
const L = <T,>(m: { en: T } & Partial<Record<Lang, T>>, lang: string): T => m[lang as Lang] ?? m.en;

/* Phase hues: warm for El Niño, cool for La Niña, grey for neutral. */
const NINO = '#d94f2b';
const NINA = '#2f7fd8';
const NEUTRAL = '#9aa0a8';
const ACCENT = '#0f9d8a';
const phaseColor = (p: Phase) => (p === 'nino' ? NINO : p === 'nina' ? NINA : NEUTRAL);

const fmt = (v: number, d = 1) => v.toFixed(d);
const hy = (y: number) => `${y}-${String(y + 1).slice(2)}`;

/* ---------- shared frame (mirrors ArticleSummerCharts) ---------- */

interface FrameProps {
  title: string; subtitle: string; source: string; height: number;
  children: React.ReactNode; legend?: { color: string; label: string }[]; minWidth?: number;
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
        <div className="relative mt-3">
          <div className="overflow-x-auto [mask-image:linear-gradient(to_right,black_calc(100%-20px),transparent)] sm:[mask-image:none]">
            <svg viewBox={`0 0 1000 ${height}`} className="block h-auto w-full" style={{ minWidth }}
              role="img" aria-label={`${title}. ${subtitle}`}>
              {children}
            </svg>
          </div>
        </div>
        <p className="mt-1.5 text-[11px] text-gray-400 dark:text-gray-500 sm:hidden">← swipe to see the full chart →</p>
        <p className="mt-3 border-t border-gray-200 pt-2 text-[11px] leading-relaxed text-gray-500 dark:border-gray-700 dark:text-gray-500">{source}</p>
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

function useTip() {
  const [tip, setTip] = useState<{ x: number; y: number; html: string } | null>(null);
  const show = useCallback((e: React.MouseEvent, html: string) => setTip({ x: e.clientX, y: e.clientY, html }), []);
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

const PHASE_LABEL = {
  en: { nino: 'El Niño winter', nina: 'La Niña winter', neutral: 'Neutral winter' },
  el: { nino: 'Χειμώνας Ελ Νίνιο', nina: 'Χειμώνας Λα Νίνια', neutral: 'Ουδέτερος χειμώνας' },
  ru: { nino: 'Зима Эль-Ниньо', nina: 'Зима Ла-Нинья', neutral: 'Нейтральная зима' },
};

const PHASE_PLURAL = {
  el: { nino: 'Χειμώνες Ελ Νίνιο', nina: 'Χειμώνες Λα Νίνια', neutral: 'Ουδέτεροι χειμώνες' },
  ru: { nino: 'Зимы Эль-Ниньо', nina: 'Зимы Ла-Нинья', neutral: 'Нейтральные зимы' },
};

/* ================= 1. The 76-winter test: ONI vs rainfall scatter ================= */

export function EnsoScatterChart() {
  const { language } = useLanguage();
  const { show, hide, node } = useTip();
  const s = useMemo(() => rainStats(), []);
  const pl = L(PHASE_LABEL, language);

  const W = 1000, H = 420, m = { t: 30, r: 24, b: 46, l: 46 };
  const xMin = -2.5, xMax = 3;
  const yMin = 30, yMax = 170;
  const x = (v: number) => m.l + ((v - xMin) / (xMax - xMin)) * (W - m.l - m.r);
  const y = (v: number) => (H - m.b) - ((v - yMin) / (yMax - yMin)) * (H - m.b - m.t);

  const labelled = new Set([1972, 2015, 2023, 1997, 1982, 2018, 1968, 2025, 2011, 2007]);

  const t = L({
    en: {
      title: `Every winter since 1950, plotted against the El Niño index`,
      sub: `${s.rows.length} winters. Right is El Niño, left is La Niña, up is a wet year for Cyprus. If El Niño brought rain, the cloud would lean upward to the right. It does not: the fitted line is almost flat and the correlation is ${fmt(s.r, 2)}.`,
      src: `x: NOAA Oceanic Niño Index for Nov–Jan of each hydrological year (Oct–Sep). y: island area-average rainfall as % of the 1961–90 normal (503 mm), Cyprus Department of Meteorology; 2025–26 to end of August. Sources: NOAA CPC; DoM / data.gov.cy via kairika.info.`,
      fit: `Best-fit line · r = ${fmt(s.r, 2)}`, normal: 'normal (100%)', xl: 'ONI, °C', yl: '% of normal rain',
      nino: '← La Niña · El Niño →',
    },
    el: {
      title: `Κάθε χειμώνας από το 1950, απέναντι στον δείκτη Ελ Νίνιο`,
      sub: `${s.rows.length} χειμώνες. Δεξιά το Ελ Νίνιο, αριστερά η Λα Νίνια, πάνω μια βροχερή χρονιά για την Κύπρο. Αν το Ελ Νίνιο έφερνε βροχή, το νέφος θα έγερνε πάνω δεξιά. Δεν γέρνει: η ευθεία προσαρμογής είναι σχεδόν οριζόντια και η συσχέτιση ${fmt(s.r, 2)}.`,
      src: `x: Ωκεάνιος Δείκτης Νίνιο της NOAA για Νοέμβριο–Ιανουάριο κάθε υδρομετεωρολογικού έτους (Οκτ–Σεπ). y: παγκύπρια μέση βροχόπτωση ως % της κανονικής 1961–90 (503 mm), Τμήμα Μετεωρολογίας· 2025–26 ως τέλος Αυγούστου. Πηγές: NOAA CPC· Τμήμα Μετεωρολογίας / data.gov.cy μέσω kairika.info.`,
      fit: `Ευθεία προσαρμογής · r = ${fmt(s.r, 2)}`, normal: 'κανονική (100%)', xl: 'ONI, °C', yl: '% κανονικής βροχής',
      nino: '← Λα Νίνια · Ελ Νίνιο →',
    },
    ru: {
      title: `Каждая зима с 1950 года против индекса Эль-Ниньо`,
      sub: `${s.rows.length} зим. Справа Эль-Ниньо, слева Ла-Нинья, вверху дождливый год для Кипра. Если бы Эль-Ниньо приносил дождь, облако наклонялось бы вверх и вправо. Оно не наклоняется: линия приближения почти горизонтальна, корреляция ${fmt(s.r, 2)}.`,
      src: `x: Океанический индекс Ниньо NOAA за ноябрь–январь каждого гидрометеорологического года (окт–сен). y: общеостровные осадки в % от нормы 1961–90 (503 мм), Департамент метеорологии Кипра; 2025–26 по конец августа. Источники: NOAA CPC; ДМ / data.gov.cy через kairika.info.`,
      fit: `Линия приближения · r = ${fmt(s.r, 2)}`, normal: 'норма (100%)', xl: 'ONI, °C', yl: '% нормы осадков',
      nino: '← Ла-Нинья · Эль-Ниньо →',
    },
  }, language);

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: NINO, label: pl.nino }, { color: NINA, label: pl.nina }, { color: NEUTRAL, label: pl.neutral }]}>
        {[40, 60, 80, 100, 120, 140, 160].map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 7} y={y(v) + 3.5} textAnchor="end">{v}%</AxisText>
          </g>
        ))}
        {[-2, -1, 0, 1, 2, 3].map(v => (
          <g key={v}>
            <Grid x1={x(v)} x2={x(v)} y1={m.t} y2={H - m.b} />
            <AxisText x={x(v)} y={H - m.b + 15} textAnchor="middle">{v > 0 ? `+${v}` : v}</AxisText>
          </g>
        ))}
        <AxisText x={W - m.r} y={H - m.b + 32} textAnchor="end">{t.xl} · {t.nino}</AxisText>
        <AxisText x={2} y={m.t - 12}>{t.yl}</AxisText>

        {/* normal line and phase thresholds */}
        <line x1={m.l} x2={W - m.r} y1={y(100)} y2={y(100)} stroke={NEUTRAL} strokeWidth={1.5} strokeDasharray="5 4" />
        <Note x={m.l + 6} y={y(100) - 6}>{t.normal}</Note>
        <rect x={x(-0.5)} y={m.t} width={x(0.5) - x(-0.5)} height={H - m.b - m.t} fill={NEUTRAL} opacity={0.08} />

        {/* fit line */}
        <line x1={x(xMin)} x2={x(xMax)} y1={y(s.line.a + s.line.b * xMin)} y2={y(s.line.a + s.line.b * xMax)}
          stroke={ACCENT} strokeWidth={2.5} />
        <Note x={x(xMax) - 4} y={y(s.line.a + s.line.b * xMax) - 10} textAnchor="end" fill={ACCENT}>{t.fit}</Note>

        {s.rows.map(r => {
          const p = phaseOf(r.ndj);
          const lab = labelled.has(r.year);
          return (
            <g key={r.year}
              onMouseMove={e => show(e, `<b>${hy(r.year)}</b> · ONI ${r.ndj > 0 ? '+' : ''}${fmt(r.ndj, 2)}<br>${r.mm} mm · ${r.pct}% of normal`)}
              onMouseLeave={hide}>
              <circle cx={x(r.ndj)} cy={y(r.pct)} r={lab ? 6 : 4.5} fill={phaseColor(p)} opacity={lab ? 1 : 0.75}
                stroke={lab ? 'white' : 'none'} strokeWidth={1.2} />
              {lab && (
                <AxisText x={x(r.ndj) + (r.ndj > 2.2 ? -9 : 9)} y={y(r.pct) + 3.5}
                  textAnchor={r.ndj > 2.2 ? 'end' : 'start'} fill={phaseColor(p)}>{hy(r.year)}</AxisText>
              )}
            </g>
          );
        })}
      </Frame>
    </>
  );
}

/* ================= 2. The strong El Niños, one by one ================= */

export function StrongNinoChart() {
  const { language } = useLanguage();
  const { show, hide, node } = useTip();
  const s = useMemo(() => rainStats(), []);
  const rows = useMemo(() => [...s.strongNinos].sort((a, b) => b.ndj - a.ndj), [s]);

  const W = 1000, H = 60 + (rows.length + 1) * 38, m = { t: 30, r: 120, b: 34, l: 150 };
  const xMin = 30, xMax = 130;
  const x = (v: number) => m.l + ((v - xMin) / (xMax - xMin)) * (W - m.l - m.r);
  const rowH = 38;
  const y = (i: number) => m.t + i * rowH + rowH / 2;

  const t = L({
    en: {
      title: `The ${rows.length} strongest El Niño winters since 1950, and what Cyprus got`,
      sub: `Ordered by peak strength. Each bar runs from the 1961–90 normal (100%) to that winter's rainfall. ${rows.filter(r => r.pct < 100).length} of ${rows.length} were dry; together they averaged ${fmt(s.strongNinoMean, 0)}% of normal. The 2026–27 event is forecast to be stronger than any of them.`,
      src: `Strong = Nov–Jan ONI ≥ +${STRONG_NINO} °C. Rainfall: island area average, Cyprus DoM. 2026–27 forecast: NOAA CPC, 13 Aug 2026 (69% chance the Oct–Dec relative ONI exceeds +2.5 °C). Sources: NOAA CPC; DoM / data.gov.cy via kairika.info.`,
      normal: 'normal', oni: 'ONI', next: '2026-27', nextNote: 'forecast ≥ +2.5 · rain: ?', driest: 'driest year in 125',
    },
    el: {
      title: `Οι ${rows.length} ισχυρότεροι χειμώνες Ελ Νίνιο από το 1950, και τι πήρε η Κύπρος`,
      sub: `Κατά σειρά μέγιστης έντασης. Κάθε ράβδος ξεκινά από την κανονική 1961–90 (100%) και φτάνει στη βροχόπτωση εκείνου του χειμώνα. ${rows.filter(r => r.pct < 100).length} από τους ${rows.length} ήταν ξηροί· μαζί έδωσαν κατά μέσο όρο ${fmt(s.strongNinoMean, 0)}% της κανονικής. Το φαινόμενο του 2026–27 προβλέπεται ισχυρότερο από όλα.`,
      src: `Ισχυρό = ONI Νοε–Ιαν ≥ +${STRONG_NINO} °C. Βροχόπτωση: παγκύπριος μέσος όρος, Τμήμα Μετεωρολογίας. Πρόγνωση 2026–27: NOAA CPC, 13 Αυγ 2026 (69% πιθανότητα ο σχετικός ONI Οκτ–Δεκ να ξεπεράσει τους +2.5 °C). Πηγές: NOAA CPC· ΤΜ / data.gov.cy μέσω kairika.info.`,
      normal: 'κανονική', oni: 'ONI', next: '2026-27', nextNote: 'πρόγνωση ≥ +2.5 · βροχή: ?', driest: 'ξηρότερη χρονιά στις 125',
    },
    ru: {
      title: `${rows.length} сильнейших зим Эль-Ниньо с 1950 года и что получил Кипр`,
      sub: `По убыванию пиковой силы. Каждый столбец идёт от нормы 1961–90 (100%) до осадков той зимы. ${rows.filter(r => r.pct < 100).length} из ${rows.length} были сухими; в среднем они дали ${fmt(s.strongNinoMean, 0)}% нормы. Событие 2026–27 прогнозируется сильнее любого из них.`,
      src: `Сильное = ONI ноя–янв ≥ +${STRONG_NINO} °C. Осадки: общеостровное среднее, Департамент метеорологии Кипра. Прогноз 2026–27: NOAA CPC, 13 авг 2026 (69% вероятности, что относительный ONI окт–дек превысит +2.5 °C). Источники: NOAA CPC; ДМ / data.gov.cy через kairika.info.`,
      normal: 'норма', oni: 'ONI', next: '2026-27', nextNote: 'прогноз ≥ +2.5 · осадки: ?', driest: 'самый сухой год из 125',
    },
  }, language);

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: NINO, label: L({ en: 'Below normal', el: 'Κάτω από την κανονική', ru: 'Ниже нормы' }, language) }, { color: ACCENT, label: L({ en: 'Above normal', el: 'Πάνω από την κανονική', ru: 'Выше нормы' }, language) }]}>
        {[40, 60, 80, 100, 120].map(v => (
          <g key={v}>
            <Grid x1={x(v)} x2={x(v)} y1={m.t - 6} y2={H - m.b} />
            <AxisText x={x(v)} y={H - m.b + 15} textAnchor="middle">{v}%</AxisText>
          </g>
        ))}
        <line x1={x(100)} x2={x(100)} y1={m.t - 6} y2={H - m.b} stroke={NEUTRAL} strokeWidth={1.5} strokeDasharray="5 4" />
        <Note x={x(100)} y={m.t - 12} textAnchor="middle">{t.normal}</Note>

        {rows.map((r, i) => {
          const wet = r.pct >= 100;
          const c = wet ? ACCENT : NINO;
          return (
            <g key={r.year} onMouseMove={e => show(e, `<b>${hy(r.year)}</b> · ONI +${fmt(r.ndj, 2)}<br>${r.mm} mm · ${r.pct}% of normal`)} onMouseLeave={hide}>
              <Note x={m.l - 12} y={y(i) + 4} textAnchor="end">{hy(r.year)}</Note>
              <AxisText x={m.l - 12} y={y(i) + 17} textAnchor="end" fill={NINO}>{`${t.oni} +${fmt(r.ndj, 2)}`}</AxisText>
              <rect x={Math.min(x(100), x(r.pct))} y={y(i) - 10} width={Math.abs(x(r.pct) - x(100))} height={20} rx={3} fill={c} opacity={0.85} />
              <Note x={wet ? x(r.pct) + 8 : x(r.pct) - 8} y={y(i) + 4} textAnchor={wet ? 'start' : 'end'} fill={c}>{`${r.pct}%`}</Note>
              {r.year === s.driest.year && (
                <AxisText x={x(100) + 8} y={y(i) + 4} fill={NINO}>{t.driest}</AxisText>
              )}
            </g>
          );
        })}

        {/* the coming event: a ghost row */}
        {(() => {
          const i = rows.length;
          return (
            <g>
              <Note x={m.l - 12} y={y(i) + 4} textAnchor="end" fill={NINO}>{t.next}</Note>
              <AxisText x={m.l - 12} y={y(i) + 17} textAnchor="end" fill={NINO}>{`${t.oni} ≥ +2.5`}</AxisText>
              <rect x={x(60)} y={y(i) - 10} width={x(140) - x(60)} height={20} rx={3} fill="none" stroke={NINO} strokeWidth={1.5} strokeDasharray="4 3" />
              <Note x={x(100)} y={y(i) + 4} textAnchor="middle" fill={NINO}>?</Note>
              <AxisText x={x(120) + 12} y={y(i) + 4} fill={NINO}>{t.nextNote}</AxisText>
            </g>
          );
        })()}
      </Frame>
    </>
  );
}

/* ================= 3. Two timelines that refuse to line up ================= */

export function EnsoTimelineChart() {
  const { language } = useLanguage();
  const { show, hide, node } = useTip();
  const rows = ENSO_RAIN;

  const W = 1000, H = 400, m = { t: 26, r: 16, b: 34, l: 46 };
  const gap = 26;
  const topH = 140, botH = H - m.t - m.b - topH - gap;
  const y0Top = m.t, y0Bot = m.t + topH + gap;
  const n = rows.length + 1; // leave a slot for 2026-27
  const bw = (W - m.l - m.r) / n;
  const x = (i: number) => m.l + i * bw;
  const oniMax = 3;
  const yOni = (v: number) => y0Top + topH / 2 - (v / oniMax) * (topH / 2);
  const anomMax = 60;
  const yAn = (v: number) => y0Bot + botH / 2 - (v / anomMax) * (botH / 2);

  const t = L({
    en: {
      title: 'Seventy-six winters, two signals side by side',
      sub: 'Top: the Pacific, as the Nov–Jan ONI (red above +0.5 is El Niño, blue below −0.5 is La Niña). Bottom: Cyprus rain as the departure from normal, coloured by that winter\'s phase. Read down any column: the colours refuse to line up with the bar heights.',
      src: 'ONI: NOAA CPC. Rainfall: Cyprus DoM island area average, % of the 1961–90 normal, minus 100. The dashed slot at the right is the winter now beginning. Sources: NOAA CPC; DoM / data.gov.cy via kairika.info.',
      pacific: 'Pacific · ONI, °C', cyprus: 'Cyprus · rain vs normal, % points', now: '2026-27 →',
    },
    el: {
      title: 'Εβδομήντα έξι χειμώνες, δύο σήματα δίπλα δίπλα',
      sub: 'Πάνω: ο Ειρηνικός, ως ONI Νοε–Ιαν (κόκκινο πάνω από +0.5 είναι Ελ Νίνιο, μπλε κάτω από −0.5 είναι Λα Νίνια). Κάτω: η κυπριακή βροχή ως απόκλιση από την κανονική, χρωματισμένη κατά τη φάση του χειμώνα. Διαβάστε κάθε στήλη από πάνω προς τα κάτω: τα χρώματα αρνούνται να ταιριάξουν με τα ύψη.',
      src: 'ONI: NOAA CPC. Βροχόπτωση: παγκύπριος μέσος όρος του Τμήματος Μετεωρολογίας, % της κανονικής 1961–90, μείον 100. Η διακεκομμένη θέση δεξιά είναι ο χειμώνας που ξεκινά τώρα. Πηγές: NOAA CPC· ΤΜ / data.gov.cy μέσω kairika.info.',
      pacific: 'Ειρηνικός · ONI, °C', cyprus: 'Κύπρος · βροχή έναντι κανονικής, μονάδες %', now: '2026-27 →',
    },
    ru: {
      title: 'Семьдесят шесть зим, два сигнала рядом',
      sub: 'Вверху: Тихий океан как ONI за ноябрь–январь (красное выше +0.5 это Эль-Ниньо, синее ниже −0.5 это Ла-Нинья). Внизу: осадки Кипра как отклонение от нормы, окрашенные по фазе той зимы. Прочитайте любой столбец сверху вниз: цвета отказываются совпадать с высотой.',
      src: 'ONI: NOAA CPC. Осадки: общеостровное среднее Департамента метеорологии Кипра, % от нормы 1961–90, минус 100. Пунктирный слот справа это начинающаяся зима. Источники: NOAA CPC; ДМ / data.gov.cy через kairika.info.',
      pacific: 'Тихий океан · ONI, °C', cyprus: 'Кипр · осадки к норме, п.п.', now: '2026-27 →',
    },
  }, language);

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: NINO, label: L({ en: 'El Niño', el: 'Ελ Νίνιο', ru: 'Эль-Ниньо' }, language) }, { color: NINA, label: L({ en: 'La Niña', el: 'Λα Νίνια', ru: 'Ла-Нинья' }, language) }, { color: NEUTRAL, label: L({ en: 'Neutral', el: 'Ουδέτερος', ru: 'Нейтральная' }, language) }]}>
        {/* top panel */}
        <AxisText x={2} y={y0Top - 10}>{t.pacific}</AxisText>
        {[-2, 0, 2].map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={yOni(v)} y2={yOni(v)} />
            <AxisText x={m.l - 7} y={yOni(v) + 3.5} textAnchor="end">{v > 0 ? `+${v}` : v}</AxisText>
          </g>
        ))}
        <rect x={m.l} y={yOni(0.5)} width={W - m.l - m.r} height={yOni(-0.5) - yOni(0.5)} fill={NEUTRAL} opacity={0.1} />
        {rows.map((r, i) => {
          const p = phaseOf(r.ndj);
          return (
            <rect key={r.year} x={x(i) + 1} y={Math.min(yOni(0), yOni(r.ndj))} width={bw - 2} height={Math.abs(yOni(r.ndj) - yOni(0))}
              fill={phaseColor(p)} opacity={p === 'neutral' ? 0.6 : 0.9}
              onMouseMove={e => show(e, `<b>${hy(r.year)}</b> · ONI ${r.ndj > 0 ? '+' : ''}${fmt(r.ndj, 2)}`)} onMouseLeave={hide} />
          );
        })}
        {/* 2026-27 ghost */}
        <rect x={x(rows.length) + 1} y={yOni(2.5)} width={bw - 2} height={yOni(0) - yOni(2.5)} fill="none" stroke={NINO} strokeWidth={1.2} strokeDasharray="3 2" />
        <AxisText x={x(rows.length) - 4} y={yOni(2.5) - 4} textAnchor="end" fill={NINO}>{t.now}</AxisText>

        {/* bottom panel */}
        <AxisText x={2} y={y0Bot - 10}>{t.cyprus}</AxisText>
        {[-40, -20, 0, 20, 40].map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={yAn(v)} y2={yAn(v)} />
            <AxisText x={m.l - 7} y={yAn(v) + 3.5} textAnchor="end">{v > 0 ? `+${v}` : v}</AxisText>
          </g>
        ))}
        <line x1={m.l} x2={W - m.r} y1={yAn(0)} y2={yAn(0)} stroke={NEUTRAL} strokeWidth={1.2} />
        {rows.map((r, i) => {
          const p = phaseOf(r.ndj);
          const a = r.pct - 100;
          return (
            <g key={r.year} onMouseMove={e => show(e, `<b>${hy(r.year)}</b> · ${r.mm} mm · ${r.pct}% of normal`)} onMouseLeave={hide}>
              <rect x={x(i) + 1} y={Math.min(yAn(0), yAn(a))} width={bw - 2} height={Math.abs(yAn(a) - yAn(0))}
                fill={phaseColor(p)} opacity={p === 'neutral' ? 0.6 : 0.9} />
              {(r.year % 10 === 0) && (
                <AxisText x={x(i) + bw / 2} y={H - m.b + 15} textAnchor="middle">{r.year}</AxisText>
              )}
            </g>
          );
        })}
        <rect x={x(rows.length) + 1} y={yAn(20)} width={bw - 2} height={yAn(-20) - yAn(20)} fill="none" stroke={NEUTRAL} strokeWidth={1.2} strokeDasharray="3 2" />
        <Note x={x(rows.length) + bw / 2} y={yAn(0) + 4} textAnchor="middle">?</Note>
      </Frame>
    </>
  );
}

/* ================= 4. Dam refill by phase ================= */

export function EnsoRefillChart() {
  const { language } = useLanguage();
  const u = useTranslation(language)('volumeUnit');
  const { show, hide, node } = useTip();
  const s = useMemo(() => refillStats(), []);
  const pl = L(PHASE_LABEL, language);

  const W = 1000, H = 400, m = { t: 30, r: 20, b: 44, l: 46 };
  const top = 260;
  const cols: Phase[] = ['nino', 'neutral', 'nina'];
  const colW = (W - m.l - m.r) / 3;
  const cx = (i: number) => m.l + colW * i + colW / 2;
  const y = (v: number) => (H - m.b) - (v / top) * (H - m.b - m.t);
  const call = new Set([2018, 2015, 2023, 2025, 2011, 2001, 2009]);
  const leftLabel = new Set([2015, 2009]);

  // beeswarm-ish jitter: spread by rank so dots near the same value do not stack
  const jitter = (rowsIn: typeof s.rows) => {
    const sorted = [...rowsIn].sort((a, b) => a.refill - b.refill);
    const out = new Map<number, number>();
    sorted.forEach((r, i) => {
      const prev = sorted[i - 1];
      const close = prev && Math.abs(prev.refill - r.refill) < 7;
      out.set(r.year, close ? (out.get(prev.year)! > 0 ? -1 : 1) * (Math.abs(out.get(prev.year)!) + 1) : 0);
    });
    return out;
  };

  const t = L({
    en: {
      title: `How much the dams refilled each winter since 1988, grouped by Pacific phase`,
      sub: `One dot per winter: the rise from the autumn low to the following spring peak, 18 main dams. El Niño winters average more, but only because of 2018–19. Two of the ${s.rows.length} winters refilled by less than 10 ${u}: 2015–16 and 2023–24 were the two strongest El Niños in the set.`,
      src: `Refill = spring peak minus the lowest reading between October and January, main dams only; capped by capacity when dams spill. Correlation with the ONI: ${fmt(s.r, 2)}. Sources: WDD storage series (Fragmata dataset), NOAA CPC.`,
      med: 'median',
    },
    el: {
      title: `Πόσο ξαναγέμισαν τα φράγματα κάθε χειμώνα από το 1988, ανά φάση του Ειρηνικού`,
      sub: `Μία κουκκίδα ανά χειμώνα: η άνοδος από το φθινοπωρινό ελάχιστο ως την επόμενη ανοιξιάτικη κορύφωση, 18 κύρια φράγματα. Οι χειμώνες Ελ Νίνιο έχουν μεγαλύτερο μέσο όρο, αλλά μόνο λόγω του 2018–19. Δύο από τους ${s.rows.length} χειμώνες ξαναγέμισαν κατά λιγότερο από 10 ${u}: το 2015–16 και το 2023–24 ήταν τα δύο ισχυρότερα Ελ Νίνιο του συνόλου.`,
      src: `Αναπλήρωση = ανοιξιάτικη κορύφωση μείον η χαμηλότερη μέτρηση Οκτωβρίου–Ιανουαρίου, μόνο κύρια φράγματα· περιορίζεται από τη χωρητικότητα όταν υπερχειλίζουν. Συσχέτιση με τον ONI: ${fmt(s.r, 2)}. Πηγές: σειρά αποθήκευσης ΤΑΥ (σύνολο δεδομένων Fragmata), NOAA CPC.`,
      med: 'διάμεσος',
    },
    ru: {
      title: `Насколько наполнялись дамбы каждую зиму с 1988 года, по фазам Тихого океана`,
      sub: `Одна точка на зиму: подъём от осеннего минимума до следующего весеннего пика, 18 основных дамб. У зим Эль-Ниньо среднее выше, но только из-за 2018–19. Две из ${s.rows.length} зим наполнились менее чем на 10 ${u}: 2015–16 и 2023–24 были двумя сильнейшими Эль-Ниньо в наборе.`,
      src: `Наполнение = весенний пик минус наименьший замер октября–января, только основные дамбы; ограничено ёмкостью при переливах. Корреляция с ONI: ${fmt(s.r, 2)}. Источники: ряд запасов ДВР (набор данных Fragmata), NOAA CPC.`,
      med: 'медиана',
    },
  }, language);

  return (
    <>
      {node}
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: NINO, label: pl.nino }, { color: NEUTRAL, label: pl.neutral }, { color: NINA, label: pl.nina }]}>
        {[0, 50, 100, 150, 200, 250].map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 7} y={y(v) + 3.5} textAnchor="end">{v}</AxisText>
          </g>
        ))}
        <AxisText x={2} y={m.t - 12}>{u}</AxisText>

        {cols.map((p, ci) => {
          const rows = s.rows.filter(r => r.phase === p);
          const jit = jitter(rows);
          const st = s.byPhase[p];
          return (
            <g key={p}>
              <line x1={cx(ci) - colW * 0.3} x2={cx(ci) + colW * 0.3} y1={y(st.median)} y2={y(st.median)}
                stroke={phaseColor(p)} strokeWidth={2} strokeDasharray="5 4" />
              <Note x={cx(ci) + colW * 0.3} y={y(st.median) - 6} textAnchor="end" fill={phaseColor(p)}>
                {`${t.med} ${fmt(st.median, 0)}`}
              </Note>
              <Note x={cx(ci)} y={H - m.b + 18} textAnchor="middle" fill={phaseColor(p)}>{`${L({ en: `${pl[p]}s`, el: PHASE_PLURAL.el[p], ru: PHASE_PLURAL.ru[p] }, language)} · n = ${st.n}`}</Note>
              {rows.map(r => {
                const dx = (jit.get(r.year) ?? 0) * 14;
                const c = call.has(r.year);
                return (
                  <g key={r.year}
                    onMouseMove={e => show(e, `<b>${hy(r.year)}</b> · ONI ${r.ndj > 0 ? '+' : ''}${fmt(r.ndj, 2)}<br>${fmt(r.low)} → ${fmt(r.peak)} ${u} · +${fmt(r.refill)}`)}
                    onMouseLeave={hide}>
                    <circle cx={cx(ci) + dx} cy={y(r.refill)} r={c ? 7 : 5} fill={phaseColor(p)} opacity={c ? 1 : 0.7}
                      stroke={c ? 'white' : 'none'} strokeWidth={1.2} />
                    {c && (
                      <AxisText x={cx(ci) + dx + (leftLabel.has(r.year) ? -10 : 10)}
                        y={y(r.refill) + 3.5 + (r.year === 2023 ? -12 : 0)}
                        textAnchor={leftLabel.has(r.year) ? 'end' : 'start'} fill={phaseColor(p)}>
                        {`${hy(r.year)} · +${fmt(r.refill, 0)}`}
                      </AxisText>
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </Frame>
    </>
  );
}
