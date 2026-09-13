import Link from 'next/link';
import Services from '@/components/Services';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiSupabase, 
  SiVercel, 
  SiNodedotjs, 
  SiGit 
} from "react-icons/si";
import { 
  FiCheck, 
  FiArrowRight, 
  FiShield, 
  FiExternalLink, 
  FiZap, 
  FiLayers, 
  FiClock, 
  FiCode 
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Services & Core Capabilities | Websy",
  description: "End-to-end digital storefronts, Meta Pixel CAPI, automated logistics integrations, and custom Next.js web applications engineered for high conversion."
};

export default function ServicesPage() {
  const serviceTiers = [
    {
      id: "landing",
      badge: "Affordable Fast-Track • 24–48h Delivery",
      title: "Ad Campaign & 1-Product Funnels",
      desc: "Laser-focused, ultra-fast sales landing pages designed specifically for Facebook, Instagram, and TikTok advertising campaigns to drive immediate conversions on a lean budget.",
      bullets: [
        "1-Click Cash on Delivery & bKash checkout drawer",
        "Sub-1s mobile page speed (<650ms Core Web Vitals)",
        "Interactive color/size variant swatches & size chips",
        "District-wise automated inside/outside Dhaka shipping rates",
        "Meta Pixel & TikTok Pixel Server-Side CAPI tracking",
        "Direct WhatsApp & FB Messenger instant order routing"
      ],
      liveExamples: [
        { name: "Glamora Beige (Ad Campaign)", url: "https://glamora-beige.vercel.app" },
        { name: "JHT HUB (Halal Attar Combo)", url: "https://jhthub.vercel.app/" },
        { name: "আড়ম্বর শৈলী (Ethnic Fashion)", url: "https://arambarsaili.vercel.app/" },
        { name: "অঙ্গবিলাস (Dark Luxury Apparel)", url: "https://ongobilash.vercel.app/" }
      ],
      cta: "Launch Campaign Storefront",
      accent: "#E25C38"
    },
    {
      id: "ecommerce",
      badge: "Cost-Effective All-In-One • Complete Store",
      title: "Custom Brand E-Commerce Storefronts",
      desc: "Full-featured online stores built for clothing, home decor, beauty, electronics, and lifestyle brands. Engineered for smooth browsing, easy catalog management, and high checkout conversion.",
      bullets: [
        "Multi-product catalog with category filters & dynamic search",
        "Dynamic cart drawer & frictionless 1-page checkout",
        "Limited-time flash sale countdown timers & stock counters",
        "Video unboxing reels & verified customer photo review feed",
        "Secure admin dashboard for order management & inventory sync",
        "Automated customer invoice generation and PDF download"
      ],
      liveExamples: [
        { name: "FLESHPOTS (148K+ Community Store)", url: "https://fleshpots.vercel.app/" },
        { name: "Henley Zone (Apparel Storefront)", url: "https://henleyzone.com" }
      ],
      cta: "Build Custom Storefront",
      accent: "#111111"
    },
    {
      id: "fullstack",
      badge: "Tailored Architecture • Enterprise Scale",
      title: "Full-Stack Custom Web Applications & Courier Systems",
      desc: "Bespoke Next.js web applications, client portals, automated courier workflows, and enterprise management tools built around your exact business requirements at lean studio rates.",
      bullets: [
        "Steadfast, Pathao & RedX automated consignment dispatch API",
        "Merchant payment gateways (SSLCommerz, bKash Merchant, Nagad Direct)",
        "Custom administrative CRM & real-time sales profit analytics",
        "Customer authentication portals & SMS tracking notifications",
        "100% code ownership on GitHub with zero monthly platform fees"
      ],
      liveExamples: [
        { name: "FLESHPOTS Platform (148K+ Audience)", url: "https://fleshpots.vercel.app/" },
        { name: "TIARA Store (Luxury Modest Fashion)", url: "https://tiarashop.vercel.app/" }
      ],
      cta: "Engineer Custom Architecture",
      accent: "#0C0D0E"
    }
  ];

  return (
    <main id="main-content" className="pt-[70px] sm:pt-[84px] md:pt-[92px] bg-white">
      
      {/* ── FleexStudio Bento Grid Core Capabilities Section ── */}
      <Services />

      {/* ── Detailed Service Tiers & Production Proof ────────── */}
      <section className="py-20 sm:py-28 bg-white border-t border-neutral-200/80" aria-label="Detailed Service Tiers">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/90 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]">
                TRANSPARENT PRICING &amp; TIERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight leading-[1.1]">
              Engineered solutions for every stage of brand growth
            </h2>
            <p className="text-[#52525B] text-base sm:text-lg leading-relaxed mt-4">
              Transparent investment tiers with zero hidden agency markups or recurring builder lock-ins. Every project includes senior developer delivery and direct communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier) => (
              <div 
                key={tier.id}
                className="bg-[#FBFBFA] border border-neutral-200/80 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-neutral-300 transition-all duration-300 group"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/10 px-3 py-1 rounded-full mb-4">
                    {tier.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight mb-3">
                    {tier.title}
                  </h3>
                  <p className="text-[#52525B] text-sm leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-neutral-200/60">
                    {tier.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-snug">
                        <FiCheck className="w-4 h-4 text-[#E25C38] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {tier.liveExamples && (
                    <div className="mb-8 p-4 rounded-2xl bg-white border border-neutral-200/80">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                        Live Production Proof:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {tier.liveExamples.map((ex, exIdx) => (
                          <a
                            key={exIdx}
                            href={ex.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-700 bg-neutral-50 hover:bg-neutral-100 hover:text-[#111111] border border-neutral-200 rounded-lg px-2.5 py-1 transition-colors"
                          >
                            <span>{ex.name}</span>
                            <FiExternalLink className="w-3 h-3 text-neutral-400" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-neutral-200/60">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center bg-[#111111] hover:bg-[#262626] text-white text-xs font-semibold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
                  >
                    <span>{tier.cta}</span>
                    <FiArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Enterprise & Agency White-Label Callout ─────────── */}
      <section className="py-16 sm:py-20 bg-[#F6F7F9] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E25C38] mb-3">
                <FiShield className="w-4 h-4" /> Agency White-Label &amp; Bespoke Builds
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">
                Are you an agency or require custom digital systems?
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                We partner with digital marketing agencies, creators, and brands to build 100% white-labeled Next.js websites, corporate portals, and custom web applications under strict confidentiality and rapid 24–48h turnaround SLAs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 relative z-10 w-full sm:w-auto">
              <a
                href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20an%20agency%20white-label%20or%20custom%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Partner on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#111111] hover:bg-neutral-100 text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm"
              >
                Contact Engineers
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
