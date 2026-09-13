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
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: "Websy — Bangladesh's Leading Website Making Agency",
  description:
    "Websy builds high-performance e-commerce stores, high-converting campaign landing pages, and custom web platforms.",
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
      className={`h-full antialiased scroll-smooth ${plusJakartaSans.variable} ${geist.variable}`}
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
        className="min-h-full flex flex-col bg-white text-[#111111] font-sans antialiased selection:bg-red-500/20 selection:text-red-600"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex-grow">{children}</div>

        {/* ── Footer — Minimalist Mobile-First Editorial ────────────── */}
        <footer
          className="bg-[#FAFAFA] border-t border-gray-200/80 pt-12 sm:pt-16 pb-10 px-4 sm:px-6 md:px-8 text-[#52525B]"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">

            {/* Column 1: Brand & Contact Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center mb-3 hover:opacity-85 transition-opacity" aria-label="Websy.bd — go to homepage">
                <Image
                  src="/logo-dark.svg"
                  alt="Websy logo"
                  width={115}
                  height={34}
                  className="block h-7 sm:h-8 w-auto"
                />
                <span className="text-[13px] sm:text-[14px] font-bold text-[#111111] lowercase select-none ml-[-11px] self-end mb-[1px]">
                  .bd
                </span>
              </Link>
              <p className="text-xs text-[#71717A] leading-relaxed mb-4 max-w-sm">
                Engineering high-converting e-commerce storefronts, campaign landing pages, and custom web applications.
              </p>
              <div className="text-xs text-[#52525B] space-y-1 pt-2 border-t border-gray-200/80">
                <p><span className="text-[#111111] font-semibold">WhatsApp:</span> +880 1828-034555</p>
                <p><span className="text-[#111111] font-semibold">Email:</span> <a href="mailto:info@websy.bd" className="hover:text-[#DC2626] transition-colors">info@websy.bd</a></p>
                <p><span className="text-[#111111] font-semibold">Location:</span> Dhaka &amp; Chattogram, Bangladesh</p>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <nav aria-label="Footer navigation">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3 font-display">
                Navigation
              </h3>
              <ul className="space-y-2 text-xs text-[#52525B]">
                <li>
                  <Link href="/" className="hover:text-[#DC2626] inline-block transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#DC2626] inline-block transition-colors">
                    Selected Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-[#DC2626] inline-block transition-colors">
                    Simple Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#DC2626] inline-block transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Column 3: Flagship Stores */}
            <nav aria-label="Footer portfolio links">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3 font-display">
                Featured Stores
              </h3>
              <ul className="space-y-2 text-xs text-[#52525B]">
                <li>
                  <a href="https://fleshpots.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] inline-block transition-colors">
                    FLESHPOTS (148K+ Community)
                  </a>
                </li>
                <li>
                  <a href="https://tiarashop.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] inline-block transition-colors">
                    TIARA Modest Fashion
                  </a>
                </li>
                <li>
                  <a href="https://henleyzone.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] inline-block transition-colors">
                    Henley Zone Creator Store
                  </a>
                </li>
                <li>
                  <a href="https://glamora-beige.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] inline-block transition-colors">
                    Glamora Luxe Apparel
                  </a>
                </li>
              </ul>
            </nav>

            {/* Column 4: Direct Connect */}
            <nav aria-label="Footer direct connection">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3 font-display">
                Direct Connect
              </h3>
              <ul className="space-y-2.5 text-xs text-[#52525B]">
                <li>
                  <a
                    href="https://wa.me/8801828034555?text=Hi%20Websy!%20I'd%20like%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>WhatsApp 24/7 Fast-Track</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61590418449990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#111111] transition-colors inline-block"
                  >
                    Facebook Page
                  </a>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-[#111111] transition-colors inline-block">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#111111] transition-colors inline-block">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>

          </div>

          {/* Legal bottom bar */}
          <div className="max-w-7xl mx-auto pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717A]">
            <p>
              &copy; 2026 Websy Digital Studio (Websy.bd). 100% Custom Code.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/work" className="hover:text-[#111111] transition-colors">
                Works
              </Link>
              <Link href="/pricing" className="hover:text-[#111111] transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="hover:text-[#111111] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
