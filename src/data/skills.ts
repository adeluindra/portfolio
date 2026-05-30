import { Code2, Server, Database, Wrench } from "lucide-react";
import type { SkillCategory } from "@/types";

/**
 * Skills grouped by category (sourced from CV → KEAHLIAN).
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Python" },
      { name: "Express.js" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [{ name: "MySQL" }, { name: "Supabase" }],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [{ name: "Git" }, { name: "GitHub" }, { name: "Postman" }],
  },
];
