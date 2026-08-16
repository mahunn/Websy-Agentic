'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'About Us', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Industries', href: '/industries' },
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
    pathname === '/industries' ||
    pathname === '/work' ||
    pathname === '/about' ||
    pathname === '/pricing' ||
    pathname === '/contact' ||
    pathname === '/terms-and-conditions' ||
    pathname === '/privacy-policy';

  const borderClass = scrolled
    ? isLightPage
      ? 'border-gray-200/60'
      : 'border-white/10'
    : 'border-transparent';

  const bgClass = scrolled
    ? isLightPage
      ? 'bg-white/85 backdrop-blur-md shadow-sm'
      : 'bg-[#0C0D0E]/85 backdrop-blur-md shadow-lg shadow-black/20'
    : isLightPage
    ? 'bg-transparent'
    : 'bg-transparent';

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        scrolled ? 'pt-3 md:pt-4 px-4 sm:px-6 lg:px-8' : 'pt-2 md:pt-4 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <div
        className={`w-full max-w-7xl mx-auto transition-all duration-300 pointer-events-auto ${
          scrolled ? 'border rounded-full shadow-sm' : 'border-0 rounded-none'
        } ${borderClass} ${bgClass}`}
      >
        <nav
          className="h-[58px] sm:h-[64px] px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          {/* Mobile spacer */}
          <div className="w-9 h-9 md:hidden flex-shrink-0" aria-hidden="true" />

          {/* Brand Logo */}
          <div className="flex-grow md:flex-none flex items-center justify-center md:justify-start">
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
                width={125}
                height={38}
                className="block h-[30px] sm:h-[34px] w-auto transition-all duration-300"
                priority
              />
              <span 
                className={`text-[12px] sm:text-[14px] font-bold lowercase select-none ml-[-11px] sm:ml-[-13px] self-end mb-[2px] sm:mb-[1.5px] ${
                  isLightPage ? 'text-[#111111]' : 'text-white'
                }`}
              >
                .bd
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links — Musemind Editorial Center Placement */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-1 text-[14px] font-medium tracking-normal px-3.5 py-1.5 rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? isLightPage
                        ? 'text-black font-semibold bg-black/5'
                        : 'text-white font-semibold bg-white/10'
                      : isLightPage
                      ? 'text-neutral-700 hover:text-black hover:bg-neutral-100/60'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <span className="text-[11px] opacity-70 ml-0.5">↓</span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Column — Musemind 1:1 */}
          <div className="w-9 h-9 md:w-auto flex-none flex items-center justify-end">
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="bg-[#111111] hover:bg-[#262626] text-white text-[14.5px] font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm"
              >
                Contact Us
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
            isOpen ? 'max-h-[350px] opacity-100 border-t border-gray-100/80 bg-white/95 rounded-b-2xl' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? isLightPage
                        ? 'text-black bg-neutral-100 font-semibold'
                        : 'text-white bg-white/10 font-semibold'
                      : isLightPage
                      ? 'text-neutral-700 hover:bg-neutral-50'
                      : 'text-zinc-400 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="h-px bg-gray-100/80 my-2" />
            <div className="flex flex-col sm:flex-row gap-3 px-3">
              <a
                href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium py-2.5 px-4 text-center rounded-full border border-neutral-200 text-neutral-900 hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="text-[14px] font-medium py-2.5 text-center rounded-full bg-neutral-950 text-white hover:bg-neutral-800 shadow-sm transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
