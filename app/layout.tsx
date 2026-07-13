import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#111111",
};

export const metadata: Metadata = {
  title: "Websy — Premium Websites for E-commerce & Beyond",
  description:
    "Websy builds premium websites for small e-commerce businesses, high-converting landing pages, and professional portfolio sites.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900" suppressHydrationWarning>
        <Navbar />
        <div className="flex-grow">{children}</div>

        {/* ── Footer — dark track ─────────────────────────────────── */}
        <footer
          className="bg-[#000000] border-t border-[#1e2c31] pt-16 pb-10 px-6 md:px-8"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Column 1: Brand */}
            <div>
              <Link href="/" className="inline-flex items-center mb-5 hover:opacity-85 transition-opacity" aria-label="Websy.bd — go to homepage">
                <Image
                  src="/logo.svg"
                  alt="Websy logo"
                  width={120}
                  height={36}
                  className="block h-9 w-auto"
                />
                <span className="text-[14.5px] font-bold text-white lowercase select-none ml-[-12px] self-end mb-[1.5px]">
                  .bd
                </span>
              </Link>
              <p className="text-[14px] leading-[1.49] tracking-[0.28px] text-[#9dabad] max-w-[28ch]">
                Premium websites for e-commerce brands, portfolios, and growing businesses.
              </p>
            </div>

            {/* Column 2: Services */}
            <nav aria-label="Footer services links">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.72px] text-white mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    E-Commerce Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Portfolio Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Business Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Website Optimization
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Column 3: Case Studies / Projects */}
            <nav aria-label="Footer work links">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.72px] text-white mb-5">
                Projects
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://henleyzone.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Henley Zone
                  </a>
                </li>
                <li>
                  <a
                    href="https://glamora-beige.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Glamora Beige
                  </a>
                </li>
                <li>
                  <a
                    href="https://mahinahmad.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Mahin Ahmad
                  </a>
                </li>
              </ul>
            </nav>

            {/* Column 4: Contact */}
            <nav aria-label="Footer contact links">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.72px] text-white mb-5">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Contact Page
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:info@websy.bd"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    info@websy.bd
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801828034555"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    01828034555
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61590418449990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Facebook Page
                  </a>
                </li>
              </ul>
            </nav>

          </div>

          {/* Legal row */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-[#1e2c31] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#52525b]">
              &copy; 2026 Websy.bd. All rights reserved.
            </p>

            {/* Links and Socials */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/"
                className="text-[13px] text-[#52525b] hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-[13px] text-[#52525b] hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-[13px] text-[#52525b] hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-[13px] text-[#52525b] hover:text-white transition-colors"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-[13px] text-[#52525b] hover:text-white transition-colors"
              >
                Contact
              </Link>
              <span className="w-px h-3 bg-[#1e2c31] hidden sm:inline" />
              <a
                href="https://www.facebook.com/profile.php?id=61590418449990"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#52525b] hover:text-white transition-colors duration-200"
                aria-label="Websy on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
