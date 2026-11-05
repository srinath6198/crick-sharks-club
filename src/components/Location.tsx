
import Link from "next/link";
import {
  MapPin,
  Navigation,
  Map,
  ArrowRight,
  LocateFixed,
} from "lucide-react";

export default function Location() {
  const address =
    "Dinnur, A. Settipalli, Amgondapalli, Hosur, Tamil Nadu 635105";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=PXMP%2BR3%2C+Dinnur%2C+Settipalli%2C+Amgondapalli%2C+Tamil+Nadu+635105";

  const embedUrl =
    "https://www.google.com/maps?q=PXMP%2BR3%2C+Dinnur%2C+Settipalli%2C+Amgondapalli%2C+Tamil+Nadu+635105&output=embed";

  return (
    <section className="bg-[#F8FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-600">
            Our Location
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#071B16] md:text-4xl">
            Find Crick Sharks Club
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Visit us at Dinnur, near Hosur, Tamil Nadu. Connect with our
            cricket community and learn more about our training programs.
          </p>
        </div>

        {/* Location Content */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-lg lg:grid-cols-2">
          {/* Map */}
          <div className="relative min-h-[350px] lg:min-h-[480px]">
            <iframe
              title="Crick Sharks Club Google Maps location"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>

          {/* Address Details */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <MapPin size={32} />
            </div>

            <h3 className="mt-7 text-2xl font-extrabold text-[#071B16]">
              Crick Sharks Club
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {address}
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <LocateFixed size={20} className="text-green-600" />
                <span>Located near Hosur, Tamil Nadu</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Map size={20} className="text-green-600" />
                <span>Find our club on Google Maps</span>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3.5 font-bold text-white transition hover:bg-green-600"
              >
                <Navigation size={18} />
                Get Directions
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#071B16] px-6 py-3.5 font-bold text-[#071B16] transition hover:bg-[#071B16] hover:text-white"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
