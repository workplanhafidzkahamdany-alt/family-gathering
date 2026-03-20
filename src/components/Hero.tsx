"use client";
import { useEffect, useRef } from "react";

// Crescent moon SVG
function CrescentMoon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 10 C28 10 10 28 10 50 C10 72 28 90 50 90 C62 90 73 85 80 76 C73 78 65 79 57 77 C37 72 24 54 28 34 C31 20 39 10 50 10Z" />
    </svg>
  );
}

// Star SVG
function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L13.8 8.2L20 9.3L15.5 13.7L16.8 20L12 17.1L7.2 20L8.5 13.7L4 9.3L10.2 8.2L12 2Z" />
    </svg>
  );
}

// Lantern SVG
function Lantern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none">
      {/* String */}
      <line
        x1="30"
        y1="0"
        x2="30"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Top cap */}
      <rect
        x="18"
        y="12"
        width="24"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Body */}
      <rect
        x="14"
        y="18"
        width="32"
        height="52"
        rx="6"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Glow lines */}
      <line
        x1="22"
        y1="22"
        x2="22"
        y2="66"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
      />
      <line
        x1="30"
        y1="22"
        x2="30"
        y2="66"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
      />
      <line
        x1="38"
        y1="22"
        x2="38"
        y2="66"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
      />
      {/* Bottom cap */}
      <rect
        x="18"
        y="70"
        width="24"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Tassel */}
      <line
        x1="30"
        y1="76"
        x2="30"
        y2="90"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="30" cy="92" r="4" fill="currentColor" />
    </svg>
  );
}

