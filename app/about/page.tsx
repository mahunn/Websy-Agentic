import Image from 'next/image';
import Link from 'next/link';
import AboutTeam from '@/components/AboutTeam';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Code2, 
  Layers, 
  Clock, 
  Award,
  Sparkles
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: "About Us & Team | Websy",
  description: "Meet the engineering and design minds behind Websy. We build high-converting e-commerce storefronts, Meta Pixel CAPI tracking, and automated courier API workflows."
};

export default function AboutPage() {
  const values = [
    {
      title: "Senior Engineers Only",
      desc: "Zero junior handoffs or agency account manager friction. You work directly with experienced software engineers who write the production code.",
      badge: "Zero Bureaucracy"
    },
    {
      title: "Performance Over Fluff",
      desc: "We don't build generic bloated templates. Every millisecond of load time is optimized for sub-second checkout conversion.",
      badge: "Core Web Vitals"
    },
    {
      title: "100% Code Ownership",
      desc: "No proprietary platform lock-in or recurring monthly builder subscriptions. You own 100% of your source code on GitHub.",
      badge: "Zero Platform Fees"
    }
  ];

  return (
    <main id="main-content" className="pt-[70px] sm:pt-[84px] md:pt-[92px] bg-[#060D1F] text-white">
      
      {/* ── Main About & Team Section ── */}
      <AboutTeam />

      {/* ── Studio Values & Philosophy ── */}
      <section className="py-20 sm:py-28 bg-[#08122A] border-t border-blue-500/15" aria-label="Studio values">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1F44] border border-blue-400/25 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200">
                HOW WE OPERATE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              Uncompromising standards for modern commerce
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4">
              Built for forward-thinking brand founders who understand that page speed, automated logistics, and pristine ad tracking are the backbone of profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div 
                key={i}
                className="bg-[#0B1939]/80 border border-blue-400/20 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-blue-400/40 hover:bg-[#0E204A]/90 transition-all duration-300 group"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/10 border border-[#E25C38]/20 px-3 py-1 rounded-full inline-block mb-4">
                    {v.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-3">
                    {v.title}
                  </h3>
                  <p className="text-slate-300/85 text-sm sm:text-base leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Bottom Direct Contact Banner ── */}
      <section className="py-16 sm:py-20 bg-[#060D1F] border-t border-blue-500/15">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E25C38] mb-3">
                <Sparkles className="w-4 h-4" /> Ready to collaborate?
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Schedule an engineering discovery session today.
              </h3>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E25C38]/40 shrink-0">
                  <Image
                    src="/mahin-ahmad.jpg"
                    alt="Mahin Ahmad — Founder & Lead Full-Stack Architect"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Mahin Ahmad</h4>
                  <p className="text-xs text-zinc-400">Founder &amp; Lead Full-Stack Architect</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Connect directly with lead architect Mahin Ahmad to review your e-commerce requirements, courier integrations, and conversion goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 relative z-10 w-full sm:w-auto">
              <a
                href="https://wa.me/8801828034555?text=Hi%20Mahin!%20I'd%20like%20to%20discuss%20an%20e-commerce%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#111111] hover:bg-neutral-100 text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                Book Consultation
              </Link>
            </div>

            {/* Ambient Ember Glow */}
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
