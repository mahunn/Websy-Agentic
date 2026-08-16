"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiVercel
} from "react-icons/si";
import {
  FiExternalLink,
  FiZap,
  FiCheckCircle,
  FiShoppingBag,
  FiLayers,
  FiTrendingUp,
  FiClock,
  FiShield,
  FiArrowRight,
  FiSmartphone
} from "react-icons/fi";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

type ProjectCategory = 'all' | 'landing' | 'fullstack';

interface Project {
  id: string;
  category: 'landing' | 'fullstack';
  title: string;
  categoryLabel: string;
  categoryBadgeColor: string;
  niche: string;
  url: string;
  displayUrl: string;
  image: string;
  hoverImage?: string;
  desc: string;
  metrics: string[];
  features: string[];
  stack: { name: string; icon: React.ComponentType<{ className?: string }>; color: string }[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "fleshpots",
    category: "fullstack",
    title: "FLESHPOTS Official Storefront",
    categoryLabel: "Full-Stack Store • 148K+ Community",
    categoryBadgeColor: "text-rose-600 bg-rose-50 border-rose-200",
    niche: "Aesthetic Living & Modern Kitchenware",
    url: "https://fleshpots.vercel.app/",
    displayUrl: "fleshpots.vercel.app",
    image: "/fleshpots-mockup.jpg",
    desc: "A full-scale, dynamic e-commerce web platform engineered for a 148K+ follower community. Features live multi-category catalogs, limited-time 'Display Sell Deals' countdown timers, instant cart drawer, video unboxing showcase reels, and automated Facebook Messenger order routing.",
    metrics: [
      "🌸 148K+ Follower Social Proof",
      "⚡ Sub-1s Dynamic Storefront",
      "🛒 Live Cart Drawer & Wishlist",
      "🔥 Flash Deal Urgency Timer"
    ],
    features: [
      "Display Sell flash sale section with real-time countdown timer",
      "Multi-category product collection filter (Kitchen, Gadgets, Living, Personal)",
      "Direct 1-click 'Order on FB Messenger' dynamic deep-linking",
      "Mobile-optimized customer unboxing review feed & trust grid"
    ],
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Vercel", icon: SiVercel, color: "text-black" }
    ],
    featured: true
  },
  {
    id: "arambarsaili",
    category: "landing",
    title: "আড়ম্বর শৈলী (Arambar Saili)",
    categoryLabel: "High-Converting D2C Landing Page",
    categoryBadgeColor: "text-amber-800 bg-amber-50 border-amber-200",
    niche: "Ethnic Fashion & Premium Gowns",
    url: "https://arambarsaili.vercel.app/",
    displayUrl: "arambarsaili.vercel.app",
    image: "/arambarsaili-mockup.jpg",
    desc: "An ultra-fast, high-converting product sales funnel crafted for ethnic fashion ad campaigns. Includes interactive color & size variant selector, real-time dynamic total calculations with Inside/Outside Dhaka delivery zones, frictionless 1-click Cash on Delivery form, and WhatsApp order flow.",
    metrics: [
      "⚡ <700ms Load Speed",
      "👗 Multi-Variant Color/Size Picker",
      "💵 Instant Cash on Delivery Form",
      "📲 WhatsApp Direct Order"
    ],
    features: [
      "Interactive color swatch & size chip selector (M, L, XL, XXL)",
      "Automated live delivery fee calculator (Inside vs Outside Dhaka)",
      "Bilingual Bengali/English conversion-tuned typography",
      "Verified customer review testimonials & interactive FAQ accordion"
    ],
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Vercel", icon: SiVercel, color: "text-black" }
    ],
    featured: true
  },
  {
    id: "jhthub",
    category: "landing",
    title: "JHT HUB (প্রিমিয়াম আতর কম্বো)",
    categoryLabel: "Islamic Lifestyle & Halal E-Commerce",
    categoryBadgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
    niche: "Halal Fragrances & Attar Combos",
    url: "https://jhthub.vercel.app/",
    displayUrl: "jhthub.vercel.app",
    image: "/jhthub-mockup.jpg",
    desc: "A purpose-built Islamic lifestyle e-commerce landing page optimized for high-volume Meta ad conversion. Highlights a 3-tier combo package selector (Best Deal 10-piece, Trial 5-piece, Mega 20-piece), live urgency countdown ticker, interactive fragrance scent breakdown, and authentic Islamic trust seals.",
    metrics: [
      "🎁 3-Tier Bundle Value Selector",
      "⏱ Urgency Countdown Ticker",
      "🌿 Scent Notes Breakdown (Arabian & Perfume)",
      "🛡️ 100% Halal Certified Trust Badging"
    ],
    features: [
      "Multi-tier bundle upsell selector with discount comparison",
      "Scent profile guide comparing Arabian vs Modern Perfume notes",
      "No advance payment Cash on Delivery checkout form with validation",
      "Sticky bottom bar on mobile for instant frictionless conversion"
    ],
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Vercel", icon: SiVercel, color: "text-black" }
    ],
    featured: true
  },
  {
    id: "ongobilash",
    category: "landing",
    title: "অঙ্গবিলাস (Ango Bilash)",
    categoryLabel: "Dark Luxury Mode Landing Page",
    categoryBadgeColor: "text-emerald-400 bg-emerald-950/80 border-emerald-800",
    niche: "Dark Aesthetic Luxury Apparel",
    url: "https://ongobilash.vercel.app/",
    displayUrl: "ongobilash.vercel.app",
    image: "/ongobilash-mockup.jpg",
    desc: "A sleek, dark emerald-themed landing page designed to capture high-intent luxury buyers. Features rich visual depth, interactive color variants with image previews, live order summary cart calculation, and streamlined one-page Cash on Delivery checkout.",
    metrics: [
      "🌙 Dark Emerald Luxury Theme",
      "🎯 High-ROAS Meta & TikTok Funnel",
      "🚚 Dynamic Delivery Charge Sync",
      "📱 Mobile Bottom Sticky CTA"
    ],
    features: [
      "High-contrast dark mode aesthetic tailored for premium luxury dresses",
      "Instant color selection with high-res product swatch toggle",
      "Automated delivery calculation with zero advance deposit required",
      "Direct phone call and WhatsApp quick order triggers"
    ],
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Vercel", icon: SiVercel, color: "text-black" }
    ]
  },
  {
    id: "henleyzone",
    category: "fullstack",
    title: "Henley Zone Store",
    categoryLabel: "Full E-Commerce Platform",
    categoryBadgeColor: "text-pink-accent bg-rose-50 border-rose-100",
    niche: "Premium Apparel & Fashion Storefront",
    url: "https://henleyzone.com",
    displayUrl: "henleyzone.com",
    image: "/henley-mockup-1-cropped.png",
    hoverImage: "/henley-mockup2.png",
    desc: "A full-featured modern online store for a premium fashion brand. Built for maximum speed, mobile-first product discovery, category exploration, dynamic cart drawer, and frictionless checkout.",
    metrics: [
      "⚡ Sub-1s Cart Transition",
      "📱 98 Mobile PageSpeed",
      "👕 Multi-Collection Catalog",
      "🔒 Secure Instant Checkout"
    ],
    features: [
      "Custom product catalog with high-resolution image zoom & galleries",
      "Smooth cart drawer state with instant order totals",
      "Custom brand typography and modern layout system",
      "Optimized Core Web Vitals for top search engine visibility"
    ],
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" }
    ]
  },
  {
    id: "glamora",
    category: "landing",
    title: "Glamora Beige",
    categoryLabel: "Minimalist Brand Campaign",
    categoryBadgeColor: "text-amber-700 bg-amber-50 border-amber-100",
    niche: "Minimalist Luxury & Cosmetics",
    url: "https://glamora-beige.vercel.app",
    displayUrl: "glamora-beige.vercel.app",
    image: "/glamora-mockup.png",
    hoverImage: "/glamora-mockup2.png",
    desc: "A minimalist, high-converting landing page for a luxury lifestyle brand. Built specifically to maximize Meta & TikTok ad campaign conversion with editorial whitespace and clean typography.",
    metrics: [
      "⚡ <750ms Initial Load",
      "🎯 High Conversion UX",
      "✨ Editorial Minimalist Design",
      "📱 Ultra-Responsive Fluid Layout"
    ],
    features: [
      "Editorial aesthetics that build brand authority and trust immediately",
      "Lightweight assets engineered for near-instant mobile load times",
      "Frictionless conversion points optimized for paid ad traffic",
      "Meta Pixel & Google Analytics integration for accurate tracking"
    ],
    stack: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" }
    ]
  },
  {
    id: "mahin",
    category: "fullstack",
    title: "Mahin Ahmad Platform",
    categoryLabel: "Portfolio & Web App",
    categoryBadgeColor: "text-blue-700 bg-blue-50 border-blue-100",
    niche: "Digital Portfolio & Systems",
    url: "https://mahinahmad.netlify.app",
    displayUrl: "mahinahmad.com",
    image: "/mahin-mockup.png",
    hoverImage: "/mahin-mockup2.png",
    desc: "A clean personal portfolio and developer platform built to showcase technical projects with editorial precision, zero layout shift, and interactive depth.",
    metrics: [
      "⚡ 100% Core Web Vitals",
      "🔒 Zero Layout Shift",
      "💻 Developer Platform",
      "🚀 Modern Micro-Animations"
    ],
    features: [
      "Bespoke interactive project explorer with fluid transitions",
      "Ultra-strict TypeScript architecture with rock-solid type safety",
      "Custom responsive design system tailored for desktop and mobile",
      "SEO and social graph optimization for high digital presence"
    ],
    stack: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" }
    ]
  }
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const counts = {
    all: projects.length,
    landing: projects.filter(p => p.category === 'landing').length,
    fullstack: projects.filter(p => p.category === 'fullstack').length
  };

  return (
    <main id="main-content" className="bg-white pt-[72px] sm:pt-[84px] md:pt-[96px] pb-16 md:pb-24">
      {/* ── Page Header ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16" aria-labelledby="work-headline">
        <header className="text-center max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-accent bg-rose-50 border border-rose-100 rounded-full px-4 py-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-accent animate-pulse" />
              Live Portfolio • Proven Track Record
            </span>
          </div>
          <h1
            id="work-headline"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Diversified Experience.<br />
            <span className="bg-gradient-to-r from-pink-accent via-rose-500 to-amber-600 bg-clip-text text-transparent">
              Real Live Results.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            From high-conversion <span className="font-semibold text-gray-900">৳3.5k campaign landing pages</span> across fashion, Islamic lifestyle, and viral gadgets to <span className="font-semibold text-gray-900">148K+ community e-commerce platforms</span>. Every project below is live and engineered for maximum conversion.
          </p>

          {/* ── Category Filter Tabs ─────────────────────────────────── */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 p-1.5 bg-gray-100/80 border border-gray-200/80 rounded-2xl max-w-xl mx-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200/60'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <span>All Projects</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${selectedCategory === 'all' ? 'bg-pink-accent text-white' : 'bg-gray-200/80 text-gray-700'}`}>
                {counts.all}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('landing')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'landing'
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200/60'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <span>Landing Pages</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${selectedCategory === 'landing' ? 'bg-pink-accent text-white' : 'bg-gray-200/80 text-gray-700'}`}>
                {counts.landing}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('fullstack')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'fullstack'
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200/60'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <span>Full-Stack &amp; Stores</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${selectedCategory === 'fullstack' ? 'bg-pink-accent text-white' : 'bg-gray-200/80 text-gray-700'}`}>
                {counts.fullstack}
              </span>
            </button>
          </div>
        </header>
      </section>

      {/* ── Portfolio Grid ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white border border-gray-200/90 rounded-3xl overflow-hidden hover:border-pink-accent/40 hover:shadow-2xl hover:shadow-pink-accent/5 hover:-translate-y-1.5 transition-all duration-300 flex-grow"
              aria-label={`${project.title} — ${project.niche}`}
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} live preview`}
                  fill
                  className={`object-cover object-top transition-all duration-500 ${
                    project.hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  priority={project.featured}
                />
                {project.hoverImage && (
                  <Image
                    src={project.hoverImage}
                    alt={`${project.title} secondary preview`}
                    fill
                    className="object-cover object-top transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                )}

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-xs backdrop-blur-md ${project.categoryBadgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <span className="text-[10px] font-bold text-gray-700 bg-white/90 backdrop-blur-md border border-gray-200/70 rounded-full px-2.5 py-0.5 shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow bg-[#FAFAF9] justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      {project.niche}
                    </span>
                    <h2 
                      className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-0.5"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Metrics Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="text-[10.5px] font-bold text-gray-700 bg-white border border-gray-200/90 rounded-lg px-2.5 py-1 shadow-2xs"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Key Features Bullets */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-200/60">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                      Conversion Architecture:
                    </p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5 text-[11.5px] text-gray-600 leading-snug">
                          <FiCheckCircle className="text-pink-accent w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer / Stack & CTA */}
                <div className="pt-4 border-t border-gray-200/60 flex flex-col gap-3 mt-auto">
                  {/* Tech Stack */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] tracking-widest text-gray-400 uppercase font-bold">TECH STACK:</span>
                    <div className="flex items-center gap-2">
                      {project.stack.map((item, sIdx) => {
                        const Icon = item.icon;
                        return (
                          <span key={sIdx} title={item.name} className="transition-transform duration-200 hover:-translate-y-0.5">
                            <Icon className={`w-4 h-4 ${item.color}`} />
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Direct Link Action */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0B1220] hover:bg-gray-800 text-white text-xs font-bold py-3 px-5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md group/btn w-full"
                  >
                    <span>View Live Site ({project.displayUrl})</span>
                    <FiExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Vast Experience & Niche Matrix ─────────────────────────── */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-200 py-16 md:py-24" aria-labelledby="experience-headline">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <div className="mb-3">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-pink-accent bg-rose-50 border border-rose-100 rounded-full px-4 py-1.5">
                Vast Domain Expertise
              </span>
            </div>
            <h2
              id="experience-headline"
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Tailored Landing Pages For Every Niche
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
              We don&apos;t use generic templates. Every landing page is custom-architected around the specific buying psychology and fulfillment requirements of your business category.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Niche 1: Ethnic & Fashion Drops */}
            <div className="group flex flex-col p-7 bg-white border border-gray-200/90 rounded-3xl hover:border-pink-accent/30 hover:shadow-xl hover:shadow-pink-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-5 font-bold text-lg">
                👗
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ethnic &amp; Gown Fashion</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                Multi-color variant switchers, size charts (M to XXL), high-res fabric zoom, and instant bilingual Cash on Delivery checkouts.
              </p>
              <div className="pt-3 border-t border-gray-100 text-[11px] font-bold text-pink-accent flex items-center gap-1">
                <span>See: Arambar Saili &amp; Ango Bilash</span>
              </div>
            </div>

            {/* Niche 2: Islamic & Halal Lifestyle */}
            <div className="group flex flex-col p-7 bg-white border border-gray-200/90 rounded-3xl hover:border-pink-accent/30 hover:shadow-xl hover:shadow-pink-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-5 font-bold text-lg">
                🌿
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Islamic &amp; Halal Products</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                Value combo bundle selectors, scent profile breakdowns, Islamic trust citations, and urgency countdown deals.
              </p>
              <div className="pt-3 border-t border-gray-100 text-[11px] font-bold text-pink-accent flex items-center gap-1">
                <span>See: JHT HUB (Attar Combo)</span>
              </div>
            </div>

            {/* Niche 3: Aesthetic Kitchen & Lifestyle */}
            <div className="group flex flex-col p-7 bg-white border border-gray-200/90 rounded-3xl hover:border-pink-accent/30 hover:shadow-xl hover:shadow-pink-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-5 font-bold text-lg">
                🌸
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Living &amp; Gadgets</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                148K+ community storefronts, Display Sell flash deals, video unboxing reels, cart drawer, and direct FB Messenger ordering.
              </p>
              <div className="pt-3 border-t border-gray-100 text-[11px] font-bold text-pink-accent flex items-center gap-1">
                <span>See: FLESHPOTS Storefront</span>
              </div>
            </div>

            {/* Niche 4: Meta & TikTok Ad Campaign Funnels */}
            <div className="group flex flex-col p-7 bg-white border border-gray-200/90 rounded-3xl hover:border-pink-accent/30 hover:shadow-xl hover:shadow-pink-accent/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 font-bold text-lg">
                🎯
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">High-ROAS Ad Funnels</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                Sub-800ms load times, verified Meta Pixel &amp; TikTok Pixel tracking, 1-Click order confirmation, and zero cart abandonment.
              </p>
              <div className="pt-3 border-t border-gray-100 text-[11px] font-bold text-pink-accent flex items-center gap-1">
                <span>See: Glamora Beige &amp; All Funnels</span>
              </div>
            </div>

          </div>

          {/* Bottom CTA Card */}
          <div className="mt-16 p-8 md:p-12 bg-[#0B1220] rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-widest text-pink-accent uppercase block mb-2">
                Launch With Websy
              </span>
              <h3 
                className="text-2xl md:text-4xl font-bold tracking-tight mb-3"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Ready to launch your high-converting landing page or storefront?
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed">
                Launch a ৳3,499 campaign landing page in 24–48 hours or build a full custom store. We handle design, copywriting, coding, and pixel setup.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-pink-accent hover:bg-rose-600 text-white text-xs sm:text-sm font-extrabold py-3.5 px-7 rounded-2xl transition-all duration-200 shadow-md shadow-pink-accent/20 w-full sm:w-auto text-center"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/8801828034555?text=Hello%20Websy!%20I%20saw%20your%20live%20portfolio%20and%20want%20to%20build%20a%20landing%20page/store."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-2xl transition-all duration-200 w-full sm:w-auto text-center"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
