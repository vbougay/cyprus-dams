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
} from "@/utils/dataManager";
import { calculateYTDInflow, calculateYTDOutflow } from "@/utils/reservoirUtils";
import { locales, isValidLocale } from "@/utils/locale";
import {
  getAllRegionSlugs,
  getRegionBySlug,
  REGION_SLUG_TO_HEATMAP_KEY,
  REGION_SLUG_TO_FORECAST_ID,
} from "@/utils/slugs";
import { translations } from "@/utils/translations";

export async function generateStaticParams() {
  const regionSlugs = getAllRegionSlugs();
  return locales.flatMap((locale) =>
    regionSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const regionName = getRegionBySlug(slug);
  if (!regionName) return {};

  const t = translations[lang];
  const regionKey =
    regionName === "Southern Conveyor"
      ? "southernConveyor"
      : regionName === "Recharge/Other"
        ? "rechargeOther"
        : (regionName.toLowerCase() as keyof typeof t);
  const translatedName = t[regionKey] || regionName;

  return {
    title:
      lang === "en"
        ? `${regionName} Media Export | Fragmata`
        : `${translatedName} Media | Fragmata`,
    robots: { index: false },
  };
}

export default async function MediaRegionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const regionName = getRegionBySlug(slug);
  if (!regionName) notFound();

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

  const heatmapRegionKey = REGION_SLUG_TO_HEATMAP_KEY[slug];
  const forecastSelectionId = REGION_SLUG_TO_FORECAST_ID[slug] ?? undefined;

  return (
    <RegionDamClient
      type="region"
      mediaMode
      regionName={regionName}
      heatmapRegionKey={heatmapRegionKey}
      forecastSelectionId={forecastSelectionId}
      initialReservoirs={reservoirs}
      initialRegionTotals={regionTotals}
      initialGrandTotal={grandTotal}
      initialYtdInflow={ytdInflow}
      initialYtdOutflow={ytdOutflow}
    />
  );
}
