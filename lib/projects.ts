export interface Project {
  id: number;
  title: string;
  description: string;
  /** The real-world problem this project solves */
  problem: string;
  /** Technologies shown as the cover art (max 3 rendered) */
  coverTech: string[];
  technologies: string[];
  liveUrl?: string;
  /** Omit for private / client projects with no public repository */
  githubUrl?: string;
  /** Extra repo link, e.g. a separate backend repository */
  secondaryGithubUrl?: { label: string; url: string };
  featured: boolean;
  priority?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "HealthSpace Job Portal",
    description:
      "A comprehensive job portal platform for healthcare professionals, featuring job listings, user authentication, application management, and a fully responsive design.",
    problem:
      "Healthcare professionals lose hours hunting through generic job boards where relevant roles are buried among unrelated listings. I built HealthSpace to fix that: a production platform with secure user authentication, role-based dashboards, and a full application-tracking workflow. I owned the product end to end, from data modeling in MongoDB to a type-safe Next.js frontend deployed on Vercel, and it now serves real job seekers in the healthcare sector.",
    coverTech: ["Next.js", "TypeScript", "MongoDB"],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    liveUrl: "https://healthspacejob-portral-frontend.vercel.app",
    githubUrl: "https://github.com/tshepang-hub/Healthspacejob-portral-frontend",
    featured: true,
    priority: true,
  },
  {
    id: 10,
    title: "Busamed App",
    description:
      "A healthcare application built for Busamed, the South African private hospital group, streamlining how patients and hospital staff interact with hospital services.",
    problem:
      "Hospital groups run on slow, paper-heavy processes: finding the right facility, booking appointments, and accessing patient information all create friction for patients and staff. Working in a real healthcare environment with strict requirements around patient data, I helped digitize these workflows into one mobile-friendly platform for the Busamed private hospital group, cutting administrative overhead and proving I can deliver software in a regulated, high-stakes industry.",
    coverTech: ["React", "Next.js", "TypeScript"],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
    featured: true,
  },
  {
    id: 11,
    title: "Doc On Tap",
    description:
      "An on-demand healthcare app that connects patients with doctors, allowing them to find available practitioners, book consultations, and manage appointments from their phone.",
    problem:
      "Seeing a doctor usually means phoning around during office hours with zero visibility of who is actually available. Doc On Tap turns that into a minutes-long digital flow: patients find an available practitioner and book instantly, while doctors manage schedules and bookings in real time. Building it meant solving the hard parts of marketplace apps, including two-sided user flows, availability logic, and booking state management across the full stack.",
    coverTech: ["React", "Node.js", "MongoDB"],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    featured: true,
  },
  {
    id: 2,
    title: "Airbnb Clone (Capstone)",
    description:
      "A full-stack property booking platform with a React frontend and a Node.js/Express REST API, covering listings, search, reservations, and host management.",
    problem:
      "Accommodation platforms have to coordinate listings, availability, pricing, and reservations across two kinds of users at once. I architected and shipped this end to end: a modular Express REST API with JWT authentication and protected routes, structured MongoDB models, drag-and-drop image uploads for hosts, and a complete reservation flow, with both frontend and backend independently deployed. I went beyond the capstone requirements to make it production-ready, including an architecture diagram and ERD.",
    coverTech: ["React", "Node.js", "MongoDB"],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    githubUrl: "https://github.com/tshepang-hub/capestone-airbnb-frontend",
    secondaryGithubUrl: {
      label: "Backend Code",
      url: "https://github.com/tshepang-hub/capstone--airbnb-backend",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Blog System",
    description:
      "A lightweight blog platform built with vanilla JavaScript where users can create, edit, delete, and view posts dynamically in the browser.",
    problem:
      "Most publishing tools bury a simple need (write, edit, publish) under a heavy CMS. I built a complete CRUD publishing system in pure vanilla JavaScript with zero frameworks and zero setup, which is the strongest way to demonstrate that my fundamentals don't depend on libraries: DOM manipulation, state handling, and data persistence, all written from scratch.",
    coverTech: ["JavaScript", "HTML5", "CSS3"],
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    githubUrl: "https://github.com/tshepang-hub/blogsystem",
    featured: true,
  },
  {
    id: 4,
    title: "Google Keep Clone (React)",
    description:
      "A note-taking app rebuilt in React with component state management, featuring note creation, editing, deletion, and persistence.",
    problem:
      "Ideas get lost when capturing them takes too long, so notes need an instant, distraction-free interface. I first built this in vanilla JavaScript, then deliberately re-architected it in React to compare the approaches hands-on: component-driven UI, clean state management, and persistence. That kind of intentional rebuild shows how I evaluate tools critically instead of just following trends.",
    coverTech: ["React", "JavaScript", "CSS3"],
    technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
    liveUrl: "https://tshepang-keep-clone.netlify.app",
    githubUrl: "https://github.com/tshepang-hub/google-keep-react",
    featured: true,
  },
  {
    id: 5,
    title: "Netflix Landing Page Clone",
    description:
      "A responsive recreation of Netflix's homepage with hero sections, interactive elements, and a mobile-first approach.",
    problem:
      "A streaming site has seconds to convert a visitor into a subscriber, and any layout glitch kills that trust. I rebuilt Netflix's high-converting homepage pixel by pixel, matching a world-class design system across phone, tablet, and desktop with a mobile-first approach. Recreating professional-grade UI from scratch is how I trained the attention to detail recruiters see across all my work.",
    coverTech: ["HTML5", "CSS3", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://tshepang-netflix-clone.netlify.app",
    githubUrl: "https://github.com/tshepang-hub/netflix-landing-page",
    featured: true,
  },
  {
    id: 6,
    title: "Tesla Landing Page",
    description:
      "A sleek landing page inspired by Tesla's design language, showcasing clean aesthetics and smooth scrolling interactions.",
    problem:
      "Premium brands live or die by how premium their pages feel, and clutter destroys that instantly. I recreated Tesla's minimalist, scroll-driven experience with full-screen imagery and smooth GSAP-powered animations, showing I can execute a demanding design language where restraint and polish matter more than feature count.",
    coverTech: ["HTML5", "CSS3", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveUrl: "https://tshepang-tesla-landing.netlify.app",
    githubUrl: "https://github.com/tshepang-hub/Tesla-landingpage",
    featured: true,
  },
  {
    id: 7,
    title: "YouTube Clone Interface",
    description:
      "A functional YouTube interface clone featuring video listings, responsive grid layouts, and interactive navigation components.",
    problem:
      "Presenting hundreds of videos without overwhelming the user is a genuinely hard layout problem, which is exactly why I chose it. I engineered YouTube's interface with advanced CSS Grid and Flexbox: a collapsible sidebar, filter chips, and a video grid that reflows flawlessly from a widescreen monitor down to a phone, demonstrating deep, framework-independent command of modern CSS.",
    coverTech: ["HTML5", "CSS3", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Grid"],
    liveUrl: "https://tshepang-youtube-clone.netlify.app",
    githubUrl: "https://github.com/tshepang-hub/youtube-clone",
    featured: false,
  },
  {
    id: 8,
    title: "Twitter Interface Clone",
    description:
      "A modern Twitter-like interface with responsive design, featuring tweet composition, a timeline, and social interaction elements.",
    problem:
      "Social feeds juggle three information streams at once (navigation, timeline, and trends) and must stay usable on every screen size. I solved this with Bootstrap's grid system, delivering the familiar three-column layout that collapses gracefully to mobile. It demonstrates I can work productively inside an established component framework and ship consistent, responsive UI fast.",
    coverTech: ["Bootstrap", "HTML5", "CSS3"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://tshepang-twitter-clone.netlify.app",
    githubUrl: "https://github.com/tshepang-hub/twitter-clone",
    featured: false,
  },
  {
    id: 9,
    title: "Tic Tac Toe Game",
    description:
      "An interactive tic-tac-toe game with a clean UI, win detection, and restart functionality built with vanilla JavaScript.",
    problem:
      "Game logic is where state management skills get exposed: every edge case is immediately visible to the player. I implemented turn tracking, win and draw detection, and board resets in pure vanilla JavaScript with zero libraries. Clean algorithmic thinking and exhaustive edge-case handling in a small codebase is the same discipline I bring to large ones.",
    coverTech: ["JavaScript", "HTML5", "CSS3"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Game Logic"],
    liveUrl: "https://tshepang-tictactoe.netlify.app",
    githubUrl: "https://github.com/tshepang-hub/tic-tac-toe-clone",
    featured: false,
  },
];

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (a.priority && !b.priority) return -1;
    if (!a.priority && b.priority) return 1;
    return Number(b.featured) - Number(a.featured);
  });
}
