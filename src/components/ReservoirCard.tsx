
import React from 'react';
import { Reservoir } from '@/types';
import { CapacityChart } from '@/components';
import StorageSparkline from '@/components/StorageSparkline';
import { SparklineDataPoint, getSparklineExtremes } from '@/utils/sparklineData';
import { DropletIcon, Droplets, TrendingUp, Calendar, Timer, TrendingDown, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation, translations } from '@/utils/translations';
import { getDrainDateColor, getDrainDateText } from '@/utils/reservoirUtils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReservoirCardProps {
  reservoir: Reservoir;
  sparklineData?: SparklineDataPoint[];
}

const ReservoirCard: React.FC<ReservoirCardProps> = ({ reservoir, sparklineData }) => {
  const { name, capacity, inflow, storage, maxStorage, drainDate, region } = reservoir;
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  
  // Calculate storage difference compared to last year (in percentage points)
  const storageDifference = storage.current.percentage - storage.lastYear.percentage;
  
  // Determine if storage is increasing or decreasing compared to last year
  const isIncreasing = storageDifference > 0;
  
  return (
    <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span className="font-medium text-lg text-foreground">{translations[language][name as keyof typeof translations.en] || name}</span>
          <div className="flex items-center gap-1.5 text-xs font-normal bg-water-50 dark:bg-water-900/30 text-water-700 dark:text-water-300 px-2 py-1 rounded-full">
            <DropletIcon size={12} />
            <span>{capacity.toFixed(3)} MCM</span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="mb-4">
          <CapacityChart data={reservoir} />
        </div>

        <div className="card-details grid grid-cols-2 gap-2 mt-4 text-sm">
          <div className="flex flex-col bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
            <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <Droplets size={12} className="text-water-500 dark:text-water-400" />
              {t('recentInflow')}
            </div>
            <div className="font-mono text-foreground">{inflow.last24Hours.toFixed(3)} MCM</div>
          </div>

          <div className="flex flex-col bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
            <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <TrendingUp size={12} className="text-water-500 dark:text-water-400" />
              {t('totalInflow')}
            </div>
            <div className="font-mono text-foreground">{inflow.totalSince.toFixed(3)} MCM</div>
          </div>

          <div className="flex flex-col bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg col-span-2">
            {sparklineData && sparklineData.length > 0 ? (() => {
              const extremes = getSparklineExtremes(sparklineData);
              const formatShortDate = (iso: string) => {
                const d = new Date(iso);
                return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
              };
              return (
                <>
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Calendar size={12} className="text-water-500 dark:text-water-400" />
                    {t('history')}
                  </div>
                  {extremes && (
                    <div className="flex gap-3 font-mono text-xs">
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <ArrowUpCircle size={12} />
                        <span>{(extremes.max.percentage * capacity / 100).toFixed(3)}</span>
                        <span className="text-muted-foreground">{formatShortDate(extremes.max.date)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-red-500 dark:text-red-400">
                        <ArrowDownCircle size={12} />
                        <span>{(extremes.min.percentage * capacity / 100).toFixed(3)}</span>
                        <span className="text-muted-foreground">{formatShortDate(extremes.min.date)}</span>
                      </div>
                    </div>
                  )}
                  <div className="w-full h-[48px] mt-1">
                    <StorageSparkline
                      data={sparklineData}
                      highlightMax={extremes?.max}
                      highlightMin={extremes?.min}
                    />
                  </div>
                </>
              );
            })() : (
              <>
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} className="text-water-500 dark:text-water-400" />
                    {t('maxStorage')}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{maxStorage.date}</span>
                </div>
                <div className="font-mono text-foreground">{maxStorage.amount.toFixed(3)} MCM</div>
              </>
            )}
          </div>
        </div>

          <div className="card-drain-date flex flex-col bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg mt-2 text-sm">
            <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <Timer size={12} className="text-water-500 dark:text-water-400" />
              {t('restrictionsBy')}
            </div>
            <div className="font-mono flex justify-between">
              <span className={getDrainDateColor(drainDate)}>
                {getDrainDateText(drainDate, t)}
              </span>
            </div>
          </div>

      </CardContent>
    </Card>
  );
};

export default ReservoirCard;
