import type { Project } from "@/types";

/**
 * Portfolio projects (sourced from CV).
 * `featured: true` projects appear in the homepage "Featured Projects" section.
 * Detail pages are generated from `slug` at /projects/[slug].
 *
 * TODO: add `githubUrl` / `demoUrl` for each project once the repo and live
 * links are available, and drop real screenshots into /public/projects/.
 */
export const PROJECTS: Project[] = [
  {
    slug: "parentcare",
    title: "ParentCare",
    summary: "Platform konsultasi parenting berbasis digital.",
    description:
      "Platform konsultasi parenting berbasis digital yang menyediakan dukungan bagi orang tua dalam mengelola tumbuh kembang anak dan kesehatan mental keluarga.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Next.js", "Tailwind CSS", "Express.js", "Supabase"],
    featured: true,
    problem:
      "Orang tua membutuhkan ruang terpercaya untuk berkonsultasi dan saling mendukung seputar pengasuhan anak dan kesehatan mental keluarga.",
    solution:
      "Membangun platform digital dengan kuis pencocokan, forum komunitas, dan artikel edukatif untuk mendukung orang tua.",
    features: [
      "Fitur Parent-Match Quiz",
      "Forum & Komunitas ParentCare",
      "Artikel edukasi parenting",
    ],
    gallery: [
      { src: "/projects/placeholder.svg", alt: "Tampilan beranda ParentCare" },
    ],
    year: "2025",
  },
  {
    slug: "sibada",
    title: "SIBADA",
    summary: "Sistem Informasi Bencana Daerah untuk BPBD Kabupaten Cirebon.",
    description:
      "Website penyajian informasi kebencanaan yang dikembangkan untuk BPBD Kabupaten Cirebon, membantu masyarakat mengakses informasi bencana daerah.",
    thumbnail: "/projects/placeholder.svg",
    // TODO: confirm the exact tech stack used on SIBADA.
    techStack: ["Laravel", "MySQL"],
    featured: true,
    problem:
      "Informasi kebencanaan daerah perlu disajikan secara terpusat dan mudah diakses oleh masyarakat.",
    solution:
      "Membangun platform web yang menyajikan informasi kebencanaan untuk BPBD Kabupaten Cirebon.",
    features: [
      "Penyajian informasi kebencanaan daerah",
      "Tampilan responsif lintas perangkat",
    ],
    year: "2025",
  },
  {
    slug: "kbk-management",
    title: "KBK Management",
    summary: "Sistem manajemen warga Perumahan Kota Baru Keandra.",
    description:
      "Aplikasi manajemen warga untuk Perumahan Kota Baru Keandra, mencakup pengelolaan data warga, rumah, serta struktur RT/RW.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Laravel", "MySQL"],
    featured: true,
    problem:
      "Pengelolaan data warga dan administrasi perumahan masih manual dan tersebar.",
    solution:
      "Membangun sistem terpusat untuk mengelola data warga, rumah, dan struktur RT/RW dalam satu aplikasi.",
    features: [
      "Pengelolaan data warga",
      "Pengelolaan data rumah",
      "Manajemen RT/RW",
    ],
    year: "2025",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    summary: "Cari informasi cuaca untuk kota mana pun di dunia.",
    description:
      "Aplikasi pencarian cuaca yang menampilkan informasi cuaca terkini untuk kota mana pun di seluruh dunia.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    year: "2025",
  },
  {
    slug: "image-gallery-app",
    title: "Image Gallery App",
    summary: "Jelajahi jutaan foto berkualitas tinggi dari seluruh dunia.",
    description:
      "Aplikasi galeri gambar untuk menjelajahi jutaan foto berkualitas tinggi dari fotografer berbakat di seluruh dunia, memanfaatkan Unsplash API.",
    thumbnail: "/projects/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Unsplash API"],
    featured: false,
    year: "2025",
  },
];

/** Projects shown in the homepage "Featured Projects" section. */
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

/** Look up a single project by its slug (used by detail pages). */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
