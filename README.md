# DevCanvas

A zero-cost browser-based portfolio builder for developers.

## Overview

DevCanvas lets developers edit portfolio content in a focused browser UI and see a premium live portfolio preview update instantly. Everything runs locally in the browser with no backend, database, authentication, paid APIs, AI APIs, Firebase, or Supabase.

## Features

- Live portfolio editor and responsive preview
- Identity, links, skills, projects, experience, and theme controls
- Twelve premium design presets with different layout moods and visual systems
- Dark and light preview modes
- Automatic local browser saving with `localStorage`
- Copy portfolio data as JSON
- Export a clean standalone HTML portfolio
- Browser print support for saving as PDF

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- localStorage

## Getting Started

```bash
npm install
npm run dev
```

The app runs locally and stores data in the current browser only.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Deployment

DevCanvas works on free static hosting because it has no server requirements.

- Vercel free tier: import the repo, keep the default Vite settings, and deploy.
- GitHub Pages: build with `npm run build` and publish the `dist` folder.

## Why This Project Exists

Many developers need a quick, polished way to show their work without setting up accounts, databases, API keys, or paid services. DevCanvas keeps the workflow simple: edit, preview, export, and share.

## LinkedIn Demo Idea

Record a short screen capture: update the name and role, add a skill, switch themes, add a project, export HTML, then open the generated portfolio page.
