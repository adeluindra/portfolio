"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Certificate } from "@/types";

/** Shown when a certificate image is missing or fails to load. */
const FALLBACK_IMAGE = "/certificates/placeholder.svg";

/**
 * A certificate card with preview image, title, issuer, and credential link.
 * Hover: image zoom + lift. If the source image is missing (e.g. not yet
 * uploaded to /public/certificates), it gracefully falls back to a placeholder
 * instead of showing a broken image.
 */
export function CertificateCard({
  certificate,
  className,
}: {
  certificate: Certificate;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(certificate.image);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={imgSrc}
          alt={`${certificate.title} certificate`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
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
