export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="mb-20">

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
              05 // EXPERIENCE
            </span>

            <div className="h-px flex-1 bg-slate-800" />

            <span className="hidden font-mono text-[9px] tracking-[0.2em] text-slate-700 sm:block">
              CAREER_RECORD
            </span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_240px] md:items-end">

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">
                PROFESSIONAL & LEADERSHIP HISTORY
              </p>

              <h2 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Experience
                <span className="text-cyan-400">.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
                A chronological record of roles, progression,
                responsibility, and professional experience.
              </p>
            </div>

            {/* Record Status */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 font-mono">

              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] text-slate-600">
                  RECORD_STATUS
                </span>

                <span className="text-[8px] text-emerald-400">
                  ● ACTIVE
                </span>
              </div>

              <div className="mt-5">
                <p className="text-[8px] tracking-[0.2em] text-slate-700">
                  ORGANIZATIONS
                </p>

                <p className="mt-1 text-2xl text-white">
                  02
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* MAIN TIMELINE */}
        {/* ========================================= */}

        <div className="relative">

          {/* Main vertical line */}
          <div className="absolute left-[86px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/70 via-cyan-400/30 to-transparent lg:block" />

          {/* ======================================= */}
          {/* U&I TRUST — SINGLE ORGANIZATION */}
          {/* ======================================= */}

          <div className="relative mb-24 lg:grid lg:grid-cols-[170px_1fr] lg:gap-12">

            {/* Timeline year */}
            <div className="hidden lg:block">

              <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-400">
                01
              </p>

              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.15em] text-slate-700">
                LEADERSHIP
              </p>

            </div>

            {/* Timeline node */}
            <div className="absolute left-[79px] top-8 z-10 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] lg:block" />

            {/* U&I CASE FILE */}
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/75 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40">

              {/* Scan line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              <div className="p-8 md:p-10">

                {/* Organization Header */}
                <div className="flex flex-col justify-between gap-6 border-b border-slate-800 pb-8 md:flex-row md:items-end">

                  <div>

                    <p className="font-mono text-[9px] tracking-[0.3em] text-slate-600">
                      ORGANIZATION
                    </p>

                    <h3 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
                      U&I TRUST
                    </h3>

                    <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-cyan-400">
                      COMMUNITY • EDUCATION • LEADERSHIP
                    </p>

                  </div>

                  <span className="font-mono text-[9px] tracking-[0.2em] text-slate-700">
                    EXPERIENCE_RECORD_01
                  </span>

                </div>

                {/* ================================= */}
                {/* ROLE 01 */}
                {/* ================================= */}

                <div className="mt-10 grid gap-6 md:grid-cols-[150px_1fr]">

                  {/* Year */}
                  <div>

                    <p className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                      YEAR 01
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      First Year
                    </p>

                  </div>

                  {/* Role */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                        ROLE_01
                      </span>

                      <span className="font-mono text-[9px] text-emerald-400">
                        ✓ COMPLETED
                      </span>

                    </div>

                    <h4 className="mt-4 text-2xl font-semibold text-white">
                      Volunteer
                    </h4>

                    <p className="mt-1 text-sm text-cyan-400">
                      Foundation Literacy
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                      Started as a volunteer supporting Foundation
                      Literacy activities and contributing to the
                      learning and development of children at the center.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {[
                        "Foundation Literacy",
                        "Teaching",
                        "Community Service",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-800 px-3 py-1.5 font-mono text-[9px] text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

                {/* ================================= */}
                {/* PROMOTION */}
                {/* ================================= */}

                <div className="my-8 flex items-center gap-4 md:ml-[150px]">

                  <div className="h-px w-8 bg-slate-800" />

                  <div className="flex items-center gap-2 rounded-md border border-emerald-400/15 bg-emerald-400/5 px-3 py-2">

                    <span className="text-emerald-400">
                      ↓
                    </span>

                    <span className="font-mono text-[8px] tracking-[0.2em] text-emerald-400">
                      PROMOTED
                    </span>

                  </div>

                  <div className="h-px flex-1 bg-slate-800" />

                </div>

                {/* ================================= */}
                {/* ROLE 02 */}
                {/* ================================= */}

                <div className="grid gap-6 md:grid-cols-[150px_1fr]">

                  {/* Year */}
                  <div>

                    <p className="font-mono text-[9px] tracking-[0.2em] text-cyan-400">
                      YEAR 02
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Second Year
                    </p>

                  </div>

                  {/* Role */}
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.025] p-6">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-400/70">
                        ROLE_02
                      </span>

                      <span className="font-mono text-[9px] text-cyan-400">
                        ● CURRENT
                      </span>

                    </div>

                    <h4 className="mt-4 text-2xl font-semibold text-white">
                      Center Leader
                    </h4>

                    <p className="mt-1 text-sm text-cyan-400">
                      Kanasu Center
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                      Progressed into a Center Leader role after a year
                      of volunteering, taking responsibility for
                      volunteer coordination, planning, meetings,
                      communication, and center activities.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {[
                        "Leadership",
                        "Volunteer Management",
                        "Planning",
                        "Communication",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 font-mono text-[9px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

                {/* Progression Footer */}
                <div className="mt-10 flex items-center justify-center gap-3 border-t border-slate-800 pt-6">

                  <span className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
                    VOLUNTEER
                  </span>

                  <span className="text-cyan-400">
                    →
                  </span>

                  <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-400">
                    CENTER LEADER
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* ======================================= */}
          {/* VALTECH — SEPARATE ORGANIZATION */}
          {/* ======================================= */}

          <div className="relative lg:grid lg:grid-cols-[170px_1fr] lg:gap-12">

            {/* Timeline year */}
            <div className="hidden lg:block">

              <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-400">
                2026
              </p>

              <p className="mt-2 font-mono text-2xl font-semibold text-white">
                02
              </p>

              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.15em] text-slate-700">
                PROFESSIONAL
              </p>

            </div>

            {/* Timeline node */}
            <div className="absolute left-[79px] top-8 z-10 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] lg:block" />

            {/* Valtech Case File */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/75 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30">

              <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              <div className="grid md:grid-cols-[1fr_190px]">

                {/* Main */}
                <div className="p-8 md:p-10">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="font-mono text-[9px] tracking-[0.25em] text-slate-600">
                      EXPERIENCE_RECORD_02
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-700" />

                    <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-400">
                      PROFESSIONAL
                    </span>

                  </div>

                  <div className="mt-7">

                    <p className="font-mono text-[9px] tracking-[0.3em] text-slate-600">
                      ORGANIZATION
                    </p>

                    <h3 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
                      VALTECH
                    </h3>

                  </div>

                  <div className="mt-7">

                    <p className="font-mono text-[9px] tracking-[0.25em] text-slate-600">
                      ROLE
                    </p>

                    <h4 className="mt-2 text-2xl font-semibold text-white">
                      Frontend Developer Intern
                    </h4>

                  </div>

                  <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400">
                    Gained hands-on experience in frontend development
                    within a professional environment, working with
                    modern web technologies and collaborative development
                    workflows.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {[
                      "Frontend Development",
                      "Responsive UI",
                      "Web Technologies",
                      "Team Collaboration",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-800 px-3 py-1.5 font-mono text-[9px] text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Metadata */}
                <div className="border-t border-slate-800 bg-slate-900/20 p-8 md:border-l md:border-t-0">

                  <p className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
                    RECORD
                  </p>

                  <div className="mt-6 space-y-6">

                    <div>
                      <p className="font-mono text-[8px] text-slate-700">
                        YEAR
                      </p>

                      <p className="mt-1 font-mono text-xs text-slate-400">
                        2026
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[8px] text-slate-700">
                        STATUS
                      </p>

                      <p className="mt-1 font-mono text-[9px] text-emerald-400">
                        ✓ COMPLETED
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[8px] text-slate-700">
                        TYPE
                      </p>

                      <p className="mt-1 font-mono text-[9px] text-slate-400">
                        INTERNSHIP
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================= */}
        {/* FOOTER STRIP */}
        {/* ========================================= */}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">

          <span>EXPERIENCE_LOG</span>

          <span>02 ORGANIZATIONS</span>

          <span>U&I → LEADERSHIP</span>

          <span className="text-emerald-500/70">
            STATUS: ACTIVE
          </span>

        </div>

      </div>
    </section>
  );
}