
export default function Skills() {
  const modules = [
    {
      number: "01",
      title: "Frontend Engineering",
      code: "FRONTEND_MODULE",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      number: "02",
      title: "Cybersecurity",
      code: "SECURITY_MODULE",
      skills: [
        "Network Security",
        "Cryptography",
        "Web Security",
        "Nmap",
        "Security Analysis",
        "NIST CSF",
      ],
    },
    {
      number: "03",
      title: "AI / Machine Learning",
      code: "AI_MODULE",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "OpenCV",
        "Gemini API",
      ],
    },
    {
      number: "04",
      title: "Tools & Technologies",
      code: "TOOLS_MODULE",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Flask",
        "FastAPI",
        "SQLite",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative px-6 py-28"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            04 // SKILLS
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">
            Capability Matrix
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical{" "}
            <span className="text-cyan-400">
              Arsenal
            </span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            A growing collection of technologies and security concepts
            I use to build, analyze, and solve real-world problems.
          </p>
        </div>

        {/* Skill modules */}
        <div className="grid gap-5 md:grid-cols-2">

          {modules.map((module) => (
            <div
              key={module.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/70"
            >

              {/* Hover glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

              {/* Module header */}
              <div className="relative flex items-start justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 font-mono text-xs text-cyan-400">
                    {module.number}
                  </div>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                      {module.code}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {module.title}
                    </h3>
                  </div>

                </div>

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-800" />

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">

                {module.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 font-mono text-[10px] text-slate-400 transition-colors duration-200 hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Module status */}
              <div className="mt-7 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider">

                <span className="text-slate-700">
                  Module Loaded
                </span>

                <span className="text-emerald-500">
                  ● Operational
                </span>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom technical strip */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800/70 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
          <span>SECURITY_LEVEL: DEVELOPING</span>
          <span>MODULES: 04</span>
          <span>STATUS: ACTIVE</span>
        </div>

      </div>
    </section>
  );
}

