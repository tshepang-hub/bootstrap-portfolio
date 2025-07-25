# 🌟 Modern Portfolio Website

A sleek, responsive portfolio website built with HTML, TailwindCSS, and JavaScript, featuring dynamic GitHub integration and modern glassmorphism design.

## ✨ Features

- **Modern Glassmorphism Design**: Beautiful glass-effect cards with backdrop blur
- **Responsive Layout**: Perfect display on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Dynamic GitHub Integration**: Automatically fetches and displays your latest repositories
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Project Filtering**: Filter projects by technology and category
- **Contact Form**: Functional contact form with validation
- **Fast Loading**: Optimized performance with instant fallback projects

## 🚀 Quick Start

### Method 1: Using Python Server (Recommended)
```bash
# Navigate to the project folder
cd "path/to/your/portfolio"

# Start the development server
py serve.py
# OR
python serve.py
```

### Method 2: Using Node.js Server
```bash
# Navigate to the project folder
cd "path/to/your/portfolio"

# Start the server
node server.js
# OR
npm start
```

### Method 3: Windows Batch File
Double-click `start-server.bat` to start the Python server automatically.

## ⚡ Why Use a Development Server?

The portfolio includes GitHub API integration to fetch your latest repositories. Due to CORS (Cross-Origin Resource Sharing) restrictions, this feature only works when the portfolio is served from an HTTP server, not when opened directly as a file.

**What happens without a server:**
- ❌ GitHub projects take a long time to load or never load
- ✅ Static fallback projects are shown instead

**What happens with a server:**
- ✅ GitHub projects load quickly (3-5 seconds)
- ✅ Live repository data with stats and descriptions
- ✅ Automatic fallback to static projects if GitHub is unavailable

## 📁 Project Structure

```
portfolio/
├── modern-portfolio.html    # Main HTML file
├── modern-portfolio.js      # JavaScript functionality
├── modern-styles.css       # Additional custom styles (optional)
├── assets/                 # Images and media files
│   ├── me12.jpg           # Profile image
│   └── ...                # Project images
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **TailwindCSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features
- **GSAP**: Animation library
- **Lucide Icons**: Beautiful, customizable icons
- **Google Fonts**: Inter & Space Grotesk fonts

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Update content** in `modern-portfolio.html`:
   - Replace personal information
   - Update project links and descriptions
   - Add your own images to the `assets/` folder
3. **Open** `modern-portfolio.html` in your browser
4. **Deploy** to your preferred hosting platform

## 📝 Customization

### Personal Information
Update the following sections in `modern-portfolio.html`:

- **Hero Section**: Name, tagline, and description
- **About Section**: Bio, contact details, and profile image
- **Projects**: Add your own projects with links and descriptions
- **Skills**: Update technology skills and icons
- **Contact**: Update social media links and contact information

### Styling
The website uses TailwindCSS classes for styling. Key customization areas:

- **Colors**: Update the `primary` and `accent` colors in the Tailwind config
- **Fonts**: Change font families in the Google Fonts link and Tailwind config
- **Animations**: Modify GSAP animations in `modern-portfolio.js`
- **Layout**: Adjust spacing, sizing, and grid layouts using Tailwind classes

### Adding Projects
To add new projects, copy the project card structure:

```html
<div class="project-card glass rounded-xl overflow-hidden">
    <div class="project-image relative overflow-hidden">
        <img src="your-image-url" alt="Project Name" class="w-full h-48 object-cover">
        <div class="project-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="flex space-x-4">
                <a href="live-demo-url" target="_blank" class="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                    <i data-lucide="external-link" class="w-5 h-5"></i>
                </a>
                <a href="github-repo-url" target="_blank" class="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                    <i data-lucide="github" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="p-6">
        <h3 class="font-semibold text-xl mb-2">Project Name</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Project description</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium border border-primary-200 dark:border-primary-800">Technology</span>
        </div>
    </div>
</div>
```

## 🎨 Design Features

### Glassmorphism
The portfolio uses glassmorphism effects for modern visual appeal:
```css
.glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Gradient Text
Eye-catching gradient text effects:
```css
.gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Hover Animations
Smooth transform effects on interactive elements:
```css
.project-card:hover {
    transform: translateY(-8px);
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Collapsible mobile navigation
- Responsive grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🌙 Dark Mode

The dark mode implementation includes:
- System preference detection
- Manual toggle option
- Persistent user preference
- Smooth transitions between themes

## ⚡ Performance

Optimization features:
- Lazy loading for images
- Minimal dependencies
- Compressed animations
- Efficient CSS with TailwindCSS
- Semantic HTML for better SEO

## 🚀 Deployment

### Netlify (Recommended)
1. Drag and drop the project folder to Netlify
2. Your site will be live instantly with a custom URL

### GitHub Pages
1. Push code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Vercel
1. Import project from GitHub
2. Deploy with zero configuration

### Traditional Hosting
Upload all files to your web hosting provider's public folder.

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ for the developer community**
