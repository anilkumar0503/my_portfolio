# Portfolio Tracking - CORS Issue Fix

## Problem

The Brevo API doesn't work directly from browser due to CORS (Cross-Origin Resource Sharing) restrictions. This is a security feature that prevents browsers from making direct API calls to external services.

## Solution: Use Formspree (Free & Works with Static Sites)

Formspree is designed for static sites and doesn't have CORS issues.

### Setup Steps:

#### 1. Create Free Formspree Account

1. Go to: https://formspree.io/
2. Click **"Get Started"**
3. Sign up with: **bakkashettianilkumar@gmail.com**
4. Verify your email

#### 2. Create a New Form

1. Click **"+ New Form"**
2. Name it: "Portfolio Tracker"
3. Copy your **Form ID** (looks like: `abc123xyz`)
4. Your endpoint will be: `https://formspree.io/f/abc123xyz`

#### 3. Update the Code

Replace the current `PortfolioTracker.tsx` with `PortfolioTrackerFormspree.tsx`:

```bash
# In your terminal
cd e:\resume\portfolio-website\components
del PortfolioTracker.tsx
ren PortfolioTrackerFormspree.tsx PortfolioTracker.tsx
```

Or manually:
1. Open `PortfolioTrackerFormspree.tsx`
2. Replace `YOUR_FORM_ID` with your actual Formspree form ID
3. Delete old `PortfolioTracker.tsx`
4. Rename `PortfolioTrackerFormspree.tsx` to `PortfolioTracker.tsx`

#### 4. Test Locally

1. Save the file
2. Refresh `http://localhost:3001/`
3. Open browser console (F12)
4. Look for: `✅ Visit tracked successfully - Email sent!`
5. Check your email: **bakkashettianilkumar@gmail.com**

#### 5. Deploy

```bash
git add .
git commit -m "Fix tracking with Formspree"
git push origin main
```

## Alternative: Keep Brevo but Use Serverless Function

If you want to keep using Brevo, you need a backend. Options:

### Option A: Netlify Functions (Recommended)
- Deploy to Netlify instead of GitHub Pages
- Create a serverless function
- More complex but more secure

### Option B: Vercel Serverless Functions
- Deploy to Vercel
- Similar to Netlify
- Good for Next.js apps

### Option C: Use Formspree (Easiest)
- No backend needed
- Works with GitHub Pages
- Free tier: 50 submissions/month
- **Recommended for your use case**

## Why Formspree?

✅ **No CORS issues** - Designed for static sites  
✅ **Free tier** - 50 emails/month (enough for portfolio)  
✅ **Easy setup** - Just need a form ID  
✅ **Works with GitHub Pages** - No backend required  
✅ **Email notifications** - Sends to your email automatically  
✅ **Spam protection** - Built-in  

## Email Format

With Formspree, you'll receive emails like:

```
Subject: 🔔 Portfolio Viewed

timestamp: Wednesday, May 18, 2026 at 12:30:45 PM India Standard Time
url: https://anilkumar0503.github.io/my_portfolio/
referrer: https://www.linkedin.com/
browser: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
language: en-US
screen: 1920x1080
```

## Troubleshooting

### Check Browser Console
1. Press F12
2. Go to Console tab
3. Look for error messages

### Common Issues:

**CORS Error:**
```
Access to fetch at 'https://api.brevo.com' from origin 'http://localhost:3001' 
has been blocked by CORS policy
```
**Solution:** Use Formspree instead

**Network Error:**
```
Failed to fetch
```
**Solution:** Check internet connection, try Formspree

**Form ID Error:**
```
404 Not Found
```
**Solution:** Verify Formspree form ID is correct

## Current Status

- ❌ Brevo direct API: Blocked by CORS
- ✅ Formspree: Works perfectly with static sites
- ✅ Alternative created: `PortfolioTrackerFormspree.tsx`

Follow the steps above to switch to Formspree!
