import React from 'react';
import { Droplets, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';

interface MediaHeaderProps {
  dateLabel: string;
}

const MediaHeader: React.FC<MediaHeaderProps> = ({ dateLabel }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <header className="relative w-full py-4 md:py-8 mb-8 bg-white/95 dark:bg-gray-900/95 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-water-400/20 dark:bg-water-400/30 blur-xl rounded-full"></div>
              <Droplets className="relative w-8 h-8 md:w-10 md:h-10 text-water-500 dark:text-water-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold gradient-text">
                {t('appTitle')}
              </h1>
              <p className="text-water-800/70 dark:text-water-300/70 text-xs md:text-base mt-1">
                {t('subtitle')}
              </p>
            </div>
          </div>

          {/* Date display */}
          <div className="flex items-center gap-3 bg-white/90 dark:bg-white/15 rounded-xl px-5 py-3 border border-blue-100 dark:border-white/10 shadow-sm">
            <Calendar className="h-5 w-5 md:h-6 md:w-6 text-water-600 dark:text-water-400 flex-shrink-0" />
            <span className="text-lg md:text-2xl font-semibold text-water-800 dark:text-water-200 whitespace-nowrap">
              {dateLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Wave decoration - static for screenshot compatibility, animated for live view */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 h-[40px] pointer-events-none z-10 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 28" preserveAspectRatio="none">
          <path d="M0,14 C150,28 350,0 600,14 C850,28 1050,0 1200,14 L1200,28 L0,28 Z" className="fill-water-400/70 dark:fill-water-400/60" />
        </svg>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 28" preserveAspectRatio="none">
          <path d="M0,14 C200,0 400,28 600,14 C800,0 1000,28 1200,14 L1200,28 L0,28 Z" className="fill-water-500/50 dark:fill-water-500/40" />
        </svg>
      </div>
    </header>
  );
};

export default MediaHeader;
