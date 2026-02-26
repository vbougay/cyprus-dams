import React from 'react';
import { RegionTotal } from '@/types';
import { YTDInflowResult, YTDOutflowResult, getDrainDateColor, getDrainDateText } from '@/utils/reservoirUtils';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Database, BarChart, Timer, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardGridProps {
  grandTotal: RegionTotal | null;
  ytdInflow: YTDInflowResult | null;
  ytdOutflow: YTDOutflowResult | null;
  t: (key: string) => string;
  animate?: boolean;
  drainDateLabel?: string;
}

export function StatCardGrid({
  grandTotal,
  ytdInflow,
  ytdOutflow,
  t,
  animate = false,
  drainDateLabel,
}: StatCardGridProps) {
  const anim = animate ? 'animate-fade-in' : '';
  const delay = (ms: number) => animate ? { animationDelay: `${ms}ms` } : undefined;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-8">
      <Card className={`glass-card flex rounded-2xl overflow-hidden ${anim} glow-effect`}>
        <div className="stat-card-icon flex-none p-3 sm:p-4">
          <Droplets className="h-6 w-6 sm:h-8 sm:w-8 text-water-600 dark:text-water-400" />
        </div>
        <CardContent className="flex flex-col justify-center p-3 sm:p-4">
          <div className="text-xs sm:text-sm text-muted-foreground">{t('totalCapacity')}</div>
          <div className="text-lg sm:text-2xl font-bold text-foreground">{grandTotal?.capacity.toFixed(1)} MCM</div>
        </CardContent>
      </Card>

      <Card className={`glass-card flex rounded-2xl overflow-hidden ${anim} glow-effect`} style={delay(100)}>
        <div className="stat-card-icon flex-none p-3 sm:p-4">
          <Database className="h-6 w-6 sm:h-8 sm:w-8 text-water-600 dark:text-water-400" />
        </div>
        <CardContent className="flex flex-col justify-center p-3 sm:p-4">
          <div className="text-xs sm:text-sm text-muted-foreground">{t('currentStorage')}</div>
          <div className="text-lg sm:text-2xl font-bold text-foreground">
            {grandTotal?.storage.current.amount.toFixed(1)} MCM
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            ({grandTotal?.storage.current.percentage.toFixed(1)}%)
          </div>
        </CardContent>
      </Card>

      <Card className={`glass-card flex rounded-2xl overflow-hidden ${anim} glow-effect`} style={delay(200)}>
        <div className="stat-card-icon flex-none p-3 sm:p-4">
          <BarChart className="h-6 w-6 sm:h-8 sm:w-8 text-water-600 dark:text-water-400" />
        </div>
        <CardContent className="flex flex-col justify-center p-3 sm:p-4">
          <div className="text-xs sm:text-sm text-muted-foreground">{t('vsLastYear')}</div>
          <div className="text-lg sm:text-2xl font-bold text-foreground">
            {((grandTotal?.storage.current.percentage || 0) - (grandTotal?.storage.lastYear.percentage || 0)).toFixed(1)}%
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            {t('change')}
          </div>
        </CardContent>
      </Card>

      <Card className={`glass-card flex rounded-2xl overflow-hidden ${anim} glow-effect`} style={delay(300)}>
        <div className="stat-card-icon flex-none p-3 sm:p-4">
          <Timer className="h-6 w-6 sm:h-8 sm:w-8 text-water-600 dark:text-water-400" />
        </div>
        <CardContent className="flex flex-col justify-center p-3 sm:p-4 w-full">
          <div className="text-xs sm:text-sm text-muted-foreground">{drainDateLabel || t('restrictionsBy')}</div>
          <div className="text-lg sm:text-2xl font-bold">
            <span className={getDrainDateColor(grandTotal?.drainDate)}>
              {getDrainDateText(grandTotal?.drainDate, t)}
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3">
        {ytdInflow && (
          <Card className={`glass-card flex rounded-2xl overflow-hidden ${anim} glow-effect flex-1`} style={delay(400)}>
            <div className="stat-card-icon flex-none p-2 sm:p-3">
              <TrendingUp className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            </div>
            <CardContent className="flex flex-col justify-center p-2 min-w-0">
              <div className="text-xs text-muted-foreground">{t('ytdInflow')}</div>
              <div className="text-sm font-bold text-foreground">
                {ytdInflow.currentYTD.toFixed(1)} MCM
                {ytdInflow.percentChange !== null && (
                  <span className={`text-xs font-semibold ml-1 ${ytdInflow.percentChange >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                    {ytdInflow.percentChange >= 0 ? '+' : ''}{ytdInflow.percentChange.toFixed(0)}%
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {ytdOutflow && (
          <Card className={`glass-card flex rounded-2xl overflow-hidden ${anim} glow-effect flex-1`} style={delay(500)}>
            <div className="stat-card-icon flex-none p-2 sm:p-3">
              <TrendingDown className="h-5 w-5 text-orange-500 dark:text-orange-400" />
            </div>
            <CardContent className="flex flex-col justify-center p-2 min-w-0">
              <div className="text-xs text-muted-foreground">{t('ytdOutflow')}</div>
              <div className="text-sm font-bold text-foreground">
                {ytdOutflow.currentOutflow.toFixed(1)} MCM
                {ytdOutflow.percentChange !== null && (
                  <span className={`text-xs font-semibold ml-1 ${ytdOutflow.percentChange <= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                    {ytdOutflow.percentChange >= 0 ? '+' : ''}{ytdOutflow.percentChange.toFixed(0)}%
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
