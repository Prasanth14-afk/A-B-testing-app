'use client'

import { Search, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  title?: string
  subtitle?: string
}

export default function Header({ 
  title = "A/B Testing Results: Cookie Cats", 
  subtitle = "Gate 30 vs Gate 40 Analysis" 
}: HeaderProps) {
  return (
    <header className="sticky top-0 h-20 bg-card border-b border-border flex items-center justify-between px-8 z-40">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        <p className="text-sm text-muted mt-0.5">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <button className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center",
          "hover:bg-gray-100 transition-colors duration-200"
        )}>
          <Search className="w-5 h-5 text-muted" />
        </button>

        {/* Notifications */}
        <button className={cn(
          "relative w-10 h-10 rounded-xl flex items-center justify-center",
          "hover:bg-gray-100 transition-colors duration-200"
        )}>
          <Bell className="w-5 h-5 text-muted" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-negative rounded-full ring-2 ring-card"></span>
        </button>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-semibold text-sm cursor-pointer hover:shadow-lg transition-shadow">
          PK
        </div>
      </div>
    </header>
  )
}
