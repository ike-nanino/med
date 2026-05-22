// components/values/Values.tsx
const values = [
  "Compassion First",
  "Clinical Excellence",
  "Rapid Response",
  "Global Reach",
  "Safety & Compliance",
  "Family-Centered Care",
];

export default function Values() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-600">
            Company Values
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Built Around Compassion & Safety
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-[28px] bg-white p-10 shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}