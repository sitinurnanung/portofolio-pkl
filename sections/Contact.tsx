// sections/Contact.tsx
"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactDetails = {
    email: "sitinurhayati@example.com",
    phone: "+62 812-3456-7890",
    phoneRaw: "6281234567890",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    instagram: "https://instagram.com/your-username",
    whatsapp: "https://wa.me/6281234567890",
    location: "Bogor, Jawa Barat, Indonesia",
    school: "SMK Plus Pelita Nusantara",
  };

  const accountLinks = [
    {
      name: "GITHUB",
      href: contactDetails.github,
      isExternal: true,
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "LINKEDIN",
      href: contactDetails.linkedin,
      isExternal: true,
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.64s.73 1.63 1.63 1.63 1.64-.73 1.64-1.63c0-.91-.74-1.64-1.64-1.64Z" />
        </svg>
      ),
    },
    {
      name: "INSTAGRAM",
      href: contactDetails.instagram,
      isExternal: true,
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Prefill WhatsApp chat or mailto
    const encodedText = encodeURIComponent(
      `Halo Siti Nur Hayati,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nPesan: ${formData.message}`
    );
    const waUrl = `https://wa.me/${contactDetails.phoneRaw}?text=${encodedText}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-8 relative z-10"
    >
      {/* Section Title Header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="section-title text-[var(--text)] tracking-wider">
          CONTACT
        </h2>
      </div>

      {/* Main Container */}
      <div className="relative rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
          {/* ================= LEFT COLUMN: CONTACT FORM ================= */}
          <div className="lg:col-span-7 p-7 sm:p-10 md:p-12 flex flex-col justify-between">
            <div>
              {/* Title & Subtitle */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text)] tracking-tight">
                Contact Me
              </h3>

              {/* Form with Minimalist Underline Inputs */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                {/* Input Name */}
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-3)] mb-1 group-focus-within:text-[var(--primary)] transition-colors"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b-2 border-[var(--border)] focus:border-[var(--primary)] text-[var(--text)] placeholder-[var(--text-3)]/60 py-2.5 px-0 text-base focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Input Email */}
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-3)] mb-1 group-focus-within:text-[var(--primary)] transition-colors"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent border-b-2 border-[var(--border)] focus:border-[var(--primary)] text-[var(--text)] placeholder-[var(--text-3)]/60 py-2.5 px-0 text-base focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Input Message */}
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-3)] mb-1 group-focus-within:text-[var(--primary)] transition-colors"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or message..."
                    className="w-full bg-transparent border-b-2 border-[var(--border)] focus:border-[var(--primary)] text-[var(--text)] placeholder-[var(--text-3)]/60 py-2.5 px-0 text-base focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Feedback */}
                {submitted && (
                  <div className="p-3.5 rounded-xl bg-[var(--primary-glow)] border border-[var(--primary)]/40 text-[var(--primary)] text-sm font-semibold flex items-center gap-2 animate-fade-in">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Message prepared! Opening WhatsApp to send your message.
                    </span>
                  </div>
                )}

                {/* Send Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[var(--primary)] hover:bg-[var(--text)] text-white rounded-xl font-bold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group"
                  >
                    <svg
                      className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    <span>Kirim Pesan</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INFO / ACCOUNT CARDS ================= */}
          <div className="lg:col-span-5 relative bg-[var(--surface-2)] dark:bg-[#1C2C20] p-7 sm:p-10 md:p-12 flex flex-col justify-between rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl overflow-hidden border-t lg:border-t-0 lg:border-l border-[var(--border)]/50 shadow-inner">
            <div className="relative z-10">
              <div className="mb-6 sm:mb-8">
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text)] dark:text-white">
                  Info
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-2)] dark:text-white/70 font-semibold mt-1">
                  Connect with me directly across my platforms:
                </p>
              </div>

              {/* Stacked Account Buttons (Neo-brutalist / Tactile Card Style from Mockup) */}
              <div className="space-y-3.5 sm:space-y-4">
                {accountLinks.map((acc) => (
                  <a
                    key={acc.name}
                    href={acc.href}
                    target={acc.isExternal ? "_blank" : undefined}
                    rel={acc.isExternal ? "noopener noreferrer" : undefined}
                    className="w-full flex items-center justify-between px-5 py-3.5 sm:py-4 rounded-xl bg-white text-black border-2 border-black shadow-[0_4px_0_0_#000] hover:shadow-[0_1px_0_0_#000] hover:translate-y-[3px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-black group-hover:scale-110 transition-transform">
                        {acc.icon}
                      </span>
                      <span className="font-extrabold tracking-wider text-sm sm:text-base text-black">
                        {acc.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & School Footer Note */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]/40 dark:border-white/10 relative z-10">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[var(--text-2)] dark:text-white/70">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-[var(--primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {contactDetails.location} • {contactDetails.school}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}