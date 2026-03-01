import React, { useMemo } from 'react';
import Link from 'next/link';
import { Github, Code, Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useDataContext } from '@/context/DataContext';
import { useTranslation } from '@/utils/translations';
import { reservoirData } from '@/utils/dataManager';
import { REGION_SLUG_MAP, DAM_SLUG_MAP, REGION_DAMS } from '@/utils/slugs';

function localePath(language: string, path: string): string {
  return language === 'en' ? path : `/${language}${path}`;
}

function levelColor(pct: number): string {
  if (pct < 25) return '#ef4444';
  if (pct < 50) return '#f97316';
  if (pct < 75) return '#eab308';
  return '#22c55e';
}

const Footer: React.FC<{ hideLinks?: boolean }> = ({ hideLinks }) => {
  const { language } = useLanguage();
  const { currentDataSetId } = useDataContext();
  const t = useTranslation(language);

  // Build dam name → current storage % lookup
  const damLevels = useMemo(() => {
    if (hideLinks) return {};
    const data = reservoirData(currentDataSetId);
    const map: Record<string, number> = {};
    for (const r of data) {
      map[r.name] = r.storage.current.percentage;
    }
    return map;
  }, [currentDataSetId, hideLinks]);

  const regionSlugs = Object.keys(REGION_DAMS);

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Region/Dam links grid */}
        {!hideLinks && (
        <div className="footer-links-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6 text-xs">
          {regionSlugs.map((regionSlug) => {
            const regionName = REGION_SLUG_MAP[regionSlug];
            const regionKey = regionName === 'Southern Conveyor' ? 'southernConveyor'
              : regionName === 'Recharge/Other' ? 'rechargeOther'
              : regionName.toLowerCase();
            const damSlugs = REGION_DAMS[regionSlug];

            return (
              <div key={regionSlug}>
                <Link
                  href={localePath(language, `/region/${regionSlug}`)}
                  className="font-semibold text-foreground hover:text-water-600 dark:hover:text-water-400 transition-colors"
                >
                  {t(regionKey as any)}
                </Link>
                <ul className="mt-1 space-y-0.5">
                  {damSlugs.map((damSlug) => {
                    const dam = DAM_SLUG_MAP[damSlug];
                    if (!dam) return null;
                    return (
                      <li key={damSlug} className="flex items-center gap-1.5">
                        <span
                          className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: levelColor(damLevels[dam.name] ?? 0) }}
                        />
                        <Link
                          href={localePath(language, `/dam/${damSlug}`)}
                          className="text-muted-foreground hover:text-water-600 dark:hover:text-water-400 transition-colors"
                        >
                          {t(dam.name as any) || dam.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        )}

        {/* Original footer content */}
        <div className={`text-center text-sm text-muted-foreground${hideLinks ? '' : ' border-t border-gray-200 dark:border-gray-800'} pt-4`}>
          <p>
            <a
              href="https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument"
              className="hover:text-water-600 dark:hover:text-water-400 transition-colors"
            >
              {t('dataFrom')}
            </a>
          </p>
          <p className="mt-2 flex items-center justify-center gap-4 flex-wrap">
            <a href="https://www.linkedin.com/in/vbougay/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-water-600 dark:hover:text-water-400 transition-colors">
              <Linkedin className="h-4 w-4" />
              Vladimir Bugay
            </a>
            <a href="mailto:v@bougay.com" className="inline-flex items-center gap-1.5 hover:text-water-600 dark:hover:text-water-400 transition-colors">
              <Mail className="h-4 w-4" />
              v@bougay.com
            </a>
            <a href="https://github.com/vbougay/fragmata.info" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-water-600 dark:hover:text-water-400 transition-colors">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="https://github.com/vbougay/fragmata.info/blob/main/API.md" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-water-600 dark:hover:text-water-400 transition-colors">
              <Code className="h-4 w-4" />
              {t('apiDocs')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
