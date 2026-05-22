// components/gallery/Gallery.tsx
import Image from "next/image";

const images = [
    "/images/room.jpg",
    "/images/room.jpg",
    "/images/room.jpg",

];

export default function Gallery() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">Mission Gallery</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img}
              className="relative h-125 overflow-hidden rounded-4xl"
            >
              <Image
                src={img}
                alt="Gallery"
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}