# Netlify Deployment Guide

## Quick Deploy to Netlify

### Method 1: Drag & Drop (Fastest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Drag your entire portfolio folder to the deploy area
4. Your site will be live instantly!

### Method 2: GitHub Integration (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your `bootstrap-portfolio` repository
5. Configure build settings:
   - **Base directory:** (leave empty)
   - **Build command:** (leave empty)
   - **Publish directory:** (leave empty or `.`)
6. Click "Deploy site"

### Important: Set the correct index file
Since your main file is `modern-portfolio.html`, you need to either:
- **Option A:** Rename `modern-portfolio.html` to `index.html`
- **Option B:** Set up a redirect (see below)

### Setting up redirects (if keeping modern-portfolio.html name)
Create a file called `_redirects` in your root folder with:
```
/  /modern-portfolio.html  200
```

### Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

Your site will be available at: `https://your-site-name.netlify.app`
