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
    <nav className="flex items-center gap-2">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative px-4 py-1.5 text-sm font-bold rounded-full transition-all duration-300 cursor-pointer ${
              isActive
                ? "text-[var(--primary)] border-2 border-[var(--primary)] bg-[var(--primary-glow)]"
                : "text-[var(--text-2)] border-2 border-transparent hover:text-[var(--primary)]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}