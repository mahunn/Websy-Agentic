'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  Zap, 
  Truck, 
  Activity, 
  Globe, 
  CreditCard
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  priceTag: string;
  turnaround: string;
  target: string;
  features: string[];
  cta: string;
  ctaHref: string;
  whatsappMessage: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Campaign',
    tagline: 'Single-Product Funnel',
    priceTag: 'Fixed 1-Time Quote',
    turnaround: '24–48h Dispatch',
    target: 'High-ROAS campaign landing pages engineered for paid Meta & TikTok ad sets.',
    features: [
      'Sub-800ms Next.js landing page (mobile-first)',
      'Meta Pixel & Conversions API (CAPI) event tracking',
      'Direct Cash on Delivery (COD) & WhatsApp order form',
      'Interactive color & size variant selectors',
      'Automated shipping rates (Inside/Outside Dhaka)',
      '100% full source code ownership (zero monthly fees)'
    ],
    cta: 'Get Started',
    ctaHref: '/contact?tier=starter',
    whatsappMessage: 'Hi Mahin! I want to discuss a fast-track Starter Campaign landing page.'
  },
  {
    id: 'growth',
    name: 'Growth Commerce',
    badge: 'RECOMMENDED',
    isPopular: true,
    tagline: 'Multi-Product Brand Store',
    priceTag: 'Turnkey Fixed Package',
    turnaround: '3–5 Days',
    target: 'Full e-commerce storefronts for apparel, fragrance, and lifestyle brands.',
    features: [
      'Multi-category catalog & instant slide-out cart drawer',
      'Steadfast & Pathao courier API auto-dispatch',
      'Server-side Meta CAPI (ad-blocker proof tracking)',
      'bKash, Nagad & COD automated payment routing',
      'Streamlined product & order management admin panel',
      'Sub-650ms Core Web Vitals speed optimization'
    ],
    cta: 'Launch Your Store',
    ctaHref: '/contact?tier=growth',
    whatsappMessage: 'Hi Mahin! I would like to launch a full Growth Commerce store.'
  },
  {
    id: 'custom',
    name: 'Custom Platform',
    tagline: 'Bespoke Architecture',
    priceTag: 'Custom Enterprise Scope',
    turnaround: '7–12 Days',
    target: 'High-volume brands needing multi-warehouse logistics, ERP sync, and custom UI.',
    features: [
      'Custom Next.js & Supabase architecture',
      'Custom database schema & tailored inventory logic',
      'Multi-warehouse routing & split consignment dispatch',
      'Dual-language UI (English & Bangla)',
      'Dedicated 30-day post-launch optimization',
      'Zero monthly platform lock-in or GMV percentage cuts'
    ],
    cta: 'Discuss Scope',
    ctaHref: '/contact?tier=custom',
    whatsappMessage: 'Hi Mahin! I need custom platform architecture for my e-commerce business.'
  }
];

interface AddonOption {
  id: string;
  name: string;
  etaLabel: string;
  etaDays: number;
  description: string;
  icon: React.ElementType;
}

const addonOptions: AddonOption[] = [
  {
    id: 'courier-sync',
    name: 'Steadfast & Pathao Courier API Sync',
    etaLabel: '+1 Day',
    etaDays: 1,
    description: 'Zero-touch consignment creation with live parcel tracking sync.',
    icon: Truck
  },
  {
    id: 'meta-capi',
    name: 'Server-Side Meta CAPI Tracking',
    etaLabel: '+1 Day',
    etaDays: 1,
    description: 'Bypasses iOS 14.5+ tracking loss for maximum ROAS and 9.5+ match score.',
    icon: Activity
  },
  {
    id: 'bkash-gateway',
    name: 'bKash & Nagad Payment Auto-Verify',
    etaLabel: '+1 Day',
    etaDays: 1,
    description: 'Instant checkout verification via merchant gateway or transaction ID.',
    icon: CreditCard
  },
  {
    id: 'dual-lang',
    name: 'English & Bangla Dual Language UI',
    etaLabel: '+2 Days',
    etaDays: 2,
    description: 'Zero-latency locale toggle with localized checkout copy.',
    icon: Globe
  }
];

