// components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="font-black tracking-wide text-lg text-text">
          SITI NUR HAYATI
        </p>
        <p className="text-xs tracking-wider mt-2 text-text-3">
          SOFTWARE ENGINEERING STUDENT • 2026
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs hover:scale-105 transition-transform text-text-3">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}