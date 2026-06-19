import Link from 'next/link';
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiTypescript, SiGit } from "react-icons/si";

export default function Services() {
  return (
    <main id="main-content" className="py-16 md:py-24 bg-white">
      <section className="max-w-7xl mx-auto px-6 md:px-8" aria-labelledby="services-headline">
        
        {/* Page Header */}
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
              What we do
            </span>
          </div>
          <h1
            id="services-headline"
            className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4 leading-tight"
          >
            Three specialities.<br />One team.
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed">
            We keep our focus narrow so every project gets the depth it deserves.
          </p>
        </header>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Services offered">
          
          {/* Card 1: Landing Pages & Portfolios */}
          <article
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            aria-label="Landing Pages & Portfolios service"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src="/funnel-mockup.png"
                alt="Optimized conversion funnel visualization inside a phone mockup"
                width={800}
                height={500}
                priority
              />
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-600 tracking-wider uppercase shadow-sm">
                Starting at <span className="text-primary font-bold text-xs ml-0.5">৳3,999</span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-3 py-1">
                  High Conversion
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Landing Pages &amp; Portfolios</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                Built for rapid deployment and high conversion. Showcase your work, services, or personal brand with a stunning layout designed to capture leads, signups, or sales from ad traffic.
              </p>

              {/* Tech Stack Row */}
              <div className="flex items-center gap-3 mt-4 mb-5 pt-4 border-t border-gray-100">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold">STACK:</span>
                <div className="flex items-center gap-2.5">
                  <SiNextdotjs className="text-gray-900 w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] cursor-pointer" aria-label="Next.js" />
                  <SiReact className="text-[#61DAFB] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.45)] cursor-pointer" aria-label="React" />
                  <SiTailwindcss className="text-[#06B6D4] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] cursor-pointer" aria-label="Tailwind CSS" />
                  <SiJavascript className="text-[#F7DF1E] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(247,223,30,0.45)] cursor-pointer" aria-label="JavaScript" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors"
                >
                  Custom options ↗
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors duration-200"
                >
                  Get a Landing Page Proposal →
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2: Custom E-Commerce */}
          <article
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            aria-label="Custom E-Commerce service"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src="/ecommerce-mockup.png"
                alt="Product grid layout inside a laptop mockup"
                width={800}
                height={500}
              />
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-600 tracking-wider uppercase shadow-sm">
                Starting at <span className="text-primary font-bold text-xs ml-0.5">৳9,999</span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-3 py-1">
                  Full Storefront
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Custom E-Commerce</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                Custom UI, fast load times, and a seamless checkout experience. We build high-converting storefronts tailored to sell your products and drive revenue with lightning fast load speeds.
              </p>

              {/* Tech Stack Row */}
              <div className="flex items-center gap-3 mt-4 mb-5 pt-4 border-t border-gray-100">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold">STACK:</span>
                <div className="flex items-center gap-2.5">
                  <SiNextdotjs className="text-gray-900 w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] cursor-pointer" aria-label="Next.js" />
                  <SiReact className="text-[#61DAFB] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.45)] cursor-pointer" aria-label="React" />
                  <SiTailwindcss className="text-[#06B6D4] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] cursor-pointer" aria-label="Tailwind CSS" />
                  <SiNodedotjs className="text-[#339933] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(51,153,51,0.45)] cursor-pointer" aria-label="Node.js" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors"
                >
                  Custom options ↗
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors duration-200"
                >
                  Get an E-Commerce Proposal →
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3: Advanced/Full-Stack Applications */}
          <article
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            aria-label="Advanced Full-Stack service"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src="/database-mockup.png"
                alt="Complex database architecture schema diagram"
                width={800}
                height={500}
              />
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-600 tracking-wider uppercase shadow-sm">
                Custom Pricing <span className="text-primary font-bold text-xs ml-0.5">৳49,999+</span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-3 py-1">
                  Enterprise
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Advanced Full-Stack</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                Complex backends, high security, and massive scale. We engineer custom portals, management systems, and web apps configured to solve your specific database and scaling requirements.
              </p>

              {/* Tech Stack Row */}
              <div className="flex items-center gap-3 mt-4 mb-5 pt-4 border-t border-gray-100">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold">STACK:</span>
                <div className="flex items-center gap-2.5">
                  <SiNextdotjs className="text-gray-900 w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] cursor-pointer" aria-label="Next.js" />
                  <SiTypescript className="text-[#3178C6] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(49,120,198,0.45)] cursor-pointer" aria-label="TypeScript" />
                  <SiTailwindcss className="text-[#06B6D4] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] cursor-pointer" aria-label="Tailwind CSS" />
                  <SiGit className="text-[#F05032] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(240,80,50,0.45)] cursor-pointer" aria-label="Git" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors"
                >
                  Custom options ↗
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors duration-200"
                >
                  Get a Full-Stack Proposal →
                </Link>
              </div>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
