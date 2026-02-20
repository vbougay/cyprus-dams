import React, { useEffect, useState, useMemo } from 'react';
import { yearlyInflowData, getReportDate } from '@/utils/dataManager';
import { parseReportDate } from '@/utils/reservoirUtils';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation, translations } from '@/utils/translations';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  BarChart, Bar, AreaChart, Area, LineChart, Line,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer, ReferenceLine
} from 'recharts';

type ViewMode = 'cumulative' | 'monthly';

const MONTH_KEYS = [
  "October", "November", "December", "January", "February", "March",
  "April", "May", "June", "July", "Aug-Sep"
];

const MONTH_TRANSLATION_KEYS = [
  'october', 'november', 'december', 'january', 'february', 'march',
  'april', 'may', 'june', 'july', 'augustSeptember'
];

const SEASON_COLORS = [
  '#0ea5e9', // latest - sky blue
  '#f97316', // orange
  '#8b5cf6', // violet
  '#10b981', // emerald
  '#f43f5e', // rose
  '#eab308', // yellow
  '#06b6d4', // cyan
  '#ec4899', // pink
  '#14b8a6', // teal
  '#a855f7', // purple
  '#64748b', // slate (oldest)
];

const calendarMonthToWaterYearIndex = (calMonth: number): number => {
  if (calMonth >= 10) return calMonth - 10;
  if (calMonth <= 7) return calMonth + 2;
  return 10;
};

const ALL_VALUE = 'all';

