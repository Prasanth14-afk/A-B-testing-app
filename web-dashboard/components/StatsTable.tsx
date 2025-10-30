'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MetricData } from '@/lib/types';

interface StatsTableProps {
  data: MetricData[];
}

const StatsTable: React.FC<StatsTableProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="card-elevated p-6 overflow-hidden"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Statistical Summary
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Metric
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                Gate 30
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                Gate 40
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                Δ Change
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                p-value
              </th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                Significant
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <motion.tr
                key={row.metric}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  'border-b border-gray-100 hover:bg-gray-50 transition-colors',
                  row.significant === 'Yes' && 'bg-red-50/30'
                )}
              >
                <td className="py-4 px-4 text-sm font-medium text-gray-900">
                  {row.metric_name}
                </td>
                <td className="py-4 px-4 text-sm text-right text-gray-700 font-semibold">
                  {row.metric === 'sum_gamerounds'
                    ? row.gate_30.toFixed(2)
                    : `${row.gate_30.toFixed(2)}%`}
                </td>
                <td className="py-4 px-4 text-sm text-right text-gray-700 font-semibold">
                  {row.metric === 'sum_gamerounds'
                    ? row.gate_40.toFixed(2)
                    : `${row.gate_40.toFixed(2)}%`}
                </td>
                <td
                  className={cn(
                    'py-4 px-4 text-sm text-right font-semibold',
                    row.difference > 0 && 'text-green-600',
                    row.difference < 0 && 'text-red-600',
                    row.difference === 0 && 'text-gray-500'
                  )}
                >
                  {row.difference > 0 && '+'}
                  {row.difference.toFixed(2)}
                  {row.metric !== 'sum_gamerounds' && ' pp'}
                </td>
                <td className="py-4 px-4 text-sm text-right font-mono text-gray-600">
                  {row.p_value.toFixed(4)}
                </td>
                <td className="py-4 px-4 text-center">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold',
                      row.significant === 'Yes'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-600'
                    )}
                  >
                    {row.significant === 'Yes' ? (
                      <>
                        <Check className="w-3 h-3" /> Yes
                      </>
                    ) : (
                      <>
                        <X className="w-3 h-3" /> No
                      </>
                    )}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default StatsTable;
