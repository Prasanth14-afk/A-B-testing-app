'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface RetentionBarChartProps {
  data: Array<{
    version: string;
    metric_name: string;
    percentage: number;
  }>;
}

const RetentionBarChart: React.FC<RetentionBarChartProps> = ({ data }) => {
  // Transform data for Recharts
  const chartData = data.reduce((acc: any[], curr) => {
    const existing = acc.find(item => item.metric === curr.metric_name);
    if (existing) {
      existing[curr.version] = curr.percentage;
    } else {
      acc.push({
        metric: curr.metric_name,
        [curr.version]: curr.percentage,
      });
    }
    return acc;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="card-elevated p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Retention Comparison
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="metric"
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: any) => [`${value.toFixed(2)}%`, '']}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="rect"
          />
          <Bar
            dataKey="gate_30"
            name="Gate 30 (Control)"
            fill="#3B82F6"
            radius={[8, 8, 0, 0]}
            barSize={40}
          />
          <Bar
            dataKey="gate_40"
            name="Gate 40 (Variant)"
            fill="#F97316"
            radius={[8, 8, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RetentionBarChart;
