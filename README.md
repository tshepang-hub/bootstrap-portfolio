# Tshepang Baloyi | Portfolio

Personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **TailwindCSS**.

## Features

- Dark/light theme with system preference detection
- Typing hero animation and scroll-reveal sections
- Project covers generated from the logos of each project's tech stack
- Every project includes a "Problem it solves" write-up
- Fully responsive with a mobile slide-in menu

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deploying

The site deploys to [Vercel](https://vercel.com) with zero configuration: just import the GitHub repository and Vercel auto-detects Next.js.

## Project Structure

```
app/            # Next.js App Router pages, layout, global styles
components/     # React components (Navbar, Hero, Projects, etc.)
lib/            # Data: projects, skills, tech icon mappings
public/         # Static assets
```

## Editing Content

- **Projects**: edit `lib/projects.ts` (title, description, problem statement, technologies, links)
- **Skills**: edit `lib/skills.ts`
- **Tech logos/colors**: edit `lib/tech-icons.ts`
