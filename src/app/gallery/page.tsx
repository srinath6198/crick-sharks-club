import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/gallery`;

export const metadata: Metadata = {
  title: "Gallery | Cricket Training Photos | Crick Sharks Club",
  description:
    "Browse photos from Crick Sharks Club cricket training sessions, team activities and tournament moments in Amgondapalli, Hosur, Tamil Nadu.",
  keywords: [
    "Crick Sharks Club gallery",
    "cricket training photos Hosur",
    "cricket academy photos Amgondapalli",
    "cricket club Tamil Nadu photos",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Gallery | Cricket Training Photos | Crick Sharks Club",
    description:
      "Photos from Crick Sharks Club cricket training, team activities and tournament moments in Hosur, Tamil Nadu.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club Gallery" }],
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          webPageSchema({
            name: "Gallery | Cricket Training Photos | Crick Sharks Club",
            description:
              "Photos from Crick Sharks Club cricket training sessions and team activities in Hosur, Tamil Nadu.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Gallery", href: "/gallery" },
          ]),
        ]}
      />
      <Gallery />
    </main>
  );
}
