import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, Dumbbell, Target, Trophy, Users, Shield, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/facilities`;

export const metadata: Metadata = {
  title: "Cricket Training Facilities | Crick Sharks Club Hosur",
  description:
    "Explore the cricket training facilities at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu — practice areas, fitness training, skill development and team sessions.",
  keywords: [
    "cricket training facilities Hosur",
    "cricket practice area Amgondapalli",
    "cricket club facilities Tamil Nadu",
    "cricket fitness training Hosur",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Cricket Training Facilities | Crick Sharks Club Hosur",
    description:
      "Cricket practice areas, fitness training and skill development at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club Facilities" }],
  },
};

const facilities = [
  { icon: Target, title: "Cricket Practice Area", description: "A dedicated environment for players to practice batting, bowling, fielding and essential cricket skills.", features: ["Batting practice", "Bowling practice", "Fielding drills", "Skill development"] },
  { icon: Trophy, title: "Match Practice", description: "Practice sessions designed to help players apply their skills in realistic cricket situations.", features: ["Game situations", "Match preparation", "Game awareness", "Team practice"] },
  { icon: Dumbbell, title: "Fitness Training", description: "Physical training activities that support movement, agility, coordination and cricket performance.", features: ["Agility training", "Movement exercises", "Coordination", "Fitness development"] },
  { icon: Activity, title: "Skill Development", description: "Focused practice sessions that help players develop their cricket techniques and consistency.", features: ["Batting skills", "Bowling skills", "Fielding skills", "Technical practice"] },
  { icon: Users, title: "Team Training", description: "Group-based training that encourages teamwork, communication and sportsmanship.", features: ["Team activities", "Group practice", "Communication", "Teamwork"] },
  { icon: Shield, title: "Player Development", description: "A supportive training environment where players can learn, practice and continue improving.", features: ["Regular practice", "Skill improvement", "Confidence building", "Sports discipline"] },
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          webPageSchema({
            name: "Cricket Training Facilities | Crick Sharks Club Hosur",
            description:
              "Cricket practice areas, fitness training and skill development at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Facilities", href: "/facilities" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-700/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-green-400">Crick Sharks Club</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Train. Practice.{" "}
            <span className="text-green-400">Improve.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore the training environment at Crick Sharks Club, designed
            to help players practice their cricket skills and continue their development.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600">
            Enquire About Training
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-600">Our Facilities</p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">A Place to Develop Your Cricket</h2>
          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Our training environment provides players with opportunities to practice important cricket skills,
            work with teammates and develop their game through consistent training.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <article key={facility.title} className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition duration-300 group-hover:bg-green-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-[#0F172A]">{facility.title}</h3>
                  <p className="mt-4 leading-7 text-[#64748B]">{facility.description}</p>
                  <ul className="mt-6 space-y-3">
                    {facility.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium text-[#334155]">
                        <CheckCircle2 size={18} className="shrink-0 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Environment */}
      <section className="bg-[#071B16] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-green-400">Training Environment</p>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Practice With Purpose</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Consistent practice is an important part of cricket development. Our training sessions help
                players work on individual skills while also learning to perform as part of a team.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <Target className="text-green-400" size={26} />
                  <h3 className="mt-3 font-bold">Focused Practice</h3>
                  <p className="mt-2 text-sm text-slate-400">Work on specific cricket skills through focused training.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <Users className="text-green-400" size={26} />
                  <h3 className="mt-3 font-bold">Team Development</h3>
                  <p className="mt-2 text-sm text-slate-400">Develop teamwork and communication through group sessions.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-green-500 p-8 md:p-12">
              <Trophy className="text-white" size={48} />
              <h3 className="mt-6 text-3xl font-extrabold">Build Your Cricket Skills</h3>
              <p className="mt-4 leading-7 text-green-50">
                From fundamental skills to regular practice, create a strong foundation for your cricket journey.
              </p>
              <Link href="/programs" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-6 py-3.5 font-bold text-white transition hover:bg-slate-900">
                View Training Programs
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#F8FAFC] p-8 text-center md:p-12">
          <p className="font-bold uppercase tracking-[0.25em] text-green-600">Crick Sharks Club</p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">Ready to Start Training?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#64748B]">
            Contact Crick Sharks Club to learn more about our facilities, training programs and available practice sessions.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-7 py-4 font-bold text-white transition hover:bg-green-600">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
