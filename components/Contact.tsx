export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background grid */}
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
              Let's Connect
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

              <a
                href="mailto:sanjithreganti@gmail.com"
                className="mt-4 block break-all text-2xl font-semibold tracking-tight text-white transition-colors hover:text-cyan-400 md:text-4xl"
              >
                sanjithreganti@gmail.com
              </a>

              <div className="mt-10 h-px bg-slate-800" />

              {/* Phone */}
              <div className="mt-8">

                <p className="font-mono text-[9px] tracking-[0.2em] text-slate-700">
                  PHONE
                </p>

                <a
                  href="tel:+919663833633"
                  className="mt-2 inline-block text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  +91 96638 33633
                </a>

              </div>

              {/* Location */}
              <div className="mt-7">

                <p className="font-mono text-[9px] tracking-[0.2em] text-slate-700">
                  LOCATION
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Bengaluru, Karnataka, India
                </p>

              </div>

              {/* Availability */}
              <div className="mt-7">

                <p className="font-mono text-[9px] tracking-[0.2em] text-slate-700">
                  AVAILABILITY
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <p className="text-sm text-slate-400">
                    Open to internships & opportunities
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
                  className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div>
                    <p className="font-mono text-[9px] text-slate-700">
                      ENDPOINT_01
                    </p>

                    <p className="mt-1 text-sm text-slate-300 group-hover:text-white">
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
                  className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div>
                    <p className="font-mono text-[9px] text-slate-700">
                      ENDPOINT_02
                    </p>

                    <p className="mt-1 text-sm text-slate-300 group-hover:text-white">
                      LinkedIn
                    </p>
                  </div>

                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>

                </a>

                {/* Email */}
                <a
                  href="mailto:sanjithreganti@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div>
                    <p className="font-mono text-[9px] text-slate-700">
                      ENDPOINT_03
                    </p>

                    <p className="mt-1 text-sm text-slate-300 group-hover:text-white">
                      Email
                    </p>
                  </div>

                  <span className="text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>

                </a>

                {/* Phone */}
                <a
                  href="tel:+919663833633"
                  className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >

                  <div>
                    <p className="font-mono text-[9px] text-slate-700">
                      ENDPOINT_04
                    </p>

                    <p className="mt-1 text-sm text-slate-300 group-hover:text-white">
                      Phone
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

          <span>CHANNEL: OPEN</span>

          <span>RESPONSE_STATUS: AVAILABLE</span>

          <span className="text-emerald-500/70">
            CONNECTION: STABLE
          </span>

        </div>

      </div>
    </section>
  );
}