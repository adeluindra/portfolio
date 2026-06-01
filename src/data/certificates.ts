import type { Certificate } from "@/types";

/**
 * Certificates and credentials (ordered most recent first).
 *
 * To show a real certificate image, drop the file into /public/certificates/
 * and point `image` at it (e.g. "/certificates/bnsp.png"). Where a public
 * verification page exists, `credentialUrl` links straight to it.
 */
export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-bnsp-web-developer",
    title: "Sertifikat Kompetensi — Junior Web Developer (Pengembang Web Pratama)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Agustus 2025",
    image: "/certificates/bnsp-jwd.png",
  },

  {
    id: "cert-dbs-coding-camp",
    title: "Front-End and Back-End Developer Cohort",
    issuer: "Coding Camp powered by DBS Foundation",
    date: "2025",
    image: "/certificates/dbs-coding-camp.png",
  },

  {
    id: "cert-dicoding-web-intermediate",
    title: "Belajar Pengembangan Web Intermediate",
    issuer: "Dicoding Indonesia",
    date: "Mei 2025",
    image: "/certificates/web-intermediate.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/07Z63N902ZQR",
  },

  {
    id: "cert-dicoding-back-end-javascript",
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Mei 2025",
    image: "/certificates/backend-javascript.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/0LZ0RV39NP65",
  },

  {
    id: "cert-dicoding-fundamental-frontend",
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    image: "/certificates/frontend-fundamental.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/NVP7523DVXR0",
  },

  {
    id: "cert-dicoding-frontend-pemula",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    image: "/certificates/frontend-pemula.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/07Z63QNRWZQR",
  },

  {
    id: "cert-dicoding-javascript",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    image: "/certificates/javascript-dasar.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/RVZKWMRVEZD5",
  },

  {
    id: "cert-dicoding-web-basic",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025",
    image: "/certificates/web-dasar.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/1OP82J3RLPQK",
  },

  {
    id: "cert-dicoding-software-developer",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025",
    image: "/certificates/software-developer.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/L4PQEQ6V7PO1",
  },

  {
    id: "cert-dicoding-git-github",
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025",
    image: "/certificates/git-github.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/MRZMN8N70PYQ",
  },

  {
    id: "cert-dicoding-programming-logic",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025",
    image: "/certificates/programming-logic.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/53XEDYNEKPRN",
  },

  // Additional Certifications
  {
    id: "cert-english-business",
    title: "English for Business Communication",
    issuer: "The British Institute (TBI)",
    date: "Juni 2025",
    image: "/certificates/english-business.png",
  },

  {
    id: "cert-financial-literacy",
    title: "Financial Literacy 101",
    issuer: "Dicoding Indonesia",
    date: "April 2025",
    image: "/certificates/financial-literacy.png",
    credentialUrl:
      "https://www.dicoding.com/certificates/ERZRE6D6QXYV",
  },

  {
    id: "cert-amd-classroom",
    title: "AMD Classroom Talkshow Participant",
    issuer: "AMD Indonesia & Universitas Muhammadiyah Cirebon",
    date: "Februari 2025",
    image: "/certificates/amd-classroom.png",
  },
];