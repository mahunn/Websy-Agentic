'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'Fashion & Apparel' | 'Fragrance & Beauty' | 'Homeware & Utensils' | 'Personal Brand';
  categoryLabel: string;
  tags: string[];
  desc: string;
  image: string;
  url: string;
  layout: 'full' | 'half';
  bgGradient?: string;
}

const allProjects: ProjectItem[] = [
  {
    id: 'fleshpots',
    title: 'FLESHPOTS Official Storefront',
    category: 'Homeware & Utensils',
    categoryLabel: 'Full-Stack Store • 148K+ Community',
    tags: ['E-Commerce Platform', '148K+ Community', 'Live Cart Drawer', 'Flash Deals', '<680ms Speed'],
    desc: 'Dynamic e-commerce platform engineered for a 148K+ follower community. Features live multi-category catalogs, limited-time Display Sell deals, instant cart drawer, and automated Messenger order routing.',
    image: '/fleshpots-screenshot.png',
    url: 'https://fleshpots.vercel.app/',
    layout: 'full',
    bgGradient: 'from-[#17191D] via-[#121417] to-[#0D0E10]'
  },
  {
    id: 'tiarashop',
    title: 'TIARA (লুক্স আবায়া ও শালীন ফ্যাশন কালেকশন)',
    category: 'Fashion & Apparel',
    categoryLabel: 'Full-Stack Store • Luxury Modest Fashion',
    tags: ['Full-Stack E-Commerce', 'Bexi Boil Hijabs', 'Multi-Variant Drawer', 'Steadfast Sync', '<580ms Speed'],
    desc: 'High-converting full-stack modest fashion storefront engineered with Next.js for Bangladesh. Features instant multi-variant prayer hijab selectors, automated district delivery calculations, and frictionless Cash on Delivery checkout.',
    image: '/tiara-cover.png',
    url: 'https://tiarashop.vercel.app/',
    layout: 'full',
    bgGradient: 'from-[#1B1115] via-[#140D10] to-[#0D080A]'
  },
  {
    id: 'arambarsaili',
    title: 'আড়ম্বর শৈলী (Arambar Saili)',
    category: 'Fashion & Apparel',
    categoryLabel: 'High-Converting D2C Funnel',
    tags: ['Ethnic Fashion', 'D2C Funnel', 'Cash on Delivery', 'Sub-650ms Speed'],
    desc: 'High-converting ethnic fashion funnel with interactive color/size variant switchers, automated delivery calculation, and frictionless COD checkout.',
    image: '/arambarsaili-screenshot.png',
    url: 'https://arambarsaili.vercel.app/',
    layout: 'half',
    bgGradient: 'from-[#191815] to-[#0E0E0D]'
  },
  {
    id: 'jhthub',
    title: 'JHT HUB (প্রিমিয়াম আতর কম্বো)',
    category: 'Fragrance & Beauty',
    categoryLabel: 'Islamic Lifestyle & Halal E-Commerce',
    tags: ['Islamic Lifestyle', '3-Tier Combo', 'Urgency Timer', 'Frictionless COD'],
    desc: 'High-impact Islamic lifestyle landing page with 3-tier value combo deals, countdown urgency ticker, scent profile breakdown, and instant COD ordering.',
    image: '/jhthub-screenshot.png',
    url: 'https://jhthub.vercel.app/',
    layout: 'half',
    bgGradient: 'from-[#141A16] to-[#0C100D]'
  },
  {
    id: 'ongobilash',
    title: 'অঙ্গবিলাস (Ango Bilash)',
    category: 'Fashion & Apparel',
    categoryLabel: 'Dark Luxury Mode Landing Page',
    tags: ['Dark Luxury Mode', 'Emerald Aesthetics', 'Instant Swatch', 'WhatsApp Order'],
    desc: 'Sleek dark-emerald luxury fashion landing page with instant swatch toggle, automated courier delivery sync, and direct WhatsApp VIP order flow.',
    image: '/ongobilash-screenshot.png',
    url: 'https://ongobilash.vercel.app/',
    layout: 'full',
    bgGradient: 'from-[#101815] via-[#0E1411] to-[#0A0D0C]'
  }
];

