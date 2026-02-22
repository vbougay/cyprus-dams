# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Development commands:
- `pnpm dev` - Start Next.js development server (port 8080)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Architecture Overview

This is a React-based Cyprus reservoir monitoring dashboard built with TypeScript, Next.js App Router, and Tailwind CSS. The application visualizes water reservoir data across Cyprus with multi-language support and server-side rendering for SEO.

### Key Architectural Patterns

**Data Management System**: The core architecture revolves around a dynamic data management system in `src/utils/dataManager.ts`. This module:
- Manages multiple datasets (from March 2025 to February 2026) as individual modules
- Provides a unified API that switches between datasets dynamically
- Uses the `availableDataSets` array to define all available data sources
- Defaults to the most recent dataset ('16-FEB-2026')
- All data access goes through this central manager, not direct imports

**Context-Based State Management**:
- `DataContext` manages current dataset selection and animated playback state (`isPlaying`) across the app
- `LanguageContext` handles multi-language support (English, Greek, Russian)
- Both contexts wrap the entire application via `src/components/providers.tsx` (imported by `app/layout.tsx`)

**Next.js App Router Structure**:
- `app/layout.tsx` — Root Server Component, imports `providers.tsx` (the `"use client"` boundary)
- `app/page.tsx` — Homepage Server Component, imports `DashboardClient.tsx`
- `app/media/page.tsx` — Media page Server Component, imports `MediaClient.tsx`
- `app/not-found.tsx` — 404 page (Server Component, no client boundary needed)
- `app/robots.ts`, `app/sitemap.ts` — SEO route handlers
- Only 3 files have `"use client"`: `providers.tsx`, `DashboardClient.tsx`, `MediaClient.tsx` — all other components inherit the client boundary

**Component Structure**:
- Client components: `src/components/DashboardClient.tsx` (main tabbed dashboard), `src/components/MediaClient.tsx` (media export)
- Main page tabs: Dashboard, By Region, Map, Data Table
- Reusable components in `src/components/` for charts, maps, tables, cards, heatmaps, and headers
- UI components from shadcn/ui in `src/components/ui/`

### Data Flow

1. **Data Sources**: Raw Excel files in `/data/` directory containing reservoir data
2. **Data Modules**: Each dataset is converted to a TypeScript module in `src/utils/data-*.ts`
3. **Data Manager**: `dataManager.ts` provides unified access to current dataset
4. **Utilities**: `reservoirUtils.ts` contains calculation functions for drain dates, region totals, water balance (`getOctoberBaselineStorage`), etc.
5. **Components**: Use hooks like `useDataContext()` to access current data

### Key Features Implementation

**Multi-Dataset Support**: Add new datasets by:
1. Creating a new data module in `src/utils/data-DD-MMM-YYYY.ts`
2. Adding to `availableDataSets` array in `dataManager.ts`
3. Updating the default dataset ID if needed

**Creating New Data Files from Excel**:
To add a new dataset from an Excel file (e.g., `data/[DATE]UK.xlsx`):

1. **Extract data structure**: Use Node.js with xlsx package to understand the Excel layout:
   ```bash
   node -e "
   const XLSX = require('xlsx');
   const workbook = XLSX.readFile('./data/[DATE]UK.xlsx');
   const sheetName = workbook.SheetNames[0];
   const worksheet = workbook.Sheets[sheetName];
   const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1, defval: ''});
   // Examine rows for reservoir data
   "
   ```

2. **Create new data module**: Follow the pattern in existing `data-*.ts` files:
   - Import types from `../types`
   - Export `reservoirData` array with all 21 reservoirs
   - Include all required fields: capacity, inflow, storage (current/lastYear), maxStorage, region
   - Export `yearlyInflowData` (usually copy from previous dataset)
   - Export `getReportDate()` function
   - Export `getSummaryChanges()` with bilingual summaries

3. **Data extraction mapping**:
   - Column 0: Reservoir name
   - Column 3: Capacity (MCM)
   - Column 4: Last 24h inflow (usually 0)
   - Column 5: Total inflow since October
   - Column 6: Current storage amount (MCM)
   - Column 7: Current storage percentage
   - Column 8: Last year storage amount (MCM)
   - Column 9: Last year storage percentage
   - Column 10: Max storage amount (MCM)
   - Column 11: Max storage date

4. **Regional classification**:
   - Southern Conveyor: Kouris, Kalavasos, Lefkara, Dipotamos, Germasoyeia, Arminou, Polemidia, Achna
   - Paphos: Asprokremmos, Kannaviou, Mavrokolympos
   - Chrysochou: Evretou, Argaka, Pomos, Agia Marina
   - Nicosia: Vyzakia, Xyliatos, Kalopanagiotis
   - Recharge/Other: Tamassos, Klirou-Malounta, Solea

5. **Update data manager**: Add import and entry to `availableDataSets` array, update default dataset ID

6. **Validation**: Verify total storage percentage matches dashboard display by calculating (total current storage / total capacity) * 100

**Internationalization**: Translations in `src/utils/translations.ts` with language switching via `LanguageContext`

**Interactive Visualizations**:
- Leaflet maps for geographical reservoir display
- Recharts for inflow data visualization
- Custom capacity charts with percentage indicators

### Data Types

Core types defined in `src/types/index.ts`:
- `Reservoir`: Individual reservoir data structure
- `ReservoirRegion`: Regional classification system
- `RegionTotal`: Aggregated regional data
- `MonthlyData`: Monthly inflow data point
- `YearlyInflowData`: Historical inflow data structure

### Important Notes

- The app uses absolute imports with `@/` alias pointing to `src/`
- ESLint is configured but unused variables are disabled
- Development server runs on port 8080 (configured in `package.json` via `next dev --port 8080`)
- The application expects specific data structure from Cyprus Water Development Department
- All reservoir calculations (drain dates, totals) are computed client-side using utility functions
- Global styles are in `app/globals.css` (imported by `app/layout.tsx`)