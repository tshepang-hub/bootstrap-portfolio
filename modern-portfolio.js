// Modern Portfolio JavaScript

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeAnimations();
    initializeTypedText();
    initializeContactForm();
    initializeLucideIcons();
    initializeGitHubProjects();
});

// GitHub Projects Configuration
const GITHUB_CONFIG = {
    username: 'tshepang-hub',
    cacheKey: 'github_repos_cache',
    cacheExpiry: 30 * 60 * 1000, // 30 minutes
    maxRepos: 12,
    excludeRepos: ['tshepang-hub', 'tshepang-hub.github.io'] // repos to exclude
};

// Technology icon mapping
const TECH_ICONS = {
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    sass: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
};

// Initialize GitHub Projects
async function initializeGitHubProjects() {
    console.log('🚀 Initializing GitHub projects...');
    
    // Show fallback projects immediately for instant loading
    showFallbackProjects();
    
    // Try GitHub in background with very short timeout to avoid blocking
    try {
        const repos = await Promise.race([
            fetchGitHubRepos(),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('GitHub timeout - using static projects')), 3000) // 3 second timeout
            )
        ]);
        
        if (repos && repos.length > 0) {
            console.log(`✅ GitHub loaded: ${repos.length} repos, switching to GitHub data`);
            displayProjects(repos);
            initializeProjectFilters();
            initializeRefreshButton();
            
            // Switch from fallback to GitHub projects
            const fallbackContainer = document.getElementById('fallback-projects');
            const dynamicContainer = document.getElementById('projects-container');
            const stats = document.getElementById('project-stats');
            
            if (fallbackContainer) fallbackContainer.classList.add('hidden');
            if (dynamicContainer) dynamicContainer.classList.remove('hidden');
            if (stats) stats.classList.remove('hidden');
        }
    } catch (error) {
        console.log('ℹ️ Using static projects (GitHub not available):', error.message);
        // Static projects already showing - this is perfect fallback behavior
    }
}

// Show a message that GitHub projects couldn't load
function showGitHubLoadingMessage() {
    const loading = document.getElementById('projects-loading');
    const error = document.getElementById('projects-error');
    
    if (loading) loading.classList.add('hidden');
    if (error) {
        error.classList.remove('hidden');
        error.innerHTML = `
            <div class="text-amber-600 dark:text-amber-400 mb-4">
                <i data-lucide="info" class="w-12 h-12 mx-auto mb-3"></i>
                <p class="text-lg font-medium">GitHub Projects Currently Unavailable</p>
                <p class="text-sm mb-4">Showing static projects below. GitHub integration may be limited due to CORS or rate limiting.</p>
                <button id="retry-projects" class="inline-flex items-center space-x-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-900/30 transition-colors">
                    <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                    <span>Try GitHub Integration</span>
                </button>
            </div>
        `;
        
        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Initialize refresh button
function initializeRefreshButton() {
    const refreshBtn = document.getElementById('refresh-projects');
    const retryBtn = document.getElementById('retry-projects');
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => refreshProjects());
    }
    
    if (retryBtn) {
        retryBtn.addEventListener('click', () => refreshProjects());
    }
}

// Refresh projects
async function refreshProjects() {
    const refreshBtn = document.getElementById('refresh-projects');
    const retryBtn = document.getElementById('retry-projects');
    const loading = document.getElementById('projects-loading');
    const error = document.getElementById('projects-error');
    const container = document.getElementById('projects-container');
    
    // Clear cache
    localStorage.removeItem(GITHUB_CONFIG.cacheKey);
    
    // Show loading state
    if (loading) loading.classList.remove('hidden');
    if (error) error.classList.add('hidden');
    if (container) container.classList.add('hidden');
    
    // Disable buttons
    if (refreshBtn) {
        refreshBtn.disabled = true;
        refreshBtn.querySelector('i').classList.add('animate-spin');
    }
    if (retryBtn) {
        retryBtn.disabled = true;
        retryBtn.querySelector('i').classList.add('animate-spin');
    }
    
    try {
        const repos = await fetchGitHubRepos();
        if (repos && repos.length > 0) {
            displayProjects(repos);
            initializeProjectFilters();
        } else {
            showFallbackProjects();
        }
    } catch (error) {
        console.error('Error refreshing GitHub projects:', error);
        showErrorState();
        showFallbackProjects();
    } finally {
        // Re-enable buttons
        if (refreshBtn) {
            refreshBtn.disabled = false;
            refreshBtn.querySelector('i').classList.remove('animate-spin');
        }
        if (retryBtn) {
            retryBtn.disabled = false;
            retryBtn.querySelector('i').classList.remove('animate-spin');
        }
    }
}

