"use client";

import React, { useState, useRef } from 'react';
import { toBlob } from 'html-to-image';
import { ReservoirCard } from '@/components';
import StorageForecast from '@/components/StorageForecast';
import HistoricalHeatmapStatic from '@/components/HistoricalHeatmapStatic';
import MediaHeader from '@/components/MediaHeader';
import { StatCardGrid } from '@/components/StatCardGrid';
import { Button } from '@/components/ui/button';
import { Download, Loader2, X } from 'lucide-react';
import Link from 'next/link';
import { YTDInflowResult, YTDOutflowResult } from '@/utils/reservoirUtils';
import { useReservoirData } from '@/hooks/useReservoirData';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { RegionTotal, Reservoir } from '@/types';
import { defaultLocale } from '@/utils/locale';
import Footer from '@/components/Footer';

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
      <div ref={captureRef} className="media-mode max-w-screen-xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
        <MediaHeader
          dateLabel={currentDataSet?.label || ''}
          dataSetId={currentDataSet?.id}
          entityName={t('cyprus')}
        />

        <main className="container mx-auto px-4 pb-6">
          <StatCardGrid grandTotal={grandTotal} ytdInflow={ytdInflow} ytdOutflow={ytdOutflow} t={t} compact drainDateLabel={t('forecastedDrainDate')} />

          <div className="space-y-4">
            <HistoricalHeatmapStatic years={10} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {reservoirs
                .sort((a, b) => b.capacity - a.capacity)
                .slice(0, 4)
                .map((reservoir) => (
                  <ReservoirCard key={reservoir.name} reservoir={reservoir} />
                ))}
            </div>

            <StorageForecast selectionId="all" />
          </div>
        </main>

        <Footer hideLinks />
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
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
        <Button asChild size="lg" className="bg-gray-600 hover:bg-gray-700 text-white rounded-xl shadow-lg transition-colors h-12 w-12 p-0">
          <Link href={language === defaultLocale ? '/' : `/${language}`}>
            <X className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
