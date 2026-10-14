"use client";

"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { TechStackMarquee } from "@/sections/TechStackMarquee";
import { Work } from "@/sections/Work";
import { Contact } from "@/sections/Contact";
import { ROLES } from "@/lib/data";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  // Scroll detection & scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max((scrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver untuk Scroll Reveal animations
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
      );
      revealElements.forEach((el) => {
        revealObserver.observe(el);
      });
    };

    observeElements();
    const timer = setTimeout(observeElements, 400);

    return () => {
      revealObserver.disconnect();
      clearTimeout(timer);
    };
  }, [splashVisible]);

  // Section highlight observer
  useEffect(() => {
    const sectionMap: Record<string, string> = {
      home: "Home",
      about: "Profile",
      work: "Work",
      contact: "Contact",
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.toLowerCase();
            if (sectionMap[id]) setActiveSection(sectionMap[id]);
          }
        });
      },
      { threshold: 0.35 }
    );
    const ids = ["home", "about", "work", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Force light mode always
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 55 : 95;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const lower = id.toLowerCase();
    const element =
      document.getElementById(lower) ||
      document.getElementById(id) ||
      (lower === "profile" ? document.getElementById("about") : null);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip transition-all duration-500 relative">
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#588157] via-[#8B9A6E] to-[#344E41] z-[100000] transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Splash Screen */}
      {splashVisible && <SplashScreen onComplete={() => setSplashVisible(false)} />}

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-animation">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
          <div className="bg-blob blob-3"></div>
          <div className="bg-blob blob-4"></div>
          <div className="bg-blob blob-5"></div>
        </div>
      </div>

      {/* Navbar with smooth slide-down entrance */}
      <div className="navbar animate-slide-down z-[9999] pointer-events-auto">
        <div className="container mx-auto flex items-center justify-between px-6 py-5 relative z-[9999]">
          <div className="w-10"></div>
          <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
          <div className="w-10"></div>
        </div>
      </div>

      {/* Sections */}
      <Hero displayText={displayText} />
      <TechStackMarquee />
      <About />
      <Work />
      <Contact />
      <Footer />

      {/* Floating Back-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
        className={`fixed bottom-6 right-6 z-[9990] p-3 rounded-full bg-[#3A5A40] text-white shadow-xl hover:bg-[#588157] hover:scale-110 active:scale-95 transition-all duration-300 group border border-[#588157]/40 cursor-pointer ${
          scrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <svg
          className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}