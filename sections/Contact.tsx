// sections/Contact.tsx
"use client";

import { useState } from "react";

const socialLinks = [
  {
    name: "GITHUB",
    href: "https://github.com/sitinurnanung",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LINKEDIN",
    href: "https://www.linkedin.com/in/siti-nur-hayatii-955687405",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "INSTAGRAM",
    href: "https://instagram.com/nan_ung1",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sitinurhayati@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Section title */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="section-title text-[var(--text)]">CONTACT</h2>
      </div>

      {/* Two-panel layout */}
      <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: 420 }}>

        {/* LEFT PANEL — Form */}
        <div className="flex-1 p-8 md:p-10" style={{ backgroundColor: '#A3B18A' }}>
          <h3 className="text-3xl md:text-4xl font-black mb-1" style={{ color: '#3A5A40' }}>Contact Me</h3>
          <p className="text-sm mb-8" style={{ color: '#3A5A40' }}>
            Feel free to contact me any time. I will get back to you as soon as possible!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold tracking-widest mb-1" style={{ color: '#3A5A40' }}>NAME</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b outline-none text-sm py-2 placeholder:text-[#588157] transition-colors"
                style={{ borderColor: '#3A5A40', color: '#3A5A40' }}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold tracking-widest mb-1" style={{ color: '#3A5A40' }}>EMAIL</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b outline-none text-sm py-2 placeholder:text-[#588157] transition-colors"
                style={{ borderColor: '#3A5A40', color: '#3A5A40' }}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold tracking-widest mb-1" style={{ color: '#3A5A40' }}>MESSAGE</label>
              <textarea
                placeholder="Tell me about your project or message..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b outline-none text-sm py-2 resize-none placeholder:text-[#588157] transition-colors"
                style={{ borderColor: '#3A5A40', color: '#3A5A40' }}
                required
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
                style={{ backgroundColor: '#3A5A40' }}
              >
                SEND →
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT PANEL — Info */}
        <div className="lg:w-80 flex flex-col justify-between p-8 md:p-10" style={{ backgroundColor: '#3A5A40' }}>
          <div>
            <h4 className="text-xl font-black text-white mb-1">Info</h4>
            <p className="text-xs mb-6" style={{ color: '#A3B18A' }}>Connect with me directly across my platforms:</p>

            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white text-[#3A5A40] font-bold text-sm tracking-wider hover:bg-[#DAD7CD] transition-colors duration-200 group"
                >
                  <span className="flex items-center gap-3">
                    {link.icon}
                    {link.name}
                  </span>
                  <span className="text-[#588157] group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom location */}
          <div className="mt-8 flex items-center gap-2 text-xs" style={{ color: '#A3B18A' }}>
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Bogor, Jawa Barat, Indonesia • SMK Plus Pelita Nusantara</span>
          </div>
        </div>

      </div>
    </section>
  );
}