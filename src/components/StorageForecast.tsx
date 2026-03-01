import React, { useMemo, useEffect, useState } from 'react';
import { getForecastForSelection, getStorageForKeys, MAIN_RES_KEYS, REGION_KEYS, MAJOR_DAM_KEYS } from '@/utils/dataManager';
import { HistoricalStorageEntry } from '@/utils/historicalStorageData';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { TrendingDown, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  AreaChart, Area,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer, ReferenceLine
} from 'recharts';

const PHASE_COLORS = {
  declining: '#ef4444',
  trough: '#dc2626',
  recovering: '#22c55e',
  peak: '#3b82f6',
};

const PHASE_LABELS: Record<string, Record<string, string>> = {
  declining: { en: 'Declining', el: 'Πτωτική', ru: 'Снижение' },
  trough: { en: 'Trough', el: 'Ελάχιστο', ru: 'Минимум' },
  recovering: { en: 'Recovering', el: 'Ανάκαμψη', ru: 'Восстановление' },
  peak: { en: 'Peak', el: 'Μέγιστο', ru: 'Максимум' },
};

const SCENARIO_LABELS: Record<string, Record<string, string>> = {
  drought: { en: 'Drought continues', el: 'Συνέχιση ξηρασίας', ru: 'Засуха продолжается' },
  expected: { en: 'Expected', el: 'Αναμενόμενο', ru: 'Ожидаемое' },
  recovery: { en: 'Recovery', el: 'Ανάκαμψη', ru: 'Восстановление' },
};

// Dropdown option definitions
interface ForecastOption {
  id: string;
  keys: (keyof HistoricalStorageEntry)[];
  thresholdPct: number;
}

const ALL_OPTION: ForecastOption = { id: 'all', keys: MAIN_RES_KEYS, thresholdPct: 7 };

const REGION_OPTIONS: ForecastOption[] = Object.entries(REGION_KEYS).map(([name, keys]) => ({
  id: name,
  keys,
  thresholdPct: 7,
}));

const DAM_OPTIONS: ForecastOption[] = MAJOR_DAM_KEYS.map(key => ({
  id: key as string,
  keys: [key],
  thresholdPct: 7,
}));

// Dam key → capacity lookup (filled at render time from live data)
const DAM_DISPLAY_NAMES: Record<string, Record<string, string>> = {
  kouris: { en: 'Kouris', el: 'Κούρης', ru: 'Курис' },
  asprokremmos: { en: 'Asprokremmos', el: 'Ασπρόκρεμμος', ru: 'Аспрокреммос' },
  evretou: { en: 'Evretou', el: 'Ευρέτου', ru: 'Эвретоу' },
  kannaviou: { en: 'Kannaviou', el: 'Κανναβιού', ru: 'Каннавиу' },
};

const REGION_DISPLAY_NAMES: Record<string, Record<string, string>> = {
  'Southern Conveyor': { en: 'Southern Conveyor', el: 'Νότιος Αγωγός', ru: 'Южный Конвейер' },
  'Paphos': { en: 'Paphos', el: 'Πάφος', ru: 'Пафос' },
  'Chrysochou': { en: 'Chrysochou', el: 'Χρυσοχού', ru: 'Хрисоху' },
  'Nicosia': { en: 'Nicosia', el: 'Λευκωσία', ru: 'Никосия' },
};

function getAllOptions(): ForecastOption[] {
  return [ALL_OPTION, ...REGION_OPTIONS, ...DAM_OPTIONS];
}

function getOptionById(id: string): ForecastOption {
  return getAllOptions().find(o => o.id === id) ?? ALL_OPTION;
}

interface StorageForecastProps {
  selectionId?: string;
}

