'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Filter
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'Fashion & Apparel' | 'Fragrance & Beauty' | 'Homeware & Utensils' | 'Personal Brand';
  tags: string[];
  metric: string;
  desc: string;
  image: string;
  url: string;
  speed: string;
}

const allProjects: ProjectItem[] = [
  {
    id: 'glamora',
    title: 'Glamora Luxe Apparel',
    category: 'Fashion & Apparel',
    tags: ['Apparel', 'Steadfast API Sync', 'Sub-1s Mobile Checkout'],
    metric: '+38% Mobile Conversion',
    desc: 'High-speed clothing store with instant size variations, dynamic Inside/Outside Dhaka courier calculator, and one-click COD order confirmation.',
    image: '/glamora-mockup.png',
    url: 'https://glamora-beige.vercel.app',
    speed: '<620ms Load'
  },
  {
    id: 'aura-botanica',
    title: 'Aura Botanica Fragrances',
    category: 'Fragrance & Beauty',
    tags: ['Fragrance & Beauty', 'Meta Pixel CAPI', 'Abandoned Cart SMS'],
    metric: '99.4% Event Match Quality',
    desc: 'Editorial luxury storefront equipped with server-side ad tracking, custom fragrance note discovery, and automated WhatsApp checkout recovery.',
    image: '/jhthub-mockup.jpg',
    url: 'https://jhthub.vercel.app/',
    speed: '<590ms Load'
  },
  {
    id: 'nordic-living',
    title: 'Nordic Living & Utensils',
    category: 'Homeware & Utensils',
    tags: ['Utensils & Decor', 'Pathao & RedX Auto-Dispatch', 'Multi-Language'],
    metric: '100% Automated Courier Booking',
    desc: 'Modern homeware store with automated weight-based courier allocation, video unboxing showcase reels, and dual English/Bangla checkout.',
    image: '/fleshpots-mockup.jpg',
    url: 'https://fleshpots.vercel.app/',
    speed: '<680ms Load'
  },
  {
    id: 'henley-hub',
    title: 'Henley Zone Creator Hub',
    category: 'Personal Brand',
    tags: ['Personal Brand', 'Custom Landing Page', 'Meta Ad Campaign'],
    metric: '3.2x ROAS on Ads',
    desc: 'High-converting lead generation hub engineered for apparel drops and personal brand client acquisition with instant consultation scheduling.',
    image: '/henley-mockup-1-cropped.png',
    url: 'https://henleyzone.com',
    speed: '<540ms Load'
  }
];

const categories = [
  'All',
  'Fashion & Apparel',
  'Fragrance & Beauty',
  'Homeware & Utensils',
  'Personal Brand'
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
      className="py-20 sm:py-28 lg:py-32 bg-white border-t border-neutral-200/80 relative overflow-hidden scroll-mt-20"
      aria-labelledby="works-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* ── Section Header (Musemind Style) ─────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            {/* Small tracked pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/90 shadow-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
              <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#111111]">
                SELECTED WORK
              </span>
            </div>

            {/* Heading */}
            <h2 
              id="works-headline"
              className="text-[#111111] font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-0.03em] leading-[1.08]"
            >
              Crafting High-Converting Storefronts for Distinct Brands
            </h2>

            {/* Subtitle */}
            <p className="text-[#52525B] font-sans font-normal text-base sm:text-lg md:text-[20px] leading-[1.58] mt-4">
              Explore real e-commerce deployments engineered for speed, automated fulfillment, and maximum return on ad spend.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#111111] hover:bg-[#262626] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              <span>Build Similar Store</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>

        {/* ── Category Filter Bar (FleexStudio Style) ─────────────────── */}
        <div className="flex items-center gap-2 pb-2 mb-10 overflow-x-auto no-scrollbar" role="tablist" aria-label="Filter works by niche">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900'
              }`}
            >
              <span>{cat}</span>
              {activeCategory === cat && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
              )}
            </button>
          ))}
        </div>

        {/* ── Project Showcase Cards Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="bg-neutral-50/60 border border-neutral-200/80 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-neutral-300 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Showcase Frame with Hover Zoom */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-neutral-100 mb-6 border border-neutral-200/60">
                  <Image
                    src={project.image}
                    alt={`${project.title} live storefront preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Floating Metric Pill */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#E25C38] bg-white/95 backdrop-blur-md border border-neutral-200/90 px-3 py-1 rounded-full shadow-xs">
                      <TrendingUp className="w-3.5 h-3.5 text-[#E25C38]" />
                      {project.metric}
                    </span>
                  </div>

                  {/* Floating Speed Badge */}
                  <div className="absolute bottom-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-800 bg-white/95 backdrop-blur-md border border-neutral-200/80 px-2.5 py-0.5 rounded-md shadow-xs">
                      <Zap className="w-3 h-3 text-emerald-600" />
                      {project.speed}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-semibold text-neutral-600 bg-white border border-neutral-200/80 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-2.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 group-hover:text-[#111111] transition-colors p-1"
                    aria-label={`Open ${project.title} live in new tab`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </h3>

                {/* Description */}
                <p className="text-[#52525B] text-[14.5px] sm:text-base leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Action Row */}
              <div className="pt-5 border-t border-neutral-200/70 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  {project.category}
                </span>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#E25C38] transition-colors"
                >
                  <span>Inspect Live Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom Case Studies Prompt ─────────────────────────────── */}
        <div className="mt-14 sm:mt-18 text-center bg-[#F8FAFC] border border-neutral-200/80 rounded-3xl p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-3">
            Want to see in-depth architectural breakdown &amp; metrics?
          </h3>
          <p className="text-[#52525B] text-sm sm:text-base max-w-xl mx-auto mb-6">
            Check out complete case studies detailing speed optimization, server-side CAPI event match quality, and courier integration workflows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-[#111111] hover:bg-[#262626] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Explore All Live Case Studies</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 bg-white"
            >
              Request Custom Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
