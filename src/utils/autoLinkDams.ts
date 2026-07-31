import { DAM_SLUG_MAP, REGION_SLUG_MAP } from '@/utils/slugs';
import { translations, damNameGenitiveEl } from '@/utils/translations';
import type { Locale } from '@/utils/locale';

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

interface AutoLinkOptions {
  /** Dam slug to never link (used on a dam's own page). */
  excludeDamSlug?: string;
  /** Also link region names to /region/<slug>. */
  includeRegions?: boolean;
}

// Region name translation keys, matching REGION_SLUG_MAP slugs
const REGION_TRANSLATION_KEY: Record<string, keyof typeof translations.en> = {
  'southern-conveyor': 'southernConveyor',
  'paphos': 'paphos',
  'chrysochou': 'chrysochou',
  'nicosia': 'nicosia',
  'recharge-other': 'rechargeOther',
};

// Prose variants (synonyms, Greek/Russian declined forms) that should also
// link to a region page but differ from the UI translation strings.
const REGION_NAME_ALIASES: Record<string, Partial<Record<Locale, string[]>>> = {
  'southern-conveyor': {
    el: ['Νότιος Μεταφορέας', 'Νότιου Μεταφορέα', 'Νότιο Μεταφορέα'],
    ru: ['Южный водовод', 'Южного водовода', 'Южному водоводу', 'Южного Конвейера'],
  },
};

/**
 * Link the first mention of each dam (and optionally region) in markdown to
 * its /dam/<slug> or /region/<slug> page. Matches the English name plus the
 * locale's translated name (and the Greek genitive form for dams), skipping
 * headings, code fences, widget tokens ({{...}}) and text already inside
 * links. One link per entity per document.
 */
export function autoLinkDams(
  markdown: string,
  lang: Locale,
  options: AutoLinkOptions = {}
): string {
  const basePath = lang === 'en' ? '' : `/${lang}`;

  const entries: { name: string; href: string; id: string }[] = [];
  for (const [slug, { name }] of Object.entries(DAM_SLUG_MAP)) {
    if (slug === options.excludeDamSlug) continue;
    const names = new Set<string>([name]);
    const translated = translations[lang][name as keyof typeof translations.en];
    if (typeof translated === 'string' && translated) names.add(translated);
    if (lang === 'el') {
      const genitive = damNameGenitiveEl[name];
      if (genitive) names.add(genitive);
    }
    for (const n of names) {
      entries.push({ name: n, href: `${basePath}/dam/${slug}`, id: `dam:${slug}` });
    }
  }
  if (options.includeRegions) {
    for (const [slug, regionName] of Object.entries(REGION_SLUG_MAP)) {
      const names = new Set<string>([regionName]);
      const key = REGION_TRANSLATION_KEY[slug];
      const translated = key ? translations[lang][key] : undefined;
      if (typeof translated === 'string' && translated) names.add(translated);
      for (const alias of REGION_NAME_ALIASES[slug]?.[lang] ?? []) names.add(alias);
      for (const n of names) {
        entries.push({ name: n, href: `${basePath}/region/${slug}`, id: `region:${slug}` });
      }
    }
  }
  // Longest names first so e.g. "Klirou-Malounta" wins over a shorter prefix
  entries.sort((a, b) => b.name.length - a.name.length);

  const linked = new Set<string>();
  let inFence = false;

  const lines = markdown.split('\n').map((line) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return line;
    }
    if (inFence || /^\s*#/.test(line) || line.trim().startsWith('{{')) return line;

    let result = line;
    for (const { name, href, id } of entries) {
      if (linked.has(id)) continue;
      const re = new RegExp(
        `(?<![\\p{L}\\[/])${escapeRegExp(name)}(?!\\p{L})`,
        'u'
      );
      const m = re.exec(result);
      if (!m) continue;
      const before = result.slice(0, m.index);
      const after = result.slice(m.index + name.length);
      // Skip matches inside existing link text "[..." or link URL "](..."
      if (/\[[^\]]*$/.test(before) || /\]\([^)]*$/.test(before)) continue;
      result = `${before}[${name}](${href})${after}`;
      linked.add(id);
    }
    return result;
  });

  return lines.join('\n');
}
