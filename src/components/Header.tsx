import React from 'react';
import { Droplets, Calendar, Globe } from 'lucide-react';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Header: React.FC = () => {
  const { currentDataSetId, availableDataSets, setDataSet } = useDataContext();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);
  
  return (
    <header className="w-full py-8 border-b border-blue-100/30 backdrop-blur-sm mb-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Droplets className="w-10 h-10 text-water-500 animate-float" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-water-600 to-water-400 bg-clip-text text-transparent">
                {t('appTitle')}
              </h1>
              <p className="text-water-800/70 text-sm md:text-base mt-1">
                {t('ministry')}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Select 
                value={currentDataSetId}
                onValueChange={(value) => setDataSet(value)}
              >
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder={t('selectDate')} />
                </SelectTrigger>
                <SelectContent>
                  {availableDataSets.map((dataSet) => (
                    <SelectItem key={dataSet.id} value={dataSet.id}>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{dataSet.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Language Selector */}
              <Select 
                value={language}
                onValueChange={(value) => setLanguage(value as 'en' | 'gr' | 'ru')}
              >
                <SelectTrigger className="w-[80px]">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>{language.toUpperCase()}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>EN</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="gr">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>GR</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ru">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>RU</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-2 text-center">
              {t('subscribe')} <a href="https://t.me/kiprozavodsk" className="text-water-600 hover:text-water-800 transition-colors underline">
                Кипрозаводск
              </a>/<a href="https://www.tiktok.com/@kiprozavodsk" className="text-water-600 hover:text-water-800 transition-colors underline">
                Kiprozavodsk
              </a>!
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
