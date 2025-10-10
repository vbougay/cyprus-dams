import React, { useEffect } from 'react';
import { Droplets, Calendar, Globe, ChevronLeft, ChevronRight, Play, Pause, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { currentDataSetId, availableDataSets, setDataSet, isPlaying, setIsPlaying } = useDataContext();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  // Find current dataset index
  const currentIndex = availableDataSets.findIndex(ds => ds.id === currentDataSetId);
  const currentDataSet = availableDataSets[currentIndex];

  // Navigation handlers
  const handleFirst = () => {
    // Go to the newest date (index 0)
    setDataSet(availableDataSets[0].id);
  };

  const handlePrevious = () => {
    if (currentIndex < availableDataSets.length - 1) {
      setDataSet(availableDataSets[currentIndex + 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex > 0) {
      setDataSet(availableDataSets[currentIndex - 1].id);
    }
  };

  const handleLast = () => {
    // Go to the oldest date (last index)
    setDataSet(availableDataSets[availableDataSets.length - 1].id);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const nextIndex = currentIndex - 1;

      // If we've reached the latest date, loop back to the oldest
      if (nextIndex < 0) {
        setDataSet(availableDataSets[availableDataSets.length - 1].id);
      } else {
        setDataSet(availableDataSets[nextIndex].id);
      }
    }, 1000); // Change date every 1 second

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, availableDataSets, setDataSet]);

  return (
    <header className="w-full py-4 md:py-8 border-b border-blue-100/30 backdrop-blur-sm mb-4 md:mb-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Desktop: Single Row Layout | Mobile: Title + Language Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            {/* Title and Language Row (Mobile) / Title Only (Desktop) */}
            <div className="w-full md:w-auto flex justify-between md:justify-start items-center">
              <div className="flex items-center gap-3">
                <Droplets className="w-8 h-8 md:w-10 md:h-10 text-water-500 animate-float" />
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-water-600 to-water-400 bg-clip-text text-transparent">
                    {t('appTitle')}
                  </h1>
                  <p className="text-water-800/70 text-xs md:text-base mt-1">
                    {t('ministry')}
                  </p>
                </div>
              </div>

              {/* Language Selector - visible on mobile in title row, hidden on desktop */}
              <div className="md:hidden">
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value as 'en' | 'gr' | 'ru')}
                >
                  <SelectTrigger className="w-[70px] h-8">
                    <SelectValue>
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5" />
                        <span className="text-xs">{language.toUpperCase()}</span>
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
            </div>

            {/* Desktop: Date Controls + Language with Subscribe below | Mobile: Date Controls Only */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex flex-row items-center gap-2">
                {/* Date Navigation Controls */}
                <div className="flex items-center gap-0.5 md:gap-1 bg-white/50 backdrop-blur-sm rounded-lg px-1.5 md:px-3 py-1.5 md:py-2 border border-blue-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLast}
                    disabled={currentIndex >= availableDataSets.length - 1}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100"
                    title="Go to oldest date"
                  >
                    <ChevronsLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentIndex >= availableDataSets.length - 1}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100"
                    title="Previous date"
                  >
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePlayPause}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    ) : (
                      <Play className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    )}
                  </Button>

                  <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 min-w-[140px] md:min-w-[200px] justify-center">
                    <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 text-water-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-water-800 whitespace-nowrap">
                      {currentDataSet?.label}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNext}
                    disabled={currentIndex <= 0}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100"
                    title="Next date"
                  >
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleFirst}
                    disabled={currentIndex <= 0}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100"
                    title="Go to newest date"
                  >
                    <ChevronsRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>

                {/* Language Selector - visible on desktop only */}
                <div className="hidden md:block">
                  <Select
                    value={language}
                    onValueChange={(value) => setLanguage(value as 'en' | 'gr' | 'ru')}
                  >
                    <SelectTrigger className="w-[80px] h-10">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          <span className="text-sm">{language.toUpperCase()}</span>
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
              </div>

              {/* Subscribe Text - Below date controls for both mobile and desktop */}
              <div className="text-center md:text-right text-xs md:text-sm">
                {t('subscribe')} <a href="https://t.me/kiprozavodsk" className="text-water-600 hover:text-water-800 transition-colors underline">
                  Кипрозаводск
                </a>/<a href="https://www.tiktok.com/@kiprozavodsk" className="text-water-600 hover:text-water-800 transition-colors underline">
                  Kiprozavodsk
                </a>!
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
