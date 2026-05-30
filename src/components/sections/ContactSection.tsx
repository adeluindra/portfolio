import { Mail } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { SOCIALS, CONTACT_EMAIL } from "@/data/socials";

/**
 * Contact section: two-column layout with contact info + form.
 */
export function ContactSection() {
  return (
    <Section id="contact" className="bg-muted/30">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project, opportunity, or just want to say hi? My inbox is always open."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2">
        {/* Left: contact info */}
        <ScrollReveal className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m currently open to internships, freelance work, and
            collaboration. Reach out through the form or any of the channels
            below and I&apos;ll get back to you as soon as I can.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail aria-hidden="true" className="size-5" />
            </span>
            {CONTACT_EMAIL}
          </a>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: form */}
        <ScrollReveal>
          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
}
