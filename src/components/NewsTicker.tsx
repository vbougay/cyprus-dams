import React, { useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { newsArticles } from '@/utils/newsArticles';
import { Newspaper } from 'lucide-react';

const labels = {
  en: 'In the News',
  el: 'Στα νέα',
  ru: 'В новостях',
} as const;

export function NewsTicker() {
  const { language } = useLanguage();

  const articles = useMemo(
    () => newsArticles.filter((a) => a.lang === language),
    [language]
  );

  if (articles.length === 0) return null;

  const items = articles.map((article, i) => (
    <span key={i} className="inline-flex items-center shrink-0">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-water-400 transition-colors duration-200"
      >
        {article.title}
      </a>
      <span className="mx-4 text-water-400/60 text-xs">&#x2022;</span>
    </span>
  ));

  return (
    <div className="relative flex items-center rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/40 dark:border-white/10 overflow-hidden h-9 text-sm">
        <div className="shrink-0 flex items-center gap-1.5 px-3 h-full bg-water-600 dark:bg-water-700 text-white font-medium text-xs uppercase tracking-wider z-10">
          <Newspaper className="w-3.5 h-3.5" />
          {labels[language]}
        </div>
        <div className="overflow-hidden flex-1 mask-ticker">
          <div className="inline-flex whitespace-nowrap animate-ticker-scroll hover:[animation-play-state:paused] text-gray-700 dark:text-gray-300">
            {items}
            {items}
          </div>
        </div>
    </div>
  );
}
