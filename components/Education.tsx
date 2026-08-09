export default function Education() {
  const education = [
    {
      number: "01",
      period: "2023 — PRESENT",
      status: "CURRENT",
      institution: "RNS Institute of Technology",
      degree: "B.E. Computer Science & Engineering",
      specialization: "Specialization — Cyber Security",
      location: "Bengaluru, Karnataka",
      current: true,
    },
    {
      number: "02",
      period: "2021 — 2023",
      status: "COMPLETED",
      institution: "Deeksha College",
      degree: "Pre-University Education",
      specialization: "Percentage — 89.70%",
      location: "Bengaluru, Karnataka",
      current: false,
    },
    {
      number: "03",
      period: "SCHOOL EDUCATION",
      status: "COMPLETED",
      institution: "Sudarshan Vidya Mandir",
      degree: "School Education",
      specialization: "",
      location: "Bengaluru, Karnataka",
      current: false,
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-slate-800/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            04 // EDUCATION
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">
            Academic Record
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Education{" "}
            <span className="text-cyan-400">
              Log
            </span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            The academic foundation behind my work in cybersecurity,
            software development, and emerging technologies.
          </p>
        </div>

        {/* Education records */}
        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-[23px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-cyan-400/40 via-slate-700 to-transparent md:block" />

          <div className="space-y-6">

            {education.map((item) => (
              <div
                key={item.number}
                className="group relative md:pl-16"
              >

                {/* Timeline node */}
                <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-950 font-mono text-xs text-cyan-400 md:flex">
                  {item.number}
                </div>

                {/* Record */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/70 sm:p-8">

                  {/* Hover glow */}
                  <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                  {/* Top metadata */}
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                        {item.period}
                      </span>

                      <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                        ACADEMIC_RECORD
                      </span>

                    </div>

                    <span
                      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] ${
                        item.current
                          ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                          : "border-slate-700 bg-slate-900/60 text-slate-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.current
                            ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                            : "bg-slate-600"
                        }`}
                      />

                      {item.status}
                    </span>

                  </div>

                  {/* Institution */}
                  <div className="relative mt-7">

                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400/70">
                      {item.number} / INSTITUTION
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {item.institution}
                    </h3>

                    <p className="mt-3 text-base font-medium text-slate-300 sm:text-lg">
                      {item.degree}
                    </p>

                    {item.specialization && (
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {item.specialization}
                      </p>
                    )}

                  </div>

                  {/* Bottom metadata */}
                  <div className="relative mt-7 flex flex-col gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
                      LOCATION
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
                      {item.location}
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom technical strip */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800/70 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">

          <span>
            EDUCATION_LEVEL: UNDERGRADUATE
          </span>

          <span>
            RECORDS: 03
          </span>

          <span>
            STATUS: ACTIVE
          </span>

        </div>

      </div>
    </section>
  );
}