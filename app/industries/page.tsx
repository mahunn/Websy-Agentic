'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FiShoppingCart, 
  FiTrendingUp, 
  FiShoppingBag, 
  FiZap, 
  FiTruck, 
  FiActivity, 
  FiBriefcase, 
  FiUser, 
  FiCheck, 
  FiArrowRight,
  FiShield,
  FiExternalLink
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface Industry {
  id: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  features: string[];
  liveProject?: { name: string; url: string; tag: string };
  icon: any;
  highlightColor: string;
  tagBg: string;
}

const industries: Industry[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce & Multi-Product Stores',
    category: 'Retail & Brands',
    badge: 'Multi-Product Catalogs',
    desc: 'Scalable digital storefronts engineered for fast browsing, automated inventory handling, customer invoices, and frictionless mobile checkouts.',
    features: [
      'Multi-product categories & filters',
      'Display Sell flash deals with countdown timers',
      'Instant cart drawer & 1-click checkout flow',
      'bKash / Nagad / Card / COD payment ready'
    ],
    liveProject: {
      name: 'FLESHPOTS (148K+ Followers)',
      url: 'https://fleshpots.vercel.app/',
      tag: 'Live Storefront'
    },
    icon: FiShoppingCart,
    highlightColor: 'text-rose-500',
    tagBg: 'bg-rose-50 border-rose-100 text-rose-600',
  },
  {
    id: 'campaigns',
    title: 'Ad Campaign & 1-Product Funnels',
    category: 'Viral & Performance',
    badge: 'Affordable Fast-Track • 24–48h',
    desc: 'Laser-focused, ultra-fast single product landing pages designed specifically for Facebook, Instagram, and TikTok advertising campaigns to maximize ad ROAS.',
    features: [
      'Sub-1s mobile page speed (<800ms load)',
      '1-Click Cash on Delivery & bKash order form',
      'Instant WhatsApp & Messenger order deep-links',
      'Meta (Facebook) Pixel & TikTok Pixel setup'
    ],
    liveProject: {
      name: 'JHT HUB (Attar Combo Funnel)',
      url: 'https://jhthub.vercel.app/',
      tag: 'Ad Landing Page'
    },
    icon: FiZap,
    highlightColor: 'text-amber-500',
    tagBg: 'bg-amber-50 border-amber-100 text-amber-600',
  },
  {
    id: 'fashion',
    title: 'Fashion, Apparel & Luxury Gowns',
    category: 'Lifestyle Brands',
    badge: 'High-Conversion Editorial',
    desc: 'Refined, modern aesthetic layouts tailored for clothing lines, footwear, ethnic wear, and luxury fashion brands seeking elevated perception and trust.',
    features: [
      'Multi-color variant switchers & size chips (M–XXL)',
      'Editorial lookbook & high-res image zoom',
      'Dynamic Inside/Outside Dhaka delivery calculation',
      'Verified social proof & review carousels'
    ],
    liveProject: {
      name: 'আড়ম্বর শৈলী & অঙ্গবিলাস',
      url: 'https://arambarsaili.vercel.app/',
      tag: 'Live Fashion Pages'
    },
    icon: FiShoppingBag,
    highlightColor: 'text-violet-500',
    tagBg: 'bg-violet-50 border-violet-100 text-violet-600',
  },
  {
    id: 'startups',
    title: 'Startups & Fast-Track MVPs',
    category: 'Tech & Products',
    badge: 'Custom Next.js Systems',
    desc: 'Rapid prototyping and scalable full-stack web applications for ambitious founders wanting to validate digital products quickly without technical debt.',
    features: [
      'Modern Next.js + TypeScript foundation',
      'Custom database & user authentication',
      'REST / GraphQL API integration',
      'Cloud hosting with 99.9% uptime SLA'
    ],
    liveProject: {
      name: 'Mahin Ahmad Platform',
      url: 'https://mahinahmad.netlify.app',
      tag: 'Web Platform'
    },
    icon: FiTrendingUp,
    highlightColor: 'text-blue-500',
    tagBg: 'bg-blue-50 border-blue-100 text-blue-600',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    category: 'Operations',
    badge: 'Courier & API Automation',
    desc: 'Web applications and internal management tools integrated with courier APIs for automated order placement, tracking, and delivery updates.',
    features: [
      'Steadfast, Pathao & RedX API integration',
      'Automated consignment tracking',
      'Bulk parcel booking & label printing',
      'Order dispatch status dashboard'
    ],
    icon: FiTruck,
    highlightColor: 'text-emerald-500',
    tagBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  },
  {
    id: 'healthcare',
    title: 'Healthcare, Clinics & Labs',
    category: 'Medical Services',
    badge: 'Patient Booking',
    desc: 'Accessible, reliable websites for diagnostic centers, dental clinics, and specialized doctors designed to convert searches into appointments.',
    features: [
      'Online appointment booking system',
      'Doctor profiles & service directories',
      'Direct WhatsApp & phone call triggers',
      'Google Maps local business optimization'
    ],
    icon: FiActivity,
    highlightColor: 'text-cyan-500',
    tagBg: 'bg-cyan-50 border-cyan-100 text-cyan-600',
  },
  {
    id: 'smes',
    title: 'SMEs & Corporate Businesses',
    category: 'Business Presence',
    badge: 'Lead Generation',
    desc: 'Professional corporate websites that establish instant credibility, generate inbound corporate inquiries, and showcase company capabilities.',
    features: [
      'High-authority brand presentation',
      'Lead capture & dynamic quote forms',
      'Corporate services catalog',
      'Search Engine Optimization (SEO)'
    ],
    icon: FiBriefcase,
    highlightColor: 'text-indigo-500',
    tagBg: 'bg-indigo-50 border-indigo-100 text-indigo-600',
  },
  {
    id: 'creators',
    title: 'Creators & Personal Brands',
    category: 'Consultants & Freelancers',
    badge: 'Personal Portfolios',
    desc: 'Editorial personal portfolio websites designed for developers, consultants, creators, and executives to attract high-ticket clients and deals.',
    features: [
      'Interactive project showcases',
      'Client testimonials & case studies',
      '1-Click Calendly call booking integration',
      'Fast, minimal, zero layout-shift code'
    ],
    liveProject: {
      name: 'Mahin Ahmad Developer Portfolio',
      url: 'https://mahinahmad.netlify.app',
      tag: 'Live Portfolio'
    },
    icon: FiUser,
    highlightColor: 'text-pink-500',
    tagBg: 'bg-pink-50 border-pink-100 text-pink-600',
  },
];

