import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main id="main-content" className="bg-[#F8FAFC] pt-[90px] sm:pt-[110px] pb-20 md:pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <header className="mb-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-accent bg-rose-50 border border-[#FCE7EF] rounded-full px-4 py-1.5 inline-block mb-3">
            Privacy &amp; Data Protection
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-4 leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: February 2026 • Websy Digital Studio (Websy.bd)
          </p>
        </header>

        {/* Content Card */}
        <article className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-sm text-gray-700 text-sm leading-relaxed space-y-8">
          
          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">1. Information We Collect</h2>
            <p>
              When you submit a project inquiry or contact Websy via our website, email, or WhatsApp, we may collect your name, email address, phone number, company name, project specifications, and budget range. We collect this data solely to understand your project requirements and communicate project proposals.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">2. How We Use Your Information</h2>
            <p>
              We use collected information to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-600">
              <li>Respond to your project inquiries and provide accurate cost estimates.</li>
              <li>Deliver agreed web development, design, and technical consulting services.</li>
              <li>Maintain communication throughout project staging and deployment phases.</li>
              <li>Comply with applicable legal, security, and administrative obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">3. Analytics &amp; Pixel Technologies</h2>
            <p>
              Our website may utilize standard conversion tracking tools (such as Meta / Facebook Pixel and standard web analytics) to assess website traffic, user interaction, and improve our digital campaigns. These tools operate in compliance with standard online privacy protocols and do not harvest sensitive personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">4. Data Sharing &amp; Third Parties</h2>
            <p>
              Websy does <strong>not sell, rent, or trade</strong> your personal information or client business data to any third-party advertisers or external organizations. Your information is accessed exclusively by our core engineering and project delivery team.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard encryption, SSL protocols, and secure cloud storage practices to safeguard all client communication, source codes, and credentials.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B1220] mb-3">6. Inquiries &amp; Privacy Contact</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request data updates or deletion, please email us directly at:
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
            <Link href="/terms-and-conditions" className="text-xs font-bold text-pink-accent hover:underline">
              View Terms &amp; Conditions →
            </Link>
          </div>

        </article>

      </div>
    </main>
  );
}
