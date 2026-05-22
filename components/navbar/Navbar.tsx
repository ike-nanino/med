// components/navbar/Navbar.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-orange-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold text-orange-700">
          Aurevia
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#accreditations">Accreditations</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <button className="rounded-full bg-orange-600 px-5 py-3 text-white transition hover:bg-orange-700">
          Request Transport
        </button>

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}