'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Globe, 
  CheckCircle2,
  ArrowRight
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

export const teamMembers: TeamMember[] = [
  {
    id: 'nokib',
    name: 'Nokib Al Hasan',
    role: 'Creative Systems Director',
    roleShort: 'Creative Systems',
    bio: 'Designing conversion-led brand graphics, packaging visual identities, and interactive media assets for modern e-commerce stores.',
    image: '/nokib.jpg',
    objectPosition: 'center 20%',
    skills: ['Brand Identity', 'Visual Systems', 'Graphic UX', 'Packaging Design']
  },
  {
    id: 'mahin',
    name: 'Mahin Ahmad',
    role: 'Founder & Lead Full-Stack Architect',
    roleShort: 'Lead Architect & Founder',
    bio: 'Specializing in sub-second Next.js commerce flagships, Meta Pixel CAPI server-side tracking, and automated courier webhook pipelines (Pathao, Steadfast).',
    image: '/mahin-suit.jpg',
    objectPosition: 'center 15%',
    skills: ['Next.js 15', 'Courier APIs', 'Meta CAPI', 'System Architecture', 'TypeScript'],
    isFounder: true,
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
    bio: 'Architecting rock-solid server backends, database security, automated order dispatch triggers, and payment gateway webhooks with 99.9% uptime reliability.',
    image: '/kamrul.jpg',
    objectPosition: 'center 15%',
    skills: ['Node.js', 'Database Security', 'API Routing', 'PostgreSQL', 'Webhooks']
  },
  {
    id: 'samin',
    name: 'Samin Ahmed',
    role: 'Quality Assurance & CRO Lead',
    roleShort: 'QA & CRO Lead',
    bio: 'Testing cross-device mobile responsiveness, Core Web Vitals speed benchmarks, frictionless checkout reliability, and payment gateway integrity.',
    image: '/samin.jpg',
    objectPosition: 'center 15%',
    skills: ['Core Web Vitals', 'Device QA', 'CRO Audits', 'Automated Testing', 'Checkout UX']
  }
];

