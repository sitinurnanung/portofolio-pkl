// sections/Work.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, certificates } from "@/lib/data";

export function Work() {
  const [activeTab, setActiveTab] = useState("projects");
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);
  const [shakeType, setShakeType] = useState<"project" | "cert" | null>(null);

  const handleShake = (index: number, type: "project" | "cert") => {
    setShakingIndex(index);
    setShakeType(type);
    // Reset setelah animasi selesai (400ms)
    setTimeout(() => {
      setShakingIndex(null);
      setShakeType(null);
    }, 400);
  };

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20"
    >
      <div className="flex items-center gap-4 mb-8 reveal">
        <h2 className="section-title text-text">MY WORK</h2>
      </div>

      {/* ================= TAB BUTTONS ================= */}
      <div className="flex gap-2 mb-8 flex-wrap reveal delay-100">
        {[
          { id: "projects", label: "PROJECTS" },
          { id: "certificates", label: "CERTIFICATES" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {/* ================= PROJECTS ================= */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/project/${project.slug}`}
                onClick={() => handleShake(i, "project")}
                className={`card p-3 sm:p-6 animate-fade-in-up delay-${((i % 3) + 1) * 100} hover-lift h-full cursor-pointer ${
                  shakingIndex === i && shakeType === "project" ? "card-shake" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="font-bold text-xs sm:text-lg text-text">
                    {project.title}
                  </h3>
                  <span
                    className="px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[10px] font-bold border"
                    style={{
                      color: project.badgeColor,
                      borderColor: project.badgeColor,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
                <p className="text-[10px] sm:text-sm leading-relaxed text-text-2">
                  {project.desc}
                </p>
                <div className="flex gap-1 sm:gap-2 mt-3 sm:mt-4 flex-wrap">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge text-[8px] sm:text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Indikator "Lihat Detail" */}
                <div className="mt-3 sm:mt-4 flex items-center gap-1 text-[9px] sm:text-xs font-semibold text-[#588157]">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  Lihat Detail
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ================= CERTIFICATES ================= */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch">
            {certificates.map((cert, i) => (
              <div
                key={i}
                onClick={() => handleShake(i, "cert")}
                className={`card p-3 sm:p-4 flex flex-col gap-3 animate-fade-in-up delay-${((i % 3) + 1) * 100} hover-lift h-full cursor-pointer ${
                  shakingIndex === i && shakeType === "cert" ? "card-shake" : ""
                }`}
              >
                <div className="relative w-full h-32 sm:h-48 rounded-lg overflow-hidden border-2 border-border bg-surface-2 shrink-0">
                  {cert.image.endsWith(".pdf") ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
                      <svg
                        className="w-10 h-10 sm:w-16 sm:h-16 text-red-500 mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm font-semibold text-gray-600">
                        PDF Document
                      </span>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="font-bold text-text leading-snug text-xs sm:text-base">
                  {cert.title}
                </h3>
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-auto w-full flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 rounded-lg bg-[#588157] text-white text-[10px] sm:text-sm font-bold transition-all hover:bg-[#3A5A40] hover:scale-[1.02] shadow-md"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}