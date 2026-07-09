"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit, SiJavascript, SiFigma, SiMongodb, SiSupabase } from 'react-icons/si';
import {
  FiUser,
  FiBriefcase,
  FiArrowRight,
  FiCheck,
  FiSmartphone,
  FiMonitor,
  FiCpu,
  FiLock,
  FiChevronDown,
  FiPlus,
  FiMail,
  FiPhone,
  FiTrendingUp,
  FiSearch,
  FiGithub,
  FiFacebook
} from 'react-icons/fi';

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
    <main id="main-content" className="bg-white pt-[56px] sm:pt-[60px] md:pt-[64px]">

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



      {/* ── SECTION 2: Featured Projects ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-gray-100" aria-label="Featured projects">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-5 leading-[1.1]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Recent websites built by Websy
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed max-w-2xl font-normal">
              Real projects designed with clean visuals, fast performance, and business-focused user experience.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

            {/* Project 1: Henley Zone */}
            <article className="group flex flex-col bg-white border border-gray-200/80 rounded-[24px] overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-100">
                <Image
                  src="/henley-mockup-1-cropped.png"
                  alt="Henley Zone e-commerce preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow min-h-[220px]">
                <div>
                  <span className="text-[9px] font-bold text-pink-accent bg-rose-50 border border-rose-100/60 rounded-full px-3 py-1 uppercase tracking-wider block w-max mb-3">
                    E-Commerce Website
                  </span>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Henley Zone</h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    A modern storefront experience built for product discovery and smooth shopping.
                  </p>
                </div>
                <a
                  href="https://henleyzone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-xs font-bold py-3 px-5 rounded-full transition-all duration-200 w-full sm:w-auto shadow-sm"
                >
                  View Project
                </a>
              </div>
            </article>

            {/* Project 2: Glamora Beige */}
            <article className="group flex flex-col bg-white border border-gray-200/80 rounded-[24px] overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-100">
                <Image
                  src="/glamora-mockup.png"
                  alt="Glamora Beige landing page preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow min-h-[220px]">
                <div>
                  <span className="text-[9px] font-bold text-pink-accent bg-rose-50 border border-rose-100/60 rounded-full px-3 py-1 uppercase tracking-wider block w-max mb-3">
                    Brand Landing Page
                  </span>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Glamora Beige</h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    A refined landing page experience designed for elegance, clarity, and trust.
                  </p>
                </div>
                <a
                  href="https://glamora-beige.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-xs font-bold py-3 px-5 rounded-full transition-all duration-200 w-full sm:w-auto shadow-sm"
                >
                  View Project
                </a>
              </div>
            </article>

            {/* Project 3: Mahin Ahmad */}
            <article className="group flex flex-col bg-white border border-gray-200/80 rounded-[24px] overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-100">
                <Image
                  src="/mahin-mockup.png"
                  alt="Mahin Ahmad portfolio preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow min-h-[220px]">
                <div>
                  <span className="text-[9px] font-bold text-pink-accent bg-rose-50 border border-rose-100/60 rounded-full px-3 py-1 uppercase tracking-wider block w-max mb-3">
                    Portfolio Website
                  </span>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Mahin Ahmad</h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    A personal portfolio built to showcase work, skills, and professional credibility.
                  </p>
                </div>
                <a
                  href="https://mahinahmad.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-xs font-bold py-3 px-5 rounded-full transition-all duration-200 w-full sm:w-auto shadow-sm"
                >
                  View Project
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>



      {/* ── SECTION 4: Why Choose Websy ────────────────────────────── */}
      <section className="py-12 md:py-32 bg-white border-t border-gray-100 overflow-hidden" aria-label="Why choose us">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="max-w-2xl mb-10 md:mb-20">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase mb-4">
              <span className="w-5 h-px bg-pink-accent" />
              Why Websy
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-4 leading-[1.1]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Why businesses choose Websy
            </h2>
            <p className="text-sm md:text-base text-[#667085] leading-relaxed font-normal">
              We don't just build websites — we build digital tools that work for your business around the clock.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-b border-gray-200 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

            {/* Card 1: Sales-Focused Design */}
            <div className="group bg-white py-4 px-6 md:p-8 hover:bg-gray-50 transition-colors duration-200 flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
              <div className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#E73463] shrink-0 lg:mb-6">
                <FiTrendingUp className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-extrabold text-[#0B1220] mb-1 leading-snug">Sales-Focused Design</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Built around clarity, trust, and conversion.
                </p>
              </div>
            </div>

            {/* Card 2: Mobile-First Experience */}
            <div className="group bg-white py-4 px-6 md:p-8 hover:bg-gray-50 transition-colors duration-200 flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
              <div className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#7C3AED] shrink-0 lg:mb-6">
                <FiSmartphone className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-extrabold text-[#0B1220] mb-1 leading-snug">Mobile-First Experience</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Flawless performance on every screen size.
                </p>
              </div>
            </div>

            {/* Card 3: Fast & Clean Development */}
            <div className="group bg-white py-4 px-6 md:p-8 hover:bg-gray-50 transition-colors duration-200 flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
              <div className="w-10 h-10 border border-gray-200 flex items-center justify-center text-emerald-600 shrink-0 lg:mb-6">
                <FiCpu className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-extrabold text-[#0B1220] mb-1 leading-snug">Fast &amp; Clean Development</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Performance-first builds that load instantly.
                </p>
              </div>
            </div>

            {/* Card 4: 100% Code Ownership */}
            <div className="group bg-white py-4 px-6 md:p-8 hover:bg-gray-50 transition-colors duration-200 flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
              <div className="w-10 h-10 border border-gray-200 flex items-center justify-center text-amber-500 shrink-0 lg:mb-6">
                <FiLock className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-extrabold text-[#0B1220] mb-1 leading-snug">100% Code Ownership</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Clean custom code with zero platform lock-in.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Stats Strip */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-100 pt-12 md:pt-16">
            
            {/* Stat 1: 100% */}
            <div className="bg-[#fbfbf5] border border-gray-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-3xl md:text-4xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>100%</span>
                <span className="text-[9px] font-bold text-pink-accent bg-rose-50 border border-rose-100/50 rounded-md px-2 py-0.5 uppercase tracking-wider">
                  No Templates
                </span>
              </div>
              <h4 className="text-xs font-bold text-[#0B1220] mb-1">Custom Engineered</h4>
              <p className="text-[11px] text-[#667085] leading-relaxed">
                Handcrafted code built from scratch for maximum speed, security, and conversion.
              </p>
            </div>

            {/* Stat 2: 3-7d */}
            <div className="bg-[#fbfbf5] border border-gray-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-3xl md:text-4xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>3–7d</span>
                <span className="text-[9px] font-bold text-purple-600 bg-purple-50 border border-purple-100/50 rounded-md px-2 py-0.5 uppercase tracking-wider">
                  Fast Delivery
                </span>
              </div>
              <h4 className="text-xs font-bold text-[#0B1220] mb-1">Average Turnaround</h4>
              <p className="text-[11px] text-[#667085] leading-relaxed">
                Go from initial concept to a fully functional live website in less than a week.
              </p>
            </div>

            {/* Stat 3: 24h */}
            <div className="bg-[#fbfbf5] border border-gray-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-3xl md:text-4xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>24h</span>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/50 rounded-md px-2 py-0.5 uppercase tracking-wider">
                  SLA Support
                </span>
              </div>
              <h4 className="text-xs font-bold text-[#0B1220] mb-1">Response Guarantee</h4>
              <p className="text-[11px] text-[#667085] leading-relaxed">
                Direct developer communication. We resolve support queries in record time.
              </p>
            </div>

            {/* Stat 4: 5★ */}
            <div className="bg-[#fbfbf5] border border-gray-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-3xl md:text-4xl font-black text-[#0B1220] tracking-tight flex items-center gap-1" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  5.0<span className="text-amber-500 text-2xl">★</span>
                </span>
                <span className="text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-100/50 rounded-md px-2 py-0.5 uppercase tracking-wider">
                  Top Rated
                </span>
              </div>
              <h4 className="text-xs font-bold text-[#0B1220] mb-1">Client Satisfaction</h4>
              <p className="text-[11px] text-[#667085] leading-relaxed">
                Trusted by local brands to build highly optimized high-converting storefronts.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* ── SECTION 6: Process ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-gray-100" aria-label="Our workflow process">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-5 leading-[1.1]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              How we build your website
            </h2>
          </div>

          {/* Process Timeline */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">

            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-px bg-gray-200 z-0" aria-hidden="true" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border border-gray-100 md:border-0 shadow-sm md:shadow-none">
              <div className="w-14 h-14 rounded-full bg-[#0B1220] border-4 border-white text-white text-lg font-bold flex items-center justify-center mb-5 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Discover</h3>
              <p className="text-xs text-[#667085] leading-relaxed max-w-[220px]">
                We understand your business, audience, goals, and website requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border border-gray-100 md:border-0 shadow-sm md:shadow-none">
              <div className="w-14 h-14 rounded-full bg-[#0B1220] border-4 border-white text-white text-lg font-bold flex items-center justify-center mb-5 shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Design</h3>
              <p className="text-xs text-[#667085] leading-relaxed max-w-[220px]">
                We create a clean, premium interface focused on trust, clarity, and conversion.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border border-gray-100 md:border-0 shadow-sm md:shadow-none">
              <div className="w-14 h-14 rounded-full bg-[#0B1220] border-4 border-white text-white text-lg font-bold flex items-center justify-center mb-5 shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Develop</h3>
              <p className="text-xs text-[#667085] leading-relaxed max-w-[220px]">
                We build a fast, responsive website using clean and scalable code.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-start bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border border-gray-100 md:border-0 shadow-sm md:shadow-none">
              <div className="w-14 h-14 rounded-full bg-[#0B1220] border-4 border-white text-white text-lg font-bold flex items-center justify-center mb-5 shadow-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Launch</h3>
              <p className="text-xs text-[#667085] leading-relaxed max-w-[220px]">
                We test, optimize, publish, and hand over the final website.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 7: Website Packages ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100" aria-label="Website packages">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
              Pricing Options
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-5 leading-[1.1]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Choose the website your business needs
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed max-w-2xl font-normal">
              Start with the type of website you need. We’ll guide the structure, design, and build from there.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Package 1: Portfolio Website */}
            <div className="group bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">Portfolio Website</h3>
                <p className="text-xs text-pink-accent font-semibold tracking-wide uppercase mb-4">
                  For creators &amp; personal brands
                </p>
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-extrabold text-[#111827]">৳3,999</span>
                  <span className="text-xs text-[#667085] ml-1.5 font-normal">starting from</span>
                </div>
                <div className="h-px bg-gray-100 mb-6" />
                <ul className="space-y-4 mb-8">
                  {['Home page', 'About section', 'Projects or services', 'Contact form', 'Mobile responsive design'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs text-[#667085] font-semibold">
                      <FiCheck className="text-pink-accent w-4 h-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center border border-[#0B1220] hover:bg-[#0B1220] hover:text-white text-[#0B1220] text-xs font-bold py-3.5 px-6 rounded-full transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>

            {/* Package 2: Landing Page */}
            <div className="group bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">Landing Page</h3>
                <p className="text-xs text-pink-accent font-semibold tracking-wide uppercase mb-4">
                  For brand campaigns &amp; sales
                </p>
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-extrabold text-[#111827]">৳6,999</span>
                  <span className="text-xs text-[#667085] ml-1.5 font-normal">starting from</span>
                </div>
                <div className="h-px bg-gray-100 mb-6" />
                <ul className="space-y-4 mb-8">
                  {['Minimalist editorial layout', 'High-converting sales structure', 'Checkout and admin panel', 'SEO & speed optimization', 'Mobile-first responsive build'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs text-[#667085] font-semibold">
                      <FiCheck className="text-pink-accent w-4 h-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center border border-[#0B1220] hover:bg-[#0B1220] hover:text-white text-[#0B1220] text-xs font-bold py-3.5 px-6 rounded-full transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>

            {/* Package 3: E-Commerce Website (Most Popular Highlighted) */}
            <div className="group bg-white border-2 border-[#0B1220] rounded-3xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0B1220] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                Most Popular
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">E-Commerce Website</h3>
                <p className="text-xs text-pink-accent font-semibold tracking-wide uppercase mb-4">
                  For online store brands
                </p>
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-extrabold text-[#111827]">৳12,999</span>
                  <span className="text-xs text-[#667085] ml-1.5 font-normal">starting from</span>
                </div>
                <div className="h-px bg-gray-100 mb-6" />
                <ul className="space-y-4 mb-8">
                  {['Product pages', 'Cart & checkout flow', 'Payment-ready structure', 'Mobile shopping experience', 'Full admin panel setup'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs text-[#111827] font-bold">
                      <FiCheck className="text-[#0B1220] w-4 h-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-xs font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                Request Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 8: Tech Stack ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-t border-gray-100" aria-label="Technology stack">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
              Our Core Tools
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Built with modern, scalable technology
            </h2>
            <p className="text-xs md:text-sm text-[#667085] leading-relaxed max-w-xl mx-auto font-normal">
              We use clean and reliable tools so your website stays fast, flexible, and easy to maintain.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">

            {/* Next.js */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiNextdotjs className="w-5 h-5 text-black" />
              <span>Next.js</span>
            </div>

            {/* React */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiReact className="w-5 h-5 text-[#61DAFB]" />
              <span>React</span>
            </div>

            {/* TypeScript */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiTypescript className="w-5 h-5 text-[#3178C6]" />
              <span>TypeScript</span>
            </div>

            {/* JavaScript */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />
              <span>JavaScript</span>
            </div>

            {/* Tailwind */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />
              <span>Tailwind CSS</span>
            </div>

            {/* Figma */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiFigma className="w-5 h-5 text-[#F24E1E]" />
              <span>Figma</span>
            </div>

            {/* Node.js */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiNodedotjs className="w-5 h-5 text-[#339933]" />
              <span>Node.js</span>
            </div>

            {/* MongoDB */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiMongodb className="w-5 h-5 text-[#47A248]" />
              <span>MongoDB</span>
            </div>

            {/* Supabase */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiSupabase className="w-5 h-5 text-[#3ECF8E]" />
              <span>Supabase</span>
            </div>

            {/* Git */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-xs font-bold text-[#111827] select-none">
              <SiGit className="w-5 h-5 text-[#F05032]" />
              <span>Git</span>
            </div>



            {/* + many more */}
            <div className="flex items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-xl px-4 py-2.5 text-xs font-bold text-[#667085] select-none">
              <span>+ many more</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 9: FAQ ─────────────────────────────────────────── */}
      <FAQSection />

      {/* ── SECTION 10: Final CTA ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100" aria-label="Final call to action">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Inner Navy Block */}
          <div className="bg-[#0B1220] rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden shadow-xl">
            {/* Ambient Background Gradient Tints */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-tr from-pink-500 via-transparent to-purple-500" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Ready to launch a website that works?
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-8 font-normal">
                Tell us about your business and Websy will help you turn it into a premium, fast, and conversion-focused website.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#0B1220] text-sm font-bold py-3.5 px-8 rounded-full transition-colors duration-200 shadow-sm"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-zinc-600 hover:border-zinc-400 text-white text-sm font-semibold py-3.5 px-8 rounded-full transition-colors duration-200"
                >
                  View Live Work
                </Link>
              </div>

              {/* Direct Contacts Row */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-8 border-t border-zinc-800 text-zinc-400 text-xs font-semibold">
                <a href="mailto:info@websy.bd" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FiMail className="w-4 h-4 text-pink-accent" />
                  info@websy.bd
                </a>
                <a href="tel:+8801828034555" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FiPhone className="w-4 h-4 text-pink-accent" />
                  01828034555
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590418449990" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FiFacebook className="w-4 h-4 text-pink-accent" />
                  Facebook Page
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// ── Interactive FAQ Component ──────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you build e-commerce websites?",
      a: "Yes. We build product pages, cart flows, checkout-ready interfaces, and mobile-first storefronts."
    },
    {
      q: "Do you build portfolio websites?",
      a: "Yes. We design personal portfolio websites for professionals, creators, freelancers, and businesses."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes. Every Websy website is designed and developed to work smoothly across desktop, tablet, and mobile."
    },
    {
      q: "Do I own the website code?",
      a: "Yes. Websy focuses on clean builds and full code ownership so you are not locked into unnecessary builders."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. We can improve the design, structure, speed, and user experience of an existing website."
    },
    {
      q: "How can I contact Websy?",
      a: "You can contact Websy by email at info@websy.bd or by phone at 01828034555."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-gray-100" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            Questions before starting?
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[#111827] pr-4">{faq.q}</span>
                  <div className={`w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FCE7EF] text-pink-accent' : ''}`}>
                    <FiChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40 border-t border-[#E5E7EB]' : 'max-h-0'}`}
                >
                  <p className="p-5 md:p-6 text-xs text-[#667085] leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
