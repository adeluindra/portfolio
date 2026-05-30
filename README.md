<div align="center">

# Moh Syafiq Ade Luwindra — Portfolio

A modern, single-page developer portfolio built with Next.js 16, React 19, and TypeScript.
Animated, accessible, dark-mode ready, and SEO-friendly.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=black)](https://gsap.com)

</div>

---

## Overview

This is the personal portfolio of **Moh Syafiq Ade Luwindra**, a Web Developer and Informatics
Engineering student at Universitas Muhammadiyah Cirebon. It showcases skills, experience,
projects, and certificates in a single-page experience with scroll-based animations, a
light/dark theme, and dedicated project detail pages.

## Features

- **Single-page layout** with anchored sections: Hero, About, Skills, Experience, Projects, Certificates, and Contact.
- **Project detail pages** generated per project at `/projects/[slug]`, plus a dedicated `/projects` listing.
- **Light / dark / system theme** powered by `next-themes`, with no flash on load.
- **Scroll-driven animations** built on GSAP + ScrollTrigger, with full `prefers-reduced-motion` support.
- **Accessibility first** — skip-to-content link, semantic landmarks, ARIA-labelled forms, and keyboard-friendly navigation.
- **SEO ready** — Open Graph & Twitter metadata, plus auto-generated `sitemap.xml` and `robots.txt`.
- **Contact form** with client-side validation that opens the user's mail client via `mailto:` (no backend required).
- **Downloadable CV** served from `public/cv.pdf`.
- **Content-driven** — projects, skills, experience, certificates, and socials live in typed data files, so updating content never touches the UI.

## Tech Stack

| Area        | Technology                                   |
| ----------- | -------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router) |
| Language    | [TypeScript 5](https://www.typescriptlang.org) |
| UI Library  | [React 19](https://react.dev)                |
| Styling     | [Tailwind CSS 4](https://tailwindcss.com)    |
| Animation   | [GSAP 3](https://gsap.com) + ScrollTrigger   |
| Theming     | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons       | [lucide-react](https://lucide.dev)           |
| Utilities   | clsx, tailwind-merge, class-variance-authority |
| Tooling     | ESLint (`eslint-config-next`)                |

## Getting Started

### Prerequisites

- **Node.js 18.18+** (Node 20+ recommended)
- A package manager: npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page
auto-updates as you edit files.

### Production build

```bash
npm run build   # create an optimized production build
npm run start   # serve the production build
```

### Available scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project Structure

```
portfolio/
├── public/                 # Static assets (CV, project & certificate images, icons)
└── src/
    ├── app/                # App Router: layout, pages, sitemap, robots
    │   └── projects/       # Projects listing + dynamic [slug] detail pages
    ├── components/
    │   ├── animations/     # GSAP-powered reusable animation wrappers
    │   ├── certificate/    # Certificate card & grid
    │   ├── layout/         # Navbar, Footer, MobileMenu, ThemeSwitcher
    │   ├── project/        # Project card, grid & explorer
    │   ├── providers/      # ThemeProvider
    │   ├── sections/       # Hero, About, Skills, Experience, Projects, Certificates, Contact
    │   └── ui/             # Reusable primitives (Button, Card, Badge, Input, etc.)
    ├── data/               # Typed content: projects, skills, experience, certificates, socials
    └── lib/                # Site config/constants, GSAP setup, utilities
```

## Customization

All content is data-driven, so you can personalize the site without touching component logic:

- **Identity & SEO** — edit `src/lib/constants.ts` (`SITE_CONFIG`: name, role, description, URL, keywords).
- **Projects** — edit `src/data/projects.ts`. Set `featured: true` to surface a project on the homepage; each `slug` generates a `/projects/[slug]` detail page.
- **Skills** — edit `src/data/skills.ts`.
- **Experience** — edit `src/data/experience.ts`.
- **Certificates** — edit `src/data/certificates.ts` and drop images into `public/certificates/`.
- **Socials & contact** — edit `src/data/socials.ts` (`SOCIALS` and `CONTACT_EMAIL`).
- **CV** — replace `public/cv.pdf` with your own resume.
- **Project images** — add screenshots to `public/projects/` and reference them in each project's `thumbnail` / `gallery`.

> After deploying, update `SITE_CONFIG.url` in `src/lib/constants.ts` to your live domain so
> SEO metadata, the sitemap, and `robots.txt` point to the correct address.

## Deployment

The project is optimized for [Vercel](https://vercel.com), the platform built by the creators of Next.js:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Deploy — no extra configuration required.

Any platform that supports Next.js (Netlify, Render, a self-hosted Node server, etc.) works as
well. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Contact

- **Email:** mohsyafiqadeluwindra@gmail.com
- **GitHub:** [@adeluindra](https://github.com/adeluindra)
- **LinkedIn:** [Moh Syafiq Ade Luwindra](https://www.linkedin.com/in/mohsyafiqadeluwindra/)

---

<div align="center">

Built with Next.js, TypeScript &amp; Tailwind CSS.

</div>
