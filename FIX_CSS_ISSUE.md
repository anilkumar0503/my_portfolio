# Fix CSS Not Loading - GitHub Pages

## What I Fixed

Updated `next.config.js` to include:
- `basePath: '/my_portfolio'` - Tells Next.js the site is in a subdirectory
- `assetPrefix: '/my_portfolio'` - Ensures CSS/JS files load from correct path

## Deploy the Fix

```bash
# Add and commit the changes
git add next.config.js
git commit -m "Fix CSS loading for GitHub Pages subdirectory"
git push origin main
```

## Wait for Deployment

1. Go to: https://github.com/anilkumar0503/my_portfolio/actions
2. Wait for the workflow to complete (green checkmark)
3. Visit: https://anilkumar0503.github.io/my_portfolio/

## Expected Result

✅ CSS should now load properly
✅ Site should have full styling and animations
✅ Password protection screen should look beautiful

## If Using Custom Domain Later

If you want to use a custom domain (e.g., anilkumar.com), you'll need to:
1. Remove `basePath` and `assetPrefix` from `next.config.js`
2. Set up custom domain in GitHub Pages settings
3. Redeploy

## Alternative: Use Root Domain

If you want the site at `anilkumar0503.github.io` instead of `/my_portfolio`:
1. Rename repository to: `anilkumar0503.github.io`
2. Remove `basePath` and `assetPrefix` from `next.config.js`
3. Redeploy
