import Image from 'next/image';
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiTypescript, SiJavascript, SiGit } from "react-icons/si";


export default function Work() {
  return (
    <main id="main-content" className="bg-white py-16 md:py-24">
      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32" aria-labelledby="work-headline">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
              Our Work
            </span>
          </div>
          <h1
            id="work-headline"
            className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4 leading-tight"
          >
            Three live projects.<br />Real results.
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
            Every site below is live and driving real business outcomes.
            Click through to see the work in action.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Henley Zone */}
          <article
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            aria-label="Henley Zone — E-commerce project"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                className="w-full h-full object-cover transition-all duration-500 absolute inset-0 z-10 group-hover:opacity-0 group-hover:scale-[1.03]"
                src="/henley-mockup.png"
                alt="Preview of Henley Zone e-commerce website"
                width={800}
                height={500}
                priority
              />
              <Image
                className="w-full h-full object-cover transition-all duration-500 absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-hover:scale-[1.03]"
                src="/henley-mockup2.png"
                alt="Secondary preview of Henley Zone"
                width={800}
                height={500}
              />
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 tracking-wider uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#E11D48]" />
                Live
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-3 py-1">
                  E-commerce
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Henley Zone</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                A full-featured online store for a premium fashion brand.
                Built for speed, mobile-first, and optimised to convert
                visitors into customers.
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
                <a
                  href="https://henleyzone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors"
                >
                  henleyzone.com ↗
                </a>
                <a
                  href="https://henleyzone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors duration-200"
                >
                  View Live Site →
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: Glamora Beige */}
          <article
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            aria-label="Glamora Beige — Premium landing page project"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                className="w-full h-full object-cover transition-all duration-500 absolute inset-0 z-10 group-hover:opacity-0 group-hover:scale-[1.03]"
                src="/glamora-mockup.png"
                alt="Preview of Glamora Beige minimalist landing page"
                width={800}
                height={500}
              />
              <Image
                className="w-full h-full object-cover transition-all duration-500 absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-hover:scale-[1.03]"
                src="/glamora-mockup2.png"
                alt="Secondary preview of Glamora Beige"
                width={800}
                height={500}
              />
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 tracking-wider uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#E11D48]" />
                Live
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                  Landing Page
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Glamora Beige</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                A minimalist, high-converting landing page for a luxury
                lifestyle brand. Restrained, editorial, and built for
                one purpose — driving sign-ups.
              </p>

              {/* Tech Stack Row */}
              <div className="flex items-center gap-3 mt-4 mb-5 pt-4 border-t border-gray-100">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold">STACK:</span>
                <div className="flex items-center gap-2.5">
                  <SiReact className="text-[#61DAFB] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.45)] cursor-pointer" aria-label="React" />
                  <SiTailwindcss className="text-[#06B6D4] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] cursor-pointer" aria-label="Tailwind CSS" />
                  <SiJavascript className="text-[#F7DF1E] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(247,223,30,0.45)] cursor-pointer" aria-label="JavaScript" />
                  <SiGit className="text-[#F05032] w-5 h-5 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(240,80,50,0.45)] cursor-pointer" aria-label="Git" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <a
                  href="https://glamora-beige.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors"
                >
                  glamora-beige.vercel.app ↗
                </a>
                <a
                  href="https://glamora-beige.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors duration-200"
                >
                  View Live Site →
                </a>
              </div>
            </div>
          </article>

          {/* Card 3: Mahin Ahmad */}
          <article
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            aria-label="Mahin Ahmad — Professional digital portfolio project"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
              <Image
                className="w-full h-full object-cover transition-all duration-500 absolute inset-0 z-10 group-hover:opacity-0 group-hover:scale-[1.03]"
                src="/mahin-mockup.png"
                alt="Preview of Mahin Ahmad personal portfolio website"
                width={800}
                height={500}
              />
              <Image
                className="w-full h-full object-cover transition-all duration-500 absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-hover:scale-[1.03]"
                src="/mahin-mockup2.png"
                alt="Secondary preview of Mahin Ahmad"
                width={800}
                height={500}
              />
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 tracking-wider uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#E11D48]" />
                Live
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                  Portfolio
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Mahin Ahmad</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                A clean, minimal personal portfolio for a full-stack developer.
                Designed to showcase technical projects with editorial precision
                and interactive depth.
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
                <a
                  href="https://mahinahmad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors"
                >
                  mahinahmad.com ↗
                </a>
                <a
                  href="https://mahinahmad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors duration-200"
                >
                  View Live Site →
                </a>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* E-commerce Band */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 md:py-24" aria-labelledby="ecommerce-headline">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <header className="mb-16 text-center max-w-2xl mx-auto">
            <div className="mb-4">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
                E-commerce Specialists
              </span>
            </div>
            <h2
              id="ecommerce-headline"
              className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-4 leading-tight"
            >
              Built to sell.<br />Optimised to grow.
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
              Every e-commerce site we build is engineered around one metric
              — revenue. We obsess over the details that move the needle.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6C12.27 6 6 12.27 6 20s6.27 14 14 14 14-6.27 14-14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M26 6l4 4-4 4M30 10H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 15v5l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900">Lightning Fast</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Sub-2s load times via optimised assets, lazy loading, and lean
                code — because every second of delay costs conversions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="4" width="16" height="32" rx="3" stroke="currentColor" strokeWidth="1.75" />
                  <circle cx="20" cy="31" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900">Mobile-First</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Over 70% of e-commerce traffic is mobile. We design for the
                smallest screen first, then scale up beautifully.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1.75" />
                  <path d="M26 26l8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M14 18h8M18 14v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900">SEO-Ready</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Semantic HTML, proper schema markup, and Core Web Vitals scores
                that earn organic traffic from day one.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 28l8-8 6 6 10-14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 14h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900">Conversion-Tuned</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Proven UX patterns — clear CTAs, trust signals, and frictionless
                checkout — that turn visitors into paying customers.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
