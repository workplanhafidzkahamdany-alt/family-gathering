"use client";
import { useEffect, useRef } from "react";
import { rundownData } from "@/data";
import SectionHeader from "./SectionHeader";

const statusConfig = {
  done: {
    label: "✅ Selesai",
    bg: "bg-[#1A6B47]/20 text-[#1A6B47] border-[#1A6B47]/40",
  },
  ongoing: {
    label: "⏳ Berjalan",
    bg: "bg-[#C9A84C]/20 text-[#8B6914] border-[#C9A84C]/40",
  },
  pending: {
    label: "🔲 Menunggu",
    bg: "bg-[#1C1208]/5 text-[#1C1208]/50 border-[#1C1208]/10",
  },
};

const dotEmojis = [
  "⭐",
  "🌟",
  "✨",
  "💫",
  "🎯",
  "🌀",
  "🔥",
  "⚡",
  "💥",
  "🎪",
  "🎨",
  "🌈",
  "🎠",
  "🎡",
  "🎢",
  "🎭",
];

export default function RundownSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.08 },
    );
    ref.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Layout math:
  // time label: w-[72px], gap-3 = 12px, dot: w-8 = 32px
  // dot left edge = 72 + 12 = 84px, dot centre = 84 + 16 = 100px → line at left-[100px]

  return (
    <section id="rundown" className="py-24 md:px-6 pattern-bg">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow="Jadwal Lengkap"
          title="Kegiatan"
          // subtitle="Dari persiapan pagi hingga bersih-bersih malam — semuanya terencana!"
        />

        {/* Timeline */}
        <div className="relative pr-4 md:pr-0">
          {/* Vertical line: left = time(72) + gap(12) + dot-radius(16) = 100px */}
          <div className="absolute left-[100px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/50 to-transparent pointer-events-none" />

          <div className="space-y-4">
            {rundownData.map((item, i) => {
              const st = statusConfig[item.status];
              return (
                <div
                  key={i}
                  className="fade-up flex items-start gap-4 group"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* Left: time + dot as a flex row, vertically centred */}
                  <div className="flex flex-row items-center gap-3 pt-3 shrink-0">
                    <span className="font-['Cinzel_Decorative'] text-sm md:text-base text-[#8B6914] font-bold w-[72px] text-right leading-none">
                      {item.time}
                    </span>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#C9A84C] bg-[#FDF8EC] flex items-center justify-center  text-xs md:text-sm z-10 shrink-0 shadow-[0_0_0_3px_#FDF8EC] group-hover:shadow-[0_0_0_3px_#C9A84C] transition-all duration-200">
                      {dotEmojis[i] || "⭐"}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-[#FDF8EC] border border-[#C9A84C]/20 rounded-xl p-4 mb-1 group-hover:border-[#C9A84C]/60 group-hover:shadow-[0_4px_20px_rgba(201,168,76,0.15)] transition-all duration-300"
                    style={{ boxShadow: "2px 2px 0 rgba(201,168,76,0.2)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="font-['Amari'] italic font-bold text-[#1C1208] text-base md:text-xl">
                        {item.name}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.loc && (
                          <span className="font-['Amari'] text-xs font-bold px-2.5 py-1 rounded-full bg-[#0D4A5C]/10 text-[#0D4A5C] border border-[#0D4A5C]/20">
                            📍 {item.loc}
                          </span>
                        )}
                        <span className="font-['Amari'] text-xs font-bold px-2.5 py-1 rounded-full bg-[#C9A84C]/10 text-[#8B6914] border border-[#C9A84C]/30">
                          ⏱ {item.dur}
                        </span>
                        {/* <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full border ${st.bg}`}
                        >
                          {st.label}
                        </span> */}
                      </div>
                    </div>
                    {item.pic && (
                      <div className="font-['Amari'] text-xs md:text-base text-[#1C1208]/50 font-bold">
                        Pengisi:{" "}
                        <strong className="font-['Amari'] italic text-[#1C1208]/70">
                          {item.pic}
                        </strong>
                      </div>
                    )}

                    {item.notes && (
                      <div className="text-xs md:text-base text-[#8B6914]/65 font-bold mt-1 italic">
                        ❖ {item.notes}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
