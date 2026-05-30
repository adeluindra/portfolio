import type { ComponentType, SVGProps } from "react";

/**
 * Generic icon component type.
 * Compatible with both lucide-react icons and custom brand SVG components
 * (e.g. GitHub/LinkedIn, which were removed from lucide v1).
 */
export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/** A single skill within a category. */
export interface Skill {
  name: string;
  icon?: IconType;
}

/** A group of related skills (Frontend, Backend, Database, Tools). */
export interface SkillCategory {
  id: string;
  title: string;
  icon: IconType;
  skills: Skill[];
}

/** Type of professional experience for badge styling/filtering. */
export type ExperienceType =
  | "Internship"
  | "Freelance"
  | "Organization"
  | "Campus Project"
  | "Bootcamp";

/** A single entry in the experience timeline. */
export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: ExperienceType;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

/** A single screenshot/image in a project gallery. */
export interface ProjectImage {
  src: string;
  alt: string;
}

/** A portfolio project. Used in the grid and the detail page. */
export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  /** Marks projects shown in the "Featured Projects" section. */
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  /** Detailed case-study content (optional for lighter projects). */
  problem?: string;
  solution?: string;
  features?: string[];
  gallery?: ProjectImage[];
  year: string;
}

/** A certificate or credential. */
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

/** A social media / contact link. */
export interface Social {
  label: string;
  href: string;
  icon: IconType;
}
