import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Shield, Target, Users } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/coaches`;

export const metadata: Metadata = {
  title: "Cricket Coaches in Hosur | Crick Sharks Club",
  description:
    "Meet the cricket coaches at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu — Guruprasad (Bowling Coach) and Harshavardhan (Batting Coach).",
  keywords: [
    "cricket coaches Hosur",
    "cricket coaching Amgondapalli",
    "batting coach Hosur",
    "bowling coach Tamil Nadu",
    "Crick Sharks Club coaches",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Cricket Coaches in Hosur | Crick Sharks Club",
    description:
      "Meet Guruprasad and Harshavardhan — cricket coaches at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club Coaches" }],
  },
};

const coaches = [
  {
    name: "Guruprasad",
    role: "Bowling Coach",
    description:
      "Focused on developing bowling fundamentals, accuracy, consistency and confidence.",
    skills: ["Bowling Technique", "Line & Length", "Accuracy", "Bowling Practice"],
  },
  {
    name: "Harshavardhan",
    role: "Batting Coach",
    description:
      "Focused on helping players develop batting fundamentals, technique, timing and shot selection.",
    skills: ["Batting Technique", "Footwork", "Shot Selection", "Batting Practice"],
  },
];

const players = [
  "Suresh", "Namo", "Srinath M", "Harish", "Mohan",
  "Narashima", "Sunil", "Venky", "Moorthy", "Monohar",
];

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          webPageSchema({
            name: "Cricket Coaches in Hosur | Crick Sharks Club",
            description:
              "Meet the cricket coaches at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Coaches", href: "/coaches" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cricket Coaches at Crick Sharks Club",
            itemListElement: coaches.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                name: c.name,
                jobTitle: c.role,
                worksFor: { "@type": "SportsClub", name: "Crick Sharks Club" },
              },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-green-700/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-green-400">Our Team</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Meet Our{" "}
            <span className="text-green-400">Cricket Coaches</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Meet the coaches and players of Crick Sharks Club. Our training
            focuses on building cricket skills through practice, discipline
            and teamwork.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-600">Coaching Team</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">
              Learn From Dedicated Coaches
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#64748B]">
              Our coaches focus on helping players strengthen their batting,
              bowling and overall cricket skills.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {coaches.map((coach) => (
              <article
                key={coach.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-64 items-center justify-center bg-[#071B16]">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-green-400 bg-green-500/10">
                    <Users size={48} className="text-green-400" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                    <Award size={16} />
                    {coach.role}
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold text-[#0F172A]">{coach.name}</h3>
                  <p className="mt-4 leading-7 text-[#64748B]">{coach.description}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {coach.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-sm font-medium text-[#334155]">
                        <CheckCircle2 size={17} className="shrink-0 text-green-500" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Skill Development", desc: "Focused practice to help players improve their batting, bowling and fielding skills." },
              { icon: Shield, title: "Discipline", desc: "Encouraging players to build consistency, discipline and a positive approach to training." },
              { icon: Users, title: "Teamwork", desc: "Developing communication, teamwork and sportsmanship both on and off the cricket field." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Icon size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-3 leading-7 text-[#64748B]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Players */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-600">Our Players</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">
              Crick Sharks Club Players
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
              Our players train together, develop their skills and grow
              through regular cricket practice.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player, index) => (
              <div
                key={player}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-green-400 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 transition group-hover:bg-green-500 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-lg font-bold text-[#0F172A]">{player}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071B16] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-400">Join Crick Sharks Club</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Ready to Improve Your Cricket?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Get in touch with Crick Sharks Club to learn more about our cricket training programs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
