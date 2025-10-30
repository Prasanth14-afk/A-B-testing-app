'use client'

import { motion, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn, formatNumber, formatPercent, formatDelta } from '@/lib/utils'

interface KpiCardProps {
  title: string
  value: number
  delta?: number
  deltaType?: 'percent' | 'number'
  format?: 'number' | 'percent' | 'currency'
  variant?: 'default' | 'brand'
  icon?: React.ReactNode
  subtitle?: string
}

function CountUpAnimation({ 
  value, 
  format = 'number',
  decimals = 1 
}: { 
  value: number
  format?: 'number' | 'percent' | 'currency'
  decimals?: number 
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        if (format === 'percent') {
          ref.current.textContent = formatPercent(latest, decimals)
        } else if (format === 'number') {
          ref.current.textContent = formatNumber(latest, decimals)
        } else {
          ref.current.textContent = latest.toFixed(decimals)
        }
      }
    })
  }, [springValue, format, decimals])

  return <span ref={ref}>0</span>
}

export default function KpiCard({
  title,
  value,
  delta,
  deltaType = 'percent',
  format = 'number',
  variant = 'default',
  icon,
  subtitle,
}: KpiCardProps) {
  const isBrand = variant === 'brand'
  const isPositive = delta !== undefined && delta > 0
  const isNegative = delta !== undefined && delta < 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)' }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-200",
        "card-shadow",
        isBrand 
          ? "bg-gradient-to-br from-brand to-accent text-white" 
          : "bg-card text-foreground"
      )}
    >
      {/* Background Pattern */}
      {isBrand && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white blur-2xl"></div>
          <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white blur-xl"></div>
        </div>
      )}

      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className={cn(
            "mb-4 w-12 h-12 rounded-xl flex items-center justify-center",
            isBrand ? "bg-white/20" : "bg-brand/10 text-brand"
          )}>
            {icon}
          </div>
        )}

        {/* Title */}
        <p className={cn(
          "text-sm font-medium mb-2",
          isBrand ? "text-white/80" : "text-muted"
        )}>
          {title}
        </p>

        {/* Value */}
        <div className="flex items-baseline gap-3 mb-2">
          <h3 className={cn(
            "text-3xl font-bold tracking-tight",
            isBrand ? "text-white" : "text-foreground"
          )}>
            <CountUpAnimation value={value} format={format} />
          </h3>

          {/* Delta Badge */}
          {delta !== undefined && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold",
                isPositive && "bg-positive/10 text-positive",
                isNegative && "bg-negative/10 text-negative",
                isBrand && "bg-white/20 text-white"
              )}
            >
              {isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : isNegative ? (
                <TrendingDown className="w-3 h-3" />
              ) : null}
              <span>{formatDelta(delta)}</span>
            </motion.div>
          )}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className={cn(
            "text-xs",
            isBrand ? "text-white/70" : "text-muted"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}
