import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { EXPERIENCES } from "@/data/experience";

/**
 * Experience section: a vertical timeline of roles and achievements.
 * Each entry is a card sitting on a timeline rail. Data comes from
 * src/data/experience.ts.
 */
export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Internships, freelance work, organizations, and campus projects that shaped my skills."
      />

      <div className="mx-auto mt-14 max-w-4xl">
        <ol className="relative space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border sm:before:left-2.5">
          {EXPERIENCES.map((exp) => (
            <ScrollReveal as="li" key={exp.id} className="relative pl-10 sm:pl-14">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-6 size-5 rounded-full border-4 border-background bg-primary ring-1 ring-border sm:left-0.5"
              />

              <Card className="transition-colors duration-300 hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <Badge variant="default">{exp.type}</Badge>
                      </div>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {exp.organization}
                      </p>
                    </div>

                    <p className="shrink-0 text-xs font-medium text-muted-foreground sm:text-right">
                      {exp.startDate} — {exp.endDate}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
