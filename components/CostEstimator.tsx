'use client';

import { useState } from 'react';
import { FiCheck, FiZap, FiShoppingBag, FiLayers, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface BasePackage {
  id: string;
  name: string;
  price: number;
  timeline: string;
  tag: string;
  icon: any;
}

interface Addon {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const basePackages: BasePackage[] = [
  {
    id: 'campaign',
    name: '1-Product Ad Landing Page',
    price: 3499,
    timeline: '24–48 Hours',
    tag: 'Single Product & FB Ads',
    icon: FiZap,
  },
  {
    id: 'ecommerce',
    name: 'Standard E-Commerce Store',
    price: 14999,
    timeline: '3–5 Days',
    tag: 'Multi-Product Store + Admin',
    icon: FiShoppingBag,
  },
  {
    id: 'custom',
    name: 'Custom Scaled Platform',
    price: 29999,
    timeline: '7–12 Days',
    tag: 'Bespoke Next.js Web App',
    icon: FiLayers,
  },
];

const addonsList: Addon[] = [
  {
    id: 'courier',
    name: 'Automated Courier API (Steadfast / Pathao / RedX)',
    price: 2500,
    desc: '1-Click parcel booking and tracking sync',
  },
  {
    id: 'gateway',
    name: 'Merchant Payment Gateway (SSLCommerz / bKash)',
    price: 3000,
    desc: 'Automated online card & mobile wallet payments',
  },
  {
    id: 'pixel',
    name: 'Meta Pixel & TikTok CAPI Tracking Setup',
    price: 1500,
    desc: 'Accurate event tracking for ad campaign ROAS',
  },
  {
    id: 'bilingual',
    name: 'Multi-Language Support (Bangla + English)',
    price: 2000,
    desc: 'Instant language toggle for broader reach',
  },
];

export default function CostEstimator() {
  const [selectedBase, setSelectedBase] = useState<string>('campaign');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['pixel']);

  const currentBase = basePackages.find((p) => p.id === selectedBase) || basePackages[0];

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const found = addonsList.find((a) => a.id === addonId);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalEstimate = currentBase.price + addonsTotal;

  // Generate pre-filled WhatsApp message
  const selectedAddonNames = selectedAddons
    .map((id) => addonsList.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = `Hi Websy! I calculated an estimate for my project:
- Package: ${currentBase.name} (৳${currentBase.price.toLocaleString()})
${selectedAddonNames ? `- Add-ons: ${selectedAddonNames}\n` : ''}- Estimated Total: ৳${totalEstimate.toLocaleString()}
- Timeline: ${currentBase.timeline}

I'd like to discuss and get started.`;

  const encodedWhatsApp = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/8801828034555?text=${encodedWhatsApp}`;

  return (
    <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-gray-100/50">
      
      {/* Step 1: Base Selection */}
      <div className="mb-8">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-accent block mb-2">
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
                  <span className="text-lg font-black text-gray-900" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    ৳{pkg.price.toLocaleString()}
                  </span>
                  {isSelected && (
                    <span className="text-[11px] font-bold text-pink-accent flex items-center gap-1">
                      <FiCheck className="w-3.5 h-3.5" /> Selected
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Addons Selection */}
      <div className="mb-8">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-accent block mb-2">
          Step 2: Optional Features &amp; Integrations
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-[#0B1220] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          Enhance your store with automation
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {addonsList.map((addon) => {
            const isChecked = selectedAddons.includes(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                  isChecked
                    ? 'border-pink-accent/40 bg-rose-50/30 ring-1 ring-pink-accent/20'
                    : 'border-gray-200 bg-white hover:bg-gray-50/60'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  isChecked ? 'bg-pink-accent border-pink-accent text-white' : 'border-gray-300 bg-white'
                }`}>
                  {isChecked && <FiCheck className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-gray-900">{addon.name}</span>
                    <span className="text-xs font-extrabold text-pink-accent whitespace-nowrap">+৳{addon.price.toLocaleString()}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">{addon.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 3: Total Summary & Actions */}
      <div className="pt-6 border-t border-gray-200 bg-gray-50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block mb-0.5">
            Estimated Project Investment &amp; SLA
          </span>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl sm:text-4xl font-black text-[#0B1220]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              ৳{totalEstimate.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              Estimated Delivery: {currentBase.timeline}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">
            Includes 100% code ownership, mobile optimization, and zero recurring builder fees.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Lock Quote on WhatsApp</span>
          </a>
          <a
            href={`mailto:info@websy.bd?subject=Project%20Estimate%20Inquiry&body=${encodeURIComponent(whatsappMessage)}`}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
          >
            <span>Email Quote</span>
            <FiArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
