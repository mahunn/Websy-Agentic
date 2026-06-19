'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Our Team', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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
        className="pointer-events-auto max-w-7xl mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Websy — go to homepage"
        >
          <Image
            src="/logo-dark.svg"
            alt="Websy logo"
            width={120}
            height={36}
            className={`block h-9 w-auto transition-all duration-300 ${
              isLightPage ? '' : 'brightness-0 invert'
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-[16px] font-[420] leading-[1.5] transition-colors duration-200 py-2 ${textClass} ${
                    isActive
                      ? isLightPage
                        ? 'opacity-100'
                        : 'text-white'
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

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Hamburger — Mobile */}
        <button
          className={`flex md:hidden flex-col justify-center items-center gap-[5px] w-12 h-12 p-2 cursor-pointer relative z-[60] focus:outline-none ${
            isOpen ? 'text-white' : textClass
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span
            className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 origin-center ${
              isOpen ? 'translate-y-[6.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-opacity duration-200 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 origin-center ${
              isOpen ? '-translate-y-[6.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 h-screen w-full z-50 flex flex-col justify-center items-center gap-10 px-6 transition-all duration-300 md:hidden bg-[#000000] ${
          isOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-3 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col items-center gap-8" role="list">
          {[{ label: 'Home', href: '/' }, ...navLinks].map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`display-xl text-white transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                  }`}
                  style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: 300 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col items-center gap-3 w-full max-w-[280px] mt-2">
          <Link
            href="/contact"
            className="btn-outline-dark w-full text-center text-sm py-3"
            onClick={() => setIsOpen(false)}
          >
            Get a Website
          </Link>
        </div>
      </div>
    </header>
  );
}