const essentialFaqs = [
  {
    q: 'Are there any recurring monthly platform fees?',
    a: 'No. Unlike Shopify ($29–$79/mo plus app subscription fees and transaction cuts), Websy delivers 100% custom Next.js code ownership with zero monthly builder lock-in.'
  },
  {
    q: 'How fast can our campaign landing page go live?',
    a: 'Single-product campaign landing pages are deployed within 24 to 48 hours once product assets, offer text, and pixel credentials are provided. Full stores take 3 to 5 days.'
  },
  {
    q: 'How does automated Steadfast and Pathao courier sync work?',
    a: 'Zero manual order entry. When a customer confirms an order, our edge webhook automatically books the parcel with Steadfast or Pathao and assigns the tracking number immediately.'
  }
];

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string>('growth');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['courier-sync', 'meta-capi']);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const activeTierData = pricingTiers.find(t => t.id === selectedTier) || pricingTiers[1];

  const totalTurnaroundDays = (activeTierData.id === 'starter' ? 2 : activeTierData.id === 'growth' ? 4 : 8) + 
    selectedAddons.reduce((acc, id) => {
      const addon = addonOptions.find(a => a.id === id);
      return acc + (addon ? addon.etaDays : 0);
    }, 0);

  const selectedAddonNames = selectedAddons
    .map(id => addonOptions.find(a => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const customEstimateWhatsAppUrl = `https://wa.me/8801828034555?text=${encodeURIComponent(
    `Hi Mahin! I'm interested in the ${activeTierData.name} package with these add-ons: ${selectedAddonNames || 'Standard'}. Estimated Turnaround: ${totalTurnaroundDays} Days. I would like to get a quote.`
  )}`;

  return (
    <section 
      id="pricing" 
      className="py-12 sm:py-20 bg-[#F8FAFC] border-t border-gray-200/80 relative overflow-hidden"
      aria-labelledby="pricing-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Minimalist Section Header ─────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-2xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111]">
              TRANSPARENT PRICING • ZERO MONTHLY FEES
            </span>
          </div>

          <h2 
            id="pricing-headline"
            className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight leading-[1.12] mb-3"
          >
            Simple Packages for{' '}
            <span className="text-[#DC2626]">
              High-Converting Stores.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
            Zero Shopify monthly app fees or fragile plugins. 100% full source code ownership engineered on Next.js.
          </p>
        </div>

        {/* ── 3 Essential Tier Cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 sm:mb-16 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.isPopular
                  ? 'border-2 border-[#111111] shadow-lg lg:-translate-y-1'
                  : 'border border-gray-200/90 shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white text-[10px] font-mono font-extrabold uppercase px-3 py-0.5 rounded-full shadow-sm">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2 mt-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111]">
                    {tier.name}
                  </h3>
                  <span className="text-[10.5px] font-mono font-semibold text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">
                    {tier.turnaround}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  {tier.target}
                </p>

                {/* Price Tag */}
                <div className="pb-4 mb-5 border-b border-gray-100">
                  <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-neutral-400 block mb-0.5">
                    {tier.tagline}
                  </span>
                  <span className="text-2xl font-display font-extrabold text-[#111111] block">
                    {tier.priceTag}
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    What&apos;s Included:
                  </span>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-snug">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <Link
                  href={tier.ctaHref}
                  className={`w-full inline-flex items-center justify-center font-bold text-xs sm:text-sm py-3 px-5 rounded-full transition-all ${
                    tier.isPopular
                      ? 'bg-[#111111] hover:bg-black text-white shadow-sm'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-[#111111]'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>

                <a
                  href={`https://wa.me/8801828034555?text=${encodeURIComponent(tier.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-emerald-600 transition-colors py-1"
                >
                  <FaWhatsapp className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Interactive Scope & Timeline Estimator (Mobile First) ──── */}
        <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-12 sm:mb-16 shadow-md">
          <div className="max-w-xl mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[#111111] text-xs font-mono font-bold uppercase mb-2">
              <Zap className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>CUSTOM SCOPE ESTIMATOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
              Configure Your Delivery Timeline
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              Select your store package and toggle add-ons to calculate your schedule.
            </p>
          </div>

          {/* 1. Base Package Selector */}
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              1. Base Package
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {pricingTiers.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTier(t.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedTier === t.id
                      ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                      : 'bg-gray-50 text-neutral-800 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <span className="font-bold text-xs sm:text-sm block">{t.name}</span>
                  <span className={`text-[11px] mt-1 font-mono ${selectedTier === t.id ? 'text-gray-300' : 'text-neutral-500'}`}>
                    Baseline: {t.turnaround}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Add-on Infrastructure Toggles */}
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              2. Optional Add-ons
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {addonOptions.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                      isChecked
                        ? 'bg-red-50/50 border-red-300 shadow-2xs'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      isChecked ? 'bg-[#DC2626] border-[#DC2626] text-white' : 'border-gray-300 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-xs sm:text-sm text-[#111111] truncate">
                          {addon.name}
                        </span>
                        <span className="text-[11px] font-bold text-[#DC2626] shrink-0 font-mono">
                          {addon.etaLabel}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Turnaround & Quote Bar */}
          <div className="bg-[#111111] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                Estimated Delivery
              </span>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {totalTurnaroundDays}–{totalTurnaroundDays + 2} Business Days
              </div>
              <p className="text-xs text-emerald-400 font-semibold mt-1">
                ✓ Fixed Scope • 100% Code Ownership
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <a
                href={customEstimateWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-full transition-all shadow-sm whitespace-nowrap"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Get Quote on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-full transition-colors border border-white/10"
              >
                Configure on Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ── 3 Essential FAQs ───────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#DC2626] block mb-1">
              QUESTIONS &amp; ANSWERS
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-2.5">
            {essentialFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-xs sm:text-sm text-[#111111]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#DC2626]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 bg-[#F8FAFC]/50">
                      {faq.a}
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
