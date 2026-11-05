
import Link from "next/link";
import {
  Star,
  Quote,
  MessageCircle,
  ArrowRight,
  Users,
} from "lucide-react";

const reviews = [
  {
    name: "Player Feedback",
    role: "Crick Sharks Club Player",
    review:
      "Cricket is a journey of continuous learning. Every practice session is an opportunity to develop skills, confidence and teamwork.",
  },
  {
    name: "Player Experience",
    role: "Crick Sharks Club Player",
    review:
      "Being part of a cricket team teaches discipline, dedication and the importance of supporting one another.",
  },
  {
    name: "Parent Feedback",
    role: "Crick Sharks Club Parent",
    review:
      "We appreciate the importance of sports, regular practice and teamwork in a young player's development.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-600">
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#071B16] md:text-4xl">
            What Our Players Say
          </h2>

          <p className="mt-5 leading-8 text-[#64748B]">
            Every player's journey is unique. We value the experiences,
            encouragement and support of our cricket community.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote
                size={42}
                className="absolute right-7 top-7 text-green-100"
              />

              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="relative mt-7 min-h-32 leading-8 text-[#64748B]">
                "{review.review}"
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <Users size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-[#0F172A]">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#64748B]">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 rounded-3xl bg-[#071B16] px-8 py-12 text-center text-white md:px-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400">
            <MessageCircle size={30} />
          </div>

          <h3 className="mt-6 text-2xl font-extrabold md:text-3xl">
            Your Feedback Matters!
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Have you been part of Crick Sharks Club? Share your genuine
            experience and help other players and parents learn about our
            cricket community.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-600"
          >
            Share Your Experience
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
