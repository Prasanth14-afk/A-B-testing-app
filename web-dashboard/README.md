# 🚀 Cookie Cats A/B Testing Dashboard

A modern, 4K-quality web dashboard for analyzing A/B testing results from the Cookie Cats mobile game experiment.

![Dashboard Preview](https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=Modern+AB+Testing+Dashboard)

## ✨ Features

- **🎨 Modern UI**: Clean, professional design with glassmorphism effects
- **📊 Interactive Charts**: Recharts-powered visualizations with smooth animations
- **🎯 KPI Cards**: Animated metric cards with trend indicators
- **📈 Statistical Summary**: Comprehensive table with significance indicators
- **💡 AI-Powered Insights**: Key findings and recommendations panel
- **📱 Fully Responsive**: 3-column (desktop) → 2-column (tablet) → 1-column (mobile)
- **🎭 Framer Motion Animations**: Smooth, professional transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data**: Mock data (easily replaceable with real CSV parsing)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Navigate to the project folder**:
```bash
cd "/Users/prasanthkumar/Desktop/A:B testing/web-dashboard"
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
```
http://localhost:3000
```

## 📊 Data Integration

### Using Mock Data (Default)

The dashboard currently uses mock data from `lib/data.ts`. This data matches your actual CSV results:

- Gate 30: 44,700 players
- Gate 40: 45,489 players
- Retention and game rounds metrics included

### Using Real CSV Data

To integrate your actual CSV files:

1. **Copy your CSV files to the `data/` folder**:
```bash
cp ../ab_output/viz_master_dashboard.csv data/
cp ../ab_output/viz_retention_long.csv data/
cp ../ab_output/viz_group_summary.csv data/
```

2. **Install PapaParse** (already in package.json):
```bash
npm install papaparse
npm install --save-dev @types/papaparse
```

3. **Create a data loader** (`lib/loadData.ts`):
```typescript
import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export async function loadCSV(filename: string) {
  const filePath = path.join(process.cwd(), 'data', filename);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  return new Promise((resolve, reject) => {
    Papa.parse(fileContent, {
      header: true,
      dynamicTyping: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
}
```

4. **Update `app/page.tsx`** to load real data:
```typescript
import { loadCSV } from '@/lib/loadData';

export default async function Home() {
  const metrics = await loadCSV('viz_master_dashboard.csv');
  const retentionData = await loadCSV('viz_retention_long.csv');
  // ... use real data
}
```

## 🎨 Color Customization

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    DEFAULT: "#2563EB",  // Blue
    500: "#3B82F6",
  },
  accent: {
    DEFAULT: "#F97316",  // Orange
    500: "#F97316",
  },
}
```

## 📁 Project Structure

```
web-dashboard/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── KpiCard.tsx          # Metric cards
│   ├── RetentionBarChart.tsx # Bar chart
│   ├── StatsTable.tsx       # Statistical table
│   ├── InsightsPanel.tsx    # Insights panel
│   ├── Sidebar.tsx          # Navigation sidebar
│   └── Navbar.tsx           # Top navbar
├── lib/
│   ├── data.ts              # Mock data
│   ├── types.ts             # TypeScript types
│   └── utils.ts             # Utility functions
├── data/                    # CSV files (optional)
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎯 Key Components

### KpiCard
Animated metric cards with:
- Value display
- Trend indicators (↑↓→)
- Significance badges
- Color-coded icons

### RetentionBarChart
Interactive bar chart showing:
- Day-1 vs Day-7 retention
- Gate 30 vs Gate 40 comparison
- Hover tooltips

### StatsTable
Statistical summary table with:
- All metrics in one view
- Conditional formatting
- Significance indicators

### InsightsPanel
Key findings with:
- Color-coded alerts
- Icons for each insight type
- Actionable recommendations

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

## 🎨 Design Features

- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Framer Motion for all transitions
- **Responsive Grid**: Auto-adjusts to screen size
- **Professional Typography**: Inter font family
- **Hover Effects**: Subtle elevation changes
- **4K Ready**: High-resolution compatible

## 📊 Dashboard Sections

1. **KPI Header**: 5 key metrics at a glance
2. **Retention Comparison**: Visual bar chart
3. **Group Summary**: Player counts and statistics
4. **Statistical Table**: Complete results with p-values
5. **Insights Panel**: AI-generated findings

## 🔧 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Customization Guide

### Change Brand Colors
Edit `tailwind.config.ts` → `theme.extend.colors`

### Modify Layout
Edit `app/page.tsx` → adjust grid columns

### Add New Charts
Create component in `components/` → import in `page.tsx`

### Update Data
Edit `lib/data.ts` or integrate CSV loader

## 🌟 Features Roadmap

- [ ] Dark mode toggle
- [ ] Export to PDF
- [ ] Date range picker
- [ ] Real-time data updates
- [ ] User authentication
- [ ] Multi-experiment comparison

## 📸 Screenshots

(Add screenshots of your deployed dashboard here)

## 🤝 Contributing

Feel free to open issues or submit PRs!

## 📄 License

MIT License - feel free to use for your portfolio or commercial projects

## 🙏 Credits

- Design inspired by modern SaaS dashboards
- Data from Cookie Cats Kaggle dataset
- Built with Next.js, Tailwind, and Recharts

---

**Built with ❤️ for Data Analytics**
