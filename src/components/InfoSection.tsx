'use client'
import { useEffect, useRef } from 'react'
import { infoData } from '@/data'
import SectionHeader from './SectionHeader'

export default function InfoSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = ref.current?.querySelectorAll('.fade-up')
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="info" className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #0D4A5C 0%, #1A6B47 100%)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow="🌙 Detail Acara"
          title="What's the Plan?"
          subtitle="Semua yang perlu kamu tahu sebelum hari yang istimewa!"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoData.map((item, i) => (
            <div
              key={i}
              className="fade-up relative bg-[#FDF8EC] rounded-2xl p-6 overflow-hidden group cursor-default hover:scale-[1.02] transition-all duration-300"
              style={{
                transitionDelay: `${i * 80}ms`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(201,168,76,0.2)',
              }}
            >
              {/* Top color stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${item.color}, #C9A84C)` }} />

              {/* Corner ornament */}
              <div
                className="absolute top-3 right-3 w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: item.color }}
              />

              <span className="text-4xl block mb-3">{item.icon}</span>
              <div className="text-[#8B6914] text-xs font-black tracking-widest uppercase mb-1">{item.label}</div>
              <div
                className="font-['Cinzel_Decorative'] text-xl font-bold text-[#1C1208] mb-2 leading-tight"
              >
                {item.val}
              </div>
              <div className="text-[#1C1208]/50 text-sm font-light">{item.note}</div>

              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#F0D080] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