export default function TeamShowcase() {
  const [selectedMemberId, setSelectedMemberId] = useState<string>('mahin');
  const activeMember = teamMembers.find(m => m.id === selectedMemberId) || teamMembers[1];

  return (
    <section 
      id="team" 
      className="py-16 sm:py-24 bg-[#060D1F] text-white relative overflow-hidden"
      aria-labelledby="team-headline"
    >
      {/* ── Studio Stage Lighting (Royal Blue + Deep Red Ambient Glow) ── */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(29, 78, 216, 0.35) 0%, rgba(14, 38, 102, 0.18) 50%, transparent 75%)',
        }}
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] rounded-full blur-[130px] pointer-events-none opacity-30"
        style={{ background: 'rgba(37, 99, 235, 0.3)' }}
      />
      <div 
        className="absolute -bottom-20 right-1/4 w-[380px] h-[300px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: 'rgba(220, 38, 38, 0.3)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── 1. Top Capsule Badge with Red Accent Line ─────────────── */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="relative px-5 sm:px-7 py-1.5 sm:py-2 rounded-full bg-[#0B1838]/90 border border-blue-400/35 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
                DIRECT ACCESS TO SENIOR ARCHITECTS
              </span>
              {/* Red illuminated curved highlight line */}
              <div className="absolute -bottom-[1px] left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#DC2626] to-transparent shadow-[0_0_8px_#DC2626]" />
            </div>
          </div>

          <h2 
            id="team-headline"
            className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12] max-w-3xl"
          >
            Direct Access to the Engineers &amp; Designers <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-200">
              Building Your Digital Flagship
            </span>
          </h2>

          <p className="text-slate-300/90 font-sans text-xs sm:text-base max-w-2xl mt-3 leading-relaxed">
            Zero junior handoffs, account managers, or telephone games. You collaborate directly with experienced software engineers and conversion specialists.
          </p>
        </div>

        {/* ── 2. The 4-Card Studio Portrait Gallery (Mobile & Desktop) ─ */}
        <div className="mt-6 mb-10">
          
          {/* Mobile: Horizontal Swipe / Snap Deck (< md) */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-3 pb-4 pt-1 px-1 no-scrollbar scroll-smooth">
            {teamMembers.map((member) => {
              const isSelected = member.id === selectedMemberId;
              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className={`snap-center shrink-0 w-[220px] h-[350px] rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? 'border-[#DC2626] shadow-[0_12px_32px_rgba(220,38,38,0.25)] scale-[1.02]' 
                      : 'border-blue-400/20 hover:border-blue-400/40 shadow-md'
                  }`}
                >
                  {/* Portrait Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-500"
                    style={{ objectPosition: member.objectPosition || 'center 20%' }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F] via-[#060D1F]/30 to-transparent" />

                  {/* Founder Pill Badge */}
                  {member.isFounder && (
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DC2626] text-white text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        FOUNDER
                      </span>
                    </div>
                  )}

                  {/* Member Name Label */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 text-center">
                    <p className="font-display font-bold text-sm text-white truncate drop-shadow-sm">
                      {member.name}
                    </p>
                    <p className="text-[10.5px] font-mono text-blue-200 truncate">
                      {member.roleShort}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: 4-Card Elevated Arch Grid (md+) */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto items-end pt-4 pb-2">
            {teamMembers.map((member, idx) => {
              const isSelected = member.id === selectedMemberId;
              const isMahin = member.isFounder;

              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className={`rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-300 border ${
                    isMahin 
                      ? 'h-[430px] lg:h-[460px] -translate-y-3 shadow-2xl' 
                      : 'h-[380px] lg:h-[400px] shadow-lg hover:-translate-y-1'
                  } ${
                    isSelected 
                      ? 'border-[#DC2626] ring-2 ring-[#DC2626]/40 shadow-[0_20px_45px_rgba(220,38,38,0.28)]' 
                      : 'border-blue-400/25 hover:border-blue-400/50'
                  }`}
                >
                  {/* Portrait Photo */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 25vw, 280px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    style={{ objectPosition: member.objectPosition || 'center 18%' }}
                  />

                  {/* Gentle Gradient Darkening */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F] via-[#060D1F]/20 to-transparent" />

                  {/* Founder Badge on Mahin Ahmad's Card */}
                  {isMahin && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DC2626] text-white text-[10.5px] font-mono font-extrabold uppercase tracking-widest shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        FOUNDER
                      </span>
                    </div>
                  )}

                  {/* Bottom Text Pill */}
                  <div className="absolute bottom-4 left-3 right-3 z-20 text-center">
                    <p className="font-display font-bold text-base text-white drop-shadow-sm truncate">
                      {member.name}
                    </p>
                    <p className="text-[11px] font-mono text-blue-200 mt-0.5 truncate">
                      {member.roleShort}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-3">
            {teamMembers.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMemberId(m.id)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  m.id === selectedMemberId 
                    ? 'w-6 bg-[#DC2626]' 
                    : 'w-1.5 bg-white/20'
                }`}
                aria-label={`Select ${m.name}`}
              />
            ))}
          </div>
        </div>

        {/* ── 3. Selected Member Spotlight & Direct Channels ─────────── */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0A1633]/90 border border-blue-500/25 rounded-2xl sm:rounded-3xl p-5 sm:p-7 backdrop-blur-xl shadow-xl relative overflow-hidden">
            
            {/* Corner Decorative Accent */}
            <div 
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)' }}
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
              <div className="flex items-start gap-4">
                {/* Micro Thumbnail */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-blue-400/40 shrink-0 shadow-md">
                  <Image
                    src={activeMember.image}
                    alt={activeMember.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                    style={{ objectPosition: activeMember.objectPosition || 'center 18%' }}
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-white tracking-tight">
                      {activeMember.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DC2626] bg-red-500/10 border border-red-500/30 px-2 py-0.5 rounded-full">
                      {activeMember.isFounder ? 'Founder' : 'Senior Specialist'}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-blue-200/90 uppercase tracking-wider mt-0.5">
                    {activeMember.role}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 max-w-lg">
                    {activeMember.bio}
                  </p>
                </div>
              </div>

              {/* Action Buttons / Socials */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                {activeMember.isFounder && activeMember.links ? (
                  <>
                    {activeMember.links.whatsapp && (
                      <a
                        href={activeMember.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold py-2.5 px-4 rounded-full transition-all shadow-sm whitespace-nowrap"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                    )}
                    {activeMember.links.portfolio && (
                      <a
                        href={activeMember.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 px-3.5 rounded-full transition-colors border border-white/15"
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
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15"
                        title="GitHub"
                        aria-label="GitHub Profile"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-blue-200/80 bg-blue-950/60 px-3 py-1.5 rounded-full border border-blue-400/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>Direct Senior Lead</span>
                  </div>
                )}
              </div>
            </div>

            {/* Technical Skills Badges */}
            <div className="mt-4 pt-3 border-t border-white/[0.08] flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1.5">
                Core Stack:
              </span>
              {activeMember.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-[10px] font-mono font-medium text-blue-100 bg-[#0E204A] border border-blue-400/25 px-2 py-0.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
