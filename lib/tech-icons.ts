// Maps technology names to devicon CDN images used for skill cards
// and project cover art.

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export interface TechIcon {
  /** URL of the SVG logo */
  icon: string;
  /** Brand color used for glows / accents */
  color: string;
  /** True when the logo is dark and needs a light chip behind it */
  needsLightBackground?: boolean;
}

export const techIcons: Record<string, TechIcon> = {
  HTML5: {
    icon: `${DEVICON_BASE}/html5/html5-original.svg`,
    color: "#E34F26",
  },
  CSS3: {
    icon: `${DEVICON_BASE}/css3/css3-original.svg`,
    color: "#1572B6",
  },
  JavaScript: {
    icon: `${DEVICON_BASE}/javascript/javascript-original.svg`,
    color: "#F7DF1E",
  },
  TypeScript: {
    icon: `${DEVICON_BASE}/typescript/typescript-original.svg`,
    color: "#3178C6",
  },
  React: {
    icon: `${DEVICON_BASE}/react/react-original.svg`,
    color: "#61DAFB",
  },
  "Next.js": {
    icon: `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
    color: "#FFFFFF",
    needsLightBackground: true,
  },
  "Node.js": {
    icon: `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
    color: "#339933",
  },
  "Express.js": {
    icon: `${DEVICON_BASE}/express/express-original.svg`,
    color: "#FFFFFF",
    needsLightBackground: true,
  },
  MongoDB: {
    icon: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
    color: "#47A248",
  },
  Firebase: {
    icon: `${DEVICON_BASE}/firebase/firebase-plain.svg`,
    color: "#FFCA28",
  },
  TailwindCSS: {
    icon: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
    color: "#38B2AC",
  },
  Bootstrap: {
    icon: `${DEVICON_BASE}/bootstrap/bootstrap-original.svg`,
    color: "#7952B3",
  },
  Git: {
    icon: `${DEVICON_BASE}/git/git-original.svg`,
    color: "#F05032",
  },
  GitHub: {
    icon: `${DEVICON_BASE}/github/github-original.svg`,
    color: "#FFFFFF",
    needsLightBackground: true,
  },
  Vite: {
    icon: `${DEVICON_BASE}/vite/vite-original.svg`,
    color: "#646CFF",
  },
  Python: {
    icon: `${DEVICON_BASE}/python/python-original.svg`,
    color: "#3776AB",
  },
  PostgreSQL: {
    icon: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
    color: "#336791",
  },
  Docker: {
    icon: `${DEVICON_BASE}/docker/docker-original.svg`,
    color: "#2496ED",
  },
  "Vue.js": {
    icon: `${DEVICON_BASE}/vuejs/vuejs-original.svg`,
    color: "#4FC08D",
  },
};

export function getTechIcon(name: string): TechIcon | undefined {
  return techIcons[name];
}
