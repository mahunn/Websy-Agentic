'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/work' },
  { label: 'Team', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLightPage =
    pathname === '/' ||
    pathname === '/services' ||
    pathname === '/work' ||
    pathname === '/about' ||
    pathname === '/contact';

  const borderClass = isLightPage ? 'border-gray-200/80' : 'border-zinc-800/40';
  const bgScrolled = isLightPage
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-black/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.3)]';
  const bgTransparent = isLightPage ? 'bg-white' : 'bg-transparent';

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 pointer-events-none ${borderClass} ${
        scrolled ? bgScrolled : bgTransparent
      }`}
    >
      <nav
        className="pointer-events-auto max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-[56px] sm:h-[64px] flex items-center justify-between gap-2 sm:gap-4"
        aria-label="Primary navigation"
      >
        {/* Brand Logo */}
        <div className="flex-none md:flex-1 flex items-center justify-start">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Websy — go to homepage"
          >
            <Image
              src={isLightPage ? "/logo-dark.svg" : "/logo.svg"}
              alt="Websy logo"
              width={120}
              height={36}
              className="block h-[28px] sm:h-[34px] md:h-[42px] w-auto transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* Center Nav Links (Simple style: visible directly on mobile with horizontal scroll fallback) */}
        <div className="flex-1 md:flex-initial flex items-center justify-end md:justify-center gap-3.5 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-none whitespace-nowrap px-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] md:text-[14.5px] font-medium tracking-wide transition-colors duration-200 select-none ${
                  isActive
                    ? isLightPage
                      ? 'text-[#000000] font-semibold'
                      : 'text-white font-semibold'
                    : isLightPage
                    ? 'text-gray-500 hover:text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Column (Hidden on mobile) */}
        <div className="flex-none md:flex-1 flex items-center justify-end">
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={`text-[14px] font-medium px-5 py-2.5 rounded-full border transition-all duration-200 ${
                isLightPage
                  ? 'border-black text-black hover:bg-black/5'
                  : 'border-white text-white hover:bg-white/10'
              }`}
            >
              Log in
            </Link>
            <Link
              href="/contact"
              className={`text-[14px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 ${
                isLightPage
                  ? 'bg-black text-white hover:bg-zinc-800'
                  : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              Get a Website
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
