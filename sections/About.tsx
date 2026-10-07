// sections/About.tsx
export function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20"
    >
      {/* JUDUL SECTION */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="section-title text-text">PROFILE</h2>
      </div>

      {/* KONTEN: FOTO (KIRI) + TEKS (KANAN) */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-14">
        {/* KIRI: PROFILE PHOTO CARD — sage green background */}
        <div className="w-full sm:w-64 md:w-72 flex-shrink-0 group mx-auto md:mx-0">
          <div className="relative">
            <div
              className="relative rounded-[1.75rem] p-4 sm:p-5 shadow-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl"
              style={{ backgroundColor: '#A3B18A' }}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-inner">
                <img
                  src="/photo.jpg"
                  alt="Foto Profil Siti Nur Hayati"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Name & School */}
              <div className="pt-4 text-center">
                <h3 className="text-xl font-extrabold tracking-tight" style={{ color: '#3A5A40' }}>
                  Siti Nur Hayati
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold mt-1.5" style={{ color: '#3A5A40' }}>
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

        {/* KANAN: BADGE ABOUT ME + Teks Bacaan */}
        <div className="flex-1 flex flex-col justify-center">
          {/* BADGE ABOUT ME — diberi jarak lebih lega ke teks */}
          <div className="mb-5">
            <span className="badge inline-block">ABOUT ME</span>
          </div>

          {/* Teks About Me */}
          <p className="text-base sm:text-lg leading-relaxed text-justify" style={{ color: '#3A5A40' }}>
            I am a Software Engineering student with an interest in web application development.
            I focus on learning and developing modern, functional, and well-structured web applications,
            while paying attention to security from the early stages of development. I am familiar with
            using Visual Studio Code and GitHub for learning and project development.
            I also have skills in Microsoft Word, Excel, and PowerPoint to support documentation, data processing, and
            presentation preparation. I have strong problem-solving, communication, teamwork, and
            adaptability skills. I am eager to continue learning, develop my skills, gain valuable work
            experience, and make a positive contribution in a professional work environment.
          </p>
        </div>
      </div>
    </section>
  );
}