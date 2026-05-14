# GitHub Pages Setup - Fix Instructions

## Current Issue
Your GitHub Pages is showing the README instead of the portfolio because:
1. GitHub Pages source might not be set to "GitHub Actions"
2. The workflow hasn't run yet, or
3. The build output isn't being deployed correctly

## Fix Steps

### Step 1: Enable GitHub Actions for Pages
1. Go to: https://github.com/anilkumar0503/my_portfolio/settings/pages
2. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
3. Save the settings

### Step 2: Verify Workflow File Exists
Make sure `.github/workflows/deploy.yml` is in your repository:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### Step 3: Trigger the Workflow
Option A - Push a change:
```bash
git add .
git commit -m "Trigger GitHub Pages deployment"
git push origin main
```

Option B - Manual trigger:
1. Go to: https://github.com/anilkumar0503/my_portfolio/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

### Step 4: Monitor Deployment
1. Go to: https://github.com/anilkumar0503/my_portfolio/actions
2. Watch the workflow run
3. Once complete (green checkmark), your site will be live

### Step 5: Verify
Visit: https://anilkumar0503.github.io/my_portfolio/

## Troubleshooting

### If workflow fails:
1. Check the Actions tab for error messages
2. Ensure `package-lock.json` is committed
3. Verify all dependencies are in `package.json`

### If still showing README:
1. Delete the `gh-pages` branch if it exists:
   ```bash
   git push origin --delete gh-pages
   ```
2. Re-run the workflow

### Check Build Locally:
```bash
npm run build
# Check if 'out' folder is created with index.html
```

## Expected Result
After successful deployment, you should see:
- Password protection screen
- Your full portfolio after entering: `AKB@2026`
