"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/night-helicopter.jpg"
          alt="Air ambulance flying over city at dusk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Ambulance flash keyframes injected once */}
      <style>{`
        @keyframes ambulanceFlash {
          0%, 49% {
            color: #ffffff;
            text-shadow:
              0 0 12px rgba(255, 255, 255, 0.9),
              0 0 30px rgba(255, 255, 255, 0.5);
          }
          50%, 100% {
            color: #ff2020;
            text-shadow:
              0 0 12px rgba(255, 32, 32, 0.9),
              0 0 30px rgba(255, 32, 32, 0.5),
              0 0 60px rgba(255, 32, 32, 0.3);
          }
        }

        .ambulance-flash {
          animation: ambulanceFlash 0.6s steps(1) infinite;
          display: inline-block;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="max-w-2xl">

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up">
            When Every{" "}
            <span className="ambulance-flash italic">Second</span>
            <br />
            Counts
          </h1>

          <p
            className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            MedAir Global delivers rapid, compassionate medical transport across
            180+ countries. From ICU-equipped air ambulances to ground
            coordination — we bring clinical excellence to wherever you need us.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href="tel:+18005550911"
              className="inline-flex items-center justify-center gap-2 bg-[#9f0000] hover:bg-[#c40000] text-white px-8 py-4 rounded-full font-bold text-base shadow-warm-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              <Phone size={18} />
              Call Emergency Line
            </a>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}