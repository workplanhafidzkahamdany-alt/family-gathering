'use client'
import { useEffect, useRef } from 'react'
import { equipData } from '@/data'
import SectionHeader from './SectionHeader'

export default function EquipmentSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="equipment" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #1A6B47 0%, #0D4A5C 100%)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow="🛠️ Logistik"
          title="Equipment Checklist"
          subtitle="Semua perlengkapan yang dibutuhkan untuk acara ini!"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {equipData.map((item, i) => (
            <div
              key={i}
              className="fade-up flex items-center gap-4 bg-[#FDF8EC]/10 backdrop-blur-sm border border-[#C9A84C]/25 rounded-xl p-4 group cursor-default hover:bg-[#FDF8EC]/20 hover:border-[#C9A84C]/60 transition-all duration-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="text-3xl min-w-[40px] text-center">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#FDF8EC] text-sm truncate">{item.name}</div>
                <div className="text-xs text-[#E8D5A3]/50 font-light uppercase tracking-wider">{item.cat}</div>
              </div>
              <div className="font-['Cinzel_Decorative'] text-sm text-[#F0D080] font-bold whitespace-nowrap">
                {item.qty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
