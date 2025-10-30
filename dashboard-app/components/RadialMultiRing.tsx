'use client'

import { motion } from 'framer-motion'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts'

interface RadialMultiRingProps {
  data: Array<{
    category: string
    value: number
    fill: string
  }>
}

export default function RadialMultiRing({ data }: RadialMultiRingProps) {
  // Transform data for radial chart (values need to be scaled for visualization)
  const chartData = data.map((item, index) => ({
    ...item,
    displayValue: item.value,
    value: 100 - (index * 25), // Stagger the rings
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card rounded-2xl p-6 card-shadow"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-foreground">Performance Metrics</h3>
        <p className="text-sm text-muted mt-1">Key engagement indicators</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative" style={{ width: '45%', height: '240px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="30%" 
              outerRadius="90%" 
              data={chartData}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar
                background={{ fill: 'hsl(var(--border))' }}
                dataKey="value"
                cornerRadius={10}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          
          {/* Center Value - Above the chart */}
          <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none">
            <p className="text-2xl font-bold text-foreground">
              {(data.reduce((acc, item) => acc + item.value, 0) / data.length).toFixed(1)}%
            </p>
          </div>
          
          {/* Average Label - Below the chart */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
            <p className="text-xs text-muted">Average</p>
          </div>
        </div>

        <div className="flex-1 space-y-3 pl-2">
          {data.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: item.fill }}
                ></div>
                <span className="text-sm text-muted">{item.category}</span>
              </div>
              <span className="text-sm font-bold text-foreground ml-2">
                {item.value.toFixed(1)}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
