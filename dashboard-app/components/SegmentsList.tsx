'use client'

import { motion } from 'framer-motion'

interface SegmentCardProps {
  name: string
  icon: string
  value: number
  index: number
}

export default function SegmentsList({ segments }: { segments: Array<{ name: string; icon: string; value: number }> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
      className="bg-card rounded-2xl p-6 card-shadow"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Player Segments</h3>
          <p className="text-sm text-muted mt-1">Top engagement categories</p>
        </div>
        <div className="px-3 py-1.5 bg-brand/10 text-brand text-xs font-semibold rounded-lg">
          Today
        </div>
      </div>

      <div className="space-y-3">
        {segments.map((segment, index) => (
          <motion.div
            key={segment.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand/20 to-accent/20 flex items-center justify-center text-xl">
                {segment.icon}
              </div>
              <span className="font-medium text-foreground">{segment.name}</span>
            </div>
            <div className="px-3 py-1.5 bg-gray-100 rounded-full">
              <span className="text-sm font-bold text-foreground">{segment.value.toLocaleString()}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
