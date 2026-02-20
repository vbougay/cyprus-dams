import React, { useEffect, useState, useRef } from 'react';
import { Droplets, Calendar, Globe, ChevronLeft, ChevronRight, Play, Pause, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header: React.FC = () => {
  const { currentDataSetId, availableDataSets, setDataSet, isPlaying, setIsPlaying } = useDataContext();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  // Track if the mobile date nav has scrolled out of view
  const [showFixedNav, setShowFixedNav] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer to detect when mobile nav scrolls out of view
  useEffect(() => {
    const navElement = mobileNavRef.current;
    if (!navElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show fixed nav when the original nav is not visible
        setShowFixedNav(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px' }
    );

    observer.observe(navElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <header className="relative w-full py-4 md:py-8 backdrop-blur-md mb-4 md:mb-8 animate-fade-in bg-white/50 dark:bg-gray-900/50 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Desktop: Single Row Layout | Mobile: Title + Language Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            {/* Title and Language Row (Mobile) / Title Only (Desktop) */}
            <div className="w-full md:w-auto flex justify-between md:justify-start items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-water-400/20 dark:bg-water-400/30 blur-xl rounded-full"></div>
                  <Droplets className="relative w-8 h-8 md:w-10 md:h-10 text-water-500 dark:text-water-400 animate-float" />
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

              {/* Mobile controls - Theme toggle and Language selector */}
              <div className="flex items-center gap-2 md:hidden">
                <ThemeToggle />
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value as 'en' | 'gr' | 'ru')}
                >
                  <SelectTrigger className="w-[70px] h-8 bg-white/50 dark:bg-white/10 backdrop-blur-sm border-blue-100 dark:border-white/10">
                    <SelectValue>
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5" />
                        <span className="text-xs">{language.toUpperCase()}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-md bg-white/90 dark:bg-gray-900/90">
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
                <div ref={mobileNavRef} className="flex items-center gap-0.5 md:gap-1 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl px-1.5 md:px-3 py-1.5 md:py-2 border border-blue-100 dark:border-white/10 shadow-sm">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLast}
                    disabled={currentIndex >= availableDataSets.length - 1}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
                    title="Go to oldest date"
                  >
                    <ChevronsLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentIndex >= availableDataSets.length - 1}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
                    title="Previous date"
                  >
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={togglePlayPause}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    ) : (
                      <Play className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    )}
                  </Button>

                  <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 min-w-[140px] md:min-w-[200px] justify-center">
                    <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 text-water-600 dark:text-water-400 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-water-800 dark:text-water-200 whitespace-nowrap">
                      {currentDataSet?.label}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNext}
                    disabled={currentIndex <= 0}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
                    title="Next date"
                  >
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleFirst}
                    disabled={currentIndex <= 0}
                    className="h-7 w-7 md:h-8 md:w-8 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
                    title="Go to newest date"
                  >
                    <ChevronsRight className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>

                {/* Desktop controls - Theme toggle and Language selector */}
                <div className="hidden md:flex items-center gap-2">
                  <ThemeToggle />
                  <Select
                    value={language}
                    onValueChange={(value) => setLanguage(value as 'en' | 'gr' | 'ru')}
                  >
                    <SelectTrigger className="w-[80px] h-10 bg-white/50 dark:bg-white/10 backdrop-blur-sm border-blue-100 dark:border-white/10">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          <span className="text-sm">{language.toUpperCase()}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="backdrop-blur-md bg-white/90 dark:bg-gray-900/90">
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
              <div className="text-center md:text-right text-xs md:text-sm text-muted-foreground">
                {t('subscribe')} <a href="https://t.me/kiprozavodsk" className="text-water-600 dark:text-water-400 hover:text-water-800 dark:hover:text-water-300 transition-colors underline">
                  Кипрозаводск
                </a>/<a href="https://www.tiktok.com/@kiprozavodsk" className="text-water-600 dark:text-water-400 hover:text-water-800 dark:hover:text-water-300 transition-colors underline">
                  Kiprozavodsk
                </a>!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flowing water wave effect */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 h-[28px] pointer-events-none z-10 overflow-hidden">
        <svg className="absolute top-0 left-0 w-[200%] h-full animate-wave-flow" viewBox="0 0 1200 28" preserveAspectRatio="none">
          <path d="M0,14 C150,28 350,0 600,14 C850,28 1050,0 1200,14 L1200,28 L0,28 Z" className="fill-water-400/50 dark:fill-water-400/30" />
        </svg>
        <svg className="absolute top-0 left-0 w-[200%] h-full animate-wave-flow-reverse" viewBox="0 0 1200 28" preserveAspectRatio="none">
          <path d="M0,14 C200,0 400,28 600,14 C800,0 1000,28 1200,14 L1200,28 L0,28 Z" className="fill-water-500/35 dark:fill-water-500/20" />
        </svg>
      </div>
    </header>

    {/* Mobile Fixed Date Navigation Bar - Only shows when original nav scrolls out of view */}
    <div className={`md:hidden fixed top-0 left-0 right-0 z-50 py-2 px-4 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md border-b border-blue-100/30 dark:border-white/10 transition-transform duration-200 ${showFixedNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-center gap-0.5 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl px-1.5 py-1.5 border border-blue-100 dark:border-white/10 shadow-sm">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLast}
          disabled={currentIndex >= availableDataSets.length - 1}
          className="h-7 w-7 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
          title="Go to oldest date"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handlePrevious}
          disabled={currentIndex >= availableDataSets.length - 1}
          className="h-7 w-7 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
          title="Previous date"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlayPause}
          className="h-7 w-7 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5" />
          ) : (
            <Play className="h-3.5 w-3.5" />
          )}
        </Button>

        <div className="flex items-center gap-1.5 px-2 min-w-[140px] justify-center">
          <Calendar className="h-3.5 w-3.5 text-water-600 dark:text-water-400 flex-shrink-0" />
          <span className="text-xs font-medium text-water-800 dark:text-water-200 whitespace-nowrap">
            {currentDataSet?.label}
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleNext}
          disabled={currentIndex <= 0}
          className="h-7 w-7 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
          title="Next date"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleFirst}
          disabled={currentIndex <= 0}
          className="h-7 w-7 p-0 hover:bg-water-100 dark:hover:bg-water-900/50 rounded-lg transition-colors"
          title="Go to newest date"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
    </>
  );
};

export default Header;
