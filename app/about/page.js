"use client";
import { useState } from "react";
import { RevealGroup } from "@/components/useReveal";

const FAQ_ITEMS = [
  {
    q: "How does StayCay work?",
    a: "Tell us about your dream trip through our contact form. We'll curate a custom package from our vetted vendor network, walk you through the details, and handle all the coordination so you can focus on enjoying the experience.",
  },
  {
    q: "Do I need to be a member to book?",
    a: "Not at all! Anyone can book experiences with StayCay. Non-members simply pay a coordination fee per booking. Members enjoy waived fees and additional perks.",
  },
  {
    q: "What's included in a StayCay package?",
    a: "Every package is custom-built to your preferences. This can include accommodations, dining reservations, activities, transportation, guided tours, spa services, and more — all sourced from our network of vetted vendors.",
  },
  {
    q: "How are your vendors vetted?",
    a: "We personally review every vendor for licensing, quality, customer reviews, and reliability. We maintain ongoing relationships to ensure consistent service standards across all of our packages.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Yes. Cancellation and modification policies vary by vendor and package. We'll outline all terms clearly before you confirm, and our team is always available to assist with changes.",
  },
  {
    q: "What destinations do you cover?",
    a: "We're constantly expanding our vendor network. Currently we cover popular Caribbean, domestic, and select international destinations. Reach out and tell us where you want to go — we'll let you know what we can do.",
  },
  {
    q: "How do I contact StayCay?",
    a: "Use our contact page to submit an inquiry, or reach out directly via email. We respond within 24 hours during business days.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-brand-sand/60">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-body font-semibold text-brand-navy group-hover:text-brand-coral transition-colors duration-300 pr-8">
          {item.q}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-brand-sand flex items-center justify-center
                         transition-all duration-300 ${isOpen ? "bg-brand-coral border-brand-coral rotate-45" : ""}`}>
          <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-brand-muted"}`}
               fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-brand-muted text-sm leading-relaxed pr-12">{item.a}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-body text-brand-coral text-sm uppercase tracking-[0.15em] animate-fade-in">
            Our Story
          </span>
          <h1 className="font-display text-display-xl text-brand-navy mt-3 mb-6 animate-fade-up">
            The Heart Behind <span className="italic text-brand-coral">StayCay</span>
          </h1>
        </div>
      </section>

      {/* ── Founder Story ── */}
      <section className="section-padding pb-section">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="reveal">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-brand bg-brand-sand/50
                              flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-brand-muted/40">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-sm">Founder photo</p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-coral/10"
                     style={{ borderRadius: "0 0.75rem 0 2rem" }} />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10"
                     style={{ borderRadius: "0 2rem 0 0.75rem" }} />
              </div>
            </div>

            {/* Story */}
            <div>
              <h2 className="reveal font-display text-display-md text-brand-navy mb-2">
                Meet Jasmine
              </h2>
              <span className="reveal reveal-delay-1 inline-block font-body text-brand-coral text-sm uppercase tracking-wider mb-6">
                Founder & Chief Experience Officer
              </span>

              <div className="space-y-4 reveal reveal-delay-2">
                <p className="text-brand-charcoal leading-relaxed">
                  {/* Placeholder copy — Jasmine to provide real founder story */}
                  StayCay was born from a simple frustration: planning the perfect
                  trip shouldn&rsquo;t feel like a second job. After years of
                  coordinating vacations for friends and family — sourcing the best
                  vendors, negotiating rates, and building itineraries from scratch —
                  Jasmine realized this was more than just a favor. It was a calling.
                </p>
                <p className="text-brand-charcoal leading-relaxed">
                  What started as word-of-mouth trip planning has grown into StayCay:
                  a curated travel experience company backed by a vetted network of
                  vendors who share our commitment to quality, reliability, and
                  unforgettable moments.
                </p>
                <p className="text-brand-charcoal leading-relaxed">
                  Whether it&rsquo;s a romantic island getaway, a family adventure,
                  or a wellness retreat, every StayCay package is built with the same
                  care and attention that started it all — because your trip should
                  feel as effortless as it does extraordinary.
                </p>
              </div>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* ── Mission / Values ── */}
      <section className="section-gap bg-brand-navy relative noise-overlay section-padding">
        <RevealGroup className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="reveal font-body text-brand-gold text-sm uppercase tracking-[0.15em]">
              What We Stand For
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-white mt-3">
              Built on <span className="italic text-brand-coral">Trust</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Over Quantity",
                desc: "We'd rather offer fewer vendors and guarantee exceptional quality than overwhelm you with mediocre options.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                title: "Personal Touch",
                desc: "Every package is custom-built by a real person who listens, adapts, and cares about getting the details right.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                title: "Full Transparency",
                desc: "No hidden fees, no surprise charges. You'll see exactly what you're paying for before you commit to anything.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <div key={value.title} className={`reveal reveal-delay-${i + 1} text-center`}>
                <div className="w-14 h-14 rounded-full bg-brand-coral/20 text-brand-coral
                                flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl text-white mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-gap section-padding">
        <RevealGroup className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="reveal font-body text-brand-coral text-sm uppercase tracking-[0.15em]">
              FAQ
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3">
              Common Questions
            </h2>
          </div>

          <div className="reveal reveal-delay-2">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </RevealGroup>
      </section>
    </>
  );
}
