import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About MedAir Global"
      className="bg-[var(--ivory-dark)] py-[var(--section-pad)]"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        {/* Imagery */}
        <div className="relative grid h-auto grid-cols-1 gap-4 sm:grid-cols-[3fr_2fr] lg:h-[500px]">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[8px]">
            <Image
              src="/images/room.jpg"
              alt="Paramedics with patient on stretcher"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Stack */}
          <div className="hidden h-full flex-col gap-4 sm:flex">
            <Image
              src="/images/room.jpg"
              fill
              alt="Patient being loaded onto aircraft"
              loading="lazy"
              className="h-[60%] w-full rounded-[8px] object-cover"
            />

            <div className="flex flex-1 flex-col items-center justify-center rounded-[8px] bg-[var(--crimson)] p-5 text-center">
              <span className="font-[var(--font-display)] text-[2.75rem] font-extrabold leading-none text-white">
                25+
              </span>

              <span className="mt-1 text-[0.8125rem] font-semibold uppercase tracking-[0.07em] text-white/80">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="label-tag">About MedAir Global</span>

          <h2 className="section-heading">
            A Legacy of Care,
            <br />A Future of Excellence
          </h2>

          <div className="divider">
            <span />
          </div>

          <p className="text-base leading-[1.8] text-[var(--slate)]">
            Founded in 1999, MedAir Global has grown from a regional ground
            ambulance operator into one of the world's most trusted medical
            transport networks.
          </p>

          <p className="mt-4 text-base leading-[1.8] text-[var(--slate)]">
            Our multidisciplinary team of critical care paramedics, flight
            nurses, emergency physicians, and logistics coordinators works
            around the clock.
          </p>

          {/* Features */}
          <ul className="mt-7 flex flex-col gap-2.5">
            {[
              "CAMTS & EURAMI accredited operations",
              "Dedicated 24/7 command & coordination centre",
              "Medical directors on call in every region",
              "Full insurance liaison and billing support",
              "Customs & immigration clearance assistance",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-[0.9375rem] text-[var(--charcoal)]"
              >
                <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(192,57,43,0.1)] text-[0.7rem] font-bold text-[var(--crimson)]">
                  ✓
                </span>

                {f}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary mt-8 inline-flex">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
