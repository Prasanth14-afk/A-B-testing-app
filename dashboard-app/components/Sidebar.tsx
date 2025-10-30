'use client'

import { 
  LayoutDashboard, 
  FileText, 
  Package, 
  Users, 
  CreditCard, 
  FileSpreadsheet,
  Settings, 
  MessageSquare, 
  HelpCircle 
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FileText, label: 'Report', active: false },
  { icon: Package, label: 'Products', active: false },
  { icon: Users, label: 'Consumers', active: false },
  { icon: CreditCard, label: 'Transactions', active: false },
  { icon: FileSpreadsheet, label: 'Invoices', active: false },
  { icon: Settings, label: 'Settings', active: false },
  { icon: MessageSquare, label: 'Feedback', active: false },
  { icon: HelpCircle, label: 'Help', active: false },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-card border-r border-border flex flex-col z-50">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">CC</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Cookie Cats</h1>
            <p className="text-xs text-muted">A/B Testing</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 custom-scrollbar overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label
          
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-brand text-white shadow-lg shadow-brand/25" 
                  : "text-muted hover:bg-gray-50 hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="px-4 py-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-positive to-brand-light flex items-center justify-center text-white font-semibold text-sm">
            PK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">Prasanth Kumar</p>
            <p className="text-xs text-muted truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
