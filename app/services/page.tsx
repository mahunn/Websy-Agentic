import Link from 'next/link';
import { SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiTypescript, SiGit } from "react-icons/si";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      id: "landing",
      badge: "Fast & High Conversion",
      title: "Landing Pages & Portfolios",
      desc: "Stunning, rapid-loading custom layouts built to capture leads, showcase personal brands, or launch ad-campaign landing pages.",
      bullets: [
        "Page speed load optimization under 1s",
        "Mobile-first responsive interface design",
        "Custom interactive forms and lead captures",
        "Clean semantic SEO structures"
      ],
      icon: SiReact,
      iconColor: "text-rose-500",
      bgGradient: "from-rose-50/40 to-transparent",
      cta: "Launch Your Landing Page",
      stack: [
        { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black" },
        { name: "React", icon: SiReact, color: "hover:text-[#61DAFB]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
        { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E]" }
      ]
    },
    {
      id: "ecommerce",
      badge: "High Conversion Stores",
      title: "Custom E-Commerce",
      desc: "Custom storefronts designed to sell products and manage inventories. We build fast, high-converting checkout experiences tailored to your store.",
      bullets: [
        "Instant checkout and cart transitions",
        "Secure payment gateway integrations",
        "Dynamic admin panels and product control",
        "Optimized database order handling"
      ],
      icon: SiNextdotjs,
      iconColor: "text-gray-900",
      bgGradient: "from-violet-50/40 to-transparent",
      cta: "Build Your Storefront",
      stack: [
        { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black" },
        { name: "React", icon: SiReact, color: "hover:text-[#61DAFB]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
        { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#339933]" }
      ]
    },
    {
      id: "fullstack",
      badge: "Scale & Performance",
      title: "Advanced Full-Stack Apps",
      desc: "Custom web applications built for business logic. We engineer internal management tools, interactive portals, and robust data dashboards.",
      bullets: [
        "Complex backend structures and endpoints",
        "Enhanced server safety and access control",
        "Live interactive data dashboard panels",
        "Tailored CMS admin dashboard tools"
      ],
      icon: SiTypescript,
      iconColor: "text-[#3178C6]",
      bgGradient: "from-blue-50/40 to-transparent",
      cta: "Engineer Your System",
      stack: [
        { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black" },
        { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
        { name: "Git", icon: SiGit, color: "hover:text-[#F05032]" }
      ]
    }
  ];

  return (
    <main id="main-content" className="relative pt-[88px] pb-24 bg-white overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[40%] aspect-square rounded-full bg-rose-50/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] aspect-square rounded-full bg-blue-50/30 blur-[120px] pointer-events-none" />

      <section className="max-w-6xl mx-auto px-6 md:px-8 relative z-10" aria-labelledby="services-headline">
        
        {/* Page Header */}
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.15em] text-pink-accent bg-rose-50 border border-[#FCE7EF] rounded-full px-4 py-1.5">
              ● Our Services
            </span>
          </div>
          <h1
            id="services-headline"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Engineered for speed, designed for conversion.
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed">
            We specialize in three core areas, ensuring your digital products are fast, secure, and built to scale.
          </p>
        </header>

        {/* Alternating Stacked Services Layout */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.id}
                className="group bg-white border border-gray-200/80 rounded-3xl overflow-hidden hover:shadow-xl hover:border-pink-accent/20 transition-all duration-500 flex flex-col md:flex-row items-stretch"
                aria-label={`${service.title} service card`}
              >
                {/* Visual Area */}
                <div className={`w-full md:w-[42%] relative overflow-hidden bg-gradient-to-br ${service.bgGradient} flex items-center justify-center border-b md:border-b-0 border-gray-100 ${isEven ? 'md:border-r' : 'md:border-l md:order-last'}`}>
                  {/* Subtle Grid overlay inside visual container */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <ServiceIcon className={`w-20 h-20 ${service.iconColor}/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[12deg]`} />
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-10 flex flex-col justify-between flex-grow md:w-[58%]">
                  <div>
                    {/* Badge */}
                    <span className="text-[10px] font-bold text-pink-accent tracking-wider uppercase bg-rose-50 border border-[#FCE7EF] rounded px-2.5 py-1 inline-block mb-4">
                      {service.badge}
                    </span>

                    {/* Title */}
                    <h2 
                      className="text-2xl font-bold text-[#0B1220] tracking-tight mb-3"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {service.title}
                    </h2>

                    {/* Desc */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-semibold">
                      {service.desc}
                    </p>

                    {/* Bullets */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-xs text-gray-500 font-bold leading-tight">
                          <FiCheck className="text-pink-accent w-4 h-4 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Row: Tech Stack & CTA */}
                  <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                    {/* Tech Stack Icons */}
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-wider text-gray-400 uppercase font-extrabold">Stack:</span>
                      <div className="flex items-center gap-3">
                        {service.stack.map((tech) => {
                          const TechIcon = tech.icon;
                          return (
                            <div key={tech.name} className="relative" title={tech.name}>
                              <TechIcon className={`w-5 h-5 text-gray-400 ${tech.color} transition-all duration-200 cursor-pointer`} />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#0B1220] hover:bg-pink-accent hover:-translate-y-0.5 text-white text-xs font-extrabold py-3.5 px-6 rounded-full transition-all duration-300 shadow-sm"
                    >
                      <span>{service.cta}</span>
                      <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </section>
    </main>
  );
}
