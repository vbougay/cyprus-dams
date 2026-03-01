import { NextResponse } from "next/server";
import {
  reservoirData,
  yearlyInflowData,
  getReportDate,
  waterTransferred,
} from "@/utils/data-24-FEB-2026";
import {
  calculateRegionTotals,
  calculateGrandTotal,
  calculateDrainDate,
  calculateYTDInflow,
  calculateYTDOutflow,
  parseReportDate,
} from "@/utils/reservoirUtils";
import { getOctoberBaselineStorage } from "@/utils/dataManager";
import { calculateForecast, MAIN_RES_KEYS, REGION_KEYS } from "@/utils/forecastEngine";
import { HistoricalStorageEntry } from "@/utils/historicalStorageData";
import { Reservoir, RegionTotal } from "@/types";

const MONTH_KEYS = [
  "October", "November", "December", "January", "February", "March",
  "April", "May", "June", "July", "Aug-Sep",
];

const MONTH_SHORT = [
  "Oct", "Nov", "Dec", "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul", "Aug-Sep",
];

const RESERVOIR_NAME_TO_KEY: Record<string, keyof HistoricalStorageEntry> = {
  'Kouris': 'kouris',
  'Kalavasos': 'kalavasos',
  'Lefkara': 'lefkara',
  'Dipotamos': 'dipotamos',
  'Germasoyeia': 'germasoyeia',
  'Arminou': 'arminou',
  'Polemidia': 'polemidia',
  'Achna': 'achna',
  'Asprokremmos': 'asprokremmos',
  'Kannaviou': 'kannaviou',
  'Mavrokolympos': 'mavrokolympos',
  'Evretou': 'evretou',
  'Argaka': 'argaka',
  'Pomos': 'pomos',
  'Agia Marina': 'agiaMarina',
  'Vyzakia': 'vyzakia',
  'Xyliatos': 'xyliatos',
  'Kalopanagiotis': 'kalopanagiotis',
};

function getReservoirForecastDate(r: Reservoir, reportDate: string): string {
  const key = RESERVOIR_NAME_TO_KEY[r.name];
  if (key && r.region !== 'Recharge/Other') {
    const f = calculateForecast(r.storage.current.amount, r.capacity, reportDate, [key], 5);
    return f.expectedRestriction;
  }
  return calculateDrainDate(r) ?? '—';
}

function getRegionForecastDate(data: Reservoir[], regionName: string, reportDate: string): string {
  const regionKeys = REGION_KEYS[regionName];
  if (!regionKeys) return '—';
  let storage = 0, capacity = 0;
  for (const key of regionKeys) {
    const res = data.find(r => RESERVOIR_NAME_TO_KEY[r.name] === key);
    if (res) { storage += res.storage.current.amount; capacity += res.capacity; }
  }
  const f = calculateForecast(storage, capacity, reportDate, regionKeys, 7);
  return f.expectedRestriction;
}

function calendarMonthToWaterYearIndex(calMonth: number): number {
  if (calMonth >= 10) return calMonth - 10;
  if (calMonth <= 7) return calMonth + 2;
  return 10;
}

function fmt(n: number, decimals = 1): string {
  return n.toFixed(decimals);
}

function sign(n: number): string {
  return n >= 0 ? `+${fmt(n)}` : fmt(n);
}

