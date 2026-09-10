function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.486 2 12.022c0 4.43 2.865 8.19 6.839 9.514.5.093.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.606-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.622.069-.61.069-.61 1.004.071 1.532 1.034 1.532 1.034.892 1.532 2.341 1.09 2.912.834.091-.648.35-1.09.636-1.341-2.221-.254-4.555-1.115-4.555-4.961 0-1.096.39-1.993 1.029-2.696-.103-.253-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.029A9.51 9.51 0 0 1 12 6.91a9.5 9.5 0 0 1 2.5.34c1.91-1.299 2.748-1.029 2.748-1.029.546 1.382.203 2.403.1 2.656.64.703 1.028 1.6 1.028 2.696 0 3.856-2.338 4.704-4.566 4.952.359.31.678.92.678 1.854 0 1.338-.012 2.417-.012 2.745 0 .269.18.581.688.482A10.024 10.024 0 0 0 22 12.022C22 6.486 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.6 3.5h2.2l1.1 4.2-1.8 1.8a15.8 15.8 0 0 0 6.4 6.4l1.8-1.8 4.2 1.1v2.2c0 1-.8 1.8-1.8 1.8C11.3 19.2 4.8 12.7 4.8 4.9c0-1 .8-1.8 1.8-1.8Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:py-32"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16">

          <div className="flex items-center gap-4">

            <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
              07 // COMMUNICATION
            </span>

            <div className="h-px flex-1 bg-slate-800" />

            <span className="hidden font-mono text-[9px] tracking-[0.2em] text-slate-700 sm:block">
              SECURE_CHANNEL
            </span>

          </div>

          <div className="mt-10 max-w-3xl">

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">
              OPEN CONNECTION
            </p>

            <h2 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Let&apos;s Connect
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
              Interested in collaborating, discussing an opportunity,
              or building something meaningful together? Feel free to
              reach out.
            </p>

          </div>

        </div>

        {/* CONTACT TERMINAL */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl">

          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

            <div className="flex items-center gap-3">

              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
              </div>

              <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                CONTACT_PROTOCOL
              </span>

            </div>

            <span className="font-mono text-[9px] text-emerald-400">
              ● ONLINE
            </span>

          </div>

          {/* Terminal Body */}
          <div className="grid md:grid-cols-[1fr_280px]">

            {/* Main Contact */}
            <div className="p-8 md:p-12">

              <p className="font-mono text-[9px] tracking-[0.25em] text-slate-600">
                PRIMARY_CHANNEL
              </p>

              {/* Contact Methods */}
              <div className="mt-8 space-y-5">

                {/* Email */}
                <a
                  href="mailto:sanjithreganti@gmail.com"
                  className="group flex items-center gap-4"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                    <MailIcon />
                  </div>

                  <div className="flex min-w-0 flex-1 items-center gap-4">

                    <span className="w-14 shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                      EMAIL
                    </span>

                    <span className="truncate text-sm font-medium text-slate-300 transition-colors group-hover:text-cyan-400 sm:text-base">
                      sanjithreganti@gmail.com
                    </span>

                  </div>

                </a>

                {/* Phone */}
                <a
                  href="tel:+919663833633"
                  className="group flex items-center gap-4"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                    <PhoneIcon />
                  </div>

                  <div className="flex min-w-0 flex-1 items-center gap-4">

                    <span className="w-14 shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                      PHONE
                    </span>

                    <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-cyan-400 sm:text-base">
                      +91 96638 33633
                    </span>

                  </div>

                </a>

                {/* Location */}
                <div className="flex items-center gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400">
                    <LocationIcon />
                  </div>

                  <div className="flex min-w-0 flex-1 items-center gap-4">

                    <span className="w-14 shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                      LOCATION
                    </span>

                    <span className="text-sm font-medium text-slate-300 sm:text-base">
                      Bengaluru, Karnataka, India
                    </span>

                  </div>

                </div>

              </div>

              {/* Divider */}
              <div className="mt-10 h-px bg-slate-800" />

              {/* Availability */}
              <div className="mt-8">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  AVAILABILITY
                </p>

                <div className="mt-3 flex items-center gap-3">

                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

                  <p className="text-base font-medium text-slate-300 sm:text-lg">
                    Open to internships &amp; opportunities
                  </p>

                </div>

              </div>

            </div>

            {/* Network Endpoints */}
            <div className="border-t border-slate-800 bg-slate-900/20 p-8 md:border-l md:border-t-0">

              <p className="font-mono text-[9px] tracking-[0.25em] text-slate-600">
                NETWORK_ENDPOINTS
              </p>

              <div className="mt-6 space-y-3">

                {/* GitHub */}
                <a
                  href="https://github.com/Sanjith0804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-cyan-400 transition-colors group-hover:border-cyan-400/20">
                    <GitHubIcon />
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="font-mono text-[9px] text-slate-700">
                      ENDPOINT_01
                    </p>

                    <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-cyan-400">
                      GitHub
                    </p>

                  </div>

                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>

                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sanjith-rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-cyan-400 transition-colors group-hover:border-cyan-400/20">
                    <LinkedInIcon />
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="font-mono text-[9px] text-slate-700">
                      ENDPOINT_02
                    </p>

                    <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-cyan-400">
                      LinkedIn
                    </p>

                  </div>

                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Status */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">

          <span>
            CHANNEL: OPEN
          </span>

          <span>
            RESPONSE_STATUS: AVAILABLE
          </span>

          <span className="text-emerald-500/70">
            CONNECTION: STABLE
          </span>

        </div>

      </div>
    </section>
  );
}