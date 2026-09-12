"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Send
} from 'lucide-react';
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
  layout: 'full' | 'half';
  bgGradient?: string;
  deviceType?: 'browser' | 'mobile' | 'canvas';
}

const caseStudies: CaseStudy[] = [
  {
    id: "fleshpots",
    title: "FLESHPOTS Official Storefront",
    category: "fullstack",
    categoryLabel: "Full-Stack Store • 148K+ Community",
    desc: "A full-scale, dynamic e-commerce platform engineered for a 148K+ follower community. Features live multi-category catalogs, limited-time Display Sell countdown deals, instant cart drawer, and automated Messenger order routing.",
    image: "/fleshpots-screenshot.png",
    url: "https://fleshpots.vercel.app/",
    tags: ["Full-Stack Store", "148K+ Community", "Live Cart Drawer", "Flash Deals", "Sub-680ms Speed"],
    layout: "full",
    bgGradient: "from-[#17191D] via-[#121417] to-[#0D0E10]",
    deviceType: "browser"
  },
  {
    id: "arambarsaili",
    title: "আড়ম্বর শৈলী (Arambar Saili)",
    category: "landing",
    categoryLabel: "High-Converting D2C Landing Page",
    desc: "High-converting ethnic fashion funnel with interactive color/size variant switchers, automated Inside/Outside Dhaka delivery calculation, and frictionless COD checkout.",
    image: "/arambarsaili-screenshot.png",
    url: "https://arambarsaili.vercel.app/",
    tags: ["Ethnic Fashion", "D2C Funnel", "Cash on Delivery", "Sub-650ms Speed"],
    layout: "half",
    bgGradient: "from-[#191815] to-[#0E0E0D]"
  },
  {
    id: "jhthub",
    title: "JHT HUB (প্রিমিয়াম আতর কম্বো)",
    category: "landing",
    categoryLabel: "Islamic Lifestyle & Halal E-Commerce",
    desc: "High-impact Islamic lifestyle landing page with 3-tier value combo deals, countdown urgency ticker, scent profile breakdown, and 1-click mobile order placement.",
    image: "/jhthub-screenshot.png",
    url: "https://jhthub.vercel.app/",
    tags: ["Islamic Lifestyle", "3-Tier Combo", "Urgency Timer", "Frictionless COD"],
    layout: "half",
    bgGradient: "from-[#141A16] to-[#0C100D]"
  },
  {
    id: "ongobilash",
    title: "অঙ্গবিলাস (Ango Bilash)",
    category: "landing",
    categoryLabel: "Dark Luxury Mode Landing Page",
    desc: "Sleek dark-emerald luxury fashion landing page with instant swatch toggle, automated courier delivery sync, and direct WhatsApp VIP order flow.",
    image: "/ongobilash-screenshot.png",
    url: "https://ongobilash.vercel.app/",
    tags: ["Dark Luxury Mode", "Emerald Aesthetics", "Instant Swatch", "WhatsApp Order", "Courier Sync"],
    layout: "full",
    bgGradient: "from-[#101815] via-[#0E1411] to-[#0A0D0C]",
    deviceType: "browser"
  },
  {
    id: "henleyzone",
    title: "Henley Zone Creator Store",
    category: "fullstack",
    categoryLabel: "Full E-Commerce Platform",
    desc: "High-converting creator brand hub engineered for apparel drops and personal brand client acquisition with instant consultation scheduling.",
    image: "/henley-mockup-1-cropped.png",
    url: "https://henleyzone.com",
    tags: ["Creator Store", "Custom Landing Page", "Meta Ads Tracking", "3.2x ROAS"],
    layout: "half",
    bgGradient: "from-[#15171C] to-[#0E0F12]"
  },
  {
    id: "glamora",
    title: "Glamora Luxe Apparel",
    category: "landing",
    categoryLabel: "Minimalist Brand Campaign",
    desc: "High-speed clothing store with instant size variations, dynamic Inside/Outside Dhaka courier calculator, and one-click COD order confirmation.",
    image: "/glamora-mockup.png",
    url: "https://glamora-beige.vercel.app",
    tags: ["Apparel", "Steadfast API Sync", "Sub-1s Mobile Checkout", "+38% Conversion"],
    layout: "half",
    bgGradient: "from-[#1A1816] to-[#0F0E0D]"
  },
  {
    id: "mahin",
    title: "Mahin Ahmad Architecture Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack Architecture & Systems",
    desc: "Custom developer platform showcasing full-stack Next.js commerce architectures, courier webhook pipelines, and sub-second performance benchmarks.",
    image: "/mahin-mockup.png",
    url: "https://mahinahmad.netlify.app",
    tags: ["Next.js Platform", "API Webhooks", "System Architecture", "Zero Vendor Lock-in"],
    layout: "full",
    bgGradient: "from-[#16181D] via-[#111317] to-[#0C0D10]",
    deviceType: "browser"
  }
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  // Inquiry Form State (Matching Image 2)
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Campaign Landing Page');
  const [projectBudget, setProjectBudget] = useState('Budget-Friendly / Starter');
  const [projectDetails, setProjectDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredStudies = caseStudies.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const counts = {
    all: caseStudies.length,
    landing: caseStudies.filter(c => c.category === 'landing').length,
    fullstack: caseStudies.filter(c => c.category === 'fullstack').length
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message = `Hello Mahin! I'd like to submit an inquiry from Websy Case Study page:
- Name: ${fullName}
- Brand / Company: ${companyName || 'Not specified'}
- Email: ${email}
- Service: ${serviceRequired}
- Budget Tier: ${projectBudget}
- Details: ${projectDetails || 'None provided'}`;

    const whatsappUrl = `https://wa.me/8801828034555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main id="main-content" className="bg-[#0C0D0E] text-white min-h-screen pt-[70px] sm:pt-[84px] md:pt-[92px]">
      
      {/* ── 1. Musemind-Style Header ─────────────────────────────────── */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 max-w-7xl mx-auto px-6 md:px-8" aria-labelledby="case-studies-heading">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E25C38] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-300">
              OUR CASE STUDIES
            </span>
          </div>

          <h1 
            id="case-studies-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-extrabold text-white tracking-[-0.03em] leading-[1.05]"
          >
            Our Case Study
          </h1>

          <p className="text-neutral-400 font-sans font-normal text-base sm:text-lg md:text-[20px] leading-[1.55] mt-5 max-w-2xl">
            A curated selection of high-yield e-commerce storefronts, high-converting D2C campaign funnels, and custom architectures engineered for real business growth.
          </p>
        </div>

        {/* ── Category Filter Pills ──────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2.5 mt-10" role="tablist" aria-label="Filter case studies">
          <button
            onClick={() => setSelectedCategory('all')}
            role="tab"
            aria-selected={selectedCategory === 'all'}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-white text-[#0C0D0E] shadow-sm'
                : 'bg-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.12] border border-white/[0.06]'
            }`}
          >
            <span>All Projects</span>
            <span className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
              selectedCategory === 'all' ? 'bg-[#0C0D0E] text-white' : 'bg-white/10 text-neutral-300'
            }`}>
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setSelectedCategory('landing')}
            role="tab"
            aria-selected={selectedCategory === 'landing'}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'landing'
                ? 'bg-white text-[#0C0D0E] shadow-sm'
                : 'bg-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.12] border border-white/[0.06]'
            }`}
          >
            <span>Campaign Landing Pages</span>
            <span className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
              selectedCategory === 'landing' ? 'bg-[#0C0D0E] text-white' : 'bg-white/10 text-neutral-300'
            }`}>
              {counts.landing}
            </span>
          </button>

          <button
            onClick={() => setSelectedCategory('fullstack')}
            role="tab"
            aria-selected={selectedCategory === 'fullstack'}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'fullstack'
                ? 'bg-white text-[#0C0D0E] shadow-sm'
                : 'bg-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.12] border border-white/[0.06]'
            }`}
          >
            <span>Full-Stack Platforms</span>
            <span className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
              selectedCategory === 'fullstack' ? 'bg-[#0C0D0E] text-white' : 'bg-white/10 text-neutral-300'
            }`}>
              {counts.fullstack}
            </span>
          </button>
        </div>
      </section>

      {/* ── 2. Asymmetric Case Study Showcase Feed (Musemind Layout) ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 sm:pb-32" aria-label="Projects list">
        <div className="flex flex-col gap-16 sm:gap-20">

          {filteredStudies.map((study) => {
            const isFull = study.layout === 'full';

            return (
              <article 
                key={study.id}
                className="group flex flex-col"
              >
                {/* Visual Canvas Card */}
                <div 
                  className={`w-full rounded-3xl overflow-hidden border border-white/[0.08] p-4 sm:p-7 md:p-10 transition-all duration-500 group-hover:border-white/20 bg-gradient-to-b ${study.bgGradient || 'from-[#141619] to-[#0E1012]'} relative`}
                >
                  {/* Aspect Ratio Container */}
                  <div className={`relative w-full ${isFull ? 'aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10]' : 'aspect-[16/11] sm:aspect-[4/3]'} rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/[0.06]`}>
                    <Image
                      src={study.image}
                      alt={`${study.title} preview`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes={isFull ? "(max-width: 1280px) 100vw, 1280px" : "(max-width: 768px) 100vw, 640px"}
                      priority={study.id === 'fleshpots'}
                    />

                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Case Study Meta Information (Below Card) */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E25C38]">
                        {study.categoryLabel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#E25C38] transition-colors">
                        <a href={study.url} target="_blank" rel="noopener noreferrer">
                          {study.title}
                        </a>
                      </h2>
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-neutral-400 hover:text-white transition-colors p-1 shrink-0"
                        aria-label={`Open ${study.title} in new window`}
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mt-2.5">
                      {study.desc}
                    </p>

                    {/* Pill Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[11.5px] font-medium text-neutral-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Link Button */}
                  <div className="shrink-0 pt-2">
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white text-neutral-200 hover:text-[#0C0D0E] text-xs font-bold py-3 px-5 rounded-full transition-all duration-200 border border-white/10"
                    >
                      <span>Visit Live Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}

        </div>
      </section>

      {/* ── 3. Inquiry CTA Section (Musemind Image 2 Layout) ─────────── */}
      <section className="bg-[#EAECF0] text-[#111111] py-20 sm:py-28 border-t border-neutral-300" aria-labelledby="inquiry-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading, Pitch & Mahin Ahmad Profile Card */}
            <div className="lg:col-span-5">
              <h2 
                id="inquiry-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-[-0.03em] leading-[1.1]"
              >
                Have a project idea in mind? Let&apos;s get started
              </h2>

              <p className="text-[#52525B] font-sans text-base sm:text-lg leading-relaxed mt-5">
                We&apos;ll schedule a discovery call to review your e-commerce requirements, courier integrations, and conversion goals. After discovery sessions, we&apos;ll send a proposal, and upon approval, we&apos;ll get started.
              </p>

              {/* Mahin Ahmad Profile Card (Matching Image 2 Rasel Ahmed Card) */}
              <div className="mt-10 sm:mt-12 pt-8 border-t border-neutral-300/80 flex items-center gap-4">
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-300/90 shadow-sm shrink-0">
                  <Image
                    src="/mahin-ahmad.jpg"
                    alt="Mahin Ahmad — Founder & Lead Full-Stack Architect"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111]">
                    Mahin Ahmad
                  </h3>
                  <p className="text-xs sm:text-[13px] font-semibold text-neutral-600 mt-0.5">
                    Founder &amp; Lead Full-Stack Architect
                  </p>
                  <a
                    href="https://wa.me/8801828034555?text=Hi%20Mahin!%20I'd%20like%20to%20discuss%20a%20new%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E25C38] hover:text-[#c44927] mt-1.5 transition-colors"
                  >
                    <span>Direct WhatsApp Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Clean Inquiry Form Card (Image 2) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-neutral-200/80">
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="inquiry-fullName" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="inquiry-fullName"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jane Cooper"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-sm"
                    />
                  </div>

                  {/* Company Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="inquiry-companyName" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        id="inquiry-companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Ex. Organic Essentials"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="inquiry-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Required & Project Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="inquiry-service" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Service required *
                      </label>
                      <select
                        id="inquiry-service"
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-sm"
                      >
                        <option value="Campaign Landing Page">Single-Product Campaign Landing Page</option>
                        <option value="Full-Stack E-Commerce Store">Full-Stack E-Commerce Store</option>
                        <option value="Custom Web Application">Custom Web Application / Platform</option>
                        <option value="Speed & CRO Optimization">Speed &amp; CRO Optimization</option>
                        <option value="Courier API & Ad Pixel Setup">Courier API &amp; Ad Pixel Setup</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="inquiry-budget" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Project budget tier *
                      </label>
                      <select
                        id="inquiry-budget"
                        value={projectBudget}
                        onChange={(e) => setProjectBudget(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-sm"
                      >
                        <option value="Budget-Friendly / Starter">Budget-Friendly / Starter Tier</option>
                        <option value="Cost-Effective Growth">Cost-Effective Growth Store</option>
                        <option value="Tailored Scaled Platform">Tailored Scaled Platform</option>
                        <option value="Seeking Best Affordable Quote">Looking for Best Affordable Quote</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="inquiry-details" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Project details
                    </label>
                    <textarea
                      id="inquiry-details"
                      rows={3}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Tell us about your brand, target audience, or requirements..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-[#111111] hover:bg-[#222222] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {/* Direct Contact Alternative (Image 2) */}
                  <p className="text-center text-xs sm:text-sm text-neutral-500 pt-2">
                    Not interested to submit the form?{' '}
                    <a
                      href="https://wa.me/8801828034555?text=Hi%20Mahin!%20I'd%20like%20to%20book%20a%20discovery%20call%20directly."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-bold underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Book A Call Directly</span>
                    </a>
                  </p>

                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
