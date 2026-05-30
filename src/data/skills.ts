import { Code2, Server, Database, Wrench } from "lucide-react";
import type { SkillCategory } from "@/types";

/**
 * Skills grouped by category (docs/content-strategy.md).
 * Edit the skill lists to match your actual stack.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST API" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [{ name: "PostgreSQL" }, { name: "MySQL" }],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Postman" },
    ],
  },
];
