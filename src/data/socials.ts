import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type { Social } from "@/types";

/**
 * Social / contact links.
 */
export const SOCIALS: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/adeluindra",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohsyafiqadeluwindra/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:mohsyafiqadeluwindra@gmail.com",
    icon: Mail,
  },
];

/** Direct email address used by the contact section. */
export const CONTACT_EMAIL = "mohsyafiqadeluwindra@gmail.com";
