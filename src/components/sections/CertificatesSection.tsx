import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CertificateCarousel } from "@/components/certificate/CertificateCarousel";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CERTIFICATES } from "@/data/certificates";

/**
 * Certificates section: a horizontally scrollable row of credentials with a
 * link to the full listing. Keeps the home page compact while every
 * certificate stays reachable on /certificates.
 */
export function CertificatesSection() {
  return (
    <Section id="certificates">
      <SectionHeading
        eyebrow="Certificates"
        title="Credentials & training"
        description="Certifications and courses I've completed to deepen my skills."
      />

      <ScrollReveal className="mt-14">
        <CertificateCarousel certificates={CERTIFICATES} />
      </ScrollReveal>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/certificates">
            View all certificates
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
