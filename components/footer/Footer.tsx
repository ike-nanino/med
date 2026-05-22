// components/footer/Footer.tsx
export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1f2937] py-20 text-gray-300"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Aurevia
          </h2>

          <p className="mt-6 leading-7">
            Worldwide medical transport and critical care aviation services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Services
          </h3>

          <ul className="mt-6 space-y-3">
            <li>Air Ambulance</li>
            <li>Medical Escorts</li>
            <li>Ground Ambulance</li>
            <li>Stretcher Flights</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <ul className="mt-6 space-y-3">
            <li>+1 (800) 555-0112</li>
            <li>support@aurevia.com</li>
            <li>24/7 Emergency Coordination</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Accreditations
          </h3>

          <ul className="mt-6 space-y-3">
            <li>FAA</li>
            <li>CAMTS</li>
            <li>IATA</li>
            <li>HIPAA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}