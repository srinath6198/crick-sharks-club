import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Dumbbell,
  Trophy,
  Shield,
  Zap,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Training Programs | Crick Sharks Club",
  description:
    "Explore cricket training programs at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu. Structured coaching for players of different ages and skill levels.",
};

const programs = [
  {
    icon: Users,
    title: "Beginner Cricket Training",
    description:
      "Build a strong foundation in cricket through basic skills, rules, techniques and regular practice.",
    points: [
      "Cricket fundamentals",
      "Batting basics",
      "Bowling basics",
      "Fielding fundamentals",
    ],
  },
  {
    icon: Target,
    title: "Batting Training",
    description:
      "Develop batting technique, shot selection, timing and confidence through focused practice.",
    points: [
      "Batting technique",
      "Footwork development",
      "Shot selection",
      "Timing and placement",
    ],
  },
  {
    icon: Dumbbell,
    title: "Bowling Training",
    description:
      "Improve bowling fundamentals, accuracy, consistency and control through structured practice.",
    points: [
      "Bowling technique",
      "Line and length",
      "Accuracy training",
      "Bowling consistency",
    ],
  },
  {
    icon: Shield,
    title: "Fielding Training",
    description:
      "Improve fielding skills, catching, throwing, movement and overall agility on the cricket field.",
    points: [
      "Catching practice",
      "Throwing technique",
      "Ground fielding",
      "Agility and movement",
    ],
  },
  {
    icon: Trophy,
    title: "Advanced Cricket Training",
    description:
      "Focused training for players looking to improve their overall cricket performance and match skills.",
    points: [
      "Advanced techniques",
      "Match preparation",
      "Game awareness",
      "Performance development",
    ],
  },
  {
    icon: Zap,
    title: "Fitness & Agility",
    description:
      "Develop movement, coordination, speed and physical fitness to support cricket performance.",
    points: [
      "Speed training",
      "Agility exercises",
      "Coordination",
      "Cricket fitness",
    ],
  },
];

const benefits = [
  "Structured cricket practice",
  "Focus on fundamental skills",
  "Batting, bowling and fielding development",
  "Fitness and agility training",
  "Regular skill improvement",
  "Supportive training environment",
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-green-500 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-green-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-green-400">
            Cricket Coaching
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Training Programs Designed to{" "}
            <span className="text-green-400">Develop Your Game</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore structured cricket training programs designed to help
            players build their fundamentals, improve their skills and grow
            their confidence on the field.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Enquire About Training
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/academy"
              className="rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#071B16]"
            >
              About Our Academy
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-600">
            Our Programs
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">
            Build Your Cricket Skills Step by Step
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            At Crick Sharks Club, our training approach focuses on developing
            cricket fundamentals while helping players continuously improve
            their technical and physical abilities.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#0F172A]">
                    {program.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#64748B]">
                    {program.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {program.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-[#334155]"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-green-500"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Training Approach */}
      <section className="bg-[#071B16] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Learn. Practice. Improve.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Cricket development takes consistent practice and a strong
              foundation. Our programs focus on developing individual skills
              through regular training and practical cricket exercises.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-green-400">
                01
              </div>
              <h3 className="mt-4 text-xl font-bold">Learn</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Understand cricket fundamentals and techniques.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-green-400">
                02
              </div>
              <h3 className="mt-4 text-xl font-bold">Practice</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Improve skills through focused and consistent practice.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-extrabold text-green-400">
                03
              </div>
              <h3 className="mt-4 text-xl font-bold">Improve</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Build confidence and continue developing your game.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-600">
              Training Benefits
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">
              What Players Can Develop
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={20} />
                </div>

                <span className="font-semibold text-[#334155]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-green-50 p-8 text-center md:p-12">

          <p className="font-bold uppercase tracking-[0.25em] text-green-600">
            Train With Us
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A]">
            Start Your Cricket Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#64748B]">
            Interested in cricket training? Get in touch with Crick Sharks
            Club to learn more about our training programs and available
            sessions.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-7 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Contact Crick Sharks Club
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}