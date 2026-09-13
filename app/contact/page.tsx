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
  FiCopy,
  FiClock,
  FiMessageSquare,
  FiMapPin
} from 'react-icons/fi';

const topics = [
  { id: 'landing', label: '🚀 Campaign Landing Page', msg: 'Hi Mahin! I need a fast-track single-product campaign landing page with courier sync.' },
  { id: 'ecommerce', label: '🛒 E-Commerce Store', msg: 'Hi Mahin! I want to build a full e-commerce storefront with cart drawer and local checkout.' },
  { id: 'redesign', label: '⚡ Speed & Redesign', msg: 'Hi Mahin! I want to redesign and speed-optimize my existing store on Next.js.' },
  { id: 'general', label: '💬 General Inquiry', msg: 'Hi Mahin! I have a project inquiry and would like to discuss specifications.' },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('landing');

  const activeTopic = topics.find(t => t.id === selectedTopic) || topics[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@websy.bd');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/8801828034555?text=${encodeURIComponent(activeTopic.msg)}`;
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: activeTopic.id,
        content_category: 'WhatsApp Contact',
        currency: 'BDT'
      });
    }
    window.open(url, '_blank');
  };

  return (
    <main 
      id="main-content" 
      className="bg-[#F8FAFC] text-gray-900 min-h-screen pt-[76px] sm:pt-[92px] md:pt-[104px] pb-16 sm:pb-24 relative overflow-hidden flex flex-col justify-between selection:bg-red-500/20 selection:text-red-600"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        
        {/* ── Minimal Editorial Header (Mobile First) ─────────────────── */}
        <section className="text-center mb-8 sm:mb-12" aria-labelledby="contact-heading">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111] bg-white border border-gray-200 rounded-full px-3.5 py-1 shadow-2xs mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Developer Access • Response &lt;15 mins</span>
          </div>

          <h1
            id="contact-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.12] mb-2 font-display"
          >
            Let&apos;s talk about your{' '}
            <span className="text-[#DC2626]">
              next project.
            </span>
          </h1>

          <p className="text-xs sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md mx-auto">
            Direct developer consultation with lead architect Mahin Ahmad. Zero sales intermediaries.
          </p>
        </section>

        {/* ── Main Contact Matrix (Mobile-First Clean Bento) ──────────── */}
        <div className="space-y-4">

          {/* 1. Priority Hero Card: WhatsApp Direct Fast-Track */}
          <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-gray-900 shadow-md relative overflow-hidden transition-all">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/40 shrink-0">
                  <Image
                    src="/mahin-ahmad.jpg"
                    alt="Mahin Ahmad"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm sm:text-base font-bold text-[#111111] font-display">Mahin Ahmad</h2>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.2 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Online
                    </span>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold">Founder &amp; Lead Architect</span>
                </div>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-neutral-500">
                <span className="text-[10px] uppercase tracking-widest text-[#20BD5A] font-bold block">FASTEST RESPONSE</span>
                <span className="text-[#111111] font-semibold">WhatsApp SLA &lt;15 Mins</span>
              </div>
            </div>

            {/* Interactive Topic Selector Chips */}
            <div className="mb-5">
              <label className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                Select your inquiry type:
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {topics.map((topic) => {
                  const isSelected = selectedTopic === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`text-xs px-3 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer font-medium border ${
                        isSelected
                          ? 'bg-[#25D366]/10 border-[#25D366]/60 text-emerald-900 font-semibold'
                          : 'bg-gray-50 border-gray-200 text-neutral-600 hover:text-black'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3.5 px-5 rounded-full transition-all shadow-sm cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                <span>Message on WhatsApp</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+8801828034555"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#111111] text-xs sm:text-sm font-semibold py-3.5 px-5 rounded-full transition-colors border border-gray-200"
              >
                <FiPhone className="w-3.5 h-3.5 text-neutral-500" />
                <span className="font-mono">018280-34555</span>
              </a>
            </div>

          </div>

          {/* 2. Direct Channels: Email & Direct Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Direct Email Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#DC2626]">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    Studio Inbox
                  </span>
                </div>

                <span className="text-xs text-neutral-500 block">Official Inquiries</span>
                <span className="text-base sm:text-lg font-bold text-[#111111] font-mono block mb-4">
                  info@websy.bd
                </span>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <a
                  href="mailto:info@websy.bd"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#111111] hover:bg-black text-white text-xs font-bold py-2.5 px-3 rounded-full transition-colors"
                >
                  <span>Compose Mail</span>
                  <FiExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-neutral-700 text-xs font-semibold py-2.5 px-3.5 rounded-full transition-colors border border-gray-200 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone / Call Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#DC2626]">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.2 rounded-full flex items-center gap-1">
                    <FiClock className="w-3 h-3 text-emerald-600" />
                    10 AM – 11 PM
                  </span>
                </div>

                <span className="text-xs text-neutral-500 block">Direct Call or SMS</span>
                <span className="text-base sm:text-lg font-bold text-[#111111] font-mono block mb-4">
                  018280-34555
                </span>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <a
                  href="tel:+8801828034555"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold py-2.5 px-3 rounded-full transition-colors shadow-2xs"
                >
                  <span>Call Now</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="sms:+8801828034555"
                  className="inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-neutral-700 text-xs font-semibold py-2.5 px-3.5 rounded-full transition-colors border border-gray-200"
                >
                  <FiMessageSquare className="w-3.5 h-3.5 text-neutral-500" />
                  <span>SMS</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ── Studio Sub-Footer ───────────────────────────────────────── */}
        <div className="mt-8 pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-neutral-500">
          <div className="flex items-center gap-1.5">
            <FiMapPin className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Dhaka, Bangladesh • GMT+6</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.facebook.com/profile.php?id=61590418449990" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-600 hover:text-black transition-colors"
            >
              <FaFacebook className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Websy.bd on Facebook</span>
              <FiExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
