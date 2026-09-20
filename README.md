# Nathan Albe — Portfolio

HTML-first personal portfolio built for Vercel. Typed content, real App Router routes, and a soccer-broadcast visual identity — ready for a later 3D stadium layer.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (UI motion only; respects `prefers-reduced-motion`)
- Zod content schemas
- Lucide icons
- Deploy: **Vercel**

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/about` | About + Off the Field |
| `/experience` | Career timeline (includes Airtable SWE) |
| `/projects` | Project list |
| `/projects/[slug]` | Project detail |
| `/skills` | Grouped skills |
| `/leadership` | ColorStack and leadership |
| `/education` | Education |
| `/blog` | Press Box stub (MDX next) |
| `/contact` | Contact |
| `/resume` | Resume placeholder |

## Content

All portfolio copy lives under `src/content/` and is validated with Zod. Edit those files to update the site without hunting through components.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import this GitHub repository in the Vercel dashboard.
2. Framework preset: Next.js (defaults are fine).
3. Deploy. No static-export / `out` directory is required.

## Roadmap (deferred)

- MDX Press Box blog
- React Three Fiber stadium + avatar navigation
- GSAP cinematic intro
- CMS / admin
