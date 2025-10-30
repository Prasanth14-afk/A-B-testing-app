'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface RoundsDistributionProps {
  data: Array<{
    range: string
    gate30: number
    gate40: number
  }>
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground mb-2">{label} rounds</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: entry.color }}></div>
            <span className="text-muted">{entry.name}:</span>
            <span className="font-semibold text-foreground">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function RoundsDistribution({ data }: RoundsDistributionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="bg-card rounded-2xl p-6 card-shadow"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Game Rounds Distribution</h3>
        <p className="text-sm text-muted mt-1">Player engagement by rounds played</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="gate30Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity={0.9}/>
              <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity={0.6}/>
            </linearGradient>
            <linearGradient id="gate40Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.9}/>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0.6}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis 
            dataKey="range" 
            stroke="hsl(var(--muted))"
            tick={{ fill: 'hsl(var(--muted))', fontSize: 12 }}
          />
          <YAxis 
            stroke="hsl(var(--muted))"
            tick={{ fill: 'hsl(var(--muted))', fontSize: 12 }}
            label={{ value: 'Players', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted))' }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--border))' }} />
          <Bar 
            dataKey="gate30" 
            name="Gate 30" 
            fill="url(#gate30Gradient)"
            radius={[8, 8, 0, 0]}
            maxBarSize={50}
          />
          <Bar 
            dataKey="gate40" 
            name="Gate 40" 
            fill="url(#gate40Gradient)"
            radius={[8, 8, 0, 0]}
            maxBarSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
