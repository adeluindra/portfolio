import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { EXPERIENCES } from "@/data/experience";

/**
 * Experience section: a vertical timeline of roles and achievements.
 * Data comes from src/data/experience.ts.
 */
export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Internships, freelance work, organizations, and campus projects that shaped my skills."
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <ol className="relative border-l border-border pl-8">
          {EXPERIENCES.map((exp) => (
            <ScrollReveal as="li" key={exp.id} className="mb-10 last:mb-0">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full border-2 border-background bg-primary"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <Badge variant="default">{exp.type}</Badge>
              </div>

              <p className="mt-1 text-sm font-medium text-primary">
                {exp.organization}
              </p>
              <p className="text-xs text-muted-foreground">
                {exp.startDate} — {exp.endDate}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
