// components/services/ServiceCard.tsx
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="mt-4 leading-7 text-gray-600">{description}</p>
      </div>
    </div>
  );
}