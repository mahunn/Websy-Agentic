'use client';

import { useState } from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FiMail, FiPhone, FiCheck } from 'react-icons/fi';

const projectTypesMap: Record<string, string> = {
  ecommerce: 'Small E-Commerce Store',
  landing: 'Landing Page',
  portfolio: 'Portfolio',
  local: 'Local Business',
};

const budgetsMap: Record<string, string> = {
  'under-5k': 'Less than ৳5,000 (Landing Pages)',
  '10k-20k': '৳10,000 - ৳20,000 (Standard E-Commerce)',
  '20k-50k': '৳20,000 - ৳50,000 (Advanced E-Commerce)',
  '50k-plus': '৳50,000+ (Enterprise Custom)',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check validation
    if (!formData.name || !formData.email || !formData.projectType || !formData.budget) {
      return;
    }

    setIsSubmitting(true);

    // Format email body
    const subject = `New Project Inquiry from ${formData.name}`;
    const nameText = `Name: ${formData.name}`;
    const emailText = `Email: ${formData.email}`;
    const projectText = `Project Type: ${projectTypesMap[formData.projectType] || formData.projectType}`;
    const budgetText = `Budget: ${budgetsMap[formData.budget] || formData.budget}`;
    const msgText = formData.message ? `Details: ${formData.message}` : '';

    const lines = [
      "Hi Websy!",
      "I'd like to submit a new project inquiry.",
      "",
      nameText,
      emailText,
      projectText,
      budgetText,
      msgText
    ].filter(Boolean);

    const emailBody = lines.join('\n');
    const mailtoUrl = `mailto:info@websy.bd?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Track lead conversion event for Meta (Facebook) Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: formData.projectType,
        value: formData.budget === 'under-5k' ? 3999 : (formData.budget === '10k-20k' ? 9999 : 25000),
        currency: 'BDT'
      });
    }

    // Open email client
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleWhatsAppClick = () => {
    // Generate text message based on form values
    const nameText = formData.name ? `Name: ${formData.name}` : '';
    const emailText = formData.email ? `Email: ${formData.email}` : '';
    const projectText = formData.projectType ? `Project Type: ${projectTypesMap[formData.projectType] || formData.projectType}` : '';
    const budgetText = formData.budget ? `Budget: ${budgetsMap[formData.budget] || formData.budget}` : '';
    const msgText = formData.message ? `Details: ${formData.message}` : '';

    const lines = [
      "Hi Websy! I'd like to discuss a project.",
      nameText,
      emailText,
      projectText,
      budgetText,
      msgText
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/8801828034555?text=${encodedMessage}`;

    // Track lead conversion event for Meta (Facebook) Pixel when contacting via WhatsApp
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: formData.projectType || 'WhatsApp Start',
        value: formData.budget === 'under-5k' ? 3999 : (formData.budget === '10k-20k' ? 9999 : 25000),
        currency: 'BDT',
        content_category: 'WhatsApp Contact'
      });
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <main id="main-content" className="bg-[#F8FAFC] pt-[90px] sm:pt-[110px] pb-16 md:pb-24 relative overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(231,52,99,0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(124,58,237,0.015) 0%, transparent 50%)'
        }}
      />

      <section className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h1
                className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-5 leading-[1.15]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Let's build something <span className="text-pink-accent">great</span> together.
              </h1>

              <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed mb-8 max-w-sm">
                Tell us about your project, or reach out directly.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-3.5 mb-8 max-w-md">

                {/* Email Address */}
                <a
                  href="mailto:info@websy.bd"
                  className="group flex items-center gap-4 bg-white border border-gray-200/70 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-pink-accent/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-soft-pink flex items-center justify-center text-pink-accent group-hover:scale-105 transition-transform duration-300">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">Email Us</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-pink-accent transition-colors duration-200">info@websy.bd</span>
                  </div>
                </a>

                {/* Phone Number */}
                <a
                  href="tel:+8801828034555"
                  className="group flex items-center gap-4 bg-white border border-gray-200/70 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-pink-accent/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center text-pink-accent group-hover:scale-105 transition-transform duration-300">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">Call or SMS</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-pink-accent transition-colors duration-200">018280-34555</span>
                  </div>
                </a>

                {/* Facebook Page */}
                <a
                  href="https://www.facebook.com/profile.php?id=61590418449990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white border border-gray-200/70 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform duration-300">
                    <FaFacebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">Facebook Page</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">Websy.bd</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Visual reassurance points */}
            <div className="border-t border-gray-200/50 pt-5 mt-4 flex flex-wrap gap-4 text-xs font-semibold text-gray-400">
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-emerald-500 w-4 h-4" />
                <span>24h Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-emerald-500 w-4 h-4" />
                <span>Direct Developer Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheck className="text-emerald-500 w-4 h-4" />
                <span>100% Code Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column - Form / WhatsApp */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-gray-100/40 relative">

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Name and Email Grid Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-name" className="text-xs font-semibold text-gray-500">
                        Your Name
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl px-4 py-2.5 min-h-[44px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-accent/10 focus:border-pink-accent font-semibold"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-email" className="text-xs font-semibold text-gray-500">
                        Email Address
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        required
                        placeholder="jane@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F8FAFC] text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl px-4 py-2.5 min-h-[44px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-accent/10 focus:border-pink-accent font-semibold"
                      />
                    </div>
                  </div>

                  {/* Project Type and Budget Grid Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type Select */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-type" className="text-xs font-semibold text-gray-500">
                        What are you looking for?
                      </label>
                      <div className="relative">
                        <select
                          id="field-type"
                          required
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#F8FAFC] text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 min-h-[44px] appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-accent/10 focus:border-pink-accent font-semibold text-sm"
                        >
                          <option value="" disabled className="text-gray-400">Select a service…</option>
                          <option value="ecommerce">Small E-Commerce Store</option>
                          <option value="landing">Landing Page</option>
                          <option value="portfolio">Portfolio</option>
                          <option value="local">Local Business</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" aria-hidden="true">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Project Budget Select */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="field-budget" className="text-xs font-semibold text-gray-500">
                        Project Budget
                      </label>
                      <div className="relative">
                        <select
                          id="field-budget"
                          required
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#F8FAFC] text-gray-900 border border-gray-200 rounded-xl px-4 py-2.5 min-h-[44px] appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-accent/10 focus:border-pink-accent font-semibold text-sm"
                        >
                          <option value="" disabled className="text-gray-400">Select a budget tier…</option>
                          <option value="under-5k">Less than ৳5,000 (Landing Pages)</option>
                          <option value="10k-20k">৳10,000 - ৳20,000 (Standard E-Commerce)</option>
                          <option value="20k-50k">৳20,000 - ৳50,000 (Advanced E-Commerce)</option>
                          <option value="50k-plus">৳50,000+ (Enterprise Custom)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" aria-hidden="true">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="field-message" className="text-xs font-semibold text-gray-500">
                      Tell us about your project
                    </label>
                    <textarea
                      id="field-message"
                      placeholder="Describe what you need…"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8FAFC] text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl px-4 py-2.5 min-h-[80px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-accent/10 focus:border-pink-accent resize-vertical font-semibold"
                    />
                  </div>

                  {/* Actions Row: Email and WhatsApp */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                    {/* Submit via Email */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center bg-[#0B1220] hover:bg-gray-800 text-white text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </button>

                    {/* WhatsApp Button */}
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="flex-1 inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm gap-2 cursor-pointer"
                    >
                      <FaWhatsapp className="w-5 h-5 shrink-0" />
                      <span>Discuss on WhatsApp</span>
                    </button>
                  </div>

                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-pink-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3.2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Thank you!</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[36ch] mx-auto font-medium">
                    Your project inquiry has been received. We will get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => {
                        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
                        setIsSuccess(false);
                      }}
                      className="inline-flex items-center justify-center bg-transparent hover:bg-gray-50 border border-gray-200 text-gray-900 text-xs font-bold py-3 px-6 rounded-full transition-colors duration-200 cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                    <button
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-200 gap-2 cursor-pointer"
                    >
                      <FaWhatsapp className="w-4 h-4 shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
