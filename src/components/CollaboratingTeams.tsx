const teams = [
  {
    name: "Crick Sharks",
    initials: "CS",
    tagline: "The home team — where it all began.",
    color: "bg-green-500",
  },
  {
    name: "Sunrise X11",
    initials: "SX",
    tagline: "Rising with every match they play.",
    color: "bg-amber-500",
  },
  {
    name: "Crick Frick's",
    initials: "CF",
    tagline: "Passionate players, fearless cricket.",
    color: "bg-sky-500",
  },
  {
    name: "Thunder Stickers",
    initials: "TS",
    tagline: "Striking hard, playing with thunder.",
    color: "bg-purple-500",
  },
];

export default function CollaboratingTeams() {
  return (
    <section className="bg-[#071B16] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-400">
            Our Network
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            Our Collaborating Teams
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Crick Sharks Club proudly collaborates with these cricket teams,
            building a stronger cricketing community together.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team) => (
            <div
              key={team.name}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
            >
              {/* Badge */}
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full ${team.color} text-2xl font-black text-white shadow-lg`}
              >
                {team.initials}
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-white">
                {team.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {team.tagline}
              </p>

              {/* Divider */}
              <div className="mt-6 h-px w-12 bg-green-500/40 transition duration-300 group-hover:w-20 group-hover:bg-green-400" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
