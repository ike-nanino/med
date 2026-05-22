'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'When my father collapsed with a cardiac event in Nairobi, MedAir Global had a fully equipped air ambulance at the airport within four hours. Their ICU nurse held his hand the entire flight home. He survived. We are forever grateful.',
    name: 'Rebecca Mensah',
    role: 'Patient Family ',
    img: '/images/rebecca.jpg',
    alt: 'Smiling woman in her 40s, casual attire, warm background',
    rating: 5,
  },
  {
    quote: 'As a travel insurance coordinator, I have worked with dozens of medical transport companies. MedAir Global is in a different league — documentation is always perfect, communication never drops and the clinical reports are detailed and timely.',
    name: 'Thomas Brünner',
    role: 'Senior Claims Coordinator — Munich Re',
    img: '/images/thomas.png',
    alt: 'Professional European male in his 50s wearing glasses, corporate office setting',
    rating: 5,
  },
  {
    quote: 'We needed a patient repatriated from a remote Indonesian island. MedAir arranged a helicopter to the nearest airstrip, a fixed-wing to Singapore and a connecting air ambulance to London — all within 18 hours. Extraordinary logistics.',
    name: 'Dr. Fiona Lim',
    role: 'Medical Director — AXA Global Healthcare',
    img: '/images/asian.png',
    alt: 'Asian female doctor in a blazer, professional headshot, clinic background',
    rating: 5,
  },
  {
    quote: 'After my accident in the Alps, I was flown home by MedAir. The flight nurse was an absolute professional — monitoring me constantly while keeping me calm. I cannot imagine a better team in a frightening situation.',
    name: 'Luca Ferretti',
    role: 'Patient — Turin, Italy',
    img: '/images/italy.png',
    alt: 'Italian male in his 30s, outdoor setting, light background, friendly smile',
    rating: 5,
  },
  {
    quote: 'MedAir Global has been our preferred medical transport partner for six years. Their cultural sensitivity, multi-language teams and around-the-clock availability make them uniquely suited to our diverse client base.',
    name: 'Aisha Al-Rashidi',
    role: 'VP Assistance Services — Allianz Partners',
    img: '/images/mid.png',
    alt: 'Middle Eastern professional woman in business attire, modern office, confident expression',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 bg-[#1C1C1E] relative overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C0392B]/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#E67E22]/6 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/25 px-4 py-1.5 rounded-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-[2.75rem] font-bold text-white leading-tight mb-4">
            Stories From Those We&apos;ve Served
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9953A]" />
            <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9953A]" />
          </div>
        </div>

        {/* Main featured testimonial */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-8 transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            <div className="flex-1">
              <StarRating count={t.rating} />
              {/* Large opening quote mark */}
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-4 font-light italic relative">
                <span className="font-serif text-[4rem] text-[#C0392B] leading-none absolute -top-4 -left-2 opacity-40 select-none">&ldquo;</span>
                <span className="relative">{t.quote}</span>
              </p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-serif font-bold text-white text-base">{t.name}</p>
                <p className="text-[#E67E22] text-sm font-medium mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Selector dots + thumbnails */}
        <div className="flex flex-wrap gap-3 justify-center">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                active === i
                  ? 'bg-[#C0392B] border-[#C0392B] text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              <div className={`relative w-7 h-7 rounded-full overflow-hidden shrink-0 ${active === i ? 'ring-2 ring-white/40' : ''}`}>
                <Image src={item.img} alt={item.alt} fill className="object-cover" />
              </div>
              <span className="hidden sm:block">{item.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}