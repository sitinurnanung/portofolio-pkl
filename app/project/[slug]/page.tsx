// app/project/[slug]/page.tsx
import { projects } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* CARD PEMBUNGKUS */}
      <div className="card p-6 sm:p-8">

        {/* Tombol Kembali */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#588157] hover:text-[#3A5A40] mb-6"
        >
          ← Kembali ke Portfolio
        </Link>

        {/* Judul & Badge */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <h1 className="text-3xl sm:text-4xl font-bold text-text">
            {project.title}
          </h1>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold border"
            style={{
              color: project.badgeColor,
              borderColor: project.badgeColor,
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* FOTO UTAMA PROJECT (diperkecil) */}
        <div className="flex justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[150px] w-auto h-auto rounded-xl border-2 border-border"
          />
        </div>

        {/* Deskripsi Panjang */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-text mb-2">Tentang Project</h2>
          <p className="text-text-2 leading-relaxed">{project.longDesc}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-text mb-2">Tech Stack</h2>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tombol GitHub */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#588157] text-white font-bold hover:bg-[#3A5A40] transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Lihat di GitHub
        </a>

      </div>
    </section>
  );
}