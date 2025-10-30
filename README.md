# 🎮 Cookie Cats A/B Testing - Complete Analytics Project

> A comprehensive A/B testing analysis with Python statistics and a modern Next.js dashboard

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📊 Project Overview

This repository contains a complete **Product Analytics / A/B Testing project** analyzing the Cookie Cats mobile game dataset. The project includes:

- ✅ **Python Statistical Analysis** - Full EDA, metrics calculation, and hypothesis testing
- ✅ **Interactive Web Dashboard** - Modern Next.js dashboard with animated visualizations
- ✅ **Production-Ready Code** - Clean, documented, and deployable
- ✅ **Business Insights** - Actionable recommendations based on data

### 🎯 Experiment Details

**Hypothesis:** Does moving the first gate from level 30 to level 40 affect player retention?

- **Control Group (gate_30):** 44,700 players
- **Treatment Group (gate_40):** 45,489 players
- **Total Sample Size:** 90,189 players
- **Metrics Analyzed:** 1-day retention, 7-day retention, game rounds played

## 🗂️ Repository Structure

```
A-B-testing/
├── 📄 cookie_cats.csv                 # Raw dataset (90K+ player records)
├── 🐍 analysis_cookie_cats.py         # Complete Python analysis script
├── 📊 create_viz_csvs.py              # Generate visualization-ready CSVs
├── 📋 requirements.txt                # Python dependencies
├── 📝 BUSINESS_INTERPRETATION.md      # Executive summary & recommendations
│
├── ab_output/                         # Analysis outputs
│   ├── cookie_cats_summary.csv        # Main results table
│   ├── descriptive_stats.csv          # Descriptive statistics
│   ├── group_metrics.csv              # Group-level aggregations
│   ├── viz_master_dashboard.csv       # Dashboard KPIs
│   ├── viz_retention_long.csv         # Retention comparison data
│   ├── viz_statistical_tests.csv      # Test results with p-values
│   ├── viz_group_summary.csv          # Group summaries
│   ├── viz_rounds_distribution.csv    # Game rounds distribution
│   └── figures/                       # PNG charts (retention, KDE, box plots)
│
└── web-dashboard/                     # 🌐 Next.js Dashboard Application
    ├── app/                           # Next.js 14 App Router
    │   ├── layout.tsx
    │   ├── page.tsx                   # Main dashboard page
    │   └── globals.css                # Global styles
    ├── components/                    # React components
    │   ├── KpiCard.tsx                # Animated metric cards
    │   ├── RetentionBarChart.tsx      # Interactive bar charts
    │   ├── StatsTable.tsx             # Statistical summary table
    │   ├── InsightsPanel.tsx          # Key insights display
    │   ├── Sidebar.tsx                # Navigation sidebar
    │   └── Navbar.tsx                 # Top navigation bar
    ├── lib/                           # Utilities & data
    │   ├── data.ts                    # Mock/actual data loader
    │   ├── types.ts                   # TypeScript interfaces
    │   └── utils.ts                   # Helper functions
    ├── package.json                   # Node dependencies
    ├── next.config.mjs                # Next.js configuration
    ├── tailwind.config.ts             # Tailwind CSS setup
    ├── tsconfig.json                  # TypeScript config
    └── README.md                      # Dashboard documentation
```

## 🚀 Quick Start

### Python Analysis

```bash
# 1. Clone the repository
git clone https://github.com/Prasanth14-afk/A-B-testing.git
cd A-B-testing

# 2. Install Python dependencies
pip install -r requirements.txt

# 3. Run the analysis
python analysis_cookie_cats.py

# 4. Generate visualization CSVs
python create_viz_csvs.py
```

### Web Dashboard

