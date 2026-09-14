"use client";

import { useState } from "react";

function ResumeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M6 3.5h8l4 4V20.5H6V3.5Z" />
      <path d="M14 3.5v4h4" />
      <path d="M9 12h6" />
      <path d="M9 15.5h6" />
    </svg>
  );
}

export default function Resume() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section
        id="resume"
        className="relative px-6 py-20 sm:py-24"
      >
        <div className="mx-auto w-full max-w-6xl">

          {/* Section header */}
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
              08 // RESUME
            </span>

            <div className="h-px flex-1 bg-slate-800" />

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700 sm:block">
              DOCUMENT_MODULE
            </span>
          </div>

          {/* Resume card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur-xl">

            {/* Subtle glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />

            <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">

              {/* Document information */}
              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                  <ResumeIcon />
                </div>

                <div className="min-w-0">

                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                    PROFESSIONAL DOCUMENT
                  </p>

                  <h2 className="mt-2 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Sanjith R S — Resume
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    A complete overview of my academic background,
                    professional experience, projects, technical skills,
                    and certifications.
                  </p>

                  {/* Metadata */}
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-[0.15em]">

                    <span className="text-slate-600">
                      FORMAT:{" "}
                      <span className="text-slate-400">
                        PDF
                      </span>
                    </span>

                    <span className="text-slate-600">
                      STATUS:{" "}
                      <span className="text-emerald-400">
                        AVAILABLE
                      </span>
                    </span>

                    <span className="text-slate-600">
                      UPDATED:{" "}
                      <span className="text-slate-400">
                        2026
                      </span>
                    </span>

                  </div>

                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 lg:justify-end">

                {/* View Resume */}
                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                >
                  View Resume

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                {/* Download */}
                <a
                  href="/resume/Sanjith_R_S_Resume.pdf"
                  download="Sanjith R S - Resume.pdf"
                  className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/70 hover:text-white"
                >
                  Download

                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>

              </div>

            </div>
          </div>

          {/* Bottom metadata */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">

            <span>
              DOCUMENT_TYPE: PROFESSIONAL_RESUME
            </span>

            <span>
              ACCESS: PUBLIC
            </span>

            <span className="text-emerald-500/70">
              CONNECTION: SECURE
            </span>

          </div>

        </div>
      </section>

      {/* Resume Viewer Modal */}
      {resumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6">

          {/* Viewer */}
          <div className="relative flex h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-[0_0_60px_rgba(34,211,238,0.08)]">

            {/* Viewer Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3 sm:px-6">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                  <ResumeIcon />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    DOCUMENT_VIEWER
                  </p>

                  <p className="font-mono text-xs text-slate-300">
                    IDENTITY_RECORD // SANJITH R S
                  </p>
                </div>

              </div>

              {/* Close */}
              <button
                type="button"
                onClick={() => setResumeOpen(false)}
                aria-label="Close resume viewer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-all hover:border-red-400/30 hover:text-red-300"
              >
                ✕
              </button>

            </div>

            {/* PDF */}
            <div className="min-h-0 flex-1 bg-slate-900">

              <iframe
                src="/resume/Sanjith_R_S_Resume.pdf"
                title="Sanjith R S Resume"
                className="h-full w-full border-0"
              />

            </div>

            {/* Viewer Footer */}
            <div className="flex shrink-0 items-center justify-between border-t border-slate-800 bg-slate-950 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700 sm:px-6">

              <span>
                PDF_DOCUMENT // VERIFIED
              </span>

              <span className="text-emerald-500/70">
                DOCUMENT_LOADED
              </span>

            </div>

          </div>
        </div>
      )}
    </>
  );
}