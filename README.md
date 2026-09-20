# Nathan Albe — Portfolio

HTML-first personal portfolio built for Vercel. Typed content, real App Router routes, and a soccer-broadcast visual identity — ready for a later 3D stadium layer.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (UI motion only; respects `prefers-reduced-motion`)
- Zod content schemas
- Lucide icons
- Three.js via React Three Fiber + Drei (`/lab`)
- Zustand + GSAP (lab camera / state sync)
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
| `/blog` | Press Box index (MDX) |
| `/blog/[slug]` | Article |
| `/feed.xml` | RSS |
| `/contact` | Contact |
| `/resume` | Resume placeholder |
| `/lab` | R3F stadium sandbox (noindex) |

## Content

Portfolio copy lives under `src/content/` (Zod-validated). Blog articles live under `content/blog/*.mdx` with YAML frontmatter.

## 3D Lab

`/lab` is an isolated React Three Fiber sandbox:

- Loads `public/models/penalty-kick.glb` (Mixamo Ch28 + kick)
- Plays the clip with a Three.js `AnimationMixer`
- Stadium lighting, cast/receive shadows, textured materials
- GSAP camera presets + Zustand UI sync

GLB files are **gitignored** (~113MB). Copy locally:

```bash
cp "/Users/nathanalbe/Downloads/Soccer Penalty Kick (1).fbx.glb" public/models/penalty-kick.glb
```

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
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your production domain for sitemap/RSS absolute URLs.
4. Deploy. No static-export / `out` directory is required.

## Roadmap (deferred)

- Custom avatar + stadium GLB assets
- Production interactive portfolio scene
- GSAP cinematic intro
- CMS / admin
