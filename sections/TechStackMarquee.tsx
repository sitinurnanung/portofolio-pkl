// sections/TechStackMarquee.tsx
import { allTech } from "@/lib/data";

function TechIcon({ icon, name }: { icon: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/${icon}`}
      alt={name}
      width={16}
      height={16}
      style={{ width: 16, height: 16, objectFit: "contain" }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export function TechStackMarquee() {
  return (
    <section className="py-8 sm:py-10 md:py-12 flex flex-col gap-4 sm:gap-6 overflow-hidden">
      {/* JUDUL — DI TENGAH */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
          style={{ color: '#3A5A40' }}
        >
          Tech Stack
        </h2>
      </div>

      {/* MARQUEE */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-3 sm:gap-4 overflow-hidden reveal-scale delay-100">
        {/* BARIS 1: Jalan ke Kiri */}
        <div className="animate-marquee flex gap-3 sm:gap-4 whitespace-nowrap">
          {[...allTech, ...allTech].map((tech, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border font-bold tracking-wider uppercase text-[10px] sm:text-xs"
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

        {/* BARIS 2: Jalan ke Kanan */}
        <div className="animate-marquee-reverse flex gap-3 sm:gap-4 whitespace-nowrap">
          {[...allTech, ...allTech].map((tech, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border font-bold tracking-wider uppercase text-[10px] sm:text-xs"
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