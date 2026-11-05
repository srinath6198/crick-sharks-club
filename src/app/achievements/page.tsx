import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Medal, Award, Star, Target } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/achievements`;

export const metadata: Metadata = {
  title: "Cricket Tournament Achievements | Crick Sharks Club",
  description:
    "Crick Sharks Club has won 4 cricket tournaments in Bangalore. Explore our tournament victories and the dedication behind every win.",
  keywords: [
    "Crick Sharks Club achievements",
    "cricket tournament wins Bangalore",
    "cricket club achievements Tamil Nadu",
    "cricket tournament Hosur",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Cricket Tournament Achievements | Crick Sharks Club",
    description:
      "4 tournament wins in Bangalore. Explore Crick Sharks Club's cricket achievements and winning journey.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club Achievements" }],
  },
};

const achievements = [
  { number: "01", title: "Tournament Victory", location: "Bangalore", description: "A proud tournament win that reflects the team's hard work, preparation and determination." },
  { number: "02", title: "Tournament Victory", location: "Bangalore", description: "Another memorable victory earned through teamwork, discipline and commitment on the field." },
  { number: "03", title: "Tournament Victory", location: "Bangalore", description: "A special achievement showcasing the players' dedication and passion for cricket." },
  { number: "04", title: "Tournament Victory", location: "Bangalore", description: "A fourth tournament win and another proud milestone in the Crick Sharks Club journey." },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          webPageSchema({
            name: "Cricket Tournament Achievements | Crick Sharks Club",
            description: "Crick Sharks Club has won 4 cricket tournaments in Bangalore.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Achievements", href: "/achievements" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-400">
            <Trophy size={16} />
            OUR ACHIEVEMENTS
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Hard Work Creates
            <span className="block text-green-400">Winning Moments</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Every victory represents dedication, teamwork and the passion
            of our players. We are proud to celebrate four tournament wins
            in Bangalore.
          </p>
        </div>
      </section>

      {/* Counter */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-[#071B16] p-10 text-center text-white shadow-xl md:p-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white">
              <Trophy size={42} />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Tournament Victories
            </p>
            <h2 className="mt-3 text-7xl font-black text-white md:text-8xl">04</h2>
            <p className="mt-4 text-lg text-gray-300">Tournament wins in Bangalore</p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-600">Our Winning Journey</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] md:text-4xl">Four Victories, One Team</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#64748B]">
              Celebrating the tournament victories that make our club proud and motivate us to keep moving forward.
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.number}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-green-100">{achievement.number}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
                    <Trophy size={25} />
                  </div>
                </div>
                <h3 className="mt-7 text-xl font-bold text-[#0F172A]">{achievement.title}</h3>
                <p className="mt-2 text-sm font-semibold text-green-600">{achievement.location}</p>
                <p className="mt-4 text-sm leading-7 text-[#64748B]">{achievement.description}</p>
                <div className="mt-6 flex gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-green-600">Beyond Victories</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A]">What Makes Us Strong</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Dedication", description: "Consistent effort and focused practice help players improve every day." },
              { icon: Medal, title: "Teamwork", description: "Supporting one another and playing together are important parts of cricket." },
              { icon: Award, title: "Sportsmanship", description: "Respect, discipline and a positive attitude matter in every match." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-100 p-8 text-center transition hover:shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                    <Icon size={30} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#64748B]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-500 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Be Part of Our Winning Journey</h2>
          <p className="mt-5 leading-7 text-white/90">
            Learn, practise and grow with Crick Sharks Club. Your cricket journey could become our next proud achievement.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-8 py-4 font-bold text-white transition hover:bg-slate-900"
          >
            Join Crick Sharks Club
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
