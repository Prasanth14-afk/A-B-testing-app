'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface RetentionTrendLineProps {
  data: Array<{
    day: number
    gate30: number
    gate40: number
  }>
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground mb-2">Day {label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span className="text-muted">{entry.name}:</span>
            <span className="font-semibold text-foreground">{entry.value.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function RetentionTrendLine({ data }: RetentionTrendLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card rounded-2xl p-6 card-shadow"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Retention Trend (14 Days)</h3>
        <p className="text-sm text-muted mt-1">Player retention over time by gate placement</p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorGate30" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--brand))" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="hsl(var(--brand))" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorGate40" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted))"
            tick={{ fill: 'hsl(var(--muted))', fontSize: 12 }}
            label={{ value: 'Days', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted))"
            tick={{ fill: 'hsl(var(--muted))', fontSize: 12 }}
            label={{ value: 'Retention %', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted))' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
            formatter={(value) => <span className="text-sm text-muted">{value}</span>}
          />
          <Line 
            type="monotone" 
            dataKey="gate30" 
            name="Gate 30"
            stroke="hsl(var(--brand))" 
            strokeWidth={3}
            dot={{ r: 4, fill: 'hsl(var(--brand))' }}
            activeDot={{ r: 6 }}
            fill="url(#colorGate30)"
          />
          <Line 
            type="monotone" 
            dataKey="gate40" 
            name="Gate 40"
            stroke="hsl(var(--accent))" 
            strokeWidth={3}
            dot={{ r: 4, fill: 'hsl(var(--accent))' }}
            activeDot={{ r: 6 }}
            fill="url(#colorGate40)"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
