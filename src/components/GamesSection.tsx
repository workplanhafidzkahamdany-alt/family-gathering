"use client";
import { useEffect, useRef } from "react";
import { gamesData } from "@/data";
import SectionHeader from "./SectionHeader";

export default function GamesSection() {
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

  return (
    <section
      id="games"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(160deg, #1C1208 0%, #0D4A5C 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow="Ayo Bermain!"
          title="Games Line-Up"
          subtitle=""
          light
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          }}
        >
          {gamesData.map((game, i) => (
            <div
              key={i}
              className="fade-up relative bg-[#FDF8EC] rounded-2xl p-5 overflow-hidden group cursor-default hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(201,168,76,0.3)] transition-all duration-300"
              style={{
                transitionDelay: `${i * 50}ms`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-60 group-hover:opacity-90 transition-opacity"
                style={{ background: game.color }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, ${game.color}, transparent)`,
                }}
              />

              <span className="text-4xl block mb-3">{game.emoji}</span>

              <div
                className="inline-block text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#1C1208]/20 mb-3"
                style={{
                  background: game.color + "30",
                  color: game.color === "#C9A84C" ? "#8B6914" : game.color,
                }}
              >
                {game.cat}
              </div>

              <h3 className="font-['Cinzel_Decorative'] text-base font-bold text-[#1C1208] mb-2 leading-tight">
                {game.name}
              </h3>
              <p className="text-base text-[#1C1208]/50 font-light leading-relaxed mb-4">
                {game.notes}
              </p>

              <div className="flex gap-2 mt-auto">
                <span className="text-xs font-bold px-3 py-1 bg-[#1C1208]/5 border border-[#1C1208]/10 rounded-full text-[#1C1208]/60">
                  👥 {game.min}–{game.max}
                </span>
                <span className="text-xs font-bold px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full text-[#8B6914]">
                  ⏱ {game.dur}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
