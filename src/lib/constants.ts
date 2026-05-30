/**
 * Site-wide configuration and constants.
 * Centralizes identity, navigation, and URLs so they are defined once
 * and reused across SEO metadata, navbar, and footer.
 *
 * NOTE: Replace placeholder values (name, email, social URLs) with real data.
 */

export const SITE_CONFIG = {
  name: "Your Name",
  role: "Software Engineer",
  title: "Your Name | Software Engineer",
  description:
    "Software Engineer and Informatics Engineering Student specializing in modern web applications using Next.js, TypeScript, and React.",
  url: "https://yourdomain.com",
  locale: "en_US",
  keywords: [
    "Software Engineer Portfolio",
    "Frontend Developer Portfolio",
    "Next.js Developer",
    "Web Developer Portfolio",
    "React Developer",
    "TypeScript",
  ],
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** Main navigation links (single-page anchored sections). */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

/** Path to the downloadable CV/resume in the public folder. */
export const CV_PATH = "/cv.pdf";
