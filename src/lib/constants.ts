/**
 * Site-wide configuration and constants.
 * Centralizes identity, navigation, and URLs so they are defined once
 * and reused across SEO metadata, navbar, and footer.
 */

export const SITE_CONFIG = {
  name: "Moh Syafiq Ade Luwindra",
  role: "Web Developer",
  title: "Moh Syafiq Ade Luwindra | Web Developer",
  description:
    "Web Developer and Informatics Engineering student at Universitas Muhammadiyah Cirebon, building modern web applications with Next.js, TypeScript, Laravel, and Supabase.",
  // TODO: replace with your real domain once deployed (e.g. your Vercel URL).
  url: "https://mohsyafiqadeluwindra.vercel.app",
  locale: "id_ID",
  keywords: [
    "Moh Syafiq Ade Luwindra",
    "Web Developer Portfolio",
    "Frontend Developer Portfolio",
    "Next.js Developer",
    "Laravel Developer",
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

/** Path to the profile photo shown in the hero section (public folder). */
export const PROFILE_IMAGE = "/profile.jpg";
