export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">

        {/* Section label */}
        <div className="mb-14 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            02 // PROFILE
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Profile Card */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-3xl bg-cyan-400/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/70 p-6 backdrop-blur-xl">

              {/* Card header */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Identity Module
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Verified
                </span>
              </div>

              {/* Profile Photo */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">

                {/* Inner frame */}
                <div className="pointer-events-none absolute inset-6 z-10 rounded-xl border border-dashed border-cyan-400/20" />

                {/* Photo */}
                <img
                  src="/image.png"
                  alt="Sanjith R S"
                  className="h-full w-full object-cover object-center"
                />

                {/* Subtle cinematic overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-cyan-400/5" />

              </div>

              {/* Identity data */}
              <div className="mt-6 space-y-3 font-mono text-xs">

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    ID
                  </span>

                  <span className="text-slate-400">
                    SANJITH_RS
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    BASE
                  </span>

                  <span className="text-slate-400">
                    BENGALURU, IN
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    STATUS
                  </span>

                  <span className="text-emerald-400">
                    ACTIVE
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* About Content */}
          <div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              Who is Sanjith?
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building with{" "}
              <span className="text-cyan-400">
                security
              </span>{" "}
              in mind.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">

              <p>
                I'm a Computer Science student specializing in Cyber
                Security at RNS Institute of Technology, Bengaluru.
              </p>

              <p>
                My interests sit at the intersection of cybersecurity,
                frontend development, and artificial intelligence. I enjoy
                turning ideas into practical, responsive, and secure
                digital experiences.
              </p>

              <p>
                I've also gained real-world frontend development
                experience through my internship at Valtech, where I
                worked with modern web technologies and collaborative
                development workflows.
              </p>

            </div>

            {/* Identity tags */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition-colors hover:border-cyan-400/20">
                <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                  Focus
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  Cyber Security
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition-colors hover:border-cyan-400/20">
                <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                  Development
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  Frontend
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition-colors hover:border-cyan-400/20">
                <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                  Exploring
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200">
                  AI / ML
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}