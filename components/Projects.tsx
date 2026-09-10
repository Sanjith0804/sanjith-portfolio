"use client";

import { useState } from "react";

type Project = {
  number: string;
  status: string;
  statusColor: string;
  title: string;
  description: string;
  technologies: string[];
  classification: string;
  systemStatus: string;
  details: string;
  icon: "shield" | "desk" | "sos" | "url" | "surveillance";
};

function ProjectIcon({ type }: { type: Project["icon"] }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    className: "h-4 w-4",
    "aria-hidden": true,
  };

  /* Adaptive Cybersecurity */
  if (type === "shield") {
    return (
      <svg {...commonProps}>
        <path d="M12 3 19 6v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" />
        <path d="M12 8v4" />
        <path d="M12 15v.01" />
      </svg>
    );
  }

  /* DeskHop */
  if (type === "desk") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <path d="M8 19h8" />
        <path d="M12 16v3" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    );
  }

  /* Silent SOS */
  if (type === "sos") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M9.5 9.5c.8-.8 1.6-1.2 2.5-1.2s1.7.4 2.5 1.2" />
        <path d="M8 16c1.1 1 2.5 1.5 4 1.5s2.9-.5 4-1.5" />
        <path d="M12 11v3" />
        <path d="M12 16v.01" />
      </svg>
    );
  }

  /* URL Risk Analyzer */
  if (type === "url") {
    return (
      <svg {...commonProps}>
        <path d="M9.5 14.5 8 16a3 3 0 0 1-4.2-4.2l3-3A3 3 0 0 1 11 8" />
        <path d="m14.5 9.5 1.5-1.5a3 3 0 0 1 4.2 4.2l-3 3A3 3 0 0 1 13 16" />
        <path d="m9 12 6 0" />
        <path d="M17 16.5v3" />
        <path d="M17 21v.01" />
      </svg>
    );
  }

  /* Integrated Surveillance Detection System */
  return (
    <svg {...commonProps}>
      <rect x="4" y="7" width="13" height="10" rx="2" />
      <path d="m17 10 3-2v8l-3-2" />
      <circle cx="10.5" cy="12" r="2.5" />
      <path d="M7 19h7" />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const projects: Project[] = [
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
      details:
        "A major cybersecurity initiative focused on developing an adaptive security system capable of responding intelligently to evolving threats and changing security scenarios.",
      icon: "shield",
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
      details:
        "A centralized hot desk management platform designed to simplify desk booking, resource management, and workplace compliance through a web-based system.",
      icon: "desk",
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
      details:
        "A discreet emergency communication and safety system designed to provide users with a simple mechanism to trigger an SOS response when conventional communication may not be practical.",
      icon: "sos",
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
      details:
        "A web-based security application that analyzes URLs and evaluates potential phishing or malicious activity using heuristic risk scoring techniques.",
      icon: "url",
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
      details:
        "An embedded security system combining hardware components with real-time surveillance and detection capabilities for security-focused applications.",
      icon: "surveillance",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="relative px-6 py-24 sm:py-28"
      >
        <div className="mx-auto w-full max-w-6xl">

          {/* Section Header */}
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
              05 // PROJECTS
            </span>

            <div className="h-px flex-1 bg-slate-800" />

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700 sm:block">
              CASE_DATABASE
            </span>
          </div>

          {/* Heading */}
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
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/60"
              >

                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                <div className="relative grid gap-8 p-7 md:grid-cols-[0.7fr_1.8fr_0.7fr] md:p-9">

                  {/* Metadata */}
                  <div className="flex flex-row justify-between md:flex-col">

                    <div>

                      {/* Project identity */}
                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                          <ProjectIcon type={project.icon} />
                        </div>

                        <div>
                          <p className="font-mono text-[10px] tracking-[0.25em] text-cyan-400">
                            {project.number}
                          </p>

                          <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-slate-600">
                            CASE FILE
                          </p>
                        </div>

                      </div>

                      <p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-slate-600">
                        CLASSIFICATION
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-slate-400">
                        {project.classification}
                      </p>

                    </div>

                    <div className="text-right md:mt-8 md:text-left">

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

                    <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                      {project.description}
                    </p>

                    {/* Technologies — intentionally text only */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5 font-mono text-[9px] text-slate-500 transition-colors duration-200 group-hover:border-slate-700 group-hover:text-slate-300"
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

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProject(project)
                        }
                        className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-4 py-2.5 font-mono text-[9px] uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                      >
                        View Case →
                      </button>

                      <a
                        href="#"
                        onClick={(event) =>
                          event.preventDefault()
                        }
                        aria-label={`GitHub repository for ${project.title}`}
                        className="rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2.5 font-mono text-[9px] uppercase tracking-wider text-slate-400 transition-all hover:border-slate-600 hover:text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
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

            <span>
              CASE_DATABASE: ACTIVE
            </span>

            <span>
              FILES_INDEXED: 05
            </span>

            <span>
              ACCESS_LEVEL: PUBLIC
            </span>

          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950 shadow-[0_0_60px_rgba(34,211,238,0.08)]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-950/95 px-6 py-4 backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                  <ProjectIcon type={selectedProject.icon} />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    {selectedProject.number}
                  </p>

                  <p className="font-mono text-xs text-slate-300">
                    CASE_FILE_VIEWER
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-all hover:border-red-400/30 hover:text-red-300 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
              >
                ✕
              </button>

            </div>

            {/* Modal Content */}
            <div className="p-7 sm:p-9">

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-cyan-300">
                  {selectedProject.classification}
                </span>

                <span
                  className={`font-mono text-[9px] uppercase tracking-wider ${selectedProject.statusColor}`}
                >
                  ● {selectedProject.status}
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {selectedProject.title}
              </h2>

              <div className="mt-8">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  OVERVIEW
                </p>

                <p className="mt-3 text-sm leading-8 text-slate-400 sm:text-base">
                  {selectedProject.details}
                </p>

              </div>

              {/* Technologies */}
              <div className="mt-8">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  TECHNOLOGIES
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {selectedProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 font-mono text-[9px] text-slate-400"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* Status */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">

                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                    SYSTEM STATUS
                  </p>

                  <p
                    className={`mt-2 font-mono text-xs ${
                      selectedProject.systemStatus ===
                      "IN PROGRESS"
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}
                  >
                    ● {selectedProject.systemStatus}
                  </p>

                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">

                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                    CLASSIFICATION
                  </p>

                  <p className="mt-2 font-mono text-xs text-slate-400">
                    {selectedProject.classification}
                  </p>

                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-800 px-6 py-4 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
              CASE_DATABASE // RECORD_LOADED
            </div>

          </div>
        </div>
      )}
    </>
  );
}