'use client';

import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800/40">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between" aria-label="Primary navigation">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity" aria-label="Websy — go to homepage">
          <Image
            src="/logo.svg"
            alt="Websy logo"
            width={90}
            height={28}
            className="block h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-medium text-sm transition-colors duration-200 py-2 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-200 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-[1px]"
          >
            Get a Website
          </Link>
        </div>

        {/* Hamburger Mobile Trigger */}
        <button
          className="flex md:hidden flex-col justify-center gap-1.5 w-10 h-10 p-2 text-white cursor-pointer relative z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
        </button>

      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 h-screen w-full bg-[#050505] z-40 flex flex-col justify-center items-center gap-8 px-6 transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col items-center gap-6" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-2xl font-light hover:text-primary transition-colors ${
                    isActive ? 'text-primary' : 'text-zinc-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="w-full max-w-[280px] mt-4">
          <Link
            href="/contact"
            className="block text-center bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-full transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Get a Website
          </Link>
        </div>
      </div>
    </header>
  );
}
