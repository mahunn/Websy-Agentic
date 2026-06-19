import Link from 'next/link';

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#050505] bg-[radial-gradient(circle_at_80%_20%,rgba(225,29,72,0.07)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(24,24,27,0.3)_0%,transparent_60%)]"
        aria-labelledby="hero-headline"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] pointer-events-none z-0" 
          style={{ backgroundImage: "url('/hero_background.png')" }} 
          role="presentation" 
        />
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.1)_40%,#050505_100%)] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow tag */}
            <div className="mb-6">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                Web Development Agency
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-[1.05]"
            >
              We build websites<br />
              that <span className="text-primary bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent font-normal">sell.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed mb-10 max-w-[48ch]">
              Premium e-commerce stores, high-converting landing pages,
              and standout portfolios — built for small businesses
              that mean business.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-base font-semibold py-4.5 px-8 rounded-full transition-all duration-200 shadow-lg shadow-primary/10 hover:shadow-primary/25 hover:-translate-y-[1px]"
              >
                Launch Your Project
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white text-base font-semibold py-4.5 px-8 rounded-full border-1.5 border-white transition-all duration-200 hover:border-primary"
              >
                Explore Live Work
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Social proof dot */}
              <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium sm:ml-4 mt-2 sm:mt-0">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#E11D48]" />
                3 live projects shipped &amp; growing
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none" aria-hidden="true">
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* Stats Band */}
      <section
        className="bg-[#0f0f0f] border-y border-zinc-800/40 py-12 px-6 md:px-8"
        aria-label="Key statistics"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-y-8 gap-x-12">
          {/* Stat Item 1 */}
          <div className="text-center min-w-[120px]">
            <div className="text-4xl md:text-5xl font-light text-white mb-1">
              3<span className="text-primary">+</span>
            </div>
            <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Live Projects</div>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-zinc-800/60 self-center" role="separator" />

          {/* Stat Item 2 */}
          <div className="text-center min-w-[120px]">
            <div className="text-4xl md:text-5xl font-light text-white mb-1">
              100<span className="text-primary">%</span>
            </div>
            <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Satisfaction</div>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-zinc-800/60 self-center" role="separator" />

          {/* Stat Item 3 */}
          <div className="text-center min-w-[120px]">
            <div className="text-4xl md:text-5xl font-light text-white mb-1">
              48<span className="text-primary">h</span>
            </div>
            <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Response Time</div>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-zinc-800/60 self-center" role="separator" />

          {/* Stat Item 4 */}
          <div className="text-center min-w-[120px]">
            <div className="text-4xl md:text-5xl font-light text-white mb-1">
              3
            </div>
            <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Service Types</div>
          </div>
        </div>
      </section>
    </main>
  );
}
