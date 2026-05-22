'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Board Members', href: '#board' },
  { label: 'Accreditations', href: '#accreditations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-[2.125rem] z-[900] border-b transition-all duration-300 ${
        scrolled
          ? 'border-[var(--ivory-dark)] bg-[rgba(253,248,242,0.97)] shadow-[0_2px_20px_rgba(0,0,0,0.07)]'
          : 'border-transparent bg-[rgba(253,248,242,0.82)]'
      } backdrop-blur-[14px]`}
    >
      <div className="mx-auto flex h-17 max-w-(--container) items-center gap-8 px-[clamp(1.25rem,4vw,2.5rem)]">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="text-2xl leading-none text-(--crimson)">
            ✚
          </span>

          <span>
            <span className="block font-[var(--font-display)] text-[1.375rem] font-extrabold leading-[1.1] tracking-[-0.01em] text-[var(--charcoal)]">
              MedAir
            </span>

            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] leading-none text-[var(--crimson)]">
              GLOBAL
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-[3px] px-3.5 py-2 text-sm font-medium text-[var(--slate)] transition-all duration-200 hover:bg-[rgba(192,57,43,0.06)] hover:text-[var(--crimson)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Emergency Call */}
        <a
          href="tel:+18005550199"
          className="hidden flex-shrink-0 items-center gap-1.5 rounded-[4px] bg-[var(--crimson)] px-5 py-2 text-[0.8125rem] font-semibold tracking-[0.03em] text-white transition-colors duration-200 hover:bg-[var(--crimson-deep)] lg:flex"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>

          Emergency Call
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="ml-auto flex flex-col gap-[5px] p-1 lg:hidden"
        >
          <span
            className={`block h-[2px] w-[22px] rounded bg-[var(--charcoal)] transition-all duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />

          <span
            className={`block h-[2px] w-[22px] rounded bg-[var(--charcoal)] transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block h-[2px] w-[22px] rounded bg-[var(--charcoal)] transition-all duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[var(--ivory-dark)] bg-[var(--ivory)] transition-all duration-300 lg:hidden ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--ivory-dark)] px-6 py-3.5 text-base font-medium text-[var(--slate)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="tel:+18005550199"
            className="px-6 py-4 text-[0.9375rem] font-semibold text-[var(--crimson)]"
          >
            📞 +1 (800) 555-0199
          </a>
        </div>
      </div>
    </header>
  );
}