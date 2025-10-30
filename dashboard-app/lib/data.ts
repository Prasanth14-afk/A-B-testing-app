// Mock data structure based on your CSV files
export const mockData = {
  groupSummary: {
    gate_30: {
      users: 44700,
      avgRounds: 51.3,
      retention1: 44.8,
      retention7: 19.0,
    },
    gate_40: {
      users: 45489,
      avgRounds: 51.3,
      retention1: 44.2,
      retention7: 18.2,
    },
  },
  
  statisticalTests: [
    {
      metric: 'Day 1 Retention',
      gate30: 44.8,
      gate40: 44.2,
      delta: -0.6,
      pValue: 0.185,
      significant: false,
    },
    {
      metric: 'Day 7 Retention',
      gate30: 19.0,
      gate40: 18.2,
      delta: -0.8,
      pValue: 0.03,
      significant: true,
    },
    {
      metric: 'Avg Rounds',
      gate30: 51.3,
      gate40: 51.3,
      delta: 0.0,
      pValue: 0.01,
      significant: true,
    },
  ],
  
  retentionTrend: [
    { day: 1, gate30: 44.8, gate40: 44.2 },
    { day: 2, gate30: 37.2, gate40: 36.8 },
    { day: 3, gate30: 32.5, gate40: 31.9 },
    { day: 4, gate30: 28.7, gate40: 28.1 },
    { day: 5, gate30: 25.8, gate40: 25.0 },
    { day: 6, gate30: 23.2, gate40: 22.5 },
    { day: 7, gate30: 19.0, gate40: 18.2 },
    { day: 8, gate30: 17.5, gate40: 16.8 },
    { day: 9, gate30: 16.2, gate40: 15.5 },
    { day: 10, gate30: 15.1, gate40: 14.4 },
    { day: 11, gate30: 14.2, gate40: 13.6 },
    { day: 12, gate30: 13.5, gate40: 12.9 },
    { day: 13, gate30: 12.9, gate40: 12.3 },
    { day: 14, gate30: 12.4, gate40: 11.8 },
  ],
  
  roundsDistribution: [
    { range: '0-10', gate30: 12500, gate40: 12800 },
    { range: '11-25', gate30: 8900, gate40: 9100 },
    { range: '26-50', gate30: 11200, gate40: 11500 },
    { range: '51-100', gate30: 7800, gate40: 8000 },
    { range: '101+', gate30: 4300, gate40: 4089 },
  ],
  
  radialData: [
    { category: 'Day 1 Retention', value: 44.5, fill: 'hsl(var(--ring-1))' },
    { category: 'Day 7 Retention', value: 18.6, fill: 'hsl(var(--ring-2))' },
    { category: 'Engagement', value: 51.3, fill: 'hsl(var(--ring-3))' },
  ],
  
  engagementByMonth: [
    { month: 'Jan', retention: 45.2, rounds: 52.1 },
    { month: 'Feb', retention: 44.8, rounds: 51.8 },
    { month: 'Mar', retention: 44.5, rounds: 51.5 },
    { month: 'Apr', retention: 44.2, rounds: 51.2 },
    { month: 'May', retention: 43.9, rounds: 50.9 },
    { month: 'Jun', retention: 43.7, rounds: 50.7 },
  ],
  
  topSegments: [
    { name: 'High Engagement', icon: '🎮', value: 12417 },
    { name: 'Medium Engagement', icon: '🎯', value: 8234 },
    { name: 'Low Engagement', icon: '📊', value: 5821 },
    { name: 'New Players', icon: '✨', value: 3145 },
  ],
}

// Function to load actual CSV data (to be implemented when integrated)
export async function loadCSVData() {
  // This will be replaced with actual CSV loading logic
  // For now, return mock data
  return mockData
}
