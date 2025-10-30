'use client';

import { BarChart3, FlaskConical, Target, FileText, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <FlaskConical className="w-5 h-5" />, label: 'Experiments', active: false },
    { icon: <Target className="w-5 h-5" />, label: 'Metrics', active: false },
    { icon: <FileText className="w-5 h-5" />, label: 'Reports', active: false },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
          <span className="text-xl font-bold text-gray-900">AB Analytics</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
                item.active
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
