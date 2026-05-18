# Portfolio Visitor Tracking Setup

## What It Does

Automatically sends you an email at **bakkashettianilkumar@gmail.com** whenever someone views your portfolio (after entering the password).

## Email Notification Includes:
- ✅ Date and time of visit (IST timezone)
- ✅ URL they visited
- ✅ Where they came from (referrer)
- ✅ Browser information
- ✅ Language preference
- ✅ Screen resolution

## ✅ Already Configured!

Your Brevo (Sendinblue) API credentials are already integrated. No additional setup needed!

## Deploy Now

```bash
git add .
git commit -m "Add visitor tracking"
git push origin main
```

## How It Works

1. **Visitor enters password** → Gains access to portfolio
2. **PortfolioTracker activates** → Runs silently in background
3. **Collects visit info** → Browser data, time, referrer
4. **Sends email to you** → Via Web3Forms API
5. **Tracks once per session** → Won't spam you if they refresh

## Privacy Notes

- ✅ Completely invisible to visitors
- ✅ Only tracks after password authentication
- ✅ No personal data collected (just browser info)
- ✅ One notification per session (not per page)
- ✅ Free service (Web3Forms free tier: 250 emails/month)

## Alternative: Google Analytics (Optional)

If you want more detailed analytics, you can also add Google Analytics:

1. Create Google Analytics account
2. Get tracking ID
3. Add to `app/layout.tsx`

But the email notification is simpler and gives you instant alerts!

## Email Example

You'll receive emails like this:

```
Subject: 🔔 Portfolio Viewed

Portfolio View Notification

Time: Wednesday, May 18, 2026 at 12:30:45 PM India Standard Time
URL: https://anilkumar0503.github.io/my_portfolio/
Referrer: https://www.linkedin.com/
Browser: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
Language: en-US
Screen: 1920x1080
```

## Troubleshooting

### Not receiving emails?
- Check spam folder
- Verify Web3Forms access key is correct
- Check Web3Forms dashboard for delivery status

### Too many emails?
- The tracker only sends once per session
- If someone refreshes, it won't send again
- Session resets when browser is closed

### Want to disable temporarily?
Comment out this line in `app/page.tsx`:
```typescript
// <PortfolioTracker />
```

## Cost

**FREE!** Web3Forms free tier includes:
- 250 submissions per month
- Email notifications
- No credit card required