const MonthlyInflow: React.FC = () => {
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);

  const years = useMemo(() => {
    const data = yearlyInflowData();
    // Reverse so latest season is first in the dropdown
    return data.map(d => d.year).reverse();
  }, [currentDataSetId]);

  const [selectedYear, setSelectedYear] = useState<string>(() => {
    const data = yearlyInflowData();
    return data.length > 0 ? data[data.length - 1].year : '25/26';
  });
  const [viewMode, setViewMode] = useState<ViewMode>('cumulative');
  const [isVisible, setIsVisible] = useState(false);

  // Update selected year to latest when dataset changes and current selection is gone
  useEffect(() => {
    const data = yearlyInflowData();
    const latestYear = data.length > 0 ? data[data.length - 1].year : null;
    if (latestYear && selectedYear !== ALL_VALUE && !years.includes(selectedYear)) {
      setSelectedYear(latestYear);
    }
  }, [currentDataSetId]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Translated month names
  const monthNames = useMemo(() =>
    MONTH_TRANSLATION_KEYS.map(key => t(key as keyof typeof translations.en)),
    [language]
  );

  // Build chart data for single-season mode (selected year + previous year)
  const singleSeasonData = useMemo(() => {
    if (selectedYear === ALL_VALUE) return [];
    const inflowData = yearlyInflowData();
    const currentYearData = inflowData.find(data => data.year === selectedYear);
    if (!currentYearData) return [];

    const parts = selectedYear.split('/');
    const prevYearValue = `${parseInt(parts[0]) - 1}/${parseInt(parts[1]) - 1}`;
    const previousYearData = inflowData.find(data => data.year === prevYearValue);

    return MONTH_KEYS.map((monthKey, index) => ({
      name: monthNames[index],
      key: monthKey,
      currentYear: currentYearData.months[monthKey] || 0,
      previousYear: previousYearData ? previousYearData.months[monthKey] || 0 : 0,
    }));
  }, [selectedYear, currentDataSetId, monthNames]);

  // Build chart data for all-seasons mode
  const allSeasonsData = useMemo(() => {
    if (selectedYear !== ALL_VALUE) return [];
    const inflowData = yearlyInflowData();
    return MONTH_KEYS.map((monthKey, index) => {
      const point: Record<string, string | number> = { name: monthNames[index], key: monthKey };
      inflowData.forEach(yearData => {
        point[yearData.year] = yearData.months[monthKey] || 0;
      });
      return point;
    });
  }, [selectedYear, currentDataSetId, monthNames]);

  // Cumulative data for single season
  const cumulativeSingleData = useMemo(() => {
    let cumCurrent = 0;
    let cumPrevious = 0;
    return singleSeasonData.map(d => {
      cumCurrent += d.currentYear;
      cumPrevious += d.previousYear;
      return {
        name: d.name,
        key: d.key,
        currentYear: parseFloat(cumCurrent.toFixed(3)),
        previousYear: parseFloat(cumPrevious.toFixed(3)),
      };
    });
  }, [singleSeasonData]);

  // Cumulative data for all seasons
  const cumulativeAllData = useMemo(() => {
    if (selectedYear !== ALL_VALUE) return [];
    const inflowData = yearlyInflowData();
    const cumSums: Record<string, number> = {};
    inflowData.forEach(yd => { cumSums[yd.year] = 0; });

    return MONTH_KEYS.map((monthKey, index) => {
      const point: Record<string, string | number> = { name: monthNames[index], key: monthKey };
      inflowData.forEach(yearData => {
        cumSums[yearData.year] += yearData.months[monthKey] || 0;
        point[yearData.year] = parseFloat(cumSums[yearData.year].toFixed(3));
      });
      return point;
    });
  }, [selectedYear, currentDataSetId, monthNames]);

  // Current report month name for the reference line
  const currentMonthName = useMemo(() => {
    const reportDate = getReportDate();
    const parsed = parseReportDate(reportDate);
    if (!parsed) return null;
    const idx = calendarMonthToWaterYearIndex(parsed.month);
    return monthNames[idx];
  }, [currentDataSetId, monthNames]);

  const isAllMode = selectedYear === ALL_VALUE;
  const previousYearLabel = !isAllMode
    ? `${parseInt(selectedYear.split('/')[0]) - 1}/${parseInt(selectedYear.split('/')[1]) - 1}`
    : '';

  // Shared axis/tooltip props
  const xAxisProps = {
    dataKey: 'name' as const,
    angle: -45,
    textAnchor: 'end' as const,
    interval: 0 as const,
    tickMargin: 10,
    tick: { fontSize: 10, fill: 'currentColor' },
    stroke: 'currentColor',
    className: 'text-gray-600 dark:text-gray-400',
  };

  const yAxisProps = {
    tick: { fontSize: 12, fill: 'currentColor' },
    stroke: 'currentColor',
    className: 'text-gray-600 dark:text-gray-400',
  };

  const renderTooltip = (
    <Tooltip
      content={({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-md max-h-64 overflow-y-auto">
              <p className="font-medium text-foreground">{label}</p>
              {payload.map((entry, index) => (
                <p key={index} style={{ color: entry.color }} className="text-sm">
                  {entry.name}: {(entry.value as number).toFixed(3)} MCM
                </p>
              ))}
            </div>
          );
        }
        return null;
      }}
    />
  );

  const renderReferenceLine = currentMonthName && viewMode === 'cumulative' ? (
    <ReferenceLine
      x={currentMonthName}
      stroke="#f59e0b"
      strokeDasharray="4 4"
      strokeWidth={2}
      label={{ value: '\u25BC', position: 'top', fill: '#f59e0b', fontSize: 14 }}
    />
  ) : null;

  return (
    <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800 p-1 animate-fade-in">
      <CardHeader className="pb-2 px-3 sm:px-6">
        <CardTitle className="text-lg md:text-xl flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-water-500 dark:text-water-400" />
            <span>{t('monthlyInflow')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-0.5">
              <button
                onClick={() => setViewMode('cumulative')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'cumulative'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('cumulativeView')}
              </button>
              <button
                onClick={() => setViewMode('monthly')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'monthly'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('monthlyView')}
              </button>
            </div>
            <Select
              value={selectedYear}
              onValueChange={(value) => setSelectedYear(value)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder={t('selectYear')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_VALUE}>
                  {t('allSeasons')}
                </SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 sm:px-6">
        <div className={`${isAllMode ? 'h-[26rem] md:h-[29rem]' : 'h-64 md:h-72'} w-full mt-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

          {/* CUMULATIVE — Single Season */}
          {viewMode === 'cumulative' && !isAllMode && cumulativeSingleData.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeSingleData} margin={{ top: 10, right: 5, left: 0, bottom: 30 }}>
                <defs>
                  <linearGradient id="currentYearGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis {...xAxisProps} />
                <YAxis {...yAxisProps} />
                {renderTooltip}
                {renderReferenceLine}
                <Area type="monotone" dataKey="currentYear" name={`${t('yearLabel')} ${selectedYear}`} stroke="#0ea5e9" strokeWidth={2.5} fill="url(#currentYearGradient)" animationDuration={1000} />
                <Area type="monotone" dataKey="previousYear" name={`${t('yearLabel')} ${previousYearLabel}`} stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 3" fill="none" animationDuration={1000} />
              </AreaChart>
            </ResponsiveContainer>
          )}

          {/* CUMULATIVE — All Seasons */}
          {viewMode === 'cumulative' && isAllMode && cumulativeAllData.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeAllData} margin={{ top: 10, right: 5, left: 0, bottom: 30 }}>
                <defs>
                  <linearGradient id="latestYearGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={SEASON_COLORS[0]} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={SEASON_COLORS[0]} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <XAxis {...xAxisProps} />
                <YAxis {...yAxisProps} />
                {renderTooltip}
                {renderReferenceLine}
                {years.map((year, i) => (
                  <Area
                    key={year}
                    type="monotone"
                    dataKey={year}
                    name={year}
                    stroke={SEASON_COLORS[i % SEASON_COLORS.length]}
                    strokeWidth={i === 0 ? 2.5 : 1.5}
                    strokeDasharray={i === 0 ? undefined : '4 2'}
                    fill={i === 0 ? 'url(#latestYearGradient)' : 'none'}
                    animationDuration={1000}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          )}

          {/* MONTHLY — Single Season (bars) */}
          {viewMode === 'monthly' && !isAllMode && singleSeasonData.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={singleSeasonData} margin={{ top: 10, right: 5, left: 0, bottom: 30 }}>
                <XAxis {...xAxisProps} />
                <YAxis {...yAxisProps} />
                {renderTooltip}
                <Bar dataKey="currentYear" name={`${t('yearLabel')} ${selectedYear}`} fill="#0ea5e9" radius={[4, 4, 0, 0]} animationDuration={1000} />
                <Bar dataKey="previousYear" name={`${t('yearLabel')} ${previousYearLabel}`} fill="#94a3b8" radius={[4, 4, 0, 0]} animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          )}

          {/* MONTHLY — All Seasons (lines, since bars would be unreadable) */}
          {viewMode === 'monthly' && isAllMode && allSeasonsData.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={allSeasonsData} margin={{ top: 10, right: 5, left: 0, bottom: 30 }}>
                <XAxis {...xAxisProps} />
                <YAxis {...yAxisProps} />
                {renderTooltip}
                {years.map((year, i) => (
                  <Line
                    key={year}
                    type="monotone"
                    dataKey={year}
                    name={year}
                    stroke={SEASON_COLORS[i % SEASON_COLORS.length]}
                    strokeWidth={i === 0 ? 2.5 : 1.5}
                    strokeDasharray={i === 0 ? undefined : '4 2'}
                    dot={false}
                    animationDuration={1000}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Custom legend rendered outside chart to avoid overlap with X-axis labels */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2 text-xs px-3 sm:px-0">
          {!isAllMode ? (
            <>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-4 h-0.5 bg-[#0ea5e9] rounded" />
                <span className="text-muted-foreground">{t('yearLabel')} {selectedYear}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-4 h-0.5 bg-[#94a3b8] rounded" style={{ borderTop: '2px dashed #94a3b8', height: 0 }} />
                <span className="text-muted-foreground">{t('yearLabel')} {previousYearLabel}</span>
              </div>
            </>
          ) : (
            years.map((year, i) => (
              <div key={year} className="flex items-center gap-1.5">
                <span className="inline-block w-4 h-0.5 rounded" style={{ backgroundColor: SEASON_COLORS[i % SEASON_COLORS.length] }} />
                <span className="text-muted-foreground">{year}</span>
              </div>
            ))
          )}
        </div>

        {!isAllMode && (
          <div className="flex items-center justify-end mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="text-sm font-medium text-water-600 dark:text-water-400">
              {t('totalLabel')}: {yearlyInflowData().find(d => d.year === selectedYear)?.total.toFixed(3)} MCM
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MonthlyInflow;
