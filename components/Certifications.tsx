const featuredCredentials = [
  {
    number: "01",
    issuer: "IBM × COURSERA",
    title: "Cybersecurity Analyst",
    type: "Professional Certificate",
    category: "Cybersecurity",
    date: "OCT 2025",
    status: "VERIFIED",
  },
  {
    number: "02",
    issuer: "META × COURSERA",
    title: "Front-End Developer",
    type: "Professional Certificate",
    category: "Frontend Development",
    date: "PROFESSIONAL CERTIFICATE",
    status: "VERIFIED",
  },
  {
    number: "03",
    issuer: "NPTEL",
    title: "Cryptography & Network Security",
    type: "Elite Certification",
    category: "Cybersecurity",
    date: "CERTIFIED",
    status: "ELITE",
  },
  {
    number: "04",
    issuer: "DELOITTE × FORAGE",
    title: "Cyber Job Simulation",
    type: "Certificate of Completion",
    category: "Cybersecurity",
    date: "MAR 2026",
    status: "COMPLETED",
  },
  
  {
    number: "05",
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Introduction to Cybersecurity",
    type: "Verified Certificate",
    category: "Cybersecurity",
    date: "JUN 2026",
    status: "VERIFIED",
  },
];

const additionalBadges = [
  {
    issuer: "IBM SKILLSBUILD",
    title: "Getting Started with Artificial Intelligence",
    category: "AI",
    mark: "IBM",
  },
  {
    issuer: "SAP",
    title: "Generative AI Developer",
    category: "Generative AI",
    mark: "SAP",
  },
  {
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Operating Systems Basics",
    category: "Systems",
    mark: "CISCO",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-28 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* ========================================= */}
        {/* CERTIFICATIONS HEADER */}
        {/* ========================================= */}

        <div className="mb-12">
          <div className="flex items-center gap-4">
            <span className="text-2xl text-cyan-400 sm:text-3xl">
              🏅
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Certifications
            </h2>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Professional certifications and learning credentials that
            support my work across cybersecurity, software development,
            and artificial intelligence.
          </p>
        </div>

        {/* ========================================= */}
        {/* CERTIFICATION GRID */}
        {/* ========================================= */}

        <div className="grid gap-5 md:grid-cols-2">

          {featuredCredentials.map((credential) => (
            <div
              key={credential.number}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/60 sm:p-7"
            >

              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col">

                {/* Top row */}
                <div className="flex items-start justify-between gap-4">

                  <span className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-cyan-400">
                    {credential.type}
                  </span>

                  <span className="font-mono text-[9px] text-slate-700">
                    {credential.number}
                  </span>

                </div>

                {/* Category */}
                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  {credential.category}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-xl font-bold leading-7 tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-50 sm:text-2xl">
                  {credential.title}
                </h3>

                {/* Issuer */}
                <p className="mt-3 text-sm font-medium tracking-wide text-slate-400">
                  {credential.issuer}
                </p>

                {/* Bottom metadata */}
                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-slate-800 pt-5">

                  <div className="flex items-center gap-5">

                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                        STATUS
                      </p>

                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-400">
                        ● {credential.status}
                      </p>
                    </div>

                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                    {credential.date}
                  </span>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* ========================================= */}
        {/* BADGES */}
        {/* ========================================= */}

        <div className="mt-20">

          <div className="mb-10 flex items-center gap-4">
            <span className="text-2xl text-cyan-400 sm:text-3xl">
              🏆
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Badges
            </h2>
          </div>

          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Additional learning badges earned through technical
            learning platforms and industry programs.
          </p>

          {/* Badge grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {additionalBadges.map((badge) => (
              <div
                key={badge.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/60"
              >

                {/* Provider mark */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 font-mono text-[8px] font-semibold tracking-wider text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
                  {badge.mark}
                </div>

                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  {badge.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-7 text-white">
                  {badge.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  {badge.issuer}
                </p>

                <div className="mt-7 border-t border-slate-800 pt-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-400">
                    ● RECORDED
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ========================================= */}
        {/* FOOTER */}
        {/* ========================================= */}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">

          <span>
            CREDENTIALS
          </span>

          <span>
            06 CERTIFICATIONS
          </span>

          <span>
            03 BADGES
          </span>

          <span className="text-emerald-500/70">
            STATUS: VERIFIED
          </span>

        </div>

      </div>
    </section>
  );
}