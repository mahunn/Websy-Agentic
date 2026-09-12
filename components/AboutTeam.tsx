'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Truck, 
  TrendingUp, 
  Globe, 
  Activity
} from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaWhatsapp 
} from 'react-icons/fa6';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  objectPosition?: string;
  skills: string[];
  isContactable?: boolean;
  links?: {
    whatsapp?: string;
    portfolio?: string;
    github?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mahin Ahmad',
    role: 'Founder & Lead Full-Stack Architect',
    bio: 'Specializing in Next.js commerce architectures, courier API webhooks, and sub-second performance optimization.',
    image: '/mahin-ahmad.jpg',
    objectPosition: 'center 20%',
    skills: ['Next.js', 'Courier APIs', 'System Design', 'TypeScript'],
    isContactable: true,
    links: {
      whatsapp: 'https://wa.me/8801828034555?text=Hi%20Mahin!%20I\'d%20like%20to%20discuss%20an%20e-commerce%20project.',
      portfolio: 'https://mahinahmad.netlify.app',
      github: 'https://github.com/mahinahmad',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Tania Akter',
    role: 'Lead Brand & UI/UX Designer',
    bio: 'Crafting bespoke design systems, high-converting checkout flows, and luxury brand visual identities.',
    image: '/tania.jpg',
    objectPosition: 'center',
    skills: ['Figma', 'Conversion UX', 'Design Systems', 'Brand Identity']
  },
  {
    name: 'Kamrul Hasan',
    role: 'Backend & Security Lead',
    bio: 'Architecting robust server backends, database security, and automated order fulfillment pipelines.',
    image: '/kamrul.jpg',
    objectPosition: 'center 15%',
    skills: ['Node.js', 'Database Security', 'Cloud Ops', 'API Routing']
  },
  {
    name: 'Nokib Al Hasan',
    role: 'Brand & Creative Director',
    bio: 'Crafting luxury visual brand identities, conversion packaging graphics, and high-impact digital content.',
    image: '/nokib.jpg',
    objectPosition: 'center 20%',
    skills: ['Brand Identity', 'Creative Direction', 'Visual Systems', 'Graphic Design']
  },
  {
    name: 'Samin Ahmed',
    role: 'Quality Assurance & CRO Lead',
    bio: 'Testing cross-device responsiveness, Core Web Vitals speed benchmarks, and payment gateway reliability.',
    image: '/samin.jpg',
    objectPosition: 'center 20%',
    skills: ['Core Web Vitals', 'Device QA', 'CRO Testing', 'Automated Testing']
  }
];

const pillars = [
  {
    title: 'Precision Tracking First',
    desc: 'Server-side CAPI setups that capture 100% of purchase data bypassing iOS 14.5+ ad blockers.',
    metric: '100% Match Quality',
    icon: Activity
  },
  {
    title: 'Zero-Touch Logistics',
    desc: 'Direct API automation with Pathao, Steadfast, and RedX for automated parcel booking & COD reconciliation.',
    metric: '0% Manual Dispatches',
    icon: Truck
  },
  {
    title: 'Conversion-Led Design',
    desc: 'Sub-second page speeds tailored specifically for local and global e-commerce shoppers.',
    metric: '<650ms Core Web Vitals',
    icon: TrendingUp
  }
];

export default function AboutTeam() {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 lg:py-32 bg-[#F6F7F9] border-t border-neutral-200/80 relative overflow-hidden scroll-mt-20"
      aria-labelledby="about-headline"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(226,92,56,0.04) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* ── Studio Narrative Header ─────────────────── */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-xs mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
            <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#111111]">
              WHO WE ARE
            </span>
          </div>

          <h2 
            id="about-headline"
            className="text-[#111111] font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-0.03em] leading-[1.08]"
          >
            A Focused Team Engineering High-Yield Digital Commerce
          </h2>

          <p className="text-[#52525B] font-sans font-normal text-base sm:text-lg md:text-[20px] leading-[1.58] mt-5">
            Websy operates as a lean, agile digital studio. We bridge the gap between bespoke visual design and complex backend logistics, empowering e-commerce brands to scale effortlessly.
          </p>
        </div>

        {/* ── Agency Core Pillars (3 Compact Metric Badges) ───────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-neutral-200/80 rounded-3xl p-7 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-100/80 border border-neutral-200/70 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/10 px-3 py-1 rounded-full">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#52525B] text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Team Showcase (5 Members Grid with Compact Images) ───────── */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                Core Engineering &amp; Design Leads
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111111] tracking-tight">
                Direct Collaboration with Senior Specialists
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
            {teamMembers.map((member) => (
              <article 
                key={member.name}
                className="bg-white border border-neutral-200/80 rounded-3xl p-5 sm:p-6 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Row: Small Avatar & Status Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shrink-0 shadow-xs group-hover:border-[#E25C38]/40 transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        sizes="72px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: member.objectPosition || 'center' }}
                      />
                    </div>
                    {member.isContactable ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/10 px-2.5 py-1 rounded-full shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38] animate-pulse" />
                        Founder
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-100/80 px-2 py-0.5 rounded-full shrink-0">
                        Core Lead
                      </span>
                    )}
                  </div>

                  {/* Member Name & Role */}
                  <div className="mb-2.5">
                    <h4 className="text-lg sm:text-xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#E25C38] transition-colors leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-[#52525B] text-xs sm:text-[13px] leading-relaxed mb-4 flex-1">
                    {member.bio}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1 mt-auto pt-2">
                    {member.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[10.5px] font-semibold text-neutral-700 bg-neutral-100 border border-neutral-200/80 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social & Contact Bar — ONLY for Mahin Ahmad */}
                {member.isContactable && member.links ? (
                  <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Reach Out
                    </span>

                    <div className="flex items-center gap-1.5">
                      {member.links.whatsapp && (
                        <a
                          href={member.links.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                          title="Chat with Mahin on WhatsApp"
                          aria-label="Chat with Mahin on WhatsApp"
                        >
                          <FaWhatsapp className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.links.portfolio && (
                        <a
                          href={member.links.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-[#E25C38] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                          title="Mahin's Portfolio Website"
                          aria-label="Mahin Ahmad Portfolio Website"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-[#111111] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                          title="Mahin's GitHub Profile"
                          aria-label="Mahin Ahmad GitHub Profile"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-[#0A66C2] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                          title="Mahin's LinkedIn Profile"
                          aria-label="Mahin Ahmad LinkedIn Profile"
                        >
                          <FaLinkedinIn className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

