
import React, { useEffect, useState } from 'react';
import { yearlyInflowData } from '@/utils/dataManager';
import { useDataContext } from '@/context/DataContext';
import { Calendar, ChevronDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  currentYear: number;
  previousYear: number;
}

const MonthlyInflow: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('24/25');
  const [isVisible, setIsVisible] = useState(false);
  const { currentDataSetId } = useDataContext();

  useEffect(() => {
    prepareChartData();
    
    // Add a slight delay to ensure chart renders properly
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [selectedYear, currentDataSetId]);

  const prepareChartData = () => {
    const months = [
      'October', 'November', 'December', 'January', 'February', 'March',
      'April', 'May', 'June', 'July', 'Aug-Sep'
    ];

    // Get the yearly inflow data from the data manager
    const inflowData = yearlyInflowData();

    // Find the selected year data and previous year data
    const currentYearData = inflowData.find(data => data.year === selectedYear);
    
    // For comparison, find the previous year's data based on actual year value
    const currentYearParts = selectedYear.split('/');
    const previousYearValue = `${parseInt(currentYearParts[0]) - 1}/${parseInt(currentYearParts[1]) - 1}`;
    const previousYearData = inflowData.find(data => data.year === previousYearValue);

    if (!currentYearData) return;

    // Create the chart data
    const data: ChartData[] = months.map(month => ({
      name: month,
      currentYear: currentYearData.months[month] || 0,
      previousYear: previousYearData ? previousYearData.months[month] || 0 : 0
    }));

    setChartData(data);
  };

  // Available years for selection
  const years = yearlyInflowData().map(data => data.year);

  return (
    <Card className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 p-1 animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-water-500" />
            <span>Monthly Inflow</span>
          </div>
          <Select 
            defaultValue={selectedYear} 
            onValueChange={(value) => setSelectedYear(value)}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className={`h-64 md:h-72 w-full mt-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {chartData.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 30 }}
              >
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  tickMargin={10}
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 border border-gray-200 rounded shadow-md">
                          <p className="font-medium">{label}</p>
                          {payload.map((entry, index) => {
                            const currentYearParts = selectedYear.split('/');
                            const previousYearValue = `${parseInt(currentYearParts[0]) - 1}/${parseInt(currentYearParts[1]) - 1}`;
                            return (
                              <p key={index} style={{ color: entry.color }}>
                                {entry.name === 'currentYear' ? `Year ${selectedYear}` : `Year ${previousYearValue}`}: 
                                {' '}{(entry.value as number).toFixed(3)} MCM
                              </p>
                            );
                          })}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend verticalAlign="top" height={36} />
                <Bar 
                  dataKey="currentYear" 
                  name={`Year ${selectedYear}`}
                  fill="#0ea5e9" 
                  radius={[4, 4, 0, 0]} 
                  animationDuration={1000}
                />
                <Bar 
                  dataKey="previousYear" 
                  name={`Year ${parseInt(selectedYear.split('/')[0]) - 1}/${parseInt(selectedYear.split('/')[1]) - 1}`}
                  fill="#94a3b8" 
                  radius={[4, 4, 0, 0]} 
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Data from Cyprus Water Development Department</span>
          </div>
          <div className="text-sm font-medium text-water-600">
            Total: {yearlyInflowData().find(d => d.year === selectedYear)?.total.toFixed(3)} MCM
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyInflow;
