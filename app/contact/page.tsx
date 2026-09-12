'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { 
  FiMail, 
  FiPhone, 
  FiCheck, 
  FiExternalLink, 
  FiArrowRight, 
  FiClock, 
  FiShield, 
  FiZap,
  FiChevronDown,
  FiHelpCircle
} from 'react-icons/fi';

const projectTypesMap: Record<string, string> = {
  'landing-ad': 'Single-Product Campaign Landing Page (Affordable Fast-Track)',
  'ecommerce-store': 'Standard E-Commerce Store (Turnkey Brand Setup)',
  'custom-ecommerce': 'Advanced Custom E-Commerce & Platform',
  'redesign-speed': 'Store Redesign & Speed Optimization',
  'portfolio-brand': 'Portfolio / Personal Brand Website',
  'custom-app': 'Custom Full-Stack Web Application',
};

const budgetsMap: Record<string, string> = {
  'starter': 'Budget-Friendly / Starter (Single-Product Campaign)',
  'growth': 'Cost-Effective Growth (Standard Multi-Product Store)',
  'custom': 'Advanced Custom Platform & Workflows',
  'enterprise': 'Enterprise Tailored Architecture',
  'consult': 'Looking for Best Affordable Quote',
};

const guarantees = [
  {
    icon: FiZap,
    title: '24–48h Quick Dispatch',
    desc: 'Rapid turnaround for high-ROAS campaign landing pages ready for Meta & TikTok ads.',
    color: 'text-[#E25C38] bg-[#E25C38]/10 border-[#E25C38]/20',
  },
  {
    icon: FiCheck,
    title: 'Local Payment & COD Ready',
    desc: 'Pre-configured bKash, Nagad, Steadfast & Pathao courier delivery fee sync.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    icon: FiShield,
    title: '100% Custom Code & Ownership',
    desc: 'Pure Next.js/React architecture with complete source code handoff. Zero monthly app fees.',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    icon: FiClock,
    title: 'Sub-800ms Load Speed',
    desc: 'Ultra-fast Core Web Vitals optimization to prevent ad bounce and boost conversion.',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
];

const timelineSteps = [
  {
    step: '01',
    title: 'Requirement Discovery',
    time: 'Within 2 Hours',
    desc: 'We analyze your product niche, ad goals, variant needs, and courier workflow to outline the exact specification.',
  },
  {
    step: '02',
    title: 'UX & Conversion Blueprint',
    time: 'Day 1',
    desc: 'We engineer the mobile-first layout, high-converting product showcase, urgency countdown, and checkout funnel.',
  },
  {
    step: '03',
    title: 'Production Build & Launch',
    time: 'Day 2–3',
    desc: 'Clean Next.js implementation, Meta Pixel CAPI verification, courier integration, and live domain deployment.',
  },
];

const faqs = [
  {
    q: 'How fast can our campaign landing page go live?',
    a: 'Single-product and campaign landing pages are typically deployed within 24 to 48 hours at an extremely accessible, startup-friendly budget once you provide your product assets, offer details, and Meta Pixel ID.',
  },
  {
    q: 'Do you configure bKash, Nagad, and Steadfast courier delivery?',
    a: 'Yes, absolutely. We integrate automated payment verification (or manual screenshot checkouts), delivery charge calculations (Inside/Outside Dhaka), and automated API order sync with Steadfast or Pathao.',
  },
  {
    q: 'Why should I choose Websy over Shopify or WordPress?',
    a: 'Shopify requires recurring monthly subscriptions plus expensive third-party app fees and transaction percentages. Websy provides custom Next.js stores with zero recurring monthly platform fees, sub-800ms load speeds, and 100% full code ownership at an affordable one-time investment.',
  },
  {
    q: 'Can I add more products or edit content myself?',
    a: 'Yes. Every project includes a streamlined content structure or intuitive admin dashboard so you can update products, prices, and banners effortlessly.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'landing-ad',
    budget: 'starter',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('info@websy.bd');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.projectType || !formData.budget) {
      return;
    }

    setIsSubmitting(true);

    const subject = `New Project Inquiry from ${formData.name}`;
    const nameText = `Name: ${formData.name}`;
    const emailText = `Email: ${formData.email}`;
    const projectText = `Project Type: ${projectTypesMap[formData.projectType] || formData.projectType}`;
    const budgetText = `Budget: ${budgetsMap[formData.budget] || formData.budget}`;
    const msgText = formData.message ? `Details: ${formData.message}` : '';

    const lines = [
      "Hi Websy!",
      "I'd like to submit a new project inquiry.",
      "",
      nameText,
      emailText,
      projectText,
      budgetText,
      msgText
    ].filter(Boolean);

    const emailBody = lines.join('\n');
    const mailtoUrl = `mailto:info@websy.bd?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    if (typeof window !== 'undefined' && (window as any).fbq) {
      const valueMap: Record<string, number> = {
        'starter': 5000,
        'growth': 15000,
        'custom': 35000,
        'enterprise': 60000,
        'consult': 5000,
      };
      (window as any).fbq('track', 'Lead', {
        content_name: formData.projectType,
        value: valueMap[formData.budget] || 5000,
        currency: 'BDT'
      });
    }

    window.location.href = mailtoUrl;
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleWhatsAppClick = () => {
    const nameText = formData.name ? `Name: ${formData.name}` : '';
    const emailText = formData.email ? `Email: ${formData.email}` : '';
    const projectText = formData.projectType ? `Project Type: ${projectTypesMap[formData.projectType] || formData.projectType}` : '';
    const budgetText = formData.budget ? `Budget: ${budgetsMap[formData.budget] || formData.budget}` : '';
    const msgText = formData.message ? `Details: ${formData.message}` : '';

    const lines = [
      "Hi Websy! I'd like to discuss a project.",
      nameText,
      emailText,
      projectText,
      budgetText,
      msgText
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/8801828034555?text=${encodedMessage}`;

    if (typeof window !== 'undefined' && (window as any).fbq) {
      const valueMap: Record<string, number> = {
        'starter': 5000,
        'growth': 15000,
        'custom': 35000,
        'enterprise': 60000,
        'consult': 5000,
      };
      (window as any).fbq('track', 'Lead', {
        content_name: formData.projectType || 'WhatsApp Start',
        value: valueMap[formData.budget] || 5000,
        currency: 'BDT',
        content_category: 'WhatsApp Contact'
      });
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <main id="main-content" className="bg-[#F8FAFC] pt-[84px] sm:pt-[100px] md:pt-[112px] pb-20 md:pb-28 relative overflow-hidden min-h-screen">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at 12% 14%, rgba(226,92,56,0.05) 0%, transparent 45%), radial-gradient(circle at 88% 60%, rgba(37,211,102,0.03) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* ── Page Header ───────────────────────────────────────────── */}
        <section className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" aria-labelledby="contact-heading">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/8 border border-[#E25C38]/20 rounded-full px-4 py-1.5 shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Founder Access • Response in &lt;15 mins</span>
          </div>

          <h1
            id="contact-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-4 font-display"
          >
            Let's build a store that{' '}
            <span className="bg-gradient-to-r from-[#E25C38] via-[#EA6C48] to-[#F97316] bg-clip-text text-transparent">
              boosts sales.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            From high-speed, <span className="font-semibold text-gray-900">highly affordable campaign landing pages</span> to complete custom e-commerce stores. Connect directly with our lead engineer or submit your project specs below.
          </p>
        </section>

        {/* ── Main Bento Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-20">
          
          {/* Left Column: Direct Channels & Studio Bento (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* 1. Priority Hero Channel: WhatsApp Fast-Track */}
            <div className="bg-gradient-to-br from-[#0C0D0E] via-[#141619] to-[#1E2024] border border-gray-800 rounded-3xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden group">
              {/* Subtle ambient glows */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#E25C38]/12 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] text-xl shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#25D366] block">
                      FASTEST RESPONSE
                    </span>
                    <span className="text-xs font-semibold text-gray-300">
                      Average reply: &lt;15 mins
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online Now
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-4 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400/40 shrink-0">
                  <Image
                    src="/mahin-ahmad.jpg"
                    alt="Mahin Ahmad — Lead Architect"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Mahin Ahmad</h3>
                  <span className="text-[11px] text-emerald-400 font-semibold">Founder &amp; Lead Full-Stack Architect</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 font-display">
                Instant WhatsApp Consultation
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal relative z-10">
                Discuss campaign goals, get an instant timeline estimate, and review live client references directly on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-extrabold py-3 px-5 rounded-2xl transition-all duration-200 shadow-md shadow-[#25D366]/20 cursor-pointer group/btn"
                >
                  <FaWhatsapp className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <a
                  href="tel:+8801828034555"
                  className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-gray-200 text-xs font-semibold py-3 px-4 rounded-2xl transition-colors border border-white/10"
                >
                  <FiPhone className="w-3.5 h-3.5 text-gray-300" />
                  <span>018280-34555</span>
                </a>
              </div>
            </div>

            {/* 2. Direct Channels Grid (Compact Tiles) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Direct Email */}
              <div className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-4.5 shadow-2xs hover:shadow-md hover:border-[#E25C38]/30 transition-all duration-200 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#E25C38]/10 flex items-center justify-center text-[#E25C38] shrink-0">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block truncate">info@websy.bd</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-gray-100 mt-1">
                  <a
                    href="mailto:info@websy.bd"
                    className="text-[11px] font-bold text-[#E25C38] hover:text-[#C04826] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Compose Email</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-gray-300 text-xs">•</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[11px] font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Call or SMS */}
              <a
                href="tel:+8801828034555"
                className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-4.5 shadow-2xs hover:shadow-md hover:border-[#E25C38]/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#E25C38]/10 flex items-center justify-center text-[#E25C38] shrink-0 group-hover:scale-105 transition-transform">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Call or SMS</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block truncate">018280-34555</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 mt-1 flex items-center justify-between text-[11px] font-bold text-gray-500">
                  <span>10 AM – 11 PM</span>
                  <span className="text-[#E25C38] flex items-center gap-0.5">
                    <span>Call</span>
                    <FiExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* Facebook Page (Full Width on 2-col) */}
              <a
                href="https://www.facebook.com/profile.php?id=61590418449990"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-4.5 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#1877F2] shrink-0 group-hover:scale-105 transition-transform">
                    <FaFacebook className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Facebook Community</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900">Websy.bd (Official Page)</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#1877F2] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>Visit Page</span>
                  <FiExternalLink className="w-3 h-3" />
                </span>
              </a>

            </div>

            {/* 3. Studio Guarantees Bento (4 Proof Points) */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-5 sm:p-6 shadow-xs">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block mb-4">
                WEBSY QUALITY DIRECTIVES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guarantees.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${item.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-900 leading-snug">{item.title}</h4>
                        <p className="text-[11px] text-gray-500 leading-normal mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Project Planner Proposal Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl shadow-gray-200/40 relative">
              
              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#E25C38] block mb-1">
                  PROJECT SPECIFICATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight font-display">
                  Request a Proposal &amp; Quote
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill in your details below and we&apos;ll send an exact proposal, architecture blueprint, and timeline within 24 hours.
                </p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-name" className="text-xs font-bold text-gray-700">
                        Your Name <span className="text-[#E25C38]">*</span>
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-gray-900 placeholder-gray-400 border border-gray-200/90 rounded-xl px-4 py-2.5 min-h-[44px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E25C38]/15 focus:border-[#E25C38] text-sm font-semibold"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-email" className="text-xs font-bold text-gray-700">
                        Email Address <span className="text-[#E25C38]">*</span>
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        required
                        placeholder="jane@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-gray-900 placeholder-gray-400 border border-gray-200/90 rounded-xl px-4 py-2.5 min-h-[44px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E25C38]/15 focus:border-[#E25C38] text-sm font-semibold"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-type" className="text-xs font-bold text-gray-700">
                        What are you looking to build?
                      </label>
                      <div className="relative">
                        <select
                          id="field-type"
                          required
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#F8FAFC] text-gray-900 border border-gray-200/90 rounded-xl px-4 py-2.5 min-h-[44px] appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E25C38]/15 focus:border-[#E25C38] text-xs sm:text-sm font-semibold pr-10"
                        >
                          <option value="landing-ad">Single-Product Campaign Landing Page (Affordable Fast-Track)</option>
                          <option value="ecommerce-store">Standard E-Commerce Store (Turnkey Brand Setup)</option>
                          <option value="custom-ecommerce">Advanced Custom E-Commerce &amp; Platform</option>
                          <option value="redesign-speed">Store Redesign &amp; Speed Optimization</option>
                          <option value="portfolio-brand">Portfolio / Personal Brand Website</option>
                          <option value="custom-app">Custom Full-Stack Web Application</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" aria-hidden="true">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-budget" className="text-xs font-bold text-gray-700">
                        Anticipated Budget Tier
                      </label>
                      <div className="relative">
                        <select
                          id="field-budget"
                          required
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#F8FAFC] text-gray-900 border border-gray-200/90 rounded-xl px-4 py-2.5 min-h-[44px] appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E25C38]/15 focus:border-[#E25C38] text-xs sm:text-sm font-semibold pr-10"
                        >
                          <option value="starter">Budget-Friendly / Starter (Campaign Page)</option>
                          <option value="growth">Cost-Effective Growth (Standard Store)</option>
                          <option value="custom">Advanced Custom Store &amp; Workflows</option>
                          <option value="enterprise">Enterprise Scaled Architecture</option>
                          <option value="consult">Looking for Best Affordable Quote</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" aria-hidden="true">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="field-message" className="text-xs font-bold text-gray-700">
                      Tell us about your project or references
                    </label>
                    <textarea
                      id="field-message"
                      rows={4}
                      placeholder="Share details about your products, ad funnel goals, or references (e.g., FLESHPOTS or Arambar Saili style)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8FAFC] text-gray-900 placeholder-gray-400 border border-gray-200/90 rounded-xl px-4 py-3 min-h-[90px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E25C38]/15 focus:border-[#E25C38] resize-vertical text-sm font-semibold"
                    />
                  </div>

                  {/* Actions Row: Submit via Email and WhatsApp Fast-Track */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0C0D0E] hover:bg-gray-800 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-md shadow-gray-900/10 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Preparing...' : 'Submit Project Inquiry'}</span>
                      <FiArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3.5 px-5 rounded-2xl transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
                    >
                      <FaWhatsapp className="w-4 h-4 shrink-0" />
                      <span>Discuss on WhatsApp</span>
                    </button>
                  </div>

                  {/* Trust Footer */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-gray-400 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <FiShield className="w-3.5 h-3.5 text-emerald-500" />
                      <span>100% Confidential • Zero Spam</span>
                    </span>
                    <span>Direct Developer Review • No Middlemen</span>
                  </div>

                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600 shadow-sm">
                    <FiCheck className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-display">
                    Inquiry Generated!
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Your email client should have opened with your inquiry. Want an even faster response? Connect with us on WhatsApp right now.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold py-3 px-6 rounded-xl transition-all duration-200 gap-2 cursor-pointer shadow-sm"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', projectType: 'landing-ad', budget: 'starter', message: '' });
                        setIsSuccess(false);
                      }}
                      className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold py-3 px-5 rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ── 'What Happens Next' 3-Step Process ─────────────────────── */}
        <section className="border-t border-gray-200/80 pt-16 mb-20" aria-labelledby="process-heading">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#E25C38] block mb-1.5">
              SEAMLESS FULFILLMENT
            </span>
            <h2 id="process-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight font-display">
              What Happens Next?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Here is how we transition from your first message to a live, conversion-tuned web flagship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelineSteps.map((step, sIdx) => (
              <div key={sIdx} className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-extrabold text-[#E25C38] bg-[#E25C38]/10 border border-[#E25C38]/20 px-3 py-1 rounded-full">
                      STEP {step.step}
                    </span>
                    <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1">
                      <FiClock className="w-3 h-3 text-gray-400" />
                      {step.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Direct FAQ Section ────────────────────────────────────── */}
        <section className="border-t border-gray-200/80 pt-16" aria-labelledby="faq-heading">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#E25C38] block mb-1.5">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight font-display">
              Questions Before Starting?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Quick answers about timeline, courier sync, payment gateways, and custom Next.js builds.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-900 font-display flex items-center gap-2.5">
                      <FiHelpCircle className="w-4 h-4 text-[#E25C38] shrink-0" />
                      {faq.q}
                    </span>
                    <FiChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E25C38]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F8FAFC]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
