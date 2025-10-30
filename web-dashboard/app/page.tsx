'use client';

import { Users, TrendingUp, BarChart3, Target, Activity } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import KpiCard from '@/components/KpiCard';
import RetentionBarChart from '@/components/RetentionBarChart';
import StatsTable from '@/components/StatsTable';
import InsightsPanel from '@/components/InsightsPanel';
import { mockMetrics, mockRetentionData, mockGroupSummary } from '@/lib/data';

export default function Home() {
  const gate30Data = mockGroupSummary[0];
  const gate40Data = mockGroupSummary[1];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Navbar />

      <main className="ml-64 mt-16 p-8">
        {/* KPI Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          <KpiCard
            title="Total Players (Gate 30)"
            value={gate30Data.total_players.toLocaleString()}
            icon={<Users className="w-6 h-6" />}
            color="blue"
          />

          <KpiCard
            title="Total Players (Gate 40)"
            value={gate40Data.total_players.toLocaleString()}
            icon={<Users className="w-6 h-6" />}
            color="orange"
          />

          <KpiCard
            title="Day-1 Retention"
            value={`${gate30Data.retention_1_pct.toFixed(2)}%`}
            change={mockMetrics[0].difference}
            changeLabel="pp"
            icon={<TrendingUp className="w-6 h-6" />}
            color="blue"
            significant={mockMetrics[0].significant === 'Yes'}
            pValue={mockMetrics[0].p_value}
          />

          <KpiCard
            title="Day-7 Retention"
            value={`${gate30Data.retention_7_pct.toFixed(2)}%`}
            change={mockMetrics[1].difference}
            changeLabel="pp"
            icon={<Target className="w-6 h-6" />}
            color="green"
            significant={mockMetrics[1].significant === 'Yes'}
            pValue={mockMetrics[1].p_value}
          />

          <KpiCard
            title="Avg Game Rounds"
            value={gate30Data.avg_gamerounds.toFixed(1)}
            change={mockMetrics[2].difference}
            changeLabel=" rounds"
            icon={<Activity className="w-6 h-6" />}
            color="gray"
            significant={mockMetrics[2].significant === 'Yes'}
            pValue={mockMetrics[2].p_value}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RetentionBarChart data={mockRetentionData} />
          
          <div className="card-elevated p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Group Summary
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 rounded-xl">
                  <p className="text-sm text-primary-600 font-medium mb-1">Gate 30 (Control)</p>
                  <p className="text-2xl font-bold text-primary-700">
                    {gate30Data.total_players.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">players</p>
                </div>
                <div className="p-4 bg-accent-50 rounded-xl">
                  <p className="text-sm text-accent-600 font-medium mb-1">Gate 40 (Variant)</p>
                  <p className="text-2xl font-bold text-accent-700">
                    {gate40Data.total_players.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">players</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Median Game Rounds</span>
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold text-primary-600">
                      {gate30Data.median_gamerounds}
                    </span>
                    <span className="text-sm font-semibold text-accent-600">
                      {gate40Data.median_gamerounds}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Std Dev (Rounds)</span>
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold text-primary-600">
                      {gate30Data.std_gamerounds.toFixed(1)}
                    </span>
                    <span className="text-sm font-semibold text-accent-600">
                      {gate40Data.std_gamerounds.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Table */}
        <div className="mb-8">
          <StatsTable data={mockMetrics} />
        </div>

        {/* Insights Panel */}
        <div>
          <InsightsPanel />
        </div>
      </main>
    </div>
  );
}
