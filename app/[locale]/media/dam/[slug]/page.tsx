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
import { locales, isValidLocale } from "@/utils/locale";
import {
  getAllDamSlugs,
  getDamBySlug,
} from "@/utils/slugs";
import { translations } from "@/utils/translations";
import { REGION_KEYS } from "@/utils/forecastEngine";

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

  return {
    title:
      lang === "en"
        ? `${damInfo.name} Dam Media Export | Fragmata`
        : `${translatedDamName} Media | Fragmata`,
    robots: { index: false },
  };
}

function hasForecastData(key: string): boolean {
  if ((MAJOR_DAM_KEYS as string[]).includes(key)) return true;
  for (const regionKeys of Object.values(REGION_KEYS)) {
    if ((regionKeys as string[]).includes(key)) return true;
  }
  return false;
}

export default async function MediaDamPage({
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

  const forecastSelectionId = hasForecastData(damInfo.key as string)
    ? (damInfo.key as string)
    : undefined;

  return (
    <RegionDamClient
      type="dam"
      mediaMode
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
