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
    markType: "ibm",
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
    markType: "meta",
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
    markType: "nptel",
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
    markType: "deloitte",
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
    markType: "cisco",
  },
];

const additionalBadges = [
  {
    issuer: "IBM SKILLSBUILD",
    title: "Getting Started with Artificial Intelligence",
    category: "AI",
    mark: "IBM",
    markType: "ibm",
  },
  {
    issuer: "SAP",
    title: "Generative AI Developer",
    category: "Generative AI",
    mark: "SAP",
    markType: "sap",
  },
  {
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Operating Systems Basics",
    category: "Systems",
    mark: "CISCO",
    markType: "cisco",
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

function ProviderMark({
  mark,
  markType,
  featured = false,
}: {
  mark: string;
  markType: string;
  featured?: boolean;
}) {
  const baseClass = `
    flex h-11 w-11 shrink-0 items-center justify-center
    rounded-xl border font-mono font-semibold
    transition-all duration-300
  `;

  /*
   * META
   *
   * Filled SVG recreation based on the actual Meta
   * infinity mark. Uses currentColor so it naturally
   * matches the portfolio's cyan visual system.
   */
  if (markType === "meta") {
    return (
      <div
        className={`${baseClass} ${
          featured
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            : "border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
        }`}
        aria-label="Meta"
      >
        <svg
          viewBox="0 0 610 421"
          fill="currentColor"
          className="h-[22px] w-[31px]"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="
              M47 120
              L17 216
              L15 306
              L38 367
              L79 400
              L140 406
              L184 386
              L241 317
              L304 208
              L405 361
              L450 398
              L485 407
              L530 402
              L568 373
              L586 342
              L594 311
              L596 248
              L578 153
              L558 109
              L530 68
              L497 39
              L465 23
              L417 19
              L391 27
              L349 55
              L314 97
              L274 55
              L228 25
              L199 18
              L148 23
              L96 54
              Z

              M198 87
              L230 106
              L272 158
              L164 319
              L143 337
              L111 341
              L90 325
              L78 293
              L78 248
              L92 184
              L116 132
              L146 96
              L167 86
              Z

              M405 76
              L435 71
              L465 83
              L501 120
              L517 153
              L535 217
              L539 277
              L531 322
              L511 343
              L484 343
              L466 330
              L416 260
              L345 141
              L371 104
              Z
            "
          />
        </svg>
      </div>
    );
  }

  /*
   * DELOITTE
   */
  if (markType === "deloitte") {
    return (
      <div
        className={`${baseClass} ${
          featured
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            : "border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
        }`}
        aria-label="Deloitte"
      >
        <div className="flex items-end">
          <span className="text-lg font-bold leading-none">
            D
          </span>

          <span className="mb-0.5 ml-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>
    );
  }

  /*
   * NPTEL
   *
   * Uses the dedicated NPTEL image asset so the
   * complete emblem and wordmark are preserved.
   */
  if (markType === "nptel") {
    return (
      <div
        className={`${baseClass} ${
          featured
            ? "h-12 w-12 border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
            : "border-slate-800 bg-slate-900 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
        }`}
        aria-label="NPTEL"
      >
        <img
          src="/nptel-logo.png"
          alt="NPTEL"
          className="h-10 w-10 object-contain"
        />
      </div>
    );
  }

  /*
   * CISCO
   *
   * Cisco-style nine-bar bridge/signal mark with
   * the CISCO wordmark underneath.
   */
  if (markType === "cisco") {
    return (
      <div
        className={`${baseClass} ${
          featured
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            : "border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
        }`}
        aria-label="Cisco"
      >
        <div className="flex flex-col items-center justify-center">
          <svg
            viewBox="0 0 46 34"
            className="h-[27px] w-[34px]"
            fill="currentColor"
            aria-hidden="true"
          >
            {/* Cisco signal bars */}
            <rect x="2" y="10" width="2.8" height="6" rx="1.4" />
            <rect x="7.2" y="7" width="2.8" height="9" rx="1.4" />
            <rect x="12.4" y="3" width="2.8" height="13" rx="1.4" />
            <rect x="17.6" y="7" width="2.8" height="9" rx="1.4" />
            <rect x="22.8" y="10" width="2.8" height="6" rx="1.4" />
            <rect x="28" y="7" width="2.8" height="9" rx="1.4" />
            <rect x="33.2" y="3" width="2.8" height="13" rx="1.4" />
            <rect x="38.4" y="7" width="2.8" height="9" rx="1.4" />
            <rect x="43.2" y="10" width="2.8" height="6" rx="1.4" />

            {/* Cisco wordmark */}
            <text
              x="23"
              y="27"
              textAnchor="middle"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="7"
              fontWeight="700"
              letterSpacing="1.8"
            >
              CISCO
            </text>
          </svg>
        </div>
      </div>
    );
  }

  /*
   * SAP
   */
  if (markType === "sap") {
    return (
      <div
        className={`${baseClass} ${
          featured
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            : "border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
        }`}
        aria-label="SAP"
      >
        <div className="text-center">
          <div className="text-[11px] font-bold tracking-[0.16em]">
            SAP
          </div>

          <div className="mx-auto mt-1 h-px w-5 bg-current opacity-40" />
        </div>
      </div>
    );
  }

  /*
   * IBM
   *
   * Uses the dedicated IBM image asset for both
   * certifications and additional badges.
   */
  if (markType === "ibm") {
    return (
      <div
        className={`${baseClass} ${
          featured
            ? "border-cyan-400/30 bg-cyan-400/10"
            : "border-slate-800 bg-slate-900 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
        }`}
        aria-label="IBM"
      >
        <img
          src="/ibm-logo.png"
          alt="IBM"
          className="h-7 w-7 object-contain"
        />
      </div>
    );
  }

  /*
   * Fallback
   */
  return (
    <div
      className={`${baseClass} ${
        featured
          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
          : "border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5"
      }`}
      aria-label={mark}
    >
      <span className="text-[10px] font-bold tracking-[0.12em]">
        {mark}
      </span>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            07 // CREDENTIALS
          </span>

          <div className="h-px flex-1 bg-slate-800" />

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700 sm:block">
            VERIFIED_RECORDS
          </span>
        </div>

        {/* Heading */}
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

        {/* Certification Grid */}
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

                  <ProviderMark
                    mark={credential.mark}
                    markType={credential.markType}
                    featured={credential.featured}
                  />

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

        {/* Badges */}
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

          {/* Badge Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {additionalBadges.map((badge) => (
              <article
                key={badge.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/60"
              >

                <ProviderMark
                  mark={badge.mark}
                  markType={badge.markType}
                />

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

        {/* Footer Strip */}
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