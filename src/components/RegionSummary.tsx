import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { RegionTotal } from '@/types';
import { CapacityChart } from '@/components';
import { getSummaryChanges } from '@/utils/dataManager';
import { useLanguage } from '@/context/LanguageContext';
import { useDataContext } from '@/context/DataContext';
import { useTranslation } from '@/utils/translations';
import { getDrainDateColor, getDrainDateText } from '@/utils/reservoirUtils';
import { getRegionSlug } from '@/utils/slugs';
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
  const { isPlaying, currentDataSetId } = useDataContext();
  const t = useTranslation(language);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Skip animations if in play mode
    if (isPlaying) {
      cardRef.current.classList.remove('opacity-0', 'animate-fade-in-up');
      cardRef.current.classList.add('opacity-100');
      return;
    }

    // Reset animation state when regionTotal changes
    cardRef.current.classList.add('opacity-0');
    cardRef.current.classList.remove('opacity-100', 'animate-fade-in-up');

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
  }, [regionTotal, isPlaying]); // Add isPlaying to dependency array

  // Get appropriate background color based on storage percentage
  const getBgColor = (percentage: number) => {
    if (percentage < 25) return 'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50';
    if (percentage < 50) return 'bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50';
    if (percentage < 75) return 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-100 dark:border-yellow-900/50';
    return 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900/50';
  };

  // Double-check that regionTotal exists and has the expected structure
  if (!regionTotal || !regionTotal.storage) {
    console.log('Invalid regionTotal data in RegionSummary');
    return null;
  }
  
  const cardBgColor = getBgColor(regionTotal.storage.current.percentage);
  
  // Check if this is the Total region and if we have summary changes
  const isTotal = regionTotal.region === 'Total';
  const summaryChanges = isTotal ? getSummaryChanges(language as 'en' | 'el' | 'ru', currentDataSetId) : null;
  const showSummaryChanges = isTotal && summaryChanges && currentDataSetId !== '17-MAR-2025';
  
  return (
    <Card ref={cardRef} className={`opacity-0 overflow-hidden transition-all duration-500 rounded-2xl backdrop-blur-sm ${cardBgColor} ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {(() => {
              const label = regionTotal.region === 'Southern Conveyor' ? t('southernConveyor') :
                regionTotal.region === 'Paphos' ? t('paphos') :
                regionTotal.region === 'Chrysochou' ? t('chrysochou') :
                regionTotal.region === 'Nicosia' ? t('nicosia') :
                regionTotal.region === 'Recharge/Other' ? t('rechargeOther') :
                regionTotal.region === 'Total' ? t('totalLabel') : regionTotal.region;
              const slug = regionTotal.region !== 'Total' ? getRegionSlug(regionTotal.region) : undefined;
              const href = slug ? (language === 'en' ? `/region/${slug}` : `/${language}/region/${slug}`) : undefined;
              return href ? (
                <Link href={href} className="text-foreground hover:text-water-600 dark:hover:text-water-400 transition-colors">
                  {label}
                </Link>
              ) : (
                <span className="text-foreground">{label}</span>
              );
            })()}
          </div>
          <div className="text-sm font-normal text-muted-foreground">
            {regionTotal.capacity.toFixed(1)} MCM {t('capacity')}
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <CapacityChart data={regionTotal} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-xl shadow-sm">
            <div className="text-sm text-muted-foreground mb-1">{t('currentStorage')}</div>
            <div className="text-lg font-semibold text-foreground">{regionTotal.storage.current.amount.toFixed(3)} MCM</div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-xl shadow-sm">
            <div className="text-sm text-muted-foreground mb-1">{t('lastYear')}</div>
            <div className="text-lg font-semibold text-foreground">{regionTotal.storage.lastYear.amount.toFixed(3)} MCM</div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-xl shadow-sm">
            <div className="text-sm text-muted-foreground mb-1">{t('recentInflow')}</div>
            <div className="text-lg font-semibold text-foreground">{regionTotal.inflow.last24Hours.toFixed(3)} MCM</div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-xl shadow-sm">
            <div className="text-sm text-muted-foreground">{t('restrictionsBy')}</div>
            <div className="text-lg font-semibold mt-1">
              <span className={getDrainDateColor(regionTotal.drainDate)}>
                {getDrainDateText(regionTotal.drainDate, t)}
              </span>
            </div>
          </div>
        </div>

        {/* Display summary changes if available */}
        {showSummaryChanges && (
          <div className="summary-changes mt-6 bg-white/80 dark:bg-gray-800/50 p-4 rounded-xl shadow-sm">
            <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:mt-4 prose-headings:mb-2 prose-headings:text-foreground prose-p:my-2 prose-ul:my-2 prose-li:my-0.5 prose-strong:text-foreground">
              <ReactMarkdown>{summaryChanges}</ReactMarkdown>
            </div>
          </div>
        )}

        {showReservoirs && children && (
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="reservoirs" className="border-b-0">
              <AccordionTrigger className="py-2 px-4 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                <span className="text-sm font-medium text-muted-foreground">{t('viewReservoirs')}</span>
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
