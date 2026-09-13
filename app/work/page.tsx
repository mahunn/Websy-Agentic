"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

type ProjectCategory = 'all' | 'landing' | 'fullstack';

interface CaseStudy {
  id: string;
  title: string;
  category: 'landing' | 'fullstack';
  categoryLabel: string;
  desc: string;
  image: string;
  url: string;
  tags: string[];
  metrics: string;
  featured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "fleshpots",
    title: "FLESHPOTS Official Storefront",
    category: "fullstack",
    categoryLabel: "Full-Stack Store • 148K+ Community",
    desc: "Engineered for 148K+ community. Features live multi-category catalogs, instant slide-out cart drawer, and automated order routing.",
    image: "/fleshpots-screenshot.png",
    url: "https://fleshpots.vercel.app/",
    tags: ["Full-Stack Store", "Live Cart Drawer", "Flash Deals", "Sub-680ms Speed"],
    metrics: "148K+ Community • <680ms LCP",
    featured: true
  },
  {
    id: "tiara",
    title: "TIARA (প্রিমিয়াম ফ্যাশন স্টোর)",
    category: "fullstack",
    categoryLabel: "Luxury Modest Fashion Storefront",
    desc: "Bespoke fashion storefront with real-time color swatches, district-wise courier fee calculator, and frictionless COD checkout.",
    image: "/tiara-cover.png",
    url: "https://tiarashop.vercel.app/",
    tags: ["Modest Fashion", "Multi-Variant Checkout", "Courier API Sync", "Sub-600ms Speed"],
    metrics: "Automated Courier • <600ms LCP",
    featured: true
  },
  {
    id: "arambarsaili",
    title: "আড়ম্বর শৈলী (Arambar Saili)",
    category: "landing",
    categoryLabel: "High-Converting D2C Funnel",
    desc: "High-converting ethnic fashion funnel with interactive size/color switches, Dhaka delivery calculation, and 1-click COD checkout.",
    image: "/arambarsaili-screenshot.png",
    url: "https://arambarsaili.vercel.app/",
    tags: ["Ethnic Fashion", "D2C Funnel", "Cash on Delivery", "Sub-650ms Speed"],
    metrics: "Single-Product Funnel • High ROAS"
  },
  {
    id: "jhthub",
    title: "JHT HUB (প্রিমিয়াম আতর কম্বো)",
    category: "landing",
    categoryLabel: "Islamic Lifestyle Commerce",
    desc: "High-impact lifestyle landing page with 3-tier combo deals, countdown urgency ticker, scent breakdown, and instant ordering.",
    image: "/jhthub-screenshot.png",
    url: "https://jhthub.vercel.app/",
    tags: ["Islamic Lifestyle", "3-Tier Combo", "Urgency Timer", "Frictionless COD"],
    metrics: "3-Tier Combo • 1-Click Order"
  },
  {
    id: "ongobilash",
    title: "অঙ্গবিলাস (Ango Bilash)",
    category: "landing",
    categoryLabel: "Dark Luxury Mode Landing Page",
    desc: "Sleek dark luxury fashion landing page with instant swatch toggle, automated courier delivery sync, and direct WhatsApp VIP checkout.",
    image: "/ongobilash-screenshot.png",
    url: "https://ongobilash.vercel.app/",
    tags: ["Dark Luxury Mode", "Emerald Visuals", "Instant Swatch", "WhatsApp Order"],
    metrics: "VIP Checkout • Steadfast Sync"
  },
  {
    id: "henleyzone",
    title: "Henley Zone Creator Store",
    category: "fullstack",
    categoryLabel: "Creator Apparel & Brand Store",
    desc: "High-converting creator brand hub engineered for limited apparel drops and personal brand client acquisition with instant consultation scheduling.",
    image: "/henley-mockup-1-cropped.png",
    url: "https://henleyzone.com",
    tags: ["Creator Store", "Custom Landing Page", "Meta CAPI Tracking", "3.2x ROAS"],
    metrics: "Apparel Drops • 3.2x ROAS"
  },
  {
    id: "glamora",
    title: "Glamora Luxe Apparel",
    category: "landing",
    categoryLabel: "Minimalist Brand Campaign",
    desc: "High-speed clothing landing page with instant size variations, dynamic courier fee calculator, and 1-click mobile order confirmation.",
    image: "/glamora-mockup.png",
    url: "https://glamora-beige.vercel.app",
    tags: ["Apparel", "Steadfast Sync", "Sub-1s Checkout", "+38% Conversion"],
    metrics: "Sub-1s Checkout • +38% Conv"
  }
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredStudies = caseStudies.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const counts = {
    all: caseStudies.length,
    landing: caseStudies.filter(c => c.category === 'landing').length,
    fullstack: caseStudies.filter(c => c.category === 'fullstack').length
  };

  return (
    <main 
      id="main-content" 
      className="bg-[#F8FAFC] text-gray-900 min-h-screen pt-[76px] sm:pt-[92px] md:pt-[104px] pb-16 sm:pb-24 relative overflow-hidden selection:bg-red-500/20 selection:text-red-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Minimal Editorial Header (Mobile First) ─────────────────── */}
        <section className="text-center max-w-2xl mx-auto mb-8 sm:mb-12" aria-labelledby="case-studies-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-2xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111]">
              SELECTED CLIENT WORK
            </span>
          </div>

          <h1 
            id="case-studies-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight leading-[1.12] mb-3"
          >
            Crafting High-Yield Stores for{' '}
            <span className="text-[#DC2626]">
              Ambitious Brands.
            </span>
          </h1>

          <p className="text-xs sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
            Live Next.js storefronts and high-ROAS campaign funnels engineered with sub-800ms speeds and automated courier sync.
          </p>

          {/* ── Category Filter Pills ────────────────────────────────── */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6" role="tablist" aria-label="Filter projects">
            <button
              onClick={() => setSelectedCategory('all')}
              role="tab"
              aria-selected={selectedCategory === 'all'}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                selectedCategory === 'all'
                  ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                  : 'bg-white text-neutral-600 border-gray-200 hover:text-black'
              }`}
            >
              <span>All Projects</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                {counts.all}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('landing')}
              role="tab"
              aria-selected={selectedCategory === 'landing'}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                selectedCategory === 'landing'
                  ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                  : 'bg-white text-neutral-600 border-gray-200 hover:text-black'
              }`}
            >
              <span>Campaign Landing Pages</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                selectedCategory === 'landing' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                {counts.landing}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('fullstack')}
              role="tab"
              aria-selected={selectedCategory === 'fullstack'}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                selectedCategory === 'fullstack'
                  ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                  : 'bg-white text-neutral-600 border-gray-200 hover:text-black'
              }`}
            >
              <span>Full-Stack Stores</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                selectedCategory === 'fullstack' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                {counts.fullstack}
              </span>
            </button>
          </div>
        </section>

        {/* ── Case Studies Grid (Clean Editorial Cards) ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-14 sm:mb-18 items-stretch">
          {filteredStudies.map((study) => (
            <article 
              key={study.id}
              className="bg-white border border-gray-200/90 hover:border-gray-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview Frame */}
                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-4 relative">
                  <Image
                    src={study.image}
                    alt={`${study.title} live preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority={study.id === 'fleshpots'}
                  />
                </div>

                {/* Metadata & Title */}
                <div className="mb-2">
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    {study.categoryLabel}
                  </span>
                  <h2 className="text-lg sm:text-xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#DC2626] transition-colors">
                    <a href={study.url} target="_blank" rel="noopener noreferrer">
                      {study.title}
                    </a>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                  {study.desc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono font-medium text-neutral-600 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                <span className="text-xs font-mono font-medium text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live in Production
                </span>

                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] bg-gray-100 hover:bg-gray-200 px-3.5 py-1.5 sm:py-2 rounded-xl transition-colors"
                  aria-label={`Visit live storefront for ${study.title}`}
                >
                  <span>Visit Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Minimalist Direct Consultation Card (Mobile First) ─────── */}
        <section className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-emerald-500/40 shrink-0">
                <Image
                  src="/mahin-suit.jpg"
                  alt="Mahin Ahmad — Lead Architect"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#111111] leading-tight font-display">Mahin Ahmad</h3>
                <p className="text-xs text-emerald-600 font-semibold">Founder &amp; Lead Architect</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#111111] tracking-tight mb-1.5">
              Have a store or campaign in mind?
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              Connect directly with lead architect Mahin Ahmad to review timeline estimates and conversion architecture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/8801828034555?text=Hi%20Mahin!%20I'd%20like%20to%20discuss%20a%20project%20after%20reviewing%20your%20case%20studies."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-full transition-all shadow-sm whitespace-nowrap"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-full transition-all shadow-sm whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </section>

      </div>
    </main>
  );
}
