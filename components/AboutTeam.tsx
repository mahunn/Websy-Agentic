'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Truck, 
  TrendingUp, 
  Globe, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2,
  Code2,
  Layers,
  Zap,
  Activity
} from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaDribbble 
} from 'react-icons/fa6';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
    dribbble?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mahin Ahmad',
    role: 'Founder & Lead Full-Stack Architect',
    bio: 'Specializing in Next.js commerce architectures, courier API webhooks, and performance optimization.',
    image: '/mahin.jpg',
    skills: ['Next.js', 'Courier APIs', 'System Design', 'TypeScript'],
    links: {
      github: 'https://github.com/mahinahmad',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://mahinahmad.netlify.app'
    }
  },
  {
    name: 'Tania Akter',
    role: 'Lead Brand & UI/UX Designer',
    bio: 'Crafting bespoke design systems, high-converting checkout flows, and luxury brand visual identities.',
    image: '/tania.jpg',
    skills: ['Figma', 'Design Systems', 'Conversion UX', 'Design Systems'],
    links: {
      linkedin: 'https://linkedin.com',
      dribbble: 'https://dribbble.com'
    }
  },
  {
    name: 'Kamrul Hasan',
    role: 'Meta Ads & CAPI Tracking Specialist',
    bio: 'Configuring server-side tracking, custom pixel funnels, and abandoned cart recovery systems.',
    image: '/kamrul.jpg',
    skills: ['Meta CAPI', 'Analytics', 'ROAS Optimization', 'Google Tag Manager'],
    links: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
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

        {/* ── Studio Narrative Header (Musemind Style) ─────────────────── */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          {/* Small tracked pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38]" />
            <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#111111]">
              WHO WE ARE
            </span>
          </div>

          {/* Heading */}
          <h2 
            id="about-headline"
            className="text-[#111111] font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-0.03em] leading-[1.08]"
          >
            A Focused Team Engineering High-Yield Digital Commerce
          </h2>

          {/* Subtitle */}
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

        {/* ── Team Showcase (FleexStudio Card Style) ───────────────────── */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article 
                key={member.name}
                className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-7 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Portrait with Aspect Ratio & Zoom Hover */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 mb-6 border border-neutral-200/70">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Member Name & Role */}
                  <div className="mb-3">
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#E25C38] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-[#52525B] text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[11px] font-semibold text-neutral-700 bg-neutral-100 border border-neutral-200/80 px-2.5 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social & Portfolio Links Bar */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Connect
                  </span>

                  <div className="flex items-center gap-2">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#111111] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                        aria-label={`${member.name} GitHub profile`}
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#0A66C2] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <FaLinkedinIn className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.links.twitter && (
                      <a
                        href={member.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#111111] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                        aria-label={`${member.name} X profile`}
                      >
                        <FaXTwitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.links.dribbble && (
                      <a
                        href={member.links.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#EA4C89] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                        aria-label={`${member.name} Dribbble portfolio`}
                      >
                        <FaDribbble className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.links.portfolio && (
                      <a
                        href={member.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#E25C38] hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-200"
                        aria-label={`${member.name} Portfolio website`}
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
