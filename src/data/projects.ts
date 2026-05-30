import type { Project } from "@/types";

/**
 * Portfolio projects (docs/PRD.md → minimum 6).
 * `featured: true` projects appear in the homepage "Featured Projects" section.
 * Detail pages are generated from `slug` at /projects/[slug].
 *
 * Replace placeholder content and images with your real projects.
 * Thumbnails should live in /public/projects/ and use descriptive filenames.
 */
export const PROJECTS: Project[] = [
  {
    slug: "sibada",
    title: "SIBADA",
    summary: "Village administration information system.",
    description:
      "A web-based information system that digitizes village administrative services, letter requests, and population data management.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/yourusername/sibada",
    demoUrl: "https://sibada.example.com",
    problem:
      "Village administrative processes relied on manual paperwork, causing slow service and lost records.",
    solution:
      "Built a centralized platform for digital letter requests, resident data, and an admin dashboard with role-based access.",
    features: [
      "Digital letter request workflow",
      "Resident data management",
      "Role-based admin dashboard",
      "Searchable document archive",
    ],
    gallery: [
      { src: "/projects/placeholder.svg", alt: "SIBADA dashboard overview" },
      { src: "/projects/placeholder.svg", alt: "SIBADA letter request form" },
    ],
    year: "2025",
  },
  {
    slug: "parentcare",
    title: "ParentCare",
    summary: "Child growth & health tracking app.",
    description:
      "A mobile-first web app that helps parents track their child's growth milestones, vaccination schedule, and health records.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["React", "Node.js", "Express", "MySQL"],
    featured: true,
    githubUrl: "https://github.com/yourusername/parentcare",
    demoUrl: "https://parentcare.example.com",
    problem:
      "Parents struggled to keep track of scattered health records and vaccination schedules for their children.",
    solution:
      "Created a single app to log growth data, visualize trends, and send reminders for upcoming vaccinations.",
    features: [
      "Growth milestone tracking with charts",
      "Vaccination schedule & reminders",
      "Health record history",
    ],
    gallery: [
      { src: "/projects/placeholder.svg", alt: "ParentCare growth chart" },
    ],
    year: "2024",
  },
  {
    slug: "devlink",
    title: "DevLink",
    summary: "Link-in-bio platform for developers.",
    description:
      "A customizable link-in-bio platform tailored for developers to showcase projects, socials, and tech stack in one place.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/yourusername/devlink",
    demoUrl: "https://devlink.example.com",
    problem:
      "Developers needed a single shareable page to present their work without building one from scratch.",
    solution:
      "Built a themeable, fast link-in-bio app with developer-focused widgets and analytics.",
    features: [
      "Customizable themes",
      "Developer widgets (GitHub stats, tech stack)",
      "Click analytics",
    ],
    year: "2024",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    summary: "Collaborative kanban task manager.",
    description:
      "A real-time kanban board for small teams to organize tasks, track progress, and collaborate efficiently.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["React", "Node.js", "PostgreSQL"],
    featured: false,
    githubUrl: "https://github.com/yourusername/taskflow",
    year: "2023",
  },
  {
    slug: "weathernow",
    title: "WeatherNow",
    summary: "Minimal weather dashboard.",
    description:
      "A clean weather dashboard with location search, hourly forecasts, and a responsive, accessible interface.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "REST API"],
    featured: false,
    githubUrl: "https://github.com/yourusername/weathernow",
    demoUrl: "https://weathernow.example.com",
    year: "2023",
  },
  {
    slug: "shopkart",
    title: "ShopKart",
    summary: "E-commerce storefront demo.",
    description:
      "A demo e-commerce storefront with product catalog, cart, and checkout flow built to explore commerce patterns.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    featured: false,
    githubUrl: "https://github.com/yourusername/shopkart",
    year: "2023",
  },
];

/** Projects shown in the homepage "Featured Projects" section. */
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

/** Look up a single project by its slug (used by detail pages). */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

