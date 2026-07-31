import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { RegionDamClient } from "@/components/RegionDamClient";
import { getDamMetadata } from "@/utils/damMetadata";
import { getDamCoordinates } from "@/utils/damMapLinks";
import {
  getReservoirsWithDrainDates,
  calculateRegionTotals,
  calculateGrandTotal,
  yearlyInflowData,
  getReportDate,
  getOctoberBaselineStorage,
  DEFAULT_DATASET_ID,
  MAJOR_DAM_KEYS,
  getDamSummary,
} from "@/utils/dataManager";
import { calculateYTDInflow, calculateYTDOutflow } from "@/utils/reservoirUtils";
import { locales, isValidLocale, type Locale } from "@/utils/locale";
import {
  getAllDamSlugs,
  getDamBySlug,
  getRegionSlugForDam,
  REGION_SLUG_MAP,
} from "@/utils/slugs";
import { translations, damNameGenitiveEl } from "@/utils/translations";
import { autoLinkDams } from "@/utils/autoLinkDams";
import { REGION_KEYS } from "@/utils/forecastEngine";

const siteUrl = "https://fragmata.info";

// Static "About" prose per dam, stored like articles: content/dams/<slug>/<lang>.md
function readDamAboutMd(slug: string, lang: string): Promise<string | null> {
  const mdPath = path.join(process.cwd(), "content", "dams", slug, `${lang}.md`);
  return fs.readFile(mdPath, "utf-8").catch(() => null);
}

