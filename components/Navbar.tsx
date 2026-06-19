'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Our Team', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Determine if we're on a light-track page
  const isLightPage =
    pathname === '/' ||
    pathname === '/services' ||
    pathname === '/work' ||
    pathname === '/about' ||
    pathname === '/contact';

  const textClass     = isLightPage ? 'text-[#000000]' : 'text-white';
  const borderClass   = isLightPage ? 'border-[#e4e4e7]' : 'border-[#1e2c31]';
  const bgScrolled    = isLightPage
    ? 'bg-white/95 backdrop-blur-md'
    : 'bg-black/80 backdrop-blur-md';
  const bgTransparent = isLightPage ? 'bg-white' : 'bg-transparent';

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 pointer-events-none ${borderClass} ${
        scrolled ? bgScrolled : bgTransparent
      }`}
    >
      <nav
        className="pointer-events-auto max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-[72px] flex items-center justify-between gap-3 sm:gap-4"
        aria-label="Primary navigation"
      >
        {/* Brand Logo */}
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
            className="block h-7 sm:h-8 md:h-9 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Navigation Links — Inline and responsive */}
        <ul className="flex items-center gap-2.5 sm:gap-4 md:gap-8" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-[11px] sm:text-[14px] md:text-[16px] font-[450] md:font-[420] leading-[1.5] transition-colors duration-200 py-1.5 px-0.5 sm:px-1 md:py-2 block ${textClass} ${
                    isActive
                      ? isLightPage
                        ? 'opacity-100 font-semibold'
                        : 'text-white font-semibold'
                      : isLightPage
                      ? 'opacity-60 hover:opacity-100'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                        isLightPage ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs (hidden on mobile, visible on desktop md+) */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {isLightPage ? (
            <>
              <Link href="/contact" className="btn-outline-light text-sm py-2.5 px-5">
                Log in
              </Link>
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Get a Website
              </Link>
            </>
          ) : (
            <>
              <Link href="/contact" className="btn-outline-dark text-sm py-2.5 px-5">
                Log in
              </Link>
              <Link href="/contact" className="btn-outline-dark text-sm py-2.5 px-5">
                Get a Website
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
