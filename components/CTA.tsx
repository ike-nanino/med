import Image from 'next/image'

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <Image
        src="/images/rooftop.jpg"
        alt="Air ambulance helicopter on a hospital rooftop helipad at golden hour, medical crew standing by"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#96281B]/90 via-[#C0392B]/80 to-[#1C1C1E]/85" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-amber-300 bg-amber-300/10 border border-amber-300/30 px-4 py-1.5 rounded-sm mb-6">
          Available 24 / 7 · 365 Days a Year
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
          When Every Second Counts,<br className="hidden md:block" /> We Are Already Moving.
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          One call connects you to a fully staffed dispatch centre ready to mobilise air and ground transport anywhere on the planet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18005550199"
            className="flex items-center justify-center gap-2 bg-white text-[#C0392B] font-bold text-base px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +1 (800) 555-0199
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            View Contact Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}