// components/testimonials/Testimonials.tsx
const testimonials = [
  {
    name: "Sarah Mitchell",
    review:
      "They coordinated my father’s international medical transfer seamlessly.",
  },
  {
    name: "James Carter",
    review:
      "Professional, compassionate, and incredibly responsive throughout.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-600">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Families Trust Aurevia
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[32px] bg-white p-10 shadow-xl"
            >
              <p className="text-lg leading-8 text-gray-600">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}