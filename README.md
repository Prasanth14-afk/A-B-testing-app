# Cookie Cats A/B Testing Analysis

This repository contains a complete product-analytics style A/B test analysis for the Cookie Cats dataset (downloaded from Kaggle).

Files:
- `cookie_cats.csv` - raw dataset (player-level records)
- `analysis_cookie_cats.py` - full analysis script (EDA, metrics, statistical tests, charts)
- `requirements.txt` - Python dependencies
- `ab_output/` - output folder produced by the script: summary CSV and figures

How the analysis works (short):
- Clean and prepare the data (map TRUE/FALSE to numeric 1/0)
- Compute descriptive statistics and group-level metrics (means, std, counts)
- Run two-proportion z-tests for `retention_1` and `retention_7`
- Run Welch's t-test for `sum_gamerounds`
- Save a results table to `ab_output/cookie_cats_summary.csv` and charts to `ab_output/figures/`

Quick start (local):

1. Create a virtualenv (recommended) and install dependencies:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Run the analysis:

```bash
python3 analysis_cookie_cats.py
```

The final CSV for visualization is: `ab_output/cookie_cats_summary.csv`.

Notes for the portfolio write-up:
- See `ab_output/results_summary.txt` for plain-text results.
- The `README.md` here is a succinct summary; you can copy the `Portfolio` section from the project report (generated separately) into your GitHub repository's main README.

