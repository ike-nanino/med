import Image from 'next/image'

const members = [
  {
    name: 'Dr. James Whitfield',
    role: 'Chairman & Chief Executive Officer',
    bio: '30+ years in aeromedical transport. Former Director of Critical Care at Johns Hopkins. Built MedAir Global from a 3-aircraft fleet to a global network.',
    img: '/images/board-ceo-james-whitfield.jpg',
    alt: 'Professional headshot of a senior male executive in a suit, boardroom setting, warm lighting',
  },
  {
    name: 'Dr. Sandra Okafor',
    role: 'Chief Medical Officer',
    bio: 'Board-certified in Emergency Medicine and Critical Care. Pioneered in-flight ICU protocols now adopted across six continents.',
    img: '/images/board-cmo-sandra-okafor.jpg',
    alt: 'Professional headshot of a female medical executive in business attire, confident posture, office background',
  },
  {
    name: 'Marcus Heller',
    role: 'Chief Operations Officer',
    bio: 'Former RAF logistics commander. Oversees a fleet of 200+ aircraft and ground vehicles across 47 country offices.',
    img: '/images/board-coo-marcus-heller.jpg',
    alt: 'Professional headshot of a middle-aged male executive, dark blazer, serious expression, neutral backdrop',
  },
  {
    name: 'Priya Anand',
    role: 'Chief Financial Officer',
    bio: 'MBA from Wharton. Led the company through three global expansion rounds raising over $400M in capital for fleet modernisation.',
    img: '/images/board-cfo-priya-anand.jpg',
    alt: 'Professional headshot of a South Asian female executive, business formal attire, warm smile, modern office',
  },
]

export default function BoardMembers() {
  return (
    <section id="board" className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
            Leadership
          </span>
          <h2 className="font-serif text-4xl md:text-[2.75rem] font-bold text-[#1C1C1E] leading-tight mb-4">
            The People Behind Every Mission
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9953A]" />
            <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9953A]" />
          </div>
          <p className="text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            Experienced leaders from medicine, aviation and global logistics — united by one purpose.
          </p>
        </div>

        {/* Board cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {members.map((m) => (
            <div key={m.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100">
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <Image
                  src={m.img}
                  alt={m.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-base text-[#1C1C1E] mb-0.5">{m.name}</h3>
                <p className="text-[#C0392B] text-[11px] font-bold uppercase tracking-widest mb-3">{m.role}</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Board meeting image — handshake / meeting moment */}
        <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 shadow-xl">
          <Image
            src="/images/hand.jpg"
            alt="Two senior male executives in formal suits shaking hands warmly at a polished boardroom table, natural light from floor-to-ceiling windows, other board members seated in background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E]/70 via-[#1C1C1E]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-md">
              <p className="text-white/80 text-sm font-medium mb-2 uppercase tracking-widest">Our Promise to Every Patient</p>
              <blockquote className="font-serif text-2xl md:text-3xl font-bold text-white leading-snug">
                &ldquo;Partnership built on trust — with every airline, hospital and government we work with.&rdquo;
              </blockquote>
              <p className="text-[#E67E22] text-sm font-semibold mt-4">— James Whitfield</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}