function buildMarkdown(): string {
  const reportDate = getReportDate();
  const allReservoirs = reservoirData;
  // Compute forecast-based restriction dates for each reservoir
  const reservoirs = allReservoirs.map(r => ({
    ...r,
    drainDate: getReservoirForecastDate(r, reportDate),
  }));
  const regionTotals = calculateRegionTotals(allReservoirs);
  const grandTotal = calculateGrandTotal(allReservoirs);
  const ytdInflow = calculateYTDInflow(yearlyInflowData, reportDate);
  const octBaseline = getOctoberBaselineStorage();
  const ytdOutflow =
    ytdInflow && octBaseline && grandTotal
      ? calculateYTDOutflow(grandTotal, ytdInflow, octBaseline)
      : null;

  // Current month in water year for forecast
  const parsed = parseReportDate(reportDate);
  const waterYearIndex = parsed ? calendarMonthToWaterYearIndex(parsed.month) : -1;

  // Historical averages for forecast (all seasons except latest)
  const latestSeason = yearlyInflowData[yearlyInflowData.length - 1];
  const completedSeasons = yearlyInflowData.filter(d => d.year !== latestSeason.year);
  const historicalAvg: Record<string, number> = {};
  MONTH_KEYS.forEach(month => {
    const values = completedSeasons.map(s => s.months[month] || 0);
    historicalAvg[month] = values.length > 0
      ? values.reduce((a, b) => a + b, 0) / values.length
      : 0;
  });

  // Forecast total = actual months + forecasted remaining months
  let forecastTotal = 0;
  MONTH_KEYS.forEach((month, i) => {
    forecastTotal += i <= waterYearIndex
      ? (latestSeason.months[month] || 0)
      : historicalAvg[month];
  });

  const lines: string[] = [];

  // Header
  lines.push("# Fragmata — Cyprus Reservoir Monitoring Dashboard");
  lines.push("");
  lines.push("> Real-time water reservoir monitoring dashboard for Cyprus, tracking storage levels,");
  lines.push("> inflows, drain date forecasts, and historical trends for 21 reservoirs across 5 regions.");
  lines.push("> Data sourced from the Cyprus Water Development Department.");
  lines.push("");
  lines.push(`- Website: https://fragmata.info`);
  lines.push(`- Data source: [Cyprus Water Development Department](https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument)`);
  lines.push(`- Report date: ${reportDate}`);
  lines.push(`- GitHub: https://github.com/vbougay/fragmata.info`);
  lines.push(`- Contact: v@bougay.com`);
  lines.push("");

  // Summary
  lines.push("## Summary");
  lines.push("");
  lines.push("| Metric | Value |");
  lines.push("|--------|-------|");
  lines.push(`| Total capacity | ${fmt(grandTotal.capacity)} MCM |`);
  lines.push(`| Current storage | ${fmt(grandTotal.storage.current.amount)} MCM (${fmt(grandTotal.storage.current.percentage)}%) |`);
  lines.push(`| Last year storage | ${fmt(grandTotal.storage.lastYear.amount)} MCM (${fmt(grandTotal.storage.lastYear.percentage)}%) |`);
  const yoyChange = grandTotal.storage.current.percentage - grandTotal.storage.lastYear.percentage;
  lines.push(`| Year-over-year change | ${sign(yoyChange)}% |`);
  // Grand total forecast
  let mainStorage = 0, mainCapacity = 0;
  for (const key of MAIN_RES_KEYS) {
    const res = allReservoirs.find(r => RESERVOIR_NAME_TO_KEY[r.name] === key);
    if (res) { mainStorage += res.storage.current.amount; mainCapacity += res.capacity; }
  }
  const grandForecast = calculateForecast(mainStorage, mainCapacity, reportDate, MAIN_RES_KEYS, 7);
  lines.push(`| Forecasted restrictions | ${grandForecast.expectedRestriction} (drought: ${grandForecast.droughtRestriction}, recovery: ${grandForecast.recoveryRestriction}) |`);
  lines.push(`| Cycle phase | ${grandForecast.cyclePhase} (${grandForecast.yearsInPhase} years), confidence: ${grandForecast.confidence} |`);
  if (ytdInflow) {
    const inflowChangeStr = ytdInflow.percentChange !== null
      ? ` (${sign(Math.round(ytdInflow.percentChange))}% vs last year: ${fmt(ytdInflow.lastYearYTD)} MCM)`
      : "";
    lines.push(`| YTD inflow (${ytdInflow.currentYear}) | ${fmt(ytdInflow.currentYTD)} MCM${inflowChangeStr} |`);
  }
  if (ytdOutflow) {
    const outflowChangeStr = ytdOutflow.percentChange !== null
      ? ` (${sign(Math.round(ytdOutflow.percentChange))}% vs last year: ${fmt(ytdOutflow.lastYearOutflow)} MCM)`
      : "";
    lines.push(`| YTD outflow | ${fmt(ytdOutflow.currentOutflow)} MCM${outflowChangeStr} |`);
  }
  if (waterTransferred) {
    lines.push(`| Water transferred | ${fmt(waterTransferred.sinceOct)} MCM (${waterTransferred.from} → ${waterTransferred.to} since Oct) |`);
  }
  lines.push("");

  // Reservoirs by Region
  lines.push("## Reservoirs by Region");
  lines.push("");

  const regionOrder = ["Southern Conveyor", "Paphos", "Chrysochou", "Nicosia", "Recharge/Other"];
  for (const regionName of regionOrder) {
    const regionTotal = regionTotals.find(r => r.region === regionName);
    const regionReservoirs = reservoirs.filter(r => r.region === regionName);
    if (!regionTotal) continue;

    lines.push(`### ${regionName}`);
    lines.push("");
    const regionRestrictionDate = getRegionForecastDate(allReservoirs, regionName, reportDate);
    lines.push(`Region total: ${fmt(regionTotal.storage.current.amount)} MCM / ${fmt(regionTotal.capacity)} MCM capacity (${fmt(regionTotal.storage.current.percentage)}%) — Last year: ${fmt(regionTotal.storage.lastYear.percentage)}% — Forecasted restrictions: ${regionRestrictionDate}`);
    lines.push("");
    lines.push("| Reservoir | Capacity (MCM) | Storage (MCM) | % Full | Last Year % | YTD Inflow (MCM) | Last 24h (MCM) | Max Storage (MCM) | Restriction Date |");
    lines.push("|-----------|---------------|--------------|--------|-------------|-----------------|---------------|------------------|-----------------|");
    for (const r of regionReservoirs) {
      lines.push(
        `| ${r.name} | ${fmt(r.capacity)} | ${fmt(r.storage.current.amount)} | ${fmt(r.storage.current.percentage)}% | ${fmt(r.storage.lastYear.percentage)}% | ${fmt(r.inflow.totalSince)} | ${fmt(r.inflow.last24Hours, 3)} | ${fmt(r.maxStorage.amount)} (${r.maxStorage.date}) | ${r.drainDate || "—"} |`
      );
    }
    lines.push("");
  }

  // Seasonal Inflow History
  lines.push("## Seasonal Inflow History (MCM)");
  lines.push("");
  lines.push(`| Season | ${MONTH_SHORT.join(" | ")} | Total |`);
  lines.push(`|--------|${MONTH_SHORT.map(() => "-----").join("|")}|-------|`);

  // Show newest first
  for (let i = yearlyInflowData.length - 1; i >= 0; i--) {
    const d = yearlyInflowData[i];
    const isLatest = d.year === latestSeason.year;
    const cells = MONTH_KEYS.map((month, mi) => {
      const val = d.months[month] || 0;
      const str = fmt(val, 3);
      // Mark forecast months for latest season
      if (isLatest && mi > waterYearIndex) return `*${fmt(historicalAvg[month], 3)}*`;
      return str;
    });
    const total = isLatest ? fmt(forecastTotal, 3) : fmt(d.total, 3);
    const totalStr = isLatest ? `${fmt(d.total, 3)} (${total} forecast)` : fmt(d.total, 3);
    lines.push(`| ${d.year} | ${cells.join(" | ")} | ${totalStr} |`);
  }
  lines.push("");
  lines.push("*Italicized values for the current season are forecasts based on historical averages of completed seasons.*");
  lines.push("");

  // Methodology
  lines.push("## Methodology");
  lines.push("");
  lines.push("- **Water year**: October through September (e.g., season 25/26 = Oct 2025 – Sep 2026)");
  lines.push("- **Grand total**: Excludes Recharge/Other region (Tamassos, Klirou-Malounta, Solea)");
  lines.push("- **Restriction forecast**: Cycle-aware model using 38 years of historical storage data. Classifies the current position in the multi-year drought-wet cycle, builds seasonal water balance profiles for dry/moderate/wet years, and simulates forward under three scenarios (drought/expected/recovery) to estimate when storage drops below the restriction threshold (5% for individual reservoirs, 7% for regions and grand total). Values: \"Not Restricted\" (stays above threshold), \"Already Restricted\", or MM/YYYY");
  lines.push("- **Cycle phase**: declining (storage trending down from peak), trough (extended low), recovering (trending up from trough), peak (extended high)");
  lines.push("- **YTD outflow**: Water balance = total inflow since Oct − (current storage − Oct baseline storage)");
  lines.push("- **Inflow forecast**: Average of cycle-aware year group (dry/moderate/wet based on current cycle phase) for each remaining month in the current water year");
  lines.push("- **Storage units**: MCM = Million Cubic Meters");
  lines.push("");

  return lines.join("\n");
}

export async function GET() {
  const content = buildMarkdown();
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
