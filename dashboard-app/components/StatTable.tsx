'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatTableProps {
  data: Array<{
    metric: string
    gate30: number
    gate40: number
    delta: number
    pValue: number
    significant: boolean
  }>
}

export default function StatTable({ data }: StatTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-card rounded-2xl p-6 card-shadow"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Statistical Summary</h3>
        <p className="text-sm text-muted mt-1">Detailed metrics comparison with significance testing</p>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted">Metric</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted">Gate 30</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted">Gate 40</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted">Δ %</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted">p-value</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-muted">Significance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <motion.tr
                key={row.metric}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={cn(
                  "border-b border-border/50 hover:bg-gray-50/50 transition-colors",
                  row.significant && "bg-positive/5"
                )}
              >
                <td className="py-4 px-4">
                  <span className="font-medium text-foreground">{row.metric}</span>
                </td>
                <td className="py-4 px-4 text-right font-mono text-sm text-foreground">
                  {row.gate30.toFixed(1)}
                  {row.metric.includes('Retention') && '%'}
                </td>
                <td className="py-4 px-4 text-right font-mono text-sm text-foreground">
                  {row.gate40.toFixed(1)}
                  {row.metric.includes('Retention') && '%'}
                </td>
                <td className={cn(
                  "py-4 px-4 text-right font-mono text-sm font-semibold",
                  row.delta > 0 ? "text-positive" : row.delta < 0 ? "text-negative" : "text-muted"
                )}>
                  {row.delta > 0 ? '+' : ''}{row.delta.toFixed(1)}%
                </td>
                <td className="py-4 px-4 text-right font-mono text-sm text-muted">
                  {row.pValue.toFixed(3)}
                </td>
                <td className="py-4 px-4 text-center">
                  {row.significant ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-positive/10 text-positive rounded-lg text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Yes
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-muted rounded-lg text-xs font-semibold">
                      <XCircle className="w-3.5 h-3.5" />
                      No
                    </div>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted">
          <span className="font-semibold">Note:</span> Statistical significance determined at α = 0.05 level. 
          Positive Δ% indicates Gate 40 outperformed Gate 30.
        </p>
      </div>
    </motion.div>
  )
}
