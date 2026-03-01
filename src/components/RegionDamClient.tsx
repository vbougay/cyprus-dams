"use client";

import React, { useMemo, useState, useRef } from 'react';
import { toBlob } from 'html-to-image';
import { Header, ReservoirCard, HistoricalHeatmap } from '@/components';
import { getAllSparklineData } from '@/utils/sparklineData';
import StorageForecast from '@/components/StorageForecast';
import MediaHeader from '@/components/MediaHeader';
import { StatCardGrid } from '@/components/StatCardGrid';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { useReservoirData } from '@/hooks/useReservoirData';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation, translations } from '@/utils/translations';
import { RegionTotal, ReservoirRegion, Reservoir } from '@/types';
import { YTDInflowResult, YTDOutflowResult } from '@/utils/reservoirUtils';
import { HistoricalStorageEntry } from '@/utils/historicalStorageData';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Download, Loader2, X } from 'lucide-react';
import Link from 'next/link';
import { getRegionSlugForDam, REGION_SLUG_MAP } from '@/utils/slugs';
import { defaultLocale } from '@/utils/locale';

interface RegionDamClientProps {
  type: 'region' | 'dam';
  mediaMode?: boolean;
  regionName?: ReservoirRegion;
  damName?: string;
  damKey?: keyof HistoricalStorageEntry;
  damSlug?: string;
  heatmapRegionKey?: string;
  forecastSelectionId?: string;
  initialReservoirs: Reservoir[];
  initialRegionTotals: RegionTotal[];
  initialGrandTotal: RegionTotal;
  initialYtdInflow: YTDInflowResult | null;
  initialYtdOutflow: YTDOutflowResult | null;
}

function reservoirToRegionTotal(r: Reservoir): RegionTotal {
  return {
    region: r.region,
    capacity: r.capacity,
    inflow: r.inflow,
    storage: r.storage,
    maxStorage: r.maxStorage,
    drainDate: r.drainDate,
    drainForecast: r.drainForecast,
  };
}

