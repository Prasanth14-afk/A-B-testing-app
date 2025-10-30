'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface EngagementTimelineProps {
  data: Array<{
    month: string
    retention: number
    rounds: number
  }>
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
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

export default function EngagementTimeline({ data }: EngagementTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-card rounded-2xl p-6 card-shadow"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Engagement Timeline</h3>
        <p className="text-sm text-muted mt-1">Monthly retention and rounds played trends</p>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--brand))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--brand))" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRounds" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted))"
            tick={{ fill: 'hsl(var(--muted))', fontSize: 12 }}
            axisLine={{ stroke: 'hsl(var(--border))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted))"
            tick={{ fill: 'hsl(var(--muted))', fontSize: 12 }}
            axisLine={{ stroke: 'hsl(var(--border))' }}
            label={{ value: 'Percentage', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted))' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
            formatter={(value) => <span className="text-sm text-muted">{value}</span>}
          />
          <Area
            type="monotone"
            dataKey="retention"
            name="Retention"
            stroke="hsl(var(--brand))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRetention)"
          />
          <Area
            type="monotone"
            dataKey="rounds"
            name="Avg Rounds"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRounds)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