const StorageForecast: React.FC<StorageForecastProps> = ({ selectionId: fixedSelectionId }) => {
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(fixedSelectionId ?? 'all');
  const isFixed = fixedSelectionId !== undefined;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const selectedOption = getOptionById(selectedId);

  // Get capacities for dam labels
  const damCapacities = useMemo(() => {
    const caps: Record<string, number> = {};
    for (const key of MAJOR_DAM_KEYS) {
      const { capacity } = getStorageForKeys([key], currentDataSetId);
      caps[key as string] = capacity;
    }
    return caps;
  }, [currentDataSetId]);

  const forecast = useMemo(() => {
    return getForecastForSelection(selectedOption.id, selectedOption.thresholdPct, currentDataSetId);
  }, [currentDataSetId, selectedOption.id, selectedOption.thresholdPct]);

  // Subsample trajectories for chart (every 2nd point to reduce density)
  const chartData = useMemo(() => {
    if (!forecast.trajectories.length) return [];
    return forecast.trajectories.filter((_, i) => i % 2 === 0 || i === forecast.trajectories.length - 1);
  }, [forecast]);

  // Find the index where forecast starts (first point where scenarios diverge)
  const forecastStartIdx = useMemo(() => {
    for (let i = 1; i < chartData.length; i++) {
      if (Math.abs(chartData[i].drought - chartData[i].expected) > 0.5) {
        return i;
      }
    }
    return 0;
  }, [chartData]);

  const forecastStartMonth = chartData[forecastStartIdx]?.month ?? '';

  const phaseLabel = PHASE_LABELS[forecast.cyclePhase]?.[language] ?? forecast.cyclePhase;
  const phaseColor = PHASE_COLORS[forecast.cyclePhase];

  const yearLabel = forecast.yearsInPhase === 1
    ? (language === 'en' ? '1 year' : language === 'el' ? '1 έτος' : '1 год')
    : (language === 'en' ? `${forecast.yearsInPhase} years` : language === 'el' ? `${forecast.yearsInPhase} έτη` : `${forecast.yearsInPhase} года`);

  // Custom tick formatter: show only every Nth label for readability
  const formatXTick = (value: string, index: number) => {
    if (index % 12 === 0) return value;
    return '';
  };

  return (
    <Card className={`bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800 p-1 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <CardHeader className="pb-2 px-3 sm:px-6">
        <CardTitle className="text-lg md:text-xl flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-water-500 dark:text-water-400" />
            <span>{t('storageForecast')}</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {!isFixed && (
              <Select value={selectedId} onValueChange={setSelectedId}>
                <SelectTrigger className="w-[200px] h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('allMainReservoirs')}</SelectItem>
                  <SelectGroup>
                    <SelectLabel className="text-xs">{t('regions')}</SelectLabel>
                    {REGION_OPTIONS.map(opt => (
                      <SelectItem key={opt.id} value={opt.id}>
                        {REGION_DISPLAY_NAMES[opt.id]?.[language] ?? opt.id}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel className="text-xs">{t('majorDams')}</SelectLabel>
                    {DAM_OPTIONS.map(opt => (
                      <SelectItem key={opt.id} value={opt.id}>
                        {DAM_DISPLAY_NAMES[opt.id]?.[language] ?? opt.id} ({damCapacities[opt.id]?.toFixed(1)} MCM)
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: phaseColor }}
            >
              {phaseLabel} ({yearLabel})
            </span>
            {forecast.analogYears.length > 0 && (
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {language === 'en' ? 'Similar to' : language === 'el' ? 'Ανάλογο με' : 'Аналогичные'}: {forecast.analogYears.slice(0, 3).join(', ')}
              </span>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-1 sm:px-4">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2 px-2 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-red-500 rounded" />
            <span className="text-muted-foreground">{SCENARIO_LABELS.drought[language]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-blue-500 rounded" />
            <span className="text-muted-foreground">{SCENARIO_LABELS.expected[language]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-emerald-500 rounded" />
            <span className="text-muted-foreground">{SCENARIO_LABELS.recovery[language]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 border-t-2 border-dashed border-red-500 rounded" />
            <span className="text-muted-foreground">{t('restrictionThreshold')} ({forecast.restrictionThresholdPct}%)</span>
          </div>
        </div>

        {/* Chart */}
        <div className="h-64 md:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 5, left: 0, bottom: 30 }}
            >
              <defs>
                <linearGradient id="recoveryGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expectedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="droughtGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                angle={-45}
                textAnchor="end"
                interval={0}
                tickFormatter={formatXTick}
                tickMargin={10}
                tick={{ fontSize: 10, fill: 'currentColor' }}
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-400"
              />
              <YAxis
                tick={{ fontSize: 12, fill: 'currentColor' }}
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-400"
                label={{ value: 'MCM', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: 'currentColor' } }}
              />

              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-md">
                        <p className="font-medium text-foreground text-sm">{label}</p>
                        {payload.map((entry, index) => (
                          <p key={index} style={{ color: entry.color }} className="text-xs">
                            {entry.name}: {(entry.value as number).toFixed(1)} MCM
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return null;
                }}
              />

              {/* Forecast start reference line */}
              {forecastStartMonth && (
                <ReferenceLine
                  x={forecastStartMonth}
                  stroke="#f59e0b"
                  strokeDasharray="4 4"
                  strokeWidth={1.5}
                  label={{ value: '\u25BC', position: 'top', fill: '#f59e0b', fontSize: 12 }}
                />
              )}

              {/* Restriction threshold line */}
              <ReferenceLine
                y={forecast.restrictionThresholdMCM}
                stroke="#dc2626"
                strokeDasharray="6 3"
                strokeWidth={1.5}
                label={{
                  value: `${forecast.restrictionThresholdPct}%`,
                  position: 'right',
                  fill: '#dc2626',
                  fontSize: 10,
                }}
              />

              {/* Recovery (top) */}
              <Area
                type="monotone"
                dataKey="recovery"
                name={SCENARIO_LABELS.recovery[language]}
                stroke="#22c55e"
                fill="url(#recoveryGrad)"
                strokeWidth={1.5}
                dot={false}
                animationDuration={1000}
              />

              {/* Expected (middle) */}
              <Area
                type="monotone"
                dataKey="expected"
                name={SCENARIO_LABELS.expected[language]}
                stroke="#3b82f6"
                fill="url(#expectedGrad)"
                strokeWidth={2}
                dot={false}
                animationDuration={1000}
              />

              {/* Drought (bottom) */}
              <Area
                type="monotone"
                dataKey="drought"
                name={SCENARIO_LABELS.drought[language]}
                stroke="#ef4444"
                fill="url(#droughtGrad)"
                strokeWidth={1.5}
                dot={false}
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Restriction date summary */}
        <div className="grid grid-cols-3 gap-2 mt-3 px-2">
          <RestrictionDateCard
            label={SCENARIO_LABELS.drought[language]}
            date={forecast.droughtRestriction}
            color="text-red-600 dark:text-red-400"
            language={language}
            t={t}
          />
          <RestrictionDateCard
            label={SCENARIO_LABELS.expected[language]}
            date={forecast.expectedRestriction}
            color="text-blue-600 dark:text-blue-400"
            language={language}
            t={t}
          />
          <RestrictionDateCard
            label={SCENARIO_LABELS.recovery[language]}
            date={forecast.recoveryRestriction}
            color="text-emerald-600 dark:text-emerald-400"
            language={language}
            t={t}
          />
        </div>

        {/* Methodology note */}
        <div className="flex items-start gap-1.5 mt-3 px-2 text-[10px] text-muted-foreground">
          <Info className="h-3 w-3 mt-0.5 shrink-0" />
          <span>
            {language === 'en'
              ? `Based on 38-year historical storage patterns. Cards show when storage drops below ${forecast.restrictionThresholdPct}% capacity — the point where water restrictions typically begin.`
              : language === 'el'
                ? `Βασισμένο σε 38ετή ιστορικά δεδομένα. Οι κάρτες δείχνουν πότε η αποθήκευση πέφτει κάτω από ${forecast.restrictionThresholdPct}% — το σημείο όπου συνήθως αρχίζουν οι περιορισμοί νερού.`
                : `На основе 38-летних данных. Карточки показывают, когда запас падает ниже ${forecast.restrictionThresholdPct}% — порог введения ограничений водоснабжения.`}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

// Sub-component for restriction date display
const RestrictionDateCard: React.FC<{
  label: string;
  date: string;
  color: string;
  language: string;
  t: (key: string) => string;
}> = ({ label, date, color, language, t }) => {
  const isNotRestricted = date === 'Not Restricted';
  const isAlreadyRestricted = date === 'Already Restricted';
  const displayDate = isNotRestricted
    ? t('notRestricted')
    : isAlreadyRestricted
      ? t('alreadyRestricted')
      : date;

  const cardLabel = language === 'en' ? 'Forecasted Restrictions' : language === 'el' ? 'Πρόβλεψη Περιορισμών' : 'Прогноз ограничений';

  return (
    <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
      <div className="text-[10px] text-muted-foreground mb-0.5">{label}</div>
      <div className="text-[9px] text-muted-foreground mb-1">{cardLabel}</div>
      <div className={`text-sm font-semibold ${isNotRestricted ? 'text-emerald-600 dark:text-emerald-400' : color}`}>
        {displayDate}
      </div>
    </div>
  );
};

export default StorageForecast;
