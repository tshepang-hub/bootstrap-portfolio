# GitHub Pages Deployment Guide

## Deploy to GitHub Pages

### Steps:
1. Go to your GitHub repository: `https://github.com/tshepang-hub/bootstrap-portfolio`
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Choose "/ (root)" folder
7. Click "Save"

### Important: Rename your main file
For GitHub Pages to work automatically, rename your file:
```bash
# In your local repository
git mv modern-portfolio.html index.html
git commit -m "Rename main file for GitHub Pages"
git push origin main
```

### Your site will be available at:
`https://tshepang-hub.github.io/bootstrap-portfolio/`

### Custom Domain (Optional)
1. In your repo settings, under Pages
2. Add your custom domain (e.g., `yourname.com`)
3. Create a CNAME file in your repo with your domain name

### Advantages:
- ✅ Free hosting
- ✅ Automatic SSL
- ✅ Integrated with your GitHub workflow
- ✅ Custom domain support
