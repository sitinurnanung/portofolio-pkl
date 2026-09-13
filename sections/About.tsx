// sections/About.tsx
export function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      {/* JUDUL SECTION */}
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <h3 className="section-title">Profile</h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
        {/* KIRI: MODERN AESTHETIC PROFILE PHOTO CARD */}
        <div className="w-full sm:w-80 md:w-80 flex-shrink-0 group mx-auto lg:mx-0">
          <div className="relative">
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-tr from-[var(--primary)] via-[var(--primary-light)] to-[var(--border)] opacity-25 blur-xl group-hover:opacity-45 transition-all duration-700 -z-10" />

            {/* Main Card Container */}
            <div className="relative rounded-[1.75rem] bg-[var(--surface)] border border-[var(--border)] p-4 sm:p-5 shadow-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[var(--border)]/70 bg-[var(--surface-2)] shadow-inner">
                <img
                  src="/photo.jpg"
                  alt="Foto Profil Siti Nur Hayati"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />
              </div>

              {/* Identity & Bio Info */}
              <div className="pt-4 text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <h3 className="text-xl font-extrabold text-[var(--text)] tracking-tight">
                    Siti Nur Hayati
                  </h3>
                </div>

                {/* School */}
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[var(--primary)] mt-1.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span>SMK Plus Pelita Nusantara</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN: Teks About Me */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div>
            <span className="badge mb-2 inline-block">ABOUT ME</span>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-2)] leading-relaxed">
            I am a Software Engineering student with an interest in web application development. 
            I focus on learning and developing modern, functional, and well-structured web applications, 
            while paying attention to security from the early stages of development. I am familiar with 
            using Visual Studio Code and GitHub for learning and project development.
            I also have skills in Microsoft Word, Excel, and PowerPoint to support documentation, data processing, and 
            presentation preparation. I have strong problem-solving, communication, teamwork, and 
            adaptability skills. I am eager to continue learning, develop my skills, gain valuable work 
            experience, and make a positive contribution in a professional work environment.
          </p>

          <div className="flex items-center gap-4 mt-4">
          </div>
        </div>

      </div>
    </section>
  );
}