const categories = [
  'All',
  'Fashion & Apparel',
  'Fragrance & Beauty',
  'Homeware & Utensils'
] as const;

type CategoryType = typeof categories[number];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section 
      id="work" 
      className="py-20 sm:py-28 lg:py-32 bg-[#0C0D0E] text-white border-t border-white/[0.08] relative overflow-hidden scroll-mt-20"
      aria-labelledby="works-headline"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(226,92,56,0.06) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* ── Section Header (Musemind Style) ─────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Small tracked pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 shadow-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
              <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-neutral-300">
                SELECTED WORK
              </span>
            </div>

            {/* Heading */}
            <h2 
              id="works-headline"
              className="text-white font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[-0.03em] leading-[1.06]"
            >
              Crafting High-Converting Storefronts for Distinct Brands
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-400 font-sans font-normal text-base sm:text-lg md:text-[20px] leading-[1.58] mt-4">
              Explore real e-commerce deployments engineered for speed, automated fulfillment, and maximum return on ad spend.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-200 text-[#0C0D0E] text-xs font-bold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>

        {/* ── Category Filter Bar ─────────────────────────────────────── */}
        <div className="flex items-center gap-2 pb-2 mb-12 overflow-x-auto no-scrollbar" role="tablist" aria-label="Filter works by niche">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-[#0C0D0E] shadow-sm'
                  : 'bg-white/[0.06] text-neutral-400 hover:bg-white/[0.12] hover:text-white border border-white/[0.06]'
              }`}
            >
              <span>{cat}</span>
              {activeCategory === cat && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
              )}
            </button>
          ))}
        </div>

        {/* ── Project Showcase Asymmetric Grid (Musemind Layout) ──────── */}
        <div className="flex flex-col gap-14 sm:gap-18">
          {filteredProjects.map((project) => {
            const isFull = project.layout === 'full';

            return (
              <article 
                key={project.id}
                className="group flex flex-col"
              >
                {/* Visual Canvas Card */}
                <div 
                  className={`w-full rounded-3xl overflow-hidden border border-white/[0.08] p-4 sm:p-7 md:p-10 transition-all duration-500 group-hover:border-white/20 bg-gradient-to-b ${project.bgGradient || 'from-[#141619] to-[#0E1012]'} relative`}
                >
                  <div className={`relative w-full ${isFull ? 'aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10]' : 'aspect-[16/11] sm:aspect-[4/3]'} rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/[0.06]`}>
                    <Image
                      src={project.image}
                      alt={`${project.title} live preview`}
                      fill
                      sizes={isFull ? "(max-width: 1280px) 100vw, 1280px" : "(max-width: 768px) 100vw, 640px"}
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      priority={project.id === 'fleshpots'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Meta Information Below Card */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E25C38] block mb-2">
                      {project.categoryLabel}
                    </span>

                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#E25C38] transition-colors">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          {project.title}
                        </a>
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-neutral-400 hover:text-white transition-colors p-1 shrink-0"
                        aria-label={`Open ${project.title} in new tab`}
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mt-2.5">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-[11.5px] font-medium text-neutral-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white text-neutral-200 hover:text-[#0C0D0E] text-xs font-bold py-3 px-5 rounded-full transition-all duration-200 border border-white/10"
                    >
                      <span>Inspect Live Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Bottom Case Studies Prompt ─────────────────────────────── */}
        <div className="mt-16 sm:mt-24 text-center bg-gradient-to-b from-[#141619] to-[#0E1012] border border-white/[0.08] rounded-3xl p-8 sm:p-14">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-3">
            Want to see all 7 live case studies &amp; architectures?
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Check out complete case studies detailing speed optimization, server-side CAPI event tracking, and automated courier integration workflows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-200 text-[#0C0D0E] text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 bg-white/[0.05]"
            >
              Request Custom Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
