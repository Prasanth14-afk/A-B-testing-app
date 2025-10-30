# Business Interpretation: Cookie Cats A/B Test

## Summary of Results

| Metric          | Gate 30   | Gate 40   | Difference | p-value  | Significant? |
|-----------------|-----------|-----------|------------|----------|--------------|
| **retention_1** | 44.8%     | 44.2%     | -0.6 pp    | 0.074    | **No**       |
| **retention_7** | 19.0%     | 18.2%     | -0.8 pp    | 0.002    | **Yes**      |
| **sum_gamerounds** | 52.46  | 51.30     | -1.16      | 0.376    | **No**       |

*pp = percentage points*

---

## Key Findings

### 1. **Day-1 Retention (retention_1)**: No significant difference
- **Gate 30 (control)**: 44.8%  
- **Gate 40 (variant)**: 44.2%  
- **p-value**: 0.074 (above α=0.05)  
- **Interpretation**: Moving the gate from level 30 to level 40 does **not** have a statistically significant impact on next-day retention.

### 2. **Day-7 Retention (retention_7)**: Significant drop in variant
- **Gate 30 (control)**: 19.0%  
- **Gate 40 (variant)**: 18.2%  
- **p-value**: 0.002 (below α=0.05)  
- **Interpretation**: Players in the gate_40 group returned less after 7 days. This is **statistically significant** and indicates that delaying the forced break (moving gate from 30→40) **hurts longer-term retention**.

### 3. **Game Rounds (sum_gamerounds)**: No significant difference
- **Gate 30**: 52.5 average rounds  
- **Gate 40**: 51.3 average rounds  
- **p-value**: 0.376 (above α=0.05)  
- **Interpretation**: No meaningful difference in engagement (measured by total rounds played).

---

## Business Recommendation

### **Keep the gate at level 30 (Control)**

**Rationale**:
1. **7-day retention is significantly better** in the control group (Gate 30). Retention is a key driver of long-term monetization and engagement.
2. While **day-1 retention** is not statistically different, the trend slightly favors control as well.
3. **No engagement drop** in control (gamerounds are similar), so there's no risk to session depth.
4. **Delaying the gate to level 40** provides no benefit and actively harms week-long retention.

**Action for Product Team**:
- **Do not implement** the gate_40 variant in production.
- Continue using the gate at level 30.
- Consider future experiments on **other engagement levers** (e.g., difficulty scaling, rewards, in-game events) to improve retention further without sacrificing the forced-break mechanism that appears to work well at level 30.

---

## Additional Context
- **Sample size**: ~44,700 players (gate_30) and ~45,489 players (gate_40) – large enough for reliable statistical inference.
- **Statistical method**: Two-proportion z-tests for retention metrics; Welch's t-test for continuous gamerounds metric.
- **Significance level**: α = 0.05.

This analysis strongly suggests that the **current gate placement (30)** is optimal for player retention.
