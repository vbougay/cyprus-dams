"use client";

import React, { useState, useRef } from 'react';
import { toBlob } from 'html-to-image';
import { ReservoirCard, CapacityChart, MonthlyInflow } from '@/components';
import StorageForecast from '@/components/StorageForecast';
import HistoricalHeatmapStatic from '@/components/HistoricalHeatmapStatic';
import MediaHeader from '@/components/MediaHeader';
import { StatCardGrid } from '@/components/StatCardGrid';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Droplets } from 'lucide-react';
import { YTDInflowResult, YTDOutflowResult } from '@/utils/reservoirUtils';
import { useReservoirData } from '@/hooks/useReservoirData';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { RegionTotal, Reservoir } from '@/types';

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
  const [isDownloading, setIsDownloading] = useState(false);
  const { currentDataSetId, availableDataSets } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const captureRef = useRef<HTMLDivElement>(null);
  const { regionTotals, grandTotal, reservoirs, ytdInflow, ytdOutflow } = useReservoirData(
    currentDataSetId,
    false,
    { reservoirs: initialReservoirs, regionTotals: initialRegionTotals, grandTotal: initialGrandTotal, ytdInflow: initialYtdInflow, ytdOutflow: initialYtdOutflow }
  );

  const currentIndex = availableDataSets.findIndex(ds => ds.id === currentDataSetId);
  const currentDataSet = availableDataSets[currentIndex];

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
          <StatCardGrid grandTotal={grandTotal} ytdInflow={ytdInflow} ytdOutflow={ytdOutflow} t={t} drainDateLabel={t('forecastedDrainDate')} />

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
