// components/layout/Navbar.tsx
"use client";

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const navItems = [
    { id: "Home", label: "Home" },
    { id: "Profile", label: "About" },
    { id: "Work", label: "Work" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center gap-0.5 sm:gap-1 flex-wrap justify-center">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
              isActive
                ? "text-[var(--primary)] border border-[var(--primary)] bg-[var(--primary-glow)]"
                : "text-[var(--text-2)] border border-transparent hover:text-[var(--primary)]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}