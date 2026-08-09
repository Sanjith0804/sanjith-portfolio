const featuredCredentials = [
  {
    number: "01",
    issuer: "IBM × COURSERA",
    title: "Cybersecurity Analyst",
    type: "Professional Certificate",
    category: "CYBERSECURITY",
    date: "OCT 2025",
    status: "VERIFIED",
    featured: true,
  },
  {
    number: "02",
    issuer: "META × COURSERA",
    title: "Front-End Developer",
    type: "Professional Certificate",
    category: "FRONTEND",
    date: "PROFESSIONAL CERTIFICATE",
    status: "VERIFIED",
    featured: true,
  },
  {
    number: "03",
    issuer: "NPTEL",
    title: "Cryptography & Network Security",
    type: "Elite Certification",
    category: "CYBERSECURITY",
    date: "CERTIFIED",
    status: "ELITE",
    featured: true,
  },
  {
    number: "04",
    issuer: "DELOITTE × FORAGE",
    title: "Cyber Job Simulation",
    type: "Certificate of Completion",
    category: "CYBERSECURITY",
    date: "MAR 2026",
    status: "COMPLETED",
    featured: false,
  },
  {
    number: "05",
    issuer: "ACCENTURE × FORAGE",
    title: "Technology Consulting Job Simulation",
    type: "Certificate of Completion",
    category: "CONSULTING",
    date: "MAR 2026",
    status: "COMPLETED",
    featured: false,
  },
  {
    number: "06",
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Introduction to Cybersecurity",
    type: "Verified Certificate",
    category: "CYBERSECURITY",
    date: "JUN 2026",
    status: "VERIFIED",
    featured: false,
  },
];

