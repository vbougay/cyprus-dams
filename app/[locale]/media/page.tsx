import type { Metadata } from "next";
import { MediaClient } from "@/components/MediaClient";
import {
  reservoirData,
  yearlyInflowData,
  getReportDate,
  getReservoirsWithDrainDates,
  calculateRegionTotals,
  calculateGrandTotal,
  getOctoberBaselineStorage,
  DEFAULT_DATASET_ID,
} from "@/utils/dataManager";
import { calculateYTDInflow, calculateYTDOutflow } from "@/utils/reservoirUtils";
import { isValidLocale, type Locale } from "@/utils/locale";

const mediaMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Cyprus Reservoir Data Export & Infographic | Fragmata",
    description:
      "Download Cyprus dam and reservoir data as infographic images. Visual summary of water storage levels, capacity charts, and regional breakdowns for all 21 dams.",
  },
  el: {
    title: "Εξαγωγή Δεδομένων & Infographic Ταμιευτήρων Κύπρου | Φράγματα",
    description:
      "Κατεβάστε δεδομένα φραγμάτων και ταμιευτήρων Κύπρου ως infographic. Οπτική σύνοψη επιπέδων αποθήκευσης νερού, γραφήματα χωρητικότητας και ανάλυση ανά περιοχή.",
  },
  ru: {
    title: "Экспорт данных и инфографика водохранилищ Кипра | Фрагмата",
    description:
      "Скачайте данные плотин и водохранилищ Кипра в виде инфографики. Визуальная сводка уровней воды, диаграммы ёмкости и региональная разбивка для всех 21 водохранилищ.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const m = mediaMeta[locale];
  return {
    title: m.title,
    description: m.description,
  };
}

export default function MediaPage() {
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

  return (
    <MediaClient
      initialReservoirs={reservoirs}
      initialRegionTotals={regionTotals}
      initialGrandTotal={grandTotal}
      initialYtdInflow={ytdInflow}
      initialYtdOutflow={ytdOutflow}
    />
  );
}
