import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, YAxis, ReferenceDot, ReferenceLine } from 'recharts';
import { SparklineDataPoint } from '@/utils/sparklineData';

function getSparklineColor(percentage: number): { stroke: string; fill: string } {
  if (percentage < 25) return { stroke: '#ef4444', fill: '#ef444430' };
  if (percentage < 50) return { stroke: '#f97316', fill: '#f9731630' };
  if (percentage < 75) return { stroke: '#eab308', fill: '#eab30830' };
  return { stroke: '#22c55e', fill: '#22c55e30' };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' });
}

interface SparklineTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: SparklineDataPoint }>;
}

const SparklineTooltip: React.FC<SparklineTooltipProps> = ({ active, payload }) => {
  if (!active || !payload?.[0]) return null;
  const point = payload[0].payload;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-1.5 py-0.5 text-[10px] shadow-sm">
      <span className="text-muted-foreground">{formatDate(point.date)}</span>
      <span className="ml-1 font-medium text-foreground">{point.percentage.toFixed(1)}%</span>
    </div>
  );
};

interface StorageSparklineProps {
  data: SparklineDataPoint[];
  highlightMax?: SparklineDataPoint;
  highlightMin?: SparklineDataPoint;
  showLevelLines?: boolean;
}

const StorageSparkline: React.FC<StorageSparklineProps> = ({ data, highlightMax, highlightMin, showLevelLines }) => {
  if (data.length === 0) return null;

  const latestPct = data[data.length - 1].percentage;
  const { stroke, fill } = getSparklineColor(latestPct);

  // Find data indices for reference dots
  const maxIndex = highlightMax ? data.findIndex(d => d.date === highlightMax.date) : -1;
  const minIndex = highlightMin ? data.findIndex(d => d.date === highlightMin.date) : -1;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 3, right: 3, bottom: 3, left: 3 }}>
        <YAxis domain={[0, 100]} hide />
        {showLevelLines && [25, 50, 75].map(level => (
          <ReferenceLine
            key={level}
            y={level}
            stroke="#9ca3af"
            strokeWidth={0.5}
            strokeDasharray="2 2"
          />
        ))}
        <Tooltip
          content={<SparklineTooltip />}
          cursor={false}
          allowEscapeViewBox={{ x: true, y: true }}
        />
        <Area
          type="monotone"
          dataKey="percentage"
          stroke={stroke}
          fill={fill}
          strokeWidth={1.5}
          dot={false}
          activeDot={{ r: 2, fill: stroke }}
          isAnimationActive={false}
        />
        {highlightMax && maxIndex >= 0 && (
          <ReferenceDot
            x={maxIndex}
            y={highlightMax.percentage}
            r={3}
            fill="#22c55e"
            stroke="#fff"
            strokeWidth={1}
          />
        )}
        {highlightMin && minIndex >= 0 && (
          <ReferenceDot
            x={minIndex}
            y={highlightMin.percentage}
            r={3}
            fill="#ef4444"
            stroke="#fff"
            strokeWidth={1}
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StorageSparkline;
