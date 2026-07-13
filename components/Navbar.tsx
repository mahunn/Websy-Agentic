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
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isLightPage =
    pathname === '/' ||
    pathname === '/services' ||
    pathname === '/work' ||
    pathname === '/about' ||
    pathname === '/contact';

  const borderClass = scrolled
    ? isLightPage
      ? 'border-gray-200/50'
      : 'border-white/10'
    : 'border-transparent';

  const bgClass = scrolled
    ? isLightPage
      ? 'bg-white/80 backdrop-blur-md shadow-md shadow-gray-100/10'
      : 'bg-[#0B1220]/80 backdrop-blur-md shadow-lg shadow-black/20'
    : isLightPage
    ? 'bg-white/50 backdrop-blur-sm'
    : 'bg-transparent';

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        scrolled ? 'pt-3 md:pt-4 px-4 sm:px-6 lg:px-8' : 'pt-0 px-0'
      }`}
    >
      <div
        className={`w-full max-w-7xl mx-auto transition-all duration-300 pointer-events-auto ${
          scrolled ? 'border rounded-2xl shadow-lg' : 'border-0 rounded-none'
        } ${borderClass} ${bgClass}`}
      >
        <nav
          className="h-[56px] sm:h-[64px] px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          {/* Mobile spacer to center the logo */}
          <div className="w-9 h-9 md:hidden flex-shrink-0" aria-hidden="true" />

          {/* Brand Logo */}
          <div className="flex-grow md:flex-1 flex items-center justify-center md:justify-start">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex-shrink-0 flex items-center hover:opacity-85 transition-opacity"
              aria-label="Websy.bd — go to homepage"
            >
              <Image
                src={isLightPage ? "/logo-dark.svg" : "/logo.svg"}
                alt="Websy logo"
                width={130}
                height={40}
                className="block h-[31px] sm:h-[34px] w-auto transition-all duration-300"
                priority
              />
              <span 
                className={`text-[12px] sm:text-[14.5px] font-bold lowercase select-none ml-[-12px] sm:ml-[-14px] self-end mb-[2px] sm:mb-[1.5px] ${
                  isLightPage ? 'text-[#0B1220]' : 'text-white'
                }`}
              >
                .bd
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-medium tracking-wide px-4 py-2 rounded-lg transition-all duration-200 select-none ${
                    isActive
                      ? isLightPage
                        ? 'text-pink-accent bg-pink-50/50 font-bold'
                        : 'text-white bg-white/10 font-bold'
                      : isLightPage
                      ? 'text-[#0B1220]/75 hover:text-black hover:bg-gray-100/50'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Column */}
          <div className="w-9 h-9 md:w-auto flex-none md:flex-1 flex items-center justify-end">
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className={`text-[13.5px] font-semibold px-4 py-2 transition-colors duration-200 ${
                  isLightPage
                    ? 'text-[#0B1220]/80 hover:text-pink-accent'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                Log in
              </Link>
              <Link
                href="/contact"
                className={`text-[13.5px] font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm ${
                  isLightPage
                    ? 'bg-[#0B1220] text-white hover:bg-pink-accent hover:shadow-lg hover:shadow-pink-500/20 active:scale-95'
                    : 'bg-white text-black hover:bg-pink-accent hover:text-white hover:shadow-lg hover:shadow-pink-500/20 active:scale-95'
                }`}
              >
                Get a Website
              </Link>
            </div>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden flex items-center justify-center p-2 rounded-lg transition-colors ${
                isLightPage ? 'hover:bg-gray-100/50' : 'hover:bg-white/5'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 rounded-full transition-transform duration-300 ${
                    isLightPage ? 'bg-[#0B1220]' : 'bg-white'
                  } ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                />
                <span
                  className={`w-full h-0.5 rounded-full transition-opacity duration-300 ${
                    isLightPage ? 'bg-[#0B1220]' : 'bg-white'
                  } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`w-full h-0.5 rounded-full transition-transform duration-300 ${
                    isLightPage ? 'bg-[#0B1220]' : 'bg-white'
                  } ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[350px] opacity-100 border-t border-gray-100/80' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? isLightPage
                        ? 'text-pink-accent bg-pink-50/50 font-semibold'
                        : 'text-white bg-white/10 font-semibold'
                      : isLightPage
                      ? 'text-[#0B1220]/80 hover:bg-gray-50'
                      : 'text-zinc-400 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="h-px bg-gray-100/80 my-2" />
            <div className="flex flex-col sm:flex-row gap-3 px-3">
              <Link
                href="/contact"
                className={`text-[14px] font-semibold py-2.5 text-center rounded-xl border transition-colors ${
                  isLightPage
                    ? 'border-gray-200 text-[#0B1220] hover:bg-gray-50'
                    : 'border-white/10 text-white hover:bg-white/5'
                }`}
              >
                Log in
              </Link>
              <Link
                href="/contact"
                className="text-[14px] font-semibold py-2.5 text-center rounded-xl bg-pink-accent text-white hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 transition-all"
              >
                Get a Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
