import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Certificate } from "@/types";

/**
 * A certificate card with preview image, title, issuer, and credential link.
 * Hover: image zoom + lift.
 */
export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Badge variant="accent" className="w-fit">
          {certificate.issuer}
        </Badge>
        <h3 className="mt-3 font-semibold leading-snug">{certificate.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{certificate.date}</p>

        {certificate.credentialUrl ? (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:gap-2"
          >
            View credential
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