export function RegionDamClient({
  type,
  mediaMode,
  regionName,
  damName,
  damKey,
  damSlug,
  heatmapRegionKey,
  forecastSelectionId,
  initialReservoirs,
  initialRegionTotals,
  initialGrandTotal,
  initialYtdInflow,
  initialYtdOutflow,
}: RegionDamClientProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const captureRef = useRef<HTMLDivElement>(null);
  const { currentDataSetId, availableDataSets } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);

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
      const entitySlug = type === 'dam' ? damSlug : (heatmapRegionKey || 'region');
      link.download = `fragmata-${type}-${entitySlug}-${currentDataSet?.label || 'data'}.png`;
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

  const { regionTotals, reservoirs } = useReservoirData(
    currentDataSetId,
    true,
    {
      reservoirs: initialReservoirs,
      regionTotals: initialRegionTotals,
      grandTotal: initialGrandTotal,
      ytdInflow: initialYtdInflow,
      ytdOutflow: initialYtdOutflow,
    }
  );

  // Compute entity-specific data
  const entityData = useMemo(() => {
    if (type === 'region' && regionName) {
      const regionTotal = regionTotals.find(r => r.region === regionName) ?? null;
      const regionReservoirs = reservoirs.filter(r => r.region === regionName);
      return { regionTotal, regionReservoirs };
    } else if (type === 'dam' && damName) {
      const reservoir = reservoirs.find(r => r.name === damName) ?? null;
      const regionTotal = reservoir ? reservoirToRegionTotal(reservoir) : null;
      return { regionTotal, regionReservoirs: [] as Reservoir[] };
    }
    return { regionTotal: null, regionReservoirs: [] as Reservoir[] };
  }, [type, regionName, damName, regionTotals, reservoirs]);

  const { regionTotal, regionReservoirs } = entityData;

  // For region pages: sparkline for all dams in the region
  // For dam pages: sparkline for the single dam
  const sparklineMap = useMemo(() => {
    if (type === 'region') return getAllSparklineData(regionReservoirs);
    if (type === 'dam' && damName) {
      const dam = reservoirs.find(r => r.name === damName);
      return dam ? getAllSparklineData([dam]) : new Map();
    }
    return new Map();
  }, [type, regionReservoirs, damName, reservoirs]);

  if (!regionTotal) return null;

  const regionTranslationKey: Record<string, keyof typeof translations.en> = {
    'Southern Conveyor': 'southernConveyor',
    'Paphos': 'paphos',
    'Chrysochou': 'chrysochou',
    'Nicosia': 'nicosia',
    'Recharge/Other': 'rechargeOther',
  };

  const translateRegion = (name: string) => t(regionTranslationKey[name] ?? 'southernConveyor');

  // Compute translated display name for the heading
  const displayName = type === 'region' && regionName
    ? translateRegion(regionName)
    : type === 'dam' && damName
      ? t('damTitle').replace('{name}', translations[language][damName as keyof typeof translations.en] || damName)
      : '';

  // Breadcrumb data for dam pages
  const localePath = (path: string) =>
    language === defaultLocale ? (path || '/') : `/${language}${path}`;

  const regionSlug = damSlug ? getRegionSlugForDam(damSlug) : undefined;
  const breadcrumbRegionName = regionSlug ? REGION_SLUG_MAP[regionSlug] : undefined;
  const translatedRegionName = breadcrumbRegionName ? translateRegion(breadcrumbRegionName) : '';

  const content = (
    <div ref={mediaMode ? captureRef : undefined} className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300${mediaMode ? ' media-mode max-w-screen-xl mx-auto' : ''}`}>
      {mediaMode ? (
        <MediaHeader dateLabel={currentDataSet?.label || ''} dataSetId={currentDataSet?.id} entityName={displayName} />
      ) : (
        <Header />
      )}

      <main className={`container mx-auto px-4 ${mediaMode ? 'pb-6' : 'pb-16'}`}>
        {type === 'dam' && regionSlug && !mediaMode && (
          <Breadcrumb className="mb-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={localePath('/')}>{t('cyprus')}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={localePath(`/region/${regionSlug}`)}>{translatedRegionName}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{displayName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
        {!mediaMode && (
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {displayName}
          </h1>
        )}

        <StatCardGrid
          grandTotal={regionTotal}
          ytdInflow={null}
          ytdOutflow={null}
          t={t}
          animate={!mediaMode}
          compact={mediaMode}
          totalInflowSince={regionTotal.inflow.totalSince}
        />

        <div className={mediaMode ? 'space-y-4' : 'space-y-8'}>
          {/* Historical Heatmap */}
          <HistoricalHeatmap
            filterRegion={type === 'region' ? heatmapRegionKey : undefined}
            filterDamKey={type === 'dam' ? damKey : undefined}
            sparklineData={type === 'dam' && damName ? sparklineMap.get(damName) : undefined}
          />

          {/* Dam Cards (region pages only) */}
          {type === 'region' && regionReservoirs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {regionReservoirs
                .sort((a, b) => b.capacity - a.capacity)
                .map((reservoir) => (
                  <ReservoirCard
                    key={reservoir.name}
                    reservoir={reservoir}
                    sparklineData={sparklineMap.get(reservoir.name)}
                  />
                ))}
            </div>
          )}

          {/* Storage Forecast */}
          {forecastSelectionId ? (
            <StorageForecast selectionId={forecastSelectionId} />
          ) : (
            <div className="text-center text-sm text-muted-foreground py-8 bg-white/60 dark:bg-gray-900/60 rounded-2xl backdrop-blur-md">
              {t('forecastNotAvailable')}
            </div>
          )}
        </div>
      </main>

      <Footer hideLinks={mediaMode} />
    </div>
  );

  if (mediaMode) {
    const closeHref = localePath(
      type === 'dam' && damSlug ? `/dam/${damSlug}`
        : type === 'region' && regionSlug ? `/region/${regionSlug}`
        : '/'
    );
    return (
      <div className="min-h-screen">
        {content}
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
            <Link href={closeHref}>
              <X className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return content;
}
