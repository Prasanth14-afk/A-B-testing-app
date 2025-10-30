# 🎨 Component Hierarchy & Visual Guide

## Dashboard Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────┐  ┌──────────────────────────────────────────┐ │
│  │         │  │  Header Component                        │ │
│  │         │  │  - Title & Subtitle                      │ │
│  │ Sidebar │  │  - Search, Notifications, Avatar         │ │
│  │         │  └──────────────────────────────────────────┘ │
│  │         │                                              │ │
│  │ - Logo  │  ┌──────────────────────────────────────────┐ │
│  │ - Nav   │  │  KPI Cards Row (4 columns)               │ │
│  │   Items │  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐            │ │
│  │ - User  │  │  │KPI │ │KPI │ │KPI │ │KPI │            │ │
│  │         │  │  └────┘ └────┘ └────┘ └────┘            │ │
│  │         │  └──────────────────────────────────────────┘ │
│  │         │                                              │ │
│  │         │  ┌──────────────────────────────────────────┐ │
│  │         │  │  Second KPI Row (4 columns)              │ │
│  │         │  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐            │ │
│  │         │  │  │KPI │ │KPI │ │KPI │ │KPI │            │ │
│  │         │  │  └────┘ └────┘ └────┘ └────┘            │ │
│  │         │  └──────────────────────────────────────────┘ │
│  │         │                                              │ │
│  │         │  ┌───────────────────┐ ┌──────────────────┐ │ │
│  │         │  │ Charts (2 cols)   │ │ Radial & Lists   │ │ │
│  │         │  │                   │ │                  │ │ │
│  │         │  │ - Bar Chart       │ │ - Multi-Ring     │ │ │
│  │         │  │ - Line Chart      │ │ - Segments       │ │ │
│  │         │  │ - Distribution    │ │                  │ │ │
│  │         │  └───────────────────┘ └──────────────────┘ │ │
│  │         │                                              │ │
│  │         │  ┌──────────────────────────────────────────┐ │
│  │         │  │  Statistical Table                       │ │
│  │         │  └──────────────────────────────────────────┘ │
│  │         │                                              │ │
│  │         │  ┌──────────────────────────────────────────┐ │
│  │         │  │  Insights Panel                          │ │
│  └─────────┘  └──────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Component Tree

```
App (page.tsx)
│
├── Sidebar.tsx
│   ├── Logo Section
│   ├── Navigation Menu (9 items)
│   └── User Profile
│
├── Header.tsx
│   ├── Title & Subtitle
│   └── Actions (Search, Bell, Avatar)
│
└── Main Content
    │
    ├── KPI Cards Grid (Row 1)
    │   ├── KpiCard (Total Users Gate 30) - BRAND variant
    │   ├── KpiCard (Total Users Gate 40)
    │   ├── KpiCard (Avg Rounds Gate 30)
    │   └── KpiCard (Avg Rounds Gate 40)
    │
    ├── KPI Cards Grid (Row 2)
    │   ├── KpiCard (Day 1 Retention Gate 30)
    │   ├── KpiCard (Day 1 Retention Gate 40)
    │   ├── KpiCard (Day 7 Retention Gate 30)
    │   └── KpiCard (Day 7 Retention Gate 40)
    │
    ├── Charts Section (3-column grid)
    │   │
    │   ├── Left Column (2 spans)
    │   │   ├── RetentionBarChart
    │   │   │   └── Recharts BarChart
    │   │   ├── RetentionTrendLine
    │   │   │   └── Recharts LineChart
    │   │   └── RoundsDistribution
    │   │       └── Recharts BarChart
    │   │
    │   └── Right Column (1 span)
    │       ├── RadialMultiRing
    │       │   └── Recharts RadialBarChart
    │       └── SegmentsList
    │           └── Player segments with icons
    │
    ├── StatTable
    │   └── HTML Table with conditional styling
    │
    └── InsightsPanel
        └── Insight cards with recommendations
```

## Component Props Overview

### KpiCard
```typescript
{
  title: string              // Card title
  value: number              // Main metric value
  delta?: number             // Percentage change
  deltaType?: 'percent' | 'number'
  format?: 'number' | 'percent' | 'currency'
  variant?: 'default' | 'brand'  // Blue gradient
  icon?: ReactNode           // Lucide icon
  subtitle?: string          // Optional description
}
```

### RetentionBarChart
```typescript
{
  data: Array<{
    metric: string           // X-axis label
    gate30: number           // Gate 30 value
    gate40: number           // Gate 40 value
    significant?: boolean    // Show significance badge
  }>
}
```

### RetentionTrendLine
```typescript
{
  data: Array<{
    day: number              // Day number (1-14)
    gate30: number           // Gate 30 retention %
    gate40: number           // Gate 40 retention %
  }>
}
```

### RadialMultiRing
```typescript
{
  data: Array<{
    category: string         // Ring label
    value: number            // Percentage value
    fill: string             // Color (CSS color string)
  }>
}
```

