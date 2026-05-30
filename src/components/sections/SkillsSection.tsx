import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SKILL_CATEGORIES } from "@/data/skills";

/**
 * Skills section: categorized skill cards with hover glow/scale.
 * Categories and skills come from src/data/skills.ts.
 */
export function SkillsSection() {
  return (
    <Section id="skills" className="bg-muted/30">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="A snapshot of the tools and technologies I use to build and ship products."
      />

      <ScrollReveal
        stagger={0.1}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {SKILL_CATEGORIES.map(({ id, title, icon: Icon, skills }) => (
          <Card
            key={id}
            className="group transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <CardContent className="p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="muted">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollReveal>
    </Section>
  );
}
