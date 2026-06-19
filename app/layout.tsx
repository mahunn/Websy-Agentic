import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Websy — Premium Web Development for E-commerce & Beyond",
  description:
    "Websy builds premium websites for small e-commerce businesses, high-converting landing pages, and professional portfolio sites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 pt-[72px]">
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
              <Link href="/" className="inline-flex mb-5" aria-label="Websy — go to homepage">
                <Image
                  src="/logo.svg"
                  alt="Websy logo"
                  width={120}
                  height={36}
                  className="block h-9 w-auto"
                />
              </Link>
              <p className="text-[14px] leading-[1.49] tracking-[0.28px] text-[#9dabad] max-w-[28ch]">
                Premium web development for small businesses that want to compete with the big ones.
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
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Column 3: Case Studies */}
            <nav aria-label="Footer work links">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.72px] text-white mb-5">
                Case Studies
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://henleyzone.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Henley Zone ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://glamora-beige.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Glamora Beige ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://mahinahmad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Mahin Ahmad ↗
                  </a>
                </li>
              </ul>
            </nav>

            {/* Column 4: Contact */}
            <nav aria-label="Footer contact links">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.72px] text-white mb-5">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    Get a Website
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@websy.dev"
                    className="text-[14px] text-[#9dabad] hover:text-white transition-colors duration-200"
                  >
                    hello@websy.dev
                  </a>
                </li>
              </ul>
            </nav>

          </div>

          {/* Legal row */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-[#1e2c31] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#52525b]">
              &copy; 2026 Websy. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[#52525b] hover:text-white transition-colors duration-200"
                aria-label="Websy on Twitter/X"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.966l4.259 5.628 4.769-5.628Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#52525b] hover:text-white transition-colors duration-200"
                aria-label="Websy on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#52525b] hover:text-white transition-colors duration-200"
                aria-label="Websy on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
