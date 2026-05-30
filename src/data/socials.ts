import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type { Social } from "@/types";

/**
 * Social / contact links.
 * Replace the placeholder URLs and email with your real handles.
 */
export const SOCIALS: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yourusername",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:you@example.com",
    icon: Mail,
  },
];

/** Direct email address used by the contact section. */
export const CONTACT_EMAIL = "you@example.com";
