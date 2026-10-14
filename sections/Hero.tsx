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
          <div className="w-full lg:w-3/5 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-text animate-fade-in-up delay-100">
              Siti Nur <span className="text-primary">Hayati</span>
            </h1>

            <p className="text-sm md:text-base font-bold tracking-widest mt-3 flex items-center gap-1 justify-start min-h-[1.5rem] text-primary-light animate-fade-in-up delay-200">
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-4 align-middle animate-blink bg-primary" />
            </p>

            <p className="text-base md:text-lg leading-relaxed mt-6 max-w-xl text-text-2 text-justify hyphens-auto animate-fade-in-up delay-300">
              I am a student at SMK PLUS PELITA NUSANTARA Bogor, majoring in Software Engineering.
              I am interested in creating modern, responsive, and elegant websites.
              Right now, I am still learning and want to further develop my skills.
            </p>

            <div className="w-full flex flex-wrap gap-2 justify-start mt-6 animate-fade-in-up delay-400">
              {["LARAVEL", "WEB DEVELOPER", "SOFTWARE ENGINEERING"].map((badge, idx) => (
                <span
                  key={badge}
                  className="badge hover:scale-105 transition-transform duration-200 cursor-default"
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="w-full flex flex-wrap gap-3 justify-start mt-8 animate-fade-in-up delay-500">
              <a
                href="#work"
                className="btn-primary group"
                style={{
                  backgroundColor: "#3A5A40",
                  boxShadow: "0 4px 16px rgba(58, 90, 64, 0.35)",
                }}
              >
                MY WORK{" "}
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>

          <div className="relative group flex-shrink-0 animate-scale-in delay-200">
            <div className="absolute -inset-4 rounded-full blur-2xl transition-all duration-500 group-hover:blur-3xl bg-primary-glow animate-glow-pulse" />
            <div
              className="absolute inset-0 rounded-full border-2 opacity-30 animate-spin-slow pointer-events-none"
              style={{ borderColor: "#3A5A40" }}
            />
            <div className="absolute inset-0 rounded-full bg-primary-glow" />
            <div className="relative animate-float">
              <Image
                src="/photo.jpg"
                alt="Profile Photo"
                width={280}
                height={280}
                priority
                className="rounded-full relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl shadow-xl"
                style={{ border: "4px solid #3A5A40" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}