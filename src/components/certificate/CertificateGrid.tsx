import { CertificateCard } from "./CertificateCard";
import type { Certificate } from "@/types";

/**
 * Responsive grid of certificate cards with an empty state.
 */
export function CertificateGrid({
  certificates,
}: {
  certificates: Certificate[];
}) {
  if (certificates.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
        No certificates to show yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </div>
  );
}
