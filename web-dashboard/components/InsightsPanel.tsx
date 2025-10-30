'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, TrendingDown, Lightbulb } from 'lucide-react';

const InsightsPanel: React.FC = () => {
  const insights = [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      type: 'success',
      title: 'Gate 30 Wins on 7-Day Retention',
      description: '19.02% vs 18.20% (p=0.002) — statistically significant difference favoring control group.',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200',
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      type: 'warning',
      title: 'No Significant Difference in Day-1 Retention',
      description: '44.82% vs 44.23% (p=0.074) — not statistically significant at α=0.05 level.',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-200',
    },
    {
      icon: <TrendingDown className="w-5 h-5" />,
      type: 'info',
      title: 'Game Rounds Similar Across Groups',
      description: '52.46 vs 51.30 rounds (p=0.376) — no meaningful engagement difference detected.',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      type: 'recommendation',
      title: 'Recommendation: Keep Gate at Level 30',
      description: 'Data shows Gate 30 performs significantly better on long-term retention without sacrificing short-term metrics.',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="card-elevated p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className={`p-4 rounded-xl border ${insight.bgColor} ${insight.borderColor}`}
          >
            <div className="flex items-start gap-3">
              <div className={`${insight.textColor} mt-0.5`}>
                {insight.icon}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold text-sm ${insight.textColor} mb-1`}>
                  {insight.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InsightsPanel;
