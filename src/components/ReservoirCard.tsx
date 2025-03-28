
import React from 'react';
import { Reservoir } from '@/types';
import { CapacityChart } from '@/components';
import { DropletIcon, Droplets, TrendingUp, Calendar, Timer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation, translations } from '@/utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReservoirCardProps {
  reservoir: Reservoir;
}

const ReservoirCard: React.FC<ReservoirCardProps> = ({ reservoir }) => {
  const { name, capacity, inflow, storage, maxStorage, drainDate, region } = reservoir;
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  
  // Calculate storage difference compared to last year (in percentage points)
  const storageDifference = storage.current.percentage - storage.lastYear.percentage;
  
  // Determine if storage is increasing or decreasing compared to last year
  const isIncreasing = storageDifference > 0;
  
  return (
    <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span className="font-medium text-lg">{translations[language][name as keyof typeof translations.en] || name}</span>
          <div className="flex items-center gap-1.5 text-xs font-normal bg-water-50 text-water-700 px-2 py-1 rounded-full">
            <DropletIcon size={12} />
            <span>{capacity.toFixed(3)} MCM</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="mb-4">
          <CapacityChart data={reservoir} />
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
          <div className="flex flex-col bg-gray-50 p-2 rounded-md">
            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
              <Droplets size={12} className="text-water-500" />
              {t('recentInflow')}
            </div>
            <div className="font-mono">{inflow.last24Hours.toFixed(3)} MCM</div>
          </div>
          
          <div className="flex flex-col bg-gray-50 p-2 rounded-md">
            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
              <TrendingUp size={12} className="text-water-500" />
              {t('totalInflow')}
            </div>
            <div className="font-mono">{inflow.totalSince.toFixed(3)} MCM</div>
          </div>
          
          <div className="flex flex-col bg-gray-50 p-2 rounded-md col-span-2">
            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
              <Calendar size={12} className="text-water-500" />
              {t('maxStorage')}
            </div>
            <div className="font-mono flex justify-between">
              <span>{maxStorage.amount.toFixed(3)} MCM</span>
              <span className="text-gray-500">{maxStorage.date}</span>
            </div>
          </div>
          
          <div className="flex flex-col bg-gray-50 p-2 rounded-md col-span-2 mt-2">
            <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
              <Timer size={12} className="text-water-500" />
              {t('fullyDrainedBy')}
            </div>
            <div className="font-mono flex justify-between">
              <span className={`
                ${drainDate === 'Already Empty' ? 'text-red-500' : ''}
                ${drainDate === 'Not Draining' ? 'text-green-500' : ''}
                ${drainDate === 'Beyond 10 Years' ? 'text-green-500' : ''}
                ${!['Already Empty', 'Not Draining', 'Beyond 10 Years'].includes(drainDate || '') ? 'text-amber-500' : ''}
              `}>
                {drainDate === 'Already Empty' ? t('alreadyEmpty') :
                 drainDate === 'Not Draining' ? t('notDraining') :
                 drainDate === 'Beyond 10 Years' ? t('beyondTenYears') :
                 drainDate === 'Calculating...' ? t('calculating') : drainDate}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-xs flex items-center justify-end gap-1">
          <span className="text-gray-500">{t('vsLastYearColon')}</span>
          <span className={`font-medium ${isIncreasing ? 'text-green-500' : 'text-red-500'}`}>
            {isIncreasing ? '+' : ''}{storageDifference.toFixed(1)}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservoirCard;
