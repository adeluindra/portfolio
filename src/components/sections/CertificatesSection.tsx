import { Section, SectionHeading } from "@/components/ui/Section";
import { CertificateCarousel } from "@/components/certificate/CertificateCarousel";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CERTIFICATES } from "@/data/certificates";

/**
 * How many certificates to preview in the home carousel before sending people
 * to the full /certificates page. Change this number to show more or fewer.
 */
const CAROUSEL_LIMIT = 8;

/**
 * Certificates section: a horizontally scrollable row of a few featured
 * credentials with a link to the full listing. Keeps the home page compact
 * while every certificate stays reachable on /certificates.
 */
export function CertificatesSection() {
  const previewCertificates = CERTIFICATES.slice(0, CAROUSEL_LIMIT);

  return (
    <Section id="certificates">
      <SectionHeading
        eyebrow="Certificates"
        title="Credentials & training"
        description="Certifications and courses I've completed to deepen my skills."
      />

      <ScrollReveal className="mt-14">
        <CertificateCarousel certificates={previewCertificates} />
      </ScrollReveal>
    </Section>
  );
}
