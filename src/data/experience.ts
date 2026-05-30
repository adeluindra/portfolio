import type { Experience } from "@/types";

/**
 * Professional experience timeline (docs/content-strategy.md).
 * Focus on impact and measurable outcomes. Replace with your real history.
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "exp-internship",
    role: "Frontend Developer Intern",
    organization: "Tech Company",
    type: "Internship",
    startDate: "Jan 2025",
    endDate: "Present",
    description:
      "Built and maintained responsive user interfaces for the company's web platform using Next.js and TypeScript.",
    achievements: [
      "Improved page load performance by 30% through code-splitting and image optimization.",
      "Implemented a reusable component library adopted across 3 internal projects.",
    ],
  },
  {
    id: "exp-freelance",
    role: "Freelance Web Developer",
    organization: "Self-employed",
    type: "Freelance",
    startDate: "2024",
    endDate: "Present",
    description:
      "Designed and developed custom websites and web apps for small businesses and individual clients.",
    achievements: [
      "Delivered 5+ production websites with a focus on performance and SEO.",
      "Maintained a 100% on-time delivery record across all client projects.",
    ],
  },
  {
    id: "exp-organization",
    role: "Web Division Lead",
    organization: "Campus Student Organization",
    type: "Organization",
    startDate: "2023",
    endDate: "2024",
    description:
      "Led a small team building and maintaining the organization's web presence and event platforms.",
    achievements: [
      "Coordinated a 4-person team to ship an event registration site serving 500+ users.",
      "Introduced Git-based workflow that reduced merge conflicts and improved collaboration.",
    ],
  },
  {
    id: "exp-campus",
    role: "Fullstack Developer",
    organization: "Campus Capstone Project",
    type: "Campus Project",
    startDate: "2023",
    endDate: "2023",
    description:
      "Developed a fullstack application as part of an academic capstone, covering frontend, backend, and database.",
    achievements: [
      "Designed the database schema and REST API powering the application.",
      "Presented the project and received top marks from the review panel.",
    ],
  },
];
