import { GraduationCap, MapPin, Rocket } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Informatics Engineering student at Universitas Muhammadiyah Cirebon (GPA 3.44).",
  },
  {
    icon: Rocket,
    title: "Focus",
    description:
      "Frontend and fullstack web development with Next.js, Laravel, and Supabase.",
  },
  {
    icon: MapPin,
    title: "Goal",
    description:
      "Building technology that delivers a positive impact for the community.",
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
              Informatics Engineering student at Universitas Muhammadiyah
              Cirebon. I&apos;m deeply interested in technology, especially
              programming and web development.
            </p>
            <p>
              I work across the stack with Next.js, Laravel, and Supabase,
              having built platforms like ParentCare, SIBADA for BPBD Kabupaten
              Cirebon, and a resident management system for Perumahan Kota Baru
              Keandra.
            </p>
            <p>
              I believe technology can be a means to create a positive impact
              for society. That&apos;s why I keep developing myself by following
              the latest industry trends while sharpening my problem-solving,
              teamwork, and communication skills.
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
