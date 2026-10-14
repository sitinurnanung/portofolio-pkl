import { allTech } from "@/lib/data";

function TechIcon({ icon, name }: { icon: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/${icon}`}
      alt={name}
      width={22}
      height={22}
      style={{ width: 22, height: 22, objectFit: "contain" }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export function TechStackMarquee() {
  return (
    <section className="py-16 flex flex-col gap-8 overflow-hidden">
      {/* JUDUL — DI TENGAH */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2
          className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.3em]"
          style={{ color: '#3A5A40' }}
        >
          Tech Stack
        </h2>
      </div>

      {/* MARQUEE — DIBATASI LEBARNYA SAMA SEPERTI SECTION LAIN */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-6 overflow-hidden reveal-scale delay-100">
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
              <TechIcon icon={tech.icon} name={tech.name} />
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
              <TechIcon icon={tech.icon} name={tech.name} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}