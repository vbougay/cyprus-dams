"use client";

import React, { useState, useEffect } from 'react';
import { Header, ReservoirCard, ReservoirTable, RegionSummary, MonthlyInflow, HistoricalHeatmap } from '@/components';
import { NewsTicker } from '@/components/NewsTicker';
import ReservoirMapWrapper from '@/components/ReservoirMapWrapper';
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
import { RegionTotal, ReservoirRegion, Reservoir } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Database, BarChart, Timer, TrendingUp, TrendingDown } from 'lucide-react';
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
  const [regionTotals, setRegionTotals] = useState<RegionTotal[]>(initialRegionTotals);
  const [grandTotal, setGrandTotal] = useState<RegionTotal | null>(initialGrandTotal);
  const [reservoirs, setReservoirs] = useState<Reservoir[]>(initialReservoirs);
  const [ytdInflow, setYtdInflow] = useState<YTDInflowResult | null>(initialYtdInflow);
  const [ytdOutflow, setYtdOutflow] = useState<YTDOutflowResult | null>(initialYtdOutflow);
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    // Re-compute data when dataset changes (skip initial render since we have SSR data)
    const totals = calculateRegionTotals();
    setRegionTotals(totals);

    const total = calculateGrandTotal();
    setGrandTotal(total);

    const reservoirsWithDrainDates = getReservoirsWithDrainDates();
    setReservoirs(reservoirsWithDrainDates);

    const inflowData = yearlyInflowData();
    const reportDate = getReportDate();
    const inflow = calculateYTDInflow(inflowData, reportDate);
    setYtdInflow(inflow);

    const octBaseline = getOctoberBaselineStorage();
    if (inflow && octBaseline && total) {
      setYtdOutflow(calculateYTDOutflow(total, inflow, octBaseline));
    } else {
      setYtdOutflow(null);
    }
  }, [currentDataSetId]);

  const getReservoirs = (region: ReservoirRegion) => {
    return reservoirs.filter(reservoir => reservoir.region === region);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-8">
          <Card className="glass-card flex rounded-2xl overflow-hidden animate-fade-in glow-effect">
            <div className="stat-card-icon flex-none p-3 sm:p-4">
              <Droplets className="h-6 w-6 sm:h-8 sm:w-8 text-water-600 dark:text-water-400" />
            </div>
            <CardContent className="flex flex-col justify-center p-3 sm:p-4">
              <div className="text-xs sm:text-sm text-muted-foreground">{t('totalCapacity')}</div>
              <div className="text-lg sm:text-2xl font-bold text-foreground">{grandTotal?.capacity.toFixed(1)} MCM</div>
            </CardContent>
          </Card>

          <Card className="glass-card flex rounded-2xl overflow-hidden animate-fade-in glow-effect" style={{ animationDelay: '100ms' }}>
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

          <Card className="glass-card flex rounded-2xl overflow-hidden animate-fade-in glow-effect" style={{ animationDelay: '200ms' }}>
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

          <Card className="glass-card flex rounded-2xl overflow-hidden animate-fade-in glow-effect" style={{ animationDelay: '300ms' }}>
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
              <Card className="glass-card flex rounded-2xl overflow-hidden animate-fade-in glow-effect flex-1" style={{ animationDelay: '400ms' }}>
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
              <Card className="glass-card flex rounded-2xl overflow-hidden animate-fade-in glow-effect flex-1" style={{ animationDelay: '500ms' }}>
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
                        <ReservoirCard key={reservoir.name} reservoir={reservoir} />
                      ))}
                  </div>
                </div>
              </div>

              <MonthlyInflow />
            </div>
          </TabsContent>

          <TabsContent value="regions" className="space-y-8 animate-fade-in">
            {regionTotals.filter(region => region.region !== 'Total').map((regionTotal) => (
              <RegionSummary key={regionTotal.region} regionTotal={regionTotal}>
                {getReservoirs(regionTotal.region).map((reservoir) => (
                  <ReservoirCard key={reservoir.name} reservoir={reservoir} />
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

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p><a href="https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument" className="hover:text-water-600 dark:hover:text-water-400 transition-colors">{t('dataFrom')}</a></p>
          <p className="mt-2">{t('contactMe')} <a href="mailto:v@bougay.com" className="hover:text-water-600 dark:hover:text-water-400 transition-colors">v@bougay.com</a></p>
        </div>
      </footer>
    </div>
  );
}
