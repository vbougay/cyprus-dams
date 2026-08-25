import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Droplets, Calendar, Globe, ChevronLeft, ChevronRight, Play, Pause, ChevronsLeft, ChevronsRight, Waves } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { formatDataSetDate } from '@/utils/dateFormatting';
import { defaultLocale, type Locale } from '@/utils/locale';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import ChurchSilhouette from '@/components/ChurchSilhouette';

const Header: React.FC<{ homePage?: boolean; hideDateNav?: boolean }> = ({ homePage, hideDateNav }) => {
  const { currentDataSetId, availableDataSets, setDataSet, isPlaying, setIsPlaying } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();
  const pathname = usePathname();

  // Compute locale-aware paths
  const getLocalePath = useCallback((locale: Locale, path = '') => {
    return locale === defaultLocale ? (path || '/') : `/${locale}${path}`;
  }, []);

  // Get current page path (without locale prefix)
  const getPagePath = useCallback(() => {
    const segments = pathname.split('/');
    const maybeLocale = segments[1];
    if (['en', 'el', 'ru'].includes(maybeLocale)) {
      return '/' + segments.slice(2).join('/');
    }
    return pathname;
  }, [pathname]);

  const handleLanguageChange = useCallback((newLocale: string) => {
    const pagePath = getPagePath();
    // Normalize path: strip trailing slash for comparison, ensure root is ''
    const normalizedPath = pagePath === '/' ? '' : pagePath.replace(/\/$/, '');
    router.push(getLocalePath(newLocale as Locale, normalizedPath));
  }, [router, getLocalePath, getPagePath]);

  const zenHref = getLocalePath(language, '/zen');
  const zenLabel = language === 'el' ? 'Πάμε Ζεν' : language === 'ru' ? 'Дзен' : 'Go Zen';

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
    if (!isPlaying || hideDateNav) return;

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
  }, [isPlaying, hideDateNav, currentIndex, availableDataSets, setDataSet]);

  // Intersection Observer to detect when mobile nav scrolls out of view
  useEffect(() => {
    if (hideDateNav) return;
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
  }, [hideDateNav]);

  return (
    <>
    <header className="relative w-full py-4 md:py-8 backdrop-blur-md mb-8 animate-fade-in bg-white/50 dark:bg-gray-900/50 overflow-visible">
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
                <Link href={getLocalePath(language)} className="block">
                  <span className="text-2xl md:text-4xl font-bold gradient-text block">
                    {t('appTitle')}
                  </span>
                  {/* Keyword-rich subtitle carries the homepage H1; wordmark is a plain span.
                      Sub-pages already provide their own <h1>, so keep this a <p> there. */}
                  {homePage ? (
                    <h1 className="text-water-800/70 dark:text-water-300/70 text-xs md:text-base font-normal mt-1">
                      {t('subtitle')}
                    </h1>
                  ) : (
                    <p className="text-water-800/70 dark:text-water-300/70 text-xs md:text-base mt-1">
                      {t('subtitle')}
                    </p>
                  )}
                </Link>
              </div>

              {/* Mobile controls - Theme toggle and Language selector */}
              <div className="flex items-center gap-2 md:hidden">
                <ThemeToggle />
                <Select
                  value={language}
                  onValueChange={handleLanguageChange}
                >
                  <SelectTrigger className="w-auto h-8 px-2 bg-transparent dark:bg-transparent border-transparent shadow-none text-muted-foreground/70 hover:text-foreground hover:bg-white/40 dark:hover:bg-white/10 transition-colors">
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
                    <SelectItem value="el">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span>EL</span>
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
                <Link href={zenHref}>
                  <Button
                    className="h-8 px-2.5 rounded-xl gap-1 bg-gradient-to-r from-water-500 to-water-600 hover:from-water-600 hover:to-water-700 text-white border-0 shadow-md"
                    title="Zen mode"
                  >
                    <Waves className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">{zenLabel}</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Desktop: Date Controls + Language with Subscribe below | Mobile: Date Controls Only */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex flex-row flex-wrap justify-center md:justify-end items-center gap-2">
                {/* Date Navigation Controls */}
                {!hideDateNav && (
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
                        {currentDataSet ? formatDataSetDate(currentDataSet.id, language) : ''}
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
                )}

                {/* Desktop controls - Theme toggle and Language selector */}
                <div className="hidden md:flex items-center gap-2">
                  <ThemeToggle />
                  <Select
                    value={language}
                    onValueChange={handleLanguageChange}
                  >
                    <SelectTrigger className="w-auto h-8 px-2 bg-transparent dark:bg-transparent border-transparent shadow-none text-muted-foreground/70 hover:text-foreground hover:bg-white/40 dark:hover:bg-white/10 transition-colors">
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
                      <SelectItem value="el">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          <span>EL</span>
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
                  <Link href={zenHref}>
                    <Button
                      className="h-10 px-3 rounded-xl gap-1.5 bg-gradient-to-r from-water-500 to-water-600 hover:from-water-600 hover:to-water-700 text-white border-0 shadow-md"
                      title="Zen mode"
                    >
                      <Waves className="h-4 w-4" />
                      <span className="text-sm font-medium">{zenLabel}</span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Community links */}
              <div className="text-center md:text-right text-xs md:text-sm text-muted-foreground">
                {language === 'el' ? 'Ακολουθήστε μας στο' : language === 'ru' ? 'Следите за нами в' : 'Follow us on'}{' '}
                <a href="https://t.me/fragmatainfo" target="_blank" className="text-water-600 dark:text-water-400 hover:text-water-800 dark:hover:text-water-300 transition-colors underline">
                  Telegram
                </a>
                {' '}{language === 'el' ? 'και' : language === 'ru' ? 'и' : 'and'}{' '}
                <a href="https://chat.whatsapp.com/JZxEYFqo1mGDBZoi0pZBaA?mode=gi_t" target="_blank" className="text-water-600 dark:text-water-400 hover:text-water-800 dark:hover:text-water-300 transition-colors underline">
                  WhatsApp
                </a>
                {' '}{language === 'el' ? 'για ενημερώσεις' : language === 'ru' ? 'для обновлений' : 'for updates'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* St. Nicholas church bell tower silhouette - uses container to align with content */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]">
        <div className="container mx-auto px-4">
          <div className="translate-y-[4px] -translate-x-1/2 md:-translate-x-full w-fit">
            <ChurchSilhouette className="h-[70px] md:h-[120px] w-auto text-water-700/35 dark:text-water-300/30" />
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
    {!hideDateNav && (
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
              {currentDataSet ? formatDataSetDate(currentDataSet.id, language) : ''}
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
    )}
    </>
  );
};

export default Header;
