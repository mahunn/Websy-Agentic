import Image from 'next/image';

export default function About() {
  const team = [
    {
      name: "Mahin Ahmad",
      role: "Founder & Full-Stack Developer",
      desc: "The one building the code and steering the ship. Mahin focuses on custom full-stack development and making sure every project actually drives real business results.",
      image: "/mahin.jpg",
    },
    {
      name: "Kamrul Hasan",
      role: "Backend & Security Lead",
      desc: "The guardian of the servers. Kamrul builds the complex backend systems and keeps our clients' websites and data completely locked down and secure.",
      image: "/kamrul.jpg",
    },
    {
      name: "Nokib Al Hasan",
      role: "Brand & Content Manager",
      desc: "The creative mind behind how things look and feel. Nokib crafts the brand identities and digital content that make our clients stand out from the crowd.",
      image: "/nokib.jpg",
    },
    {
      name: "Tania Akter",
      role: "Lead Copywriter",
      desc: "Words matter. Tania writes the clear, punchy website copy that actually gets visitors to click, sign up, and buy.",
      image: "/tania.jpg",
    },
    {
      name: "Samin Ahmed",
      role: "Quality Assurance (QA)",
      desc: "Nothing goes live without Samin's approval. He hunts down bugs and tests every single feature to make sure your site works flawlessly on every device.",
      image: "/samin.jpg",
    },
  ];

  return (
    <main id="main-content" className="bg-white pt-[72px] sm:pt-[84px] md:pt-[96px] pb-16 md:pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-8" aria-labelledby="about-headline">
        
        {/* Page Header */}
        <header className="mb-16 max-w-3xl">
          <h1
            id="about-headline"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Meet our team members
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-2xl">
            We are independent developers, building lightning-fast web applications to help local businesses scale.
          </p>
        </header>

        {/* 5-Column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" role="list" aria-label="Websy team members">
          {team.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col bg-white border border-gray-200/85 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              role="listitem"
            >
              {/* Profile image or placeholder using initials */}
              <div className="relative w-full aspect-square rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200/60 mb-6 group-hover:border-primary/20 transition-colors duration-300 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                  />
                ) : (
                  <span className="text-2xl font-light text-gray-400 uppercase select-none tracking-wider group-hover:text-primary transition-colors duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <h2 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h2>
              
              <p className="text-xs font-semibold text-gray-400 tracking-wide uppercase mb-3">
                {member.role}
              </p>
              
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                {member.desc}
              </p>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}