// Mosque silhouette SVG
function MosqueSilhouette() {
  return (
    <svg viewBox="0 0 800 200" className="w-full" fill="currentColor">
      {/* Center dome */}
      <ellipse cx="400" cy="120" rx="100" ry="80" />
      <rect x="300" y="120" width="200" height="80" />
      {/* Left dome */}
      <ellipse cx="200" cy="140" rx="70" ry="55" />
      <rect x="130" y="140" width="140" height="60" />
      {/* Right dome */}
      <ellipse cx="600" cy="140" rx="70" ry="55" />
      <rect x="530" y="140" width="140" height="60" />
      {/* Left minaret */}
      <rect x="80" y="60" width="24" height="140" rx="4" />
      <ellipse cx="92" cy="60" rx="20" ry="30" />
      <line
        x1="92"
        y1="30"
        x2="92"
        y2="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      {/* Right minaret */}
      <rect x="696" y="60" width="24" height="140" rx="4" />
      <ellipse cx="708" cy="60" rx="20" ry="30" />
      <line
        x1="708"
        y1="30"
        x2="708"
        y2="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      {/* Ground */}
      <rect x="0" y="200" width="800" height="10" />
      {/* Arches - center building */}
      <ellipse
        cx="360"
        cy="180"
        rx="22"
        ry="30"
        fill="none"
        stroke="rgba(201,168,76,0.3)"
        strokeWidth="2"
      />
      <ellipse
        cx="400"
        cy="180"
        rx="22"
        ry="30"
        fill="none"
        stroke="rgba(201,168,76,0.3)"
        strokeWidth="2"
      />
      <ellipse
        cx="440"
        cy="180"
        rx="22"
        ry="30"
        fill="none"
        stroke="rgba(201,168,76,0.3)"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    const stars = starsRef.current;
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "absolute rounded-full bg-[#F0D080]";
      const size = Math.random() * 3 + 1;
      star.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 70}%;
        opacity: ${Math.random() * 0.7 + 0.2};
        animation: twinkle ${Math.random() * 3 + 1.5}s ease-in-out ${Math.random() * 2}s infinite;
      `;
      stars.appendChild(star);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pattern-dark"
      style={{
        background:
          "linear-gradient(180deg, #051820 0%, #0D4A5C 50%, #0A3D4C 100%)",
      }}
    >
      {/* Stars field */}
      <div ref={starsRef} className="absolute inset-0 pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1A6B47]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Crescent moon */}
      <div className="absolute top-16 right-16 md:right-32 float-anim">
        <CrescentMoon className="w-16 h-16 md:w-24 md:h-24 text-[#F0D080] opacity-90" />
      </div>

      {/* Twinkling stars */}
      <div className="absolute top-24 left-20 star">
        <StarIcon className="w-4 h-4 text-[#F0D080]" />
      </div>
      <div className="absolute top-32 right-48 star">
        <StarIcon className="w-3 h-3 text-[#F0D080]/70" />
      </div>
      <div className="absolute top-20 left-1/3 star">
        <StarIcon className="w-2 h-2 text-[#F0D080]/60" />
      </div>

      {/* Lanterns */}
      <div className="absolute top-0 left-12 md:left-24 flex gap-12">
        <div className="lantern flex flex-col items-center">
          <div className="w-px h-16 bg-[#C9A84C]/50" />
          <Lantern className="w-8 h-14 text-[#C9A84C]" />
        </div>
        <div
          className="lantern flex flex-col items-center"
          style={{ animationDelay: "-2s" }}
        >
          <div className="w-px h-24 bg-[#C9A84C]/50" />
          <Lantern className="w-7 h-12 text-[#7B1F2E]" />
        </div>
        <div
          className="lantern flex flex-col items-center"
          style={{ animationDelay: "-1s" }}
        >
          <div className="w-px h-12 bg-[#C9A84C]/50" />
          <Lantern className="w-8 h-14 text-[#1A6B47]" />
        </div>
      </div>

      <div className="absolute top-0 right-12 md:right-24 flex gap-12">
        <div
          className="lantern flex flex-col items-center"
          style={{ animationDelay: "-3s" }}
        >
          <div className="w-px h-20 bg-[#C9A84C]/50" />
          <Lantern className="w-8 h-14 text-[#1A6B47]" />
        </div>
        <div
          className="lantern flex flex-col items-center"
          style={{ animationDelay: "-1.5s" }}
        >
          <div className="w-px h-14 bg-[#C9A84C]/50" />
          <Lantern className="w-7 h-12 text-[#C9A84C]" />
        </div>
      </div>

      {/* Gold divider top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-36">
        {/* Arabic greeting */}
        <div className="mb-6 float-anim">
          <span
            className="font-['Amiri'] text-2xl md:text-3xl text-[#F0D080] italic"
            style={{ textShadow: "0 0 30px rgba(201,168,76,0.6)" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </span>
        </div>

        {/* Badge */}
        <div className=" inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/50 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
          {/* <span className="text-sm">☪️</span> */}
          <span className="text-[#C9A84C] text-lg pr-2">❖</span>
          <span className="font-['Amiri'] italic text-[#F0D080] text-base font-bold tracking-widest uppercase">
            Eid Al-Fitr 1447 H
          </span>
          <span className="text-[#C9A84C] text-lg pl-2">❖</span>
          {/* <span className="text-sm">☪️</span> */}
        </div>

        {/* Main title */}
        <h1
          className="font-['Cinzel_Decorative'] font-black leading-none mb-4"
          style={{ fontSize: "clamp(40px, 10vw, 96px)" }}
        >
          <span className="gold-shimmer block">Wagrim Family</span>
          <span className="gold-shimmer block">Halalbihalal!</span>
        </h1>

        {/* Minal aidin */}
        <div className="my-6">
          <p className="font-['Amiri'] text-lg md:text-2xl text-[#E8D5A3]/80 italic">
            Minal Aidin Wal Faizin <br /> Mohon Maaf Lahir & Batin 🌙
          </p>
        </div>

        {/* Description */}
        {/* <p className="text-[#E8D5A3]/70 text-base md:text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
          Hari paling istimewa bersama keluarga tercinta.
          <br />
          Penuh canda, doa, makanan lezat & kenangan indah!
        </p> */}

        {/* Pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {[
            { icon: "📅", text: "21 Maret 2026" },
            { icon: "📍", text: "Taman Hutan Raya Ir. H. Djuanda" },
            { icon: "🎮", text: "Fun Games" },
            { icon: "🍽️", text: "Makan Bersama" },
            { icon: "🎁", text: "Doorprize" },
            // { icon: "🎁", text: "Gift Exchange" },
          ].map((pill) => (
            <div
              key={pill.text}
              className="flex items-center gap-2 bg-[#FDF8EC]/10 border border-[#C9A84C]/40 rounded-full px-4 py-2 text-[#F0D080] text-lg font-bold backdrop-blur-sm hover:bg-[#C9A84C]/20 hover:border-[#C9A84C] transition-all duration-200 cursor-default"
            >
              <span>{pill.icon}</span>
              <span className="font-['Amiri'] italic">{pill.text}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        {/* <a
          href="#rundown"
          className="inline-flex items-center gap-3 font-['Cinzel_Decorative'] text-sm md:text-base text-[#1C1208] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C] px-8 py-4 rounded-full font-bold border border-[#8B6914] shadow-[0_4px_24px_rgba(201,168,76,0.5)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.7)] hover:scale-105 transition-all duration-300 group"
        >
          Lihat Jadwal Lengkap
          <span className="group-hover:translate-y-1 transition-transform">
            👇
          </span>
        </a> */}
      </div>

      {/* Mosque silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="text-[#C9A84C]/10">
          <MosqueSilhouette />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDF8EC] to-transparent pointer-events-none" />
    </section>
  );
}
