export default function About() {
  const team = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO & Founder',
      desc: 'Obsessed with retail UX and scaling small business revenues.',
      initials: 'SJ',
    },
    {
      name: 'Alex Mercer',
      role: 'Lead Developer',
      desc: 'Next.js specialist crafting lightning-fast, pixel-perfect code.',
      initials: 'AM',
    },
    {
      name: 'Chloe Chen',
      role: 'UI/UX Designer',
      desc: 'Creating high-fidelity, premium layouts that command attention.',
      initials: 'CC',
    },
    {
      name: 'Marcus Vance',
      role: 'E-commerce Strategist',
      desc: 'Optimizing checkout friction and checkout conversions.',
      initials: 'MV',
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Copywriter',
      desc: 'Engineering persuasive brand copy that triggers action.',
      initials: 'ER',
    },
  ];

  return (
    <main id="main-content" className="bg-[#050505] py-16 md:py-24">
      <section className="max-w-7xl mx-auto px-6 md:px-8" aria-labelledby="about-headline">
        
        {/* Page Header */}
        <header className="mb-20 max-w-3xl">
          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
              Our Team
            </span>
          </div>
          <h1
            id="about-headline"
            className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight"
          >
            Built by humans,<br />
            engineered for <span className="text-primary bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent font-normal">growth.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-[50ch]">
            We are a tight-knit collective of specialists combining design precision
            with high-performance engineering to scale ambitious storefronts.
          </p>
        </header>

        {/* 5-Column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" role="list" aria-label="Websy team members">
          {team.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              role="listitem"
            >
              {/* Profile placeholder using inline SVG avatar */}
              <div className="relative w-full aspect-square rounded-xl bg-zinc-950 flex items-center justify-center border border-zinc-800/60 mb-6 group-hover:border-primary/20 transition-colors duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="text-3xl font-light text-zinc-600 group-hover:text-primary transition-colors duration-300 select-none">
                  {member.initials}
                </span>
              </div>

              <h2 className="text-base font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h2>
              
              <p className="text-xs font-semibold text-zinc-500 tracking-wide uppercase mb-3">
                {member.role}
              </p>
              
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {member.desc}
              </p>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}
