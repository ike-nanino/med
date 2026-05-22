// components/services/Services.tsx
import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-600">
            Services
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Medical Transport Solutions
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}