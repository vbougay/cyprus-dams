import React, { useEffect, useRef } from 'react';
import { RegionTotal } from '@/types';
import { CapacityChart } from '@/components';
import { Droplets, Timer, Info } from 'lucide-react';
import { getSummaryChanges, getCurrentDataSetId } from '@/utils/dataManager';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RegionSummaryProps {
  regionTotal: RegionTotal;
  showReservoirs?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const RegionSummary: React.FC<RegionSummaryProps> = ({ 
  regionTotal, 
  showReservoirs = true,
  children,
  className = ''
}) => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    // Use a more reliable way to animate the card
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.remove('opacity-0');
        cardRef.current.classList.add('opacity-100');
      }
    }, 100);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Get appropriate background color based on storage percentage
  const getBgColor = (percentage: number) => {
    if (percentage < 25) return 'bg-red-50 border-red-100';
    if (percentage < 50) return 'bg-orange-50 border-orange-100';
    if (percentage < 75) return 'bg-yellow-50 border-yellow-100';
    return 'bg-green-50 border-green-100';
  };

  // Double-check that regionTotal exists and has the expected structure
  if (!regionTotal || !regionTotal.storage) {
    console.log('Invalid regionTotal data in RegionSummary');
    return null;
  }
  
  const cardBgColor = getBgColor(regionTotal.storage.current.percentage);
  
  // Check if this is the Total region and if we have summary changes
  const isTotal = regionTotal.region === 'Total';
  const summaryChanges = isTotal ? getSummaryChanges(language) : null;
  const showSummaryChanges = isTotal && summaryChanges && getCurrentDataSetId() === '28-MAR-2025';
  
  return (
    <Card ref={cardRef} className={`opacity-0 overflow-hidden transition-all duration-500 ${cardBgColor} ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-water-500" />
            <span>
              {regionTotal.region === 'Southern Conveyor' ? t('southernConveyor') :
               regionTotal.region === 'Paphos' ? t('paphos') :
               regionTotal.region === 'Chrysochou' ? t('chrysochou') :
               regionTotal.region === 'Nicosia' ? t('nicosia') :
               regionTotal.region === 'Recharge/Other' ? t('rechargeOther') :
               regionTotal.region === 'Total' ? t('totalLabel') : regionTotal.region}
            </span>
          </div>
          <div className="text-sm font-normal text-gray-500">
            {regionTotal.capacity.toFixed(1)} MCM {t('capacity')}
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <CapacityChart data={regionTotal} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">{t('currentStorage')}</div>
            <div className="text-lg font-semibold">{regionTotal.storage.current.amount.toFixed(3)} MCM</div>
          </div>
          
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">{t('lastYear')}</div>
            <div className="text-lg font-semibold">{regionTotal.storage.lastYear.amount.toFixed(3)} MCM</div>
          </div>
          
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">{t('recentInflow')}</div>
            <div className="text-lg font-semibold">{regionTotal.inflow.last24Hours.toFixed(3)} MCM</div>
          </div>
          
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-water-500" />
              <div className="text-sm text-gray-500">{t('fullyDrainedBy')}</div>
            </div>
            <div className="text-lg font-semibold mt-1">
              <span className={`
                ${regionTotal.drainDate === 'Already Empty' ? 'text-red-500' : ''}
                ${regionTotal.drainDate === 'Not Draining' ? 'text-green-500' : ''}
                ${regionTotal.drainDate === 'Beyond 10 Years' ? 'text-green-500' : ''}
                ${!['Already Empty', 'Not Draining', 'Beyond 10 Years'].includes(regionTotal.drainDate || '') ? 'text-amber-500' : ''}
              `}>
                {regionTotal.drainDate === 'Already Empty' ? t('alreadyEmpty') :
                 regionTotal.drainDate === 'Not Draining' ? t('notDraining') :
                 regionTotal.drainDate === 'Beyond 10 Years' ? t('beyondTenYears') :
                 regionTotal.drainDate === 'Calculating...' ? t('calculating') : regionTotal.drainDate}
              </span>
            </div>
          </div>
        </div>
        
        {/* Display summary changes if available */}
        {showSummaryChanges && (
          <div className="mt-6 bg-white/80 p-4 rounded-lg shadow-sm h-full">
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-5 w-5 text-water-500" />
              <h3 className="font-medium">{t('changesTitle')}</h3>
            </div>
            <pre className="text-sm whitespace-pre-wrap bg-gray-50 p-3 rounded border border-gray-200 h-full">
              {summaryChanges}
            </pre>
          </div>
        )}
        
        {showReservoirs && children && (
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="reservoirs" className="border-b-0">
              <AccordionTrigger className="py-2 px-4 bg-white/50 rounded-md hover:bg-white/80 transition-colors">
                <span className="text-sm font-medium text-gray-600">{t('viewReservoirs')}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {children}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};

export default RegionSummary;
