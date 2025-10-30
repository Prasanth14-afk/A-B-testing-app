'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MiniKpiProps {
  icon: LucideIcon
  label: string
  value: string | number
  variant?: 'default' | 'success' | 'warning' | 'danger'
}

export default function MiniKpi({ icon: Icon, label, value, variant = 'default' }: MiniKpiProps) {
  const variantColors = {
    default: 'from-brand to-brand-light',
    success: 'from-positive to-emerald-400',
    warning: 'from-yellow-500 to-orange-400',
    danger: 'from-negative to-rose-400',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 p-4 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-shadow duration-200"
    >
      <div className={cn(
        "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white",
        variantColors[variant]
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-xs text-muted font-medium">{label}</p>
        <p className="text-lg font-bold text-foreground">{value}</p>
      </div>
    </motion.div>
  )
}
