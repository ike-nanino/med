import Image from 'next/image'

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-[#1C1C1E] text-white relative overflow-hidden">
      {/* Decorative warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C0392B]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Label */}
        <div className="text-center mb-4">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/25 px-4 py-1.5 rounded-sm">
            Our Mission
          </span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-white mb-4 leading-tight">
          Why We Exist
        </h2>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9953A]" />
          <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9953A]" />
        </div>

        {/* Mission statement */}
        <p className="text-center text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          To deliver swift, compassionate and clinically excellent medical transport — removing every barrier between a patient in need and the care that can save their life.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image: medical aircraft boarding / patient stretcher loading */}
          <div className="relative rounded-xl overflow-hidden h-80 lg:h-[440px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <Image
              src="/images/night.jpg"
              alt="Medical crew loading a patient on a stretcher onto an air ambulance aircraft on the tarmac at night"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/90 text-sm font-medium italic">
                &ldquo;Every minute counts. We train and operate so that no minute is ever wasted.&rdquo;
              </p>
              <p className="text-[#E67E22] text-xs font-semibold mt-1">— Dr. Sandra Okafor, Chief Medical Officer</p>
            </div>
          </div>

          {/* Mission pillars */}
          <div className="space-y-6">
            {[
              {
                icon: '⚡',
                title: 'Speed Without Compromise',
                body: 'We maintain a global network of pre-positioned aircraft and crews, enabling wheels-up in under 90 minutes from the time of a confirmed mission.',
              },
              {
                icon: '🩺',
                title: 'Clinical Excellence at Altitude',
                body: 'Every transport is staffed by intensive care specialists trained for the unique physiological challenges of aeromedical environments.',
              },
              {
                icon: '🤝',
                title: 'Compassion-First Care',
                body: 'We treat every patient as we would our own family — with dignity, transparency and unwavering human decency throughout every transfer.',
              },
              {
                icon: '🌐',
                title: 'Truly Borderless',
                body: 'From remote islands to major cities, we coordinate regulatory clearances, customs and ground logistics so families can focus on what matters.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/8 hover:border-[#C0392B]/40 hover:bg-white/8 transition-all duration-200 group">
                <span className="text-2xl shrink-0 mt-0.5">{pillar.icon}</span>
                <div>
                  <h3 className="font-serif font-bold text-base text-white mb-1.5 group-hover:text-[#E67E22] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}