const additionalBadges = [
  {
    issuer: "IBM SKILLSBUILD",
    title: "Getting Started with Artificial Intelligence",
    category: "AI",
  },
  {
    issuer: "SAP",
    title: "Generative AI Developer",
    category: "GENERATIVE AI",
  },
  {
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Operating Systems Basics",
    category: "SYSTEMS",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="mb-20">

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
              06 // CREDENTIALS
            </span>

            <div className="h-px flex-1 bg-slate-800" />

            <span className="hidden font-mono text-[9px] tracking-[0.2em] text-slate-700 sm:block">
              VERIFICATION_DATABASE
            </span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_300px] md:items-end">

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">
                CERTIFICATION & LEARNING RECORD
              </p>

              <h2 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Credentials
                <span className="text-cyan-400">.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
                A curated record of professional certifications,
                cybersecurity credentials, technical learning, and
                industry job simulations.
              </p>
            </div>

            {/* Database Status */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 font-mono">

              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[0.2em] text-slate-600">
                  DATABASE_STATUS
                </span>

                <span className="text-[9px] text-emerald-400">
                  ● ACTIVE
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div>
                  <p className="text-[8px] text-slate-700">
                    FEATURED
                  </p>

                  <p className="mt-1 text-xl text-white">
                    06
                  </p>
                </div>

                <div>
                  <p className="text-[8px] text-slate-700">
                    BADGES
                  </p>

                  <p className="mt-1 text-xl text-white">
                    03
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* FEATURED CREDENTIALS */}
        {/* ========================================= */}

        <div>

          <div className="mb-7 flex items-center gap-4">

            <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
              FEATURED_CREDENTIALS
            </span>

            <div className="h-px flex-1 bg-slate-800" />

          </div>

          <div className="space-y-4">

            {featuredCredentials.map((credential) => (
              <div
                key={credential.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/75 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                {/* Hover scan line */}
                <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="grid md:grid-cols-[100px_1fr_210px]">

                  {/* Number */}
                  <div className="flex items-start border-b border-slate-800 p-6 md:border-b-0 md:border-r">

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 font-mono text-xs text-cyan-400">
                      {credential.number}
                    </div>

                  </div>

                  {/* Main */}
                  <div className="p-7">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="font-mono text-[9px] tracking-[0.25em] text-cyan-400">
                        {credential.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-700" />

                      <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                        CREDENTIAL
                      </span>

                    </div>

                    <p className="mt-5 font-mono text-[10px] tracking-[0.25em] text-slate-500">
                      {credential.issuer}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {credential.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {credential.type}
                    </p>

                  </div>

                  {/* Metadata */}
                  <div className="border-t border-slate-800 p-7 md:border-l md:border-t-0">

                    <p className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
                      RECORD_STATUS
                    </p>

                    <p className="mt-2 font-mono text-xs text-emerald-400">
                      ● {credential.status}
                    </p>

                    <div className="mt-6">

                      <p className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
                        DATE
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-slate-400">
                        {credential.date}
                      </p>

                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ========================================= */}
{/* ADDITIONAL BADGES */}
{/* ========================================= */}

<div className="mt-24">

  {/* Section Header */}
  <div className="mb-8 flex items-center gap-4">

    <div>
      <p className="font-mono text-[10px] tracking-[0.3em] text-slate-500">
        SECONDARY_CREDENTIALS
      </p>

      <p className="mt-2 text-sm text-slate-600">
        Additional technical learning records
      </p>
    </div>

    <div className="h-px flex-1 bg-slate-800" />

    <span className="hidden font-mono text-[9px] tracking-[0.2em] text-slate-700 sm:block">
      03 ARCHIVED_RECORDS
    </span>

  </div>

  {/* Badge Grid */}
  <div className="grid gap-5 md:grid-cols-3">

    {additionalBadges.map((badge, index) => (
      <div
        key={badge.title}
        className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30"
      >

        {/* Top scan line */}
        <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

        {/* Corner glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Header */}
        <div className="relative flex items-center justify-between">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 font-mono text-[9px] text-cyan-400 transition-colors group-hover:border-cyan-400/30">
            {String(index + 1).padStart(2, "0")}
          </div>

          <span className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
            BADGE_RECORD
          </span>

        </div>

        {/* Issuer */}
        <div className="relative mt-8">

          <p className="font-mono text-[9px] tracking-[0.25em] text-slate-600">
            ISSUER
          </p>

          <p className="mt-2 text-sm font-semibold tracking-wide text-slate-300">
            {badge.issuer}
          </p>

        </div>

        {/* Title */}
        <div className="relative mt-6">

          <h3 className="text-xl font-semibold leading-7 text-white transition-colors group-hover:text-cyan-50">
            {badge.title}
          </h3>

        </div>

        {/* Category */}
        <div className="relative mt-6">

          <span className="inline-flex rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5 font-mono text-[8px] tracking-[0.15em] text-slate-500 transition-colors group-hover:border-cyan-400/20 group-hover:text-cyan-400">
            {badge.category}
          </span>

        </div>

        {/* Bottom record line */}
        <div className="relative mt-8 flex items-center justify-between border-t border-slate-800 pt-4">

          <span className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
            CREDENTIAL_TYPE
          </span>

          <span className="font-mono text-[8px] text-emerald-400">
            ● RECORDED
          </span>

        </div>

      </div>
    ))}

  </div>

  {/* Archive Note */}
  <div className="mt-6 flex items-center gap-3 rounded-lg border border-slate-900 bg-slate-950/40 px-4 py-3">

    <span className="font-mono text-[9px] text-cyan-400">
      +
    </span>

    <p className="font-mono text-[8px] tracking-[0.15em] text-slate-700">
      SECONDARY RECORDS — SUPPORTING TECHNICAL LEARNING
    </p>

  </div>

</div>
        {/* ========================================= */}
        {/* FOOTER STRIP */}
        {/* ========================================= */}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">

          <span>CREDENTIAL_DATABASE</span>

          <span>06 FEATURED</span>

          <span>03 ADDITIONAL</span>

          <span className="text-emerald-500/70">
            STATUS: VERIFIED
          </span>

        </div>

      </div>
    </section>
  );
}