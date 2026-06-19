import Image from 'next/image';

export default function Work() {
  return (
    <main id="main-content" className="bg-[#050505] py-16 md:py-24">
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
            className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4 leading-tight"
          >
            Three live projects.<br />Real results.
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
            Every site below is live and driving real business outcomes.
            Click through to see the work in action.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Henley Zone */}
          <article
            className="group flex flex-col bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            aria-label="Henley Zone — E-commerce project"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
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
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-[10px] font-semibold text-white tracking-wider uppercase">
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
              <h2 className="text-xl font-semibold text-white mb-2">Henley Zone</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                A full-featured online store for a premium fashion brand.
                Built for speed, mobile-first, and optimised to convert
                visitors into customers.
              </p>
              
              {/* Tech Stack Row */}
              <div className="flex items-center gap-3 mt-4 mb-5">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">STACK:</span>
                <div className="flex items-center gap-2.5">
                  {/* Next.js */}
                  <svg
                    className="w-5 h-5 text-white transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Next.js"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.75 18.25l-5.69-7.25h-1.06v5h1.25v-3.75l4.31 5.5c-.38.16-.78.29-1.2.38l-4.36-5.56V16h-1.25V8h2.09l5.37 6.84V8h1.25v10.25z" />
                  </svg>
                  {/* React */}
                  <svg
                    className="w-5 h-5 text-[#61DAFB] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-label="React"
                  >
                    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />
                    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
                    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                  {/* Tailwind CSS */}
                  <svg
                    className="w-5 h-5 text-[#06B6D4] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Tailwind CSS"
                  >
                    <path d="M12 6.00002C9.40003 6.00002 7.80003 7.30002 7.20003 9.90002C8.10003 8.60002 9.20003 8.10002 10.5 8.40002C11.242 8.61202 11.7709 9.15573 12.3554 9.75716C13.308 10.7371 14.4429 11.9054 17.1 11.9054C19.7 11.9054 21.3 10.6054 21.9 8.00542C21 9.30542 19.9 9.80542 18.6 9.50542C17.858 9.29342 17.3291 8.74971 16.7446 8.14828C15.792 7.16831 14.6571 6.00002 12 6.00002ZM7.20003 11.9054C4.60003 11.9054 3.00003 13.2054 2.40003 15.8054C3.30003 14.5054 4.40003 14.0054 5.70003 14.3054C6.44203 14.5174 6.97092 15.0611 7.55543 15.6626C8.50803 15.6626 9.64293 17.8108 12.3 17.8108C14.9 17.8108 16.5 16.5108 17.1 13.9108C16.2 15.2108 15.1 15.7108 13.8 15.4108C13.058 15.1988 12.5291 14.6551 11.9446 14.0537C10.992 13.0737 9.85713 11.9054 7.20003 11.9054Z" />
                  </svg>
                  {/* Node.js */}
                  <svg
                    className="w-5 h-5 text-[#339933] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(51,153,51,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Node.js"
                  >
                    <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm-.9 17.5v-7.3L5 9.8l6.1 3.5v6.2zm1.8 0v-6.2l6.1-3.5-6.1 3.5v6.2z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-800/40">
                <a
                  href="https://henleyzone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-400 hover:text-primary transition-colors"
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
            className="group flex flex-col bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            aria-label="Glamora Beige — Premium landing page project"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
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
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-[10px] font-semibold text-white tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#E11D48]" />
                Live
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  Landing Page
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Glamora Beige</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                A minimalist, high-converting landing page for a luxury
                lifestyle brand. Restrained, editorial, and built for
                one purpose — driving sign-ups.
              </p>

              {/* Tech Stack Row */}
              <div className="flex items-center gap-3 mt-4 mb-5">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">STACK:</span>
                <div className="flex items-center gap-2.5">
                  {/* React */}
                  <svg
                    className="w-5 h-5 text-[#61DAFB] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-label="React"
                  >
                    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />
                    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
                    <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                  {/* Tailwind CSS */}
                  <svg
                    className="w-5 h-5 text-[#06B6D4] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Tailwind CSS"
                  >
                    <path d="M12 6.00002C9.40003 6.00002 7.80003 7.30002 7.20003 9.90002C8.10003 8.60002 9.20003 8.10002 10.5 8.40002C11.242 8.61202 11.7709 9.15573 12.3554 9.75716C13.308 10.7371 14.4429 11.9054 17.1 11.9054C19.7 11.9054 21.3 10.6054 21.9 8.00542C21 9.30542 19.9 9.80542 18.6 9.50542C17.858 9.29342 17.3291 8.74971 16.7446 8.14828C15.792 7.16831 14.6571 6.00002 12 6.00002ZM7.20003 11.9054C4.60003 11.9054 3.00003 13.2054 2.40003 15.8054C3.30003 14.5054 4.40003 14.0054 5.70003 14.3054C6.44203 14.5174 6.97092 15.0611 7.55543 15.6626C8.50803 15.6626 9.64293 17.8108 12.3 17.8108C14.9 17.8108 16.5 16.5108 17.1 13.9108C16.2 15.2108 15.1 15.7108 13.8 15.4108C13.058 15.1988 12.5291 14.6551 11.9446 14.0537C10.992 13.0737 9.85713 11.9054 7.20003 11.9054Z" />
                  </svg>
                  {/* JavaScript */}
                  <svg
                    className="w-5 h-5 text-[#F7DF1E] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(247,223,30,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="JavaScript"
                  >
                    <path d="M2 2h20v20H2V2zm12.586 16.204c0 1.294-1.077 1.796-2.586 1.796-1.578 0-2.545-.588-2.738-1.588h1.622c.11.517.586.828 1.116.828.588 0 .93-.207.93-.724v-6.516h1.666v6.204zm4.845.057c0 1.196-.93 1.743-2.457 1.743-1.42 0-2.316-.483-2.528-1.396h1.588c.11.458.557.656.973.656.458 0 .756-.168.756-.588 0-.39-.333-.518-1.096-.828-1.206-.497-2.073-.91-2.073-2.073 0-1.127.87-1.637 2.222-1.637 1.23 0 2.05.378 2.247 1.127h-1.564c-.11-.334-.458-.497-.756-.497-.43 0-.693.18-.693.52 0 .343.275.457.944.73 1.346.549 1.944.973 1.944 2.138z" />
                  </svg>
                  {/* Git */}
                  <svg
                    className="w-5 h-5 text-[#F05032] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(240,80,50,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Git"
                  >
                    <path d="M23.384 11.61L12.39.616a.548.548 0 00-.773 0L9.278 2.955l3.14 3.14a1.867 1.867 0 011.83 1.83 1.87 1.87 0 01-1.785 1.867l-2.584.004a1.859 1.859 0 01-1.83-1.83 1.862 1.862 0 01.597-1.373L5.5 3.447.616 8.33a.546.546 0 000 .773L11.61 20.096a.548.548 0 00.773 0l11.002-11.002a.546.546 0 000-.773h.001zM11.82 8.79a.933.933 0 001.32-.003.93.93 0 000-1.32.934.934 0 00-1.32 0 .93.93 0 000 1.323zM9.016 11.233a.935.935 0 001.322 0 .93.93 0 000-1.32.93.93 0 00-1.322 0 .933.933 0 000 1.32z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-800/40">
                <a
                  href="https://glamora-beige.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-400 hover:text-primary transition-colors"
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
            className="group flex flex-col bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            aria-label="Mahin Ahmad — Professional digital portfolio project"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
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
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-[10px] font-semibold text-white tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#E11D48]" />
                Live
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  Portfolio
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Mahin Ahmad</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                A clean, minimal personal portfolio for a full-stack developer.
                Designed to showcase technical projects with editorial precision
                and interactive depth.
              </p>

              {/* Tech Stack Row */}
              <div className="flex items-center gap-3 mt-4 mb-5">
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">STACK:</span>
                <div className="flex items-center gap-2.5">
                  {/* Next.js */}
                  <svg
                    className="w-5 h-5 text-white transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Next.js"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.75 18.25l-5.69-7.25h-1.06v5h1.25v-3.75l4.31 5.5c-.38.16-.78.29-1.2.38l-4.36-5.56V16h-1.25V8h2.09l5.37 6.84V8h1.25v10.25z" />
                  </svg>
                  {/* TypeScript */}
                  <svg
                    className="w-5 h-5 text-[#3178C6] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(49,120,198,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="TypeScript"
                  >
                    <path d="M2 2h20v20H2V2zm9.143 11.597h-2.22V18h-1.63v-4.403H5.07V12.23h6.073v1.367zm6.757 3.328c0 1.258-1.002 1.637-2.738 1.637-1.417 0-2.482-.477-2.673-1.396h1.593c.11.458.62.68 1.157.68.572 0 .973-.25.973-.668 0-.422-.38-.59-1.222-.859-1.272-.397-2.28-.847-2.28-2.138 0-1.127.91-1.666 2.457-1.666 1.34 0 2.222.428 2.408 1.22h-1.57c-.11-.383-.483-.564-1-.564-.52 0-.853.227-.853.6 0 .385.344.53 1.164.792 1.472.463 2.169.96 2.169 2.36z" />
                  </svg>
                  {/* Tailwind CSS */}
                  <svg
                    className="w-5 h-5 text-[#06B6D4] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Tailwind CSS"
                  >
                    <path d="M12 6.00002C9.40003 6.00002 7.80003 7.30002 7.20003 9.90002C8.10003 8.60002 9.20003 8.10002 10.5 8.40002C11.242 8.61202 11.7709 9.15573 12.3554 9.75716C13.308 10.7371 14.4429 11.9054 17.1 11.9054C19.7 11.9054 21.3 10.6054 21.9 8.00542C21 9.30542 19.9 9.80542 18.6 9.50542C17.858 9.29342 17.3291 8.74971 16.7446 8.14828C15.792 7.16831 14.6571 6.00002 12 6.00002ZM7.20003 11.9054C4.60003 11.9054 3.00003 13.2054 2.40003 15.8054C3.30003 14.5054 4.40003 14.0054 5.70003 14.3054C6.44203 14.5174 6.97092 15.0611 7.55543 15.6626C8.50803 15.6626 9.64293 17.8108 12.3 17.8108C14.9 17.8108 16.5 16.5108 17.1 13.9108C16.2 15.2108 15.1 15.7108 13.8 15.4108C13.058 15.1988 12.5291 14.6551 11.9446 14.0537C10.992 13.0737 9.85713 11.9054 7.20003 11.9054Z" />
                  </svg>
                  {/* Git */}
                  <svg
                    className="w-5 h-5 text-[#F05032] transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(240,80,50,0.45)] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Git"
                  >
                    <path d="M23.384 11.61L12.39.616a.548.548 0 00-.773 0L9.278 2.955l3.14 3.14a1.867 1.867 0 011.83 1.83 1.87 1.87 0 01-1.785 1.867l-2.584.004a1.859 1.859 0 01-1.83-1.83 1.862 1.862 0 01.597-1.373L5.5 3.447.616 8.33a.546.546 0 000 .773L11.61 20.096a.548.548 0 00.773 0l11.002-11.002a.546.546 0 000-.773h.001zM11.82 8.79a.933.933 0 001.32-.003.93.93 0 000-1.32.934.934 0 00-1.32 0 .93.93 0 000 1.323zM9.016 11.233a.935.935 0 001.322 0 .93.93 0 000-1.32.93.93 0 00-1.322 0 .933.933 0 000 1.32z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-800/40">
                <a
                  href="https://mahinahmad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-400 hover:text-primary transition-colors"
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
      <section className="bg-[#0f0f0f] border-y border-zinc-800/40 py-16 md:py-24" aria-labelledby="ecommerce-headline">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <header className="mb-16 text-center max-w-2xl mx-auto">
            <div className="mb-4">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
                E-commerce Specialists
              </span>
            </div>
            <h2
              id="ecommerce-headline"
              className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4 leading-tight"
            >
              Built to sell.<br />Optimised to grow.
            </h2>
            <p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
              Every e-commerce site we build is engineered around one metric
              — revenue. We obsess over the details that move the needle.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-[#050505] border border-zinc-800/40 rounded-2xl hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6C12.27 6 6 12.27 6 20s6.27 14 14 14 14-6.27 14-14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M26 6l4 4-4 4M30 10H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 15v5l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">Lightning Fast</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                Sub-2s load times via optimised assets, lazy loading, and lean
                code — because every second of delay costs conversions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-[#050505] border border-zinc-800/40 rounded-2xl hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="4" width="16" height="32" rx="3" stroke="currentColor" strokeWidth="1.75" />
                  <circle cx="20" cy="31" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">Mobile-First</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                Over 70% of e-commerce traffic is mobile. We design for the
                smallest screen first, then scale up beautifully.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-[#050505] border border-zinc-800/40 rounded-2xl hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1.75" />
                  <path d="M26 26l8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M14 18h8M18 14v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">SEO-Ready</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                Semantic HTML, proper schema markup, and Core Web Vitals scores
                that earn organic traffic from day one.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group flex flex-col items-start gap-4 p-8 bg-[#050505] border border-zinc-800/40 rounded-2xl hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
              <div className="text-primary opacity-90">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 28l8-8 6 6 10-14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 14h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">Conversion-Tuned</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
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
