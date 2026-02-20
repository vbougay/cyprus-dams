import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
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
    region: 'Southern Conveyor',
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
    region: 'Paphos',
    reservoirs: [
      { key: 'asprokremmos', name: 'Asprokremmos', capacity: 52.375 },
      { key: 'kannaviou', name: 'Kannaviou', capacity: 17.168 },
      { key: 'mavrokolympos', name: 'Mavrokolympos', capacity: 2.18 },
    ],
  },
  {
    region: 'Chrysochou',
    reservoirs: [
      { key: 'evretou', name: 'Evretou', capacity: 24.0 },
      { key: 'argaka', name: 'Argaka', capacity: 0.99 },
      { key: 'pomos', name: 'Pomos', capacity: 0.86 },
      { key: 'agiaMarina', name: 'Agia Marina', capacity: 0.298 },
    ],
  },
  {
    region: 'Nicosia',
    reservoirs: [
      { key: 'vyzakia', name: 'Vyzakia', capacity: 1.69 },
      { key: 'xyliatos', name: 'Xyliatos', capacity: 1.43 },
      { key: 'kalopanagiotis', name: 'Kalopanagiotis', capacity: 0.363 },
    ],
  },
  {
    region: 'Recharge',
    reservoirs: [
      { key: 'tamassos', name: 'Tamassos', capacity: 2.8 },
      { key: 'klirouMalounta', name: 'Klirou-Malounta', capacity: 2.0 },
      { key: 'solea', name: 'Solea', capacity: 4.454 },
    ],
  },
];

function getCellColor(percentage: number | null, isDark: boolean): string {
  if (percentage === null) return isDark ? '#1f2937' : '#e5e7eb';
  const p = Math.max(0, Math.min(100, percentage));
  if (p >= 100) return isDark ? '#0e7490' : '#0ea5e9';
  if (p <= 10) return isDark ? '#991b1b' : '#dc2626';
  if (p <= 25) return isDark ? '#c2410c' : '#ea580c';
  if (p <= 50) return isDark ? '#b45309' : '#f59e0b';
  if (p <= 75) return isDark ? '#4d7c0f' : '#84cc16';
  return isDark ? '#15803d' : '#22c55e';
}

interface TooltipData {
  name: string;
  date: string;
  storageMCM: number | null;
  percentage: number | null;
  x: number;
  y: number;
}

const CELL = 8;
const GAP = 1;
const STEP = CELL + GAP;
const LABEL_W = 85;
const REGION_GAP = 4;
const DATA_GAP_W = 24;
const TOTAL_CAPACITY = 290.668;

