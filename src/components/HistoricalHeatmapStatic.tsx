import React, { useMemo, useRef, useEffect, useState } from 'react';
import { historicalStorageData, HistoricalStorageEntry } from '@/utils/historicalStorageData';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { useTheme } from '@/components/ThemeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

interface ReservoirMeta {
  key: keyof HistoricalStorageEntry;
  name: string;
  capacity: number;
}

interface RegionGroup {
  region: string;
  reservoirs: ReservoirMeta[];
}

const REGIONS: RegionGroup[] = [
  {
    region: 'southernConveyor',
    reservoirs: [
      { key: 'kouris', name: 'Kouris', capacity: 115.0 },
      { key: 'kalavasos', name: 'Kalavasos', capacity: 17.1 },
      { key: 'lefkara', name: 'Lefkara', capacity: 13.85 },
      { key: 'dipotamos', name: 'Dipotamos', capacity: 15.5 },
      { key: 'germasoyeia', name: 'Germasoyeia', capacity: 13.5 },
      { key: 'arminou', name: 'Arminou', capacity: 4.3 },
      { key: 'polemidia', name: 'Polemidia', capacity: 3.4 },
      { key: 'achna', name: 'Achna', capacity: 6.8 },
    ],
  },
  {
    region: 'paphos',
    reservoirs: [
      { key: 'asprokremmos', name: 'Asprokremmos', capacity: 52.375 },
      { key: 'kannaviou', name: 'Kannaviou', capacity: 17.168 },
      { key: 'mavrokolympos', name: 'Mavrokolympos', capacity: 2.18 },
    ],
  },
  {
    region: 'chrysochou',
    reservoirs: [
      { key: 'evretou', name: 'Evretou', capacity: 24.0 },
      { key: 'argaka', name: 'Argaka', capacity: 0.99 },
      { key: 'pomos', name: 'Pomos', capacity: 0.86 },
      { key: 'agiaMarina', name: 'Agia Marina', capacity: 0.298 },
    ],
  },
  {
    region: 'nicosia',
    reservoirs: [
      { key: 'vyzakia', name: 'Vyzakia', capacity: 1.69 },
      { key: 'xyliatos', name: 'Xyliatos', capacity: 1.43 },
      { key: 'kalopanagiotis', name: 'Kalopanagiotis', capacity: 0.363 },
    ],
  },
  {
    region: 'rechargeOther',
    reservoirs: [
      { key: 'tamassos', name: 'Tamassos', capacity: 2.8 },
      { key: 'klirouMalounta', name: 'Klirou-Malounta', capacity: 2.0 },
      { key: 'solea', name: 'Solea', capacity: 4.454 },
    ],
  },
];

const TOTAL_CAPACITY = 290.668;

function getCellColor(percentage: number | null, isDark: boolean): string {
  if (percentage === null) return isDark ? '#1f2937' : '#e5e7eb';
  if (percentage >= 100) return isDark ? '#0e7490' : '#0ea5e9';
  const p = Math.max(0, Math.min(100, percentage));
  const hue = (p / 100) * 120;
  const sat = isDark ? 65 : 75;
  const lit = isDark ? 35 : 45;
  return `hsl(${hue}, ${sat}%, ${lit}%)`;
}

const CELL = 4;
const GAP = 1;
const STEP = CELL + GAP;
const LABEL_W = 90;
const REGION_GAP = 4;
const HEADER_H = 16;
const TOTAL_ROW_H = 10;
const TOTAL_GAP = 12;

interface HistoricalHeatmapStaticProps {
  years?: number;
  bare?: boolean;
}

