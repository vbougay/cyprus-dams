
import React, { useEffect, useRef } from 'react';
import { RegionTotal, Reservoir } from '@/types';

interface CapacityChartProps {
  data: RegionTotal | Reservoir;
  showComparison?: boolean;
}

const CapacityChart: React.FC<CapacityChartProps> = ({ data, showComparison = true }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const currentPercentage = data.storage.current.percentage;
  const lastYearPercentage = data.storage.lastYear.percentage;
  
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
    <div ref={chartRef} className="opacity-0">
      <div className="flex items-center justify-center space-x-4">
        {/* Current percentage circle */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            
            {/* Progress circle */}
            <circle
              className="progress-ring-circle"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
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
            <span className={`text-xl font-bold ${currentColor}`}>{currentPercentage}%</span>
            <span className="text-xs text-gray-500">Current</span>
          </div>
        </div>
        
        {showComparison && (
          <>
            <div className="text-gray-400">vs</div>
            
            {/* Last year percentage circle */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                
                {/* Progress circle */}
                <circle
                  className="progress-ring-circle"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
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
                <span className={`text-xl font-bold ${lastYearColor}`}>{lastYearPercentage}%</span>
                <span className="text-xs text-gray-500">Last Year</span>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-sm text-gray-500">Capacity</div>
        <div className="text-lg font-medium">{data.capacity.toFixed(3)} MCM</div>
      </div>
    </div>
  );
};

export default CapacityChart;