### StatTable
```typescript
{
  data: Array<{
    metric: string           // Metric name
    gate30: number           // Gate 30 value
    gate40: number           // Gate 40 value
    delta: number            // Percentage difference
    pValue: number           // Statistical p-value
    significant: boolean     // Highlight row
  }>
}
```

## Color System Reference

### CSS Variables (HSL format)
```css
--brand: 243 75% 59%         /* #4F46E5 - Primary blue */
--brand-light: 213 94% 68%   /* #60A5FA - Light blue */
--accent: 258 90% 66%        /* #7C3AED - Purple accent */
--positive: 158 64% 52%      /* #10B981 - Green success */
--negative: 0 84% 60%        /* #EF4444 - Red warning */
--background: 216 25% 97%    /* #F6F7FB - Page bg */
--card: 0 0% 100%            /* #FFFFFF - Card bg */
--border: 225 14% 93%        /* #E8EAF2 - Borders */
--foreground: 222 47% 11%    /* #0F172A - Text */
--muted: 215 16% 47%         /* #6B7280 - Muted text */
```

### Usage in Components
```tsx
// Background
className="bg-card"              // White
className="bg-background"        // Light gray
className="bg-brand"             // Primary blue

// Text
className="text-foreground"      // Dark text
className="text-muted"           // Gray text
className="text-positive"        // Green text
className="text-negative"        // Red text

// Borders
className="border-border"        // Subtle gray border
```

## Animation Timeline

```
Page Load
  ↓
0ms    : Page appears
100ms  : Sidebar fades in
200ms  : Header fades in
300ms  : First KPI row animates (stagger)
400ms  : Second KPI row animates (stagger)
500ms  : Charts fade in (left column)
550ms  : Radial chart scales in
600ms  : Segments list appears
700ms  : Table rows animate (stagger)
800ms  : Insights cards slide in
1000ms : Count-up animations complete
2000ms : All animations finished
```

## Responsive Breakpoints

```css
/* Mobile First */
base     : 1 column (< 768px)
md       : 2 columns (≥ 768px)  - Tablets
lg       : 3-4 columns (≥ 1024px) - Desktop
xl       : Full layout (≥ 1280px) - Large screens
2xl      : Optimized (≥ 1536px)  - 4K displays
```

### Grid Behavior

**KPI Cards:**
- Mobile: 1 column stack
- Tablet: 2x2 grid
- Desktop: 4 columns row

**Charts:**
- Mobile: 1 column stack
- Desktop: 2-col left + 1-col right

## File Size Reference

```
Component Sizes (uncompressed):
├── Sidebar.tsx          ~3KB
├── Header.tsx           ~2KB
├── KpiCard.tsx          ~5KB (includes animation)
├── RetentionBarChart    ~4KB
├── RetentionTrendLine   ~4KB
├── RadialMultiRing      ~3KB
├── RoundsDistribution   ~4KB
├── StatTable.tsx        ~5KB
├── InsightsPanel.tsx    ~4KB
└── SegmentsList.tsx     ~2KB

Total Components: ~36KB source code
```

## Customization Hotspots

### 1. Colors (Easy)
**File**: `app/globals.css`
**Line**: 7-30
**What**: Change CSS variables

### 2. Sidebar Items (Easy)
**File**: `components/Sidebar.tsx`
**Line**: 16-24
**What**: Add/remove menu items

### 3. KPI Cards (Medium)
**File**: `app/page.tsx`
**Line**: 42-76
**What**: Add/remove/reorder cards

### 4. Mock Data (Medium)
**File**: `lib/data.ts`
**Line**: 3-80
**What**: Replace with real data

### 5. New Charts (Advanced)
**Create**: `components/YourChart.tsx`
**Import**: `app/page.tsx`
**Use**: Add to grid layout

## Icon Usage

All icons from Lucide React:
```tsx
import { IconName } from 'lucide-react'

// Available icons used:
Users, TrendingUp, TrendingDown, Calendar, Target,
CheckCircle2, XCircle, AlertCircle, Lightbulb,
LayoutDashboard, FileText, Package, CreditCard, etc.

// Usage:
<Users className="w-6 h-6" />
```

## Chart Configuration

### Bar Chart (Retention, Distribution)
- Rounded corners: 8px
- Max bar size: 50-60px
- Grid: Horizontal lines only
- Colors: Brand blue, Accent purple

### Line Chart (Retention Trend)
- Type: Monotone (smooth curves)
- Stroke width: 3px
- Dot radius: 4px (normal), 6px (hover)
- Gradient fill below lines

### Radial Chart (Performance)
- Start angle: 90°
- End angle: -270° (full circle)
- Corner radius: 10px
- Background rings visible

## Performance Tips

1. **Lazy Loading**: Components auto-split by Next.js
2. **Image Optimization**: Use Next.js Image component
3. **Code Splitting**: Dynamic imports for heavy charts
4. **Memoization**: Use React.memo for static components
5. **Virtual Scrolling**: For large data tables

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile

## Accessibility Features

- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader friendly
- ✅ Color contrast (WCAG AA)

---

**Visual Guide Last Updated**: October 30, 2025
**Component Count**: 11 main components
**Total Props**: 50+ customizable properties
**Animation Points**: 25+ motion elements
