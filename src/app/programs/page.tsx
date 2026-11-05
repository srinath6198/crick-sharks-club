import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Trophy,
  Shield,
  Dumbbell,
  Users,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Training Programs | Crick Sharks Club",
  description:
    "Explore cricket training programs at Crick Sharks Club, Dinnur, Hosur, Tamil Nadu — structured coaching for different ages and skill levels.",
};

const programs = [
  {
    icon: Users,
    title: "Beginner Training",
    description:
      "Build a strong foundation in cricket by learning the basic skills, techniques and rules of the game.",
    skills: [
      "Cricket fundamentals",
      "Basic batting",
      "Basic bowling",
      "Fielding fundamentals",
    ],
  },
  {
    icon: Target,
    title: "Batting Training",
    description:
      "Improve batting technique, footwork, timing, shot selection and confidence through focused practice.",
    skills: [
      "Batting technique",
      "Footwork",
      "Shot selection",
      "Timing & placement",
    ],
  },
  {
    icon: Zap,
    title: "Bowling Training",
    description:
      "Develop bowling technique, accuracy, consistency and control through structured bowling practice.",
    skills: [
      "Bowling technique",
      "Line & length",
      "Accuracy",
      "Bowling consistency",
    ],
  },
  {
    icon: Shield,
    title: "Fielding Training",
    description:
      "Develop catching, throwing, ground fielding, movement and agility to become a better all-round fielder.",
    skills: [
      "Catching",
      "Throwing",
      "Ground fielding",
      "Agility",
    ],
  },
  {
    icon: Dumbbell,
    title: "Fitness Training",
    description:
      "Improve physical fitness, movement, coordination and agility to support overall cricket performance.",
    skills: [
      "Fitness exercises",
      "Speed training",
      "Agility",
      "Coordination",
    ],
  },
  {
    icon: Trophy,
    title: "Advanced Training",
    description:
      "Focused training for players looking to improve their overall cricket skills and match performance.",
    skills: [
      "Advanced techniques",
      "Match preparation",
      "Game awareness",
      "Performance development",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-700/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-green-400">
            Cricket Coaching
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Training Programs for{" "}
            <span className="text-green-400">
              Every Stage of the Game
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Develop your cricket skills through structured practice focused
            on batting, bowling, fielding, fitness and overall player
            development.
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
              Explore Academy
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
            Learn. Practice. Improve.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Our programs focus on developing fundamental cricket skills while
            helping players improve their technique, confidence and
            understanding of the game.
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
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition duration-300 group-hover:bg-green-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold text-[#0F172A]">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-[#64748B]">
                    {program.description}
                  </p>

                  {/* Skills */}
                  <ul className="mt-6 space-y-3">
                    {program.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-sm font-medium text-[#334155]"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-green-500"
                        />

                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Training Process */}
      <section className="bg-[#071B16] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Our Training Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              A Simple Approach to Player Development
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Players can build their skills progressively through learning,
              practice and continuous improvement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="text-5xl font-extrabold text-green-400">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Learn
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Understand cricket fundamentals, techniques and the key
                skills required for the game.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="text-5xl font-extrabold text-green-400">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Practice
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Apply what you learn through focused cricket practice and
                repeated skill development.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="text-5xl font-extrabold text-green-400">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Improve
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Continue improving technique, consistency, confidence and
                overall understanding of cricket.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Training */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-600">
              Player Development
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">
              What Players Can Develop
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Batting technique",
              "Bowling accuracy",
              "Fielding skills",
              "Fitness and agility",
              "Game awareness",
              "Teamwork and discipline",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={20} />
                </div>

                <span className="font-semibold text-[#334155]">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-green-50 p-8 text-center md:p-12">

          <p className="font-bold uppercase tracking-[0.25em] text-green-600">
            Start Training
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#0F172A] md:text-4xl">
            Ready to Improve Your Cricket?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">
            Contact Crick Sharks Club to learn more about our training
            programs and available sessions.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071B16] px-7 py-4 font-bold text-white transition hover:bg-green-600"
          >
            Contact Crick Sharks Club
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}