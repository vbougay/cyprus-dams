import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { Locale } from '@/utils/locale';

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{children: ReactNode; initialLocale?: Locale}> = ({ children, initialLocale = 'en' }) => {
  const [language, setLanguage] = useState<Locale>(initialLocale);

  // Sync when initialLocale prop changes (e.g. navigation)
  useEffect(() => {
    setLanguage(initialLocale);
  }, [initialLocale]);

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
