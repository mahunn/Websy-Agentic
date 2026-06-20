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
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
    opacity: 0,
  });

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

  // Measure and align the active sliding indicator pill
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(`[data-nav-link="${pathname}"]`) as HTMLElement | null;
      if (activeEl) {
        const parentEl = activeEl.closest('ul') as HTMLElement | null;
        if (parentEl) {
          const activeRect = activeEl.getBoundingClientRect();
          const parentRect = parentEl.getBoundingClientRect();
          setIndicatorStyle({
            left: activeRect.left - parentRect.left + parentEl.scrollLeft,
            width: activeRect.width,
            top: activeRect.top - parentRect.top,
            height: activeRect.height,
            opacity: 1,
          });
          // Scroll active element into view smoothly on narrow/touch screens
          activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    // Short timeout to guarantee page updates and layout paints have finalized
    const timer = setTimeout(updateIndicator, 40);
    window.addEventListener('resize', updateIndicator);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [pathname]);

  // Active transparent rose/red pill design
  const pillBg = isLightPage
    ? 'bg-gradient-to-b from-[#E11D48]/6 to-[#E11D48]/12 border border-[#E11D48]/18 shadow-[0_2px_8px_rgba(225,29,72,0.08)]'
    : 'bg-gradient-to-b from-[#E11D48]/18 to-[#E11D48]/28 border border-[#E11D48]/35 backdrop-blur-[4px] shadow-[0_4px_12px_rgba(225,29,72,0.24)]';

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 pointer-events-none ${borderClass} ${
        scrolled ? bgScrolled : bgTransparent
      }`}
    >
      <nav
        className="pointer-events-auto max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-[56px] sm:h-[60px] md:h-[64px] flex items-center justify-start md:justify-between gap-4 md:gap-4"
        aria-label="Primary navigation"
      >
        {/* Brand Logo Column */}
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
              className="block h-[24px] sm:h-[34px] md:h-[42px] w-auto transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* Segmented Capsule Nav Links Column */}
        <div className="flex-none md:flex-initial flex justify-start md:justify-center overflow-hidden min-w-0 shrink">
          <ul
            className={`relative flex items-center h-[40px] sm:h-[44px] md:h-[46px] p-1 rounded-full border transition-all duration-300 overflow-x-auto scrollbar-none flex-nowrap whitespace-nowrap max-w-full ${
              isLightPage
                ? 'bg-gray-100/50 border-gray-200/50 backdrop-blur-sm'
                : 'bg-white/[0.03] border-white/[0.08] backdrop-blur-md'
            }`}
            role="list"
          >
            {/* Sliding Background Pill */}
            <span
              className={`absolute top-0 left-0 rounded-full z-0 pointer-events-none ${pillBg}`}
              style={{
                transform: `translate3d(${indicatorStyle.left}px, ${indicatorStyle.top}px, 0)`,
                width: `${indicatorStyle.width}px`,
                height: `${indicatorStyle.height}px`,
                opacity: indicatorStyle.opacity,
                transition: 'transform 380ms cubic-bezier(0.16, 1, 0.3, 1), width 380ms cubic-bezier(0.16, 1, 0.3, 1), height 380ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms ease',
              }}
            />

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative z-10">
                  <Link
                    href={link.href}
                    data-nav-link={link.href}
                    className={`h-[30px] w-[56px] min-[375px]:w-[60px] min-[410px]:w-[66px] sm:h-[36px] sm:w-[90px] md:h-[38px] md:w-[110px] text-[10.5px] min-[375px]:text-[11.5px] min-[410px]:text-[12px] sm:text-[13.5px] md:text-[15px] font-medium tracking-wide transition-colors duration-250 flex items-center justify-center rounded-full select-none ${
                      isActive
                        ? isLightPage
                          ? 'text-[#E11D48]'
                          : 'text-white'
                        : isLightPage
                        ? 'text-gray-500 hover:text-gray-900'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop CTAs Column (hidden on mobile, visible on desktop md+) */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-3 flex-shrink-0">
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
