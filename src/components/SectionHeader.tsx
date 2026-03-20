interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {/* Ornament line */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A84C]/40" />
        <span className="text-[#C9A84C] text-lg">✦</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A84C]/40" />
      </div>

      {/* Eyebrow badge */}
      <div className="flex justify-center mb-4">
        <span
          className={`font-['Amiri'] italic inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase px-5 py-2 rounded-full border ${
            light
              ? "bg-[#FDF8EC]/20 border-[#FDF8EC]/40 text-[#FDF8EC]"
              : "bg-[#C9A84C]/15 border-[#C9A84C]/50 text-[#8B6914]"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      {/* Title */}
      <h2
        className={`font-['Cinzel_Decorative'] font-bold text-center leading-tight mb-3 ${
          light ? "text-[#FDF8EC]" : "text-[#1C1208]"
        }`}
        style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className={`text-center font-light max-w-lg mx-auto ${light ? "text-[#E8D5A3]/70" : "text-[#1C1208]/50"}`}
      >
        {subtitle}
      </p>

      {/* Bottom ornament */}
      <div className="flex items-center gap-3 mt-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A84C]/30" />
        <span className="text-[#C9A84C]/50 text-sm">◆</span>
        <span className="text-[#C9A84C] text-lg">❖</span>
        <span className="text-[#C9A84C]/50 text-sm">◆</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A84C]/30" />
      </div>
    </div>
  );
}
