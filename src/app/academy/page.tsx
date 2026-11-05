import type { Metadata } from "next";
import AcademyPage from "./Academy";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/academy`;

export const metadata: Metadata = {
  title: "Cricket Academy in Dinnur, Amgondapalli, Hosur | Crick Sharks Club",
  description:
    "Crick Sharks Club cricket academy in Dinnur, Amgondapalli, Hosur, Tamil Nadu. Kids, junior, advanced and professional cricket training programs.",
  keywords: [
    "cricket academy Dinnur Amgondapalli",
    "cricket academy Hosur",
    "cricket training near Dinnur",
    "kids cricket training Tamil Nadu",
    "junior cricket coaching Hosur",
    "advanced cricket training",
    "professional cricket coaching Tamil Nadu",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Cricket Academy in Dinnur, Amgondapalli, Hosur | Crick Sharks Club",
    description:
      "Kids, junior, advanced and professional cricket training at Crick Sharks Club, Dinnur, Amgondapalli, Hosur, Tamil Nadu.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club Academy" }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Cricket Academy in Dinnur, Amgondapalli, Hosur | Crick Sharks Club",
            description:
              "Kids, junior, advanced and professional cricket training at Crick Sharks Club, Dinnur, Amgondapalli, Hosur, Tamil Nadu.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Academy", href: "/academy" },
          ]),
        ]}
      />
      <AcademyPage />
    </>
  );
}
