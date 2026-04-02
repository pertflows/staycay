"use client";
import { useState } from "react";
import { RevealGroup } from "@/components/useReveal";

const FAQ_ITEMS = [
  {
    q: "How does StayCay work?",
    a: "Simply tell us the experience you have in mind through our contact form. We'll curate the right providers, build out every detail, and coordinate everything — so you don't have to lift a finger. All you do is show up and enjoy.",
  },
  {
    q: "Do I need to be a member to book?",
    a: "Not at all. Anyone can book an experience with StayCay. Non-members simply pay a coordination fee per booking. Members enjoy waived fees and a range of additional perks — join whenever it feels right.",
  },
  {
    q: "What's included in a StayCay experience?",
    a: "Every experience is fully custom. Depending on what you book, this can include a private chef, licensed spa practitioners, event stylists, florists, bartenders, and more — all coordinated and confirmed by our concierge team.",
  },
  {
    q: "How are your providers vetted?",
    a: "Every chef, therapist, stylist, and specialist in our network is personally reviewed for licensing, quality, professionalism, and client feedback. We maintain ongoing relationships to ensure the standard stays consistently exceptional.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Yes. We'll outline all terms clearly before you confirm. Our team is always available to help with changes, and we'll work with our providers on your behalf to find the best outcome.",
  },
  {
    q: "Where do you operate?",
    a: "We're constantly expanding our provider network. Reach out and tell us your location — we'll let you know what's available and what we can build for you.",
  },
  {
    q: "How do I get in touch?",
    a: "Use our contact page to submit an inquiry or describe the experience you're envisioning. We respond within 24 hours during business days.",
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
        <span className={`font-body font-semibold text-sm pr-8 transition-colors duration-300 ${
          isOpen ? "text-brand-coral" : "text-brand-navy group-hover:text-brand-coral"
        }`}>
          {item.q}
        </span>
        <div className={`shrink-0 w-8 h-8 border flex items-center justify-center
                         transition-all duration-300 ${
          isOpen ? "bg-brand-gold border-brand-gold rotate-45" : "border-brand-sand"
        }`}>
          <svg className={`w-3.5 h-3.5 transition-colors duration-300 ${isOpen ? "text-brand-obsidian" : "text-brand-muted"}`}
               fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 pb-5" : "max-h-0"}`}>
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
      <section className="relative pt-44 pb-24 section-padding overflow-hidden hero-gradient">
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full
                        bg-brand-coral/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="h-px w-8 bg-brand-gold" />
            <span className="font-body text-brand-gold text-xs uppercase tracking-[0.3em]">
              Our Story
            </span>
          </div>
          <h1 className="font-display text-display-xl text-white mb-7 animate-fade-up"
              style={{ fontWeight: 300 }}>
            The Heart Behind{" "}
            <em className="text-brand-gold">StayCay</em>
          </h1>
        </div>
      </section>

      {/* ── Founder Story ── */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Photo placeholder */}
            <div className="reveal">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                {/* Backdrop frame */}
                <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-brand-sand" />
                {/* Main panel */}
                <div className="absolute inset-0 bg-brand-sand/40 border border-brand-sand
                                flex items-center justify-center overflow-hidden">
                  <div className="text-center text-brand-muted/40">
                    <svg className="w-14 h-14 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className="text-xs uppercase tracking-[0.15em]">Founder photo</p>
                  </div>
                  {/* Accent corners */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-brand-coral/8" />
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="pt-4">
              <h2 className="reveal font-display text-display-md text-brand-navy"
                  style={{ fontWeight: 400 }}>
                Meet Jasmine
              </h2>
              <span className="reveal reveal-delay-1 inline-block eyebrow mt-2 mb-8">
                Founder & Chief Experience Officer
              </span>

              <div className="space-y-5 reveal reveal-delay-2">
                <p className="text-brand-charcoal/70 leading-relaxed">
                  {/* Placeholder — Jasmine to provide real founder story */}
                  StayCay was born from a simple belief: the most extraordinary
                  moments don&rsquo;t have to happen somewhere else. They can happen
                  right where you are — in your home, in your space, surrounded by
                  the people you love.
                </p>
                <p className="text-brand-charcoal/70 leading-relaxed">
                  After years of coordinating unforgettable experiences for friends
                  and family — sourcing the best chefs, setting the most beautiful
                  tables, curating evenings that felt genuinely magical — Jasmine
                  realized this wasn&rsquo;t just a talent. It was a calling.
                </p>
                <p className="text-brand-charcoal/70 leading-relaxed">
                  What started as a gift to the people she loved became StayCay:
                  a luxury experience company dedicated to bringing five-star quality
                  into everyday life. Every chef, every therapist, every florist in
                  our network shares the same commitment — that your home deserves
                  the very best.
                </p>
              </div>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* ── Mission / Values ── */}
      <section className="section-gap relative overflow-hidden noise-overlay"
               style={{ background: "var(--color-navy)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] bg-brand-gold/4 blur-[130px] pointer-events-none" />

        <RevealGroup className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="text-center mb-16">
            <span className="reveal eyebrow">What We Stand For</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-white mt-3"
                style={{ fontWeight: 300 }}>
              Built on{" "}
              <em className="text-brand-gold">Trust</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Quality Over Quantity",
                desc: "We'd rather offer fewer providers and guarantee exceptional quality than give you a long list of mediocre options. Every name in our network has earned their place.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                title: "The Personal Touch",
                desc: "Every experience is built by a real person who listens, adapts, and genuinely cares about getting the details right. You're not filling out a template — you're having a conversation.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                title: "Full Transparency",
                desc: "No hidden fees. No surprise charges. You'll see exactly what you're paying for and exactly what to expect before you confirm a single thing.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <div key={value.title} className={`reveal reveal-delay-${i + 1} text-center`}>
                <div className="w-14 h-14 border border-brand-gold/30 text-brand-gold
                                flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-body font-semibold text-white text-sm tracking-wide mb-3">{value.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="reveal eyebrow">FAQ</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3"
                style={{ fontWeight: 400 }}>
              Common Questions
            </h2>
          </div>

          <div className="reveal reveal-delay-2 border-t border-brand-sand">
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