```bash
# 1. Navigate to dashboard
cd web-dashboard

# 2. Install dependencies
npm install --ignore-scripts

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## 📈 Key Findings

| Metric | Gate 30 (Control) | Gate 40 (Treatment) | Change | P-Value | Significant? |
|--------|-------------------|---------------------|--------|---------|--------------|
| **1-Day Retention** | 44.82% | 44.23% | -0.59 pp | 0.074 | ❌ No |
| **7-Day Retention** | 19.02% | 18.20% | -0.82 pp | 0.002 | ✅ **Yes** |
| **Avg Game Rounds** | 52.46 | 51.30 | -1.16 | 0.376 | ❌ No |

### 💡 Recommendation

**Keep the gate at level 30.** While the 1-day retention difference is not statistically significant, the 7-day retention shows a significant drop when moving the gate to level 40 (p=0.002). This suggests that keeping the gate early helps with long-term player engagement.

## 🛠️ Technologies Used

### Python Stack
- **pandas** - Data manipulation and analysis
- **numpy** - Numerical computing
- **scipy** - Statistical tests (z-test, t-test)
- **matplotlib** - Data visualization
- **seaborn** - Statistical plots

### Web Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📊 Dashboard Features

- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 📈 **Interactive Charts** - Hover tooltips and smooth animations
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized with Next.js 15
- 🎭 **Smooth Animations** - Framer Motion for delightful UX
- 📊 **Real Data** - Connected to actual analysis results

## 🔬 Statistical Methodology

### Tests Performed

1. **Two-Proportion Z-Test** (Retention Metrics)
   - Null hypothesis: No difference in retention rates
   - Significance level: α = 0.05
   - Applied to: 1-day retention, 7-day retention

2. **Welch's T-Test** (Continuous Metrics)
   - Accounts for unequal variances
   - Applied to: Average game rounds played

### Sample Size & Power

- Total sample: 90,189 players
- Control: 44,700 (49.6%)
- Treatment: 45,489 (50.4%)
- Well-balanced randomization

## 📦 Files to Upload to GitHub

### Essential Files (Must Upload):
```
✅ cookie_cats.csv                      (2.7 MB - dataset)
✅ analysis_cookie_cats.py              (Python analysis)
✅ create_viz_csvs.py                   (CSV generator)
✅ requirements.txt                     (Dependencies)
✅ BUSINESS_INTERPRETATION.md           (Insights doc)
✅ README.md                            (This file)
✅ .gitignore                           (Git ignore rules)
✅ ab_output/                           (All CSV outputs)
   ✅ cookie_cats_summary.csv
   ✅ descriptive_stats.csv
   ✅ group_metrics.csv
   ✅ viz_master_dashboard.csv
   ✅ viz_retention_long.csv
   ✅ viz_statistical_tests.csv
   ✅ viz_group_summary.csv
   ✅ viz_rounds_distribution.csv
   ✅ figures/*.png                     (Charts)
✅ web-dashboard/                       (Complete Next.js app)
   ✅ app/
   ✅ components/
   ✅ lib/
   ✅ public/
   ✅ package.json
   ✅ next.config.mjs
   ✅ tailwind.config.ts
   ✅ tsconfig.json
   ✅ README.md
   ✅ vercel.json
```

### Files to Exclude (Already in .gitignore):
```
❌ node_modules/              (npm dependencies - large)
❌ .next/                     (Build output)
❌ package-lock.json          (Generated file)
❌ .DS_Store                  (Mac OS files)
❌ __pycache__/               (Python cache)
❌ .env.local                 (Environment secrets)
```

## 🚢 Deployment

### Deploy Dashboard to Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Navigate to dashboard
cd web-dashboard

# 3. Deploy
vercel --prod
```

**Important Vercel Settings:**
- **Root Directory:** `web-dashboard`
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install --ignore-scripts`

See `web-dashboard/VERCEL_DEPLOYMENT.md` for detailed deployment guide.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Prasanth Kumar**
- GitHub: [@Prasanth14-afk](https://github.com/Prasanth14-afk)
- Repository: [A-B-testing](https://github.com/Prasanth14-afk/A-B-testing)

## 🙏 Acknowledgments

- Dataset: [Cookie Cats from Kaggle](https://www.kaggle.com/datasets/yufengsui/mobile-games-ab-testing)
- Inspired by: Real-world product analytics practices

---

⭐ **If you found this project helpful, please give it a star!**

