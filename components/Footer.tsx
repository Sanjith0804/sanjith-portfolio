export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Identity */}
          <div>

            <p className="font-mono text-[9px] tracking-[0.3em] text-cyan-400">
              SANJITH R S
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Cyber Security • Frontend Development
            </p>

          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">

            <a
              href="#about"
              className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 transition-colors hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 transition-colors hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 transition-colors hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 transition-colors hover:text-cyan-400"
            >
              Experience
            </a>

            <a
              href="#certifications"
              className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 transition-colors hover:text-cyan-400"
            >
              Credentials
            </a>

            <a
              href="#contact"
              className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 transition-colors hover:text-cyan-400"
            >
              Contact
            </a>

          </nav>

        </div>

        {/* System Divider */}
        <div className="my-8 h-px bg-slate-900" />

        {/* Bottom System Information */}
        <div className="flex flex-col gap-4 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 SANJITH R S
          </span>

          <div className="flex flex-wrap gap-5">

            <span>
              SYSTEM: ONLINE
            </span>

            <span>
              ACCESS: PUBLIC
            </span>

            <span className="text-emerald-500/70">
              ● SECURE
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}