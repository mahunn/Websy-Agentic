import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C0D0E",
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
    <html
      lang="en"
      className={`h-full dark antialiased scroll-smooth ${plusJakartaSans.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
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
      <body
        className="min-h-full flex flex-col bg-[#0C0D0E] text-[#F8FAFC] font-sans antialiased selection:bg-[#E25C38]/25 selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-grow">{children}</div>

        {/* ── Footer — Obsidian Dark Track ─────────────────────────── */}
        <footer
          className="bg-[#0C0D0E] border-t border-white/[0.08] pt-16 pb-12 px-6 md:px-8 text-[#94A3B8]"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

            {/* Column 1: Brand & Contact Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center mb-4 hover:opacity-85 transition-opacity" aria-label="Websy.bd — go to homepage">
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
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Engineering high-performance e-commerce stores, campaign landing pages, and bespoke web platforms.
              </p>
              <div className="text-xs text-[#94A3B8] space-y-1.5 pt-2 border-t border-white/[0.08]">
                <p><span className="text-[#F8FAFC] font-medium">Email:</span> <a href="mailto:info@websy.bd" className="hover:text-[#E25C38] transition-colors">info@websy.bd</a></p>
                <p><span className="text-[#F8FAFC] font-medium">Phone:</span> +880 1828-034555</p>
                <p><span className="text-[#F8FAFC] font-medium">Location:</span> Dhaka &amp; Chattogram, Bangladesh</p>
              </div>
            </div>

            {/* Column 2: Services */}
            <nav aria-label="Footer services links">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4 font-display">
                Services
              </h3>
              <ul className="space-y-2.5 text-xs text-[#94A3B8]">
                <li>
                  <Link href="/services" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Ad Campaign Landing Pages
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Full-Stack E-Commerce Stores
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Custom Web Applications
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Agency White-Labeling
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Speed &amp; CRO Optimization
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Column 3: Industries */}
            <nav aria-label="Footer industries links">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4 font-display">
                Industries
              </h3>
              <ul className="space-y-2.5 text-xs text-[#94A3B8]">
                <li>
                  <Link href="/industries" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    E-Commerce &amp; Retail
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Facebook &amp; TikTok Ad Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Fashion &amp; Luxury Lifestyle
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Startups &amp; MVPs
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Logistics &amp; Courier Systems
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Column 4: Work & Company */}
            <nav aria-label="Footer work links">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4 font-display">
                Work &amp; Company
              </h3>
              <ul className="space-y-2.5 text-xs text-[#94A3B8]">
                <li>
                  <Link href="/work" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Henley Zone Store
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Glamora Beige Page
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Mahin Ahmad Platform
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Engineering Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Schedule Discovery Call
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Column 5: Legal & Connect */}
            <nav aria-label="Footer legal and connect links">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4 font-display">
                Legal &amp; Connect
              </h3>
              <ul className="space-y-2.5 text-xs text-[#94A3B8]">
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#F8FAFC] hover:translate-x-0.5 inline-block transition-all duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>● WhatsApp 24/7</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61590418449990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F8FAFC] transition-colors duration-200"
                  >
                    Facebook Page
                  </a>
                </li>
              </ul>
            </nav>

          </div>

          {/* Legal bottom row */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
            <p>
              &copy; 2026 Websy Digital Studio (Websy.bd). 100% custom code • Zero vendor lock-in.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms-and-conditions" className="hover:text-[#F8FAFC] transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="hover:text-[#F8FAFC] transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-[#F8FAFC] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
