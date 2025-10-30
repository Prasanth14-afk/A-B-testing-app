'use client'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import KpiCard from '@/components/KpiCard'
import RetentionBarChart from '@/components/RetentionBarChart'
import RetentionTrendLine from '@/components/RetentionTrendLine'
import RadialMultiRing from '@/components/RadialMultiRing'
import RoundsDistribution from '@/components/RoundsDistribution'
import StatTable from '@/components/StatTable'
import InsightsPanel from '@/components/InsightsPanel'
import SegmentsList from '@/components/SegmentsList'
import EngagementTimeline from '@/components/EngagementTimeline'
import { Users, TrendingUp, Calendar, Target } from 'lucide-react'
import { mockData } from '@/lib/data'

export default function Dashboard() {
  // Prepare data for charts
  const retentionChartData = [
    { 
      metric: 'Day 1 Retention', 
      gate30: mockData.groupSummary.gate_30.retention1,
      gate40: mockData.groupSummary.gate_40.retention1,
      significant: false
    },
    { 
      metric: 'Day 7 Retention', 
      gate30: mockData.groupSummary.gate_30.retention7,
      gate40: mockData.groupSummary.gate_40.retention7,
      significant: true
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="ml-[260px]">
        <Header />
        
        <main className="p-8 space-y-6">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KpiCard
              title="Total Users (Gate 30)"
              value={mockData.groupSummary.gate_30.users}
              format="number"
              variant="brand"
              icon={<Users className="w-6 h-6" />}
              subtitle="Control group"
            />
            <KpiCard
              title="Total Users (Gate 40)"
              value={mockData.groupSummary.gate_40.users}
              format="number"
              delta={((mockData.groupSummary.gate_40.users - mockData.groupSummary.gate_30.users) / mockData.groupSummary.gate_30.users * 100)}
              icon={<Users className="w-6 h-6" />}
              subtitle="Treatment group"
            />
            <KpiCard
              title="Avg. Rounds (Gate 30)"
              value={mockData.groupSummary.gate_30.avgRounds}
              format="number"
              icon={<TrendingUp className="w-6 h-6" />}
            />
            <KpiCard
              title="Avg. Rounds (Gate 40)"
              value={mockData.groupSummary.gate_40.avgRounds}
              format="number"
              delta={((mockData.groupSummary.gate_40.avgRounds - mockData.groupSummary.gate_30.avgRounds) / mockData.groupSummary.gate_30.avgRounds * 100)}
              icon={<TrendingUp className="w-6 h-6" />}
            />
          </div>

          {/* Second Row: Retention Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KpiCard
              title="Day 1 Retention (Gate 30)"
              value={mockData.groupSummary.gate_30.retention1}
              format="percent"
              icon={<Calendar className="w-6 h-6" />}
            />
            <KpiCard
              title="Day 1 Retention (Gate 40)"
              value={mockData.groupSummary.gate_40.retention1}
              format="percent"
              delta={(mockData.groupSummary.gate_40.retention1 - mockData.groupSummary.gate_30.retention1)}
              icon={<Calendar className="w-6 h-6" />}
            />
            <KpiCard
              title="Day 7 Retention (Gate 30)"
              value={mockData.groupSummary.gate_30.retention7}
              format="percent"
              icon={<Target className="w-6 h-6" />}
            />
            <KpiCard
              title="Day 7 Retention (Gate 40)"
              value={mockData.groupSummary.gate_40.retention7}
              format="percent"
              delta={(mockData.groupSummary.gate_40.retention7 - mockData.groupSummary.gate_30.retention7)}
              icon={<Target className="w-6 h-6" />}
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2 spans */}
            <div className="lg:col-span-2 space-y-6">
              <RetentionBarChart data={retentionChartData} />
              <RetentionTrendLine data={mockData.retentionTrend} />
              <RoundsDistribution data={mockData.roundsDistribution} />
            </div>

            {/* Right Column - 1 span */}
            <div className="space-y-6">
              <RadialMultiRing data={mockData.radialData} />
              <SegmentsList segments={mockData.topSegments} />
              <EngagementTimeline data={mockData.engagementByMonth} />
            </div>
          </div>

          {/* Statistical Table */}
          <StatTable data={mockData.statisticalTests} />

          {/* Insights Panel */}
          <InsightsPanel />

          {/* Footer */}
          <div className="pt-8 pb-4">
            <div className="flex items-center justify-between text-sm text-muted">
              <p>© 2025 Cookie Cats Analytics Dashboard. All rights reserved.</p>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
