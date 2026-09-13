import Image from 'next/image';
import Link from 'next/link';
import AboutTeam from '@/components/AboutTeam';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: "About Us & Engineering Team | Websy",
  description: "Meet the engineering and design minds behind Websy. We build high-converting e-commerce storefronts, Meta Pixel CAPI tracking, and automated courier API workflows."
};

const studioValues = [
  {
    title: "Senior Specialists Only",
    badge: "Zero Bureaucracy",
    desc: "No junior handoffs or account managers. You collaborate directly with experienced engineers who architect and ship your production code."
  },
  {
    title: "Performance Over Bloat",
    badge: "Sub-800ms LCP",
    desc: "Every millisecond counts on paid ad traffic. We optimize Core Web Vitals to eliminate bounce rates and maximize checkout completions."
  },
  {
    title: "100% Code Ownership",
    badge: "Zero Platform Fees",
    desc: "No monthly Shopify app subscriptions or fragile WordPress plugins. You own all custom source code on your own GitHub repository."
  }
];

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-[70px] sm:pt-[84px] md:pt-[92px] bg-[#F8FAFC]">
      
      {/* ── Main About & Team Component ── */}
      <AboutTeam />

      {/* ── Studio Operating Principles (3 Essential Values) ── */}
      <section className="py-12 sm:py-20 bg-white border-t border-gray-200/80" aria-label="Studio Operating Principles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 shadow-2xs mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111]">
                HOW WE OPERATE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight leading-[1.14]">
              Uncompromising Standards
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Engineered for brand founders who treat page speed and automated logistics as core revenue drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {studioValues.map((v, i) => (
              <div 
                key={i}
                className="bg-[#F8FAFC] border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {v.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-[#111111] tracking-tight mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Direct Collaboration Hero Banner (Clean Light Bento) ── */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/40 shrink-0">
                  <Image
                    src="/mahin-suit.jpg"
                    alt="Mahin Ahmad — Founder & Lead Architect"
                    fill
                    className="object-cover object-[center_15%]"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#111111] leading-tight font-display">Mahin Ahmad</h4>
                  <p className="text-xs text-emerald-600 font-semibold">Founder &amp; Lead Architect</p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#111111] tracking-tight mb-1.5">
                Ready to engineer your web flagship?
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Connect directly with lead architect Mahin Ahmad to discuss your product niche and courier workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/8801828034555?text=Hi%20Mahin!%20I'd%20like%20to%20discuss%20an%20e-commerce%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-full transition-all shadow-sm whitespace-nowrap"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-full transition-all shadow-sm whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
