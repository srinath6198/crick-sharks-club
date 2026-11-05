import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, BUSINESS, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: "Contact Us | Cricket Academy Hosur | Crick Sharks Club",
  description:
    "Contact Crick Sharks Club in Dinnur, Hosur, Tamil Nadu for cricket coaching enquiries, training information and academy enrollment.",
  keywords: [
    "contact Crick Sharks Club",
    "cricket academy contact Hosur",
    "cricket coaching enquiry Tamil Nadu",
    "join cricket academy Amgondapalli",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Contact Us | Cricket Academy Hosur | Crick Sharks Club",
    description:
      "Get in touch with Crick Sharks Club in Dinnur, Hosur, Tamil Nadu for cricket coaching and enrollment enquiries.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Contact Crick Sharks Club" }],
  },
};

const contactDetails = [
  { icon: MapPin, title: "Our Location", value: "Dinnur, Hosur, Tamil Nadu 635105", description: "Visit Crick Sharks Club" },
  { icon: Phone, title: "Call Us", value: "91+ 8523922562", description: "Speak with our team" },
  { icon: Mail, title: "Email", value: "info@cricsharks.com", description: "Send us your enquiries" },
  { icon: Clock, title: "Training Enquiries", value: "24/7", description: "Ask about available training schedules" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          webPageSchema({
            name: "Contact Crick Sharks Club | Cricket Academy Hosur",
            description:
              "Contact Crick Sharks Club in Dinnur, Hosur, Tamil Nadu for cricket coaching enquiries.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": ["SportsClub", "LocalBusiness"],
            name: BUSINESS.name,
            url: BUSINESS.url,
            address: { "@type": "PostalAddress", ...BUSINESS.address },
            geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
            sameAs: BUSINESS.sameAs,
            sport: "Cricket",
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-block rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-400">
            GET IN TOUCH
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Let's Start Your
            <span className="block text-green-400">Cricket Journey</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Interested in cricket coaching or joining our academy?
            Contact Crick Sharks Club and take the next step towards
            developing your cricket skills.
          </p>
          <Link
            href="#contact-details"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-600"
          >
            Contact Information
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact Cards */}
      <section id="contact-details" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-600">Contact Information</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] md:text-4xl">We'd Love to Hear From You</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#64748B]">
              Reach out to us for information about cricket training, enrollment and the club.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon size={27} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-3 font-semibold text-green-600">{item.value}</p>
                  <p className="mt-2 text-sm text-[#64748B]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location and Enquiry */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-green-600">Find Us</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A]">Visit Crick Sharks Club</h2>
            <p className="mt-5 leading-8 text-[#64748B]">
              Find us at Dinnur, near Hosur, Tamil Nadu. We welcome
              enquiries from aspiring cricketers and families interested
              in learning more about our club.
            </p>
            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <MapPin size={25} />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A]">Crick Sharks Club</h3>
                <p className="mt-2 text-sm leading-7 text-[#64748B]">
                  PXMP+R3, Dinnur, A, Settipalli, Amgondapalli, Tamil Nadu 635105
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Crick+Sharks+Club+Dinnur+Amgondapalli+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700"
                >
                  Get Directions
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Crick Sharks Club location map"
                src="https://www.google.com/maps?q=PXMP%2BR3%2C%20Dinnur%2C%20Amgondapalli%2C%20Tamil%20Nadu%20635105&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-3xl bg-[#071B16] p-8 text-white shadow-xl md:p-10">
            <span className="text-sm font-bold uppercase tracking-widest text-green-400">Enquiry</span>
            <h2 className="mt-3 text-3xl font-extrabold">Interested in Joining?</h2>
            <p className="mt-4 leading-7 text-gray-300">
              Contact our club to ask about training programs, enrollment and available coaching information.
            </p>
            <div className="mt-8 space-y-5">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <MessageCircle className="text-green-400" size={28} />
                <h3 className="mt-4 text-lg font-bold">WhatsApp Enquiry</h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Send us a message to enquire about joining Crick Sharks Club.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <Mail className="text-green-400" size={28} />
                <h3 className="mt-4 text-lg font-bold">Training Enquiry</h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Get in touch to learn more about training opportunities and the club.
                </p>
              </div>
            </div>
            <Link
              href="/programs"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Explore Training Programs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-500 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Your Cricket Journey Starts Here</h2>
          <p className="mt-5 leading-7 text-white/90">
            Connect with Crick Sharks Club and take your first step towards learning and improving your cricket skills.
          </p>
          <Link
            href="/academy"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-8 py-4 font-bold text-white transition hover:bg-slate-900"
          >
            Explore Our Academy
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
