
import React, { useEffect, useRef } from 'react';
import { RegionTotal, Reservoir } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { useDataContext } from '@/context/DataContext';
import { useTranslation } from '@/utils/translations';

interface CapacityChartProps {
  data: RegionTotal | Reservoir;
  showComparison?: boolean;
}

const CapacityChart: React.FC<CapacityChartProps> = ({ data, showComparison = true }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const { isPlaying } = useDataContext();
  const t = useTranslation(language);

  useEffect(() => {
    if (!chartRef.current) return;

    // Skip animations if in play mode
    if (isPlaying) {
      chartRef.current.classList.remove('opacity-0', 'animate-scale-in');
      chartRef.current.classList.add('opacity-100');
      return;
    }

    // Use a more reliable way to animate the chart
    setTimeout(() => {
      if (chartRef.current) {
        chartRef.current.classList.remove('opacity-0');
        chartRef.current.classList.add('opacity-100');
      }
    }, 100);

    // Add intersection observer for when scrolling into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(chartRef.current);

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [isPlaying]);

  // Ensure data is populated before rendering
  if (!data || !data.storage) {
    console.log('No data available for CapacityChart');
    return null;
  }

  const currentPercentage = data.storage.current.percentage;
  const lastYearPercentage = data.storage.lastYear.percentage;
  const storageDifference = currentPercentage - lastYearPercentage;
  const isIncreasing = storageDifference > 0;
  
  // Calculate colors based on percentage values
  const getColor = (percentage: number) => {
    if (percentage < 25) return 'text-red-500';
    if (percentage < 50) return 'text-orange-500';
    if (percentage < 75) return 'text-yellow-500';
    return 'text-green-500';
  };
  
  const currentColor = getColor(currentPercentage);
  const lastYearColor = getColor(lastYearPercentage);
  
  return (
    <div ref={chartRef} className="opacity-0 transition-opacity duration-500">
      <div className="flex items-center justify-center space-x-4">
        {/* Current percentage circle */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="7"
            />

            {/* Progress circle */}
            <circle
              className="progress-ring-circle"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - currentPercentage / 100)}`}
              transform="rotate(-90 50 50)"
              style={{ color: currentColor === 'text-red-500' ? '#ef4444' : 
                       currentColor === 'text-orange-500' ? '#f97316' : 
                       currentColor === 'text-yellow-500' ? '#eab308' : '#22c55e' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-lg font-bold ${currentColor}`}>{currentPercentage.toFixed(1)}%</span>
            <span className="text-[0.65rem] text-gray-500">{t('currentVeryShort')}</span>
          </div>
        </div>
        
        {showComparison && (
          <>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">{t('vs')}</span>
              <span className={`text-xs font-semibold ${isIncreasing ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {isIncreasing ? '+' : ''}{storageDifference.toFixed(1)}%
              </span>
            </div>
            
            {/* Last year percentage circle */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="7"
                />

                {/* Progress circle */}
                <circle
                  className="progress-ring-circle"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - lastYearPercentage / 100)}`}
                  transform="rotate(-90 50 50)"
                  style={{ color: lastYearColor === 'text-red-500' ? '#ef4444' : 
                          lastYearColor === 'text-orange-500' ? '#f97316' : 
                          lastYearColor === 'text-yellow-500' ? '#eab308' : '#22c55e' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-lg font-bold ${lastYearColor}`}>{lastYearPercentage.toFixed(1)}%</span>
                <span className="text-[0.65rem] text-gray-500">{t('lastYearVeryShort')}</span>
              </div>
            </div>
          </>
        )}
      </div>
      
    </div>
  );
};

export default CapacityChart;
