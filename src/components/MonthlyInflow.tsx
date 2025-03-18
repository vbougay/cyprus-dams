
import React, { useEffect, useState } from 'react';
import { YearlyInflowData } from '@/types';
import { yearlyInflowData } from '@/utils/data';
import { Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ChartData {
  name: string;
  currentYear: number;
  previousYear: number;
}

const MonthlyInflow: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('24/25');

  useEffect(() => {
    prepareChartData();
  }, [selectedYear]);

  const prepareChartData = () => {
    const months = [
      'October', 'November', 'December', 'January', 'February', 'March',
      'April', 'May', 'June', 'July', 'Aug-Sep'
    ];

    // Find the selected year data and previous year data
    const currentYearData = yearlyInflowData.find(data => data.year === selectedYear);
    
    // For comparison, find the previous year's data
    const previousYearIndex = yearlyInflowData.findIndex(data => data.year === selectedYear) + 1;
    const previousYearData = previousYearIndex < yearlyInflowData.length ? 
      yearlyInflowData[previousYearIndex] : null;

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
  const years = yearlyInflowData.map(data => data.year);

  return (
    <Card className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 p-1 animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-water-500" />
            <span>Monthly Inflow</span>
          </div>
          <Tabs defaultValue={selectedYear} className="w-48">
            <TabsList className="grid grid-cols-2">
              {years.slice(0, 2).map(year => (
                <TabsTrigger 
                  key={year} 
                  value={year}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="h-64 md:h-72 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 30 }}
            >
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                interval={0}
                tickMargin={10}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                formatter={(value: number) => [`${value.toFixed(3)} MCM`, undefined]}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.375rem',
                  padding: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
              <Legend />
              <Bar 
                dataKey="currentYear" 
                name={`Year ${selectedYear}`}
                fill="#0ea5e9" 
                radius={[4, 4, 0, 0]} 
                animationDuration={1000}
              />
              <Bar 
                dataKey="previousYear" 
                name="Previous Year"
                fill="#94a3b8" 
                radius={[4, 4, 0, 0]} 
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Data from Cyprus Water Development Department</span>
          </div>
          <div className="text-sm font-medium text-water-600">
            Total: {yearlyInflowData.find(d => d.year === selectedYear)?.total.toFixed(3)} MCM
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyInflow;
