"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* Brand */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="group flex items-center gap-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 font-mono text-[10px] text-cyan-400 transition-all group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
            SR
          </div>

          <div className="hidden sm:block">
            <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-white">
              SANJITH R S
            </p>

            <p className="font-mono text-[7px] tracking-[0.18em] text-slate-600">
              CYBER SECURITY
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-lg px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-slate-500 transition-colors hover:text-cyan-400"
            >
              <span className="mr-1.5 text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.label}

              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-2/3" />
            </a>
          ))}
        </nav>

        {/* Status */}
        <div className="hidden items-center gap-2 lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
            Available
          </span>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-4 bg-slate-400 transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-4 bg-slate-400 transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-4 bg-slate-400 transition-transform ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-5 md:hidden">
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center gap-4 rounded-lg px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-slate-500 transition-colors hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                <span className="text-slate-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
              Available for opportunities
            </span>
          </div>
        </div>
      )}
    </header>
  );
}