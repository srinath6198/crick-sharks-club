import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";

const images = [
  "/images/Gallery/team.webp",
  "/images/Gallery/teampic.webp",
  "/images/Gallery/team1.webp",
  "/images/Gallery/IMG_9862.webp",
  "/images/Gallery/srinath.webp",
  "/images/Gallery/9a95be99-05fc-48fe-8b79-845976fd3978.jpg",
  "/images/Gallery/9cddab07-28fe-4949-94d7-63845366a157.jpg",
  "/images/Gallery/9e302315-77e9-4839-b0ee-80bb38e06948.jpg",
  "/images/Gallery/9e302315-77e9-4839-b0ee-80bb38e06948 (1).jpg",
  "/images/Gallery/a9a7dbac-e951-4bec-8a94-0c11da7ba37b.jpg",
  "/images/Gallery/IMG_5813.JPG",
  "/images/Gallery/teampic.JPG",
  "/images/Gallery/srinath cri.jpeg",
  "/images/Gallery/team.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-green-600">
              Our Memories
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071B16] md:text-4xl">
              Life at Crick Sharks Club
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Explore moments from our cricket journey, team activities,
              training sessions and tournament celebrations.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
            <Camera size={20} />
            Our Photo Gallery
          </div>
        </div>

        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((src) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-2xl bg-[#071B16] shadow-sm"
            >
              <Image
                src={src}
                alt="Crick Sharks Club"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B16]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-[#071B16] px-8 py-10 text-center text-white md:px-12">
          <h3 className="text-2xl font-extrabold md:text-3xl">
            Every Picture Tells a Story
          </h3>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            From practice sessions to tournament victories, every moment
            is part of our cricket journey.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-600"
          >
            Join Our Club
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
