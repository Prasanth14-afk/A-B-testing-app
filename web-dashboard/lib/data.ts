import { MetricData, RetentionData, GroupSummary } from './types';

// Mock data based on actual CSV results
export const mockMetrics: MetricData[] = [
  {
    metric: 'retention_1',
    metric_name: 'Day-1 Retention',
    gate_30: 44.82,
    gate_40: 44.23,
    difference: -0.59,
    difference_pp: -0.59,
    p_value: 0.074,
    significant: 'No',
    winner: 'gate_30'
  },
  {
    metric: 'retention_7',
    metric_name: 'Day-7 Retention',
    gate_30: 19.02,
    gate_40: 18.20,
    difference: -0.82,
    difference_pp: -0.82,
    p_value: 0.002,
    significant: 'Yes',
    winner: 'gate_30'
  },
  {
    metric: 'sum_gamerounds',
    metric_name: 'Avg Game Rounds',
    gate_30: 52.46,
    gate_40: 51.30,
    difference: -1.16,
    p_value: 0.376,
    significant: 'No',
    winner: 'gate_30'
  }
];

export const mockRetentionData: RetentionData[] = [
  {
    version: 'gate_30',
    metric: 'retention_1',
    metric_name: 'Day-1 Retention',
    rate: 0.4482,
    percentage: 44.82,
    count: 20034,
    total: 44700
  },
  {
    version: 'gate_30',
    metric: 'retention_7',
    metric_name: 'Day-7 Retention',
    rate: 0.1902,
    percentage: 19.02,
    count: 8502,
    total: 44700
  },
  {
    version: 'gate_40',
    metric: 'retention_1',
    metric_name: 'Day-1 Retention',
    rate: 0.4423,
    percentage: 44.23,
    count: 20119,
    total: 45489
  },
  {
    version: 'gate_40',
    metric: 'retention_7',
    metric_name: 'Day-7 Retention',
    rate: 0.1820,
    percentage: 18.20,
    count: 8279,
    total: 45489
  }
];

export const mockGroupSummary: GroupSummary[] = [
  {
    version: 'gate_30',
    total_players: 44700,
    avg_gamerounds: 52.46,
    std_gamerounds: 256.72,
    median_gamerounds: 17.0,
    retention_1_rate: 0.4482,
    retention_1_count: 20034,
    retention_7_rate: 0.1902,
    retention_7_count: 8502,
    retention_1_pct: 44.82,
    retention_7_pct: 19.02
  },
  {
    version: 'gate_40',
    total_players: 45489,
    avg_gamerounds: 51.30,
    std_gamerounds: 103.29,
    median_gamerounds: 16.0,
    retention_1_rate: 0.4423,
    retention_1_count: 20119,
    retention_7_rate: 0.1820,
    retention_7_count: 8279,
    retention_1_pct: 44.23,
    retention_7_pct: 18.20
  }
];
