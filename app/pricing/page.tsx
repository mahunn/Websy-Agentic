import Pricing from '@/components/Pricing';

export const metadata = {
  title: "Simple & Transparent E-Commerce Pricing | Websy",
  description: "Explore clean, fixed-price Next.js e-commerce packages with automated courier APIs, Meta CAPI, and zero recurring platform fees."
};

export default function PricingPage() {
  return (
    <main id="main-content" className="pt-[70px] sm:pt-[84px] md:pt-[92px] bg-[#F8FAFC]">
      <Pricing />
    </main>
  );
}
