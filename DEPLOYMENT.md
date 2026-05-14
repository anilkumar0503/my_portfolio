# GitHub Pages Deployment Guide

This portfolio is configured for static site generation (SSG) and deployment to GitHub Pages.

## Setup Instructions

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 3. Automatic Deployment
The site will automatically deploy when you push to the `main` branch. The workflow will:
- Install dependencies
- Build the static site
- Deploy to GitHub Pages

### 4. Access Your Site
After deployment completes, your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## Local Testing

To test the static build locally:

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
# You can serve it with any static file server
npx serve out
```

## Configuration Files

- **`next.config.js`** - Configured for static export
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow
- **`public/.nojekyll`** - Prevents Jekyll processing

## Notes

- The site is password-protected with password: `AKB@2026`
- Resume file is located at `/resume.pdf` (served from `public/resume.pdf`)
- All images are unoptimized for static export compatibility
