
export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 font-mono text-sm tracking-widest text-cyan-400">
            RESEARCH & PUBLICATIONS
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Research & <span className="text-cyan-400">Achievements</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Exploring practical cybersecurity solutions through research,
            innovation, and real-world applications.
          </p>
        </div>

        <article className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 transition duration-300 hover:border-cyan-400/50 sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

          <div className="relative">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs tracking-wide text-cyan-300">
                IEEE Xplore
              </span>

              <span className="font-mono text-xs text-emerald-400">
                PUBLISHED PAPER
              </span>
            </div>

            <h3 className="max-w-4xl text-xl font-semibold leading-snug text-white transition group-hover:text-cyan-300 sm:text-2xl">
              DeskHop: A Secure Workspace Booking Platform with BYOD
              Compliance, Zero Trust, and Session Isolation
            </h3>

            <p className="mt-5 max-w-4xl leading-7 text-slate-300">
              This paper presents DeskHop, a secure workspace booking platform
              that combines device verification and risk assessment with
              session protection. It addresses cybersecurity challenges in
              Bring Your Own Device (BYOD) environments through device
              fingerprinting, anomaly detection, browser monitoring,
              session locking, and secure booking management.
            </p>

            <div className="mt-6 border-t border-slate-700/70 pt-5">
              <p className="text-sm leading-6 text-slate-400">
                <span className="text-slate-200">Authors:</span> Latha P.,
                Dhanraj, Shashwathi P., Sanjith R S
              </p>

              <p className="mt-2 text-sm text-slate-400">
                <span className="text-slate-200">Publisher:</span> IEEE
              </p>
            </div>

            <a
              href="https://ieeexplore.ieee.org/document/11620439"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/20"
            >
              Read Publication
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
