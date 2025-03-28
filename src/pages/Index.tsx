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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card flex shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in">
            <div className="flex-none flex items-center justify-center p-4 bg-water-50 text-water-700">
              <Droplets className="h-8 w-8" />
            </div>
            <CardContent className="flex flex-col justify-center p-4">
              <div className="text-sm text-gray-500">{t('totalCapacity')}</div>
              <div className="text-2xl font-bold">{grandTotal?.capacity.toFixed(1)} MCM</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card flex shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex-none flex items-center justify-center p-4 bg-water-50 text-water-700">
              <Database className="h-8 w-8" />
            </div>
            <CardContent className="flex flex-col justify-center p-4">
              <div className="text-sm text-gray-500">{t('currentStorage')}</div>
              <div className="text-2xl font-bold">
                {grandTotal?.storage.current.amount.toFixed(1)} MCM
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({grandTotal?.storage.current.percentage.toFixed(1)}%)
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card flex shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex-none flex items-center justify-center p-4 bg-water-50 text-water-700">
              <BarChart className="h-8 w-8" />
            </div>
            <CardContent className="flex flex-col justify-center p-4">
              <div className="text-sm text-gray-500">{t('vsLastYear')}</div>
              <div className="text-2xl font-bold">
                {((grandTotal?.storage.current.percentage || 0) - (grandTotal?.storage.lastYear.percentage || 0)).toFixed(1)}%
                <span className="text-sm font-normal text-gray-500 ml-2">
                  {t('change')}
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card flex shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex-none flex items-center justify-center p-4 bg-water-50 text-water-700">
              <Timer className="h-8 w-8" />
            </div>
            <CardContent className="flex flex-col justify-center p-4 w-full">
              <div className="text-sm text-gray-500">{t('forecastedDrainDate')}</div>
              <div className="text-2xl font-bold">
                <span className={`
                  ${grandTotal?.drainDate === 'Already Empty' ? 'text-red-500' : ''}
                  ${grandTotal?.drainDate === 'Not Draining' ? 'text-green-500' : ''}
                  ${grandTotal?.drainDate === 'Beyond 10 Years' ? 'text-green-500' : ''}
                  ${!['Already Empty', 'Not Draining', 'Beyond 10 Years'].includes(grandTotal?.drainDate || '') ? 'text-amber-500' : ''}
                `}>
                  {grandTotal?.drainDate || 'Calculating...'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="dashboard" className="mb-8">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="dashboard">{t('dashboard')}</TabsTrigger>
            <TabsTrigger value="regions">{t('byRegion')}</TabsTrigger>
            <TabsTrigger value="map">{t('map')}</TabsTrigger>
            <TabsTrigger value="table">{t('dataTable')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="animate-fade-in">
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 p-1">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-water-500" />
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
      
      <footer className="border-t border-gray-200 py-6 bg-white/60 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p><a href="https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument">{t('dataFrom')}</a></p>
          <p className="mt-2">{t('contactMe')} <a href="mailto:v@bougay.com">v@bougay.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
