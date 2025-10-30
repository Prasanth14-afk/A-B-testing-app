# Quick Start Guide

## 🚀 Launch Your Dashboard (3 Steps)

### Option 1: Automated Script (Recommended)

1. Open Terminal
2. Navigate to the dashboard folder:
   ```bash
   cd "/Users/prasanthkumar/Desktop/A:B testing/dashboard-app"
   ```
3. Run the start script:
   ```bash
   chmod +x start.sh
   ./start.sh
   ```

### Option 2: Manual Setup

1. Open Terminal and navigate to dashboard:
   ```bash
   cd "/Users/prasanthkumar/Desktop/A:B testing/dashboard-app"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 What You'll See

Your dashboard includes:
- ✅ 8 KPI cards with real-time animations
- ✅ Retention comparison bar chart
- ✅ 14-day retention trend line
- ✅ Game rounds distribution chart
- ✅ Performance metrics radial chart
- ✅ Player segments list
- ✅ Statistical summary table
- ✅ Key insights and recommendations

## 🎨 Customization

All components are in `/components/` - edit any file to customize!

Colors are defined in `/app/globals.css` - change the CSS variables to match your brand.

## 🔌 Connect Your Data

Replace mock data in `/lib/data.ts` with your actual CSV data:

1. Copy your CSV files to `public/data/`
2. Install CSV parser: `npm install papaparse`
3. Update data loading functions in `lib/data.ts`

See full README.md for detailed instructions!

## 💡 Tips

- The dashboard is fully responsive (mobile to 4K)
- All animations can be customized in component files
- Use browser DevTools to inspect and modify styling
- Run `npm run build` for production builds

Enjoy your new dashboard! 🎉
