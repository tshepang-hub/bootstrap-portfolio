import { techIcons } from "./tech-icons";

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skillNames = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "TailwindCSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Vite",
  "Python",
  "Docker",
];

export const skills: Skill[] = skillNames.map((name) => ({
  name,
  icon: techIcons[name].icon,
  color: techIcons[name].color,
}));
