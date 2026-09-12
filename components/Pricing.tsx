'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  Zap, 
  ShieldCheck, 
  Truck, 
  Activity, 
  Globe, 
  CheckCircle2, 
  MessageSquare,
  Calculator,
  Plus
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  valueTitle: string;
  valueSubtitle: string;
  target: string;
  deliverables: string[];
  cta: string;
  ctaHref: string;
}

interface CalculatorAddon {
  id: string;
  name: string;
  timelineLabel: string;
  timelineDays: number;
  desc: string;
  icon: React.ElementType;
}

interface FAQItem {
  question: string;
  answer: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Campaign / Single Product',
    valueTitle: 'Budget-Friendly',
    valueSubtitle: 'Zero Monthly App Fees • 1-Time Setup',
    target: 'Single product launches, personal branding, and high-converting ad landing pages engineered for maximum ROAS on a lean budget.',
    deliverables: [
      'High-speed Next.js landing page (<1s load time)',
      'Basic Meta Pixel event setup',
      'Direct WhatsApp & Cash on Delivery order form',
      'Mobile-first responsive UX with variant selectors',
      'District-wise automated shipping rates'
    ],
    cta: 'Get Started',
    ctaHref: '/contact?tier=starter'
  },
  {
    id: 'growth',
    name: 'Growth Commerce',
    badge: 'RECOMMENDED FOR BRANDS',
    isPopular: true,
    valueTitle: 'Cost-Effective All-In-One',
    valueSubtitle: 'Full Turnkey Ownership • No Hidden Fees',
    target: 'Full apparel, fragrance, beauty, and homeware digital storefronts built to scale without expensive monthly SaaS apps.',
    deliverables: [
      'Full e-commerce catalog & category management',
      'Automated Courier API Sync (Pathao / Steadfast / RedX auto-dispatch)',
      'Precision Meta Pixel & Server-Side CAPI (Ad-blocker proof)',
      'Incomplete / Abandoned order recovery webhooks',
      'Dual currency & payment gateway setup (bKash, Nagad, COD)',
      'Sub-650ms Core Web Vitals speed optimization'
    ],
    cta: 'Launch Store',
    ctaHref: '/contact?tier=growth'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Custom Engine',
    valueTitle: 'Tailored Architecture',
    valueSubtitle: 'Lean Studio Rates • Dedicated Engineering',
    target: 'High-volume brands needing multi-warehouse logistics, custom ERP sync, and dedicated engineering.',
    deliverables: [
      'Multi-language interfaces (English / Bangla dual UI)',
      'Custom courier routing logic & warehouse split dispatch',
      'Advanced administrative CRM, inventory webhooks & analytics',
      'Dedicated 30-day post-launch optimization & priority support',
      '100% code ownership with custom database schemas'
    ],
    cta: 'Book Architecture Call',
    ctaHref: '/contact?tier=enterprise'
  }
];

const calculatorAddons: CalculatorAddon[] = [
  {
    id: 'courier-api',
    name: 'Pathao / Steadfast / RedX Automated Courier API Integration',
    timelineLabel: '+1 Day Turnaround',
    timelineDays: 1,
    desc: 'Zero-touch order dispatch with instant consignment creation and live tracking sync.',
    icon: Truck
  },
  {
    id: 'meta-capi',
    name: 'Server-Side Meta CAPI & Pixel Setup (100% Match Quality)',
    timelineLabel: '+1 Day Turnaround',
    timelineDays: 1,
    desc: 'Ad-blocker proof event tracking bypassing iOS 14.5+ tracking loss for maximum ROAS.',
    icon: Activity
  },
  {
    id: 'abandoned-recovery',
    name: 'Abandoned Cart WhatsApp & SMS Recovery Workflow',
    timelineLabel: '+1 Day Turnaround',
    timelineDays: 1,
    desc: 'Automated webhook triggers that recapture lost checkout visitors via WhatsApp.',
    icon: MessageSquare
  },
  {
    id: 'multi-lang',
    name: 'Multi-Language (English / Bangla Dual Interface)',
    timelineLabel: '+2 Days Turnaround',
    timelineDays: 2,
    desc: 'Seamless zero-latency language switcher with localized currency and checkout copy.',
    icon: Globe
  }
];

const faqs: FAQItem[] = [
  {
    question: 'How does automated Steadfast/Pathao integration work?',
    answer: 'Zero manual order entry. When a customer confirms an order on your storefront, our Next.js edge webhook instantly creates the consignment in your Steadfast or Pathao merchant portal, downloads the shipping label, and transmits the live tracking ID back to your store without any human intervention.'
  },
  {
    question: 'Why do I need Meta CAPI instead of a standard browser pixel?',
    answer: 'Standard browser pixels lose 25% to 40% of conversion data due to iOS 14.5+ privacy restrictions, ad-blockers (Brave, uBlock), and browser tracking prevention. Server-Side CAPI transmits purchase events directly from our backend edge servers to Meta, ensuring a 9.5+/10 Event Match Quality score and lower cost per purchase.'
  },
  {
    question: 'Can we upgrade or add more products later?',
    answer: 'Yes, 100%. All Websy storefronts are built modularly using Next.js and scalable serverless backends. You can start with a 1-product landing page today and expand to a 5,000-item full catalog storefront without needing to rewrite code or rebuild from scratch.'
  },
  {
    question: 'Is there any recurring monthly platform fee?',
    answer: 'No. Unlike Shopify or closed website builders that take monthly subscription fees and 1–2% transaction cuts, Websy delivers 100% custom code ownership. Your website is deployed on high-speed global edge networks (Vercel) with zero monthly builder lock-in.'
  }
];

