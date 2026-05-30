import type { Certificate } from "@/types";

/**
 * Certificates and credentials.
 *
 * Only credentials confirmed from the CV are listed below. Add more as needed:
 * drop the certificate image into /public/certificates/ and set `credentialUrl`
 * to the public verification link if you have one.
 */
export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-dbs-coding-camp",
    title: "Front-End and Back-End Developer Cohort",
    issuer: "Coding Camp powered by DBS Foundation",
    date: "2025",
    image: "/certificates/placeholder.svg",
    // TODO: add the public credential/verification URL if available.
  },
];
