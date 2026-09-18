'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'SaaS & AI Platforms' | 'Fashion & Apparel' | 'Fragrance & Beauty' | 'Homeware & Utensils';
  categoryLabel: string;
  metrics: string;
  tags: string[];
  desc: string;
  image: string;
  screenshots?: { label: string; src: string }[];
  url: string;
}

const allProjects: ProjectItem[] = [
  {
    id: 'pathly',
    title: 'Pathly — AI Progress Tracker',
    category: 'SaaS & AI Platforms',
    categoryLabel: 'AI Web Platform • Next.js SaaS',
    metrics: 'AI Study Sync • <500ms Edge LCP',
    tags: ['Next.js SaaS', 'AI Progress Engine', 'Habit Tracking', 'Supabase Edge'],
    desc: 'Intelligent AI-powered study and habit tracking web app. Log progress in plain language, track daily streaks, and visualize learning trajectories.',
    image: '/pathly-dashboard.png',
    screenshots: [
      { label: 'Dashboard', src: '/pathly-dashboard.png' },
      { label: 'Weekly Planner', src: '/pathly-planner.png' },
      { label: 'Community', src: '/pathly-community.png' }
    ],
    url: 'https://pathlyai-tracker.netlify.app/'
  },
  {
    id: 'henleyzone',
    title: 'Henley Zone Creator Store',
    category: 'Fashion & Apparel',
    categoryLabel: 'Creator Apparel & Brand Store',
    metrics: 'Apparel Drops • 3.2x ROAS',
    tags: ['Creator Store', 'Custom Landing Page', 'Meta CAPI Tracking', '3.2x ROAS'],
    desc: 'High-converting creator brand hub engineered for limited apparel drops and personal brand client acquisition.',
    image: '/henley-mockup-1-cropped.png',
    url: 'https://henleyzone.com'
  },
  {
    id: 'arambarsaili',
    title: 'আড়ম্বর শৈলী (Arambar Saili)',
    category: 'Fashion & Apparel',
    categoryLabel: 'High-Converting D2C Funnel',
    metrics: 'High ROAS Funnel • Sub-650ms',
    tags: ['Ethnic Fashion', 'D2C Funnel', 'Cash on Delivery', 'Meta CAPI Sync'],
    desc: 'High-converting ethnic fashion funnel with interactive color/size variant switchers and frictionless 1-click COD checkout.',
    image: '/arambarsaili-screenshot.png',
    url: 'https://arambarsaili.vercel.app/'
  },
  {
    id: 'glamora',
    title: 'Glamora Luxe Apparel',
    category: 'Fashion & Apparel',
    categoryLabel: 'Minimalist Brand Campaign',
    metrics: 'Sub-1s Checkout • +38% Conv',
    tags: ['Apparel', 'Steadfast Sync', 'Sub-1s Checkout', '+38% Conversion'],
    desc: 'High-speed clothing landing page with instant size variations, dynamic courier fee calculator, and 1-click mobile order confirmation.',
    image: '/glamora-mockup.png',
    url: 'https://glamora-beige.vercel.app'
  },
  {
    id: 'tiarashop',
    title: 'TIARA (লুক্স আবায়া ও শালীন ফ্যাশন)',
    category: 'Fashion & Apparel',
    categoryLabel: 'Luxury Modest Fashion Storefront',
    metrics: 'Steadfast Sync • <600ms LCP',
    tags: ['Full-Stack Commerce', 'Multi-Variant Selectors', 'Courier API Sync', 'COD Checkout'],
    desc: 'Bespoke modest fashion storefront with real-time color swatches, automated district delivery calculations, and sub-second mobile checkout.',
    image: '/tiara-cover.png',
    url: 'https://tiarashop.vercel.app/'
  },
  {
    id: 'fleshpots',
    title: 'FLESHPOTS Official Storefront',
    category: 'Homeware & Utensils',
    categoryLabel: 'Full-Stack Store • 148K+ Community',
    metrics: '148K+ Community • <680ms LCP',
    tags: ['Next.js Platform', 'Live Cart Drawer', 'Flash Deals', 'Sub-680ms Speed'],
    desc: 'Dynamic e-commerce platform engineered for a 148K+ follower community with instant cart drawer and automated order routing.',
    image: '/fleshpots-screenshot.png',
    url: 'https://fleshpots.vercel.app/'
  },
  {
    id: 'jhthub',
    title: 'JHT HUB (প্রিমিয়াম আতর কম্বো)',
    category: 'Fragrance & Beauty',
    categoryLabel: 'Islamic Lifestyle Commerce',
    metrics: '3-Tier Combo • 1-Click COD',
    tags: ['Islamic Lifestyle', '3-Tier Combo', 'Urgency Ticker', 'Frictionless COD'],
    desc: 'High-impact lifestyle landing page with 3-tier value combo deals, countdown urgency ticker, and instant mobile ordering.',
    image: '/jhthub-screenshot.png',
    url: 'https://jhthub.vercel.app/'
  },
  {
    id: 'ongobilash',
    title: 'অঙ্গবিলাস (Ango Bilash)',
    category: 'Fashion & Apparel',
    categoryLabel: 'Dark Luxury Mode Landing Page',
    metrics: 'VIP Checkout • Emerald Visuals',
    tags: ['Dark Luxury Mode', 'Instant Swatches', 'WhatsApp VIP Order', 'Courier Sync'],
    desc: 'Sleek luxury fashion landing page with instant swatch toggles, automated courier delivery sync, and direct WhatsApp checkout.',
    image: '/ongobilash-screenshot.png',
    url: 'https://ongobilash.vercel.app/'
  }
];

