export default function Services() {
  return (
    <main id="main-content" className="py-16 md:py-24 bg-[#050505]">
      <section className="max-w-7xl mx-auto px-6 md:px-8" aria-labelledby="services-headline">
        
        {/* Page Header */}
        <header className="mb-16 max-w-2xl">
          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
              What we do
            </span>
          </div>
          <h1
            id="services-headline"
            className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4 leading-tight"
          >
            Three specialities.<br />One team.
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
            We keep our focus narrow so every project gets the depth it deserves.
          </p>
        </header>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Services offered">
          
          {/* Card 1: E-commerce */}
          <article
            className="group flex flex-col items-start bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl p-8 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            role="listitem"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800/60 mb-6 text-primary group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8h4l5.5 22h21l4.5-16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="21" cy="36" r="2.5" stroke="currentColor" strokeWidth="2" />
                <circle cx="34" cy="36" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">E-commerce Websites</h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Full-featured online stores built to convert browsers into buyers.
              From product catalogues to checkout flows — every element is
              optimised for sales.
            </p>
          </article>

          {/* Card 2: Landing Pages */}
          <article
            className="group flex flex-col items-start bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl p-8 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            role="listitem"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800/60 mb-6 text-primary group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M14 20h20M14 26h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 34l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">Landing Pages</h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Single-page experiences engineered for one goal: conversion.
              Persuasive copy, proven layouts, and clear calls-to-action
              that drive action.
            </p>
          </article>

          {/* Card 3: Portfolios */}
          <article
            className="group flex flex-col items-start bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl p-8 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            role="listitem"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800/60 mb-6 text-primary group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2" />
                <rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2" />
                <rect x="26" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">Portfolio Sites</h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Your work deserves a showcase as polished as the work itself.
              We craft portfolio sites that command attention and win
              the right clients.
            </p>
          </article>

        </div>
      </section>
    </main>
  );
}
