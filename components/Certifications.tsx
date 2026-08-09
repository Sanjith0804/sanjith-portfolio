const featuredCredentials = [
  {
    number: "01",
    issuer: "IBM × COURSERA",
    title: "Cybersecurity Analyst",
    type: "Professional Certificate",
    category: "Cybersecurity",
    date: "OCT 2025",
    status: "VERIFIED",
    featured: false,
    mark: "IBM",
  },
  {
    number: "02",
    issuer: "META × COURSERA",
    title: "Front-End Developer",
    type: "Professional Certificate",
    category: "Frontend Development",
    date: "PROFESSIONAL CERTIFICATE",
    status: "VERIFIED",
    featured: false,
    mark: "META",
  },
  {
    number: "03",
    issuer: "NPTEL",
    title: "Cryptography & Network Security",
    type: "Elite Certification",
    category: "Cybersecurity",
    date: "CERTIFIED",
    status: "ELITE",
    featured: true,
    mark: "NPTEL",
  },
  {
    number: "04",
    issuer: "DELOITTE × FORAGE",
    title: "Cyber Job Simulation",
    type: "Certificate of Completion",
    category: "Cybersecurity",
    date: "MAR 2026",
    status: "COMPLETED",
    featured: false,
    mark: "D",
  },
  {
    number: "05",
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Introduction to Cybersecurity",
    type: "Verified Certificate",
    category: "Cybersecurity",
    date: "JUN 2026",
    status: "VERIFIED",
    featured: false,
    mark: "CISCO",
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

function CredentialIcon({
  type,
}: {
  type: "certificate" | "badge";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {type === "certificate" ? (
        <>
          <rect x="5" y="3" width="14" height="15" rx="2" />
          <path d="M8 7h8M8 10h6M8 13h5" />
          <path d="m10 18 2 3 2-3" />
        </>
      ) : (
        <>
          <circle cx="12" cy="9" r="5" />
          <path d="m9.5 13-1 7 3.5-2 3.5 2-1-7" />
        </>
      )}
    </svg>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            07 // CREDENTIALS
          </span>

          <div className="h-px flex-1 bg-slate-800" />

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700 sm:block">
            VERIFIED_RECORDS
          </span>
        </div>

        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                <CredentialIcon type="certificate" />
              </div>

              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
                PROFESSIONAL CREDENTIALS
              </p>

            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Certifications
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400">
              Professional certifications and learning credentials
              supporting my work across cybersecurity, software
              development, and artificial intelligence.
            </p>

          </div>

          {/* Credential summary */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 font-mono">

            <div className="flex items-center justify-between gap-8">

              <span className="text-[8px] uppercase tracking-[0.2em] text-slate-600">
                RECORD_STATUS
              </span>

              <span className="text-[8px] text-emerald-400">
                ● VERIFIED
              </span>

            </div>

            <div className="mt-5 flex items-end gap-6">

              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-slate-700">
                  CERTIFICATIONS
                </p>

                <p className="mt-1 text-2xl text-white">
                  05
                </p>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-slate-700">
                  BADGES
                </p>

                <p className="mt-1 text-2xl text-white">
                  03
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================= */}
        {/* CERTIFICATION GRID */}
        {/* ========================================= */}

        <div className="grid gap-5 md:grid-cols-2">

          {featuredCredentials.map((credential) => (
            <article
              key={credential.number}
              className={`group relative overflow-hidden rounded-2xl border bg-slate-950/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                credential.featured
                  ? "border-cyan-400/30 hover:border-cyan-400/50"
                  : "border-slate-800 hover:border-cyan-400/25"
              }`}
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top row */}
              <div className="relative flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  {/* Provider mark */}
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border font-mono text-[8px] font-semibold tracking-wider transition-all duration-300 ${
                      credential.featured
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                        : "border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
                    }`}
                  >
                    {credential.mark}
                  </div>

                  <div>

                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                      {credential.category}
                    </p>

                    <p className="mt-1 font-mono text-[9px] text-slate-500">
                      {credential.issuer}
                    </p>

                  </div>

                </div>

                <span className="font-mono text-[9px] text-slate-700">
                  {credential.number}
                </span>

              </div>

              {/* Credential type */}
              <div className="relative mt-7">

                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-cyan-400">
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  {credential.type}
                </span>

              </div>

              {/* Title */}
              <h3 className="relative mt-4 text-xl font-bold leading-7 tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                {credential.title}
              </h3>

              {/* Bottom metadata */}
              <div className="relative mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-slate-800 pt-5">

                <div>

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                    STATUS
                  </p>

                  <p
                    className={`mt-1 font-mono text-[9px] uppercase tracking-[0.12em] ${
                      credential.status === "ELITE"
                        ? "text-cyan-400"
                        : "text-emerald-400"
                    }`}
                  >
                    ● {credential.status}
                  </p>

                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                  {credential.date}
                </span>

              </div>

            </article>
          ))}

        </div>

        {/* ========================================= */}
        {/* BADGES */}
        {/* ========================================= */}

        <div className="mt-20">

          <div className="mb-10 flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
              <CredentialIcon type="badge" />
            </div>

            <div>

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                ADDITIONAL CREDENTIALS
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Badges
                <span className="text-cyan-400">.</span>
              </h2>

            </div>

          </div>

          <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Additional learning badges earned through technical
            learning platforms and industry programs.
          </p>

          {/* Badge grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {additionalBadges.map((badge) => (
              <article
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

                <h3 className="mt-3 text-xl font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-cyan-300">
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

              </article>
            ))}

          </div>
        </div>

        {/* ========================================= */}
        {/* FOOTER */}
        {/* ========================================= */}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">

          <span>
            CREDENTIAL_DATABASE: ACTIVE
          </span>

          <span>
            05 CERTIFICATIONS
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