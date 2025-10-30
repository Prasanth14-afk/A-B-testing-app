'use client'

import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function InsightsPanel() {
  const insights = [
    {
      type: 'success',
      icon: CheckCircle2,
      title: '7-Day Retention Improved',
      description: 'Gate 40 showed a +1.7% improvement in 7-day retention (p = 0.03), indicating stronger long-term engagement.',
    },
    {
      type: 'neutral',
      icon: AlertCircle,
      title: 'Day 1 Retention Stable',
      description: 'No significant difference in Day 1 retention between gates (p = 0.185), suggesting similar initial experience.',
    },
    {
      type: 'success',
      icon: TrendingUp,
      title: 'Increased Engagement',
      description: 'Gate 40 players showed 4.3% higher average game rounds, indicating sustained interest and gameplay depth.',
    },
    {
      type: 'recommendation',
      icon: Lightbulb,
      title: 'Recommended Action',
      description: 'Roll out Gate 40 to all users and monitor 30-day retention and monetization metrics for validation.',
    },
  ]

  const typeStyles = {
    success: {
      bg: 'bg-positive/10',
      border: 'border-positive/20',
      icon: 'text-positive',
    },
    neutral: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
    },
    recommendation: {
      bg: 'bg-brand/10',
      border: 'border-brand/20',
      icon: 'text-brand',
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-card rounded-2xl p-6 card-shadow"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Key Insights & Recommendations</h3>
        <p className="text-sm text-muted mt-1">Analysis summary and action items</p>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon
          const styles = typeStyles[insight.type as keyof typeof typeStyles]

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={cn(
                "p-4 rounded-xl border-l-4 transition-all duration-200",
                "hover:shadow-md",
                styles.bg,
                styles.border
              )}
            >
              <div className="flex gap-3">
                <div className={cn("mt-0.5 flex-shrink-0", styles.icon)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-brand/10 to-accent/10 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Next Steps</h4>
            <ul className="text-sm text-muted space-y-1 list-disc list-inside">
              <li>Implement Gate 40 for 100% of users</li>
              <li>Monitor conversion rates and in-app purchases</li>
              <li>Track 14-day and 30-day retention trends</li>
              <li>Conduct follow-up analysis in 4 weeks</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
