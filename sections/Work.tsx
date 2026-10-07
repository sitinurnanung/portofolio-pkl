// sections/Work.tsx
"use client";

import { useState } from "react";
import { projects, certificates } from "@/lib/data";

export function Work() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="section-title text-text">MY WORK</h2>
      </div>

      {/* ================= TAB BUTTONS ================= */}
      <div className="flex gap-2 mb-8 flex-wrap">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="card p-6">
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="font-bold text-lg text-text">
                    {project.title}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold border"
                    style={{
                      color: project.badgeColor,
                      borderColor: project.badgeColor,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-2">
                  {project.desc}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= CERTIFICATES ================= */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} className="card p-4 flex flex-col gap-3">
                <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-border bg-surface-2">
                  {cert.image.endsWith(".pdf") ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
                      <svg
                        className="w-16 h-16 text-red-500 mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-gray-600">
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
                <h3 className="font-bold text-text leading-snug">
                  {cert.title}
                </h3>
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-border text-text-2 text-sm font-bold transition-all hover:bg-primary hover:text-white hover:border-primary"
                >
                  <svg
                    className="w-4 h-4"
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