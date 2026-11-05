import type { Metadata } from "next";
import {
  Target, Eye, Trophy, Users,
  GraduationCap, ShieldCheck, Heart, ArrowRight,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Us | Cricket Academy in Dinnur, Amgondapalli, Hosur",
  description:
    "Learn about Crick Sharks Club — a cricket academy in Dinnur, Amgondapalli, Hosur, Tamil Nadu. Our mission, vision, values and coaching philosophy.",
  keywords: [
    "about Crick Sharks Club",
    "cricket academy Dinnur",
    "cricket club Hosur Tamil Nadu",
    "cricket coaching philosophy",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "About Crick Sharks Club | Cricket Academy in Dinnur, Amgondapalli",
    description:
      "Discover Crick Sharks Club — cricket academy in Dinnur, Amgondapalli, Hosur, Tamil Nadu. Our mission, vision and coaching values.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "About Crick Sharks Club" }],
  },
};

const values = [
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We encourage every player to improve their cricketing skills and achieve their personal best.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    description:
      "We develop discipline, teamwork, dedication and sportsmanship on and off the field.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We create an environment where young cricketers can enjoy the game and develop their passion.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We believe that strong teams are built through trust, communication and mutual respect.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={[
          webPageSchema({
            name: "About Crick Sharks Club | Cricket Academy in Dinnur, Amgondapalli",
            description:
              "Learn about Crick Sharks Club — cricket academy in Dinnur, Amgondapalli, Hosur, Tamil Nadu.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071b16] px-6 py-28 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 font-semibold uppercase tracking-[0.3em] text-green-400">
            About Our Academy
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Building Champions,
            <span className="block text-green-400">
              One Ball at a Time.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Welcome to Crick Sharks Club, where passion meets
            performance. We aim to help aspiring cricketers
            develop their skills, confidence and love for cricket.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600"
          >
            Join Our Academy
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div className="relative">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-[#e9f3ec]">
              <div className="text-center">
                <Trophy className="mx-auto h-24 w-24 text-green-700" />
                <p className="mt-4 text-xl font-bold text-green-900">
                  CRICK SHARKS CLUB
                </p>
                <p className="mt-2 text-sm text-green-800">
                  Passion • Practice • Performance
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-green-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              More Than a Cricket Academy
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Crick Sharks Club is a cricket club based in
              Dinnur, Tamil Nadu. Our goal is to provide
              aspiring players with opportunities to learn,
              practice and improve their cricketing abilities.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We believe cricket teaches more than just batting
              and bowling. It builds confidence, discipline,
              leadership and teamwork.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our focus is to create a positive sporting
              environment where players can grow and enjoy
              every moment of the game.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-widest text-green-600">
              Our Purpose
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Mission & Vision
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-green-100 bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Target size={30} />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 leading-8 text-slate-600">
                To encourage and develop aspiring cricketers
                through quality training, regular practice,
                discipline and a strong sporting mindset.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Eye size={30} />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 leading-8 text-slate-600">
                To build a supportive cricketing community
                that inspires young talent to pursue their
                sporting dreams and become responsible athletes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-widest text-green-600">
              What Makes Us Different
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              The values that guide our players and shape our
              cricketing community.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071b16] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-bold uppercase tracking-widest text-green-400">
              Start Your Journey
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Every Great Cricketer Starts Somewhere.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Take the first step towards your cricketing
              journey with Crick Sharks Club.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-green-500 px-7 py-4 font-bold transition hover:bg-green-600"
          >
            Contact Us
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
