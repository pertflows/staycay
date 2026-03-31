"use client";
import Link from "next/link";
import { RevealGroup } from "@/components/useReveal";

/* ── Placeholder data — replace with real content ── */
const PACKAGE_PREVIEWS = [
  {
    title: "Island Escapes",
    desc: "White sand beaches, crystal waters, and curated resort experiences across the Caribbean and beyond.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "City Adventures",
    desc: "Immersive urban experiences from world-class dining to exclusive cultural events and nightlife.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
  },
  {
    title: "Wellness Retreats",
    desc: "Rejuvenate with spa getaways, yoga retreats, and holistic wellness experiences tailored to you.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "50+", label: "Vetted Vendors" },
  { value: "100%", label: "Custom Packages" },
  { value: "24/7", label: "Concierge Support" },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-coral/30" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-brand-coral/10 blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto section-padding w-full py-32 md:py-40">
          <div className="max-w-3xl">
            <span className="inline-block font-body text-brand-gold text-sm uppercase tracking-[0.2em] mb-6 animate-fade-in">
              Curated Travel Experiences
            </span>
            <h1 className="font-display text-display-xl text-white mb-6 animate-fade-up">
              Your Next Getaway,{" "}
              <span className="italic text-brand-coral">Perfectly</span>{" "}
              Planned
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed mb-10 max-w-xl animate-fade-up"
               style={{ animationDelay: "0.15s" }}>
              From sun-soaked islands to vibrant city escapes, we build
              custom vacation packages from our network of vetted vendors
              so you can focus on what matters — making memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/packages" className="btn-primary">
                Explore Packages
              </Link>
              <Link href="/membership" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
                Become a Member
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.45s" }}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl text-brand-coral">{stat.value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHAT WE DO
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="reveal font-body text-brand-coral text-sm uppercase tracking-[0.15em]">
              What We Do
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3">
              Experiences Crafted <span className="italic">Just for You</span>
            </h2>
            <p className="reveal reveal-delay-2 font-body text-brand-muted mt-4 max-w-2xl mx-auto leading-relaxed">
              We partner with top-tier vendors across destinations worldwide to
              build vacation packages tailored to your style, schedule, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGE_PREVIEWS.map((pkg, i) => (
              <div
                key={pkg.title}
                className={`reveal reveal-delay-${i + 1} card-elevated group cursor-pointer`}
              >
                <div className="w-14 h-14 rounded-full bg-brand-coral/10 text-brand-coral
                                flex items-center justify-center mb-6
                                group-hover:bg-brand-coral group-hover:text-white
                                transition-all duration-300">
                  {pkg.icon}
                </div>
                <h3 className="font-display text-display-sm text-brand-navy mb-3">
                  {pkg.title}
                </h3>
                <p className="font-body text-brand-muted leading-relaxed text-sm">
                  {pkg.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-coral font-body text-sm font-semibold
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/packages" className="btn-outline">
              View All Packages
            </Link>
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          WHY STAYCAY — Split feature section
          ════════════════════════════════════════════════ */}
      <section className="section-gap bg-brand-navy relative noise-overlay overflow-hidden">
        <RevealGroup className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Image placeholder */}
            <div className="reveal relative">
              <div className="aspect-[4/5] rounded-brand bg-gradient-to-br from-brand-coral/20 to-brand-gold/20
                              flex items-center justify-center border border-white/10">
                <div className="text-center text-white/30">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <p className="text-sm">Hero image placeholder</p>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-brand-coral text-white p-6 rounded-brand
                              shadow-xl max-w-[200px]">
                <div className="font-display text-2xl">100%</div>
                <div className="text-white/80 text-xs mt-1">Custom built packages — no cookie-cutter trips</div>
              </div>
            </div>

            {/* Right — Copy */}
            <div>
              <span className="reveal font-body text-brand-gold text-sm uppercase tracking-[0.15em]">
                Why StayCay
              </span>
              <h2 className="reveal reveal-delay-1 font-display text-display-lg text-white mt-3 mb-6">
                We Handle the Details,{" "}
                <span className="italic text-brand-coral">You Make the Memories</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Curated Vendor Network", desc: "Every vendor is vetted, licensed, and handpicked to deliver exceptional quality." },
                  { title: "Personalized Packages", desc: "No two trips are alike. We build every experience around your preferences and budget." },
                  { title: "Concierge-Level Service", desc: "From initial planning to your return flight home, our team is one message away." },
                  { title: "Member Benefits", desc: "Join as a member and enjoy waived coordination fees, priority booking, and exclusive deals." },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal reveal-delay-${i + 1} flex gap-4`}>
                    <div className="w-2 h-2 rounded-full bg-brand-coral mt-2.5 shrink-0" />
                    <div>
                      <h4 className="font-body font-semibold text-white">{item.title}</h4>
                      <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 reveal">
                <Link href="/membership" className="btn-primary">
                  Explore Membership
                </Link>
              </div>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          INSTAGRAM FEED — Placeholder
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="reveal font-body text-brand-coral text-sm uppercase tracking-[0.15em]">
              Follow Along
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3">
              @StayCay
            </h2>
          </div>

          {/* Grid placeholder — will be replaced with live IG feed */}
          <div className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-brand bg-brand-sand/50 flex items-center justify-center
                           hover:bg-brand-sand transition-colors duration-300 cursor-pointer group"
              >
                <svg className="w-8 h-8 text-brand-muted/40 group-hover:text-brand-coral transition-colors duration-300"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-muted text-sm mt-6 reveal">
            Live Instagram feed will appear here once connected
          </p>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIALS — Placeholder
          ════════════════════════════════════════════════ */}
      <section className="section-gap bg-brand-sand/30 section-padding">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="reveal font-body text-brand-coral text-sm uppercase tracking-[0.15em]">
              What People Say
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3">
              Traveler Testimonials
            </h2>
          </div>

          <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="card-elevated text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-muted italic text-sm leading-relaxed mb-6">
                  &ldquo;Testimonial placeholder — real reviews will appear here
                  as they come in from StayCay travelers.&rdquo;
                </p>
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-brand-sand mx-auto mb-2" />
                <div className="font-body font-semibold text-brand-navy text-sm">Guest Name</div>
                <div className="text-brand-muted text-xs">Destination</div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          CTA BANNER
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding">
        <RevealGroup className="max-w-4xl mx-auto text-center">
          <h2 className="reveal font-display text-display-lg text-brand-navy">
            Ready to Start <span className="italic text-brand-coral">Planning?</span>
          </h2>
          <p className="reveal reveal-delay-1 font-body text-brand-muted mt-4 mb-10 max-w-xl mx-auto">
            Tell us about your dream trip and we&rsquo;ll handle the rest.
            Members enjoy waived coordination fees and priority booking.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Plan My Trip
            </Link>
            <Link href="/membership" className="btn-outline">
              View Membership
            </Link>
          </div>
        </RevealGroup>
      </section>
    </>
  );
}