export async function generateStaticParams() {
  const damSlugs = getAllDamSlugs();
  return locales.flatMap((locale) =>
    damSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const damInfo = getDamBySlug(slug);
  if (!damInfo) return {};

  const t = translations[lang];
  const translatedDamName = t[damInfo.name as keyof typeof t] || damInfo.name;
  const elGenitive = damNameGenitiveEl[damInfo.name] ?? translatedDamName;

  // Get region name for context
  const regionSlug = getRegionSlugForDam(slug);
  const regionName = regionSlug ? REGION_SLUG_MAP[regionSlug] : undefined;
  const regionKey = regionName === "Southern Conveyor"
    ? "southernConveyor"
    : regionName === "Recharge/Other"
      ? "rechargeOther"
      : regionName?.toLowerCase();
  const translatedRegion = regionKey
    ? (t[regionKey as keyof typeof t] || regionName)
    : "";

  const title =
    lang === "en"
      ? `${damInfo.name} Dam Water Level Today | ${regionName} | Fragmata`
      : lang === "el"
        ? `Φράγμα ${elGenitive} | Επίπεδο Νερού Σήμερα | ${translatedRegion} | Fragmata`
        : `Дамба ${translatedDamName} | Уровень воды сегодня | ${translatedRegion} | Фрагмата`;
  const damSummary = getDamSummary(damInfo.name, lang as 'en' | 'el' | 'ru', DEFAULT_DATASET_ID);
  const description = damSummary
    ?? (lang === "en"
      ? `Current water level, storage capacity, inflow data, and forecast for ${damInfo.name} dam in ${regionName}, Cyprus.`
      : lang === "el"
        ? `Τρέχον επίπεδο νερού, χωρητικότητα και πρόβλεψη για το φράγμα ${elGenitive}, ${translatedRegion}, Κύπρος.`
        : `Текущий уровень воды, вместимость и прогноз для плотины ${translatedDamName}, ${translatedRegion}, Кипр.`);

  const localeUrl = (l: string, path: string) =>
    l === "en" ? `${siteUrl}${path}` : `${siteUrl}/${l}${path}`;
  const canonical = localeUrl(lang, `/dam/${slug}`);
  // Per-dam, per-locale social card; ?v= = report date busts platform OG caches on each data update.
  const ogImage = `${siteUrl}/og/dam/${slug}.${lang}.png?v=${getReportDate(DEFAULT_DATASET_ID)}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, `/dam/${slug}`)]),
        ["x-default", localeUrl("en", `/dam/${slug}`)],
      ]),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Fragmata",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Check if a dam key has forecast data available (any dam in a non-recharge region)
function hasForecastData(key: string): boolean {
  if ((MAJOR_DAM_KEYS as string[]).includes(key)) return true;
  for (const regionKeys of Object.values(REGION_KEYS)) {
    if ((regionKeys as string[]).includes(key)) return true;
  }
  return false;
}

export default async function DamPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = (isValidLocale(locale) ? locale : "en") as "en" | "el" | "ru";
  const damInfo = getDamBySlug(slug);
  if (!damInfo) notFound();

  const dsId = DEFAULT_DATASET_ID;
  const reservoirs = getReservoirsWithDrainDates(dsId);
  const regionTotals = calculateRegionTotals(dsId);
  const grandTotal = calculateGrandTotal(dsId);
  const reportDate = getReportDate(dsId);
  const ytdInflow = calculateYTDInflow(yearlyInflowData(dsId), reportDate);
  const octBaseline = getOctoberBaselineStorage(dsId);
  const ytdOutflow =
    ytdInflow && octBaseline && grandTotal
      ? calculateYTDOutflow(grandTotal, ytdInflow, octBaseline)
      : null;

  // Use the dam key as forecast selection ID if forecast is available
  const forecastSelectionId = hasForecastData(damInfo.key as string)
    ? (damInfo.key as string)
    : undefined;

  // Static "About" prose (all locales, so the client can switch language in place)
  const [aboutEn, aboutEl, aboutRu] = await Promise.all([
    readDamAboutMd(slug, "en"),
    readDamAboutMd(slug, "el"),
    readDamAboutMd(slug, "ru"),
  ]);
  // Link mentions of other dams and regions in the prose to their pages
  const linkOpts = { excludeDamSlug: slug, includeRegions: true };
  const aboutMd = {
    ...(aboutEn ? { en: autoLinkDams(aboutEn, "en", linkOpts) } : {}),
    ...(aboutEl ? { el: autoLinkDams(aboutEl, "el", linkOpts) } : {}),
    ...(aboutRu ? { ru: autoLinkDams(aboutRu, "ru", linkOpts) } : {}),
  };

  // FAQ structured data with dam-specific questions; answers mirror content
  // visible on the page (summary line, DamFacts strip, stat cards).
  const t = translations[lang];
  const translatedDamName = t[damInfo.name as keyof typeof t] || damInfo.name;
  const elGenitive = damNameGenitiveEl[damInfo.name] ?? translatedDamName;
  const damSummary = getDamSummary(damInfo.name, lang, dsId);
  const faqQuestion =
    lang === "en"
      ? `What is the current water level at ${damInfo.name} Dam?`
      : lang === "el"
        ? `Ποιο είναι το τρέχον επίπεδο νερού στο φράγμα ${elGenitive};`
        : `Какой текущий уровень воды на плотине ${translatedDamName}?`;

  const meta = getDamMetadata(damInfo.name);
  const reservoir = reservoirs.find((r) => r.name === damInfo.name);
  const staticFaq: { q: string; a: string }[] = [];
  if (reservoir) {
    const capacity = Math.round(reservoir.capacity * 10) / 10;
    staticFaq.push(
      lang === "en"
        ? {
            q: `How big is ${damInfo.name} Dam?`,
            a: `${damInfo.name} reservoir has a total capacity of ${capacity} million cubic metres (MCM).`,
          }
        : lang === "el"
          ? {
              q: `Πόσο μεγάλο είναι το φράγμα ${elGenitive};`,
              a: `Ο ταμιευτήρας ${elGenitive} έχει συνολική χωρητικότητα ${capacity} εκατομμύρια κυβικά μέτρα (ΕΚΜ).`,
            }
          : {
              q: `Насколько велика плотина ${translatedDamName}?`,
              a: `Водохранилище ${translatedDamName} имеет общую ёмкость ${capacity} млн кубометров (МКМ).`,
            }
    );
  }
  if (meta) {
    staticFaq.push(
      lang === "en"
        ? {
            q: `When was ${damInfo.name} Dam built?`,
            a: `${damInfo.name} Dam was completed in ${meta.yearBuilt}. It is a ${meta.height}-metre ${meta.type} dam${meta.river ? ` on the ${meta.river} river` : ""}.`,
          }
        : lang === "el"
          ? {
              q: `Πότε κατασκευάστηκε το φράγμα ${elGenitive};`,
              a: `Το φράγμα ${elGenitive} ολοκληρώθηκε το ${meta.yearBuilt}. Έχει ύψος ${meta.height} μέτρα${meta.river ? ` και φράσσει τον ποταμό ${meta.river}` : ""}.`,
            }
          : {
              q: `Когда была построена плотина ${translatedDamName}?`,
              a: `Плотина ${translatedDamName} была завершена в ${meta.yearBuilt} году. Её высота — ${meta.height} м${meta.river ? `, она перекрывает реку ${meta.river}` : ""}.`,
            }
    );
  }

  const coords = getDamCoordinates(damInfo.name);
  const alternateNames = Array.from(
    new Set(
      (["en", "el", "ru"] as const)
        .map((l) => translations[l][damInfo.name as keyof typeof translations.en] || damInfo.name)
        .filter((n) => n !== translatedDamName)
    )
  );

  // Absolute raster image for Google's SERP thumbnail (og:image is ignored by Search).
  const ogImage = `${siteUrl}/og/dam/${slug}.${lang}.png?v=${reportDate}`;
  const canonical =
    lang === "en" ? `${siteUrl}/dam/${slug}` : `${siteUrl}/${lang}/dam/${slug}`;
  const pageName =
    lang === "en"
      ? `${damInfo.name} Dam`
      : lang === "el"
        ? `Φράγμα ${elGenitive}`
        : `Плотина ${translatedDamName}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                url: canonical,
                name: pageName,
                inLanguage: lang,
                image: ogImage,
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: ogImage,
                  width: 1200,
                  height: 630,
                },
              },
              {
                "@type": "Reservoir",
                name: pageName,
                ...(alternateNames.length ? { alternateName: alternateNames } : {}),
                url: canonical,
                ...(coords
                  ? {
                      geo: {
                        "@type": "GeoCoordinates",
                        latitude: coords.lat,
                        longitude: coords.lng,
                      },
                    }
                  : {}),
                containedInPlace: { "@type": "Country", name: "Cyprus" },
              },
              ...(damSummary || staticFaq.length
                ? [
                    {
                      "@type": "FAQPage",
                      mainEntity: [
                        ...(damSummary
                          ? [
                              {
                                "@type": "Question",
                                name: faqQuestion,
                                acceptedAnswer: {
                                  "@type": "Answer",
                                  text: damSummary,
                                },
                              },
                            ]
                          : []),
                        ...staticFaq.map(({ q, a }) => ({
                          "@type": "Question",
                          name: q,
                          acceptedAnswer: { "@type": "Answer", text: a },
                        })),
                      ],
                    },
                  ]
                : []),
            ],
          }),
        }}
      />
      <RegionDamClient
      type="dam"
      damName={damInfo.name}
      damKey={damInfo.key}
      damSlug={slug}
      forecastSelectionId={forecastSelectionId}
      initialReservoirs={reservoirs}
      initialRegionTotals={regionTotals}
      initialGrandTotal={grandTotal}
      initialYtdInflow={ytdInflow}
      initialYtdOutflow={ytdOutflow}
      aboutMd={aboutMd}
    />
    </>
  );
}
