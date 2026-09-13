'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Works', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        scrolled ? 'pt-2.5 sm:pt-3 px-3 sm:px-6 lg:px-8' : 'pt-2 sm:pt-4 px-3 sm:px-6 lg:px-8'
      }`}
    >
      <div
        className={`w-full max-w-7xl mx-auto transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl sm:rounded-full shadow-sm'
            : 'bg-transparent border-0'
        }`}
      >
        <nav
          className="h-[54px] sm:h-[60px] md:h-[64px] px-3.5 sm:px-6 md:px-8 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Brand Logo (Left on Mobile & Desktop) */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex-shrink-0 flex items-center hover:opacity-85 transition-opacity py-1"
              aria-label="Websy.bd — go to homepage"
            >
              <Image
                src="/logo-dark.svg"
                alt="Websy logo"
                width={120}
                height={36}
                className="block h-[28px] sm:h-[32px] w-auto"
                priority
              />
              <span className="text-[12.5px] sm:text-[14px] font-bold text-[#111111] lowercase select-none ml-[-11px] self-end mb-[1px]">
                .bd
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 text-[14.5px] font-medium px-4 py-1.5 rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? 'text-[#111111] font-semibold bg-black/5'
                      : 'text-neutral-600 hover:text-[#111111] hover:bg-neutral-100/70'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Button (Desktop) & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            {/* Desktop Contact Us Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className={`text-[14px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm ${
                  pathname === '/contact'
                    ? 'bg-[#DC2626] text-white shadow-red-500/20'
                    : 'bg-[#111111] hover:bg-black text-white'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 border border-gray-200/80 text-[#111111] shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-4 h-3.5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-[#111111] rounded-full transition-transform duration-300 ${
                    isOpen ? 'rotate-45 translate-y-[6px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#111111] rounded-full transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#111111] rounded-full transition-transform duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[360px] opacity-100 border-t border-gray-100 bg-white/98 rounded-b-2xl shadow-lg' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#111111] bg-neutral-100 font-bold'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-black'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#DC2626]" />}
                </Link>
              );
            })}

            <div className="h-px bg-gray-100 my-2" />

            <div className="flex flex-col gap-2 pt-1">
              <Link
                href="/contact"
                className={`text-[15px] font-bold py-3 text-center rounded-full transition-all shadow-sm ${
                  pathname === '/contact'
                    ? 'bg-[#DC2626] text-white'
                    : 'bg-[#111111] text-white hover:bg-black'
                }`}
              >
                Contact Us
              </Link>

              <a
                href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold py-2.5 px-4 text-center rounded-full border border-gray-200 text-neutral-800 hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
