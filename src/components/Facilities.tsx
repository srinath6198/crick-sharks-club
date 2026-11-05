import {
  ArrowRight,
  Dumbbell,
  Target,
  Trophy,
  Users,
  Activity,
  Shield,
} from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    icon: Target,
    title: "Cricket Practice",
    description:
      "Dedicated practice sessions to help players improve their batting, bowling and fielding skills.",
  },
  {
    icon: Trophy,
    title: "Match Practice",
    description:
      "Practical cricket sessions that help players understand match situations and develop game awareness.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Training",
    description:
      "Fitness and movement exercises designed to support cricket performance and physical development.",
  },
  {
    icon: Activity,
    title: "Skill Development",
    description:
      "Focused training activities to help players improve technique, consistency and confidence.",
  },
  {
    icon: Users,
    title: "Team Training",
    description:
      "Group training sessions that encourage teamwork, communication and sportsmanship.",
  },
  {
    icon: Shield,
    title: "Player Development",
    description:
      "A structured environment where players can learn, practice and continue developing their cricket skills.",
  },
];

export default function Facilities() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-600">
            Training Environment
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#071B16] md:text-4xl">
            Our Facilities
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Everything players need to practice, develop their cricket skills
            and grow as a team.
          </p>
        </div>

        {/* Facility Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#071B16]">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-[#64748B]">
                  {facility.description}
                </p>

                {/* Bottom line */}
                <div className="mt-6 h-1 w-10 rounded-full bg-green-500 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl bg-[#071B16] px-8 py-10 text-center text-white md:px-12">
          <h3 className="text-2xl font-extrabold md:text-3xl">
            Ready to Start Your Cricket Journey?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Get in touch with Crick Sharks Club to learn more about our
            training programs and practice sessions.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 font-bold text-white transition hover:bg-green-600"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}