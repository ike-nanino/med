// components/about/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <Image
            src="/images/room.jpg"
            alt="Board meeting"
            width={800}
            height={800}
            className="rounded-[40px] shadow-2xl"
          />
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-600">
            About Us
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight">
            Trusted Global Medical Aviation Specialists
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            For over two decades, Aurevia Medical Transport has coordinated
            compassionate and medically supervised transport missions across the
            globe.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-orange-600">20+</h3>
              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-600">85+</h3>
              <p className="mt-2 text-gray-600">Countries Served</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-600">15k+</h3>
              <p className="mt-2 text-gray-600">Missions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}