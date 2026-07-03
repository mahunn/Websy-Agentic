"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit } from 'react-icons/si';

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-6 pb-10 sm:py-20 lg:py-28">

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
              <div className="hidden lg:flex lg:flex-col lg:items-start lg:order-none">
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

              {/* Mobile Headline — on mobile appears after cards (order-2) */}
              <div className="order-2 lg:hidden mt-6 flex flex-col items-center">
                <h1
                  id="hero-headline"
                  className="text-center text-gray-900 mb-5 md:mb-7 text-[32px] sm:text-[44px] tracking-tight leading-[1.1]"
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
              </div>

              {/* ══ ZONE 3 — CTA Buttons · Social Proof (order-3 on mobile) */}
              <div className="order-3 lg:order-none mt-6 lg:mt-0 flex flex-col items-center lg:items-start">
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
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 md:mt-8">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                    Trusted by
                  </span>
                  <div className="w-px h-3 bg-gray-200 flex-shrink-0" />
                  <div className="flex -space-x-2">
                    <HenleyLogo className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white shadow-md" style={{ zIndex: 3 }} />
                    <GlamoraLogo className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white shadow-md" style={{ zIndex: 2 }} />
                    <MahinLogo className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white shadow-md" style={{ zIndex: 1 }} />
                  </div>
                  <span className="text-[11px] sm:text-[12px] text-gray-300 font-normal italic select-none">
                    & more
                  </span>
                </div>
              </div>

            </div>{/* /left desktop column */}

            {/* ══ ZONE 2 — Mobile Mockup Stack (< lg only)
                order-1: renders at the top on mobile.
                Absolute overlapping stack with fixed height so it has room to breathe.
                lg:hidden hides it on desktop (desktop stack below handles it). */}
            <div
              className="order-1 lg:hidden w-auto sm:w-full -mx-1 sm:mx-auto sm:max-w-[440px] mt-4 mb-4"
              aria-hidden="true"
            >
              <div className="relative h-[290px] px-0 sm:px-4">

                {/* Mobile Card 1 — Mahin portfolio (back left) */}
                <div
                  className={`absolute w-[65%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100/80'}`}
                  style={{ top: '0%', left: '0%', transform: activeCard === 1 ? 'rotate(-8deg) scale(1.04)' : 'rotate(-8deg) scale(0.92)', zIndex: activeCard === 1 ? 20 : 1, opacity: 1 }}
                  onClick={() => setActiveCard(1)}
                >
                  <Image
                    src="/mahin-mockup.png"
                    alt="Mahin Ahmad portfolio preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 600px"
                  />
                </div>

                {/* Mobile Card 2 — Henley e-commerce (middle right) */}
                <div
                  className={`absolute w-[65%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100/80'}`}
                  style={{ top: '9%', right: '0%', transform: activeCard === 2 ? 'rotate(8deg) scale(1.04)' : 'rotate(8deg) scale(0.92)', zIndex: activeCard === 2 ? 20 : (activeCard === 3 ? 10 : 1), opacity: 1 }}
                  onClick={() => setActiveCard(2)}
                >
                  <Image
                    src="/henley-mockup-1-cropped.png"
                    alt="Henley Zone e-commerce preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 600px"
                  />
                </div>

                {/* Mobile Card 3 — Glamora · Landing Page (front center) */}
                <div
                  className={`absolute w-[72%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 3 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100/80'}`}
                  style={{ bottom: '2%', left: '50%', transform: activeCard === 3 ? 'translateX(-50%) rotate(-1deg) scale(1.04)' : 'translateX(-50%) rotate(-1deg) scale(0.92)', zIndex: activeCard === 3 ? 20 : 10, opacity: 1 }}
                  onClick={() => setActiveCard(3)}
                >
                  <Image
                    src="/glamora-mockup.png"
                    alt="Glamora Beige landing page preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, 600px"
                    priority
                  />
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
              {/* Card 1 — Mahin portfolio (back, tilted left) */}
              <div
                className={`absolute w-[62%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100'}`}
                style={{ top: '4%', left: '0%', transform: activeCard === 1 ? 'rotate(-4deg) scale(1.02)' : 'rotate(-4deg) scale(0.91)', zIndex: activeCard === 1 ? 3 : 1 }}
                onClick={() => setActiveCard(1)}
              >
                <Image
                  src="/mahin-mockup.png"
                  alt="Mahin Ahmad portfolio preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Card 2 — Henley e-commerce (middle right, slight tilt) */}
              <div
                className={`absolute w-[62%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100'}`}
                style={{ top: '11%', right: '0%', transform: activeCard === 2 ? 'rotate(4deg) scale(1.02)' : 'rotate(4deg) scale(0.91)', zIndex: activeCard === 2 ? 3 : (activeCard === 3 ? 2 : 1) }}
                onClick={() => setActiveCard(2)}
              >
                <Image
                  src="/henley-mockup-1-cropped.png"
                  alt="Henley Zone e-commerce preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Card 3 — Glamora landing page (front, centred, upright) */}
              <div
                className={`absolute w-[68%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 3 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] border-primary/20' : 'shadow-md border-gray-100'}`}
                style={{ bottom: '2%', left: '50%', transform: activeCard === 3 ? 'translateX(-50%) rotate(-1deg) scale(1.02)' : 'translateX(-50%) rotate(-1deg) scale(0.91)', zIndex: activeCard === 3 ? 3 : 2 }}
                onClick={() => setActiveCard(3)}
              >
                <Image
                  src="/glamora-mockup.png"
                  alt="Glamora Beige landing page preview"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
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

      {/* ── Visual Bridge — Tech · Values · Transition ──────────────── */}
      <section
        className="relative overflow-hidden border-y border-gray-100"
        aria-label="Our technology and values"
      >

        {/* ▸ Row 1 — Infinite Tech Logo Marquee ──────────────────────── */}
        <div className="py-10 md:py-14 border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 md:mb-10 text-center">
            <h2
              className="text-[22px] sm:text-[28px] md:text-[34px] text-gray-900 tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700 }}
            >
              Tech Stacks We Use
            </h2>
          </div>

          {/* Marquee track — forward */}
          <div className="relative w-full overflow-hidden" aria-hidden="true">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, white, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, white, transparent)' }} />

            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, dupeIdx) => (
                <div key={dupeIdx} className="flex items-center gap-10 md:gap-16 px-5 md:px-8 shrink-0">
                  {/* Next.js */}
                  <div className="flex items-center gap-2.5 select-none">
                    <SiNextdotjs className="w-7 h-7 md:w-9 md:h-9 text-black" />
                    <span className="text-[13px] md:text-[15px] font-semibold text-gray-900 tracking-tight">Next.js</span>
                  </div>
                  {/* React */}
                  <div className="flex items-center gap-2.5 select-none">
                    <SiReact className="w-7 h-7 md:w-9 md:h-9 text-[#61DAFB]" />
                    <span className="text-[13px] md:text-[15px] font-semibold text-gray-900 tracking-tight">React</span>
                  </div>
                  {/* TypeScript */}
                  <div className="flex items-center gap-2.5 select-none">
                    <SiTypescript className="w-7 h-7 md:w-9 md:h-9 text-[#3178C6]" />
                    <span className="text-[13px] md:text-[15px] font-semibold text-gray-900 tracking-tight">TypeScript</span>
                  </div>
                  {/* Tailwind CSS */}
                  <div className="flex items-center gap-2.5 select-none">
                    <SiTailwindcss className="w-7 h-7 md:w-9 md:h-9 text-[#06B6D4]" />
                    <span className="text-[13px] md:text-[15px] font-semibold text-gray-900 tracking-tight">Tailwind</span>
                  </div>
                  {/* Node.js */}
                  <div className="flex items-center gap-2.5 select-none">
                    <SiNodedotjs className="w-7 h-7 md:w-9 md:h-9 text-[#339933]" />
                    <span className="text-[13px] md:text-[15px] font-semibold text-gray-900 tracking-tight">Node.js</span>
                  </div>
                  {/* Git */}
                  <div className="flex items-center gap-2.5 select-none">
                    <SiGit className="w-7 h-7 md:w-9 md:h-9 text-[#F05032]" />
                    <span className="text-[13px] md:text-[15px] font-semibold text-gray-900 tracking-tight">Git</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ▸ Row 2 — Three Value Pillars ──────────────────────────────── */}
        {/* ▸ Row 2 — Capability Bento Grid ──────────────────────────────── */}
        <div className="py-16 md:py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            
            {/* Grid container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

              {/* Bento Card 1: E-Commerce (spans 2 columns on desktop) */}
              <div className="group md:col-span-2 flex flex-col bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative min-h-[380px] justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    E-Commerce Storefronts
                  </h3>
                  <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                    Custom checkout flows and conversion-optimized shop interfaces designed to scale your business with zero load lag.
                  </p>
                </div>

                {/* Interactive Visual: Mini shop card with real bag image */}
                <div className="relative mt-8 md:mt-0 flex justify-center md:justify-end md:absolute md:bottom-6 md:right-8 w-full md:w-auto">
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-lg max-w-[280px] w-full transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Real product photo */}
                    <div className="w-full aspect-[4/3] rounded-2xl bg-gray-50 flex items-center justify-center relative overflow-hidden mb-4 border border-gray-100">
                      <Image
                        src="/bag.jpg"
                        alt="Premium Leather Bag"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="280px"
                      />
                    </div>
                    {/* Details */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-800">Premium Leather Bag</p>
                        <p className="text-[10px] text-gray-400">Limited Collection</p>
                      </div>
                      <span className="text-xs font-bold text-gray-900">৳3,999</span>
                    </div>
                    {/* Add Button */}
                    <button className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white text-[10px] font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Bento Card 2: Speed (spans 1 column) */}
              <div className="group flex flex-col bg-white border border-gray-150 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 justify-between min-h-[380px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    PageSpeed Insights
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We optimize every asset and server response to achieve near-perfect green scores on Google PageSpeed.
                  </p>
                </div>

                {/* Interactive Visual: Google PageSpeed Logo */}
                <div className="flex justify-center py-2">
                  <div className="relative w-full aspect-[1.5] max-w-[280px] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                    <Image
                      src="/pagespeed.png"
                      alt="Google PageSpeed Insights"
                      width={280}
                      height={186}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bento Card 3: SEO (spans 1 column) */}
              <div className="group flex flex-col bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 justify-between min-h-[380px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Search Optimization
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Built with semantic code structures and custom schema markup to guarantee your brand climbs search rankings.
                  </p>
                </div>

                {/* Interactive Visual: Google SEO Graphic */}
                <div className="flex justify-center py-2">
                  <div className="relative w-full aspect-[1.5] max-w-[280px] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                    <Image
                      src="/seo-chart.png"
                      alt="Google Search Engine Optimization"
                      width={280}
                      height={186}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bento Card 4: Clean Code (spans 2 columns on desktop) */}
              <div className="group md:col-span-2 flex flex-col bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative min-h-[380px] justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    Full Code Ownership
                  </h3>
                  <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                    Zero builder bloat. Complete freedom to customize, migrate, or extend your codebase at any time with total ownership.
                  </p>
                </div>

                {/* Interactive Visual: Handover Image representing project handoff */}
                <div className="relative mt-8 md:mt-0 flex justify-center md:justify-end md:absolute md:bottom-6 md:right-8 w-full md:w-auto">
                  <div className="border border-gray-150 rounded-2xl overflow-hidden shadow-lg max-w-[280px] w-full aspect-[4/3] relative bg-[#fafafa] transition-transform duration-300 group-hover:-translate-y-2">
                    <Image
                      src="/handover.jpg"
                      alt="Code handover and ownership transfer"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="280px"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
