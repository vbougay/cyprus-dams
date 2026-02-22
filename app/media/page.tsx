import { MediaClient } from "@/components/MediaClient";
import { reservoirData, yearlyInflowData, getReportDate } from "@/utils/data-20-FEB-2026";
import {
  calculateRegionTotals as calculateRegionTotalsUtil,
  calculateGrandTotal as calculateGrandTotalUtil,
  getReservoirsWithDrainDates as getReservoirsWithDrainDatesUtil,
  calculateYTDInflow,
  calculateYTDOutflow,
} from "@/utils/reservoirUtils";
import { getOctoberBaselineStorage } from "@/utils/dataManager";

export default function MediaPage() {
  const reservoirs = getReservoirsWithDrainDatesUtil(reservoirData);
  const regionTotals = calculateRegionTotalsUtil(reservoirData);
  const grandTotal = calculateGrandTotalUtil(reservoirData);
  const reportDate = getReportDate();
  const ytdInflow = calculateYTDInflow(yearlyInflowData, reportDate);
  const octBaseline = getOctoberBaselineStorage();
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
