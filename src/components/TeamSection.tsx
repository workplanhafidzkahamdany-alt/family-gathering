'use client'
import { useEffect, useRef } from 'react'
import { picData } from '@/data'
import SectionHeader from './SectionHeader'

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="team"
      className="py-24 px-6 pattern-bg"
      style={{ background: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.05'%3E%3Cpath d='M40 0L50 20L40 40L30 20zM0 40L20 30L40 40L20 50zM80 40L60 30L40 40L60 50zM40 80L50 60L40 40L30 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), #FDF8EC` }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow="👥 Tim Panitia"
          title="Meet the Committee!"
          subtitle="Orang-orang luar biasa yang membuat ini semua terjadi 💪"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {picData.map((person, i) => (
            <div
              key={i}
              className="fade-up text-center bg-[#FDF8EC] border border-[#C9A84C]/20 rounded-2xl p-7 group cursor-default hover:border-[#C9A84C]/60 hover:scale-[1.03] transition-all duration-300"
              style={{
                transitionDelay: `${i * 70}ms`,
                boxShadow: '3px 3px 0 rgba(201,168,76,0.25)',
              }}
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full border-2 border-[#C9A84C] mx-auto mb-4 flex items-center justify-center text-3xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] group-hover:shadow-[0_4px_20px_rgba(201,168,76,0.4)] transition-shadow"
                style={{ background: person.color + '25' }}
              >
                {person.emoji}
              </div>

              {/* Gold dot ornament */}
              <div className="flex justify-center gap-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/30" />
              </div>

              <h3 className="font-['Cinzel_Decorative'] text-sm font-bold text-[#1C1208] mb-2 leading-tight">{person.role}</h3>
              <p className="text-xs text-[#1C1208]/50 font-light leading-relaxed">{person.resp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
