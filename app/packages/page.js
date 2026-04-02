"use client";
import Link from "next/link";
import { RevealGroup } from "@/components/useReveal";

const EXPERIENCES = [
  {
    name: "Private Chef Dining",
    tag: "Culinary",
    desc: "A hand-selected chef brings your dream menu to life in your home. From intimate dinners for two to elaborate multi-course feasts, our culinary artists handle everything — ingredients, equipment, plating, and cleanup.",
    offerings: ["Custom menu consultation", "Wine & cocktail pairings", "Full table service", "Post-dining cleanup"],
  },
  {
    name: "In-Home Spa Rituals",
    tag: "Wellness",
    desc: "Licensed massage therapists, estheticians, and wellness practitioners arrive with professional-grade equipment to deliver the complete spa experience in your space. Relaxation, redefined.",
    offerings: ["Swedish & deep tissue massage", "Custom facials & skin treatments", "Aromatherapy bath rituals", "Couples & group sessions"],
  },
  {
    name: "Romance & Date Nights",
    tag: "Romantic",
    desc: "Transform any room into an unforgettable backdrop for a romantic evening. Our stylists curate every sensory detail — from the florals and candlelight to the champagne and custom playlist.",
    offerings: ["Floral & candle styling", "Champagne & charcuterie setup", "Custom ambiance curation", "Private chef add-on available"],
  },
  {
    name: "Luxury Celebrations",
    tag: "Milestones",
    desc: "Birthdays, anniversaries, proposals, and milestone moments deserve extraordinary staging. We design bespoke celebration setups that make every detail intentional and every memory lasting.",
    offerings: ["Proposal setups", "Birthday & anniversary design", "Custom balloon & floral installations", "Photography-ready styling"],
  },
  {
    name: "Intimate Gatherings",
    tag: "Entertaining",
    desc: "Host with confidence. Whether it's a curated dinner party for twelve or a luxurious Sunday brunch for four, we coordinate every element so you can be fully present with your guests.",
    offerings: ["Full-service dinner parties", "Luxury brunch experiences", "Cocktail hour setups", "Private event coordination"],
  },
  {
    name: "Wellness & Mindfulness",
    tag: "Mindful Living",
    desc: "Invite stillness and intention into your home. Our certified practitioners guide private yoga flows, sound baths, breathwork, reiki sessions, and meditation journeys tailored to your needs.",
    offerings: ["Private yoga & movement sessions", "Sound bath ceremonies", "Reiki & energy work", "Guided meditation & breathwork"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Your Vision",
    desc: "Fill out our short experience request form. Tell us the occasion, your preferences, and any details that matter to you.",
  },
  {
    step: "02",
    title: "We Design Your Experience",
    desc: "Our concierge team curates the right providers, builds out the full plan, and confirms every detail with you before anything is booked.",
  },
  {
    step: "03",
    title: "Review & Personalise",
    desc: "We walk you through the proposal. Request changes, add touches, or approve as-is — it's your experience to shape.",
  },
  {
    step: "04",
    title: "Sit Back & Enjoy",
    desc: "Providers arrive, set up, and deliver. We coordinate everything behind the scenes. You simply enjoy the experience.",
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-44 pb-24 section-padding overflow-hidden hero-gradient">
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full
                        bg-brand-gold/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="h-px w-8 bg-brand-gold" />
            <span className="font-body text-brand-gold text-xs uppercase tracking-[0.3em]">
              Our Experiences
            </span>
          </div>
          <h1 className="font-display text-display-xl text-white mb-7 animate-fade-up"
              style={{ fontWeight: 300 }}>
            Extraordinary Moments,{" "}
            <em className="text-brand-gold">Your Home</em>
          </h1>
          <p className="font-body text-white/55 text-lg max-w-2xl leading-relaxed animate-fade-up"
             style={{ animationDelay: "0.15s" }}>
            Every experience is entirely bespoke — built around your preferences, your space,
            and the occasion that matters most to you. Browse what&rsquo;s possible below.
          </p>
        </div>
      </section>

      {/* ── Experience Categories ── */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-sand">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.name}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-brand-cream p-10 md:p-12
                             transition-all duration-500 cursor-pointer
                             hover:bg-white hover:shadow-[inset_0_0_0_1px_rgba(201,169,110,0.3)]`}
              >
                {/* Tag */}
                <span className="inline-block font-body text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-6 px-3 py-1.5 border border-brand-gold/30">
                  {exp.tag}
                </span>

                <h3 className="font-display text-display-sm text-brand-navy mb-4 group-hover:text-brand-coral transition-colors duration-300"
                    style={{ fontWeight: 400 }}>
                  {exp.name}
                </h3>
                <p className="font-body text-brand-muted text-sm leading-relaxed mb-8">
                  {exp.desc}
                </p>

                {/* Offerings list */}
                <ul className="space-y-2.5 mb-8">
                  {exp.offerings.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                      <span className="text-xs font-body text-brand-charcoal/65">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA arrow */}
                <div className="flex items-center gap-2 text-brand-navy font-body text-xs tracking-[0.15em] uppercase
                                opacity-0 group-hover:opacity-100 transition-all duration-300
                                -translate-x-1 group-hover:translate-x-0">
                  Enquire
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── How It Works ── */}
      <section className="section-gap relative overflow-hidden noise-overlay"
               style={{ background: "var(--color-navy)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] bg-brand-gold/4 blur-[130px] pointer-events-none" />

        <RevealGroup className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="text-center mb-20">
            <span className="reveal eyebrow">The Process</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-white mt-3"
                style={{ fontWeight: 300 }}>
              Effortless from Start{" "}
              <em className="text-brand-gold">to Finish</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className={`reveal reveal-delay-${i + 1}`}>
                <div className="font-display text-6xl text-brand-gold/15 mb-5 leading-none"
                     style={{ fontWeight: 300 }}>
                  {step.step}
                </div>
                <h3 className="font-body font-semibold text-white text-sm tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── Bespoke Promise ── */}
      <section className="section-gap section-padding bg-white">
        <RevealGroup className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fully Vetted Providers",
                desc: "Every professional in our network is personally screened, licensed where required, and held to a luxury standard.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                ),
                title: "No Templates. Ever.",
                desc: "Every experience is built from scratch. Your preferences, your space, your occasion — nothing is copy-pasted.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                title: "One Point of Contact",
                desc: "Your dedicated concierge handles everything. One message reaches us — no juggling multiple vendors yourself.",
              },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${i + 1} text-center`}>
                <div className="w-14 h-14 border border-brand-sand text-brand-gold flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-body font-semibold text-brand-navy text-sm tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── CTA ── */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-3xl mx-auto text-center">
          <div className="ornament-line mb-8 reveal" />
          <h2 className="reveal font-display text-display-lg text-brand-navy" style={{ fontWeight: 400 }}>
            Have Something{" "}
            <em className="text-brand-coral">Specific</em> in Mind?
          </h2>
          <p className="reveal reveal-delay-1 text-brand-muted mt-5 mb-12 leading-relaxed">
            We love bringing one-of-a-kind experiences to life. Describe what you&rsquo;re
            envisioning and we&rsquo;ll make it happen inside your home.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request an Experience</Link>
            <Link href="/membership" className="btn-outline">Become a Member</Link>
          </div>
          <div className="ornament-line mt-12 reveal reveal-delay-3" />
        </RevealGroup>
      </section>
    </>
  );
}
