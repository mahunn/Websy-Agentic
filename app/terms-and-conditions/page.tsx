import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main id="main-content" className="bg-[#F8FAFC] pt-[90px] sm:pt-[110px] pb-20 md:pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <header className="mb-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-accent bg-rose-50 border border-[#FCE7EF] rounded-full px-4 py-1.5 inline-block mb-3">
            Legal &amp; Agreements
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-4 leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: February 2026 • Websy Digital Studio (Websy.bd)
          </p>
        </header>

        {/* Content Card */}
        <article className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-sm text-gray-700 text-sm leading-relaxed space-y-8">
          
          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">1. Scope of Engagement &amp; Services</h2>
            <p>
              Websy provides professional web design, front-end and back-end web development, e-commerce stores, campaign landing pages, and digital software development. Every project is scoped and agreed upon with clear milestones, deliverables, and turnaround timelines prior to execution.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">2. 100% Code Ownership &amp; Intellectual Property</h2>
            <p>
              Upon receipt of final project payment, the client is granted <strong>100% full ownership</strong> of all custom source code, design assets, and digital files developed specifically for their project. Websy retains no proprietary vendor lock-in or recurring builder licensing on custom-built client codebases.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">3. Confidentiality &amp; NDA Protection</h2>
            <p>
              We treat all client project data, product catalogs, customer information, business logic, and agency client details with strict confidentiality. For marketing agencies employing our white-label services, Websy operates 100% anonymously under strict Non-Disclosure Agreements (NDA) and will never pitch, contact, or market to the client’s end customers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">4. Milestone Payments &amp; Delivery</h2>
            <p>
              Projects typically operate on a transparent milestone structure (e.g., initial kickoff deposit and remaining balance upon review and approval of the live staging preview). Turnaround timelines (e.g., 24–48 hours for single-product ad landing pages, 3–7 days for standard e-commerce) commence once all required initial assets (product info, copy, images) are provided.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">5. Post-Launch Warranty &amp; Support</h2>
            <p>
              Websy provides standard post-launch bug fixing and technical support to ensure your website operates smoothly. Ongoing maintenance, speed monitoring, and feature updates can be supported through our flexible Care &amp; Growth retainers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">6. Contact &amp; Legal Notices</h2>
            <p>
              If you have any questions regarding these Terms &amp; Conditions or wish to request custom NDA documentation for your project, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 space-y-1">
              <p>Email: <a href="mailto:info@websy.bd" className="text-pink-accent hover:underline">info@websy.bd</a></p>
              <p>Phone: +880 1828-034555</p>
              <p>Location: Dhaka &amp; Chattogram, Bangladesh</p>
            </div>
          </section>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/" className="text-xs font-bold text-gray-900 hover:text-pink-accent transition-colors">
              ← Return to Home
            </Link>
            <Link href="/privacy-policy" className="text-xs font-bold text-pink-accent hover:underline">
              View Privacy Policy →
            </Link>
          </div>

        </article>

      </div>
    </main>
  );
}
