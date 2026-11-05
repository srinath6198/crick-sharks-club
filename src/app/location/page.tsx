import type { Metadata } from "next";
import Location from "@/components/Location";

export const metadata: Metadata = {
  title: "Location | Crick Sharks Club",
  description:
    "Find Crick Sharks Club at Dinnur, A. Settipalli, Amgondapalli, Hosur, Tamil Nadu 635105. Get directions and visit us.",
};

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Location />
    </main>
  );
}
