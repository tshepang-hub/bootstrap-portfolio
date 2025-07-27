// Projects Data
const projects = [
    {
        id: 1,
        title: 'Netflix Landing Page Clone',
        description: 'A responsive recreation of Netflix\'s homepage with modern design principles, featuring hero sections, interactive elements, and mobile-first approach.',
        image: 'assets/img123.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        liveUrl: 'https://tshepang-netflix-clone.netlify.app',
        githubUrl: 'https://github.com/tshepang-hub/netflix-landing-page',
        featured: true
    },
    {
        id: 2,
        title: 'Tesla Landing Page',
        description: 'A sleek and modern landing page inspired by Tesla\'s design language, showcasing clean aesthetics and smooth scrolling interactions.',
        image: 'assets/banner.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
        liveUrl: 'https://tshepang-tesla-landing.netlify.app',
        githubUrl: 'https://github.com/tshepang-hub/Tesla-landingpage',
        featured: true
    },
    {
        id: 3,
        title: 'YouTube Clone Interface',
        description: 'A functional YouTube interface clone featuring video listings, responsive grid layouts, and interactive navigation components.',
        image: 'assets/actual.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Grid'],
        liveUrl: 'https://tshepang-youtube-clone.netlify.app',
        githubUrl: 'https://github.com/tshepang-hub/youtube-clone',
        featured: true
    },
    {
        id: 4,
        title: 'Google Keep Clone',
        description: 'A note-taking application inspired by Google Keep, featuring add, edit, delete functionality with local storage persistence.',
        image: 'assets/me12.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
        liveUrl: 'https://tshepang-keep-clone.netlify.app',
        githubUrl: 'https://github.com/tshepang-hub/google-keep-html-css-js',
        featured: false
    },
    {
        id: 5,
        title: 'Twitter Interface Clone',
        description: 'A modern Twitter-like interface with responsive design, featuring tweet composition, timeline, and social interaction elements.',
        image: 'assets/banner.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        liveUrl: 'https://tshepang-twitter-clone.netlify.app',
        githubUrl: 'https://github.com/tshepang-hub/twitter-clone',
        featured: false
    },
    {
        id: 6,
        title: 'Tic Tac Toe Game',
        description: 'An interactive tic-tac-toe game with clean UI, win detection, and restart functionality built with vanilla JavaScript.',
        image: 'assets/actual.jpg',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Game Logic'],
        liveUrl: 'https://tshepang-tictactoe.netlify.app',
        githubUrl: 'https://github.com/tshepang-hub/tic-tac-toe-clone',
        featured: false
    }
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    // Show featured projects first, then others
    const sortedProjects = projects.sort((a, b) => b.featured - a.featured);

    projectsGrid.innerHTML = sortedProjects.map((project, index) => `
        <div class="project-card glass-light rounded-2xl overflow-hidden shadow-lg" 
             data-aos="fade-up" 
             data-aos-delay="${index * 100}"
             data-aos-duration="600">
            
            <!-- Project Image -->
            <div class="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900">
                <img src="${project.image}" 
                     alt="${project.title}"
                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                
                <!-- Fallback for missing images -->
                <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-800 dark:to-accent-800" style="display: none;">
                    <i data-lucide="code" class="w-16 h-16 text-primary-600 dark:text-primary-400"></i>
                </div>
                
                <!-- Featured badge -->
                ${project.featured ? `
                    <div class="absolute top-4 left-4">
                        <span class="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                        </span>
                    </div>
                ` : ''}
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
                <h3 class="text-xl font-heading font-bold mb-3 text-neutral-800 dark:text-neutral-200">
                    ${project.title}
                </h3>
                
                <p class="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    ${project.description}
                </p>
                
                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies.map(tech => `
                        <span class="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                
                <!-- Project Links -->
                <div class="flex gap-3">
                    <a href="${project.liveUrl}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                        View Site
                    </a>
                    
                    <a href="${project.githubUrl}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="flex-1 bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                        <i data-lucide="github" class="w-4 h-4"></i>
                        View Code
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    // Re-initialize Lucide icons for the new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
