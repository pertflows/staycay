"use client";
import { useState } from "react";
import Link from "next/link";
import { RevealGroup } from "@/components/useReveal";

const EXPERIENCES = [
  {
    name: "Private Chef Dining",
    tag: "Culinary",
    desc: "A hand-selected chef brings your dream menu to life in your home. From intimate dinners for two to elaborate multi-course feasts, our culinary artists handle everything — ingredients, equipment, plating, and cleanup.",
    offerings: ["Custom menu consultation", "Wine & cocktail pairings", "Full table service", "Post-dining cleanup"],
    detail: "Our private chefs are trained culinary professionals who design a personalized menu around your dietary preferences, occasion, and vision. They arrive with all equipment and premium ingredients, cook in your kitchen, plate beautifully, and leave your space immaculate. Vendor partners include personal chefs, sommeliers, and specialty dessert & pastry artists.",
  },
  {
    name: "In-Home Spa Rituals",
    tag: "Wellness",
    desc: "Licensed massage therapists, estheticians, and wellness practitioners arrive with professional-grade equipment to deliver the complete spa experience in your space. Relaxation, redefined.",
    offerings: ["Swedish & deep tissue massage", "Custom facials & skin treatments", "Aromatherapy bath rituals", "Couples & group sessions"],
    detail: "All practitioners in our network are fully licensed, insured, and experienced in luxury spa environments. Sessions are fully customizable — from 60-minute solo massages to full-day spa days for groups. We source therapists, estheticians, nail technicians, and lash artists who travel to you with all professional equipment.",
  },
  {
    name: "Romance & Date Nights",
    tag: "Romantic",
    desc: "Transform any room into an unforgettable backdrop for a romantic evening. Our stylists curate every sensory detail — from the florals and candlelight to the champagne and custom playlist.",
    offerings: ["Floral & candle styling", "Champagne & charcuterie setup", "Custom ambiance curation", "Private chef add-on available"],
    detail: "Our romance stylists create immersive environments — think rose petals, pillar candles, curated tablescapes, ambient lighting, and personalized touches that reflect your story. Popular for date nights, Valentine's Day, proposals, and anniversary surprises. Pair with a private chef for a fully orchestrated evening from start to finish.",
  },
  {
    name: "Luxury Celebrations",
    tag: "Milestones",
    desc: "Birthdays, anniversaries, proposals, and milestone moments deserve extraordinary staging. We design bespoke celebration setups that make every detail intentional and every memory lasting.",
    offerings: ["Proposal setups", "Birthday & anniversary design", "Custom balloon & floral installations", "Photography-ready styling"],
    detail: "Every celebration setup is designed to be photograph-worthy and deeply personal. We work with florists, balloon artists, custom signage designers, and event stylists who understand luxury aesthetics. Tell us the story — we'll build the scene. Add-ons include on-site photography coordination, custom cakes, and champagne tower service.",
  },
  {
    name: "Intimate Gatherings",
    tag: "Entertaining",
    desc: "Host with confidence. Whether it's a curated dinner party for twelve or a luxurious Sunday brunch for four, we coordinate every element so you can be fully present with your guests.",
    offerings: ["Full-service dinner parties", "Luxury brunch experiences", "Cocktail hour setups", "Private event coordination"],
    detail: "We take the stress out of hosting by coordinating every vendor, timeline, and setup detail. Our gatherings include table styling, service staff, catered menus, and full cleanup. Vendor partners include personal chefs, private bartenders, event coordinators, and floral stylists — all working together so you can enjoy your own event.",
  },
  {
    name: "Wellness & Mindfulness",
    tag: "Mindful Living",
    desc: "Invite stillness and intention into your home. Our certified practitioners guide private yoga flows, sound baths, breathwork, reiki sessions, and meditation journeys tailored to your needs.",
    offerings: ["Private yoga & movement sessions", "Sound bath ceremonies", "Reiki & energy work", "Guided meditation & breathwork"],
    detail: "Wellness experiences are fully customizable for individuals, couples, or groups. Whether you want a restorative yin yoga flow, a deeply meditative sound bath with crystal bowls, or an energy-clearing reiki session, our certified practitioners bring everything needed. Sessions can be combined and paired with in-home spa rituals for a full wellness day.",
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

function ExperienceAccordion({ exp, isOpen, onToggle }) {
  return (
    <div className={`border-b border-brand-sand transition-colors duration-300 ${isOpen ? "border-brand-gold/30" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-5">
          <span className={`font-body text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border transition-colors duration-300 ${
            isOpen ? "border-brand-gold text-brand-gold" : "border-brand-sand text-brand-muted"
          }`}>
            {exp.tag}
          </span>
          <h3 className={`font-display text-display-sm transition-colors duration-300 ${
            isOpen ? "text-brand-coral" : "text-brand-navy group-hover:text-brand-coral"
          }`} style={{ fontWeight: 400 }}>
            {exp.name}
          </h3>
        </div>
        <div className={`shrink-0 w-8 h-8 border flex items-center justify-center ml-4
                         transition-all duration-300 ${
          isOpen ? "border-brand-gold bg-brand-gold text-brand-obsidian rotate-45" : "border-brand-sand text-brand-muted"
        }`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[600px] pb-8" : "max-h-0"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pr-4">
          <div>
            <p className="text-brand-muted leading-relaxed text-sm mb-6">{exp.detail}</p>
            <Link href="/contact" className="btn-primary text-xs">
              Book This Experience
            </Link>
          </div>
          <div>
            <p className="font-body font-semibold text-brand-navy text-xs uppercase tracking-[0.15em] mb-5">
              What&rsquo;s Included
            </p>
            <ul className="space-y-3">
              {exp.offerings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                  <span className="text-sm text-brand-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PackagesPage() {
  const [openExp, setOpenExp] = useState(null);

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

      {/* ── Experience Categories — Expandable Accordion ── */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="reveal eyebrow">What We Offer</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3"
                style={{ fontWeight: 400 }}>
              Browse Our Experiences
            </h2>
            <p className="reveal reveal-delay-2 text-brand-muted text-sm mt-4 max-w-xl mx-auto">
              Click any experience to expand the full details, inclusions, and vendor overview.
            </p>
          </div>

          <div className="reveal reveal-delay-2 border-t border-brand-sand">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceAccordion
                key={exp.name}
                exp={exp}
                isOpen={openExp === i}
                onToggle={() => setOpenExp(openExp === i ? null : i)}
              />
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
