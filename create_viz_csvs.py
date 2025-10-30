#!/usr/bin/env python3
"""
Create a comprehensive visualization-ready CSV for Cookie Cats A/B test.
Combines player-level data with aggregated metrics and statistical test results.
"""
import pandas as pd
import numpy as np
from scipy import stats
from math import sqrt

# Load data
df = pd.read_csv("cookie_cats.csv")

# Convert TRUE/FALSE to 1/0
for col in ["retention_1", "retention_7"]:
    if df[col].dtype == object:
        df[col] = df[col].map({"TRUE": 1, "FALSE": 0}).astype(int)

# --- 1. Player-level data (cleaned) ---
player_data = df.copy()
player_data.to_csv("ab_output/viz_player_level.csv", index=False)

# --- 2. Aggregated metrics by group ---
metrics = df.groupby('version').agg(
    total_players=('userid', 'count'),
    avg_gamerounds=('sum_gamerounds', 'mean'),
    std_gamerounds=('sum_gamerounds', 'std'),
    median_gamerounds=('sum_gamerounds', 'median'),
    retention_1_rate=('retention_1', 'mean'),
    retention_1_count=('retention_1', 'sum'),
    retention_7_rate=('retention_7', 'mean'),
    retention_7_count=('retention_7', 'sum')
).reset_index()

# Add percentage columns
metrics['retention_1_pct'] = metrics['retention_1_rate'] * 100
metrics['retention_7_pct'] = metrics['retention_7_rate'] * 100

metrics.to_csv("ab_output/viz_group_summary.csv", index=False)

# --- 3. Statistical test results ---
def two_proportion_z_test(x1, n1, x2, n2):
    p1 = x1 / n1
    p2 = x2 / n2
    p_pool = (x1 + x2) / (n1 + n2)
    se = sqrt(p_pool * (1 - p_pool) * (1/n1 + 1/n2))
    if se == 0:
        return np.nan, np.nan
    z = (p2 - p1) / se
    pval = 2 * (1 - stats.norm.cdf(abs(z)))
    return z, pval

# Get gate_30 and gate_40 metrics
g30 = metrics[metrics['version']=='gate_30'].iloc[0]
g40 = metrics[metrics['version']=='gate_40'].iloc[0]

# Run tests
z1, p1 = two_proportion_z_test(
    g30['retention_1_count'], g30['total_players'],
    g40['retention_1_count'], g40['total_players']
)

z7, p7 = two_proportion_z_test(
    g30['retention_7_count'], g30['total_players'],
    g40['retention_7_count'], g40['total_players']
)

g30_rounds = df[df['version']=='gate_30']['sum_gamerounds']
g40_rounds = df[df['version']=='gate_40']['sum_gamerounds']
t_stat, p_t = stats.ttest_ind(g40_rounds, g30_rounds, equal_var=False)

# Build test results table
test_results = [
    {
        'metric': 'retention_1',
        'metric_name': 'Day-1 Retention',
        'gate_30_value': g30['retention_1_pct'],
        'gate_40_value': g40['retention_1_pct'],
        'difference': g40['retention_1_pct'] - g30['retention_1_pct'],
        'difference_pp': (g40['retention_1_rate'] - g30['retention_1_rate']) * 100,
        'test_statistic': z1,
        'p_value': p1,
        'significant_005': 'Yes' if p1 < 0.05 else 'No',
        'significant_010': 'Yes' if p1 < 0.10 else 'No'
    },
    {
        'metric': 'retention_7',
        'metric_name': 'Day-7 Retention',
        'gate_30_value': g30['retention_7_pct'],
        'gate_40_value': g40['retention_7_pct'],
        'difference': g40['retention_7_pct'] - g30['retention_7_pct'],
        'difference_pp': (g40['retention_7_rate'] - g30['retention_7_rate']) * 100,
        'test_statistic': z7,
        'p_value': p7,
        'significant_005': 'Yes' if p7 < 0.05 else 'No',
        'significant_010': 'Yes' if p7 < 0.10 else 'No'
    },
    {
        'metric': 'sum_gamerounds',
        'metric_name': 'Avg Game Rounds',
        'gate_30_value': g30['avg_gamerounds'],
        'gate_40_value': g40['avg_gamerounds'],
        'difference': g40['avg_gamerounds'] - g30['avg_gamerounds'],
        'difference_pp': np.nan,
        'test_statistic': t_stat,
        'p_value': p_t,
        'significant_005': 'Yes' if p_t < 0.05 else 'No',
        'significant_010': 'Yes' if p_t < 0.10 else 'No'
    }
]

test_df = pd.DataFrame(test_results)
test_df.to_csv("ab_output/viz_statistical_tests.csv", index=False)

# --- 4. Long format for easy plotting (retention metrics) ---
retention_long = []
for _, row in metrics.iterrows():
    retention_long.append({
        'version': row['version'],
        'metric': 'retention_1',
        'metric_name': 'Day-1 Retention',
        'rate': row['retention_1_rate'],
        'percentage': row['retention_1_pct'],
        'count': row['retention_1_count'],
        'total': row['total_players']
    })
    retention_long.append({
        'version': row['version'],
        'metric': 'retention_7',
        'metric_name': 'Day-7 Retention',
        'rate': row['retention_7_rate'],
        'percentage': row['retention_7_pct'],
        'count': row['retention_7_count'],
        'total': row['total_players']
    })

retention_long_df = pd.DataFrame(retention_long)
retention_long_df.to_csv("ab_output/viz_retention_long.csv", index=False)

# --- 5. Master dashboard data (wide format) ---
# Pivot for side-by-side comparison
master_data = []
for metric_row in test_results:
    master_data.append({
        'metric': metric_row['metric'],
        'metric_name': metric_row['metric_name'],
        'gate_30': metric_row['gate_30_value'],
        'gate_40': metric_row['gate_40_value'],
        'difference': metric_row['difference'],
        'difference_pp': metric_row['difference_pp'],
        'p_value': metric_row['p_value'],
        'significant': metric_row['significant_005'],
        'winner': 'gate_30' if metric_row['difference'] < 0 else 'gate_40' if metric_row['difference'] > 0 else 'tie'
    })

master_df = pd.DataFrame(master_data)
master_df.to_csv("ab_output/viz_master_dashboard.csv", index=False)

# --- 6. Game rounds distribution bins (for histograms) ---
bins = [0, 10, 20, 50, 100, 200, 500, 1000, 10000]
df['rounds_bin'] = pd.cut(df['sum_gamerounds'], bins=bins, labels=[
    '0-10', '11-20', '21-50', '51-100', '101-200', '201-500', '501-1000', '1000+'
])

rounds_dist = df.groupby(['version', 'rounds_bin'], observed=True).size().reset_index(name='player_count')
rounds_dist.to_csv("ab_output/viz_rounds_distribution.csv", index=False)

print("\n✅ Visualization CSVs created successfully!")
print("\nFiles created:")
print("1. viz_player_level.csv       - Individual player records (90K rows)")
print("2. viz_group_summary.csv      - Aggregated metrics by group")
print("3. viz_statistical_tests.csv  - Test results with p-values")
print("4. viz_retention_long.csv     - Retention data in long format (for bar charts)")
print("5. viz_master_dashboard.csv   - Complete summary for dashboard")
print("6. viz_rounds_distribution.csv - Game rounds distribution by bins")
print("\nAll files saved in: ab_output/")
