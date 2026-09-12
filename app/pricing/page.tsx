import Pricing from '@/components/Pricing';
import Link from 'next/link';
import { ShieldCheck, Sparkles, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: "Affordable E-Commerce Packages & Scope Estimator | Websy",
  description: "Explore affordable Next.js e-commerce packages and estimate your custom project scope with automated courier APIs, Meta CAPI, and zero recurring platform fees."
};

export default function PricingPage() {
  return (
    <main id="main-content" className="pt-[70px] sm:pt-[84px] md:pt-[92px] bg-white">
      {/* ── Main Pricing & Scope Calculator ── */}
      <Pricing />

      {/* ── Custom Enterprise Architecture Banner ── */}
      <section className="py-16 sm:py-20 bg-[#F6F7F9] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E25C38] mb-3">
                <Sparkles className="w-4 h-4" /> Need a tailored enterprise SLA?
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">
                Talk directly with our lead full-stack engineer.
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Have specific multi-warehouse courier logic, ERP inventory syncing, or custom merchant gateway requirements? We architect custom solutions under transparent fixed contracts with lean studio rates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 relative z-10 w-full sm:w-auto">
              <a
                href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20an%20affordable%20custom%20e-commerce%20project%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#111111] hover:bg-neutral-100 text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                Schedule Architecture Call
              </Link>
            </div>

            {/* Ambient Burnt Ember Glow */}
            <div 
              className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full pointer-events-none" 
              style={{ background: 'radial-gradient(circle, rgba(226,92,56,0.16) 0%, transparent 70%)' }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
