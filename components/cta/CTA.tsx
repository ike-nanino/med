// components/cta/CTA.tsx
export default function CTA() {
  return (
    <section className="bg-orange-600 py-28 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-5xl font-bold leading-tight">
          Need Immediate Medical Transport Assistance?
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-full bg-white px-8 py-4 font-semibold text-orange-600">
            Call Emergency Line
          </button>

          <button className="rounded-full border border-white px-8 py-4">
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
}