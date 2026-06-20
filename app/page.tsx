"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ── Custom SVGs/Images for Client Logos ─────────────────────────────
interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const HenleyLogo = ({ className = "w-5 h-5", style }: LogoProps) => (
  <Image
    src="/henleyzone-logo-v2.png"
    alt="Henley logo"
    width={32}
    height={32}
    className={`rounded-full border border-gray-100/50 overflow-hidden shrink-0 object-cover bg-white ${className}`}
    style={style}
  />
);

const GlamoraLogo = ({ className = "w-5 h-5", style }: LogoProps) => (
  <Image
    src="/glamora-logo.png"
    alt="Glamora logo"
    width={32}
    height={32}
    className={`rounded-full border border-gray-100/50 overflow-hidden shrink-0 object-cover bg-white ${className}`}
    style={style}
  />
);

const MahinLogo = ({ className = "w-5 h-5", style }: LogoProps) => (
  <Image
    src="/mahinahmad-logo-v2.png"
    alt="Mahin logo"
    width={32}
    height={32}
    className={`rounded-full border border-gray-100/50 overflow-hidden shrink-0 object-cover bg-black p-[3px] ${className}`}
    style={style}
  />
);

export default function Home() {
  const [activeCard, setActiveCard] = useState(3);

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-10 pb-10 sm:py-20 lg:py-28">

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
                {/* Headline — desktop only (lg+) */}
                <h1
                  id="hero-headline"
                  className="hidden lg:block text-left text-gray-900 mb-5 md:mb-7 text-[56px] lg:text-[76px] tracking-tight leading-[1.0]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontFeatureSettings: '"ss03"' }}
                >
                  We build websites<br />
                  that{' '}
                  <span className="relative inline-block">
                    <span
                      className="relative z-10 font-normal"
                      style={{
                        background: 'linear-gradient(135deg, #E11D48 0%, #fb7185 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      boost sales.
                    </span>
                    <span className="absolute left-0 -bottom-3.5 w-full h-[16px] pointer-events-none">
                      <svg className="w-full h-full text-[#E11D48]" viewBox="0 0 100 15" preserveAspectRatio="none" fill="none">
                        <path d="M3 14.5 C 30 3.0, 70 2.5, 97 6.0" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                        <path d="M2 8.5 C 35 8.0, 65 9.0, 88 12.0" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeOpacity="0.9" />
                      </svg>
                    </span>
                  </span>
                </h1>
              </div>

              {/* ══ ZONE 3 — CTA Buttons · Social Proof
                  Mobile order-3: renders after the cards
                  Desktop: second child in left flex-col, below copy     */}
              <div className="order-3 mt-6 lg:mt-0">
                {/* Headline — on mobile appears after cards */}
                <h1
                  id="hero-headline"
                  className="lg:hidden text-center text-gray-900 mb-5 md:mb-7 text-[32px] sm:text-[44px] tracking-tight leading-[1.1]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontFeatureSettings: '"ss03"' }}
                >
                  We build websites<br />
                  that{' '}
                  <span className="relative inline-block">
                    <span
                      className="relative z-10 font-normal"
                      style={{
                        background: 'linear-gradient(135deg, #E11D48 0%, #fb7185 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      boost sales.
                    </span>
                    <span className="absolute left-0 -bottom-2 md:-bottom-3.5 w-full h-[12px] md:h-[16px] pointer-events-none">
                      <svg
                        className="w-full h-full text-[#E11D48]"
                        viewBox="0 0 100 15"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path d="M3 14.5 C 30 3.0, 70 2.5, 97 6.0" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                        <path d="M2 8.5 C 35 8.0, 65 9.0, 88 12.0" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeOpacity="0.9" />
                      </svg>
                    </span>
                  </span>
                </h1>
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
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 md:mt-8">
                  <div className="flex -space-x-2">
                    <HenleyLogo className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white shadow-md" style={{ zIndex: 3 }} />
                    <GlamoraLogo className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white shadow-md" style={{ zIndex: 2 }} />
                    <MahinLogo className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white shadow-md" style={{ zIndex: 1 }} />
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
              className="order-2 lg:hidden w-auto sm:w-full -mx-1 sm:mx-auto sm:max-w-[440px] mt-8 mb-4"
              aria-hidden="true"
            >
              <div className="relative h-[290px] px-0 sm:px-4">

                {/* Mobile Card 1 — Glamora · Landing Page badge (back left) */}
                <div
                  className={`absolute w-[65%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100/80'}`}
                  style={{ top: '0%', left: '0%', transform: activeCard === 1 ? 'rotate(-8deg) scale(1.04)' : 'rotate(-8deg) scale(0.92)', zIndex: activeCard === 1 ? 20 : 1, opacity: activeCard === 1 ? 1 : 0.82 }}
                  onClick={() => setActiveCard(1)}
                >
                  <Image
                    src="/glamora-mockup.png"
                    alt="Glamora Beige landing page preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-1.5 py-0.5 shadow-md">
                    <span className="text-[8px] font-semibold text-gray-900">Landing Page</span>
                    <span className="text-[7px] text-emerald-600 bg-emerald-50 rounded-full px-1 py-0.2 font-bold">↑ 38%</span>
                  </div>
                </div>

                {/* Mobile Card 2 — Mahin portfolio · Portfolio badge (middle right) */}
                <div
                  className={`absolute w-[65%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100/80'}`}
                  style={{ top: '9%', right: '0%', transform: activeCard === 2 ? 'rotate(8deg) scale(1.04)' : 'rotate(8deg) scale(0.92)', zIndex: activeCard === 2 ? 20 : (activeCard === 3 ? 10 : 1), opacity: activeCard === 2 ? 1 : 0.85 }}
                  onClick={() => setActiveCard(2)}
                >
                  <Image
                    src="/mahin-mockup.png"
                    alt="Mahin Ahmad portfolio preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-1.5 py-0.5 shadow-md">
                    <span className="text-[8px] font-semibold text-gray-900">Portfolio</span>
                    <span className="text-[7px] text-red-600 bg-red-50 rounded-full px-1 py-0.2 font-bold flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                </div>

                {/* Mobile Card 3 — Henley e-commerce · E-commerce badge (front center) */}
                <div
                  className={`absolute w-[72%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 3 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100/80'}`}
                  style={{ bottom: '2%', left: '50%', transform: activeCard === 3 ? 'translateX(-50%) rotate(-1deg) scale(1.04)' : 'translateX(-50%) rotate(-1deg) scale(0.92)', zIndex: activeCard === 3 ? 20 : 10, opacity: activeCard === 3 ? 1 : 0.9 }}
                  onClick={() => setActiveCard(3)}
                >
                  <Image
                    src="/henley-mockup-1-cropped.png"
                    alt="Henley Zone e-commerce preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-1.5 py-0.5 shadow-md">
                    <span className="text-[8px] font-semibold text-gray-900">E-commerce</span>
                    <span className="text-[7px] text-amber-600 bg-amber-50 rounded-full px-1 py-0.2 font-bold">99/100 ⚡</span>
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
                className={`absolute w-[62%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100'}`}
                style={{ top: '4%', left: '0%', transform: activeCard === 1 ? 'rotate(-4deg) scale(1.02)' : 'rotate(-4deg) scale(0.91)', zIndex: activeCard === 1 ? 3 : 1 }}
                onClick={() => setActiveCard(1)}
              >
                <Image
                  src="/glamora-mockup.png"
                  alt="Glamora Beige landing page preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-full px-2.5 py-1 shadow-md">
                  <span className="text-[11px] font-semibold text-gray-900">Landing Page</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 rounded-full px-1.5 py-0.5 font-bold">↑ 38%</span>
                </div>
              </div>

              {/* Card 2 — middle, slight tilt */}
              <div
                className={`absolute w-[62%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100'}`}
                style={{ top: '11%', right: '0%', transform: activeCard === 2 ? 'rotate(4deg) scale(1.02)' : 'rotate(4deg) scale(0.91)', zIndex: activeCard === 2 ? 3 : (activeCard === 3 ? 2 : 1) }}
                onClick={() => setActiveCard(2)}
              >
                <Image
                  src="/mahin-mockup.png"
                  alt="Mahin Ahmad portfolio preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-full px-2.5 py-1 shadow-md">
                  <span className="text-[11px] font-semibold text-gray-900">Portfolio</span>
                  <div className="flex items-center gap-1 text-[10px] text-red-600 bg-red-50 rounded-full px-1.5 py-0.5 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
                    Live
                  </div>
                </div>
              </div>

              {/* Card 3 — front, centred, upright */}
              <div
                className={`absolute w-[68%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 3 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100'}`}
                style={{ bottom: '2%', left: '50%', transform: activeCard === 3 ? 'translateX(-50%) rotate(-1deg) scale(1.02)' : 'translateX(-50%) rotate(-1deg) scale(0.91)', zIndex: activeCard === 3 ? 3 : 2 }}
                onClick={() => setActiveCard(3)}
              >
                <Image
                  src="/henley-mockup-1-cropped.png"
                  alt="Henley Zone e-commerce preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-full px-2.5 py-1 shadow-md">
                  <span className="text-[11px] font-semibold text-gray-900">E-commerce</span>
                  <span className="text-[10px] text-amber-600 bg-amber-50 rounded-full px-1.5 py-0.5 font-bold">99/100 ⚡</span>
                </div>
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
        className="border-y border-gray-100 py-16 px-6 md:px-8"
        style={{ background: 'rgba(249,250,251,1)' }}
        aria-label="Key statistics"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-y-8 gap-x-12">

          {[
            { value: '3+', suffix: '', label: 'Live Projects' },
            { value: '100', suffix: '%', label: 'Satisfaction' },
            { value: '48', suffix: 'h', label: 'Response Time' },
            { value: '3', suffix: '', label: 'Service Types' },
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
