# Tshepang Baloyi's Portfolio

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

## Deploying on Vercel

This project is set up for [Vercel](https://vercel.com), which is built for Next.js and needs no extra config.

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `tshepang-hub/bootstrap-portfolio` from GitHub
3. Leave all build settings as default (Vercel auto-detects Next.js)
4. Click **Deploy**

Every push to your main branch will redeploy automatically.

If your custom domain was on Netlify, update DNS in your domain provider to point to Vercel instead (Vercel shows the exact records under Project Settings → Domains).

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
