import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  /** Apply bento layout where the first project spans two columns. */
  bento?: boolean;
}

/**
 * Responsive grid of project cards.
 * Renders an empty state when there are no projects.
 */
export function ProjectGrid({ projects, bento = false }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
        No projects to show yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          featured={bento && index === 0}
        />
      ))}
    </div>
  );
}
