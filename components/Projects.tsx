export default function Projects() {
  const projects = [
    {
      number: "CASE_001",
      status: "UNDER DEVELOPMENT",
      statusColor: "text-amber-400",
      title: "Adaptive Cybersecurity",
      description:
        "A major cybersecurity project focused on building an adaptive security system that can intelligently respond to evolving threats and security scenarios.",
      technologies: [
        "Cybersecurity",
        "Adaptive Security",
        "AI",
        "Threat Detection",
        "Security Analysis",
      ],
      classification: "MAJOR_PROJECT",
      systemStatus: "IN PROGRESS",
    },
    {
      number: "CASE_002",
      status: "SOFTWARE SYSTEM",
      statusColor: "text-cyan-400",
      title: "DeskHop",
      description:
        "A web-based hot desk management system designed to simplify desk booking, resource management, and workplace compliance through a centralized platform.",
      technologies: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "SQLite",
        "Web Development",
      ],
      classification: "DESK_MANAGEMENT",
      systemStatus: "OPERATIONAL",
    },
    {
      number: "CASE_003",
      status: "SECURITY SYSTEM",
      statusColor: "text-cyan-400",
      title: "Silent SOS",
      description:
        "A discreet emergency communication and safety system designed to enable users to trigger an SOS response when conventional communication may not be practical.",
      technologies: [
        "Security",
        "Emergency Systems",
        "Real-Time Communication",
        "Frontend",
      ],
      classification: "EMERGENCY_SECURITY",
      systemStatus: "OPERATIONAL",
    },
    {
      number: "CASE_004",
      status: "CYBERSECURITY",
      statusColor: "text-cyan-400",
      title: "URL Risk Analyzer",
      description:
        "A web-based security application that analyzes URLs and evaluates potential phishing or malicious activity using heuristic risk scoring.",
      technologies: [
        "Python",
        "Flask",
        "SQLite",
        "Risk Analysis",
        "Web Security",
      ],
      classification: "THREAT_ANALYSIS",
      systemStatus: "OPERATIONAL",
    },
    {
      number: "CASE_005",
      status: "EMBEDDED SECURITY",
      statusColor: "text-cyan-400",
      title: "Integrated Surveillance Detection System",
      description:
        "An embedded security system combining hardware components with real-time surveillance and detection capabilities for security-focused applications.",
      technologies: [
        "ESP32",
        "Embedded Systems",
        "Sensors",
        "Security",
        "Real-Time Detection",
      ],
      classification: "SURVEILLANCE_SYSTEM",
      systemStatus: "ACTIVE",
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-6 py-28"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            04 // PROJECTS
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">
            Selected Operations
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Security{" "}
            <span className="text-cyan-400">
              Case Files
            </span>
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            A collection of projects spanning cybersecurity,
            software development, intelligent systems, and
            embedded security.
          </p>
        </div>

        {/* Project Cases */}
        <div className="space-y-6">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
            >

              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              <div className="grid gap-8 p-7 md:grid-cols-[0.7fr_1.8fr_0.7fr] md:p-9">

                {/* Metadata */}
                <div className="flex flex-row justify-between md:flex-col">

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-400">
                      {project.number}
                    </p>

                    <p className="mt-3 font-mono text-[9px] uppercase tracking-wider text-slate-600">
                      CLASSIFICATION
                    </p>

                    <p className="mt-1 font-mono text-[10px] text-slate-400">
                      {project.classification}
                    </p>
                  </div>

                  <div className="text-right md:text-left">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                      PROJECT TYPE
                    </p>

                    <p
                      className={`mt-1 font-mono text-[10px] ${project.statusColor}`}
                    >
                      ● {project.status}
                    </p>
                  </div>

                </div>

                {/* Main Content */}
                <div>

                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5 font-mono text-[9px] text-slate-500 transition-colors group-hover:border-slate-700 group-hover:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Status Panel */}
                <div className="flex flex-col justify-between border-t border-slate-800 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">

                  <div>

                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                      SYSTEM STATUS
                    </p>

                    <p
                      className={`mt-2 font-mono text-xs ${
                        project.systemStatus === "IN PROGRESS"
                          ? "text-amber-400"
                          : "text-emerald-400"
                      }`}
                    >
                      ● {project.systemStatus}
                    </p>

                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">

                    <a
  href="#"
  className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-4 py-2.5 font-mono text-[9px] uppercase tracking-wider text-cyan-300 transition-all hover:border-cyan-300 hover:bg-cyan-400/10"
>
  View Case →
</a>

<a
  href="#"
  className="rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2.5 font-mono text-[9px] uppercase tracking-wider text-slate-400 transition-all hover:border-slate-600 hover:text-slate-200"
>
  GitHub ↗
</a>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom System Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800/70 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
          <span>CASE_DATABASE: ACTIVE</span>
          <span>FILES_INDEXED: 05</span>
          <span>ACCESS_LEVEL: PUBLIC</span>
        </div>

      </div>
    </section>
  );
}