import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, organizationSchema } from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Crick Sharks Club | Cricket Academy in Hosur, Tamil Nadu",
    template: "%s | Crick Sharks Club",
  },
  description:
    "Crick Sharks Club is a cricket academy in Amgondapalli, Hosur, Tamil Nadu offering kids, junior, advanced and professional cricket coaching programs.",
  keywords: [
    "Crick Sharks Club",
    "cricket academy Hosur",
    "cricket coaching Hosur",
    "cricket training Hosur",
    "cricket academy Dinnur",
    "cricket academy near Dinnur",
    "cricket club Tamil Nadu",
    "kids cricket training",
    "junior cricket coaching",
  ],
  authors: [{ name: "Crick Sharks Club", url: BASE_URL }],
  creator: "Crick Sharks Club",
  publisher: "Crick Sharks Club",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Crick Sharks Club",
    title: "Crick Sharks Club | Cricket Academy in Hosur, Tamil Nadu",
    description:
      "Cricket academy in Amgondapalli, Hosur, Tamil Nadu. Kids, junior, advanced and professional cricket coaching programs.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crick Sharks Club | Cricket Academy in Hosur, Tamil Nadu",
    description:
      "Cricket academy in Amgondapalli, Hosur, Tamil Nadu. Kids, junior, advanced and professional cricket coaching.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  // Replace <YOUR_VERIFICATION_CODE> with the actual code from Google Search Console
  // verification: { google: "<YOUR_VERIFICATION_CODE>" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationSchema()} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
