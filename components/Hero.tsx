export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-[8%] top-[18%] h-px w-32 bg-cyan-400/30" />
        <div className="absolute right-[8%] top-[30%] h-px w-40 bg-cyan-400/20" />
        <div className="absolute left-[12%] bottom-[22%] h-px w-24 bg-cyan-400/20" />
        <div className="absolute right-[14%] bottom-[18%] h-px w-28 bg-cyan-400/30" />

        <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        <div className="absolute right-[8%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        <div className="absolute left-[12%] bottom-[22%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        <div className="absolute right-[14%] bottom-[18%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl animate-fade-up">

        {/* System header */}
        <div className="mx-auto mb-12 flex max-w-5xl items-center justify-between border-y border-slate-800/80 py-3 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span>System Online</span>
          </div>

          <div className="hidden sm:block">
            Secure Connection // 256-BIT
          </div>

          <div>
            Bengaluru // IN
          </div>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Main hero content */}
          <div>

            <p className="mb-5 font-mono text-sm uppercase tracking-[0.35em] text-cyan-400">
              01 // Identity Verified
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
              Sanjith R S
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg font-medium text-slate-400 sm:text-xl">
              <span>Cyber Security</span>
              <span className="text-cyan-400">×</span>
              <span>Frontend Development</span>
              <span className="text-cyan-400">×</span>
              <span>AI / ML</span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build secure, responsive, and intelligent digital
              experiences by combining cybersecurity, modern frontend
              technologies, and artificial intelligence.
            </p>

            {/* Hero actions */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                Explore Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Resume */}
              <a
                href="#resume"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
              >
                Resume Record

                <span className="text-slate-500 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:text-cyan-400">
                  ↗
                </span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 px-6 py-3.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:border-slate-600 hover:bg-slate-900/70 hover:text-slate-200"
              >
                Establish Connection
              </a>

            </div>

          </div>

          {/* Security profile panel */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-3xl bg-cyan-400/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 p-6 shadow-2xl backdrop-blur-xl">

              {/* Profile header */}
              <div className="mb-7 flex items-center gap-5 border-b border-slate-800 pb-5">

                {/* Profile Image */}
                <div className="relative shrink-0">

                  <div className="absolute -inset-1 rounded-xl bg-cyan-400/20 blur-md" />

                  <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-900">
                    <img
                      src="/image.png"
                      alt="Sanjith R S"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                </div>

                {/* Profile Info */}
                <div className="min-w-0 flex-1">

                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    Security Profile
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    SANJITH_RS.EXE
                  </p>

                </div>

                <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                  Active
                </span>

              </div>

              {/* Status rows */}
              <div className="space-y-5">

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">
                    CYBER_SECURITY
                  </span>

                  <span className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    ACTIVE
                  </span>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">
                    FRONTEND_DEV
                  </span>

                  <span className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    ACTIVE
                  </span>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">
                    AI_ML
                  </span>

                  <span className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    EXPLORING
                  </span>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">
                    SYSTEM_STATUS
                  </span>

                  <span className="text-xs font-semibold text-emerald-400">
                    SECURE
                  </span>
                </div>

              </div>

              {/* Terminal-style footer */}
              <div className="mt-8 rounded-lg border border-slate-800 bg-black/40 p-4 font-mono text-[10px] leading-6 text-slate-500">

                <p>
                  <span className="text-cyan-400">$</span>{" "}
                  initialize_profile
                </p>

                <p>
                  <span className="text-emerald-400">✓</span>{" "}
                  identity_verified
                </p>

                <p>
                  <span className="text-emerald-400">✓</span>{" "}
                  secure_channel_established
                </p>

                <p>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="animate-pulse">_</span>
                </p>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom metadata */}
        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
          <span>SECURITY // FRONTEND // AI</span>
          <span>PORTFOLIO_SYSTEM v1.0</span>
          <span>STATUS: OPERATIONAL</span>
        </div>

      </div>
    </section>
  );
}