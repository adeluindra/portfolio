import { Section, SectionHeading } from "@/components/ui/Section";
import { CertificateGrid } from "@/components/certificate/CertificateGrid";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CERTIFICATES } from "@/data/certificates";

/**
 * Certificates section: grid of credentials and training certificates.
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
        <CertificateGrid certificates={CERTIFICATES} />
      </ScrollReveal>
    </Section>
  );
}
