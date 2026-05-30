import type { Experience } from "@/types";

/**
 * Professional experience timeline.
 * Sourced from CV (Moh Syafiq Ade Luwindra).
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "exp-grage-media",
    role: "Web Developer",
    organization: "PT Grage Media Technology",
    type: "Internship",
    startDate: "Okt 2025",
    endDate: "Des 2025",
    description:
      "Membangun dan mengoptimalkan website untuk klien instansi dan perumahan, dengan fokus pada penyajian informasi dan performa lintas perangkat.",
    achievements: [
      "Mengembangkan Website SIBADA (Sistem Informasi Bencana Daerah) untuk BPBD Kabupaten Cirebon sebagai platform penyajian informasi kebencanaan.",
      "Membangun Website KBK Management untuk manajemen warga pada Perumahan Kota Baru Keandra.",
      "Mengoptimalkan tampilan dan performa website agar dapat diakses dengan baik di berbagai perangkat.",
    ],
  },
  {
    id: "exp-dbs-coding-camp",
    role: "Front-End and Back-End Developer Cohort",
    organization: "Coding Camp powered by DBS Foundation",
    type: "Bootcamp",
    startDate: "Feb 2025",
    endDate: "Jul 2025",
    description:
      "Terpilih sebagai salah satu dari 3.000 peserta dari lebih dari 63.000 pendaftar di seluruh Indonesia untuk program pengembangan front-end dan back-end.",
    achievements: [
      "Mengembangkan ParentCare, platform konsultasi parenting berbasis digital yang menyediakan dukungan bagi orang tua.",
      "Membangun fitur dukungan untuk pengelolaan tumbuh kembang anak dan kesehatan mental keluarga.",
    ],
  },
];
