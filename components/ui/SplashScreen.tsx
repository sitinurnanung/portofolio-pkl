"use client";

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const fullName = "SITI NUR HAYATI";
  const [visibleChars, setVisibleChars] = useState(0);

  // Animasi progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 60 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Animasi munculnya huruf satu per satu
  useEffect(() => {
    if (visibleChars >= fullName.length) return;
    const timer = setTimeout(() => {
      setVisibleChars((prev) => prev + 1);
    }, 90); // kecepatan muncul huruf (ms)
    return () => clearTimeout(timer);
  }, [visibleChars, fullName.length]);

  // Fade out ketika selesai
  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => setIsExiting(true), 500);
      const finishTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 1100);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--bg)] transition-all duration-700 ease-out overflow-hidden ${
        isExiting ? "opacity-0 scale-105 blur-sm pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* ===== Ambient background glow ===== */}
      <div className="absolute w-72 h-72 rounded-full bg-[var(--primary)]/15 blur-3xl animate-glow-pulse pointer-events-none" />

      {/* ===== Partikel dekoratif mengambang ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#A3B18A]/50 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-[#588157]/60 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#8B9A6E]/50 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-[#344E41]/40 animate-float-reverse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-[#A3B18A]/60 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ===== NAMA DENGAN ANIMASI HURUF PER HURUF ===== */}
      <h1 className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest leading-tight text-center px-4">
        {fullName.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-500 ease-out ${
              index < visibleChars
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-4 blur-sm"
            }`}
            style={{
              background:
                "linear-gradient(135deg, #344E41 0%, #588157 50%, #8B9A6E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              minWidth: char === " " ? "0.3em" : "auto",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Garis dekoratif bawah nama */}
      <div
        className={`mt-4 h-[1px] bg-gradient-to-r from-transparent via-[#588157] to-transparent transition-all duration-1000 ease-out ${
          visibleChars >= fullName.length ? "w-48 sm:w-64 opacity-100" : "w-0 opacity-0"
        }`}
      />

      {/* ===== LOADING BAR ===== */}
      <div className="relative mt-8 sm:mt-10 w-56 sm:w-72 h-1.5 rounded-full bg-[var(--bg-secondary)] overflow-hidden animate-fade-in-up delay-300">
        <div
          className="h-full bg-gradient-to-r from-[#588157] via-[#8B9A6E] to-[#344E41] rounded-full transition-all duration-150 ease-out relative"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 12px rgba(88, 129, 87, 0.5)",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-3 bg-white/70 rounded-full blur-[2px]" />
        </div>
      </div>

      {/* ===== TEKS LOADING ===== */}
      <p className="mt-4 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[var(--text-2)] tabular-nums animate-fade-in-up delay-400">
        Loading {progress}%
      </p>
    </div>
  );
}