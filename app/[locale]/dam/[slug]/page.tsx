import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RegionDamClient } from "@/components/RegionDamClient";
import {
  getReservoirsWithDrainDates,
  calculateRegionTotals,
  calculateGrandTotal,
  yearlyInflowData,
  getReportDate,
  getOctoberBaselineStorage,
  DEFAULT_DATASET_ID,
  MAJOR_DAM_KEYS,
} from "@/utils/dataManager";
import { calculateYTDInflow, calculateYTDOutflow } from "@/utils/reservoirUtils";
import { locales, isValidLocale, type Locale } from "@/utils/locale";
import {
  getAllDamSlugs,
  getDamBySlug,
  getRegionSlugForDam,
  REGION_SLUG_MAP,
} from "@/utils/slugs";
import { translations } from "@/utils/translations";
import { REGION_KEYS } from "@/utils/forecastEngine";

const siteUrl = "https://fragmata.info";

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
      ? `${damInfo.name} Dam Water Level | ${regionName} | Fragmata`
      : `${translatedDamName} | ${translatedRegion} | Fragmata`;
  const description =
    lang === "en"
      ? `Current water level, storage capacity, inflow data, and forecast for ${damInfo.name} dam in ${regionName}, Cyprus.`
      : lang === "el"
        ? `Τρέχον επίπεδο νερού, χωρητικότητα και πρόβλεψη για το φράγμα ${translatedDamName}, ${translatedRegion}, Κύπρος.`
        : `Текущий уровень воды, вместимость и прогноз для плотины ${translatedDamName}, ${translatedRegion}, Кипр.`;

  const localeUrl = (l: string, path: string) =>
    l === "en" ? `${siteUrl}${path}` : `${siteUrl}/${l}${path}`;
  const canonical = localeUrl(lang, `/dam/${slug}`);

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
    },
  };
}

// Check if a dam key has forecast data available
function hasForecastData(key: string): boolean {
  // Major dams have individual forecasts
  if ((MAJOR_DAM_KEYS as string[]).includes(key)) return true;
  // Dams in forecast regions can use region-level forecast
  // But for individual dam pages, we only show individual dam forecasts
  // Check if this key is in any region (non-recharge)
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
  const { slug } = await params;
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

  return (
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
    />
  );
}
