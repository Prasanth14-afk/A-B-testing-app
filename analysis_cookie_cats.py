#!/usr/bin/env python3
"""
Analysis script for Cookie Cats A/B testing dataset.
Produces EDA outputs, metrics, statistical tests, plots, and a final summary CSV for visualization.
"""
import os
import pandas as pd
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns

sns.set(style="whitegrid")

DATA_PATH = "cookie_cats.csv"
OUT_DIR = "ab_output"
FIG_DIR = os.path.join(OUT_DIR, "figures")
os.makedirs(FIG_DIR, exist_ok=True)

# Read dataset
print("Loading dataset:", DATA_PATH)
df = pd.read_csv(DATA_PATH)
print("Initial rows:", df.shape[0])

# Inspect and clean
# Convert TRUE/FALSE to 1/0 if needed
for col in ["retention_1", "retention_7"]:
    if df[col].dtype == object:
        df[col] = df[col].map({"TRUE": 1, "FALSE": 0}).astype(int)

# Basic EDA summary
eda = {}
eda['shape'] = df.shape
eda['columns'] = df.dtypes.apply(lambda x: str(x)).to_dict()
eda['missing_per_column'] = df.isnull().sum().to_dict()
# group counts
eda['group_counts'] = df['version'].value_counts().to_dict()

# Save EDA summary as JSON/CSV
eda_df = pd.DataFrame({
    'metric': ['rows','columns_count'],
    'value': [df.shape[0], df.shape[1]]
})

df_grouped_counts = df['version'].value_counts().rename_axis('version').reset_index(name='count')
df_grouped_counts.to_csv(os.path.join(OUT_DIR, 'group_counts.csv'), index=False)

# Descriptive stats
desc = df[['sum_gamerounds','retention_1','retention_7']].describe()
desc.to_csv(os.path.join(OUT_DIR, 'descriptive_stats.csv'))

# Metric calculation per group
metrics = df.groupby('version').agg(
    n=('userid','count'),
    sum_gamerounds_mean=('sum_gamerounds','mean'),
    sum_gamerounds_std=('sum_gamerounds','std'),
    retention_1_mean=('retention_1','mean'),
    retention_1_std=('retention_1','std'),
    retention_7_mean=('retention_7','mean'),
    retention_7_std=('retention_7','std')
).reset_index()
metrics.to_csv(os.path.join(OUT_DIR, 'group_metrics.csv'), index=False)

# Statistical tests
# Two-proportion z-test implementation
from math import sqrt

def two_proportion_z_test(x1, n1, x2, n2):
    # x1, x2: successes; n1, n2: totals
    p1 = x1 / n1
    p2 = x2 / n2
    p_pool = (x1 + x2) / (n1 + n2)
    se = sqrt(p_pool * (1 - p_pool) * (1/n1 + 1/n2))
    if se == 0:
        return np.nan, np.nan
    z = (p2 - p1) / se
    pval = 2 * (1 - stats.norm.cdf(abs(z)))
    return z, pval

# Prepare counts
grouped = df.groupby('version')
counts = grouped.agg(
    n=('userid','count'),
    retention_1_success=('retention_1','sum'),
    retention_7_success=('retention_7','sum')
).reset_index()

# Ensure gate_30 first then gate_40
g30 = counts[counts['version']=='gate_30'].iloc[0]
g40 = counts[counts['version']=='gate_40'].iloc[0]

z1, p1 = two_proportion_z_test(g30['retention_1_success'], g30['n'], g40['retention_1_success'], g40['n'])
z7, p7 = two_proportion_z_test(g30['retention_7_success'], g30['n'], g40['retention_7_success'], g40['n'])

# t-test for sum_gamerounds
g30_rounds = df.loc[df['version']=='gate_30','sum_gamerounds']
g40_rounds = df.loc[df['version']=='gate_40','sum_gamerounds']
# Use Welch's t-test
t_stat, p_t = stats.ttest_ind(g40_rounds, g30_rounds, equal_var=False, nan_policy='omit')

