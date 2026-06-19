'use client';

import { useState } from 'react';
import Link from 'next/link';

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

    // Mock presentational API submit call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <main id="main-content" className="bg-[#050505] py-16 md:py-24">
      <section className="max-w-2xl mx-auto px-6" aria-labelledby="contact-headline">
        
        {/* Section Header */}
        <header className="mb-12 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
              Start a Project
            </span>
          </div>
          <h1
            id="contact-headline"
            className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4 leading-tight"
          >
            Let's build something great.
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </header>

        {/* Presentational Form Panel */}
        <div className="bg-[#0f0f0f] border border-zinc-800/40 rounded-2xl p-8 md:p-10 shadow-xl">
          
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="field-name" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Your Name
                </label>
                <input
                  id="field-name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#050505] text-white placeholder-zinc-600 border border-zinc-800/60 rounded-xl px-4 py-3 min-h-[46px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="field-email" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Email Address
                </label>
                <input
                  id="field-email"
                  type="email"
                  required
                  placeholder="jane@yourbusiness.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#050505] text-white placeholder-zinc-600 border border-zinc-800/60 rounded-xl px-4 py-3 min-h-[46px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Project Type Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="field-type" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  What are you looking for?
                </label>
                <div className="relative">
                  <select
                    id="field-type"
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#050505] text-white border border-zinc-800/60 rounded-xl px-4 py-3 min-h-[46px] appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="" disabled>Select a service…</option>
                    <option value="ecommerce">Small E-Commerce Store</option>
                    <option value="landing">Landing Page</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="local">Local Business</option>
                  </select>
                  {/* Select arrow indicator */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" aria-hidden="true">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Budget Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="field-budget" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Project Budget
                </label>
                <div className="relative">
                  <select
                    id="field-budget"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#050505] text-white border border-zinc-800/60 rounded-xl px-4 py-3 min-h-[46px] appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="" disabled>Select a budget tier…</option>
                    <option value="under-5k">Less than ৳5,000 (Landing Pages)</option>
                    <option value="10k-20k">৳10,000 - ৳20,000 (Standard E-Commerce)</option>
                    <option value="20k-50k">৳20,000 - ৳50,000 (Advanced E-Commerce)</option>
                    <option value="50k-plus">৳50,000+ (Enterprise Custom)</option>
                  </select>
                  {/* Select arrow indicator */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" aria-hidden="true">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="field-message" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Tell us about your project
                </label>
                <textarea
                  id="field-message"
                  placeholder="Describe your business, what you need, and any relevant details…"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#050505] text-white placeholder-zinc-600 border border-zinc-800/60 rounded-xl px-4 py-3 min-h-[120px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-vertical"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-base font-semibold py-4 px-6 rounded-full transition-all duration-200 shadow-md shadow-primary/10 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>

              <p className="text-center text-xs text-zinc-500">
                We reply within 24 hours. No spam, ever.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">Thank you!</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-[36ch] mx-auto">
                Your project inquiry has been received. We will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
                  setIsSuccess(false);
                }}
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 border border-zinc-800 text-white text-xs font-semibold py-2.5 px-6 rounded-full transition-colors duration-200"
              >
                Send another inquiry
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
