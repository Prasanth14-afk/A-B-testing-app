export interface MetricData {
  metric: string;
  metric_name: string;
  gate_30: number;
  gate_40: number;
  difference: number;
  difference_pp?: number;
  p_value: number;
  significant: string;
  winner: string;
}

export interface RetentionData {
  version: string;
  metric: string;
  metric_name: string;
  rate: number;
  percentage: number;
  count: number;
  total: number;
}

export interface GroupSummary {
  version: string;
  total_players: number;
  avg_gamerounds: number;
  std_gamerounds: number;
  median_gamerounds: number;
  retention_1_rate: number;
  retention_1_count: number;
  retention_7_rate: number;
  retention_7_count: number;
  retention_1_pct: number;
  retention_7_pct: number;
}
