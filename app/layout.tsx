// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Siti Nur Hayati — Software Engineering student",
    template: "%s | Siti Nur Hayati",
  },
  description: "Portfolio Siti Nur Hayati, siswa Rekayasa Perangkat Lunak SMK Plus Pelita Nusantara.",
  keywords: ["portfolio", "software engineering", "web developer", "RPL", "Next.js", "Laravel", "React"],
  authors: [{ name: "Siti Nur Hayati" }],
  creator: "Siti Nur Hayati",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEEEEE" },
    { media: "(prefers-color-scheme: dark)", color: "#344E41" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      {/* 
        CATATAN: 
        Kita HAPUS total tag <head> dan <Script> di sini. 
        Logika deteksi tema dipindahkan ke useEffect di app/page.tsx 
        agar tidak memicu error "script tag" dari React.
      */}
      <body className={`${manrope.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}