# Build final summary table
alpha = 0.05
summary_rows = []

# retention_1
r1_30_mean = metrics.loc[metrics['version']=='gate_30','retention_1_mean'].values[0]
r1_40_mean = metrics.loc[metrics['version']=='gate_40','retention_1_mean'].values[0]

# retention_7
r7_30_mean = metrics.loc[metrics['version']=='gate_30','retention_7_mean'].values[0]
r7_40_mean = metrics.loc[metrics['version']=='gate_40','retention_7_mean'].values[0]

# gamerounds
g30_mean = metrics.loc[metrics['version']=='gate_30','sum_gamerounds_mean'].values[0]
g40_mean = metrics.loc[metrics['version']=='gate_40','sum_gamerounds_mean'].values[0]

summary_rows.append({
    'Metric': 'retention_1',
    'Gate 30': r1_30_mean,
    'Gate 40': r1_40_mean,
    'Difference': r1_40_mean - r1_30_mean,
    'p_value': p1,
    'Significant': 'Yes' if (p1 < alpha) else 'No'
})

summary_rows.append({
    'Metric': 'retention_7',
    'Gate 30': r7_30_mean,
    'Gate 40': r7_40_mean,
    'Difference': r7_40_mean - r7_30_mean,
    'p_value': p7,
    'Significant': 'Yes' if (p7 < alpha) else 'No'
})

summary_rows.append({
    'Metric': 'sum_gamerounds',
    'Gate 30': g30_mean,
    'Gate 40': g40_mean,
    'Difference': g40_mean - g30_mean,
    'p_value': p_t,
    'Significant': 'Yes' if (p_t < alpha) else 'No'
})

summary_df = pd.DataFrame(summary_rows)
summary_df.to_csv(os.path.join(OUT_DIR, 'cookie_cats_summary.csv'), index=False)

# Also write a friendly text summary
with open(os.path.join(OUT_DIR, 'results_summary.txt'), 'w') as f:
    f.write('A/B test results\n')
    f.write(summary_df.to_string(index=False))
    f.write('\n\nCounts by group:\n')
    f.write(counts.to_string(index=False))

# Visualizations
# Retention bar chart
ret_means = df.groupby('version')[['retention_1','retention_7']].mean().reset_index()
ret_melt = ret_means.melt(id_vars='version', var_name='retention_day', value_name='rate')
plt.figure(figsize=(8,5))
sns.barplot(data=ret_melt, x='retention_day', y='rate', hue='version')
plt.title('Retention comparison (mean)')
plt.savefig(os.path.join(FIG_DIR, 'retention_comparison.png'), bbox_inches='tight')
plt.close()

# sum_gamerounds distribution (hist)
plt.figure(figsize=(10,6))
for v in ['gate_30','gate_40']:
    subset = df[df['version']==v]['sum_gamerounds']
    sns.kdeplot(subset, label=v, bw_method=0.3)
plt.xlim(0, 200)
plt.title('Smoothed distribution of sum_gamerounds (clipped to 200)')
plt.legend()
plt.savefig(os.path.join(FIG_DIR, 'gamerounds_kde_clipped.png'), bbox_inches='tight')
plt.close()

# Boxplot (log scale) to show distribution
plt.figure(figsize=(8,6))
sns.boxplot(x='version', y='sum_gamerounds', data=df[df['sum_gamerounds']<=200])
plt.title('Boxplot of sum_gamerounds (clipped to 200)')
plt.savefig(os.path.join(FIG_DIR, 'gamerounds_box_clipped.png'), bbox_inches='tight')
plt.close()

print('\nDone. Outputs saved in', OUT_DIR)
print('Summary CSV:', os.path.join(OUT_DIR, 'cookie_cats_summary.csv'))
print('Figures in', FIG_DIR)