const HistoricalHeatmapStatic: React.FC<HistoricalHeatmapStaticProps> = ({ years, bare }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted
    ? (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches))
    : false;

  const gridData = useMemo(() => {
    let data = historicalStorageData;
    if (years) {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - years);
      const cutoffStr = cutoff.toISOString().slice(0, 10);
      data = data.filter(d => d.date >= cutoffStr);
    }

    const dates = data.map(d => d.date);

    const yearIndices: { year: number; index: number }[] = [];
    let lastYear = -1;
    dates.forEach((date, i) => {
      const year = new Date(date).getFullYear();
      if (year !== lastYear) {
        yearIndices.push({ year, index: i });
        lastYear = year;
      }
    });

    const regions = REGIONS.map(group => ({
      region: group.region,
      reservoirs: group.reservoirs.map(meta => {
        const percentages = data.map(entry => {
          const val = entry[meta.key] as number | null;
          if (val === null || val === undefined) return null;
          return Math.round((val / meta.capacity) * 1000) / 10;
        });
        return { ...meta, percentages };
      }),
    }));

    const totalPercentages = data.map(entry => {
      if (entry.totalAll === null || entry.totalAll === undefined) return null;
      return Math.round((entry.totalAll / TOTAL_CAPACITY) * 1000) / 10;
    });

    return { dates, yearIndices, regions, totalPercentages };
  }, [years]);

  const totalReservoirs = REGIONS.reduce((sum, g) => sum + g.reservoirs.length, 0);
  const totalRegionGaps = (REGIONS.length - 1) * REGION_GAP;
  const gridH = totalReservoirs * STEP - GAP + totalRegionGaps;
  const canvasW = LABEL_W + gridData.dates.length * STEP;
  const canvasH = HEADER_H + gridH + TOTAL_GAP + TOTAL_ROW_H + HEADER_H;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasW * dpr;
    canvas.height = canvasH * dpr;
    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);

    // Clear
    ctx.clearRect(0, 0, canvasW, canvasH);

    // Year labels
    ctx.font = '9px system-ui, sans-serif';
    ctx.fillStyle = isDark ? '#6b7280' : '#9ca3af';
    ctx.textBaseline = 'top';
    for (const { year, index } of gridData.yearIndices) {
      ctx.fillText(String(year), LABEL_W + index * STEP, 0);
    }

    // Region labels and cells
    let y = HEADER_H;
    ctx.font = '9px system-ui, sans-serif';
    ctx.textBaseline = 'middle';

    for (let gi = 0; gi < gridData.regions.length; gi++) {
      const group = gridData.regions[gi];
      const blockH = group.reservoirs.length * STEP - GAP;

      // Region label
      ctx.fillStyle = isDark ? '#9ca3af' : '#6b7280';
      ctx.fillText(t(group.region as any), 0, y + blockH / 2);

      // Cells
      for (let ri = 0; ri < group.reservoirs.length; ri++) {
        const res = group.reservoirs[ri];
        const cellY = y + ri * STEP;
        for (let di = 0; di < res.percentages.length; di++) {
          ctx.fillStyle = getCellColor(res.percentages[di], isDark);
          ctx.fillRect(LABEL_W + di * STEP, cellY, CELL, CELL);
        }
      }

      y += blockH;
      if (gi < gridData.regions.length - 1) {
        y += REGION_GAP;
      }
    }

    // Total row
    const totalY = y + TOTAL_GAP;

    // Separator line
    ctx.strokeStyle = isDark ? '#374151' : '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, totalY - TOTAL_GAP / 2);
    ctx.lineTo(canvasW, totalY - TOTAL_GAP / 2);
    ctx.stroke();

    // Total label
    ctx.font = 'bold 9px system-ui, sans-serif';
    ctx.fillStyle = isDark ? '#d1d5db' : '#4b5563';
    ctx.textBaseline = 'middle';
    ctx.fillText(t('totalLabel'), 0, totalY + TOTAL_ROW_H / 2);

    // Total cells
    const totalCellW = Math.max(1, (canvasW - LABEL_W) / gridData.totalPercentages.length);
    for (let di = 0; di < gridData.totalPercentages.length; di++) {
      ctx.fillStyle = getCellColor(gridData.totalPercentages[di], isDark);
      ctx.fillRect(LABEL_W + di * totalCellW, totalY, totalCellW, TOTAL_ROW_H);
    }

    // Year markers for total row
    ctx.font = '8px system-ui, sans-serif';
    ctx.fillStyle = isDark ? '#6b7280' : '#9ca3af';
    ctx.textBaseline = 'top';
    for (const { year, index } of gridData.yearIndices) {
      if (year % 10 === 0) {
        const x = LABEL_W + (index / gridData.dates.length) * (canvasW - LABEL_W);
        ctx.fillText(String(year), x, totalY + TOTAL_ROW_H + 2);
      }
    }
  }, [gridData, isDark, canvasW, canvasH, t]);

  const legendCellSize = 10;

  const legend = (
    <div className="flex items-center gap-2 text-[10px] text-gray-500 dark:text-gray-400">
      <span>{t('noData')}:</span>
      <div style={{ width: legendCellSize, height: legendCellSize, backgroundColor: getCellColor(null, isDark) }} />
      <span className="ml-1">0%</span>
      <div style={{
        width: legendCellSize * 8,
        height: legendCellSize,
        borderRadius: 1,
        background: `linear-gradient(to right, ${getCellColor(0, isDark)}, ${getCellColor(50, isDark)}, ${getCellColor(99, isDark)})`,
      }} />
      <span>100%</span>
      <div style={{ width: legendCellSize, height: legendCellSize, backgroundColor: getCellColor(100, isDark), marginLeft: 4 }} />
      <span>{t('full')}</span>
    </div>
  );

  const canvasEl = (
    <canvas
      ref={canvasRef}
      style={{ width: canvasW, height: canvasH, maxWidth: '100%' }}
    />
  );

  if (bare) {
    return (
      <div>
        <div className="flex justify-end mb-1">{legend}</div>
        {canvasEl}
      </div>
    );
  }

  return (
    <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-tight">
            <BarChart3 className="h-5 w-5 text-water-500 dark:text-water-400" />
            {t('historicalLevels')}
          </CardTitle>
          {legend}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {canvasEl}
      </CardContent>
    </Card>
  );
};

export default HistoricalHeatmapStatic;