export default function Pricing() {
  const [selectedBaseTier, setSelectedBaseTier] = useState<string>('starter');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['courier-api', 'meta-capi']);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Calculation logic
  const currentBase = pricingTiers.find((t) => t.id === selectedBaseTier) || pricingTiers[0];

  const totalDays = 2 + selectedAddons.reduce((acc, addonId) => {
    const found = calculatorAddons.find((a) => a.id === addonId);
    return acc + (found ? found.timelineDays : 0);
  }, 0);

  // WhatsApp Pre-filled message
  const addonNames = selectedAddons
    .map((id) => calculatorAddons.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hi Websy! I configured a custom project on your scope estimator:\n• Base Tier: ${currentBase.name}\n• Add-ons: ${addonNames || 'None'}\n• Estimated Turnaround: ${totalDays}–${totalDays + 2} Days\n\nI would like to discuss an affordable quote.`
  );

  return (
    <section 
      id="pricing" 
      className="py-20 sm:py-28 lg:py-32 bg-[#F6F7F9] border-t border-neutral-200/80 relative overflow-hidden scroll-mt-20"
      aria-labelledby="pricing-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-3xl">
            {/* Small tracked pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
              <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#111111]">
                LEAN &amp; ACCESSIBLE
              </span>
            </div>

            {/* Heading */}
            <h2 
              id="pricing-headline"
              className="text-[#111111] font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-0.03em] leading-[1.08]"
            >
              Affordable Engineering for High-Growth Brands
            </h2>

            {/* Subtitle */}
            <p className="text-[#52525B] font-sans font-normal text-base sm:text-lg md:text-[20px] leading-[1.58] mt-4">
              Choose a battle-tested tier or customize your exact stack with automated courier integrations, server-side tracking, and multi-language support. Zero recurring platform fees.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-bold text-emerald-700 shadow-xs self-start md:self-end">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Custom Ownership • No Monthly App Fees</span>
          </div>
        </div>

        {/* ── 3-Tier Core Cards Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 sm:mb-24 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? 'bg-white border-2 border-[#111111] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] lg:-translate-y-2'
                  : 'bg-white border border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E25C38] text-white text-[10.5px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-[#52525B] text-xs sm:text-sm leading-relaxed mb-6">
                  {tier.target}
                </p>

                {/* Value / Affordability Positioning Banner */}
                <div className="pb-6 mb-6 border-b border-neutral-100">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#111111] block">
                    {tier.valueTitle}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block mt-1">
                    {tier.valueSubtitle}
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Included Architecture:
                  </span>
                  {tier.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <Check className="w-4 h-4 text-[#E25C38] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={tier.ctaHref}
                  className={`w-full inline-flex items-center justify-center font-semibold text-xs sm:text-sm py-4 px-6 rounded-full transition-all duration-200 shadow-sm ${
                    tier.isPopular
                      ? 'bg-[#111111] hover:bg-[#262626] text-white hover:shadow-md'
                      : 'bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-800'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Interactive Project Scope & Timeline Estimator ─────────── */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-12 mb-20 sm:mb-24 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-[#111111] text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#E25C38]" />
              Interactive Scope &amp; Timeline Estimator
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111111] tracking-tight">
              Configure Your Custom Project Requirements
            </h3>
            <p className="text-[#52525B] text-sm sm:text-base mt-2">
              Select your required baseline store package and toggle optional infrastructure integrations to get an instant timeline and scope estimate.
            </p>
          </div>

          {/* Base Package Selector */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
              1. Select Base Package
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pricingTiers.slice(0, 2).map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedBaseTier(tier.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    selectedBaseTier === tier.id
                      ? 'bg-[#111111] text-white border-neutral-900 shadow-sm'
                      : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">{tier.name}</div>
                    <div className={`text-xs mt-0.5 ${selectedBaseTier === tier.id ? 'text-zinc-400' : 'text-neutral-500'}`}>
                      {tier.target}
                    </div>
                  </div>
                  <div className="font-display font-extrabold text-xs uppercase px-2.5 py-1 rounded-lg bg-white/10 text-emerald-400 shrink-0 ml-3">
                    {tier.valueTitle}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons Checklist */}
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
              2. Toggle Optional Add-ons &amp; Logistics Integrations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {calculatorAddons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-neutral-50/90 border-[#111111] shadow-xs'
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      isChecked ? 'bg-[#111111] border-neutral-900 text-white' : 'border-neutral-300 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-xs sm:text-sm text-[#111111]">
                          {addon.name}
                        </span>
                        <span className="text-xs font-extrabold text-[#E25C38] shrink-0 font-mono">
                          {addon.timelineLabel}
                        </span>
                      </div>
                      <p className="text-xs text-[#52525B] mt-1 leading-relaxed">
                        {addon.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Scope Estimator Bar */}
          <div className="bg-[#0C0D0E] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg border border-white/[0.08]">
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                Custom Project Scope
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white">
                  Affordable Fixed Quote
                </span>
              </div>
              <p className="text-xs text-emerald-400 font-semibold mt-1">
                ✓ 100% Code Ownership • Zero Monthly Software Subscriptions • Estimated Delivery: {totalDays}–{totalDays + 2} Days
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/8801828034555?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Get Affordable Quote on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#111111] hover:bg-neutral-100 text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200"
              >
                Request Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* ── FAQ Accordion ───────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E25C38] mb-2">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#111111] tracking-tight">
              Everything you need to know
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-[#111111]">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#E25C38]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-[#52525B] text-xs sm:text-sm leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
