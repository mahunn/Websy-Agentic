import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main id="main-content" className="bg-white">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-0 lg:min-h-[90vh] flex items-center"
        aria-labelledby="hero-headline"
      >
        {/* Subtle radial tint */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 100% 50%, rgba(225,29,72,0.045) 0%, transparent 65%),' +
              'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(243,244,246,0.6) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-4 pb-6 sm:py-16 lg:py-28">

          {/*
            Layout strategy:
            • Mobile (< lg): flex-col, order-1/2/3 controls render order:
                1. Copy  (badge + headline + paragraph)
                2. Cards (full-bleed staggered vertical stack)
                3. CTAs  (buttons + social proof)
            • Desktop (lg+): 2-col grid.
                Left col  = Zone 1 wrapper (copy → CTA, flex-col)
                Right col = Desktop absolute card stack
          */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">

            {/* ─────────────────────────────────────────────────────────
                LEFT COLUMN WRAPPER — desktop col 1
                On desktop: flex-col so copy flows above CTAs naturally.
                On mobile: `contents` dissolves the wrapper so Zone 1 and
                Zone 3 children participate directly in the flex-col order.
                ───────────────────────────────────────────────────────── */}
            <div className="contents lg:flex lg:flex-col lg:justify-center">

              {/* ══ ZONE 1 — Badge · Headline · Paragraph
                  Mobile order-1: renders first
                  Desktop: first child in left flex-col                  */}
              <div className="order-1 flex flex-col items-center lg:items-start">
                {/* Eyebrow */}
                <div className="flex justify-center lg:justify-start mb-3 md:mb-6">
                  <span className="inline-flex items-center gap-2 text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.72px] text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1 md:px-4 md:py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_#E11D48]" />
                    Web Development
                  </span>
                </div>

                {/* Headline */}
                <h1
                  id="hero-headline"
                  className="text-center lg:text-left text-gray-900 mb-3 md:mb-6 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[76px] font-light tracking-tight leading-[1.1] md:leading-[1.0] font-sans"
                  style={{ fontFeatureSettings: '"ss03"' }}
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
                <p className="hidden lg:block text-center lg:text-left text-gray-500 mb-0 lg:mb-10 max-w-[44ch] text-sm sm:text-base md:text-[18px] font-medium leading-relaxed">
                  Premium e-commerce stores, high-converting landing pages,
                  and standout portfolios — built for small businesses that mean business.
                </p>
              </div>

              {/* ══ ZONE 3 — CTA Buttons · Social Proof
                  Mobile order-3: renders after the cards
                  Desktop: second child in left flex-col, below copy     */}
              <div className="order-3 mt-4 lg:mt-0">
                {/* CTA row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    id="hero-cta-primary"
                    className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white text-sm sm:text-base font-medium py-3.5 px-7 rounded-full transition-all duration-200 shadow-lg shadow-gray-900/15 hover:-translate-y-[1px] w-full sm:w-auto whitespace-nowrap"
                  >
                    Launch Your Project
                  </Link>
                  <Link
                    href="/work"
                    id="hero-cta-secondary"
                    className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm sm:text-base font-medium py-3.5 px-7 rounded-full transition-all duration-200 hover:-translate-y-[1px] w-full sm:w-auto whitespace-nowrap"
                  >
                    Explore Live Work
                    <svg className="ml-2 w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* Social proof */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-3 md:mt-8">
                  <div className="flex -space-x-1.5">
                    {['#f472b6', '#34d399', '#60a5fa'].map((c, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-white"
                        style={{ background: c, zIndex: 3 - i }}
                      />
                    ))}
                  </div>
                  <p className="text-[11px] sm:text-[13px] text-gray-400 font-medium">
                    3 live projects shipped &amp; growing
                  </p>
                </div>
              </div>

            </div>{/* /left desktop column */}

            {/* ══ ZONE 2 — Mobile Mockup Stack (< lg only)
                order-2: renders between copy and CTAs on mobile.
                Absolute overlapping stack with fixed height so it has room to breathe.
                lg:hidden hides it on desktop (desktop stack below handles it). */}
            <div
              className="order-2 lg:hidden w-auto sm:w-full -mx-4 sm:mx-auto sm:max-w-[440px] mt-4 mb-2"
              aria-hidden="true"
            >
              <div className="relative h-[290px] px-0 sm:px-4">

                {/* Mobile Card 1 — Glamora · E-commerce + CVR badge (back left) */}
                <div
                  className="absolute w-[65%] rounded-2xl overflow-hidden shadow-xl border border-gray-100/80"
                  style={{ top: '0%', left: '0%', transform: 'rotate(-8deg)', zIndex: 1, opacity: 0.82 }}
                >
                  <Image
                    src="/glamora-mockup.png"
                    alt="Glamora Beige landing page preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-white border border-gray-200 rounded-full px-1.5 py-0.5 shadow-md">
                    <span className="text-[8px] font-semibold text-gray-900">E-commerce</span>
                    <span className="text-[7px] text-emerald-600 bg-emerald-50 rounded-full px-1 py-0.2 font-bold">↑ 38% CVR</span>
                  </div>
                </div>

                {/* Mobile Card 2 — Mahin portfolio · Live badge (middle right) */}
                <div
                  className="absolute w-[65%] rounded-2xl overflow-hidden shadow-xl border border-gray-100/80"
                  style={{ top: '12%', right: '0%', transform: 'rotate(6deg)', zIndex: 10, opacity: 0.85 }}
                >
                  <Image
                    src="/mahin-mockup.png"
                    alt="Mahin Ahmad portfolio preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-1.5 py-0.5 text-[8px] font-semibold text-gray-700 shadow-sm">
                    <span className="w-1 h-1 rounded-full bg-primary animate-pulse shadow-[0_0_6px_#E11D48]" />
                    Live
                  </div>
                </div>

                {/* Mobile Card 3 — Henley e-commerce · Performance badge (front center) */}
                <div
                  className="absolute w-[72%] rounded-2xl overflow-hidden shadow-[0_20px_40px_-8px_rgba(0,0,0,0.2)] border border-gray-100/80"
                  style={{ bottom: '2%', left: '50%', transform: 'translateX(-50%) rotate(-1deg)', zIndex: 20 }}
                >
                  <Image
                    src="/henley-mockup.png"
                    alt="Henley Zone e-commerce preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white border border-gray-200 rounded-full px-1.5 py-0.5 shadow-md">
                    <span className="text-[8px] font-semibold text-gray-900">Performance</span>
                    <span className="text-[8px] text-emerald-600 font-bold">99/100 ⚡</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ══ Desktop Mockup Stack (lg+ only)
                Absolute-positioned overlapping cards — untouched from original.
                hidden on mobile so no layout interference with the mobile stack. */}
            <div
              className="hidden lg:flex w-full relative items-center justify-center h-[520px] xl:h-[580px]"
              aria-hidden="true"
            >
              {/* Card 1 — back, tilted left */}
              <div
                className="absolute w-[62%] rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                style={{ top: '4%', left: '0%', transform: 'rotate(-4deg) scale(0.93)', zIndex: 1 }}
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
                style={{ top: '14%', right: '0%', transform: 'rotate(3deg) scale(0.96)', zIndex: 2 }}
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
                style={{ bottom: '2%', left: '50%', transform: 'translateX(-50%) rotate(-1deg)', zIndex: 3 }}
              >
                <Image
                  src="/henley-mockup.png"
                  alt="Henley Zone e-commerce preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Live badge */}
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
                <span className="text-[10px] text-[#c1fbd4] bg-[#c1fbd4]/20 rounded-full px-1.5 py-0.5 font-bold">↑ 38% CVR</span>
              </div>
              <div
                className="absolute bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2"
                style={{ bottom: '28%', left: '0%', zIndex: 10 }}
              >
                <span className="text-[11px] font-semibold text-gray-900">Performance</span>
                <span className="text-[10px] text-emerald-600 font-bold">99/100 ⚡</span>
              </div>

              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse 65% 65% at 55% 50%, rgba(225,29,72,0.07) 0%, transparent 70%)',
                  zIndex: 0,
                }}
              />
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center pointer-events-none" aria-hidden="true">
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
            { value: '3+',  suffix: '',  label: 'Live Projects' },
            { value: '100', suffix: '%', label: 'Satisfaction' },
            { value: '48',  suffix: 'h', label: 'Response Time' },
            { value: '3',   suffix: '',  label: 'Service Types' },
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
