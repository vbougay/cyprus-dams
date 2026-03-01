"use client";

import React, { useMemo } from 'react';
import { Header, ReservoirCard, ReservoirTable, RegionSummary, MonthlyInflow, HistoricalHeatmap } from '@/components';
import { getAllSparklineData } from '@/utils/sparklineData';
import { NewsTicker } from '@/components/NewsTicker';
import ReservoirMapWrapper from '@/components/ReservoirMapWrapper';
import StorageForecast from '@/components/StorageForecast';
import { StatCardGrid } from '@/components/StatCardGrid';
import { YTDInflowResult, YTDOutflowResult } from '@/utils/reservoirUtils';
import { useReservoirData } from '@/hooks/useReservoirData';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { RegionTotal, ReservoirRegion, Reservoir } from '@/types';
import { Droplets } from 'lucide-react';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DashboardClientProps {
  initialReservoirs: Reservoir[];
  initialRegionTotals: RegionTotal[];
  initialGrandTotal: RegionTotal;
  initialYtdInflow: YTDInflowResult | null;
  initialYtdOutflow: YTDOutflowResult | null;
}

export function DashboardClient({
  initialReservoirs,
  initialRegionTotals,
  initialGrandTotal,
  initialYtdInflow,
  initialYtdOutflow,
}: DashboardClientProps) {
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { regionTotals, grandTotal, reservoirs, ytdInflow, ytdOutflow } = useReservoirData(
    currentDataSetId,
    true,
    { reservoirs: initialReservoirs, regionTotals: initialRegionTotals, grandTotal: initialGrandTotal, ytdInflow: initialYtdInflow, ytdOutflow: initialYtdOutflow }
  );

  const sparklineMap = useMemo(() => getAllSparklineData(reservoirs), [reservoirs]);

  const getReservoirs = (region: ReservoirRegion) => {
    return reservoirs.filter(reservoir => reservoir.region === region);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 pb-16">
        <StatCardGrid grandTotal={grandTotal} ytdInflow={ytdInflow} ytdOutflow={ytdOutflow} t={t} animate />

        <Tabs defaultValue="dashboard" className="mb-8 modern-tabs">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-4 mb-8 bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-xl p-1 border border-white/20 dark:border-white/10">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm rounded-lg transition-all">{t('dashboard')}</TabsTrigger>
            <TabsTrigger value="regions" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm rounded-lg transition-all">{t('byRegion')}</TabsTrigger>
            <TabsTrigger value="map" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm rounded-lg transition-all">{t('map')}</TabsTrigger>
            <TabsTrigger value="table" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm rounded-lg transition-all">{t('dataTable')}</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="animate-fade-in">
              <div className="space-y-8">
                <NewsTicker />
                <HistoricalHeatmap />
                <div>
                  <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-tight mb-4">
                    <Droplets className="h-5 w-5 text-water-500 dark:text-water-400" />
                    <span>{t('overallStatus')}</span>
                  </h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {grandTotal && (
                      <div className="w-full h-full">
                        <RegionSummary
                          regionTotal={grandTotal}
                          showReservoirs={false}
                          className="h-full"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {reservoirs
                        .sort((a, b) => b.capacity - a.capacity)
                        .slice(0, 4)
                        .map((reservoir) => (
                          <ReservoirCard key={reservoir.name} reservoir={reservoir} sparklineData={sparklineMap.get(reservoir.name)} />
                        ))}
                    </div>
                  </div>
                </div>

                <StorageForecast />
                <MonthlyInflow />
              </div>
          </TabsContent>

          <TabsContent value="regions" className="space-y-8 animate-fade-in">
              {regionTotals.filter(region => region.region !== 'Total').map((regionTotal) => (
                <RegionSummary key={regionTotal.region} regionTotal={regionTotal}>
                  {getReservoirs(regionTotal.region).map((reservoir) => (
                    <ReservoirCard key={reservoir.name} reservoir={reservoir} sparklineData={sparklineMap.get(reservoir.name)} />
                  ))}
                </RegionSummary>
              ))}
          </TabsContent>

          <TabsContent value="map" className="animate-fade-in">
            <ReservoirMapWrapper />
          </TabsContent>

          <TabsContent value="table" className="animate-fade-in">
            <ReservoirTable />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
