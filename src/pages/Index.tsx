import React, { useState, useEffect } from 'react';
import { Header, ReservoirCard, ReservoirTable, RegionSummary, MonthlyInflow, ReservoirMap } from '@/components';
import { 
  getReservoirsWithDrainDates, 
  getReservoirsByRegion, 
  calculateRegionTotals, 
  calculateGrandTotal 
} from '@/utils/dataManager';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { RegionTotal, ReservoirRegion, Reservoir } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Database, BarChart, Map, Timer } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index: React.FC = () => {
  const [regionTotals, setRegionTotals] = useState<RegionTotal[]>([]);
  const [grandTotal, setGrandTotal] = useState<RegionTotal | null>(null);
  const [reservoirs, setReservoirs] = useState<Reservoir[]>([]);
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  useEffect(() => {
    // Calculate the data whenever the data set changes
    const totals = calculateRegionTotals();
    setRegionTotals(totals);
    
    const total = calculateGrandTotal();
    setGrandTotal(total);
    
    // Get reservoirs with drain dates
    const reservoirsWithDrainDates = getReservoirsWithDrainDates();
    setReservoirs(reservoirsWithDrainDates);
  }, [currentDataSetId]);
  
  const getReservoirs = (region: ReservoirRegion) => {
    return reservoirs.filter(reservoir => reservoir.region === region);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card className="flex rounded-2xl overflow-hidden animate-fade-in bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="stat-card-icon flex-none">
              <Droplets className="h-8 w-8 text-water-600 dark:text-water-400" />
            </div>
            <CardContent className="flex flex-col justify-center p-4">
              <div className="text-sm text-muted-foreground">{t('totalCapacity')}</div>
              <div className="text-2xl font-bold text-foreground">{grandTotal?.capacity.toFixed(1)} MCM</div>
            </CardContent>
          </Card>

          <Card className="flex rounded-2xl overflow-hidden animate-fade-in bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: '100ms' }}>
            <div className="stat-card-icon flex-none">
              <Database className="h-8 w-8 text-water-600 dark:text-water-400" />
            </div>
            <CardContent className="flex flex-col justify-center p-4">
              <div className="text-sm text-muted-foreground">{t('currentStorage')}</div>
              <div className="text-2xl font-bold text-foreground">
                {grandTotal?.storage.current.amount.toFixed(1)} MCM
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({grandTotal?.storage.current.percentage.toFixed(1)}%)
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex rounded-2xl overflow-hidden animate-fade-in bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: '200ms' }}>
            <div className="stat-card-icon flex-none">
              <BarChart className="h-8 w-8 text-water-600 dark:text-water-400" />
            </div>
            <CardContent className="flex flex-col justify-center p-4">
              <div className="text-sm text-muted-foreground">{t('vsLastYear')}</div>
              <div className="text-2xl font-bold text-foreground">
                {((grandTotal?.storage.current.percentage || 0) - (grandTotal?.storage.lastYear.percentage || 0)).toFixed(1)}%
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  {t('change')}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex rounded-2xl overflow-hidden animate-fade-in bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: '300ms' }}>
            <div className="stat-card-icon flex-none">
              <Timer className="h-8 w-8 text-water-600 dark:text-water-400" />
            </div>
            <CardContent className="flex flex-col justify-center p-4 w-full">
              <div className="text-sm text-muted-foreground">{t('forecastedDrainDate')}</div>
              <div className="text-2xl font-bold">
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
              <Card className="rounded-2xl p-1 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Droplets className="h-5 w-5 text-water-500 dark:text-water-400" />
                    <span>{t('overallStatus')}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
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
                </CardContent>
              </Card>
              
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
            <ReservoirMap />
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
};

export default Index;
