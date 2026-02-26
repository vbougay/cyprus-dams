"use client";

import React, { useState, useEffect, useRef } from 'react';
import { toBlob } from 'html-to-image';
import { ReservoirCard, CapacityChart, MonthlyInflow } from '@/components';
import StorageForecast from '@/components/StorageForecast';
import HistoricalHeatmapStatic from '@/components/HistoricalHeatmapStatic';
import MediaHeader from '@/components/MediaHeader';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import {
  getReservoirsWithDrainDates,
  calculateRegionTotals,
  calculateGrandTotal,
  yearlyInflowData,
  getReportDate,
  getOctoberBaselineStorage
} from '@/utils/dataManager';
import { calculateYTDInflow, calculateYTDOutflow, YTDInflowResult, YTDOutflowResult } from '@/utils/reservoirUtils';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { RegionTotal, Reservoir } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Database, BarChart, Timer, TrendingUp, TrendingDown } from 'lucide-react';

interface MediaClientProps {
  initialReservoirs: Reservoir[];
  initialRegionTotals: RegionTotal[];
  initialGrandTotal: RegionTotal;
  initialYtdInflow: YTDInflowResult | null;
  initialYtdOutflow: YTDOutflowResult | null;
}

export function MediaClient({
  initialReservoirs,
  initialRegionTotals,
  initialGrandTotal,
  initialYtdInflow,
  initialYtdOutflow,
}: MediaClientProps) {
  const [regionTotals, setRegionTotals] = useState<RegionTotal[]>(initialRegionTotals);
  const [grandTotal, setGrandTotal] = useState<RegionTotal | null>(initialGrandTotal);
  const [reservoirs, setReservoirs] = useState<Reservoir[]>(initialReservoirs);
  const [ytdInflow, setYtdInflow] = useState<YTDInflowResult | null>(initialYtdInflow);
  const [ytdOutflow, setYtdOutflow] = useState<YTDOutflowResult | null>(initialYtdOutflow);
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentDataSetId, availableDataSets } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const captureRef = useRef<HTMLDivElement>(null);

  const currentIndex = availableDataSets.findIndex(ds => ds.id === currentDataSetId);
  const currentDataSet = availableDataSets[currentIndex];

  useEffect(() => {
    const totals = calculateRegionTotals(currentDataSetId);
    setRegionTotals(totals);

    const total = calculateGrandTotal(currentDataSetId);
    setGrandTotal(total);

    const reservoirsWithDrainDates = getReservoirsWithDrainDates(currentDataSetId);
    setReservoirs(reservoirsWithDrainDates);

    const inflowData = yearlyInflowData(currentDataSetId);
    const reportDate = getReportDate(currentDataSetId);
    const inflow = calculateYTDInflow(inflowData, reportDate);
    setYtdInflow(inflow);

    const octBaseline = getOctoberBaselineStorage(currentDataSetId);
    if (inflow && octBaseline && total) {
      setYtdOutflow(calculateYTDOutflow(total, inflow, octBaseline));
    } else {
      setYtdOutflow(null);
    }
  }, [currentDataSetId]);

  const handleDownload = async () => {
    if (!captureRef.current) return;
    setIsDownloading(true);
    try {
      captureRef.current.classList.add('capturing');
      const blob = await toBlob(captureRef.current, {
        pixelRatio: 1,
        cacheBust: true,
      });
      captureRef.current.classList.remove('capturing');
      if (!blob) throw new Error('Failed to create image blob');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `fragmata-${currentDataSet?.label || 'dashboard'}.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      captureRef.current?.classList.remove('capturing');
      console.error('Screenshot failed:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div ref={captureRef} className="media-mode bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
        <MediaHeader
          dateLabel={currentDataSet?.label || ''}
          dataSetId={currentDataSet?.id}
        />

        <main className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-8">
            <Card className="glass-card flex rounded-2xl overflow-hidden glow-effect">
              <div className="stat-card-icon flex-none p-3 sm:p-4">
                <Droplets className="h-6 w-6 sm:h-8 sm:w-8 text-water-600 dark:text-water-400" />
              </div>
              <CardContent className="flex flex-col justify-center p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-muted-foreground">{t('totalCapacity')}</div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">{grandTotal?.capacity.toFixed(1)} MCM</div>
              </CardContent>
            </Card>

            <Card className="glass-card flex rounded-2xl overflow-hidden glow-effect">
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

            <Card className="glass-card flex rounded-2xl overflow-hidden glow-effect">
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

            <Card className="glass-card flex rounded-2xl overflow-hidden glow-effect">
              <div className="stat-card-icon flex-none p-3 sm:p-4">
                <Timer className="h-6 w-6 sm:h-8 sm:w-8 text-water-600 dark:text-water-400" />
              </div>
              <CardContent className="flex flex-col justify-center p-3 sm:p-4 w-full">
                <div className="text-xs sm:text-sm text-muted-foreground">{t('forecastedDrainDate')}</div>
                <div className="text-lg sm:text-2xl font-bold">
                  <span className={`
                    ${grandTotal?.drainDate === 'Already Empty' ? 'text-red-500 dark:text-red-400' : ''}
                    ${grandTotal?.drainDate === 'Not Draining' ? 'text-green-500 dark:text-green-400' : ''}
                    ${grandTotal?.drainDate === 'Beyond 10 Years' ? 'text-green-500 dark:text-green-400' : ''}
                    ${!['Already Empty', 'Not Draining', 'Beyond 10 Years'].includes(grandTotal?.drainDate || '') ? 'text-amber-500 dark:text-amber-400' : ''}
                  `}>
                    {grandTotal?.drainDate || 'Calculating...'}
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3">
              {ytdInflow && (
                <Card className="glass-card flex rounded-2xl overflow-hidden glow-effect flex-1">
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
                <Card className="glass-card flex rounded-2xl overflow-hidden glow-effect flex-1">
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

          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-tight mb-4">
                <Droplets className="h-5 w-5 text-water-500 dark:text-water-400" />
                <span>{t('overallStatus')}</span>
              </h3>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {grandTotal && (
                  <div className="flex-shrink-0">
                    <CapacityChart data={grandTotal} />
                  </div>
                )}
                <div className="flex-1 min-w-0 overflow-x-auto">
                  <HistoricalHeatmapStatic years={10} bare />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {reservoirs
                .sort((a, b) => b.capacity - a.capacity)
                .slice(0, 4)
                .map((reservoir) => (
                  <ReservoirCard key={reservoir.name} reservoir={reservoir} />
                ))}
            </div>

            <MonthlyInflow />

            <StorageForecast />
          </div>
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-800 py-6 bg-white/95 dark:bg-gray-900/95">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p><a href="https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument" className="hover:text-water-600 dark:hover:text-water-400 transition-colors">{t('dataFrom')}</a></p>
          </div>
        </footer>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          size="lg"
          className="bg-water-600 hover:bg-water-700 text-white rounded-xl px-6 py-3 shadow-lg transition-colors"
        >
          {isDownloading ? (
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
          ) : (
            <Download className="h-5 w-5 mr-2" />
          )}
          {isDownloading ? t('downloading') : t('downloadImage')}
        </Button>
      </div>
    </div>
  );
}
