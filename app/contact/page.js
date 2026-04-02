"use client";
import { useState } from "react";
import { RevealGroup } from "@/components/useReveal";

const INQUIRY_TYPES = [
  "Book an Experience",
  "Membership Question",
  "Vendor Partnership",
  "General Inquiry",
  "Other",
];

const EXPERIENCE_TYPES = [
  "Private Chef Dining",
  "In-Home Spa & Wellness",
  "Romance & Date Night",
  "Luxury Celebration Setup",
  "Intimate Gathering / Dinner Party",
  "Wellness & Mindfulness Session",
  "Something Custom / Not Sure Yet",
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isBooking = inquiryType === "Book an Experience";

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to email / HoneyBook / Stripe
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-44 pb-24 section-padding overflow-hidden hero-gradient">
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] rounded-full
                        bg-brand-gold/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="h-px w-8 bg-brand-gold" />
            <span className="font-body text-brand-gold text-xs uppercase tracking-[0.3em]">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-display-xl text-white mb-7 animate-fade-up"
              style={{ fontWeight: 300 }}>
            Let&rsquo;s Design{" "}
            <em className="text-brand-gold">Your Experience</em>
          </h1>
          <p className="font-body text-white/55 text-lg max-w-2xl leading-relaxed animate-fade-up"
             style={{ animationDelay: "0.15s" }}>
            Tell us what you have in mind and we&rsquo;ll take it from there.
            Our concierge team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="section-padding pb-section">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3 reveal">
              {submitted ? (
                <div className="card-elevated text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-brand-sage/20 text-brand-sage
                                  flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-display-sm text-brand-navy mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-brand-muted max-w-md mx-auto">
                    Thank you for reaching out. Our concierge team will review your
                    experience request and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block font-body text-sm font-semibold text-brand-navy mb-2">
                        First Name <span className="text-brand-coral">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                   bg-white text-brand-charcoal placeholder:text-brand-muted/50
                                   focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                   transition-all duration-300"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-body text-sm font-semibold text-brand-navy mb-2">
                        Last Name <span className="text-brand-coral">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                   bg-white text-brand-charcoal placeholder:text-brand-muted/50
                                   focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                   transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-semibold text-brand-navy mb-2">
                      Email <span className="text-brand-coral">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                 bg-white text-brand-charcoal placeholder:text-brand-muted/50
                                 focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                 transition-all duration-300"
                      placeholder="jane@email.com"
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-semibold text-brand-navy mb-2">
                      Phone <span className="text-brand-muted text-xs">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                 bg-white text-brand-charcoal placeholder:text-brand-muted/50
                                 focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                 transition-all duration-300"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block font-body text-sm font-semibold text-brand-navy mb-2">
                      What can we help with? <span className="text-brand-coral">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      required
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                 bg-white text-brand-charcoal
                                 focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                 transition-all duration-300 appearance-none
                                 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B8B8B%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C/svg%3E')]
                                 bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                    >
                      <option value="">Select one...</option>
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* ── Conditional Intake Fields (show if booking) ── */}
                  {isBooking && (
                    <div className="space-y-6 p-6 bg-brand-sand/20 border border-brand-sand/60
                                    animate-scale-in">
                      <p className="font-body text-xs text-brand-gold font-semibold uppercase tracking-[0.15em]">
                        Tell us about your experience
                      </p>

                      {/* Experience type */}
                      <div>
                        <label htmlFor="experienceType" className="block font-body text-sm text-brand-charcoal mb-2">
                          What type of experience?
                        </label>
                        <select
                          id="experienceType"
                          className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                     bg-white text-brand-charcoal
                                     focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                     transition-all duration-300 appearance-none
                                     bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B8B8B%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C/svg%3E')]
                                     bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                        >
                          <option value="">Select one...</option>
                          {EXPERIENCE_TYPES.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      {/* Dates */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="startDate" className="block font-body text-sm text-brand-charcoal mb-2">
                            Preferred date
                          </label>
                          <input
                            id="startDate"
                            type="date"
                            className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                       bg-white text-brand-charcoal
                                       focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                       transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label htmlFor="endDate" className="block font-body text-sm text-brand-charcoal mb-2">
                            Alternate date (optional)
                          </label>
                          <input
                            id="endDate"
                            type="date"
                            className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                       bg-white text-brand-charcoal
                                       focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                       transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Group size */}
                      <div>
                        <label htmlFor="groupSize" className="block font-body text-sm text-brand-charcoal mb-2">
                          How many guests?
                        </label>
                        <input
                          id="groupSize"
                          type="number"
                          min="1"
                          className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                     bg-white text-brand-charcoal placeholder:text-brand-muted/50
                                     focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                     transition-all duration-300"
                          placeholder="2"
                        />
                      </div>

                      {/* Budget range */}
                      <div>
                        <label htmlFor="budget" className="block font-body text-sm text-brand-charcoal mb-2">
                          Budget range
                        </label>
                        <select
                          id="budget"
                          className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                     bg-white text-brand-charcoal
                                     focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                     transition-all duration-300 appearance-none
                                     bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B8B8B%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C/svg%3E')]
                                     bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                        >
                          <option value="">Select one...</option>
                          <option value="under-2500">Under $2,500</option>
                          <option value="2500-5000">$2,500 — $5,000</option>
                          <option value="5000-10000">$5,000 — $10,000</option>
                          <option value="10000-plus">$10,000+</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>

                      {/* Add-ons */}
                      <div>
                        <label htmlFor="addons" className="block font-body text-sm text-brand-charcoal mb-2">
                          Anything specific you want to include?
                        </label>
                        <input
                          id="addons"
                          type="text"
                          className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                     bg-white text-brand-charcoal placeholder:text-brand-muted/50
                                     focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                     transition-all duration-300"
                          placeholder="e.g., rose petal setup, wine pairing, sound bath..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-semibold text-brand-navy mb-2">
                      Message <span className="text-brand-coral">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-brand border border-brand-sand
                                 bg-white text-brand-charcoal placeholder:text-brand-muted/50
                                 focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20
                                 transition-all duration-300 resize-none"
                      placeholder="Tell us more about what you're looking for..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 reveal reveal-delay-2">
              <div className="card-elevated mb-8">
                <h3 className="font-display text-xl text-brand-navy mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-coral mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="font-body font-semibold text-sm text-brand-navy">Email</p>
                      <p className="text-brand-muted text-sm">hello@thestaycay.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-coral mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-body font-semibold text-sm text-brand-navy">Response Time</p>
                      <p className="text-brand-muted text-sm">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-coral mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="font-body font-semibold text-sm text-brand-navy">Based In</p>
                      <p className="text-brand-muted text-sm">Available nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Member CTA */}
              <div className="bg-brand-navy p-8 text-white">
                <h3 className="font-display text-xl mb-3" style={{ fontWeight: 400 }}>Already a Member?</h3>
                <p className="text-white/55 text-sm mb-6 leading-relaxed">
                  Members enjoy priority response times and waived coordination
                  fees on every experience.
                </p>
                <a href="/membership" className="inline-flex items-center gap-2 text-brand-coral
                                                 font-body font-semibold text-sm hover:gap-3 transition-all duration-300">
                  View Membership
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </RevealGroup>
      </section>
    </>
  );
}