export default function IndustriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Industries' },
    { id: 'retail', label: 'E-Commerce & Retail' },
    { id: 'tech', label: 'Tech & Startups' },
    { id: 'business', label: 'SMEs & Services' },
  ];

  const filteredIndustries = industries.filter((ind) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'retail') return ind.id === 'ecommerce' || ind.id === 'campaigns' || ind.id === 'fashion';
    if (selectedCategory === 'tech') return ind.id === 'startups' || ind.id === 'logistics';
    if (selectedCategory === 'business') return ind.id === 'healthcare' || ind.id === 'smes' || ind.id === 'creators';
    return true;
  });

  return (
    <main id="main-content" className="bg-[#F8FAFC] pt-[90px] sm:pt-[110px] pb-20 md:pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Page Header */}
        <header className="mb-14 text-center max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.15em] text-pink-accent bg-rose-50 border border-[#FCE7EF] rounded-full px-4 py-1.5">
              ● Industry-Specific Solutions
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Websites engineered for your exact business niche.
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed">
            Whether you need a fast, affordable ad campaign landing page, a multi-product clothing brand store, an Islamic lifestyle funnel, or a bespoke corporate web platform, we build systems tailored to your industry.
          </p>
        </header>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1220] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredIndustries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className="group bg-white border border-gray-200/80 rounded-3xl p-6 hover:shadow-xl hover:border-pink-accent/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center ${industry.highlightColor} group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${industry.tagBg}`}>
                      {industry.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 
                    className="text-lg font-bold text-[#0B1220] mb-2 leading-snug"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5 font-normal">
                    {industry.desc}
                  </p>

                  {/* Live Project Proof if available */}
                  {industry.liveProject && (
                    <div className="mb-5 p-3 bg-gray-50/80 rounded-xl border border-gray-150">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 block mb-1">
                        Live Production Example:
                      </span>
                      <a
                        href={industry.liveProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-pink-accent transition-colors group/ex"
                      >
                        <span>{industry.liveProject.name}</span>
                        <FiExternalLink className="w-3 h-3 text-gray-400 group-hover/ex:text-pink-accent transition-colors" />
                      </a>
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <div className="h-px bg-gray-100 mb-5" />
                  <ul className="space-y-2.5 mb-6">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                        <FiCheck className="text-pink-accent w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-[#0B1220] hover:text-white text-[#0B1220] text-xs font-bold py-2.5 px-4 rounded-xl border border-gray-200 group-hover:border-transparent transition-all duration-200 mt-auto"
                >
                  <span>Build for this industry</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Zero-Risk Trial & Guarantees Section */}
        <section className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-sm mb-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-accent block mb-2">
              Zero-Risk Client Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              100% money-back satisfaction &amp; continuous support
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-8">
              We never trap you in proprietary locks or ongoing builder subscriptions. You own 100% of your source code, domain, and data from day one.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-pink-accent shrink-0 mt-0.5">
                  <FiShield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">Zero Lock-In</h4>
                  <p className="text-[11px] text-gray-500">100% Next.js code ownership.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <FiCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">14-Day Free Fixes</h4>
                  <p className="text-[11px] text-gray-500">Post-launch bug warranty.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <FiZap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">Rapid 24–48h</h4>
                  <p className="text-[11px] text-gray-500">Fast ad landing page turnaround.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
