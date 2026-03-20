export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6 text-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #051820 0%, #0D1A12 100%)",
      }}
    >
      {/* Top gold divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Decorative stars */}
      <div className="flex justify-center gap-4 mb-16">
        {["⭐", "🌟", "🌙", "🌟", "⭐"].map((s, i) => (
          <span
            key={i}
            className="text-xl star"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Arabic text */}
      <p className="font-['Amiri'] text-3xl text-[#F0D080] italic mb-2">
        تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ
      </p>
      <p className="text-[#E8D5A3]/40 text-base mb-8 font-light">
        Taqabbalallahu Minna wa Minkum
      </p>

      {/* Main footer title */}
      <h2
        className="font-['Cinzel_Decorative'] font-black gold-shimmer mb-3"
        style={{ fontSize: "clamp(28px, 6vw, 56px)" }}
      >
        See You There!
      </h2>

      <p className="text-[#E8D5A3]/50 text-sm font-light mb-8">
        Dibuat dengan ❤️ oleh Panitia Family Halalbihalal 2026 ✨
      </p>

      {/* Emoji row */}
      <div className="flex justify-center gap-3 text-2xl mb-8">
        {["🧡", "💛", "💚", "💙", "💜"].map((e, i) => (
          <span
            key={i}
            className="float-anim"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {e}
          </span>
        ))}
      </div>

      {/* Gold divider */}
      <div className="gold-divider max-w-xs mx-auto mb-6 opacity-40" />

      <p className="text-[#E8D5A3]/25 text-xs">
        Eid Al-Fitr 1447 H · Minal Aidin Wal Faizin
      </p>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
    </footer>
  );
}
