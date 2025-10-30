'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  color?: 'blue' | 'orange' | 'green' | 'gray';
  significant?: boolean;
  pValue?: number;
}

const colorStyles = {
  blue: 'bg-primary-50 text-primary-600',
  orange: 'bg-accent-50 text-accent-600',
  green: 'bg-green-50 text-green-600',
  gray: 'bg-gray-50 text-gray-600',
};

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  change,
  changeLabel,
  icon,
  color = 'blue',
  significant,
  pValue,
}) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  const isNeutral = change === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card-elevated p-6 hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <motion.p
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            {value}
          </motion.p>
          
          {change !== undefined && (
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'flex items-center text-sm font-medium',
                  isPositive && 'text-green-600',
                  isNegative && 'text-red-600',
                  isNeutral && 'text-gray-500'
                )}
              >
                {isPositive && <TrendingUp className="w-4 h-4 mr-1" />}
                {isNegative && <TrendingDown className="w-4 h-4 mr-1" />}
                {isNeutral && <Minus className="w-4 h-4 mr-1" />}
                {Math.abs(change).toFixed(2)}
                {changeLabel || '%'}
              </span>
              
              {pValue !== undefined && (
                <span
                  className={cn(
                    'px-2 py-0.5 text-xs font-semibold rounded-full',
                    significant
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-600'
                  )}
                >
                  {significant ? '✓ Sig' : 'NS'}
                </span>
              )}
            </div>
          )}
        </div>

        {icon && (
          <div className={cn('p-3 rounded-xl', colorStyles[color])}>
            {icon}
          </div>
        )}
      </div>

      {pValue !== undefined && (
        <p className="text-xs text-gray-500 mt-3">
          p-value: {pValue.toFixed(4)}
        </p>
      )}
    </motion.div>
  );
};

export default KpiCard;
