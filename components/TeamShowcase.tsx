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
      className="py-20 sm:py-28 bg-[#0A0A0A] text-white relative border-t border-b border-black"
      aria-labelledby="team-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── 1. Minimal Header ─────────────── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>DIRECT ACCESS TO LEAD ARCHITECTS</span>
          </div>

          <h2 
            id="team-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl"
          >
            Direct Access to the Engineers <br className="hidden sm:inline" />
            Building Your Flagship.
          </h2>

          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-5 leading-relaxed">
            Zero junior handoffs, account managers, or telephone games. You collaborate directly with experienced software engineers and conversion specialists.
          </p>
        </div>

        {/* ── 2. The 4-Card Minimalist Portrait Gallery ─ */}
        <div className="mb-12">
          
          {/* Mobile: Horizontal Swipe / Snap Deck (< md) */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 px-1 no-scrollbar scroll-smooth">
            {teamMembers.map((member) => {
              const isSelected = member.id === selectedMemberId;
              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className={`snap-center shrink-0 w-[240px] h-[360px] rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-500 border ${
                    isSelected 
                      ? 'border-white/20' 
                      : 'border-white/5 opacity-80 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="240px"
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition || 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="font-display font-bold text-lg text-white truncate">
                      {member.name}
                    </p>
                    <p className="text-xs font-mono text-gray-400 mt-1 truncate">
                      {member.roleShort}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: 4-Card Clean Grid (md+) */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member) => {
              const isSelected = member.id === selectedMemberId;

              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedMemberId(member.id)}
                  className={`rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-500 border h-[420px] ${
                    isSelected 
                      ? 'border-white/25 ring-4 ring-white/5 shadow-2xl scale-[1.02]' 
                      : 'border-white/5 opacity-80 hover:opacity-100 hover:border-white/15'
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 25vw, 280px"
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition || 'center 18%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <p className="font-display font-bold text-lg text-white truncate">
                      {member.name}
                    </p>
                    <p className="text-xs font-mono text-gray-400 mt-1 truncate">
                      {member.roleShort}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 3. Selected Member Premium Profile Card ─────────── */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative z-10">
              
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {activeMember.name}
                  </h3>
                  {activeMember.isFounder && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/10 px-2.5 py-1 rounded-md">
                      Founder
                    </span>
                  )}
                </div>
                
                <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">
                  {activeMember.role}
                </p>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                  {activeMember.bio}
                </p>

                {/* Technical Skills Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 mr-2">
                    Core Stack
                  </span>
                  {activeMember.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] font-mono font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Content (Actions) */}
              <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 md:pl-8 md:border-l border-white/10">
                {activeMember.isFounder && activeMember.links ? (
                  <>
                    {activeMember.links.whatsapp && (
                      <a
                        href={activeMember.links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-bold py-3.5 px-6 rounded-full transition-all w-full"
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
                        className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 text-sm font-semibold py-3.5 px-6 rounded-full transition-colors w-full"
                      >
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span>View Portfolio</span>
                      </a>
                    )}
                    {activeMember.links.github && (
                      <a
                        href={activeMember.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 text-sm font-semibold py-3.5 px-6 rounded-full transition-colors w-full"
                      >
                        <FaGithub className="w-4 h-4 text-gray-400" />
                        <span>GitHub Profile</span>
                      </a>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <CheckCircle2 className="w-6 h-6 text-[#DC2626] mb-2" />
                    <span className="text-sm font-semibold text-white">In-House Expert</span>
                    <span className="text-xs text-gray-400 mt-1">Dedicated to your project</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
