
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Trophy,
  Camera,
  Share2,
  Play,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academy", href: "/academy" },
  { label: "Training Programs", href: "/programs" },
  { label: "Our Coaches", href: "/coaches" },
  { label: "Facilities", href: "/facilities" },
];

const exploreLinks = [
  { label: "Achievements", href: "/achievements" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071B16] px-6 pb-6 pt-16 text-slate-400">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-extrabold tracking-wide text-white">
                CRICK <span className="text-green-400">SHARKS</span>
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-green-400">
                CLUB
              </p>
            </Link>

            <p className="mt-6 text-sm leading-7">
              Developing cricket skills, encouraging teamwork and
              inspiring players to keep learning and improving.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/cricsharks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-green-500 hover:text-white"
              >
                <Camera size={19} />
              </a>

              <a
                href="https://www.facebook.com/cricsharks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-green-500 hover:text-white"
              >
                <Share2 size={19} />
              </a>

              <a
                href="https://www.youtube.com/@cricsharks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-green-500 hover:text-white"
              >
                <Play size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-green-400"
                  >
                    <ArrowRight size={14} className="text-green-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Explore More
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-green-400"
                  >
                    <ArrowRight size={14} className="text-green-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Find Our Club
            </h3>

            <div className="mt-6 flex items-start gap-3">
              <MapPin
                size={22}
                className="mt-1 shrink-0 text-green-400"
              />

              <p className="text-sm leading-7">
                Dinnur, A. Settipalli,
                Amgondapalli, Hosur,
                Tamil Nadu – 635105
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=PXMP%2BR3%2C+Dinnur%2C+Amgondapalli%2C+Tamil+Nadu+635105"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-400 transition hover:text-green-300"
            >
              View Location
              <ArrowRight size={16} />
            </a>

            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
            >
              Contact Our Club
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="flex flex-col items-center justify-center gap-3 border-b border-white/10 py-7 text-center sm:flex-row">
          <Trophy size={21} className="text-green-400" />
          <p className="text-sm">
            Celebrating <span className="font-bold text-green-400">4 tournament wins</span> in Bangalore.
          </p>
          <Link
            href="/achievements"
            className="text-sm font-bold text-white transition hover:text-green-400"
          >
            View Achievements →
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center text-xs sm:flex-row">
          <p>
            © 2025 Crick Sharks Club. All rights reserved.
          </p>

          <p>
            Built with passion for cricket.
          </p>
        </div>
      </div>
    </footer>
  );
}
