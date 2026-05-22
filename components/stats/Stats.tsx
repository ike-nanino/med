// components/stats/Stats.tsx
const stats = [
  {
    number: "15,000+",
    label: "Missions",
  },
  {
    number: "85+",
    label: "Countries",
  },
  {
    number: "24/7",
    label: "Coordination",
  },
  {
    number: "98%",
    label: "Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-orange-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-6xl font-bold text-orange-600">
              {stat.number}
            </h2>

            <p className="mt-4 text-lg text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}