const categories = [
  'All',
  'SaaS & AI Platforms',
  'Fashion & Apparel',
  'Fragrance & Beauty',
  'Homeware & Utensils'
] as const;

type CategoryType = typeof categories[number];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [activeScreenshots, setActiveScreenshots] = useState<Record<string, string>>({
    pathly: '/pathly-dashboard.png'
  });

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section 
      id="work" 
      className="py-12 sm:py-20 bg-[#F8FAFC] border-t border-gray-200/80 relative overflow-hidden scroll-mt-20"
      aria-labelledby="works-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-mono font-bold uppercase text-[#111111] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span>SELECTED CLIENT WORK</span>
            </div>

            <h2 
              id="works-headline"
              className="text-2xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight"
            >
              Crafting High-Yield Stores
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Next.js e-commerce storefronts engineered for speed, automated fulfillment, and maximum ROAS.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-sm self-start sm:self-auto"
          >
            <span>Explore All Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Category Filter Bar ─────────────────────────────────────── */}
        <div className="flex items-center gap-2 pb-2 mb-8 overflow-x-auto no-scrollbar" role="tablist" aria-label="Filter works by niche">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={isSelected}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                    : 'bg-white text-neutral-600 border-gray-200 hover:text-black'
                }`}
              >
                <span>{cat}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Project Showcase 2-Column Responsive Grid ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 items-stretch mb-12">
          {filteredProjects.map((project) => {
            const currentImg = activeScreenshots[project.id] || project.image;

            if (project.id === 'pathly') {
              return (
                <article
                  key={project.id}
                  className="col-span-1 md:col-span-2 bg-[#0E1013] text-white border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[10.5px] font-mono font-bold uppercase text-red-400 mb-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                          <span>FLAGSHIP AI &amp; SAAS PLATFORM</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight">
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            {project.title}
                          </a>
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed font-sans">
                          {project.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono font-medium text-neutral-300 bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#111111] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-md"
                        >
                          <span>Launch Live Platform</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
                        </a>
                        <span className="text-xs font-mono font-medium text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live in Production
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col">
                      <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-neutral-800 mb-2.5 relative shadow-xl">
                        <Image
                          src={currentImg}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                          priority
                        />
                      </div>

                      {project.screenshots && (
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.screenshots.map((s) => (
                            <button
                              key={s.src}
                              type="button"
                              onClick={() => setActiveScreenshots(prev => ({ ...prev, [project.id]: s.src }))}
                              className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                                currentImg === s.src
                                  ? 'bg-white text-[#111111] font-semibold shadow-2xs'
                                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                              }`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            }

            return (
            <article 
              key={project.id}
              className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview Frame */}
                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-2.5 relative">
                  <Image
                    src={currentImg}
                    alt={`${project.title} live preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    priority={project.id === 'pathly' || project.id === 'fleshpots'}
                  />
                </div>

                {/* Screenshot Switcher for multi-screen projects */}
                {project.screenshots && project.screenshots.length > 1 && (
                  <div className="flex items-center gap-1.5 mb-3">
                    {project.screenshots.map((s) => {
                      const isActive = currentImg === s.src;
                      return (
                        <button
                          key={s.src}
                          type="button"
                          onClick={() => setActiveScreenshots(prev => ({ ...prev, [project.id]: s.src }))}
                          className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#111111] text-white font-semibold shadow-2xs'
                              : 'bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200'
                          }`}
                        >
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Meta & Title */}
                <div className="mb-2">
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#DC2626] transition-colors">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                  {project.desc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
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
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] bg-gray-100 hover:bg-gray-200 px-3.5 py-1.5 sm:py-2 rounded-xl transition-colors"
                  aria-label={`Open ${project.title} live storefront`}
                >
                  <span>{project.category === 'SaaS & AI Platforms' ? 'Visit App' : 'Visit Store'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DC2626]" />
                </a>
              </div>
            </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
