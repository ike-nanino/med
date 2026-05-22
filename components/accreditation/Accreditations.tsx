// components/accreditation/Accreditations.tsx
const accreditations = [
  "FAA",
  "EURAMI",
  "CAMTS",
  "IATA",
  "HIPAA",
  "ICAO",
];

const airlines = [
  "Delta Air Lines",
  "Lufthansa",
  "Emirates",
  "Qatar Airways",
  "British Airways",
];

export default function Accreditations() {
  return (
    <section id="accreditations" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-orange-600">
          Trust & Compliance
        </p>

        <h2 className="mt-5 text-5xl font-bold">
          Accreditations & Airline Affiliations
        </h2>

        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {accreditations.map((item) => (
            <div
              key={item}
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-4 text-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-600">
          {airlines.map((airline) => (
            <div key={airline}>{airline}</div>
          ))}
        </div>
      </div>
    </section>
  );
}