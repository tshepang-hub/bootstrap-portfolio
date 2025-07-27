// Skills Data
const skills = [
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        color: '#E34F26'
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        color: '#1572B6'
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: '#F7DF1E'
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: '#61DAFB'
    },
    {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        color: '#000000'
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: '#339933'
    },
    {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        color: '#000000'
    },
    {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: '#47A248'
    },
    {
        name: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        color: '#FFCA28'
    },
    {
        name: 'TailwindCSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        color: '#38B2AC'
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: '#F05032'
    },
    {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        color: '#181717'
    },
    {
        name: 'Vite',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
        color: '#646CFF'
    },
    {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: '#3178C6'
    },
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: '#3776AB'
    },
    {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        color: '#336791'
    },
    {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        color: '#2496ED'
    },
    {
        name: 'Vue.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        color: '#4FC08D'
    }
];

// Function to render skills
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skills.map((skill, index) => `
        <div class="skill-card glass-light rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300" 
             data-aos="zoom-in" 
             data-aos-delay="${index * 50}"
             data-aos-duration="600">
            <div class="mb-4 flex justify-center">
                <img src="${skill.icon}" 
                     alt="${skill.name}" 
                     class="w-12 h-12 filter hover:drop-shadow-lg transition-all duration-300"
                     style="filter: drop-shadow(0 0 8px ${skill.color}20);">
            </div>
            <h3 class="font-semibold text-neutral-800 dark:text-neutral-200">
                ${skill.name}
            </h3>
        </div>
    `).join('');
}
