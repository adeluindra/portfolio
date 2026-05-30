import { GraduationCap, MapPin, Rocket } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Informatics Engineering student focused on software development.",
  },
  {
    icon: Rocket,
    title: "Focus",
    description: "Modern frontend and fullstack web development with the React ecosystem.",
  },
  {
    icon: MapPin,
    title: "Goal",
    description: "Growing into a well-rounded software engineer who ships real products.",
  },
] as const;

/**
 * About section: short biography, education, and career focus.
 * Server Component; reveal animations are handled by the client wrapper.
 */
export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A bit about me"
        description="Continuous learner combining academic knowledge with real-world development experience."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <ScrollReveal className="lg:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m {SITE_CONFIG.name}, a {SITE_CONFIG.role.toLowerCase()} and
              Informatics Engineering student passionate about building modern,
              user-focused web applications. I enjoy turning complex problems
              into clean, intuitive interfaces.
            </p>
            <p>
              My work centers on the React and Next.js ecosystem, with a strong
              emphasis on performance, accessibility, and maintainable
              architecture. I care about writing code that other developers can
              read and build on.
            </p>
            <p>
              Outside of coursework, I take on freelance projects and contribute
              to campus initiatives, applying what I learn to ship things people
              actually use.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-2" stagger={0.12}>
          {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="mb-4 last:mb-0">
              <CardContent className="flex items-start gap-4 p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </ScrollReveal>
      </div>
    </Section>
  );
}
