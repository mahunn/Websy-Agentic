'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Truck, 
  TrendingUp, 
  Globe, 
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaWhatsapp 
} from 'react-icons/fa6';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleShort: string;
  specialtyTrack: string;
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
    id: 'nokib',
    name: 'Nokib Al Hasan',
    role: 'Brand & Creative Director',
    roleShort: 'Creative Director',
    specialtyTrack: 'Brand & Visual Systems',
    bio: 'Directing luxury visual brand identities, conversion packaging graphics, and high-impact digital marketing assets for top fashion and retail brands.',
    image: '/nokib.jpg',
    objectPosition: 'center 18%',
    skills: ['Brand Identity', 'Creative Direction', 'Visual Systems', 'Graphic Design']
  },
  {
    id: 'tania',
    name: 'Tania Akter',
    role: 'Lead Brand & UI/UX Designer',
    roleShort: 'Lead UI/UX Designer',
    specialtyTrack: 'Conversion UX & Systems',
    bio: 'Crafting bespoke Figma design systems, high-converting frictionless checkout flows, and luxury brand digital interfaces engineered for rapid conversion.',
    image: '/tania.jpg',
    objectPosition: 'center 20%',
    skills: ['Figma', 'Conversion UX', 'Design Systems', 'Brand Identity']
  },
  {
    id: 'mahin',
    name: 'Mahin Ahmad',
    role: 'Founder & Lead Full-Stack Architect',
    roleShort: 'Lead Architect & Founder',
    specialtyTrack: 'Next.js & Courier Logistics',
    bio: 'Specializing in sub-second Next.js commerce flagships, Meta Pixel CAPI server-side tracking engines, and automated courier webhook pipelines (Pathao, Steadfast, RedX).',
    image: '/mahin-ahmad.jpg',
    objectPosition: 'center 18%',
    skills: ['Next.js 15', 'Courier APIs', 'Meta CAPI', 'System Architecture', 'TypeScript'],
    isContactable: true,
    links: {
      whatsapp: 'https://wa.me/8801828034555?text=Hi%20Mahin!%20I\'d%20like%20to%20discuss%20an%20e-commerce%20project.',
      portfolio: 'https://mahinahmad.netlify.app',
      github: 'https://github.com/mahinahmad',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'kamrul',
    name: 'Kamrul Hasan',
    role: 'Backend & Security Lead',
    roleShort: 'Backend & Security Lead',
    specialtyTrack: 'Database & API Automation',
    bio: 'Architecting rock-solid server backends, database security, automated order dispatch triggers, and payment gateway webhooks with 99.9% uptime reliability.',
    image: '/kamrul.jpg',
    objectPosition: 'center 15%',
    skills: ['Node.js', 'Database Security', 'Cloud Ops', 'API Routing', 'PostgreSQL']
  },
  {
    id: 'samin',
    name: 'Samin Ahmed',
    role: 'Quality Assurance & CRO Lead',
    roleShort: 'QA & CRO Lead',
    specialtyTrack: 'Core Web Vitals & Benchmarks',
    bio: 'Testing cross-device responsiveness, Core Web Vitals speed benchmarks, frictionless mobile checkout reliability, and multi-gateway payment integrity.',
    image: '/samin.jpg',
    objectPosition: 'center 15%',
    skills: ['Core Web Vitals', 'Device QA', 'CRO Audits', 'Automated Testing', 'Checkout Reliability']
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
  const [selectedMemberId, setSelectedMemberId] = useState<string>('mahin');
  const activeMember = teamMembers.find(m => m.id === selectedMemberId) || teamMembers[2];

  // Offsets for the convex arch layout on desktop (index 0, 1, 2, 3, 4)
  const getArchTransform = (idx: number, isSelected: boolean) => {
    const offsets = [
      'md:translate-y-9 lg:translate-y-10',
      'md:translate-y-4 lg:translate-y-5',
      'md:translate-y-0',
      'md:translate-y-4 lg:translate-y-5',
      'md:translate-y-9 lg:translate-y-10',
    ];

    const zIndexes = [
      'z-10',
      'z-20',
      'z-30',
      'z-20',
      'z-10',
    ];

    return {
      offsetClass: offsets[idx] || 'translate-y-0',
      zIndexClass: isSelected ? 'z-40' : zIndexes[idx] || 'z-10',
      isCenter: idx === 2
    };
  };

  return (
    <section 
      id="team" 
      className="pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 bg-[#060D1F] text-white relative overflow-hidden"
      aria-labelledby="team-headline"
    >
      {/* ── Studio Stage Lighting (Royal Blue Radial Glow) ───────────── */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 25%, rgba(29, 78, 216, 0.45) 0%, rgba(14, 38, 102, 0.22) 50%, transparent 75%)',
        }}
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{ background: 'rgba(37, 99, 235, 0.35)' }}
      />
      {/* Ambient Burnt Ember Glow */}
      <div 
        className="absolute -bottom-24 right-1/4 w-[450px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ background: 'rgba(226, 92, 56, 0.35)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* ── 1. Top Capsule Badge (Glowing Accent Stroke) ───────────── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="relative inline-flex items-center justify-center mb-5">
            <div className="relative px-6 sm:px-8 py-2 sm:py-2.5 rounded-full bg-[#0B1838]/90 border border-blue-400/35 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-blue-200">
                DIRECT ACCESS TO SENIOR ARCHITECTS
              </span>
              {/* Illuminated curved bottom highlight matching reference */}
              <div className="absolute -bottom-[1px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#E25C38] to-transparent shadow-[0_0_8px_#E25C38]" />
            </div>
          </div>

          <h2 
            id="team-headline"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl"
          >
            Direct Access to the Engineers &amp; Designers <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-300">
              Building Your Digital Flagship
            </span>
          </h2>

          <p className="text-slate-300/90 font-sans text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Zero junior handoffs, account managers, or telephone games. You collaborate directly with experienced software engineers and conversion specialists.
          </p>
        </div>

        {/* ── 2. The 5-Card Curved Studio Showcase ───────────────────── */}
        <div className="mt-8 mb-14">
          
          {/* Mobile / Tablet: Horizontal Snap Deck (< md) */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-6 pt-2 px-2 no-scrollbar scroll-smooth">
            {teamMembers.map((member, idx) => {
              const isSelected = member.id === selectedMemberId;
              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className={`snap-center shrink-0 w-[240px] h-[390px] rounded-2xl sm:rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? 'border-[#E25C38] shadow-[0_15px_40px_rgba(226,92,56,0.28)] scale-[1.02]' 
                      : 'border-blue-400/20 hover:border-blue-400/40 shadow-lg'
                  }`}
                >
                  {/* Fluted Studio Curtain Backdrop */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        linear-gradient(180deg, rgba(14, 39, 102, 0.45) 0%, rgba(6, 16, 46, 0.7) 50%, rgba(3, 7, 20, 0.95) 100%),
                        repeating-linear-gradient(
                          90deg,
                          #05112E 0px,
                          #071944 6px,
                          #0D2870 14px,
                          #153D9E 20px,
                          #0D2870 26px,
                          #071944 34px,
                          #05112E 40px
                        )
                      `
                    }}
                  />
                  {/* Spotlight Radial Glow */}
                  <div 
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)' }}
                  />

                  {/* Portrait Photo */}
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="240px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      style={{ objectPosition: member.objectPosition || 'center 18%' }}
                      priority={idx === 2}
                    />
                  </div>

                  {/* Bottom Info Scrim */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 pb-5 px-3 bg-gradient-to-t from-[#040817] via-[#040817]/90 via-55% to-transparent flex flex-col items-center text-center">
                    <h3 className="font-display font-black text-white text-base tracking-wider uppercase leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10.5px] font-semibold text-slate-300 uppercase tracking-[0.18em] mt-1 line-clamp-1">
                      {member.roleShort}
                    </p>
                    <span className="text-[9.5px] font-bold text-[#E25C38] uppercase tracking-[0.22em] mt-1.5 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-[#E25C38]" />
                      {member.specialtyTrack}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Curved Arch Showcase (>= md) */}
          <div className="hidden md:flex items-end justify-center -space-x-3 lg:-space-x-4 max-w-6xl mx-auto pt-6 pb-10">
            {teamMembers.map((member, idx) => {
              const isSelected = member.id === selectedMemberId;
              const arch = getArchTransform(idx, isSelected);

              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className={`relative group cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${arch.offsetClass} ${arch.zIndexClass} ${
                    isSelected ? 'scale-[1.05]' : arch.isCenter ? 'scale-[1.02]' : 'hover:scale-[1.03]'
                  }`}
                  style={{
                    width: 'calc(20% + 12px)',
                    maxWidth: '245px',
                    minWidth: '190px',
                  }}
                >
                  {/* Card Shell */}
                  <div 
                    className={`relative w-full h-[400px] lg:h-[460px] xl:h-[485px] rounded-2xl lg:rounded-3xl overflow-hidden border transition-all duration-300 ${
                      isSelected 
                        ? 'border-[#E25C38] shadow-[0_25px_60px_rgba(226,92,56,0.35)] ring-1 ring-[#E25C38]/50' 
                        : 'border-blue-400/25 hover:border-blue-300/50 shadow-[0_20px_45px_rgba(0,0,0,0.65)] hover:shadow-[0_25px_50px_rgba(29,78,216,0.3)]'
                    }`}
                  >
                    {/* Fluted Studio Curtain Backdrop (Pleated vertical fabric texture) */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `
                          linear-gradient(180deg, rgba(14, 39, 102, 0.45) 0%, rgba(6, 16, 46, 0.7) 50%, rgba(3, 7, 20, 0.95) 100%),
                          repeating-linear-gradient(
                            90deg,
                            #05112E 0px,
                            #071944 6px,
                            #0D2870 14px,
                            #153D9E 20px,
                            #0D2870 26px,
                            #071944 34px,
                            #05112E 40px
                          )
                        `
                      }}
                    />

                    {/* Radial Studio Backlight behind torso */}
                    <div 
                      className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 rounded-full pointer-events-none opacity-70"
                      style={{
                        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, transparent 70%)'
                      }}
                    />

                    {/* Portrait Photo */}
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 1024px) 210px, 250px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: member.objectPosition || 'center 18%' }}
                        priority={idx === 2}
                      />
                    </div>

                    {/* Top Pill on Center Card or Active */}
                    {member.isContactable && (
                      <div className="absolute top-3.5 left-3.5 z-20">
                        <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wider text-[#E25C38] bg-black/70 backdrop-blur-md border border-[#E25C38]/40 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E25C38] animate-pulse" />
                          Founder
                        </span>
                      </div>
                    )}

                    {/* Bottom Info Scrim (Musemind / Reference Signature) */}
                    <div className="absolute inset-x-0 bottom-0 pt-16 pb-5 sm:pb-6 px-3 lg:px-4 bg-gradient-to-t from-[#030614] via-[#030614]/90 via-55% to-transparent flex flex-col items-center text-center">
                      <h3 className="font-display font-black text-white text-sm sm:text-base lg:text-[17px] tracking-wider uppercase leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-[0.18em] mt-1 line-clamp-1">
                        {member.roleShort}
                      </p>
                      <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#E25C38] uppercase tracking-[0.22em] mt-1.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#E25C38]" />
                        {member.specialtyTrack}
                      </span>
                    </div>

                    {/* Subtle Top Glint */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Tap Selector Dots / Avatars */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-2">
            {teamMembers.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMemberId(m.id)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  m.id === selectedMemberId 
                    ? 'w-7 bg-[#E25C38]' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Select ${m.name}`}
              />
            ))}
          </div>
        </div>

        {/* ── 3. Selected Member Spotlight & Direct Channels ─────────── */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#091430]/90 border border-blue-500/25 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            
            {/* Corner Decorative Accent */}
            <div 
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(226, 92, 56, 0.18) 0%, transparent 70%)' }}
            />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Micro Thumbnail */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-blue-400/40 shrink-0 shadow-md">
                  <Image
                    src={activeMember.image}
                    alt={activeMember.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    style={{ objectPosition: activeMember.objectPosition || 'center 18%' }}
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                      {activeMember.name}
                    </h3>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/10 border border-[#E25C38]/30 px-2.5 py-0.5 rounded-full">
                      {activeMember.isContactable ? 'Founder' : 'Senior Specialist'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-blue-200/90 uppercase tracking-wider mt-1">
                    {activeMember.role}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2.5 max-w-xl">
                    {activeMember.bio}
                  </p>
                </div>
              </div>

              {/* Action Buttons / Socials */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
                {activeMember.isContactable && activeMember.links ? (
                  <>
                    {activeMember.links.whatsapp && (
                      <a
                        href={activeMember.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-full transition-all duration-200 shadow-md"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Chat WhatsApp</span>
                      </a>
                    )}
                    {activeMember.links.portfolio && (
                      <a
                        href={activeMember.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-full transition-all duration-200 border border-white/15"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Portfolio</span>
                      </a>
                    )}
                    {activeMember.links.github && (
                      <a
                        href={activeMember.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 border border-white/15"
                        title="GitHub"
                        aria-label="GitHub Profile"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {activeMember.links.linkedin && (
                      <a
                        href={activeMember.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 border border-white/15"
                        title="LinkedIn"
                        aria-label="LinkedIn Profile"
                      >
                        <FaLinkedinIn className="w-4 h-4" />
                      </a>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-blue-200/80 bg-blue-950/60 px-3.5 py-2 rounded-full border border-blue-400/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C38]" />
                    <span>Direct Senior Lead</span>
                  </div>
                )}
              </div>
            </div>

            {/* Technical Skills Badges */}
            <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 mr-2">
                Core Stack:
              </span>
              {activeMember.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-[11px] font-semibold text-blue-100 bg-[#0E204A] border border-blue-400/30 px-3 py-1 rounded-lg shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. Agency Core Pillars (3 Compact Metric Badges) ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-20">
          {pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-[#091430]/60 border border-blue-400/20 rounded-3xl p-7 hover:border-blue-400/40 hover:bg-[#091430]/90 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-950/80 border border-blue-400/30 flex items-center justify-center text-blue-200 group-hover:bg-[#E25C38] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#E25C38] bg-[#E25C38]/10 border border-[#E25C38]/30 px-3 py-1 rounded-full">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300/85 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
