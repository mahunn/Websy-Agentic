import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main id="main-content" className="bg-white">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-center"
        aria-labelledby="hero-headline"
      >
        {/* Subtle radial tint — very faint, won't wash anything out */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 100% 50%, rgba(225,29,72,0.045) 0%, transparent 65%),' +
              'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(243,244,246,0.6) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ── Left: Copy & CTAs ─────────────────────────────── */}
            <div>
              {/* Eyebrow */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.72px] text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_#E11D48]" />
                  Web Development Agency
                </span>
              </div>

              {/* Headline */}
              <h1
                id="hero-headline"
                className="text-gray-900 mb-6"
                style={{
                  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                  fontSize: 'clamp(44px, 5.5vw, 76px)',
                  fontWeight: 300,
                  lineHeight: 1.0,
                  letterSpacing: '-0.01em',
                  fontFeatureSettings: '"ss03"',
                }}
              >
                We build websites<br />
                that{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #E11D48 0%, #fb7185 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 400,
                  }}
                >
                  sell.
                </span>
              </h1>

              {/* Body */}
              <p className="text-gray-500 mb-10 max-w-[44ch]"
                style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.56 }}>
                Premium e-commerce stores, high-converting landing pages,
                and standout portfolios — built for small businesses that mean business.
              </p>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  id="hero-cta-primary"
                  className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white text-[16px] font-[500] py-3.5 px-7 rounded-full transition-all duration-200 shadow-lg shadow-gray-900/15 hover:-translate-y-[1px]"
                >
                  Launch Your Project
                </Link>
                <Link
                  href="/work"
                  id="hero-cta-secondary"
                  className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-[16px] font-[500] py-3.5 px-7 rounded-full transition-all duration-200 hover:-translate-y-[1px]"
                >
                  Explore Live Work
                  <svg className="ml-2 w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-2.5 mt-8">
                <div className="flex -space-x-2">
                  {['#f472b6','#34d399','#60a5fa'].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white"
                      style={{ background: c, zIndex: 3 - i }}
                    />
                  ))}
                </div>
                <p className="text-[13px] text-gray-400 font-medium">
                  3 live projects shipped &amp; growing
                </p>
              </div>
            </div>

            {/* ── Right: Visual Mockup Stack ─────────────────────── */}
            <div className="relative hidden lg:flex items-center justify-center h-[520px] xl:h-[580px]" aria-hidden="true">

              {/* Card 1 — back, tilted left */}
              <div
                className="absolute w-[62%] rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                style={{
                  top: '4%',
                  left: '0%',
                  transform: 'rotate(-4deg) scale(0.93)',
                  zIndex: 1,
                }}
              >
                <Image
                  src="/glamora-mockup.png"
                  alt="Glamora Beige landing page preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Card 2 — middle, slight tilt */}
              <div
                className="absolute w-[62%] rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                style={{
                  top: '14%',
                  right: '0%',
                  transform: 'rotate(3deg) scale(0.96)',
                  zIndex: 2,
                }}
              >
                <Image
                  src="/mahin-mockup.png"
                  alt="Mahin Ahmad portfolio preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Card 3 — front, centred, upright */}
              <div
                className="absolute w-[68%] rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] border border-gray-100"
                style={{
                  bottom: '2%',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(-1deg)',
                  zIndex: 3,
                }}
              >
                <Image
                  src="/henley-mockup.png"
                  alt="Henley Zone e-commerce preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Live badge on the front card */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-2.5 py-1 text-[10px] font-semibold text-gray-700 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_#E11D48]" />
                  Live
                </div>
              </div>

              {/* Floating pill tags */}
              <div
                className="absolute bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2"
                style={{ top: '0%', right: '4%', zIndex: 10 }}
              >
                <span className="text-[11px] font-semibold text-gray-900">E-commerce</span>
                <span className="text-[10px] text-[#c1fbd4] bg-[#c1fbd4]/20 rounded-full px-2 py-0.5 font-bold">↑ 38% CVR</span>
              </div>
              <div
                className="absolute bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2"
                style={{ bottom: '28%', left: '0%', zIndex: 10 }}
              >
                <span className="text-[11px] font-semibold text-gray-900">Performance</span>
                <span className="text-[10px] text-emerald-600 font-bold">99/100 ⚡</span>
              </div>

              {/* Ambient glow behind the stack */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse 65% 65% at 55% 50%, rgba(225,29,72,0.07) 0%, transparent 70%)',
                  zIndex: 0,
                }}
              />
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none" aria-hidden="true">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, #d1d5db, transparent)' }} />
        </div>
      </section>

      {/* ── Stats Band ─────────────────────────────────────────────── */}
      <section
        className="border-y border-gray-100 py-12 px-6 md:px-8"
        style={{ background: 'rgba(249,250,251,1)' }}
        aria-label="Key statistics"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-y-8 gap-x-12">

          {[
            { value: '3+',    suffix: '',   label: 'Live Projects' },
            { value: '100',   suffix: '%',  label: 'Satisfaction' },
            { value: '48',    suffix: 'h',  label: 'Response Time' },
            { value: '3',     suffix: '',   label: 'Service Types' },
          ].map((stat, i, arr) => (
            <div key={stat.label} className="flex items-center gap-12">
              <div className="text-center min-w-[100px]">
                <div
                  className="text-gray-900 mb-1"
                  style={{
                    fontSize: 'clamp(36px, 4vw, 52px)',
                    fontWeight: 300,
                    lineHeight: 1,
                    fontFeatureSettings: '"ss03"',
                  }}
                >
                  {stat.value}
                  <span className="text-primary" style={{ fontWeight: 400 }}>{stat.suffix}</span>
                </div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.72px] text-gray-400">
                  {stat.label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-gray-200 flex-shrink-0" role="separator" />
              )}
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
