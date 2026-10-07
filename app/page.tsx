"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { TechStackMarquee } from "@/sections/TechStackMarquee";
import { Work } from "@/sections/Work";
import { Contact } from "@/sections/Contact";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { ROLES } from "@/lib/data";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Timer untuk menghilangkan splash setelah 3 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
    <main className="min-h-screen overflow-x-hidden transition-all duration-500 relative">
      {/* Splash Screen */}
      {splashVisible && <SplashScreen />}

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

      {/* Navbar */}
      <div className="navbar z-[9999] pointer-events-auto">
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
    </main>
  );
}