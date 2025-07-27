# Vercel Deployment Guide

## Deploy to Vercel

### Steps:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your `bootstrap-portfolio` repository
5. Configure project:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
6. Click "Deploy"

### For modern-portfolio.html as main file:
Create a `vercel.json` file in your root directory:

```json
{
  "routes": [
    {
      "src": "/",
      "dest": "/modern-portfolio.html"
    }
  ]
}
```

### Advantages:
- ✅ Extremely fast global CDN
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificates
- ✅ Great performance analytics
- ✅ Custom domain support

Your site will be available at: `https://your-project.vercel.app`
