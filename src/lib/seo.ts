export const BASE_URL = "https://cricksharksclub.com";

export const BUSINESS = {
  name: "Crick Sharks Club",
  alternateName: "Crick Sharks Cricket Academy",
  description:
    "Cricket academy in Dinnur, Amgondapalli, Hosur, Tamil Nadu offering kids, junior, advanced and professional cricket coaching programs.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/teams.webp`,
  image: `${BASE_URL}/images/teams.webp`,
  address: {
    streetAddress: "Dinnur, A. Settipalli, Amgondapalli",
    addressLocality: "Hosur",
    addressRegion: "Tamil Nadu",
    postalCode: "635105",
    addressCountry: "IN",
  },
  geo: { latitude: "12.7409", longitude: "77.8253" },
  sameAs: [
    "https://www.instagram.com/cricsharks/",
    "https://www.facebook.com/cricsharks",
    "https://www.youtube.com/@cricsharks",
  ],
};

export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/teams.webp`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsClub", "LocalBusiness"],
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    sameAs: BUSINESS.sameAs,
    sport: "Cricket",
    areaServed: ["Hosur", "Amgondapalli", "Dinnur", "Tamil Nadu", "Bangalore"],
    keywords:
      "cricket academy, cricket coaching, cricket training, Hosur, Amgondapalli, Dinnur, Tamil Nadu",
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function webPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: { "@type": "WebSite", url: BASE_URL, name: BUSINESS.name },
  };
}
