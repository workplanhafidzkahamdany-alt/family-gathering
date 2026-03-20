"use client";
import { useState, useEffect } from "react";

const navLinks = [
  // { href: "#info", label: "Info", icon: "🌙" },
  { href: "#rundown", label: "Jadwal", icon: "⏰" },
  { href: "#games", label: "Games", icon: "🎮" },
  // { href: "#team", label: "Panitia", icon: "👥" },
  // { href: "#equipment", label: "Perlengkapan", icon: "🛠️" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D4A5C]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] border-b border-[#C9A84C]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl">🌙</span>
          <span
            className="font-['Cinzel_Decorative'] text-[#C9A84C] text-base font-bold tracking-wide leading-tight"
            style={{ textShadow: "0 0 20px rgba(201,168,76,0.5)" }}
          >
            WAGRIM FAMILY
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#E8D5A3] hover:text-[#F0D080] text-sm font-bold px-4 py-2 rounded-full border border-[#C9A84C]/30 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-200 flex items-center gap-1.5"
              >
                <span className="text-xs">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#C9A84C] text-2xl p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D4A5C]/98 backdrop-blur-md border-t border-[#C9A84C]/20 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-[#E8D5A3] font-bold py-3 border-b border-[#C9A84C]/10 last:border-0 hover:text-[#F0D080] transition-colors"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
