import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, BookOpen, Target, Dumbbell, Trophy, Shield } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/blog`;

export const metadata: Metadata = {
  title: "Cricket Blog | Tips, Training & News | Crick Sharks Club",
  description:
    "Cricket tips, batting and bowling techniques, fitness advice and player development articles from Crick Sharks Club in Dinnur, Hosur, Tamil Nadu.",
  keywords: [
    "cricket tips Hosur",
    "cricket training advice Tamil Nadu",
    "batting tips cricket",
    "bowling tips cricket",
    "cricket fitness training",
    "cricket player development",
    "Crick Sharks Club blog",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Cricket Blog | Tips, Training & News | Crick Sharks Club",
    description:
      "Cricket tips, batting and bowling techniques, fitness advice from Crick Sharks Club, Hosur, Tamil Nadu.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club Blog" }],
  },
};

const articles = [
  { category: "Batting Tips", title: "5 Essential Batting Skills Every Beginner Should Learn", description: "Learn the fundamentals of batting, including grip, stance, balance, footwork and shot selection.", icon: Target, readTime: "5 min read" },
  { category: "Bowling Tips", title: "How to Improve Your Bowling Accuracy", description: "Understand the importance of line, length, consistency and practice when developing your bowling skills.", icon: Trophy, readTime: "6 min read" },
  { category: "Fitness", title: "Why Fitness Is Important for Every Cricketer", description: "Discover how stamina, strength, flexibility and agility can support your overall cricket performance.", icon: Dumbbell, readTime: "4 min read" },
  { category: "Fielding", title: "Improve Your Fielding Skills with Regular Practice", description: "Explore the basics of catching, throwing, ground fielding and quick movement on the field.", icon: Shield, readTime: "5 min read" },
  { category: "Player Development", title: "Building Confidence and Discipline in Cricket", description: "Learn how consistency, teamwork, patience and a positive attitude contribute to player development.", icon: BookOpen, readTime: "4 min read" },
  { category: "Training Advice", title: "How to Make Your Cricket Practice More Effective", description: "Use focused practice sessions and clear goals to improve your cricket skills step by step.", icon: Target, readTime: "5 min read" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          webPageSchema({
            name: "Cricket Blog | Tips, Training & News | Crick Sharks Club",
            description:
              "Cricket tips, batting and bowling techniques, fitness advice from Crick Sharks Club, Hosur, Tamil Nadu.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <span className="mb-5 inline-block rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-400">
            CRICK SHARKS CLUB
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Cricket Knowledge,
            <span className="block text-green-400">Skills & Inspiration</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore cricket tips, training advice and useful insights to develop your batting, bowling, fielding and overall game.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-600">
            Join Our Academy
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-600">Our Cricket Blog</span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] md:text-4xl">Learn More About Cricket</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#64748B]">
            Whether you are starting your cricket journey or looking to improve your existing skills, explore helpful articles that support your learning and development.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-green-600">Explore Articles</span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A]">Latest Cricket Insights</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#64748B]">
              Practical topics covering cricket techniques, fitness, teamwork and player development.
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <article key={article.title} className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <span className="mb-3 text-sm font-bold text-green-600">{article.category}</span>
                  <h3 className="text-xl font-bold leading-snug text-[#0F172A] transition group-hover:text-green-600">{article.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#64748B]">{article.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-xs text-[#64748B]">
                    <span className="flex items-center gap-2"><Clock size={15} />{article.readTime}</span>
                    <span className="flex items-center gap-2"><CalendarDays size={15} />Article {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-600">
                    Coming Soon <ArrowRight size={16} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-green-600">Keep Improving</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0F172A] md:text-4xl">
              Every Great Cricketer Starts with Learning
            </h2>
            <p className="mt-5 leading-8 text-[#64748B]">
              Cricket is a game of continuous learning. Understanding the basics, practising consistently and developing the right mindset can help players improve over time.
            </p>
            <Link href="/programs" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-7 py-3.5 font-bold text-white transition hover:bg-green-600">
              Explore Training Programs <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-3xl bg-[#071B16] p-8 text-white md:p-12">
            <h3 className="text-2xl font-bold">What You Can Learn</h3>
            <div className="mt-8 space-y-6">
              {["Batting techniques and shot selection", "Bowling accuracy and consistency", "Fielding techniques and agility", "Fitness, discipline and teamwork"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <ArrowRight size={14} />
                  </span>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-500 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Ready to Improve Your Cricket Skills?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/90">
            Take the next step in your cricket journey with Crick Sharks Club in Dinnur, Hosur, Tamil Nadu.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-8 py-4 font-bold text-white transition hover:bg-slate-900">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
