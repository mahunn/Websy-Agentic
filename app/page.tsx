"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Services from '@/components/Services';
import Works from '@/components/Works';
import AboutTeam from '@/components/AboutTeam';
import Pricing from '@/components/Pricing';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit, SiJavascript, SiFigma, SiMongodb, SiSupabase } from 'react-icons/si';
import {
  FiUser,
  FiBriefcase,
  FiArrowRight,
  FiArrowDown,
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
  FiFacebook,
  FiShield,
  FiClock,
  FiLayers,
  FiAward,
  FiZap
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

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
    src="/mahin-ahmad.jpg"
    alt="Mahin logo"
    width={32}
    height={32}
    className={`rounded-full border border-gray-100/50 overflow-hidden shrink-0 object-cover object-[center_20%] ${className}`}
    style={style}
  />
);

export default function Home() {
  const [activeCard, setActiveCard] = useState(3);

  return (
    <main id="main-content" className="bg-white">
      {/* ── Hero (Musemind 1:1 Architecture) ─────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#F3F4F7] min-h-0 lg:min-h-[92vh] flex flex-col justify-between pt-[70px] sm:pt-[84px] md:pt-[92px]"
        aria-labelledby="hero-headline"
      >
        {/* Soft architectural window daylight & studio ambient shadows */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 90% 25%, rgba(226,92,56,0.04) 0%, transparent 60%),' +
              'radial-gradient(ellipse 65% 55% at 15% 15%, rgba(255,255,255,0.95) 0%, transparent 65%),' +
              'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(243,244,247,0.8) 50%, rgba(235,237,242,0.9) 100%)',
          }}
        />

        {/* Diagonal architectural window shadow casting */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(120deg, transparent 35%, rgba(0,0,0,0.015) 38%, transparent 42%, transparent 55%, rgba(0,0,0,0.02) 60%, transparent 68%)',
          }}
        />

        {/* Bottom smooth white fadeout (matches Musemind 1:1) */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full pt-8 sm:pt-14 pb-20 sm:pb-24 lg:py-24 flex-grow flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center w-full">

            {/* ── Left Column: Musemind 1:1 Editorial Layout ───────────────── */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 max-w-3xl">
              {/* Main Heading — Guaranteed 2-line bold editorial hierarchy (1:1 Musemind) */}
              <h1
                id="hero-headline"
                className="text-[#111111] font-display font-extrabold text-[34px] sm:text-[46px] md:text-[54px] lg:text-[60px] xl:text-[68px] tracking-[-0.035em] leading-[1.08]"
              >
                <span className="block">Bangladesh&apos;s Leading</span>
                <span className="block">Website Making Agency</span>
              </h1>

              {/* Subheading */}
              <p className="text-[#4B5563] font-sans font-normal text-base sm:text-lg md:text-[20px] leading-[1.58] max-w-[540px]">
                Websy is a global Web development agency. Helping brands redefine experiences and empower business growth.
              </p>

              {/* Actions & Clutch Social Proof (1:1 with Musemind) */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-7 pt-1 w-full sm:w-auto">
                <Link
                  href="/contact"
                  id="hero-cta-contact"
                  className="inline-flex items-center justify-center bg-[#111111] hover:bg-[#262626] text-white rounded-full px-8 py-4 text-[15.5px] font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] whitespace-nowrap"
                >
                  Contact us
                </Link>

                {/* Clutch Rating Badge */}
                <div className="flex items-center gap-3.5">
                  {/* Authentic Clutch 'C' logo with coral dot */}
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200/90 shadow-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" aria-label="Clutch">
                      <path
                        d="M16 8C11.58 8 8 11.58 8 16s3.58 8 8 8c3.4 0 6.3-2.12 7.4-5.1h-3.3c-.8 1.3-2.3 2.1-4.1 2.1-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9c1.8 0 3.3.8 4.1 2.1h3.3C22.3 10.12 19.4 8 16 8z"
                        fill="#111111"
                      />
                      <circle cx="21" cy="16" r="2.2" fill="#FF3D2E" />
                    </svg>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 leading-none">
                      <span className="text-[17px] sm:text-[18px] font-bold text-[#111111] leading-none">4.9</span>
                      <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5 stars on Clutch">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 fill-[#FF3D2E] text-[#FF3D2E]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-[12px] text-[#71717A] font-normal leading-tight mt-1">Based on 47 Clutch reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ══ Mobile Mockup Stack (< lg only) ────────────────────── */}
            <div
              className="lg:hidden w-auto sm:w-full -mx-1 sm:mx-auto sm:max-w-[440px] mt-8 mb-4"
              aria-hidden="true"
            >
              <div className="relative h-[300px] px-0 sm:px-4">

                {/* Mobile Card 1 — Mahin portfolio (back left) */}
                <div
                  className={`absolute w-[68%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-neutral-900/30' : 'shadow-md border-gray-100/80'}`}
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
                  className={`absolute w-[68%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-neutral-900/30' : 'shadow-md border-gray-100/80'}`}
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
                  className={`absolute w-[76%] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeCard === 3 ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-neutral-900/30' : 'shadow-md border-gray-100/80'}`}
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

            {/* ══ Desktop Mockup Stack (lg+ only) ────────────────────── */}
            <div
              className="hidden lg:flex lg:col-span-5 xl:col-span-5 w-full relative items-center justify-center h-[540px] xl:h-[600px]"
              aria-hidden="true"
            >
              {/* Subtle 3D Studio Architectural Steps & Light Caustics */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,255,255,0.85) 0%, transparent 70%),' +
                    'radial-gradient(circle at 60% 40%, rgba(226,92,56,0.05) 0%, transparent 60%)',
                }}
              />

              {/* Card 1 — Mahin portfolio (back, tilted left) */}
              <div
                className={`absolute w-[72%] rounded-3xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.22)] border-neutral-900/25 scale-[1.03]' : 'shadow-[0_16px_36px_rgba(0,0,0,0.08)] border-gray-200/80 scale-[0.93]'}`}
                style={{ top: '4%', left: '0%', transform: 'rotate(-5deg)', zIndex: activeCard === 1 ? 3 : 1 }}
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
                className={`absolute w-[72%] rounded-3xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.22)] border-neutral-900/25 scale-[1.03]' : 'shadow-[0_16px_36px_rgba(0,0,0,0.08)] border-gray-200/80 scale-[0.93]'}`}
                style={{ top: '12%', right: '0%', transform: 'rotate(5deg)', zIndex: activeCard === 2 ? 3 : (activeCard === 3 ? 2 : 1) }}
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
                className={`absolute w-[78%] rounded-3xl overflow-hidden border bg-white transition-all duration-300 cursor-pointer ${activeCard === 3 ? 'shadow-[0_36px_72px_-12px_rgba(0,0,0,0.25)] border-neutral-900/30 scale-[1.03]' : 'shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-gray-200/90 scale-[0.93]'}`}
                style={{ bottom: '2%', left: '50%', transform: 'translateX(-50%) rotate(-1deg)', zIndex: activeCard === 3 ? 3 : 2 }}
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
            </div>

          </div>
        </div>
      </section>

      {/* ── Brand Logos Trust Strip (Musemind 1:1) ────────────────── */}
      <section className="bg-white pt-8 pb-12 relative z-20" aria-label="Trusted brands">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#111111] text-center mb-8">
            TRUSTED BY 50+ BANGLADESHI &amp; GLOBAL BRANDS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-neutral-800">
              <Image src="/henleyzone-logo-v2.png" alt="Henley Zone" width={28} height={28} className="rounded-full object-cover" />
              <span>HENLEY ZONE</span>
            </div>
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-neutral-800">
              <Image src="/glamora-logo.png" alt="Glamora" width={28} height={28} className="rounded-full object-cover" />
              <span>GLAMORA</span>
            </div>
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-neutral-800">
              <Image src="/mahin-ahmad.jpg" alt="Mahin Ahmad" width={28} height={28} className="rounded-full object-cover object-[center_20%]" />
              <span>MAHIN AHMAD</span>
            </div>
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-neutral-800">
              <span className="w-7 h-7 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center font-bold">F</span>
              <span>FLESHPOTS</span>
            </div>
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-neutral-800">
              <span className="w-7 h-7 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center font-bold">J</span>
              <span>JHT HUB</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Core Capabilities & Bento Grid (Step 3) ──────── */}
      <Services />

      {/* ── SECTION 1.5: Engineering Authority & Standards Strip ───────────────────────────── */}
      <section className="bg-white border-y border-gray-200/70 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex items-start gap-4 pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-pink-accent flex items-center justify-center shrink-0">
                <FiAward className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1220] mb-0.5">Senior Developers Only</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Your project is architected and built directly by senior full-stack developers with zero agency middlemen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <FiShield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1220] mb-0.5">International Standards</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Adhering to ISO 27001 data security, GDPR compliance, sub-1s Core Web Vitals, and 100% clean custom code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FiClock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1220] mb-0.5">Rapid 24–48h SLA Delivery</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Fast-turnaround ad landing pages and agile store delivery with direct WhatsApp communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1.8: What's stopping your business from shipping? ───────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#0B1220] rounded-3xl p-8 sm:p-12 md:p-16 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400 block mb-3">
                Execution Bottlenecks Solved
              </span>
              <h2 
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                What’s stopping your store from scaling?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 font-normal">
                Too many websites fail not because of product quality, but because of slow mobile load times, high-friction checkout forms, lost ad tracking, and agency delays. Our senior engineers step in, eliminate execution gaps, and deliver high-converting websites built to generate revenue.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h4 className="text-xs font-bold text-white mb-1">⚡ Sub-1s Checkout</h4>
                  <p className="text-[11px] text-gray-400">Never lose an ad visitor to slow loading pages.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h4 className="text-xs font-bold text-white mb-1">🎯 1-Click Order Forms</h4>
                  <p className="text-[11px] text-gray-400">bKash &amp; COD forms built for instant customer buy-in.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h4 className="text-xs font-bold text-white mb-1">🔒 Zero Builder Fees</h4>
                  <p className="text-[11px] text-gray-400">100% custom code with zero recurring platform lock-in.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#0B1220] hover:bg-rose-50 hover:text-pink-accent text-xs sm:text-sm font-extrabold py-3.5 px-8 rounded-full transition-all duration-200 shadow-sm"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200"
                >
                  Explore Industry Solutions →
                </Link>
              </div>
            </div>
            
            {/* Ambient background glow */}
            <div 
              className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.18) 0%, transparent 70%)' }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Selected Works & Interactive Filtering (Step 4) ── */}
      <Works />

      {/* ── SECTION 4: Pricing & Project Scope Calculator (Step 6) ───── */}
      <Pricing />

      {/* ── SECTION 3.5: Commercial Engagement Models (Like Pleron Labs) ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-gray-100" aria-label="Engagement models">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
              Partnership Structures
            </span>
            <h2 
              className="text-3xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-4 leading-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Three flexible engagement models
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed">
              Structured engagement models designed to match different business stages, ad campaigns, and agency scaling needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Model 1: Fixed Scope */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-pink-accent/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-pink-accent flex items-center justify-center mb-6">
                  <FiZap className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-pink-accent uppercase tracking-wider block mb-2">Turnkey Delivery</span>
                <h3 className="text-xl font-bold text-[#0B1220] mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Fixed-Scope Project
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                  Ideal for new product launches, ad campaign landing pages, and complete e-commerce builds with predetermined specs and clear deadlines.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Guaranteed 24–48h or 3–7d delivery', 'Transparent milestone payments', '100% full source code ownership', 'Staging preview approval before launch'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                      <FiCheck className="text-pink-accent w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-sm w-full text-center"
              >
                Start Fixed Project
              </Link>
            </div>

            {/* Model 2: Monthly Care Retainer */}
            <div className="bg-white border-2 border-[#0B1220] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0B1220] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                Continuous Growth
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center mb-6">
                  <FiTrendingUp className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-pink-accent uppercase tracking-wider block mb-2">Dedicated Dev Support</span>
                <h3 className="text-xl font-bold text-[#0B1220] mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Store Care &amp; Growth Retainer
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                  Ongoing developer power for growing stores running continuous ads. Monthly new landing pages, speed tuning, and conversion optimization.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Monthly new promotional landing pages', 'Continuous sub-1s speed & SEO audits', 'Priority bug fixes & inventory updates', 'A/B testing & checkout improvements'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-900 font-bold">
                      <FiCheck className="text-[#0B1220] w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-pink-accent hover:bg-pink-600 text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-sm w-full text-center"
              >
                Inquire Care Retainer
              </Link>
            </div>

            {/* Model 3: White-Label Agency */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-pink-accent/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <FiShield className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-pink-accent uppercase tracking-wider block mb-2">For Creative Agencies</span>
                <h3 className="text-xl font-bold text-[#0B1220] mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  100% Anonymous White-Label
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                  Scale your agency’s capabilities without hiring expensive in-house full-time staff. We build behind the scenes under strict NDA.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['100% anonymous execution under your brand', 'Legally backed NDA & client protection', 'On-demand scaling in 48 hours', 'Direct Slack / WhatsApp communication'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                      <FiCheck className="text-pink-accent w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20an%20agency%20white-label%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-sm w-full text-center"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Partner on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 4: About Us & Team (Step 5) ────────────────────────── */}
      <AboutTeam />

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
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-100 pt-8 md:pt-10">

            {/* Stat 1: 100% */}
            <div className="bg-white border border-gray-200/70 rounded-2xl p-5 hover:shadow-md hover:border-pink-accent/20 transition-all duration-300">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>100%</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  No Templates
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-[#0B1220]">Custom Engineered</h4>
            </div>

            {/* Stat 2: 3-7d */}
            <div className="bg-white border border-gray-200/70 rounded-2xl p-5 hover:shadow-md hover:border-pink-accent/20 transition-all duration-300">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>3–7d</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Fast Delivery
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-[#0B1220]">Average Turnaround</h4>
            </div>

            {/* Stat 3: 24h */}
            <div className="bg-white border border-gray-200/70 rounded-2xl p-5 hover:shadow-md hover:border-pink-accent/20 transition-all duration-300">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-black text-[#0B1220] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>24h</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  SLA Support
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-[#0B1220]">Response Guarantee</h4>
            </div>

            {/* Stat 4: 5★ */}
            <div className="bg-white border border-gray-200/70 rounded-2xl p-5 hover:shadow-md hover:border-pink-accent/20 transition-all duration-300">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-black text-[#0B1220] tracking-tight flex items-center gap-1" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  5.0<span className="text-amber-500 text-2xl">★</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Top Rated
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-[#0B1220]">Client Satisfaction</h4>
            </div>

          </div>

        </div>
      </section>



      {/* ── SECTION 6: Process ─────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#F8FAFC] border-t border-gray-100" aria-label="Our workflow process">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-10 md:mb-12">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-2">
              Our Workflow
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight leading-[1.1]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              How we build your website
            </h2>
          </div>

          {/* Process Timeline - Vertical Layout */}
          <div className="max-w-xl mx-auto flex flex-col gap-4 relative z-10">

            {[
              {
                num: "01",
                title: "Discover",
                text: "Goal mapping & design strategy.",
                icon: FiSearch,
                color: "bg-[#F8FAFC] text-gray-500 border-gray-200/60 group-hover:bg-soft-pink group-hover:text-pink-accent group-hover:border-[#FCE7EF]",
              },
              {
                num: "02",
                title: "Design",
                text: "Craft custom visual interfaces.",
                icon: FiMonitor,
                color: "bg-[#F8FAFC] text-gray-500 border-gray-200/60 group-hover:bg-soft-pink group-hover:text-pink-accent group-hover:border-[#FCE7EF]",
              },
              {
                num: "03",
                title: "Develop",
                text: "Build with fast, clean code.",
                icon: FiCpu,
                color: "bg-[#F8FAFC] text-gray-500 border-gray-200/60 group-hover:bg-soft-pink group-hover:text-pink-accent group-hover:border-[#FCE7EF]",
              },
              {
                num: "04",
                title: "Launch",
                text: "Optimize, deploy & hand over.",
                icon: FiTrendingUp,
                color: "bg-[#F8FAFC] text-gray-500 border-gray-200/60 group-hover:bg-soft-pink group-hover:text-pink-accent group-hover:border-[#FCE7EF]",
              },
            ].map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative group flex items-center justify-between bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 hover:shadow-md hover:border-pink-accent/20 transition-all duration-300 gap-4"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Block */}
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${step.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-[#111827] mb-0.5">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#667085] leading-relaxed font-semibold">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {/* Step tag */}
                  <span className="text-[10px] font-bold text-gray-300 tracking-wider shrink-0 uppercase">
                    Step {step.num}
                  </span>

                  {/* Connection Arrow pointing down to the next card */}
                  {step.num !== "04" && (
                    <div className="absolute -bottom-4.5 left-[38px] sm:left-[42px] -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                      <div className="w-[1.5px] h-3 bg-gradient-to-b from-gray-200 to-gray-300/40 group-hover:from-pink-accent/50 group-hover:to-pink-accent/20 transition-all duration-300" />
                      <div className="w-5 h-5 rounded-full bg-white border border-gray-200 group-hover:border-pink-accent/30 flex items-center justify-center shadow-sm text-gray-400 group-hover:text-pink-accent transition-all duration-200 -mt-0.5">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ── SECTION 7: Website Packages ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100" aria-label="Website packages">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
              Pricing &amp; Packages
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-5 leading-[1.1]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Transparent packages built for your stage
            </h2>
            <p className="text-base md:text-lg text-[#667085] leading-relaxed max-w-2xl font-normal">
              Whether you are testing a single product on Facebook ads or scaling a multi-category brand, we have an exact package ready for you.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Package 1: Ad Campaign Landing Page (Affordable Fast-Track) */}
            <div className="group bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-pink-accent/20 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#111827]">Ad Landing Page</h3>
                  <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full uppercase">
                    24–48h Delivery
                  </span>
                </div>
                <p className="text-xs text-pink-accent font-semibold tracking-wide uppercase mb-3">
                  For single viral products &amp; ad sellers
                </p>
                <div className="mb-4">
                  <span className="text-xl sm:text-2xl font-black text-gray-900 block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    Affordable Fast-Track
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold">
                    Zero monthly software fees • 1-time setup
                  </span>
                </div>
                <div className="h-px bg-gray-100 mb-6" />
                <ul className="space-y-3.5 mb-8">
                  {[
                    '1-Click Cash on Delivery + bKash order form',
                    'Sub-1s mobile load speed (<800ms)',
                    'Meta (Facebook) & TikTok Pixel setup',
                    'Instant order alert directly to WhatsApp',
                    'Mobile-first high conversion copywriting'
                  ].map(item => (
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
                Launch Campaign Page
              </Link>
            </div>

            {/* Package 2: Standard E-Commerce Store (Cost-Effective All-In-One - Most Popular) */}
            <div className="group bg-white border-2 border-[#0B1220] rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0B1220] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                Most Popular
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">Standard E-Commerce</h3>
                <p className="text-xs text-pink-accent font-semibold tracking-wide uppercase mb-3">
                  For growing clothing &amp; online brands
                </p>
                <div className="mb-4">
                  <span className="text-xl sm:text-2xl font-black text-gray-900 block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    Cost-Effective All-In-One
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold">
                    Full turnkey store • 100% custom code ownership
                  </span>
                </div>
                <div className="h-px bg-gray-100 mb-6" />
                <ul className="space-y-3.5 mb-8">
                  {[
                    'Multi-product catalog & category layout',
                    'Dynamic cart & frictionless checkout',
                    'Full order & inventory admin panel',
                    'Customer invoice generator & order alerts',
                    'Mobile-first conversion-tested UX',
                    'Free admin training & product setup'
                  ].map(item => (
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
                Build Your Store
              </Link>
            </div>

            {/* Package 3: Custom E-Commerce & Platform (Tailored Architecture) */}
            <div className="group bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-pink-accent/20 transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">Custom Platform</h3>
                <p className="text-xs text-pink-accent font-semibold tracking-wide uppercase mb-3">
                  For scaled brands &amp; custom workflows
                </p>
                <div className="mb-4">
                  <span className="text-xl sm:text-2xl font-black text-gray-900 block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    Tailored Architecture
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold">
                    Lean studio pricing • Custom logistics &amp; APIs
                  </span>
                </div>
                <div className="h-px bg-gray-100 mb-6" />
                <ul className="space-y-3.5 mb-8">
                  {[
                    'Custom Next.js full-stack architecture',
                    'Automated Courier API (Steadfast/Pathao)',
                    'Online payment gateways (SSLCommerz/bKash)',
                    'Custom admin dashboard & sales analytics',
                    '100% code ownership & zero monthly fees',
                    'High-traffic load optimization'
                  ].map(item => (
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
                Engineer Custom Store
              </Link>
            </div>

          </div>

          {/* Custom Solutions & Future expansion Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#0B1220] via-gray-900 to-[#1e293b] rounded-3xl p-7 sm:p-9 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-gray-800">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400 block mb-1">
                Beyond E-Commerce
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 text-white" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Looking for a custom portfolio, corporate site, or web app?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-normal leading-relaxed">
                We engineer bespoke personal brands, agency portals, and full-stack software applications tailored to your business logic.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#0B1220] hover:bg-rose-50 hover:text-pink-accent text-xs font-bold py-3.5 px-7 rounded-full transition-all duration-200 shrink-0 whitespace-nowrap shadow-sm"
            >
              Discuss Custom Project →
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECTION 7.5: Zero-Risk Client Guarantee & Trial ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-gray-100" aria-label="Zero risk guarantee">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 md:p-16 shadow-md relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-accent block mb-2">
                100% Client Protection
              </span>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-4 leading-tight"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Not convinced? Test us with absolute zero risk.
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
                We eliminate the risk of hiring developers. We build your initial project on a private staging server first. If you're not 100% satisfied with the speed, design, and user experience, walk away with no obligations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#F8FAFC] border border-gray-200/70 rounded-2xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-pink-accent flex items-center justify-center font-bold text-xs mb-3">
                    01
                  </div>
                  <h4 className="text-sm font-extrabold text-[#0B1220] mb-1">Staging Preview First</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Test live forms, mobile responsiveness, and speed before final payment.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] border border-gray-200/70 rounded-2xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs mb-3">
                    02
                  </div>
                  <h4 className="text-sm font-extrabold text-[#0B1220] mb-1">100% Code Transfer</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Full GitHub repository and cloud hosting transfer with zero vendor lock-in.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] border border-gray-200/70 rounded-2xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
                    03
                  </div>
                  <h4 className="text-sm font-extrabold text-[#0B1220] mb-1">24–48h SLA Delivery</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Fast turnaround for campaign ad pages so you launch your ads on schedule.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full transition-all duration-200 shadow-sm"
                >
                  Start Risk-Free Project
                </Link>
                <a
                  href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20a%20risk-free%20website%20build."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full transition-all duration-200 shadow-sm"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7.8: Client Reviews & Testimonials ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100" aria-label="Client testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-[11px] font-bold tracking-[0.15em] text-pink-accent uppercase block mb-3">
              Proven Outcomes
            </span>
            <h2 
              className="text-3xl md:text-5xl font-extrabold text-[#0B1220] tracking-tight mb-4 leading-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Trusted by store owners &amp; creators
            </h2>
            <p className="text-base text-gray-500 font-normal leading-relaxed">
              Here is what founders and brand managers say about building with Websy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-sm mb-4">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal mb-6">
                  "Websy delivered our online fashion store in just 5 days. The mobile cart speed is instant and our Facebook ads conversion rate jumped significantly. Zero technical headaches."
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                <HenleyLogo className="w-9 h-9 border" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Henley Zone</h4>
                  <span className="text-[10px] text-gray-400">E-Commerce Brand</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-sm mb-4">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal mb-6">
                  "Our campaign landing page loads in under a second and looks like an international editorial magazine. The 1-click cash-on-delivery form made ordering effortless for customers."
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                <GlamoraLogo className="w-9 h-9 border" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Glamora Beige</h4>
                  <span className="text-[10px] text-gray-400">Luxury Lifestyle Brand</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-sm mb-4">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal mb-6">
                  "Working with senior engineers directly made all the difference. Clean Next.js architecture, zero bloat, and complete ownership of the source code. Highly recommended."
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                <MahinLogo className="w-9 h-9 border" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Mahin Ahmad</h4>
                  <span className="text-[10px] text-gray-400">Full-Stack Platform</span>
                </div>
              </div>
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
      <section className="py-12 md:py-16 bg-white border-t border-gray-100" aria-label="Final call to action">
        <div className="max-w-5xl mx-auto px-6 md:px-8">

          {/* Inner Light-Themed Block */}
          <div className="bg-[#F8FAFC] border border-gray-200/60 rounded-[24px] p-8 sm:p-10 md:p-12 text-center relative overflow-hidden shadow-sm">
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B1220] tracking-tight mb-3 leading-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Ready to build your website?
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 font-semibold">
                Tell us about your project and we'll handle the rest.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0B1220] hover:bg-[#1b2538] text-white text-xs sm:text-sm font-extrabold py-3.5 px-8 rounded-full transition-all duration-200 shadow-sm"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-800 hover:text-gray-950 text-xs sm:text-sm font-semibold py-3.5 px-8 rounded-full transition-all duration-200"
                >
                  View Live Work
                </Link>
              </div>

              {/* Direct Contacts Row */}
              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 pt-6 border-t border-gray-200/70 text-gray-500 text-[11px] font-bold">
                <a href="mailto:info@websy.bd" className="flex items-center gap-1.5 hover:text-[#0B1220] transition-colors">
                  <FiMail className="w-3.5 h-3.5 text-pink-accent" />
                  info@websy.bd
                </a>
                <a href="tel:+8801828034555" className="flex items-center gap-1.5 hover:text-[#0B1220] transition-colors">
                  <FiPhone className="w-3.5 h-3.5 text-pink-accent" />
                  01828034555
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590418449990" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#0B1220] transition-colors">
                  <FiFacebook className="w-3.5 h-3.5 text-pink-accent" />
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
      q: "Can you build a single-product landing page for Facebook / TikTok ads?",
      a: "Yes! We build high-converting 1-product landing pages with instant Cash on Delivery and bKash order forms at an extremely affordable, budget-friendly rate with rapid 24–48h delivery."
    },
    {
      q: "How do I manage orders and products on my store?",
      a: "You receive a clean, easy-to-use admin dashboard. You can add or edit products, view new customer orders in real-time, track inventory, and download customer data in one click."
    },
    {
      q: "Can you integrate bKash, Nagad, and local couriers?",
      a: "Yes. We support manual bKash/Nagad & Cash on Delivery workflows, as well as automated merchant payment gateways (SSLCommerz/bKash) and courier APIs (Steadfast, Pathao, RedX)."
    },
    {
      q: "Are there any monthly subscription fees like Shopify or Wix?",
      a: "No. You get 100% code ownership with zero monthly builder lock-in fees. Your website is deployed on fast, modern cloud infrastructure."
    },
    {
      q: "Do you also build personal portfolios, business sites, and custom web apps?",
      a: "Yes! While we specialize heavily in high-converting e-commerce, our engineering team builds custom portfolios, corporate websites, and full-stack web applications."
    },
    {
      q: "How fast will my website load on mobile?",
      a: "Every Websy website is performance-engineered with Next.js to achieve sub-1-second mobile load times, ensuring maximum conversion and lower ad costs."
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
