# 🚀 Vercel Deployment Fix Guide

## The 404 Issue

If you're seeing a 404 error on Vercel, it's likely due to one of these issues:

### 1. Build Configuration

**Update `vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install --ignore-scripts",
  "framework": "nextjs"
}
```

### 2. Root Directory Issue

**If your project is in a subdirectory:**

In Vercel dashboard:
1. Go to Project Settings
2. Scroll to "Root Directory"
3. Set it to: `web-dashboard`
4. Click "Save"

### 3. Build & Output Settings

In Vercel Project Settings → General:
- **Framework Preset:** Next.js
- **Root Directory:** `web-dashboard` (if applicable)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install --ignore-scripts`

### 4. Environment Variables

Vercel Dashboard → Settings → Environment Variables:

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 5. Deployment from Git

**Option A: Deploy from Repository Root**

If deploying from repo root with `web-dashboard/` folder:

```bash
# In Vercel Dashboard
Root Directory: web-dashboard
```

**Option B: Deploy from Subdirectory**

```bash
# Push only web-dashboard to a new branch
cd "/Users/prasanthkumar/Desktop/A:B testing"
git subtree push --prefix web-dashboard origin web-dashboard-deploy
```

Then in Vercel:
- Connect to branch: `web-dashboard-deploy`
- Root Directory: `/` (root)

### 6. Manual Deployment

**Via Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd "/Users/prasanthkumar/Desktop/A:B testing/web-dashboard"

# Deploy
vercel --prod
```

### 7. Check Build Logs

In Vercel Dashboard:
1. Go to Deployments
2. Click on failed deployment
3. Check "Build Logs" tab
4. Look for specific errors

Common errors:
- `Module not found` → Missing dependency
- `Type error` → TypeScript issue
- `404` → Wrong root directory

### 8. Quick Fix Commands

Run these before redeploying:

```bash
cd "/Users/prasanthkumar/Desktop/A:B testing/web-dashboard"

# Clean install
rm -rf node_modules package-lock.json .next
npm install --ignore-scripts

# Test build locally
npx next build

# If build succeeds, deploy
vercel --prod
```

### 9. Troubleshooting Checklist

- [ ] Root directory is set correctly in Vercel
- [ ] All dependencies are in package.json
- [ ] Build works locally (`npx next build`)
- [ ] No TypeScript errors
- [ ] vercel.json is configured
- [ ] Git repo is pushed with latest changes

### 10. Alternative: Deploy to Different Platform

If Vercel continues to have issues:

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Cloudflare Pages:**
- Connect GitHub repo
- Build command: `npm run build`
- Output directory: `.next`

## Current Project Structure

```
A:B testing/
├── cookie_cats.csv
├── analysis_cookie_cats.py
├── ab_output/
│   └── viz_*.csv files
└── web-dashboard/          ← Deploy this folder
    ├── app/
    ├── components/
    ├── lib/
    ├── public/
    ├── package.json
    ├── next.config.mjs
    ├── vercel.json          ← Created
    └── .vercelignore        ← Created
```

## Recommended Vercel Settings

```
Project Name: ab-testing-dashboard
Framework: Next.js
Root Directory: web-dashboard
Node Version: 18.x or 20.x
Build Command: npm run build
Output Directory: .next
Install Command: npm install --ignore-scripts
```

---

## 🔧 Quick Deploy Script

Save this as `deploy.sh`:

```bash
#!/bin/bash
cd "/Users/prasanthkumar/Desktop/A:B testing/web-dashboard"
rm -rf node_modules .next
npm install --ignore-scripts
npx next build
vercel --prod
```

Run with: `chmod +x deploy.sh && ./deploy.sh`

---

If still having issues, share:
1. Vercel build logs
2. Error message
3. Project settings screenshot
