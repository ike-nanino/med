// components/board/BoardSection.tsx
import Image from "next/image";

export default function BoardSection() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-600">
            Leadership
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Experienced Medical & Aviation Leadership
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Our executive leadership team combines decades of expertise in
            emergency medicine, aviation operations, and international logistics.
          </p>
        </div>

        <Image
          src="/images/room.jpg"
          alt="Executives"
          width={900}
          height={900}
          className="rounded-[40px] shadow-2xl"
        />
      </div>
    </section>
  );
}