'use client';

export default function EmergencyBar() {
  return (
    <div className="sticky top-0 z-[1000] bg-[var(--charcoal)] py-2 text-[0.8125rem] text-white">
      <div className="mx-auto flex max-w-[var(--container)] items-center gap-4 px-[clamp(1.25rem,4vw,2.5rem)]">
        
        {/* Pulse Dot */}
        <span
          aria-hidden="true"
          className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[var(--crimson-light)]"
        />

        {/* Contact Info */}
        <p className="flex-1 text-center text-[rgba(255,255,255,0.82)]">
          <strong>24/7 Emergency Line:</strong>{' '}
          
          <a
            href="tel:+18005550199"
            className="font-semibold text-[var(--amber-light)] transition-colors duration-200 hover:text-white"
          >
            +1 (800) 555-0199
          </a>

          {' · '}

          <a
            href="tel:+442071234567"
            className="font-semibold text-[var(--amber-light)] transition-colors duration-200 hover:text-white"
          >
            +44 207 123 4567
          </a>
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="flex-shrink-0 rounded-[3px] bg-[var(--crimson)] px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-[var(--crimson-deep)]"
        >
          Request Transport
        </a>
      </div>
    </div>
  );
}