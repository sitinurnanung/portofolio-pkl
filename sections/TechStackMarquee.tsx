import { allTech } from "@/lib/data";

export function TechStackMarquee() {
  return (
    <section className="py-16 overflow-hidden flex flex-col gap-8">
      
      {/* JUDUL DI ATAS (DIAM / TIDAK BERGERAK) */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.3em] text-[var(--primary)]">
          Tech Stack
        </h2>
      </div>

      {/* BARIS 1: Jalan ke Kiri */}
      <div className="animate-marquee flex gap-6 whitespace-nowrap">
        {[...allTech, ...allTech].map((tech, index) => (
          <div
            key={`top-${index}`}
            className="flex items-center gap-3 px-6 py-3 rounded-full border font-bold tracking-wider uppercase text-sm"
            style={{
              color: tech.color,
              borderColor: tech.color,
              backgroundColor: `${tech.color}14`,
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
            {tech.name}
          </div>
        ))}
      </div>

      {/* BARIS 2: Jalan ke Kanan (Lawan Arah) */}
      <div className="animate-marquee-reverse flex gap-6 whitespace-nowrap">
        {[...allTech, ...allTech].map((tech, index) => (
          <div
            key={`bottom-${index}`}
            className="flex items-center gap-3 px-6 py-3 rounded-full border font-bold tracking-wider uppercase text-sm"
            style={{
              color: tech.color,
              borderColor: tech.color,
              backgroundColor: `${tech.color}14`,
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
            {tech.name}
          </div>
        ))}
      </div>

    </section>
  );
}