"use client";
import Link from "next/link";
import { RevealGroup } from "@/components/useReveal";

const CATEGORIES = [
  {
    name: "Beach & Island",
    desc: "Sun-soaked coastlines, private villas, and all-inclusive resort experiences across the Caribbean, Mediterranean, and Pacific Islands.",
    image: null, // placeholder
    vendors: "Resorts, boat charters, snorkeling & dive operators, beachfront dining",
  },
  {
    name: "City & Culture",
    desc: "Curated urban itineraries featuring world-class dining, museum access, guided tours, nightlife, and exclusive cultural events.",
    image: null,
    vendors: "Tour guides, restaurant reservations, event tickets, luxury transport",
  },
  {
    name: "Wellness & Spa",
    desc: "Rejuvenating retreat packages with spa services, yoga instruction, meditation programs, and holistic wellness experiences.",
    image: null,
    vendors: "Wellness resorts, yoga instructors, spa therapists, nutrition coaches",
  },
  {
    name: "Adventure & Outdoor",
    desc: "Thrilling outdoor experiences from mountain treks and zip-lining to safari expeditions and white-water rafting.",
    image: null,
    vendors: "Adventure guides, equipment rentals, lodge accommodations, expedition teams",
  },
  {
    name: "Romance & Celebrations",
    desc: "Honeymoons, anniversaries, proposals, and milestone celebrations designed with unforgettable moments in mind.",
    image: null,
    vendors: "Event planners, photographers, private dining, luxury accommodations",
  },
  {
    name: "Family Getaways",
    desc: "Kid-friendly vacations that the whole family will love, with activities and accommodations for every age group.",
    image: null,
    vendors: "Family resorts, kids clubs, family-friendly tours, group dining",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Tell Us Your Vision", desc: "Share your dream trip details through our intake form — destination ideas, budget, dates, and vibe." },
  { step: "02", title: "We Build Your Package", desc: "Our team curates a custom package from our vetted vendor network, tailored to your preferences." },
  { step: "03", title: "Review & Refine", desc: "We walk you through the full itinerary. Adjust anything until it feels perfect." },
  { step: "04", title: "Travel & Enjoy", desc: "We handle the coordination so you can focus on making memories. Our team is one message away." },
];

export default function PackagesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-body text-brand-coral text-sm uppercase tracking-[0.15em] animate-fade-in">
            Our Packages
          </span>
          <h1 className="font-display text-display-xl text-brand-navy mt-3 mb-6 animate-fade-up">
            Experiences That <span className="italic text-brand-coral">Move You</span>
          </h1>
          <p className="font-body text-brand-muted text-lg max-w-2xl leading-relaxed animate-fade-up"
             style={{ animationDelay: "0.15s" }}>
            Every package is custom-built from our network of vetted vendors.
            Browse our categories below, then tell us what excites you — we&rsquo;ll
            handle everything else.
          </p>
        </div>
      </section>

      {/* ── Package Categories ── */}
      <section className="section-padding pb-section">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.name}
                className={`reveal reveal-delay-${(i % 4) + 1} group cursor-pointer`}
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] rounded-brand bg-brand-sand/50 mb-5 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-brand-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-body text-sm font-semibold uppercase tracking-wider">
                      View Details
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-display-sm text-brand-navy group-hover:text-brand-coral
                               transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="font-body text-brand-muted text-sm mt-2 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-3">
                  <span className="text-xs font-body text-brand-coral/80 uppercase tracking-wider">
                    Vendors:
                  </span>
                  <span className="text-xs text-brand-muted ml-1">{cat.vendors}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── How It Works ── */}
      <section className="section-gap bg-brand-navy relative noise-overlay section-padding">
        <RevealGroup className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="reveal font-body text-brand-gold text-sm uppercase tracking-[0.15em]">
              How It Works
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-white mt-3">
              Four Steps to Your <span className="italic text-brand-coral">Perfect Trip</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className={`reveal reveal-delay-${i + 1}`}>
                <div className="font-display text-5xl text-brand-coral/20 mb-4">{step.step}</div>
                <h3 className="font-body font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── CTA ── */}
      <section className="section-gap section-padding">
        <RevealGroup className="max-w-3xl mx-auto text-center">
          <h2 className="reveal font-display text-display-lg text-brand-navy">
            Have Something <span className="italic text-brand-coral">Specific</span> in Mind?
          </h2>
          <p className="reveal reveal-delay-1 text-brand-muted mt-4 mb-10">
            We love building packages around unique ideas. Tell us what
            you&rsquo;re dreaming about and we&rsquo;ll make it happen.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Start Planning</Link>
            <Link href="/membership" className="btn-outline">Become a Member</Link>
          </div>
        </RevealGroup>
      </section>
    </>
  );
}
