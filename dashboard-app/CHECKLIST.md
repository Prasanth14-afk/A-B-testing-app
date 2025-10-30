# ✅ Pre-Launch Checklist

## Before You Run `npm install`

- [ ] Node.js 18+ is installed (`node --version`)
- [ ] npm is available (`npm --version`)
- [ ] Terminal is open
- [ ] You're in the correct directory

## Installation Steps

- [ ] Navigate to dashboard folder:
  ```bash
  cd "/Users/prasanthkumar/Desktop/A:B testing/dashboard-app"
  ```

- [ ] Run installation:
  ```bash
  npm install
  ```
  ⏱️ Expected time: 2-5 minutes

- [ ] Wait for "added XXX packages" message

## Launch Steps

- [ ] Start dev server:
  ```bash
  npm run dev
  ```

- [ ] Look for message: "Ready in XXXms"
- [ ] See URL: "Local: http://localhost:3000"
- [ ] Open browser
- [ ] Navigate to: http://localhost:3000
- [ ] Dashboard loads successfully ✨

## First Look Checklist

When the dashboard loads, you should see:

### Layout
- [ ] Sidebar on the left (white background)
- [ ] Header at top with title
- [ ] Main content area (light gray background)

### KPI Cards (Row 1)
- [ ] "Total Users (Gate 30)" - Blue gradient card
- [ ] "Total Users (Gate 40)" - White card
- [ ] "Avg. Rounds (Gate 30)" - White card
- [ ] "Avg. Rounds (Gate 40)" - White card

### KPI Cards (Row 2)
- [ ] "Day 1 Retention (Gate 30)"
- [ ] "Day 1 Retention (Gate 40)"
- [ ] "Day 7 Retention (Gate 30)"
- [ ] "Day 7 Retention (Gate 40)"

### Charts
- [ ] Retention Comparison (bar chart)
- [ ] Retention Trend (line chart)
- [ ] Game Rounds Distribution (bar chart)
- [ ] Performance Metrics (radial chart)
- [ ] Player Segments (list with icons)

### Tables & Insights
- [ ] Statistical Summary table
- [ ] Key Insights panel with colored cards

### Animations
- [ ] Numbers count up from 0
- [ ] Cards fade in on scroll
- [ ] Hover effects work on cards
- [ ] Chart tooltips appear on hover

## Interactive Elements Test

- [ ] Click sidebar items (they highlight in blue)
- [ ] Hover over KPI cards (they lift up)
- [ ] Hover over charts (tooltips appear)
- [ ] Scroll page (smooth scrolling)
- [ ] Resize browser (layout adapts)

## Quality Checks

### Visual
- [ ] All text is readable (no overlaps)
- [ ] Colors look professional
- [ ] Spacing is consistent
- [ ] No layout breaks
- [ ] Shadows are visible but subtle

### Functionality
- [ ] No console errors (F12 → Console)
- [ ] Charts render correctly
- [ ] All icons display
- [ ] Animations are smooth (not janky)

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Interactions feel instant
- [ ] No lag when scrolling
- [ ] Charts respond to hover quickly

## Mobile Responsive Test

- [ ] Open browser DevTools (F12)
- [ ] Click device toolbar icon
- [ ] Test on iPhone SE (375px)
  - [ ] Sidebar becomes overlay
  - [ ] KPIs stack in 1 column
  - [ ] Charts stack vertically
- [ ] Test on iPad (768px)
  - [ ] KPIs in 2 columns
  - [ ] Layout adjusts properly
- [ ] Test on Desktop (1920px)
  - [ ] Full 4-column layout
  - [ ] Charts side-by-side

## Browser Compatibility

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Common Issues & Fixes

### "npm: command not found"
**Fix**: Install Node.js from https://nodejs.org/

### "Cannot find module 'next'"
**Fix**: Run `npm install` in the correct directory

### Port 3000 already in use
**Fix**: Stop other apps or use different port:
```bash
PORT=3001 npm run dev
```

### Charts not showing
**Fix**: Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Slow loading
**Fix**: First load is slower - subsequent loads are cached

## Post-Launch Tasks

### Immediate (Today)
- [ ] Take screenshots for reference
- [ ] Test all interactive elements
- [ ] Check mobile layout
- [ ] Review colors match requirements

### Short-term (This Week)
- [ ] Customize colors if needed
- [ ] Add your actual CSV data
- [ ] Modify KPI cards for your metrics
- [ ] Adjust text content

### Medium-term (This Month)
- [ ] Add authentication if needed
- [ ] Set up production deployment
- [ ] Configure custom domain
- [ ] Add analytics tracking

## Getting Help

### Error Messages
1. Read the error carefully
2. Check `COMPONENT_GUIDE.md` for component details
3. Review `README.md` troubleshooting section
4. Check browser console (F12)

### Customization Help
1. See `COMPONENT_GUIDE.md` for component structure
2. Check `README.md` for customization examples
3. Review component files directly
4. Use VS Code's Go to Definition (Cmd+Click)

### Data Integration Help
1. Read "Integrating Your CSV Data" in `README.md`
2. Check example code in `lib/data.ts`
3. See CSV loading methods (3 options)
4. Test with small dataset first

## Success Criteria

Your dashboard is ready when:

- ✅ All components render without errors
- ✅ Animations play smoothly
- ✅ Charts display data correctly
- ✅ Mobile layout works
- ✅ No console errors
- ✅ Page loads fast
- ✅ Colors match design
- ✅ Interactive elements respond

## Next Steps After Success

1. **Explore**: Click around, test features
2. **Customize**: Change colors, text, layout
3. **Integrate**: Add your CSV data
4. **Deploy**: Build and host online
5. **Share**: Show stakeholders

## Emergency Reset

If something goes wrong:

```bash
# Delete dependencies and cache
rm -rf node_modules .next

# Reinstall
npm install

# Restart server
npm run dev
```

## Support Resources

- `README.md` - Full documentation
- `QUICKSTART.md` - Quick reference
- `COMPONENT_GUIDE.md` - Component details
- `PROJECT_SUMMARY.md` - Project overview

## Final Check

Before closing this checklist:

- [ ] Dashboard is running
- [ ] All features work
- [ ] You understand the structure
- [ ] You know where to customize
- [ ] You can access documentation
- [ ] You're ready to customize

## 🎉 Congratulations!

If all items are checked, your dashboard is successfully running!

Time to explore and customize! 🚀

---

**Checklist Version**: 1.0
**Last Updated**: October 30, 2025
**Estimated Completion Time**: 10-15 minutes
