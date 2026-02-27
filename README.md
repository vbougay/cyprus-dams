# Fragmata.info: Cyprus Reservoir Visualizer

A comprehensive dashboard for monitoring and visualizing water reservoir data across all 21 major reservoirs in Cyprus. Built with Next.js App Router for server-side rendering and SEO. Track storage levels, inflow trends, drain forecasts, and historical changes through 38 data snapshots spanning March 2025 to February 2026.

![Fragmata Dashboard](/public/fragmata.info-screenshot.png)

## Features

- **Dashboard Overview**: Key metrics at a glance — total capacity, current storage, year-over-year change, forecasted restriction date, YTD inflow, and YTD outflow
- **Animated Date Navigation**: Play through all historical snapshots to see how reservoir levels evolved over time
- **Historical Heatmap**: Visual heat map of reservoir fill levels across months and years, organized by region
- **Regional Breakdown**: Aggregate statistics for 5 regions (Southern Conveyor, Paphos, Chrysochou, Nicosia, Recharge/Other) with forecasted restriction dates and recent changes summaries
- **Individual Reservoir Cards**: Detailed view per reservoir with capacity charts, current vs. last year storage, inflow data, max storage history, and restriction forecast
- **Interactive Map**: Leaflet-based map of Cyprus with color-coded markers — green (>75%), yellow (50–75%), orange (25–50%), red (<25%) — sized by capacity
- **Data Table**: Searchable, filterable, and sortable table with all reservoir metrics
- **Monthly Inflow Charts**: Monthly and cumulative inflow views with multi-year comparison and cycle-aware prediction
- **Storage Forecast**: Per-reservoir, per-region, and system-wide storage projections under drought, expected, and recovery scenarios with restriction threshold visualization
- **Media Export**: Download dashboard snapshots as PNG images for sharing
- **Multi-language Support**: English, Greek, and Russian
- **Dark/Light Theme**: System-aware theme with manual toggle
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **SSR & SEO**: Next.js App Router with server-side rendering, auto-generated sitemap and robots.txt

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Maps**: Leaflet / React-Leaflet
- **Package Manager**: pnpm

## Data Source

All data is sourced from the [Cyprus Water Development Department](https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument) of the Ministry of Agriculture. The application includes 38 data snapshots covering March 2025 through February 2026, with information on all 21 reservoirs including capacity, current storage, inflow rates, and historical comparisons.

## Forecasting Approach

The dashboard uses a cycle-aware forecasting engine built on 38 years of historical reservoir storage data (1988–2025). Rather than simple linear extrapolation, it models the multi-year drought-wet cycles that characterize Cyprus's climate.

**Storage Forecast** — Historical water years are classified into dry, moderate, and wet categories based on annual net storage change. The engine identifies the current position in the drought-wet cycle (declining, trough, recovering, or peak) and finds analog years with similar storage levels and trends. Three forward scenarios are simulated over 10 years:

- **Drought**: Assumes dry-year water balance every year (worst case)
- **Expected**: Models the typical cycle — remaining decline followed by recovery then moderation
- **Recovery**: Assumes wet conditions for 2 years then moderate (best case)

Forecasts can be viewed for the entire system, individual regions (Southern Conveyor, Paphos, Chrysochou, Nicosia), or major dams (Kouris, Asprokremmos, Evretou, Kannaviou). Water restriction dates show when storage is projected to drop below a 5% capacity threshold — the point where restrictions typically begin, well before actual depletion.

**Inflow Prediction** — The Monthly Inflow chart predicts remaining months of the current water year using the same cycle classification. Instead of averaging all historical years equally, it averages only the years matching the expected scenario's year type (dry/moderate/wet), producing predictions consistent with the storage forecast.

## API

A public REST API is available at `https://fragmata.info/api/v1/` — no authentication required. It provides endpoints for reservoir summary, individual reservoirs, regional totals, inflow data, and historical storage levels. See [API.md](API.md) for full documentation and Home Assistant integration examples.

## Contact

For questions, feedback, or contributions, please contact:

- Email: [v@bougay.com](mailto:v@bougay.com)

## License

This project is open source and available under the MIT License.
