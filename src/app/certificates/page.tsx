import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { CertificateGrid } from "@/components/certificate/CertificateGrid";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CERTIFICATES } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "All certifications and training completed by Moh Syafiq Ade Luwindra, including BNSP, Dicoding, and more.",
};

/**
 * All-certificates listing page (/certificates).
 * Shows every credential in a full responsive grid.
 */
export default function CertificatesPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <Link
          href="/#certificates"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>

        <SectionHeading
          eyebrow="Certificates"
          title="All certificates"
          description="Every certification and course I've completed — from professional competency to bootcamps and online courses."
        />

        <ScrollReveal className="mt-14">
          <CertificateGrid certificates={CERTIFICATES} />
        </ScrollReveal>
      </Container>
    </div>
  );
}