const HistoricalHeatmap: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const isDark = theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const gridData = useMemo(() => {
    const dates = historicalStorageData.map(d => d.date);

    const yearIndices: { year: number; index: number }[] = [];
    let lastYear = -1;
    dates.forEach((date, i) => {
      const year = new Date(date).getFullYear();
      if (year !== lastYear) {
        yearIndices.push({ year, index: i });
        lastYear = year;
      }
    });

    // Detect data gap: find where consecutive dates are >6 months apart
    let gapIndex = -1;
    for (let i = 0; i < dates.length - 1; i++) {
      const diff = new Date(dates[i + 1]).getTime() - new Date(dates[i]).getTime();
      if (diff > 180 * 24 * 60 * 60 * 1000) {
        gapIndex = i + 1; // gap sits before this index
        break;
      }
    }

    const regions = REGIONS.map(group => ({
      region: group.region,
      reservoirs: group.reservoirs.map(meta => {
        const percentages = historicalStorageData.map(entry => {
          const val = entry[meta.key] as number | null;
          if (val === null || val === undefined) return null;
          return Math.round((val / meta.capacity) * 1000) / 10;
        });
        const rawValues = historicalStorageData.map(entry => entry[meta.key] as number | null);
        return { ...meta, percentages, rawValues };
      }),
    }));

    // Overall total row
    const totalPercentages = historicalStorageData.map(entry => {
      if (entry.totalAll === null || entry.totalAll === undefined) return null;
      return Math.round((entry.totalAll / TOTAL_CAPACITY) * 1000) / 10;
    });
    const totalRawValues = historicalStorageData.map(entry => entry.totalAll);

    return { dates, yearIndices, regions, gapIndex, totalPercentages, totalRawValues };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth;
    }
  }, []);

  const handleMouseMove = useCallback((
    e: React.MouseEvent,
    resName: string,
    resKey: keyof HistoricalStorageEntry,
    dateIdx: number,
    percentage: number | null,
    rawValue: number | null,
  ) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setTooltip({
      name: resName,
      date: gridData.dates[dateIdx],
      storageMCM: rawValue,
      percentage,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [gridData]);

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  const scrollToDate = useCallback((dateIdx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const gapOffset = gridData.gapIndex >= 0 && dateIdx >= gridData.gapIndex ? DATA_GAP_W : 0;
    const targetX = dateIdx * STEP + gapOffset;
    el.scrollTo({ left: targetX - el.clientWidth / 2, behavior: 'smooth' });
  }, [gridData]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(language === 'gr' ? 'el-GR' : language === 'ru' ? 'ru-RU' : 'en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const legendCellSize = 10;

  return (
    <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-tight">
            <BarChart3 className="h-5 w-5 text-water-500 dark:text-water-400" />
            {t('historicalLevels')}
          </CardTitle>
          <div className="flex items-center gap-2 text-[10px] text-gray-500 dark:text-gray-400">
            <span>{t('noData')}:</span>
            <div style={{ width: legendCellSize, height: legendCellSize, backgroundColor: getCellColor(null, isDark) }} />
            <span className="ml-1">0%</span>
            <div className="flex gap-px">
              {[5, 15, 35, 60, 85, 100].map(p => (
                <div
                  key={p}
                  style={{ width: legendCellSize, height: legendCellSize, backgroundColor: getCellColor(p, isDark) }}
                />
              ))}
            </div>
            <span>100%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div ref={containerRef} className="relative">
          <style>{`
            .heatmap-scroll::-webkit-scrollbar {
              height: 6px;
            }
            .heatmap-scroll::-webkit-scrollbar-track {
              background: transparent;
              border-radius: 3px;
            }
            .heatmap-scroll::-webkit-scrollbar-thumb {
              background: ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'};
              border-radius: 3px;
            }
            .heatmap-scroll::-webkit-scrollbar-thumb:hover {
              background: ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
            }
          `}</style>
          <div
            ref={scrollRef}
            className="overflow-x-auto heatmap-scroll"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'thin',
              scrollbarColor: `${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'} transparent`,
            }}
          >
            <div style={{ display: 'flex', minWidth: 'max-content' }}>
              {/* Sticky region labels column */}
              <div
                className="sticky left-0 z-10 bg-white dark:bg-gray-900"
                style={{
                  width: LABEL_W + 24, flexShrink: 0,
                  marginLeft: -24, paddingLeft: 24, paddingRight: 6,
                  boxShadow: isDark
                    ? '6px 0 8px -2px rgba(0,0,0,0.5)'
                    : '6px 0 8px -2px rgba(0,0,0,0.08)',
                }}
              >
                {/* Year header spacer */}
                <div style={{ height: CELL + GAP + 2, marginBottom: GAP }} />
                {/* Region labels */}
                {gridData.regions.map((group, gi) => {
                  const rowCount = group.reservoirs.length;
                  const blockHeight = rowCount * STEP - GAP;
                  return (
                    <div
                      key={group.region}
                      className="flex items-center pr-2"
                      style={{
                        height: blockHeight,
                        marginBottom: gi < gridData.regions.length - 1 ? REGION_GAP : 0,
                      }}
                    >
                      <span className="text-[9px] sm:text-[10px] leading-tight text-gray-500 dark:text-gray-400">
                        {group.region}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Grid area */}
              <div>
                {/* Year labels row */}
                <div style={{ height: CELL + GAP + 2, marginBottom: GAP, position: 'relative' }}>
                  {gridData.yearIndices.map(({ year, index }) => {
                    const offset = gridData.gapIndex >= 0 && index >= gridData.gapIndex
                      ? index * STEP + DATA_GAP_W
                      : index * STEP;
                    return (
                      <span
                        key={year}
                        className="text-[8px] sm:text-[9px] text-gray-400 dark:text-gray-500 absolute"
                        style={{ left: offset, top: 0, whiteSpace: 'nowrap' }}
                      >
                        {year}
                      </span>
                    );
                  })}
                </div>

                {/* Heatmap cells grouped by region */}
                {gridData.regions.map((group, gi) => (
                  <div
                    key={group.region}
                    style={{ marginBottom: gi < gridData.regions.length - 1 ? REGION_GAP : 0 }}
                  >
                    {group.reservoirs.map((res) => (
                      <div
                        key={res.key as string}
                        style={{ display: 'flex', gap: GAP, marginBottom: GAP, height: CELL }}
                      >
                        {res.percentages.map((pct, dateIdx) => (
                          <React.Fragment key={dateIdx}>
                            {dateIdx === gridData.gapIndex && (
                              <div
                                className="flex-shrink-0"
                                style={{
                                  width: DATA_GAP_W - GAP,
                                  height: CELL,
                                  background: isDark
                                    ? 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.12) 2px, rgba(255,255,255,0.12) 4px)'
                                    : 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
                                }}
                              />
                            )}
                            <div
                              className="flex-shrink-0 cursor-crosshair"
                              style={{
                                width: CELL,
                                height: CELL,
                                backgroundColor: getCellColor(pct, isDark),
                              }}
                              onMouseMove={(e) => handleMouseMove(e, res.name, res.key, dateIdx, pct, res.rawValues[dateIdx])}
                              onMouseLeave={handleMouseLeave}
                            />
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Total timeline — non-scrollable, full width */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
            <div className="flex items-center gap-2">
              <span
                className="text-[9px] sm:text-[10px] font-semibold text-gray-600 dark:text-gray-300 flex-shrink-0"
                style={{ width: LABEL_W }}
              >
                Total
              </span>
              <div className="flex-1 flex relative" style={{ height: 10 }}>
                {gridData.totalPercentages.map((pct, dateIdx) => (
                  <div
                    key={dateIdx}
                    className="cursor-pointer"
                    style={{
                      flex: 1,
                      height: 10,
                      backgroundColor: getCellColor(pct, isDark),
                    }}
                    onClick={() => scrollToDate(dateIdx)}
                    onMouseMove={(e) => {
                      const container = containerRef.current;
                      if (!container) return;
                      const rect = container.getBoundingClientRect();
                      setTooltip({
                        name: 'Total',
                        date: gridData.dates[dateIdx],
                        storageMCM: gridData.totalRawValues[dateIdx],
                        percentage: pct,
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      });
                    }}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            </div>
            {/* Year markers */}
            <div className="flex items-center">
              <div style={{ width: LABEL_W, flexShrink: 0 }} />
              <div className="flex-1 relative" style={{ height: 12 }}>
                {gridData.yearIndices
                  .filter(({ year }) => year % 10 === 0)
                  .map(({ year, index }) => (
                  <span
                    key={year}
                    className="text-[7px] sm:text-[8px] text-gray-400 dark:text-gray-500 absolute"
                    style={{
                      left: `${(index / gridData.dates.length) * 100}%`,
                      top: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {year}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="absolute z-20 pointer-events-none bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg px-3 py-2 shadow-lg border border-gray-700"
              style={{
                left: Math.min(tooltip.x + 14, (containerRef.current?.clientWidth ?? 400) - 180),
                top: Math.max(tooltip.y - 70, 4),
                minWidth: 150,
              }}
            >
              <div className="font-semibold mb-1">{tooltip.name}</div>
              <div className="text-gray-300">{formatDate(tooltip.date)}</div>
              {tooltip.percentage !== null ? (
                <>
                  <div className="mt-1">
                    <span className="text-gray-400">Fill: </span>
                    <span className="font-medium">{tooltip.percentage.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Storage: </span>
                    <span className="font-medium">{tooltip.storageMCM?.toFixed(2)} MCM</span>
                  </div>
                </>
              ) : (
                <div className="mt-1 text-gray-400">{t('noData')}</div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoricalHeatmap;
