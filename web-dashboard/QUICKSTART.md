# 🎯 Quick Start Guide — Cookie Cats Dashboard

## ⚡ Fast Setup (2 minutes)

### Option 1: Automated Setup Script

```bash
cd "/Users/prasanthkumar/Desktop/A:B testing/web-dashboard"
chmod +x setup.sh
./setup.sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### Option 2: Manual Setup

```bash
cd "/Users/prasanthkumar/Desktop/A:B testing/web-dashboard"
npm install
npm run dev
```

---

## 📋 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Modern browser** (Chrome, Firefox, Safari, Edge)

---

## 🎨 What You'll See

After running `npm run dev`, you'll have a live dashboard with:

### ✅ **Top Section**: 5 KPI Cards
- Total Players (Gate 30)
- Total Players (Gate 40)
- Day-1 Retention (with significance badge)
- Day-7 Retention (with significance badge)
- Avg Game Rounds

### ✅ **Middle Section**: Visual Analytics
- **Bar Chart**: Retention comparison (Gate 30 vs Gate 40)
- **Group Summary Card**: Player counts and statistics

### ✅ **Bottom Section**: Insights & Data
- **Statistical Table**: Complete results with p-values
- **Insights Panel**: Key findings and recommendations

---

## 🔧 Troubleshooting

### Issue: `command not found: npm`
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Module not found errors
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🎨 Customization Quick Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { DEFAULT: "#YOUR_COLOR" },
  accent: { DEFAULT: "#YOUR_COLOR" },
}
```

### Update Data
Edit `lib/data.ts` or integrate real CSVs (see README.md)

### Modify Layout
Edit `app/page.tsx` → change grid columns

---

## 📊 Connecting Real CSV Data

Your CSV files are already in `../ab_output/`. To use them:

```bash
# Copy CSVs to dashboard data folder
cp ../ab_output/viz_master_dashboard.csv data/
cp ../ab_output/viz_retention_long.csv data/
cp ../ab_output/viz_group_summary.csv data/
```

Then follow the "Using Real CSV Data" section in README.md

---

## 🚀 Deploy to Production

### Vercel (Easiest)
1. Push code to GitHub
2. Connect repo on [vercel.com](https://vercel.com)
3. Deploy automatically

### Build & Run Locally
```bash
npm run build
npm start
```

---

## 📱 Mobile Preview

The dashboard is fully responsive:
- **Desktop**: 3-column grid
- **Tablet**: 2-column grid
- **Mobile**: 1-column stacked

Test by resizing your browser window!

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Recharts Examples](https://recharts.org/en-US/examples)
- [Framer Motion Guide](https://www.framer.com/motion/)

---

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in development
2. **TypeScript**: Hover over code for type hints
3. **Console**: Check browser console for any errors
4. **Mobile**: Test on real mobile device via local network

---

## 🆘 Need Help?

Common commands:
```bash
npm run dev       # Start development
npm run build     # Build for production
npm start         # Run production build
npm run lint      # Check code quality
```

---

**Ready to launch? Run `npm run dev` and open [http://localhost:3000](http://localhost:3000)!** 🚀
