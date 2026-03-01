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
import { locales, isValidLocale, type Locale } from "@/utils/locale";
import {
  getAllRegionSlugs,
  getRegionBySlug,
  REGION_SLUG_TO_HEATMAP_KEY,
  REGION_SLUG_TO_FORECAST_ID,
} from "@/utils/slugs";
import { translations } from "@/utils/translations";

const siteUrl = "https://fragmata.info";

const regionMetaDescriptions: Record<string, Record<Locale, string>> = {
  "southern-conveyor": {
    en: "Water levels for Southern Conveyor dams: Kouris, Kalavasos, Lefkara, Dipotamos, Germasoyeia, Arminou, Polemidia, Achna. Current storage, forecasts, and historical data.",
    el: "Επίπεδα νερού για φράγματα Νότιου Αγωγού: Κούρης, Καλαβασός, Λεύκαρα, Διπόταμος, Γερμασόγεια, Αρμίνου, Πολεμίδια, Άχνα.",
    ru: "Уровни воды плотин Южного Конвейера: Курис, Калавасос, Лефкара, Дипотамос, Гермасойя, Арминоу, Полемидия, Ахна.",
  },
  paphos: {
    en: "Water levels for Paphos region dams: Asprokremmos, Kannaviou, Mavrokolympos. Current storage capacity and forecasts.",
    el: "Επίπεδα νερού φραγμάτων Πάφου: Ασπρόκρεμμος, Κανναβιού, Μαυροκόλυμπος.",
    ru: "Уровни воды плотин региона Пафос: Аспрокреммос, Каннавиу, Мавроколимбос.",
  },
  chrysochou: {
    en: "Water levels for Chrysochou region dams: Evretou, Argaka, Pomos, Agia Marina. Current storage and historical data.",
    el: "Επίπεδα νερού φραγμάτων Χρυσοχούς: Ευρέτου, Αργάκα, Πόμος, Αγία Μαρίνα.",
    ru: "Уровни воды плотин региона Хрисоху: Эвретоу, Аргака, Помос, Агиа Марина.",
  },
  nicosia: {
    en: "Water levels for Nicosia region dams: Vyzakia, Xyliatos, Kalopanagiotis. Current storage and forecasts.",
    el: "Επίπεδα νερού φραγμάτων Λευκωσίας: Βυζακιά, Ξυλιάτου, Καλοπαναγιώτης.",
    ru: "Уровни воды плотин Никосии: Визакия, Ксилиату, Калопанайотис.",
  },
  "recharge-other": {
    en: "Water levels for Recharge/Other dams: Tamassos, Klirou-Malounta, Solea. Current storage and historical data.",
    el: "Επίπεδα νερού φραγμάτων Εμπλουτισμού: Ταμασός, Κλήρου-Μαλούντα, Σολέα.",
    ru: "Уровни воды плотин Пополнения: Тамассос, Клиру-Малунта, Солея.",
  },
};

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

  const title =
    lang === "en"
      ? `${regionName} Dam Water Levels | Fragmata`
      : `${translatedName} | Fragmata`;
  const description =
    regionMetaDescriptions[slug]?.[lang] ?? `${translatedName} dam water levels`;

  const localeUrl = (l: string, path: string) =>
    l === "en" ? `${siteUrl}${path}` : `${siteUrl}/${l}${path}`;
  const canonical = localeUrl(lang, `/region/${slug}`);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, `/region/${slug}`)]),
        ["x-default", localeUrl("en", `/region/${slug}`)],
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

export default async function RegionPage({
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
