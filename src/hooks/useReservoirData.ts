import { useState, useEffect } from 'react';
import {
  getReservoirsWithForecastDates,
  getRegionTotalsWithForecasts,
  getGrandTotalWithForecast,
  getReservoirsWithDrainDates,
  calculateRegionTotals,
  calculateGrandTotal,
  yearlyInflowData,
  getReportDate,
  getOctoberBaselineStorage
} from '@/utils/dataManager';
import { calculateYTDInflow, calculateYTDOutflow, YTDInflowResult, YTDOutflowResult } from '@/utils/reservoirUtils';
import { RegionTotal, Reservoir } from '@/types';

interface ReservoirDataResult {
  regionTotals: RegionTotal[];
  grandTotal: RegionTotal | null;
  reservoirs: Reservoir[];
  ytdInflow: YTDInflowResult | null;
  ytdOutflow: YTDOutflowResult | null;
}

export function useReservoirData(
  dataSetId: string,
  useForecast: boolean,
  initial: {
    reservoirs: Reservoir[];
    regionTotals: RegionTotal[];
    grandTotal: RegionTotal;
    ytdInflow: YTDInflowResult | null;
    ytdOutflow: YTDOutflowResult | null;
  }
): ReservoirDataResult {
  const [regionTotals, setRegionTotals] = useState<RegionTotal[]>(initial.regionTotals);
  const [grandTotal, setGrandTotal] = useState<RegionTotal | null>(initial.grandTotal);
  const [reservoirs, setReservoirs] = useState<Reservoir[]>(initial.reservoirs);
  const [ytdInflow, setYtdInflow] = useState<YTDInflowResult | null>(initial.ytdInflow);
  const [ytdOutflow, setYtdOutflow] = useState<YTDOutflowResult | null>(initial.ytdOutflow);

  useEffect(() => {
    const totals = useForecast
      ? getRegionTotalsWithForecasts(dataSetId)
      : calculateRegionTotals(dataSetId);
    setRegionTotals(totals);

    const total = useForecast
      ? getGrandTotalWithForecast(dataSetId)
      : calculateGrandTotal(dataSetId);
    setGrandTotal(total);

    const res = useForecast
      ? getReservoirsWithForecastDates(dataSetId)
      : getReservoirsWithDrainDates(dataSetId);
    setReservoirs(res);

    const inflowData = yearlyInflowData(dataSetId);
    const reportDate = getReportDate(dataSetId);
    const inflow = calculateYTDInflow(inflowData, reportDate);
    setYtdInflow(inflow);

    const octBaseline = getOctoberBaselineStorage(dataSetId);
    if (inflow && octBaseline && total) {
      setYtdOutflow(calculateYTDOutflow(total, inflow, octBaseline));
    } else {
      setYtdOutflow(null);
    }
  }, [dataSetId, useForecast]);

  return { regionTotals, grandTotal, reservoirs, ytdInflow, ytdOutflow };
}
