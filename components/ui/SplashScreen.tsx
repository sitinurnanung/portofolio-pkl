"use client";

import { useEffect, useState } from "react";

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulasi loading dari 0% ke 100% dalam 2.5 detik
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Setelah 100%, tunggu 500ms lalu hilangkan splash
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 2.5 detik loading + 0.5 detik fade out

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--bg)]">
      
      {/* NAMA BESAR DI TENGAH (Dengan warna yang harmonis dengan tema hijau) */}
      <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest text-center leading-tight">
        <span className="text-[#344E41]">Siti</span>{" "}
        <span className="text-[#588157]">Nur</span>{" "}
        <span className="text-[#8B9A6E]">Hayati</span>
      </h1>

      {/* LOADING BAR (Garis progress) */}
      <div className="mt-10 w-64 h-3 rounded-full bg-[var(--bg-secondary)] overflow-hidden border border-[var(--border)]">
        <div
          className="h-full bg-[var(--primary)] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* TEKS LOADING % */}
      <p className="mt-4 text-sm font-bold tracking-widest uppercase text-[var(--text-3)]">
        Loading {progress}%
      </p>
    </div>
  );
}