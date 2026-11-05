import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote, Star, MessageSquare, Users } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, DEFAULT_OG_IMAGE, breadcrumbSchema, webPageSchema } from "@/lib/seo";

const PAGE_URL = `${BASE_URL}/testimonials`;

export const metadata: Metadata = {
  title: "Testimonials | Cricket Academy Reviews | Crick Sharks Club",
  description:
    "Read feedback from parents and players about cricket training at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu.",
  keywords: [
    "Crick Sharks Club reviews",
    "cricket academy testimonials Hosur",
    "cricket coaching feedback Tamil Nadu",
    "cricket academy parent reviews",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: "Testimonials | Cricket Academy Reviews | Crick Sharks Club",
    description:
      "Feedback from parents and players about cricket training at Crick Sharks Club, Hosur, Tamil Nadu.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Crick Sharks Club Testimonials" }],
  },
};

const testimonials = [
  { name: "Parent Feedback", role: "Parent", review: "Add genuine feedback from a parent about their child's cricket training experience at Crick Sharks Club." },
  { name: "Player Feedback", role: "Player", review: "Add genuine feedback from a player about batting, bowling, practice sessions and skill development." },
  { name: "Parent Experience", role: "Parent", review: "Share a real parent's experience of the academy, coaching approach and training environment." },
];

const reviewHighlights = [
  { icon: Users, title: "Player Development", description: "Share feedback about the cricket skills and confidence players develop." },
  { icon: Star, title: "Training Experience", description: "Highlight genuine experiences of coaching and regular practice." },
  { icon: MessageSquare, title: "Parent Feedback", description: "Give parents an opportunity to share their experience with the academy." },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          webPageSchema({
            name: "Testimonials | Cricket Academy Reviews | Crick Sharks Club",
            description:
              "Feedback from parents and players about cricket training at Crick Sharks Club, Hosur, Tamil Nadu.",
            url: PAGE_URL,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Testimonials", href: "/testimonials" },
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
          <p className="font-bold uppercase tracking-[0.3em] text-green-400">Our Community</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Stories from Our{" "}
            <span className="text-green-400">Cricket Community</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover experiences and feedback from the players and families
            who are part of the Crick Sharks Club cricket community.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600">
            Join Our Academy
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-600">Testimonials</p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">Every Player Has a Story</h2>
          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Feedback from players and parents helps us understand their experiences and continue improving the cricket training environment.
          </p>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-600">Parent & Player Feedback</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">What Our Community Says</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article key={index} className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl">
                <Quote size={36} className="text-green-500" />
                <p className="mt-6 min-h-32 leading-8 text-[#64748B]">"{item.review}"</p>
                <div className="mt-7 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A]">{item.name}</h3>
                      <p className="mt-1 text-sm text-[#64748B]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Feedback Matters */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-600">Our Community</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">Growing Together Through Cricket</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviewHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#64748B]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#071B16] p-8 text-center text-white md:p-14">
          <div className="flex justify-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={28} fill="currentColor" />
            ))}
          </div>
          <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">Your Feedback Matters</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Have you trained with Crick Sharks Club? Share your genuine experience and help other players and parents learn about our cricket academy.
          </p>
          <p className="mt-5 text-sm text-slate-400">Visit our Google Business Profile to read and leave reviews.</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600">
            Write a Google Review
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-600">Become Part of Our Team</p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">Start Your Cricket Journey With Us</h2>
          <p className="mt-5 leading-8 text-[#64748B]">
            Interested in cricket coaching? Contact Crick Sharks Club and discover our training programs.
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
