import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FEATURED_PROJECTS } from "@/data/projects";

/**
 * Featured projects section with a bento-style grid and a link to all projects.
 */
export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeading
        eyebrow="Projects"
        title="Featured projects"
        description="A selection of projects that showcase how I approach problems and build solutions."
      />

      <ScrollReveal className="mt-14">
        <ProjectGrid projects={FEATURED_PROJECTS} bento />
      </ScrollReveal>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">
            View all projects
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
