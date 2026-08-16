'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Truck, 
  Activity, 
  ShoppingBag, 
  Globe, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Terminal, 
  ArrowUpRight, 
  Layers, 
  CreditCard, 
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  RefreshCw
} from 'lucide-react';

export default function Services() {
  // Card 1: Interactive Courier Webhook Simulator State
  const [selectedCourier, setSelectedCourier] = useState<'steadfast' | 'pathao' | 'redx'>('steadfast');
  const [copiedPayload, setCopiedPayload] = useState(false);

  // Card 4: Interactive Language Toggle State
  const [activeLang, setActiveLang] = useState<'en' | 'bn'>('en');

  // Card 3: Interactive Niche Selection
  const [activeNiche, setActiveNiche] = useState<number>(0);

  const couriers = [
    { id: 'steadfast' as const, name: 'Steadfast API', trackingPrefix: 'ST-8921', speed: '24h Delivery', codFee: '0% Handling' },
    { id: 'pathao' as const, name: 'Pathao Courier', trackingPrefix: 'PT-4109', speed: 'Same Day Dhaka', codFee: 'Auto Sync' },
    { id: 'redx' as const, name: 'RedX Logistics', trackingPrefix: 'RX-7732', speed: 'Nationwide 64 Districts', codFee: 'Direct Ledger' }
  ];

  const currentCourier = couriers.find(c => c.id === selectedCourier) || couriers[0];

  const niches = [
    { name: 'Apparel & Fashion', metric: '610ms Load', conversion: '+38% COD Conversions', tags: ['Size Chips', 'Variant Swatches', 'Sticky 1-Click Order'] },
    { name: 'Fragrance & Attar', metric: '580ms Load', conversion: '+42% Combo Upsells', tags: ['Bundle Deals', 'Unboxing Reels', 'Fragrance Notes'] },
    { name: 'Daily Utensils & Mugs', metric: '640ms Load', conversion: '+29% Multi-Buys', tags: ['Custom Engraving', 'Tiered Pricing', 'Cart Drawer'] },
    { name: 'Personal Branding', metric: '520ms Load', conversion: '+55% Client Inquiries', tags: ['Consultation Booking', 'Case Studies', 'Vercel Edge'] }
  ];

  return (
    <section 
      id="services" 
      className="py-20 sm:py-28 lg:py-32 bg-[#F6F7F9] border-t border-neutral-200/60 relative overflow-hidden scroll-mt-20"
      aria-labelledby="services-headline"
    >
      {/* Soft studio architectural background depth */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.9) 0%, transparent 80%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Section Header (Musemind Style) ─────────────────────────── */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          {/* Small tracked pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
            <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#111111]">
              OUR CORE CAPABILITIES
            </span>
          </div>

          {/* Heading */}
          <h2 
            id="services-headline"
            className="text-[#111111] font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-0.03em] leading-[1.08]"
          >
            End-to-End Digital Storefronts &amp; Growth Infrastructure
          </h2>

          {/* Subtitle */}
          <p className="text-[#52525B] font-sans font-normal text-base sm:text-lg md:text-[20px] leading-[1.58] mt-5">
            We don&apos;t just build websites. We engineer high-converting commerce engines integrated with automated logistics and precision ad tracking.
          </p>
        </div>

        {/* ── Modular Bento Grid (FleexStudio Style - 4 Distinct Cards) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

          {/* ════ CARD 1 (Span 2 / 8 Cols): Automated Logistics & Courier APIs ════ */}
          <div className="lg:col-span-8 bg-white border border-neutral-200/80 rounded-3xl p-7 sm:p-9 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header & Tag */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100/80 border border-neutral-200/70 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#E25C38] bg-[#E25C38]/10 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38] animate-ping" />
                    Live Webhook Automation
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-3">
                Automated Logistics &amp; Courier APIs
              </h3>
              <p className="text-[#52525B] text-[15px] sm:text-base leading-relaxed mb-6 max-w-2xl">
                Zero-touch order fulfillment. Automatic consignment creation, real-time parcel tracking, and status syncing with Bangladesh&apos;s leading courier networks directly from your store&apos;s order flow.
              </p>

              {/* Courier Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {couriers.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCourier(c.id)}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 ${
                      selectedCourier === c.id
                        ? 'bg-[#111111] text-white shadow-sm'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      selectedCourier === c.id ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      {c.speed}
                    </span>
                  </button>
                ))}
              </div>

              {/* Interactive Code Snippet / Webhook Live Simulation */}
              <div className="bg-[#0C0D0E] rounded-2xl p-4 sm:p-5 border border-white/[0.08] font-mono text-[13px] text-zinc-300 relative overflow-hidden shadow-inner">
                {/* Window chrome header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E25C38]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-zinc-400">POST /api/v1/courier/dispatch</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK • 120ms
                  </span>
                </div>

                {/* Simulated Webhook Payload */}
                <div className="space-y-1 text-[12.5px] leading-relaxed">
                  <div>
                    <span className="text-zinc-500">&#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">&quot;event&quot;:</span> <span className="text-emerald-400">&quot;order_placed_auto_consignment&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">&quot;courier&quot;:</span> <span className="text-amber-300">&quot;{currentCourier.name}&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">&quot;tracking_id&quot;:</span> <span className="text-[#E25C38] font-bold">&quot;{currentCourier.trackingPrefix}&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">&quot;status&quot;:</span> <span className="text-emerald-400">&quot;parcel_dispatched&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">&quot;cod_amount_bdt&quot;:</span> <span className="text-blue-300">2450</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#94A3B8]">&quot;sms_notification&quot;:</span> <span className="text-purple-300">true</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">&#125;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Key Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Instant Consignment Push</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Live SMS &amp; WhatsApp Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Automatic COD Reconciliation</span>
              </div>
            </div>
          </div>

          {/* ════ CARD 2 (Span 1 / 4 Cols): Meta Pixel & Server-Side CAPI ════ */}
          <div className="lg:col-span-4 bg-white border border-neutral-200/80 rounded-3xl p-7 sm:p-9 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header Icon */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100/80 border border-neutral-200/70 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                  100% Match Quality
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-3">
                Meta Pixel &amp; Server-Side CAPI
              </h3>
              <p className="text-[#52525B] text-[15px] leading-relaxed mb-6">
                Ad-blocker proof tracking with 100% event match quality for Facebook &amp; Instagram ad campaigns. Never waste ad spend on lost attribution.
              </p>

              {/* Event Match Score Visual Card */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/70 mb-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-800">
                  <span>Server-Side CAPI Health</span>
                  <span className="text-emerald-600 font-bold">10/10 Score</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full w-full" />
                </div>

                {/* Event Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[11px] font-mono bg-white border border-neutral-200/80 text-neutral-700 px-2 py-0.5 rounded-md">
                    Purchase (Server)
                  </span>
                  <span className="text-[11px] font-mono bg-white border border-neutral-200/80 text-neutral-700 px-2 py-0.5 rounded-md">
                    InitiateCheckout
                  </span>
                  <span className="text-[11px] font-mono bg-white border border-neutral-200/80 text-neutral-700 px-2 py-0.5 rounded-md">
                    IncompleteForm
                  </span>
                </div>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2.5 pt-4 border-t border-neutral-100 text-xs text-neutral-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Bypasses iOS 14.5+ &amp; Brave Ad Blockers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Incomplete Checkout Form Capture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Custom ROAS &amp; LTV Reporting</span>
              </div>
            </div>
          </div>

          {/* ════ CARD 3 (Span 1 / 4 Cols): Conversion-Engineered E-Commerce ════ */}
          <div className="lg:col-span-4 bg-white border border-neutral-200/80 rounded-3xl p-7 sm:p-9 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header Icon */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100/80 border border-neutral-200/70 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/10 px-2.5 py-1 rounded-full">
                  &lt;650ms Speed
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-3">
                Conversion-Engineered E-Commerce
              </h3>
              <p className="text-[#52525B] text-[15px] leading-relaxed mb-6">
                High-speed, high-converting digital storefronts tailored specifically for lifestyle brands with sub-second mobile checkout.
              </p>

              {/* Niche Selector */}
              <div className="space-y-2 mb-6">
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Tailored Niche Architectures
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {niches.map((niche, idx) => (
                    <button
                      key={niche.name}
                      onClick={() => setActiveNiche(idx)}
                      className={`text-left text-xs font-semibold px-3 py-2 rounded-xl border transition-all duration-200 ${
                        activeNiche === idx
                          ? 'bg-[#111111] text-white border-neutral-900 shadow-sm'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-200/70 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="truncate">{niche.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Niche Details Box */}
              <div className="bg-neutral-50 rounded-2xl p-3.5 border border-neutral-200/70 mb-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-[#111111]">{niches[activeNiche].name}</span>
                  <span className="text-emerald-600 font-semibold">{niches[activeNiche].metric}</span>
                </div>
                <div className="text-[11.5px] text-[#E25C38] font-medium mb-2">
                  {niches[activeNiche].conversion}
                </div>
                <div className="flex flex-wrap gap-1">
                  {niches[activeNiche].tags.map((t) => (
                    <span key={t} className="text-[10.5px] bg-white border border-neutral-200/80 px-2 py-0.5 rounded-md text-neutral-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-feature Footer */}
            <div className="pt-4 border-t border-neutral-100 text-xs text-neutral-600 font-medium space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>1-Click Cash on Delivery Drawer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Sub-second Core Web Vitals</span>
              </div>
            </div>
          </div>

          {/* ════ CARD 4 (Span 2 / 8 Cols): Localization & Multi-Language Support ════ */}
          <div className="lg:col-span-8 bg-white border border-neutral-200/80 rounded-3xl p-7 sm:p-9 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header Icon & Interactive Language Switcher */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100/80 border border-neutral-200/70 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                  <Globe className="w-6 h-6" />
                </div>

                {/* Dual English / Bangla Switcher Pill */}
                <div className="flex items-center bg-neutral-100 p-1 rounded-full border border-neutral-200/80">
                  <button
                    onClick={() => setActiveLang('en')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                      activeLang === 'en'
                        ? 'bg-white text-[#111111] shadow-sm'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setActiveLang('bn')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                      activeLang === 'bn'
                        ? 'bg-[#111111] text-white shadow-sm'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    বাংলা
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-3">
                Localization &amp; Multi-Language Support
              </h3>
              <p className="text-[#52525B] text-[15px] sm:text-base leading-relaxed mb-6 max-w-2xl">
                Seamless dual English / Bangla interfaces with real-time currency toggles and native Bangladeshi payment gateways (bKash Merchant, Nagad, Cash on Delivery).
              </p>

              {/* Live Interactive UI Preview */}
              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200/80 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-neutral-200/70">
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                      Live Storefront Checkout Demo
                    </span>
                    <div className="text-base font-display font-bold text-[#111111] mt-0.5">
                      {activeLang === 'en' ? 'Quick 1-Click Order Form' : 'দ্রুত ১-ক্লিকে অর্ডার ফর্ম'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-neutral-800">
                      ৳ 2,450 BDT
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                      {activeLang === 'en' ? 'In Stock' : 'স্টকে আছে'}
                    </span>
                  </div>
                </div>

                {/* Payment Gateways Bar */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Supported Local &amp; Global Payment Rails
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="bg-white border border-neutral-200/90 rounded-xl p-2.5 flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E2136E]" />
                      <span className="text-xs font-bold text-neutral-800">bKash PGW</span>
                    </div>
                    <div className="bg-white border border-neutral-200/90 rounded-xl p-2.5 flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F7941D]" />
                      <span className="text-xs font-bold text-neutral-800">Nagad Direct</span>
                    </div>
                    <div className="bg-white border border-neutral-200/90 rounded-xl p-2.5 flex items-center gap-2 shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00A651]" />
                      <span className="text-xs font-bold text-neutral-800">COD (Dhaka/Out)</span>
                    </div>
                    <div className="bg-white border border-neutral-200/90 rounded-xl p-2.5 flex items-center gap-2 shadow-xs">
                      <CreditCard className="w-3.5 h-3.5 text-[#111111]" />
                      <span className="text-xs font-bold text-neutral-800">Visa / Master</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Zero-Latency Language Switching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>District-Wise Automated Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E25C38] shrink-0" />
                <span>Multi-Currency Geo-Detection</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Section CTA Banner ─────────────────────────────── */}
        <div className="mt-14 sm:mt-18 bg-[#111111] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E25C38] mb-3">
              <Sparkles className="w-4 h-4" /> Ready to upgrade your commerce stack?
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-3">
              Start building your custom store in 24–48 hours.
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Talk directly with senior software engineers. Get a transparent quote, architecture audit, and rapid delivery timeline.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#111111] hover:bg-neutral-100 font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-sm"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3.5 rounded-full text-sm transition-all duration-200"
            >
              <span>View Case Studies</span>
            </Link>
          </div>

          {/* Ambient burnt ember accent glow */}
          <div 
            className="absolute -right-20 -bottom-20 w-[350px] h-[350px] rounded-full pointer-events-none" 
            style={{ background: 'radial-gradient(circle, rgba(226,92,56,0.18) 0%, transparent 70%)' }}
          />
        </div>

      </div>
    </section>
  );
}
