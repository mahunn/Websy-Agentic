'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Truck, 
  TrendingUp, 
  Globe, 
  Activity,
  ArrowUpRight
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
  isFounder?: boolean;
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
    role: 'Founder & Lead Architect',
    bio: 'Specializing in high-yield Next.js commerce, courier API automation, and sub-second performance.',
    image: '/mahin-suit.jpg',
    objectPosition: 'center 15%',
    skills: ['Next.js', 'Courier APIs', 'System Design'],
    isFounder: true,
    links: {
      whatsapp: 'https://wa.me/8801828034555?text=Hi%20Mahin!%20I\'d%20like%20to%20discuss%20an%20e-commerce%20project.',
      portfolio: 'https://mahinahmad.netlify.app',
      github: 'https://github.com/mahinahmad',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Kamrul Hasan',
    role: 'Backend & Security Lead',
    bio: 'Architecting resilient edge backends, courier webhooks, and secure automated payment pipelines.',
    image: '/kamrul.jpg',
    objectPosition: 'center 15%',
    skills: ['Node.js', 'API Routing', 'Database Security']
  },
  {
    name: 'Nokib Al Hasan',
    role: 'Creative Systems Director',
    bio: 'Designing conversion-led brand graphics, packaging visual identities, and interactive media.',
    image: '/nokib.jpg',
    objectPosition: 'center 20%',
    skills: ['Brand Identity', 'Visual Systems', 'Graphic UX']
  },
  {
    name: 'Samin Ahmed',
    role: 'QA & Performance Lead',
    bio: 'Testing mobile responsiveness, Core Web Vitals speed benchmarks, and courier API reliability.',
    image: '/samin.jpg',
    objectPosition: 'center 20%',
    skills: ['Core Web Vitals', 'Device QA', 'CRO Testing']
  }
];

const pillars = [
  {
    title: 'Sub-800ms Speed Guarantee',
    desc: 'Pure Next.js edge performance engineered to stop ad traffic drop-off and maximize checkout conversions.',
    metric: '<0.8s LCP on 4G',
    icon: TrendingUp
  },
  {
    title: 'Automated Courier API Sync',
    desc: 'Direct API automation with Steadfast and Pathao for zero-touch consignment generation and tracking.',
    metric: 'Zero Manual Entry',
    icon: Truck
  },
  {
    title: '100% Custom Code Ownership',
    desc: 'No recurring monthly Shopify app subscriptions or fragile WordPress plugins. You own all code.',
    metric: 'Zero Monthly Fees',
    icon: Activity
  }
];

export default function AboutTeam() {
  return (
    <section 
      id="about" 
      className="py-12 sm:py-20 bg-[#F8FAFC] border-t border-gray-200/80 relative overflow-hidden"
      aria-labelledby="about-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Studio Narrative Header ─────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-2xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111]">
              WHO WE ARE • WEBSY STUDIO
            </span>
          </div>

          <h2 
            id="about-headline"
            className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight leading-[1.12] mb-3"
          >
            A Focused Team Engineering{' '}
            <span className="text-[#DC2626]">
              High-Yield Commerce.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
            Websy operates as a lean, senior-led digital studio in Dhaka. We bridge the gap between high-end visual design and battle-tested e-commerce backend engineering.
          </p>
        </div>

        {/* ── Agency Core Pillars (3 Compact Metric Badges) ───────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-[#111111]">
                      <PillarIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10.5px] font-mono font-bold text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-[#111111] tracking-tight mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Core Team Showcase (Senior Leads) ──────────────────────── */}
        <div>
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#DC2626] block mb-1">
              THE SPECIALISTS
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
              Direct Collaboration with Senior Leads
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">
              Zero junior handoffs. Work directly with specialists who build your product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {teamMembers.map((member) => (
              <article 
                key={member.name}
                className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col justify-between group"
              >
                <div className="flex-1 flex flex-col">
                  {/* Avatar & Status */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        sizes="56px"
                        className="object-cover"
                        style={{ objectPosition: member.objectPosition || 'center' }}
                      />
                    </div>
                    {member.isFounder ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-[#DC2626] bg-red-50 border border-red-100 px-2 py-0.5 rounded-full shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                        Founder
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-semibold text-neutral-400 bg-gray-100 px-2 py-0.5 rounded-full shrink-0">
                        Core Lead
                      </span>
                    )}
                  </div>

                  {/* Name & Role */}
                  <div className="mb-1.5">
                    <h4 className="text-sm sm:text-base font-display font-bold text-[#111111] tracking-tight group-hover:text-[#DC2626] transition-colors leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-[10.5px] font-mono font-medium text-neutral-500">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-neutral-500 text-xs leading-relaxed mb-3 flex-1">
                    {member.bio}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1 mt-auto pt-1">
                    {member.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[9.5px] font-mono font-medium text-neutral-600 bg-gray-50 border border-gray-200 px-1.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Founder Contact Bar */}
                {member.isFounder && member.links ? (
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      Reach Out
                    </span>

                    <div className="flex items-center gap-1.5">
                      {member.links.whatsapp && (
                        <a
                          href={member.links.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                          title="Chat on WhatsApp"
                          aria-label="Chat on WhatsApp"
                        >
                          <FaWhatsapp className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.links.portfolio && (
                        <a
                          href={member.links.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#DC2626] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                          title="Portfolio"
                          aria-label="Portfolio"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#111111] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                          title="GitHub"
                          aria-label="GitHub"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
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
