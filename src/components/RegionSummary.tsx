
import React, { useEffect, useRef } from 'react';
import { RegionTotal } from '@/types';
import { CapacityChart } from '@/components';
import { ChevronDown, ChevronUp, Droplets } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RegionSummaryProps {
  regionTotal: RegionTotal;
  showReservoirs?: boolean;
  children?: React.ReactNode;
}

const RegionSummary: React.FC<RegionSummaryProps> = ({ 
  regionTotal, 
  showReservoirs = true,
  children 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

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

  const cardBgColor = getBgColor(regionTotal.storage.current.percentage);
  
  return (
    <Card ref={cardRef} className={`opacity-0 overflow-hidden transition-all ${cardBgColor}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-water-500" />
            <span>{regionTotal.region}</span>
          </div>
          <div className="text-sm font-normal text-gray-500">
            {regionTotal.capacity.toFixed(1)} MCM capacity
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <CapacityChart data={regionTotal} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Current Storage</div>
            <div className="text-lg font-semibold">{regionTotal.storage.current.amount.toFixed(3)} MCM</div>
          </div>
          
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Last Year</div>
            <div className="text-lg font-semibold">{regionTotal.storage.lastYear.amount.toFixed(3)} MCM</div>
          </div>
          
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Recent Inflow</div>
            <div className="text-lg font-semibold">{regionTotal.inflow.last24Hours.toFixed(3)} MCM</div>
          </div>
        </div>
        
        {showReservoirs && (
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="reservoirs" className="border-b-0">
              <AccordionTrigger className="py-2 px-4 bg-white/50 rounded-md hover:bg-white/80 transition-colors">
                <span className="text-sm font-medium text-gray-600">View Reservoirs</span>
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
