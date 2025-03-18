
import React from 'react';
import { getReportDate } from '@/utils/data';
import { Drop } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 border-b border-blue-100/30 backdrop-blur-sm mb-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Drop className="w-10 h-10 text-water-500 animate-float" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-water-600 to-water-400 bg-clip-text text-transparent">
                Cyprus Reservoir Visualizer
              </h1>
              <p className="text-water-800/70 text-sm md:text-base mt-1">
                Water Development Department - Ministry of Agriculture
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="px-4 py-2 rounded-full bg-water-50 border border-water-100 text-water-700">
              <span className="font-mono">Last updated: {getReportDate()}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