// Fetch GitHub repositories
async function fetchGitHubRepos() {
    // Check cache first
    const cachedData = getCachedRepos();
    if (cachedData) {
        console.log('✅ Using cached GitHub data');
        return cachedData;
    }

    try {
        console.log('🔄 Fetching from GitHub API...');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Shorter 5 second timeout
        
        const response = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}/repos?sort=updated&per_page=50`, {
            signal: controller.signal,
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            },
            mode: 'cors' // Explicitly set CORS mode
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            if (response.status === 403) {
                console.warn('⚠️ GitHub API rate limited');
                throw new Error('GitHub API rate limited - using static projects');
            }
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();
        console.log(`✅ Received ${repos.length} repos from GitHub API`);
        
        // Filter and process repos
        const processedRepos = repos
            .filter(repo => !repo.fork && !GITHUB_CONFIG.excludeRepos.includes(repo.name))
            .slice(0, GITHUB_CONFIG.maxRepos)
            .map(repo => ({
                id: repo.id,
                name: repo.name,
                description: repo.description || 'No description available',
                html_url: repo.html_url,
                homepage: repo.homepage,
                language: repo.language,
                topics: repo.topics || [],
                updated_at: repo.updated_at,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                size: repo.size
            }));

        console.log(`Processed ${processedRepos.length} repos for display`);
        
        // Cache the results
        cacheRepos(processedRepos);
        
        return processedRepos;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('GitHub API request timed out');
            throw new Error('Request timed out');
        }
        console.error('Failed to fetch GitHub repos:', error);
        throw error;
    }
}

// Cache management
function getCachedRepos() {
    try {
        const cached = localStorage.getItem(GITHUB_CONFIG.cacheKey);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < GITHUB_CONFIG.cacheExpiry) {
                return data;
            }
        }
    } catch (error) {
        console.error('Error reading cache:', error);
    }
    return null;
}

function cacheRepos(repos) {
    try {
        const cacheData = {
            data: repos,
            timestamp: Date.now()
        };
        localStorage.setItem(GITHUB_CONFIG.cacheKey, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error caching repos:', error);
    }
}

// Display projects
function displayProjects(repos) {
    const container = document.getElementById('projects-container');
    const loading = document.getElementById('projects-loading');
    const stats = document.getElementById('project-stats');
    
    if (!container) return;

    // Hide loading state
    loading.classList.add('hidden');
    container.classList.remove('hidden');
    
    // Show statistics
    if (stats) {
        stats.classList.remove('hidden');
        displayProjectStats(repos);
    }

    // Clear existing content
    container.innerHTML = '';

    repos.forEach(repo => {
        const projectCard = createProjectCard(repo);
        container.appendChild(projectCard);
    });

    // Initialize animations for new cards
    if (typeof gsap !== 'undefined') {
        gsap.from('.github-project-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#projects-container',
                start: 'top 70%'
            }
        });
    }
}

// Display project statistics
function displayProjectStats(repos) {
    const totalRepos = repos.length;
    const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks, 0);
    const languages = new Set(repos.map(repo => repo.language).filter(Boolean));
    
    // Animate numbers
    animateNumber('total-repos', totalRepos);
    animateNumber('total-stars', totalStars);
    animateNumber('total-forks', totalForks);
    animateNumber('languages-count', languages.size);
}

// Animate number counting
function animateNumber(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let currentValue = 0;
    const increment = targetValue / 50; // Animate over 50 steps
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue);
    }, 30);
}

// Create project card
function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'github-project-card project-card glass rounded-xl overflow-hidden';
    card.dataset.languages = getProjectLanguages(repo).join(',').toLowerCase();

    const thumbnail = getThumbnailUrl(repo);
    const techStack = getProjectTechnologies(repo);
    const liveUrl = repo.homepage || repo.html_url;

    card.innerHTML = `
        <div class="project-image relative overflow-hidden h-48">
            ${thumbnail ? 
                `<img src="${thumbnail}" alt="${repo.name}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML = getDefaultThumbnail('${repo.name}')">` :
                getDefaultThumbnail(repo.name)
            }
            <div class="project-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="flex space-x-4">
                    ${repo.homepage ? 
                        `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer"
                           class="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                           title="View Live Demo">
                            <i data-lucide="external-link" class="w-5 h-5"></i>
                        </a>` : ''
                    }
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"
                       class="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                       title="View on GitHub">
                        <i data-lucide="github" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="p-6">
            <div class="flex items-start justify-between mb-2">
                <h3 class="font-semibold text-xl text-gray-900 dark:text-white">${formatRepoName(repo.name)}</h3>
                <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div class="flex items-center space-x-1">
                        <i data-lucide="star" class="w-4 h-4"></i>
                        <span>${repo.stars}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <i data-lucide="git-fork" class="w-4 h-4"></i>
                        <span>${repo.forks}</span>
                    </div>
                </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                ${repo.description}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${techStack.map(tech => `
                    <span class="inline-flex items-center space-x-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium border border-primary-200 dark:border-primary-800">
                        ${TECH_ICONS[tech.toLowerCase()] ? 
                            `<img src="${TECH_ICONS[tech.toLowerCase()]}" alt="${tech}" class="tech-icon">` :
                            `<i data-lucide="code" class="w-3 h-3"></i>`
                        }
                        <span>${tech}</span>
                    </span>
                `).join('')}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
                Updated ${formatDate(repo.updated_at)}
            </div>
        </div>
    `;

    return card;
}

// Get project languages and technologies
function getProjectLanguages(repo) {
    const languages = [];
    
    // Add primary language
    if (repo.language) {
        languages.push(repo.language.toLowerCase());
    }
    
    // Add topics/tags
    if (repo.topics) {
        languages.push(...repo.topics.map(topic => topic.toLowerCase()));
    }
    
    return [...new Set(languages)];
}

function getProjectTechnologies(repo) {
    const technologies = new Set();
    
    // Add primary language
    if (repo.language) {
        technologies.add(repo.language);
    }
    
    // Map common topics to display names
    const topicMapping = {
        'html': 'HTML',
        'css': 'CSS',
        'javascript': 'JavaScript',
        'typescript': 'TypeScript',
        'react': 'React',
        'vue': 'Vue.js',
        'angular': 'Angular',
        'nodejs': 'Node.js',
        'python': 'Python',
        'java': 'Java',
        'csharp': 'C#',
        'php': 'PHP',
        'bootstrap': 'Bootstrap',
        'tailwindcss': 'Tailwind CSS',
        'firebase': 'Firebase',
        'mongodb': 'MongoDB',
        'mysql': 'MySQL',
        'postgresql': 'PostgreSQL',
        'nextjs': 'Next.js',
        'express': 'Express'
    };
    
    // Add topics
    if (repo.topics) {
        repo.topics.forEach(topic => {
            const mapped = topicMapping[topic.toLowerCase()];
            if (mapped) {
                technologies.add(mapped);
            } else if (topic.length > 2) {
                technologies.add(topic);
            }
        });
    }
    
    return Array.from(technologies).slice(0, 4); // Limit to 4 technologies
}

// Get thumbnail URL
function getThumbnailUrl(repo) {
    // Try to construct a thumbnail URL from the repo
    // This assumes you have thumbnail.png files in your repos
    const possibleUrls = [
        `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repo.name}/main/thumbnail.png`,
        `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repo.name}/master/thumbnail.png`,
        `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repo.name}/main/screenshot.png`,
        `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repo.name}/master/screenshot.png`
    ];
    
    // Return the first URL (you could implement actual checking here)
    return null; // For now, we'll use default thumbnails
}

// Get default thumbnail
function getDefaultThumbnail(repoName) {
    const initials = repoName
        .split('-')
        .map(word => word.charAt(0).toUpperCase())
        .join('')
        .slice(0, 2);
    
    return `
        <div class="default-project-icon w-full h-full">
            <span class="text-2xl font-bold">${initials}</span>
        </div>
    `;
}

// Format repository name
function formatRepoName(name) {
    return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
}

// Initialize project filters
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.github-project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            
            // Filter projects
            projectCards.forEach(card => {
                const languages = card.dataset.languages || '';
                
                if (filter === 'all' || languages.includes(filter)) {
                    card.classList.remove('filtered-out');
                } else {
                    card.classList.add('filtered-out');
                }
            });
        });
    });
}

// Show error state
function showErrorState() {
    const loading = document.getElementById('projects-loading');
    const error = document.getElementById('projects-error');
    
    if (loading) loading.classList.add('hidden');
    if (error) error.classList.remove('hidden');
}

// Show fallback projects (your original static projects)
function showFallbackProjects() {
    const fallbackContainer = document.getElementById('fallback-projects');
    const dynamicContainer = document.getElementById('projects-container');
    const loading = document.getElementById('projects-loading');
    const stats = document.getElementById('project-stats');
    
    if (!fallbackContainer) return;
    
    // Hide loading and dynamic container
    if (loading) loading.classList.add('hidden');
    if (dynamicContainer) dynamicContainer.classList.add('hidden');
    if (stats) stats.classList.add('hidden');
    
    // Show fallback projects
    fallbackContainer.classList.remove('hidden');
    
    // Initialize static project filtering
    initializeStaticProjectFilters();
    
    console.log('Showing static fallback projects');
}

// Initialize filtering for static projects
function initializeStaticProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('#fallback-projects .project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('bg-purple-500', 'text-white'));
            filterButtons.forEach(btn => btn.classList.add('bg-gray-200', 'dark:bg-gray-700'));
            
            button.classList.remove('bg-gray-200', 'dark:bg-gray-700');
            button.classList.add('bg-purple-500', 'text-white');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter project cards
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
    
    // Static fallback projects
    const staticProjects = [
        {
            name: 'Netflix Landing Page',
            description: 'A pixel-perfect clone of Netflix\'s landing page built with HTML & CSS',
            html_url: 'https://github.com/tshepang-hub/netflix-landing-page',
            homepage: 'https://copyof-netflilandingpage.netlify.app',
            technologies: ['HTML', 'CSS'],
            image: 'https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/html_netflix.png'
        },
        {
            name: 'Tesla Landing Page',
            description: 'Modern, responsive Tesla website clone with smooth animations',
            html_url: 'https://github.com/tshepang-hub/Tesla-landingpage',
            homepage: 'https://teslalandingpageclone1.netlify.app/',
            technologies: ['HTML', 'CSS'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Z_Qvx1whAjyZRHztNnG-OAVhnokjSb6r4w&s'
        },
        {
            name: 'YouTube Landing Page',
            description: 'YouTube interface clone with responsive design and modern styling',
            html_url: 'https://github.com/tshepang-hub/youtube-clone',
            homepage: 'https://youtubelandingpageclone1.netlify.app/',
            technologies: ['HTML', 'CSS'],
            image: 'https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/html_youtube.png'
        },
        {
            name: 'Google Keep Clone',
            description: 'Functional note-taking app with CRUD operations and local storage',
            html_url: 'https://github.com/tshepang-hub/google-keep-html-css-js',
            homepage: 'https://googlekeepcloneejs.netlify.app/',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/gk_js.png'
        },
        {
            name: 'Twitter Clone',
            description: 'Social media interface clone with modern design patterns',
            html_url: 'https://github.com/tshepang-hub/twitter-clone',
            homepage: 'https://twitter-landingpage1.netlify.app/',
            technologies: ['HTML', 'CSS'],
            image: 'http://res.cloudinary.com/ak-124210/image/upload/v1642434078/yjnzwmihmhghxkwnb6n9.png'
        }
    ];
    
    fallbackContainer.innerHTML = staticProjects.map(project => `
        <div class="project-card glass rounded-xl overflow-hidden">
            <div class="project-image relative overflow-hidden">
                <img src="${project.image}" alt="${project.name}" class="w-full h-48 object-cover">
                <div class="project-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div class="flex space-x-4">
                        ${project.homepage ? 
                            `<a href="${project.homepage}" target="_blank" rel="noopener noreferrer"
                               class="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                                <i data-lucide="external-link" class="w-5 h-5"></i>
                            </a>` : ''
                        }
                        <a href="${project.html_url}" target="_blank" rel="noopener noreferrer"
                           class="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                            <i data-lucide="github" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-semibold text-xl mb-2">${project.name}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `
                        <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium border border-primary-200 dark:border-primary-800">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }


// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    
    // Theme toggle handlers
    [themeToggle, mobileThemeToggle].forEach(toggle => {
        if (toggle) {
            toggle.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });
        }
    });
}

// Navigation Management
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-blur', 'navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-blur', 'navbar-scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
            
            // Toggle menu icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });
    }
    
    // Smooth scroll navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('show');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        if (currentSection) {
            updateActiveNavLink(currentSection);
        }
    });
}

function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('text-primary-600', 'dark:text-primary-400');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('text-primary-600', 'dark:text-primary-400');
        }
    });
}

// GSAP Animations
function initializeAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // Floating shapes animation
    gsap.to('.shape-1', {
        y: -30,
        x: 20,
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
    });
    
    gsap.to('.shape-2', {
        y: 40,
        x: -30,
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: 'none'
    });
    
    gsap.to('.shape-3', {
        y: -20,
        x: 30,
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none'
    });
    
    // Section animations
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
        gsap.from(section.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Skills animation
    gsap.from('.skill-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 70%'
        }
    });
    
    // Projects animation
    gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 70%'
        }
    });
    
    // About image animation
    gsap.from('.about-image img', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%'
        }
    });
    
    // Social icons hover animation
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { scale: 1.1, duration: 0.3 });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { scale: 1, duration: 0.3 });
        });
    });
}

// Typed Text Animation
function initializeTypedText() {
    const typedElement = document.getElementById('typed-text');
    const texts = [
        'Full-Stack Developer',
        'Web Developer',
        'Entrepreneur',
        'Foreign Exchange Analyst',
        'Problem Solver'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing animation
    if (typedElement) {
        typeText();
    }
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i>Sending...';
            submitBtn.disabled = true;
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
            } catch (error) {
                // Show error message
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                lucide.createIcons();
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize Lucide Icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Smooth scroll polyfill for older browsers
function smoothScrollTo(element, duration = 1000) {
    const start = window.pageYOffset;
    const target = element.offsetTop - 80;
    const distance = target - start;
    let timeElapsed = 0;
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    function animateScroll() {
        timeElapsed += 16;
        const progress = timeElapsed / duration;
        const position = ease(timeElapsed, start, distance, duration);
        
        window.scrollTo(0, position);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    animateScroll();
}

// Utility function to handle image loading
function handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.setAttribute('data-loaded', 'false');
        
        if (img.complete) {
            img.setAttribute('data-loaded', 'true');
        } else {
            img.addEventListener('load', () => {
                img.setAttribute('data-loaded', 'true');
            });
        }
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', handleImageLoading);

// Intersection Observer for scroll animations (fallback for browsers without GSAP)
function initializeScrollAnimations() {
    if (typeof gsap === 'undefined') {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('fade-in-section');
            observer.observe(section);
        });
    }
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Error handling for missing dependencies
window.addEventListener('error', (e) => {
    if (e.message.includes('gsap') || e.message.includes('lucide')) {
        console.warn('Some features may not work due to missing dependencies:', e.message);
    }
});

// Expose utility functions globally
window.portfolioUtils = {
    showNotification,
    smoothScrollTo,
    updateActiveNavLink
};
