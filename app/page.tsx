"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import TeamShowcase from '@/components/TeamShowcase';

export default function Home() {
  const [activeCard, setActiveCard] = useState<number>(3);
  const [pathlyImage, setPathlyImage] = useState<string>('/pathly-dashboard.png');

  return (
    <main id="main-content" className="bg-white selection:bg-red-500/20 selection:text-red-600">

      {/* ── 1. Hero Section (1:1 Reference UI Mindset — Mobile First) ── */}
      <section
        className="relative overflow-hidden bg-[#F4F5F8] pt-[72px] sm:pt-[90px] md:pt-[104px] pb-14 sm:pb-20"
        aria-labelledby="hero-headline"
      >
        {/* Soft architectural window daylight & studio ambient shadows */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 90% 20%, rgba(220,38,38,0.03) 0%, transparent 60%),' +
              'radial-gradient(ellipse 60% 50% at 20% 15%, rgba(255,255,255,0.95) 0%, transparent 65%),' +
              'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(244,245,248,0.8) 50%, rgba(236,238,243,0.9) 100%)',
          }}
        />

        {/* Bottom smooth white transition */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pt-4 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* ── Editorial Headline & Copy (Mobile-First) ────────────── */}
            <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5 sm:space-y-6 max-w-xl">
              
              {/* Bold Headline */}
              <h1
                id="hero-headline"
                className="text-[#111111] font-display font-extrabold text-[32px] xs:text-[36px] sm:text-[48px] md:text-[54px] lg:text-[50px] xl:text-[58px] tracking-[-0.035em] leading-[1.08]"
              >
                <span className="block">Bangladesh&apos;s Leading</span>
                <span className="block">Website Making Agency</span>
              </h1>

              {/* Minimalist 2-line Subtitle */}
              <p className="text-[#4B5563] font-sans font-normal text-sm sm:text-base md:text-[18px] leading-[1.55] max-w-[480px]">
                Websy is a global Web development agency. Helping brands redefine experiences and empower business growth.
              </p>

              {/* Actions: Black Pill Button + Clutch 4.9 Social Proof */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pt-1 w-full sm:w-auto">
                <Link
                  href="/contact"
                  id="hero-cta-contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#111111] hover:bg-black text-white rounded-full px-8 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-semibold transition-all duration-200 shadow-sm active:scale-[0.99] text-center"
                >
                  Contact us
                </Link>

                {/* Clutch Rating Badge */}
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  {/* Clutch 'C' Logo Circle */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-200 shadow-2xs flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 32 32" fill="none" aria-label="Clutch">
                      <path
                        d="M16 8C11.58 8 8 11.58 8 16s3.58 8 8 8c3.4 0 6.3-2.12 7.4-5.1h-3.3c-.8 1.3-2.3 2.1-4.1 2.1-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c1.8 0 3.3.8 4.1 2.1h3.3C22.3 10.12 19.4 8 16 8z"
                        fill="#111111"
                      />
                      <circle cx="21" cy="16" r="2.2" fill="#EF4444" />
                    </svg>
                  </div>

                  <div className="flex flex-col justify-center leading-none">
                    <div className="flex items-center gap-1.5 leading-none">
                      <span className="text-[16px] sm:text-[17px] font-bold text-[#111111] leading-none">4.9</span>
                      <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5 stars on Clutch">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3.5 h-3.5 fill-[#EF4444] text-[#EF4444]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] text-[#71717A] font-normal mt-1">Based on 47 Clutch reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Visual Mockup Stack (Mobile & Desktop Responsive) ─── */}
            <div className="lg:col-span-6 w-full mt-2 sm:mt-6 lg:mt-0 flex items-center justify-center">
              
              {/* Mobile View Mockup Stack (< lg) */}
              <div className="lg:hidden w-full max-w-[380px] mx-auto h-[260px] sm:h-[310px] relative">
                
                {/* Back Left Card */}
                <div
                  className={`absolute w-[70%] rounded-2xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${
                    activeCard === 1 ? 'shadow-xl border-neutral-900/30' : 'shadow-md border-gray-200'
                  }`}
                  style={{
                    top: '0%',
                    left: '2%',
                    transform: activeCard === 1 ? 'rotate(-6deg) scale(1.03)' : 'rotate(-6deg) scale(0.92)',
                    zIndex: activeCard === 1 ? 20 : 1,
                  }}
                  onClick={() => setActiveCard(1)}
                >
                  <Image
                    src="/mahin-mockup.png"
                    alt="Portfolio Preview"
                    width={500}
                    height={340}
                    className="w-full h-auto object-cover"
                    sizes="280px"
                  />
                </div>

                {/* Middle Right Card */}
                <div
                  className={`absolute w-[70%] rounded-2xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${
                    activeCard === 2 ? 'shadow-xl border-neutral-900/30' : 'shadow-md border-gray-200'
                  }`}
                  style={{
                    top: '8%',
                    right: '2%',
                    transform: activeCard === 2 ? 'rotate(6deg) scale(1.03)' : 'rotate(6deg) scale(0.92)',
                    zIndex: activeCard === 2 ? 20 : (activeCard === 3 ? 10 : 1),
                  }}
                  onClick={() => setActiveCard(2)}
                >
                  <Image
                    src="/henley-mockup-1-cropped.png"
                    alt="Henley Zone Store Preview"
                    width={500}
                    height={340}
                    className="w-full h-auto object-cover"
                    sizes="280px"
                  />
                </div>

                {/* Front Center Card (Glamora) */}
                <div
                  className={`absolute w-[78%] rounded-2xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${
                    activeCard === 3 ? 'shadow-2xl border-neutral-900/40' : 'shadow-lg border-gray-200'
                  }`}
                  style={{
                    bottom: '2%',
                    left: '50%',
                    transform: activeCard === 3 ? 'translateX(-50%) rotate(-1deg) scale(1.02)' : 'translateX(-50%) rotate(-1deg) scale(0.94)',
                    zIndex: activeCard === 3 ? 25 : 10,
                  }}
                  onClick={() => setActiveCard(3)}
                >
                  <Image
                    src="/glamora-mockup.png"
                    alt="Glamora Store Preview"
                    width={500}
                    height={340}
                    className="w-full h-auto object-cover"
                    sizes="300px"
                    priority
                  />
                </div>
              </div>

              {/* Desktop View Mockup Stack (lg+) */}
              <div className="hidden lg:flex w-full relative items-center justify-center h-[500px] xl:h-[540px]">
                
                {/* Left Tilt */}
                <div
                  className={`absolute w-[66%] rounded-3xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${
                    activeCard === 1
                      ? 'shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] border-neutral-900/30'
                      : 'shadow-lg border-gray-200 hover:shadow-xl'
                  }`}
                  style={{
                    top: '2%',
                    left: '0%',
                    transform: activeCard === 1 ? 'rotate(-6deg) scale(1.03)' : 'rotate(-6deg) scale(0.95)',
                    zIndex: activeCard === 1 ? 30 : 1,
                  }}
                  onClick={() => setActiveCard(1)}
                >
                  <Image
                    src="/mahin-mockup.png"
                    alt="Mahin Ahmad Portfolio"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Right Tilt */}
                <div
                  className={`absolute w-[66%] rounded-3xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${
                    activeCard === 2
                      ? 'shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] border-neutral-900/30'
                      : 'shadow-lg border-gray-200 hover:shadow-xl'
                  }`}
                  style={{
                    top: '8%',
                    right: '0%',
                    transform: activeCard === 2 ? 'rotate(6deg) scale(1.03)' : 'rotate(6deg) scale(0.95)',
                    zIndex: activeCard === 2 ? 30 : 2,
                  }}
                  onClick={() => setActiveCard(2)}
                >
                  <Image
                    src="/henley-mockup-1-cropped.png"
                    alt="Henley Zone Store"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Center Laptop Display */}
                <div
                  className={`absolute w-[82%] rounded-3xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${
                    activeCard === 3
                      ? 'shadow-[0_36px_72px_-12px_rgba(0,0,0,0.28)] border-neutral-900/35'
                      : 'shadow-xl border-gray-200/90'
                  }`}
                  style={{
                    bottom: '2%',
                    left: '50%',
                    transform: activeCard === 3 ? 'translateX(-50%) rotate(-1deg) scale(1.02)' : 'translateX(-50%) rotate(-1deg) scale(0.96)',
                    zIndex: activeCard === 3 ? 30 : 15,
                  }}
                  onClick={() => setActiveCard(3)}
                >
                  <Image
                    src="/glamora-mockup.png"
                    alt="Glamora Landing Page"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Brand Trust Strip (1:1 Reference Layout) ─────────────── */}
      <section className="bg-white pt-6 pb-12 border-b border-gray-100" aria-label="Trusted brands">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#111111] text-center mb-6 sm:mb-8">
            TRUSTED BY 50+ BANGLADESHI &amp; GLOBAL BRANDS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            <div className="flex items-center gap-2 font-display font-bold text-sm sm:text-base text-neutral-800">
              <Image src="/henleyzone-logo-v2.png" alt="Henley Zone" width={24} height={24} className="rounded-full object-cover" />
              <span>HENLEY ZONE</span>
            </div>
            <div className="flex items-center gap-2 font-display font-bold text-sm sm:text-base text-neutral-800">
              <Image src="/glamora-logo.png" alt="Glamora" width={24} height={24} className="rounded-full object-cover" />
              <span>GLAMORA</span>
            </div>
            <div className="flex items-center">
              <Image
                src="/tiara-logo.png"
                alt="TIARA"
                width={95}
                height={38}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2 font-display font-bold text-sm sm:text-base text-neutral-800">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-[11px] flex items-center justify-center font-bold">F</span>
              <span>FLESHPOTS</span>
            </div>
            <div className="flex items-center gap-2 font-display font-bold text-sm sm:text-base text-neutral-800">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-[11px] flex items-center justify-center font-bold">J</span>
              <span>JHT HUB</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Selected Works Preview (Minimal Copy, High Visuals) ──── */}
      <section className="py-12 sm:py-20 bg-[#F8FAFC] border-b border-gray-200/80" aria-label="Featured Works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-mono font-bold uppercase text-[#111111] mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                <span>SELECTED WORKS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                Live Production Flagships
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#111111] hover:text-[#DC2626] transition-colors self-start sm:self-auto"
            >
              <span>Explore All Works</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Core Showcase Cards (Ordered: Henley Zone -> Arambar Saili -> Glamora -> TIARA -> FLESHPOTS -> Pathly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
            
            {/* Project 1: Henley Zone */}
            <article className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative mb-4">
                  <Image
                    src="/henley-mockup-1-cropped.png"
                    alt="Henley Zone Store"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#DC2626]">
                    Creator Apparel &amp; Drop Store
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-2">
                  Henley Zone Creator Store
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 line-clamp-2">
                  High-converting creator brand hub engineered for limited apparel drops and personal brand client acquisition.
                </p>
              </div>
              <a
                href="https://henleyzone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#111111] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-xl transition-colors mt-auto"
              >
                <span>Visit Store</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </article>

            {/* Project 2: Arambar Saili */}
            <article className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative mb-4">
                  <Image
                    src="/arambarsaili-screenshot.png"
                    alt="আড়ম্বর শৈলী Store"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#DC2626]">
                    High-Converting D2C Funnel
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-2">
                  আড়ম্বর শৈলী (Arambar Saili)
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 line-clamp-2">
                  High-converting ethnic fashion funnel with interactive color/size variant switchers and frictionless 1-click COD checkout.
                </p>
              </div>
              <a
                href="https://arambarsaili.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#111111] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-xl transition-colors mt-auto"
              >
                <span>Visit Store</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </article>

            {/* Project 3: Glamora */}
            <article className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative mb-4">
                  <Image
                    src="/glamora-mockup.png"
                    alt="Glamora Store"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#DC2626]">
                    Minimalist Campaign Funnel
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-2">
                  Glamora Luxe Apparel
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 line-clamp-2">
                  High-speed clothing landing page with instant size variations, courier fee calculator, and 1-click checkout.
                </p>
              </div>
              <a
                href="https://glamora-beige.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#111111] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-xl transition-colors mt-auto"
              >
                <span>Visit Store</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </article>

            {/* Project 4: TIARA */}
            <article className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative mb-4">
                  <Image
                    src="/tiara-cover.png"
                    alt="TIARA Store"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#DC2626]">
                    Luxury Modest Fashion Store
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-2">
                  TIARA (প্রিমিয়াম ফ্যাশন)
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 line-clamp-2">
                  Bespoke modest fashion storefront with real-time color swatches and automated courier delivery sync.
                </p>
              </div>
              <a
                href="https://tiarashop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#111111] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-xl transition-colors mt-auto"
              >
                <span>Visit Store</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </article>

            {/* Project 5: FLESHPOTS */}
            <article className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative mb-4">
                  <Image
                    src="/fleshpots-screenshot.png"
                    alt="FLESHPOTS Official Store"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#DC2626]">
                    Full-Stack Store • 148K+ Community
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-2">
                  FLESHPOTS Official Storefront
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 line-clamp-2">
                  High-speed commerce engineered for high traffic with instant cart drawer and automated order routing.
                </p>
              </div>
              <a
                href="https://fleshpots.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#111111] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-xl transition-colors mt-auto"
              >
                <span>Visit Store</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </article>

            {/* Project 6: Pathly — AI Progress Tracker (Different Project Category) */}
            <article className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative mb-2.5">
                  <Image
                    src={pathlyImage}
                    alt="Pathly AI Progress Tracker"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                {/* Screenshot Switcher */}
                <div className="flex items-center gap-1.5 mb-3">
                  {[
                    { label: 'Dashboard', src: '/pathly-dashboard.png' },
                    { label: 'Planner', src: '/pathly-planner.png' },
                    { label: 'Community', src: '/pathly-community.png' }
                  ].map((tab) => (
                    <button
                      key={tab.src}
                      type="button"
                      onClick={() => setPathlyImage(tab.src)}
                      className={`text-[10px] px-2 py-0.5 rounded-md transition-all cursor-pointer font-medium ${
                        pathlyImage === tab.src
                          ? 'bg-[#111111] text-white font-semibold'
                          : 'bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10.5px] font-mono font-bold uppercase text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                    AI SaaS Web App
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-2">
                  Pathly — AI Progress Tracker
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-4 line-clamp-2">
                  Intelligent study and habit tracking web app. Natural language AI logging, streak engine, and community rankings.
                </p>
              </div>
              <a
                href="https://pathlyai-tracker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#111111] bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-xl transition-colors mt-auto"
              >
                <span>Visit Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </article>

          </div>

          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-full transition-all shadow-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 4. Transparent Pricing Snapshot ─────────────────────────── */}
      <section className="py-12 sm:py-20 bg-white border-b border-gray-200/80" aria-label="Pricing Packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-gray-200 text-xs font-mono font-bold uppercase text-[#111111] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span>TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight mb-2">
              Fixed Scope. Zero Monthly Fees.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              No expensive Shopify app subscriptions. 100% full source code ownership on Next.js.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
            
            {/* Starter */}
            <div className="bg-[#FAFAFA] border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-display font-bold text-[#111111]">Starter Campaign</h3>
                  <span className="text-[11px] font-mono font-semibold text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">
                    24–48h Dispatch
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-4">Single-product campaign landing page for paid ads.</p>
                <div className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-5 pb-4 border-b border-gray-200/80">
                  Fixed 1-Time Quote
                </div>
                <ul className="space-y-2 text-xs text-neutral-700 mb-6">
                  {['Sub-800ms mobile-first landing page', 'Meta Pixel & Server CAPI setup', 'Cash on Delivery & WhatsApp order form', '100% code ownership (zero monthly fees)'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full text-center bg-neutral-200 hover:bg-neutral-300 text-[#111111] font-semibold text-xs py-3 rounded-full transition-colors"
              >
                Inquire Starter
              </Link>
            </div>

            {/* Growth (Recommended) */}
            <div className="bg-white border-2 border-[#111111] rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white text-[10px] font-mono font-extrabold uppercase px-3 py-0.5 rounded-full">
                RECOMMENDED
              </div>
              <div>
                <div className="flex items-center justify-between mb-2 mt-1">
                  <h3 className="text-lg font-display font-bold text-[#111111]">Growth Commerce</h3>
                  <span className="text-[11px] font-mono font-semibold text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">
                    3–5 Days
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-4">Complete brand store for apparel, fragrance &amp; lifestyle.</p>
                <div className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-5 pb-4 border-b border-gray-200/80">
                  Turnkey Fixed Package
                </div>
                <ul className="space-y-2 text-xs text-neutral-800 font-medium mb-6">
                  {['Multi-product store & slide-out cart drawer', 'Steadfast & Pathao courier API sync', 'Ad-blocker proof Meta CAPI tracking', 'bKash, Nagad & COD automated routing'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full text-center bg-[#111111] hover:bg-black text-white font-bold text-xs py-3 rounded-full transition-colors shadow-sm"
              >
                Launch Store
              </Link>
            </div>

            {/* Custom Platform */}
            <div className="bg-[#FAFAFA] border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-display font-bold text-[#111111]">Custom Platform</h3>
                  <span className="text-[11px] font-mono font-semibold text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">
                    7–12 Days
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-4">Tailored architecture for scaling multi-warehouse brands.</p>
                <div className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-5 pb-4 border-b border-gray-200/80">
                  Custom Scope
                </div>
                <ul className="space-y-2 text-xs text-neutral-700 mb-6">
                  {['Custom Next.js & Supabase database', 'Multi-warehouse logistics & ERP sync', 'English & Bangla dual-language UI', 'Dedicated 30-day post-launch optimization'].map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full text-center bg-neutral-200 hover:bg-neutral-300 text-[#111111] font-semibold text-xs py-3 rounded-full transition-colors"
              >
                Discuss Scope
              </Link>
            </div>

          </div>

          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#111111] hover:text-[#DC2626] transition-colors"
            >
              <span>View Full Pricing &amp; Timeline Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 5. Team Showcase (Direct Access to Engineers) ───────────── */}
      <TeamShowcase />

      {/* ── 6. Minimal Direct Consultation Banner ───────────────────── */}
      <section className="py-12 sm:py-16 bg-[#FAFAFA]" aria-label="Consultation CTA">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-bold uppercase text-[#111111]">
              DIRECT DEVELOPER ACCESS • SLA &lt;15 MINS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight mb-3">
            Have a store or campaign in mind?
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 max-w-lg mx-auto mb-6 sm:mb-8">
            Connect directly with lead architect Mahin Ahmad. No sales middlemen, just immediate timeline and architecture estimates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/8801828034555?text=Hi%20Mahin!%20I'd%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-bold py-3.5 px-7 rounded-full transition-all shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#111111] hover:bg-black text-white text-sm font-semibold py-3.5 px-7 rounded-full transition-all shadow-sm"
            >
              Contact Us Page
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
