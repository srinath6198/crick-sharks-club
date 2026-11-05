
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Trophy,
  ShieldCheck,
  Activity,
  Users,
  Dumbbell,
  GraduationCap,
  Timer,
  CheckCircle2,
} from "lucide-react";

const trainingPrograms = [
  {
    icon: Target,
    title: "Batting Training",
    description:
      "Develop batting fundamentals, shot selection, timing, footwork and match awareness.",
    points: ["Batting techniques", "Shot selection", "Footwork development"],
  },
  {
    icon: Trophy,
    title: "Bowling Training",
    description:
      "Build bowling accuracy, consistency, control and confidence through practice.",
    points: ["Bowling techniques", "Line and length", "Bowling control"],
  },
  {
    icon: ShieldCheck,
    title: "Fielding Training",
    description:
      "Improve catching, throwing, ground fielding and overall field awareness.",
    points: ["Catching practice", "Throwing accuracy", "Ground fielding"],
  },
  {
    icon: Activity,
    title: "Fitness Training",
    description:
      "Develop physical fitness, agility, stamina and coordination for cricket.",
    points: ["Physical conditioning", "Agility exercises", "Stamina development"],
  },
];

const benefits = [
  {
    icon: Users,
    title: "Teamwork",
    description: "Learn communication, cooperation and team spirit.",
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Build cricket knowledge and improve individual abilities.",
  },
  {
    icon: Dumbbell,
    title: "Physical Fitness",
    description: "Develop strength, flexibility and athletic performance.",
  },
  {
    icon: Timer,
    title: "Discipline",
    description: "Build consistency, dedication and a positive mindset.",
  },
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071B16] px-6 py-28 text-white md:py-36">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-green-400">
            Crick Sharks Club Academy
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Discover Your Potential.
            <span className="block text-green-400">
              Develop Your Cricket Skills.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Build your cricketing foundation through skill
            development, dedicated practice and a passion
            for the game.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Enquire About Training
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white/30 px-7 py-4 font-bold transition hover:bg-white hover:text-[#071B16]"
            >
              About Our Club
            </Link>
          </div>
        </div>
      </section>

      {/* Academy Introduction */}
      <section className="bg-[#F8FAFC] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div className="flex min-h-[340px] items-center justify-center rounded-3xl bg-[#071B16] p-10 text-white">
            <div className="text-center">
              <Trophy className="mx-auto h-24 w-24 text-green-400" />
              <h2 className="mt-6 text-3xl font-extrabold">
                CRICK SHARKS
              </h2>
              <p className="mt-3 tracking-[0.3em] text-green-400">
                CRICKET ACADEMY
              </p>
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-green-600">
              About Our Academy
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071B16] md:text-4xl">
              Where Passion Meets Cricket Training
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Crick Sharks Club is located in Dinnur, Amgondapalli,
              Tamil Nadu. Our aim is to encourage aspiring
              cricketers to learn the game, develop their
              cricketing abilities and enjoy the sport.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We believe every player has the potential
              to improve through practice, dedication,
              teamwork and discipline.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Focus on cricket fundamentals",
                "Individual skill development",
                "Teamwork and sportsmanship",
                "Continuous learning and improvement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-green-600" />
                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Training Programs */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-green-600">
              Our Training
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#071B16] md:text-4xl">
              Cricket Training Programs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Develop essential cricketing skills with
              focused training in different areas of the game.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {trainingPrograms.map((program) => {
              const Icon = program.icon;

              return (
                <div
                  key={program.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071B16]">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {program.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 size={16} className="shrink-0 text-green-600" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Player Development */}
      <section className="bg-[#071B16] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-green-400">
              Player Development
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Develop Beyond the Game
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Cricket helps develop important life skills
              along with sporting abilities.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
                >
                  <Icon size={34} className="text-green-400" />

                  <h3 className="mt-6 text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Training Approach */}
      <section className="bg-[#F8FAFC] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-green-600">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#071B16] md:text-4xl">
              Learn. Practice. Improve.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Learn",
                description:
                  "Understand cricket fundamentals and develop the right techniques.",
              },
              {
                step: "02",
                title: "Practice",
                description:
                  "Apply your learning through regular practice and skill exercises.",
              },
              {
                step: "03",
                title: "Improve",
                description:
                  "Build confidence, identify areas to improve and keep progressing.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-white p-9 shadow-sm"
              >
                <span className="text-4xl font-extrabold text-green-500">
                  {item.step}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#071B16]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl bg-[#071B16] p-9 text-white md:flex-row md:items-center md:p-14">

          <div>
            <p className="font-bold uppercase tracking-widest text-green-400">
              Our Location
            </p>

            <h2 className="mt-4 text-3xl font-extrabold">
              Visit Crick Sharks Club
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Dinnur, A. Settipalli, Amgondapalli,
              Tamil Nadu - 635105
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Crick+Sharks+Club+Amgondapalli+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600"
          >
            Find Our Academy
            <ArrowRight size={20} />
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-500 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Start Your Cricket Journey Today!
          </h2>

          <p className="mt-6 leading-8 text-green-50">
            Interested in joining Crick Sharks Club?
            Contact us to learn more about training and enrollment.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#071B16] px-8 py-4 font-bold text-white transition hover:bg-slate-900"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </main>
  );
}
