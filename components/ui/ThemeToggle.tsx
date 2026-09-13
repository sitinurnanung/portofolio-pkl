"use client";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-16 h-9 rounded-full transition-all duration-500 flex items-center cursor-pointer overflow-hidden border"
      style={{
        backgroundColor: isDark ? "var(--surface-2)" : "var(--bg-secondary)",
        borderColor: isDark ? "var(--border-hover)" : "var(--border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, var(--primary-glow))",
        }}
      />

      <div
        className={`relative z-10 w-7 h-7 rounded-full transition-all duration-500 ease-out flex items-center justify-center shadow-md ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
        style={{
          backgroundColor: isDark ? "var(--primary)" : "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {isDark ? (
          <svg className="w-3.5 h-3.5" style={{ color: "var(--bg)" }} fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" style={{ color: "var(--primary)" }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </button>
  );
}