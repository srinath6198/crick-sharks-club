import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import CollaboratingTeams from "@/components/CollaboratingTeams";
import Location from "@/components/Location";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, organizationSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Crick Sharks Club | Cricket Academy in Hosur, Tamil Nadu",
  description:
    "Crick Sharks Club — cricket academy in Dinnur, Amgondapalli, Hosur, Tamil Nadu. Offering kids, junior, advanced and professional cricket coaching. 4 tournament wins in Bangalore.",
  keywords: [
    "Crick Sharks Club",
    "cricket academy Hosur",
    "cricket coaching Hosur",
    "cricket training Hosur",
    "cricket academy Dinnur",
    "cricket academy near Dinnur",
    "cricket club Tamil Nadu",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    url: BASE_URL,
    title: "Crick Sharks Club | Cricket Academy in Hosur, Tamil Nadu",
    description:
      "Cricket academy in Dinnur,Amgondapalli, Hosur, Tamil Nadu. Kids, junior, advanced and professional cricket coaching. 4 tournament wins in Bangalore.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club team" }],
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[
          organizationSchema(),
          webPageSchema({
            name: "Crick Sharks Club | Cricket Academy in Hosur, Tamil Nadu",
            description:
              "Cricket academy in Dinnur,Amgondapalli, Hosur, Tamil Nadu offering kids, junior, advanced and professional cricket coaching.",
            url: BASE_URL,
          }),
        ]}
      />
      <Hero />
      <Programs />
      <Coaches />
      <Facilities />
      <Gallery />
      <Reviews />
      <CollaboratingTeams />
      <Location />
    </main>
  );
}
