"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15000, suffix: "+", label: "Missions Completed",   description: "Successful transports worldwide"    },
  { value: 180,   suffix: "+", label: "Countries Covered",    description: "Global operational reach"           },
  { value: 99,    suffix: "%", label: "Patient Satisfaction", description: "Based on post-transport surveys"     },
  { value: 21,    suffix: "",  label: "Years of Service",     description: "Trusted since 2003"                 },
  { value: 48,    suffix: "",  label: "Aircraft in Fleet",    description: "Fixed-wing and rotary wing"         },
  { value: 320,   suffix: "+", label: "Medical Specialists",  description: "Physicians, nurses, paramedics"     },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref   = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps    = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#c40000] mb-3">
            By The Numbers
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Proven Performance,{" "}
            <span className="italic text-[#c40000]">Global Scale</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden shadow-card">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white p-8 text-center hover:bg-red-50 transition-colors group"
            >
              <div className="font-display text-4xl sm:text-5xl font-black text-[#9f0000] mb-2 group-hover:text-[#c40000] transition-colors">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="font-semibold text-gray-900 text-base mb-1">{s.label}</div>
              <div className="text-xs text-gray-500">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}