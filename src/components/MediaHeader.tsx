import React from 'react';
import { Droplets } from 'lucide-react';
import ChurchSilhouette from '@/components/ChurchSilhouette';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { formatDataSetDate } from '@/utils/dateFormatting';

interface MediaHeaderProps {
  dateLabel: string;
  dataSetId?: string;
  entityName?: string;
}

const MediaHeader: React.FC<MediaHeaderProps> = ({ dateLabel, dataSetId, entityName }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const formattedDate = dataSetId ? formatDataSetDate(dataSetId, language) : dateLabel;

  return (
    <header className="relative w-full py-3 md:py-4 mb-10 bg-white/95 dark:bg-gray-900/95 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Title & subtitle */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-water-400/20 dark:bg-water-400/30 blur-xl rounded-full"></div>
              <Droplets className="relative w-8 h-8 md:w-10 md:h-10 text-water-500 dark:text-water-400" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl md:text-3xl font-bold gradient-text leading-tight">
                {t('appTitle')}
              </h1>
              <p className="text-water-800/70 dark:text-water-300/70 text-xs md:text-sm">
                {t('subtitle')}
              </p>
            </div>
          </div>
          {/* Right: Entity name & date */}
          <div className="text-right flex-shrink-0">
            {entityName && (
              <p className="text-lg md:text-2xl font-bold text-foreground leading-tight">
                {entityName}
              </p>
            )}
            <p className="text-sm md:text-base font-medium text-water-700 dark:text-water-300">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>

      {/* St. Nicholas church bell tower silhouette */}
      <div className="absolute bottom-0 left-[5%] translate-y-[4px] pointer-events-none z-[5]">
        <ChurchSilhouette className="h-[90px] md:h-[120px] w-auto text-water-700/40 dark:text-water-300/35" />
      </div>

      {/* Wave decoration - static for screenshot compatibility, animated for live view */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 h-[40px] pointer-events-none z-10 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 28" preserveAspectRatio="none">
          <path d="M0,14 C150,28 350,0 600,14 C850,28 1050,0 1200,14 L1200,28 L0,28 Z" fill="#38bdf8" fillOpacity={0.7} />
        </svg>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 28" preserveAspectRatio="none">
          <path d="M0,14 C200,0 400,28 600,14 C800,0 1000,28 1200,14 L1200,28 L0,28 Z" fill="#0ea5e9" fillOpacity={0.5} />
        </svg>
      </div>
    </header>
  );
};

export default MediaHeader;
