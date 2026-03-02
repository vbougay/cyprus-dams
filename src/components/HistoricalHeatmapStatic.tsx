import React, { useMemo, useRef, useEffect, useState } from 'react';
import { historicalStorageData, HistoricalStorageEntry } from '@/utils/historicalStorageData';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { useTheme } from '@/components/ThemeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Calendar, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { REGIONS, getCellColor } from '@/utils/heatmapConfig';
import { SparklineDataPoint, getSparklineExtremes } from '@/utils/sparklineData';
import { StorageSparkline } from '@/components';

const TOTAL_CAPACITY = 290.668;

const CELL = 4;
const GAP = 1;
const STEP = CELL + GAP;
const LABEL_W = 90;
const REGION_GAP = 4;
const HEADER_H = 16;
const TOTAL_ROW_H = 10;
const TOTAL_GAP = 12;
const MIN_LABEL_PAD = 6;

interface HistoricalHeatmapStaticProps {
  years?: number;
  bare?: boolean;
  filterRegion?: string;
  filterDamKey?: keyof HistoricalStorageEntry;
  sparklineData?: SparklineDataPoint[];
}

const HistoricalHeatmapStatic: React.FC<HistoricalHeatmapStaticProps> = ({ years, bare, filterRegion, filterDamKey, sparklineData }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [availableWidth, setAvailableWidth] = useState(0);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted
    ? (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches))
    : false;

  // Measure container width so we can size the canvas to fit
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      setAvailableWidth(Math.floor(entries[0].contentRect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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

    // Filter REGIONS based on props
    const filteredREGIONS = filterDamKey
      ? REGIONS.map(g => ({
          ...g,
          reservoirs: g.reservoirs.filter(r => r.key === filterDamKey),
        })).filter(g => g.reservoirs.length > 0)
      : filterRegion
        ? REGIONS.filter(g => g.region === filterRegion)
        : REGIONS;

    const regions = filteredREGIONS.map(group => ({
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

    // Compute total row based on filtering mode
    let totalPercentages: (number | null)[];

    if (filterDamKey) {
      const damMeta = REGIONS.flatMap(g => g.reservoirs).find(r => r.key === filterDamKey);
      const damCapacity = damMeta?.capacity ?? 1;
      totalPercentages = data.map(entry => {
        const val = entry[filterDamKey] as number | null;
        if (val === null || val === undefined) return null;
        return Math.round((val / damCapacity) * 1000) / 10;
      });
    } else if (filterRegion) {
      const regionGroup = REGIONS.find(g => g.region === filterRegion);
      const damKeys = regionGroup?.reservoirs ?? [];
      const regionCapacity = damKeys.reduce((sum, r) => sum + r.capacity, 0);
      totalPercentages = data.map(entry => {
        let sum = 0;
        let hasAny = false;
        for (const r of damKeys) {
          const val = entry[r.key] as number | null;
          if (val !== null && val !== undefined) {
            sum += val;
            hasAny = true;
          }
        }
        if (!hasAny) return null;
        return Math.round((sum / regionCapacity) * 1000) / 10;
      });
    } else {
      totalPercentages = data.map(entry => {
        if (entry.totalAll === null || entry.totalAll === undefined) return null;
        return Math.round((entry.totalAll / TOTAL_CAPACITY) * 1000) / 10;
      });
    }

    return { dates, yearIndices, regions, totalPercentages };
  }, [years, filterRegion, filterDamKey]);

  const showGrid = !filterDamKey;
  const filteredReservoirCount = gridData.regions.reduce((sum, g) => sum + g.reservoirs.length, 0);
  const filteredRegionGaps = (gridData.regions.length - 1) * REGION_GAP;
  const gridH = showGrid ? filteredReservoirCount * STEP - GAP + filteredRegionGaps : 0;
  const damTotalRowH = filterDamKey ? 14 : TOTAL_ROW_H;

  // Responsive horizontal sizing: fit canvas to container instead of CSS-squishing
  const naturalW = LABEL_W + gridData.dates.length * STEP;
  const canvasW = availableWidth > 0 ? Math.min(naturalW, availableWidth) : naturalW;
  const gridW = canvasW - LABEL_W;
  const hStep = gridData.dates.length > 0 ? gridW / gridData.dates.length : STEP;
  const hGap = hStep > 2 ? GAP : 0;
  const hCell = Math.max(0.5, hStep - hGap);

  // In dam-only mode: no label column, full-width bar, no top padding
  const barLabelW = showGrid ? LABEL_W : 0;
  const barGridW = canvasW - barLabelW;

  const showTopYearLabels = showGrid && !filterRegion;
  const canvasH = showGrid
    ? (showTopYearLabels ? HEADER_H : 0) + gridH + TOTAL_GAP + damTotalRowH + HEADER_H
    : damTotalRowH + HEADER_H;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || canvasW <= LABEL_W) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasW * dpr;
    canvas.height = canvasH * dpr;
    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);

    // Clear
    ctx.clearRect(0, 0, canvasW, canvasH);

    let y = 0;
    let lastLabelEndX = -Infinity;

    if (showGrid) {
      // Year labels above grid (only for unfiltered/main dashboard view)
      if (showTopYearLabels) {
        ctx.font = '9px system-ui, sans-serif';
        ctx.fillStyle = isDark ? '#6b7280' : '#9ca3af';
        ctx.textBaseline = 'top';
        for (const { year, index } of gridData.yearIndices) {
          const x = LABEL_W + index * hStep;
          if (x - lastLabelEndX < MIN_LABEL_PAD) continue;
          ctx.fillText(String(year), x, 0);
          lastLabelEndX = x + ctx.measureText(String(year)).width;
        }
      }

      // Region labels and cells
      y = showTopYearLabels ? HEADER_H : 0;
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
            ctx.fillRect(LABEL_W + di * hStep, cellY, hCell, CELL);
          }
        }

        y += blockH;
        if (gi < gridData.regions.length - 1) {
          y += REGION_GAP;
        }
      }

      // Separator line
      const sepY = y + TOTAL_GAP / 2;
      ctx.strokeStyle = isDark ? '#374151' : '#e5e7eb';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, sepY);
      ctx.lineTo(canvasW, sepY);
      ctx.stroke();
    }

    // Total row
    const totalY = showGrid ? y + TOTAL_GAP : 0;

    // Total label (skip for dam-only mode)
    if (showGrid) {
      ctx.font = 'bold 9px system-ui, sans-serif';
      ctx.fillStyle = isDark ? '#d1d5db' : '#4b5563';
      ctx.textBaseline = 'middle';
      ctx.fillText(t('totalLabel'), 0, totalY + damTotalRowH / 2);
    }

    // Total cells (continuous, no gap)
    const totalCellW = Math.max(0.5, barGridW / gridData.totalPercentages.length);
    for (let di = 0; di < gridData.totalPercentages.length; di++) {
      ctx.fillStyle = getCellColor(gridData.totalPercentages[di], isDark);
      ctx.fillRect(barLabelW + di * totalCellW, totalY, totalCellW, damTotalRowH);
    }

    // Year markers for total row with overlap prevention
    ctx.font = '8px system-ui, sans-serif';
    ctx.fillStyle = isDark ? '#6b7280' : '#9ca3af';
    ctx.textBaseline = 'top';
    lastLabelEndX = -Infinity;
    for (const { year, index } of gridData.yearIndices) {
      const x = barLabelW + (index / gridData.dates.length) * barGridW;
      if (x - lastLabelEndX < MIN_LABEL_PAD) continue;
      ctx.fillText(String(year), x, totalY + damTotalRowH + 2);
      lastLabelEndX = x + ctx.measureText(String(year)).width;
    }
  }, [gridData, isDark, canvasW, canvasH, t, hStep, hCell, gridW, showGrid, damTotalRowH, barLabelW, barGridW]);

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
      style={{ width: canvasW, height: canvasH }}
    />
  );

  if (bare) {
    return (
      <div ref={wrapperRef}>
        <div className="flex justify-end mb-1">{legend}</div>
        {availableWidth > 0 && canvasEl}
      </div>
    );
  }

  return (
    <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-tight">
            <BarChart3 className="h-5 w-5 text-water-500 dark:text-water-400" />
            {filterDamKey ? t('historicalLevelsSingle') : t('historicalLevels')}
          </CardTitle>
          {legend}
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div ref={wrapperRef}>
          {availableWidth > 0 && canvasEl}
        </div>
        {sparklineData && sparklineData.length > 0 && (() => {
          const extremes = getSparklineExtremes(sparklineData);
          const formatShortDate = (iso: string) => {
            const d = new Date(iso);
            return d.toLocaleDateString(language === 'el' ? 'el-GR' : language === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'short' });
          };
          return (
            <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={14} className="text-water-500 dark:text-water-400" />
                <span className="text-sm font-medium text-muted-foreground">{t('history')}</span>
                {extremes && (
                  <div className="flex gap-3 ml-auto font-mono text-xs">
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <ArrowUpCircle size={12} />
                      <span>{extremes.max.percentage.toFixed(1)}%</span>
                      <span className="text-muted-foreground">{formatShortDate(extremes.max.date)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500 dark:text-red-400">
                      <ArrowDownCircle size={12} />
                      <span>{extremes.min.percentage.toFixed(1)}%</span>
                      <span className="text-muted-foreground">{formatShortDate(extremes.min.date)}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full h-[80px]">
                <StorageSparkline
                  data={sparklineData}
                  highlightMax={extremes?.max}
                  highlightMin={extremes?.min}
                  showLevelLines
                  language={language}
                />
              </div>
            </div>
          );
        })()}
      </CardContent>
    </Card>
  );
};

export default HistoricalHeatmapStatic;
