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

### Vercel (recommended for Next.js)

Import the GitHub repository at [vercel.com](https://vercel.com). Vercel auto-detects Next.js and deploys with zero configuration.

### Netlify

This repo includes a `netlify.toml` with the official `@netlify/plugin-nextjs` plugin. After pushing, Netlify should:

1. Run `npm run build`
2. Serve the app through the Next.js runtime (not as static files)

If you still see a 404 after pushing, open your Netlify site settings and confirm:

- **Build command:** `npm run build`
- **Publish directory:** leave blank (the plugin sets this automatically)
- **Node version:** 18 or higher

Do not set the publish directory to `.` or `public`. That was for the old static HTML site.

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
