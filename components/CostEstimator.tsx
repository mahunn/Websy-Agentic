'use client';

import { useState } from 'react';
import { FiCheck, FiZap, FiShoppingBag, FiLayers, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface BasePackage {
  id: string;
  name: string;
  timeline: string;
  tag: string;
  tierLabel: string;
  icon: any;
}

interface Addon {
  id: string;
  name: string;
  timelineDays: number;
  desc: string;
}

const basePackages: BasePackage[] = [
  {
    id: 'campaign',
    name: '1-Product Ad Landing Page',
    timeline: '24–48 Hours',
    tag: 'Single Product & FB Ads',
    tierLabel: 'Affordable Fast-Track',
    icon: FiZap,
  },
  {
    id: 'ecommerce',
    name: 'Standard E-Commerce Store',
    timeline: '3–5 Days',
    tag: 'Multi-Product Store + Admin',
    tierLabel: 'Cost-Effective All-In-One',
    icon: FiShoppingBag,
  },
  {
    id: 'custom',
    name: 'Custom Scaled Platform',
    timeline: '7–12 Days',
    tag: 'Bespoke Next.js Web App',
    tierLabel: 'Tailored Architecture',
    icon: FiLayers,
  },
];

const addonsList: Addon[] = [
  {
    id: 'courier',
    name: 'Steadfast / Pathao Automated Courier API',
    timelineDays: 1,
    desc: 'Automated parcel consignment generation & live order tracking status sync.',
  },
  {
    id: 'payment',
    name: 'SSLCommerz / bKash Direct Merchant Gateway',
    timelineDays: 1,
    desc: 'Instant online card, mobile banking, and automated bKash payment verification.',
  },
  {
    id: 'video-reel',
    name: 'Video Showcase Reels & Photo Review Feed',
    timelineDays: 1,
    desc: 'Mobile-first video unboxing reels with verified photo review testimonial feed.',
  },
  {
    id: 'speed-boost',
    name: 'Sub-800ms Core Web Vitals Optimization',
    timelineDays: 1,
    desc: 'Turbocharged static caching, image AVIF compression, and zero CLS layout shifts.',
  },
];

export default function CostEstimator() {
  const [selectedBase, setSelectedBase] = useState<string>('campaign');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['courier']);

  const currentBase = basePackages.find((p) => p.id === selectedBase) || basePackages[0];

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const selectedAddonNames = selectedAddons
    .map((id) => addonsList.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = `Hi Websy! I configured a custom project on your scope estimator:
- Package: ${currentBase.name} (${currentBase.tierLabel})
${selectedAddonNames ? `- Add-ons: ${selectedAddonNames}\n` : ''}- Timeline: ${currentBase.timeline}

I would like to discuss an affordable quote.`;

  const encodedWhatsApp = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/8801828034555?text=${encodedWhatsApp}`;

  return (
    <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-gray-100/50">
      
      {/* Step 1: Base Selection */}
      <div className="mb-8">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E25C38] block mb-2">
          Step 1: Choose Website Scope
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          What type of website do you need?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {basePackages.map((pkg) => {
            const isSelected = selectedBase === pkg.id;
            const IconComponent = pkg.icon;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedBase(pkg.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#0B1220] bg-gray-50/70 shadow-md ring-1 ring-[#0B1220]'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-[#0B1220] text-white' : 'bg-gray-100 text-gray-700'}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {pkg.timeline}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#0B1220] mb-1">{pkg.name}</h4>
                  <p className="text-xs text-gray-500 mb-3">{pkg.tag}</p>
                </div>
                <div className="pt-3 border-t border-gray-200/60 flex items-baseline justify-between">
                  <span className="text-sm font-extrabold text-emerald-600">
                    {pkg.tierLabel}
                  </span>
                  {isSelected && (
                    <span className="text-[11px] font-bold text-[#E25C38] flex items-center gap-1">
                      <FiCheck className="w-3.5 h-3.5" /> Selected
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Add-ons */}
      <div className="mb-10">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E25C38] block mb-2">
          Step 2: Select Integrations &amp; Workflows
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-[#0B1220] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          Enhance your conversion &amp; fulfillment architecture
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {addonsList.map((addon) => {
            const isChecked = selectedAddons.includes(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                  isChecked
                    ? 'border-[#0B1220] bg-gray-50/80 shadow-xs'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked ? 'bg-[#0B1220] border-[#0B1220] text-white' : 'border-gray-300 bg-white'
                  }`}
                >
                  {isChecked && <FiCheck className="w-3.5 h-3.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="text-xs sm:text-sm font-bold text-[#0B1220]">{addon.name}</h5>
                    <span className="text-xs font-bold text-emerald-600 whitespace-nowrap">
                      Included Fast-Track
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">{addon.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-[#0B1220] rounded-2xl p-6 sm:p-7 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-lg">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
            ESTIMATED PROJECT SCOPE
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Affordable Fixed Quote
            </span>
            <span className="text-xs text-gray-400">/ One-time setup</span>
          </div>
          <p className="text-xs text-gray-300 mt-1">
            ✓ Turnaround: {currentBase.timeline} • Zero monthly software subscriptions • 100% custom code ownership
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Discuss on WhatsApp</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
