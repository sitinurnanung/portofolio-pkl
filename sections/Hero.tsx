// sections/Hero.tsx
"use client";

import Image from "next/image";

interface HeroProps {
  displayText: string;
}

export function Hero({ displayText }: HeroProps) {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-text">
              Siti Nur <span className="text-primary">Hayati</span>
            </h1>
            <p className="text-sm md:text-base font-bold tracking-widest mt-3 flex items-center gap-1 justify-center lg:justify-start min-h-[1.5rem] text-primary-light">
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-4 align-middle animate-blink bg-primary" />
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0 text-text-2">
              I am a student at SMK PLUS PELITA NUSANTARA Bogor, majoring in Software Engineering. I am interested in 
              creating modern, responsive, and elegant websites. Right now, I am still learning and want to further develop my skills.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
              {["LARAVEL", "WEB DEVELOPER", "SOFTWARE ENGINEERING"].map((badge) => (
                <span key={badge} className="badge">{badge}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
              <a href="#work" className="btn-primary">
                MY WORK <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-4 rounded-full blur-2xl transition-all duration-500 group-hover:blur-3xl bg-primary-glow" />
            <div className="absolute inset-0 rounded-full border-2 opacity-30 animate-spin-slow border-primary" />
            <div className="absolute inset-0 rounded-full bg-primary-glow" />
            <Image
              src="/cat.jpg"
              alt="Profile Photo"
              width={280}
              height={280}
              priority
              className="rounded-full border-4 relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}