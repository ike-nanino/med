const values = [
  {
    icon: '❤️',
    title: 'Compassion',
    body: 'Every patient is a person, not a case number. We lead with empathy in every interaction — with patients, families and partner institutions.',
    color: 'from-red-100 to-red-50',
    border: 'border-red-200 hover:border-red-400',
    iconBg: 'bg-red-100',
  },
  {
    icon: '⚙️',
    title: 'Precision',
    body: 'Aeromedical transport has zero margin for error. We operate with military-grade coordination checklists and continuous training protocols.',
    color: 'from-amber-100 to-amber-50',
    border: 'border-amber-200 hover:border-amber-400',
    iconBg: 'bg-amber-100',
  },
  {
    icon: '🔒',
    title: 'Integrity',
    body: 'We are transparent about capabilities, pricing and clinical outcomes. Families trust us with what matters most — we honour that trust without exception.',
    color: 'from-stone-100 to-stone-50',
    border: 'border-stone-200 hover:border-stone-400',
    iconBg: 'bg-stone-100',
  },
  {
    icon: '🚀',
    title: 'Urgency',
    body: 'We are built for speed. From the first call to wheels-up, every workflow is engineered to compress response times without sacrificing safety.',
    color: 'from-orange-100 to-orange-50',
    border: 'border-orange-200 hover:border-orange-400',
    iconBg: 'bg-orange-100',
  },
  {
    icon: '🌱',
    title: 'Innovation',
    body: 'We invest continuously in next-generation medical aviation technology, telemedicine capabilities and sustainable aviation practices.',
    color: 'from-emerald-100 to-emerald-50',
    border: 'border-emerald-200 hover:border-emerald-400',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: '🤲',
    title: 'Accountability',
    body: 'Post-mission debriefs, clinical audits and patient outcome tracking ensure we always learn, improve and answer for every decision made.',
    color: 'from-rose-100 to-rose-50',
    border: 'border-rose-200 hover:border-rose-400',
    iconBg: 'bg-rose-100',
  },
]

export default function Values() {
  return (
    <section id="values" className="py-24 bg-[#F5EDE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/20 px-4 py-1.5 rounded-sm mb-4">
            Our Core Values
          </span>
          <h2 className="font-serif text-4xl md:text-[2.75rem] font-bold text-[#1C1C1E] leading-tight mb-4">
            What We Stand For
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9953A]" />
            <span className="w-2 h-2 rounded-full bg-[#C9953A]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9953A]" />
          </div>
          <p className="text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
            These six values are not aspirations — they are the operational standards by which every MedAir Global employee is trained and evaluated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className={`bg-gradient-to-br ${v.color} border ${v.border} rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
            >
              <div className={`w-12 h-12 ${v.iconBg} rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                {v.icon}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1C1C1E] mb-2 group-hover:text-[#C0392B] transition-colors">
                  {v.title}
                </h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}