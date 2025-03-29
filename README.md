# Cyprus Reservoir Visualizer

A comprehensive dashboard for monitoring and visualizing water reservoir data across Cyprus. This application provides real-time insights into reservoir capacities, current storage levels, historical comparisons, and forecasted drain dates.

## Features

- **Dashboard Overview**: At-a-glance view of key metrics including total capacity, current storage, year-over-year comparison, and forecasted drain dates
- **Regional Breakdown**: Detailed information organized by geographical regions (Southern Conveyor, Paphos, Chrysochou, Nicosia, and Recharge/Other)
- **Interactive Map**: Visual representation of all reservoirs across Cyprus with size indicating capacity and color indicating current storage level
- **Data Table**: Comprehensive tabular data with filtering and search capabilities
- **Monthly Inflow Charts**: Historical inflow data visualization with year-over-year comparison
- **Multi-language Support**: Available in English, Greek (Ελληνικά), and Russian (Русский)
- **Historical Data Comparison**: Compare current data with previous year's data and track changes over time
- **Responsive Design**: Optimized for both desktop and mobile devices

## Technologies Used

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript for improved developer experience
- **Vite**: Next-generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind CSS
- **Leaflet**: Interactive map library for displaying reservoir locations
- **Recharts**: Composable charting library for data visualization
- **React Router**: For navigation between different views
- **React Context API**: For state management across the application

## Data Source

All data is sourced from the [Cyprus Water Development Department](https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument) of the Ministry of Agriculture. The application currently includes data sets from:

- March 28, 2025
- March 17, 2025

The data includes information about 21 reservoirs across Cyprus, including their capacity, current storage, inflow rates, and historical data.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd cyprus-dams

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
bun run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
# Build the application
npm run build
# or
bun run build

# Preview the production build
npm run preview
# or
bun run preview
```

## Contact

For questions, feedback, or contributions, please contact:

- Email: [v@bougay.com](mailto:v@bougay.com)

## License

This project is open source and available under the MIT License.
