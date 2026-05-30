import type { Certificate } from "@/types";

/**
 * Certificates and credentials (docs/content-strategy.md).
 * Priority: Dicoding, Internships, Bootcamps, Technical Training.
 * Replace with your real certificates. Images live in /public/certificates/.
 */
export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-dicoding-react",
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding",
    date: "2024",
    image: "/certificates/placeholder.svg",
    credentialUrl: "https://www.dicoding.com/certificates/your-credential",
  },
  {
    id: "cert-dicoding-js",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    date: "2024",
    image: "/certificates/placeholder.svg",
    credentialUrl: "https://www.dicoding.com/certificates/your-credential",
  },
  {
    id: "cert-bootcamp-fullstack",
    title: "Fullstack Web Development Bootcamp",
    issuer: "Bootcamp Provider",
    date: "2023",
    image: "/certificates/placeholder.svg",
    credentialUrl: "https://example.com/credential",
  },
  {
    id: "cert-frontend-training",
    title: "Frontend Engineering Training",
    issuer: "Training Institute",
    date: "2023",
    image: "/certificates/placeholder.svg",
  },
];

