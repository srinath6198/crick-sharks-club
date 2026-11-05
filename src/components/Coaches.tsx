import Image from "next/image";

const coaches = [
  { name: "Guruprasad", role: "Bowling Coach", image: "/images/guruprasad.webp" },
  { name: "Harshavardhan", role: "Batting Coach", image: "/images/harshavardhan.jpg" },
];

export default function Coaches() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold text-[#071B16]">Our Coaches</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <div key={coach.name} className="overflow-hidden rounded-2xl bg-white shadow">
              <div className="relative h-72 w-full">
                <Image src={coach.image} alt={coach.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-[#071B16]">{coach.name}</p>
                <p className="text-sm text-gray-500">{coach.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
