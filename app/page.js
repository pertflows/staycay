"use client";
import Link from "next/link";
import { RevealGroup } from "@/components/useReveal";

const SERVICES = [
  {
    title: "Private Chef Dining",
    desc: "A hand-selected chef arrives at your home with a custom menu, premium ingredients, and full table service — from amuse-bouche to dessert.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      </svg>
    ),
    accent: "Chef-curated menus · Wine pairings · Full table service",
  },
  {
    title: "In-Home Spa & Wellness",
    desc: "Licensed therapists, estheticians, and wellness practitioners bring the spa to your door — massages, facials, body rituals, and more.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    accent: "Massages · Facials · Bath rituals · Wellness sessions",
  },
  {
    title: "Luxury Moments",
    desc: "Romantic evenings, intimate proposals, anniversary setups, and milestone celebrations — flawlessly styled in your own space.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    accent: "Florals · Candles · Champagne · Personalized styling",
  },
  {
    title: "Intimate Gatherings",
    desc: "Dinner parties, curated brunches, and private soirées — we handle the setup, service, and experience so you can be present with your guests.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    accent: "Dinner parties · Brunches · Celebrations · Full service",
  },
];

const STATS = [
  { value: "150+", label: "Luxury Providers" },
  { value: "100%", label: "Bespoke Every Time" },
  { value: "White", label: "Glove Service" },
];

const WHY_ITEMS = [
  {
    title: "Curated Luxury Providers",
    desc: "Every chef, therapist, florist, and specialist in our network is personally vetted and held to the highest standard.",
  },
  {
    title: "Completely Tailored to You",
    desc: "No templates. No packages pulled off a shelf. Every experience is designed around your preferences, occasion, and vision.",
  },
  {
    title: "Full Concierge Coordination",
    desc: "We handle every detail — scheduling, setup, communication, and follow-through — so you focus on enjoying the moment.",
  },
  {
    title: "The Comfort of Your Own Home",
    desc: "Experience five-star quality in the setting you love most. No reservations, no crowds, no compromise.",
  },
];

const TESTIMONIALS = [
  {
    quote: "StayCay brought a private chef to our anniversary dinner and it was better than any restaurant we've ever been to. The whole evening was flawless.",
    name: "Monique L.",
    detail: "Anniversary Dinner Experience",
  },
  {
    quote: "I surprised my partner with a full in-home spa day and she couldn't believe how luxurious it felt. The team handled every single detail.",
    name: "Damien F.",
    detail: "In-Home Spa Experience",
  },
  {
    quote: "The proposal setup was absolutely breathtaking. Florals, candles, champagne — exactly what I envisioned but executed ten times better.",
    name: "Aaliyah T.",
    detail: "Luxury Proposal Setup",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">

        {/* Ambient glow layers */}
        <div className="absolute top-[15%] right-[8%] w-[600px] h-[600px] rounded-full
                        bg-brand-gold/6 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[3%] w-[400px] h-[400px] rounded-full
                        bg-brand-coral/5 blur-[100px] pointer-events-none" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
               backgroundSize: "80px 80px"
             }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto section-padding w-full py-36 md:py-48">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <div className="h-px w-8 bg-brand-gold" />
              <span className="font-body text-brand-gold text-xs uppercase tracking-[0.3em]">
                At-Home Luxury Experiences
              </span>
            </div>

            <h1 className="font-display text-display-xl text-white mb-7 animate-fade-up leading-[1.02]"
                style={{ fontWeight: 300, letterSpacing: "-0.02em" }}>
              Luxury,{" "}
              <em className="not-italic text-brand-gold">Brought</em>
              <br />
              to Your World
            </h1>

            <p className="text-base md:text-lg text-white/60 font-body leading-relaxed mb-12 max-w-lg animate-fade-up"
               style={{ animationDelay: "0.15s" }}>
              Private chefs. In-home spa rituals. Romantic setups. Intimate gatherings.
              We curate extraordinary experiences inside the comfort of your own home —
              every detail handled for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/packages" className="btn-primary">
                Explore Experiences
              </Link>
              <Link href="/membership" className="btn-ghost">
                Join as a Member
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-24 flex flex-wrap gap-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col">
                <div className="font-display text-3xl md:text-4xl text-brand-gold" style={{ fontWeight: 300 }}>
                  {stat.value}
                </div>
                <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in"
             style={{ animationDelay: "1.2s" }}>
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-gold/60 to-transparent" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          INTRO STATEMENT
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-8 reveal" />
          <p className="reveal font-display text-display-md text-brand-navy leading-[1.25]"
             style={{ fontWeight: 300 }}>
            Five-star experiences don&rsquo;t require a reservation.{" "}
            <em>They require the right people.</em>
          </p>
          <p className="reveal reveal-delay-2 font-body text-brand-muted mt-6 max-w-2xl mx-auto leading-relaxed">
            StayCay is your personal concierge for in-home luxury. We connect you with
            an exclusive network of chefs, spa professionals, florists, entertainers,
            and experience designers — then coordinate every detail so all you do is enjoy.
          </p>
          <div className="ornament-line mt-8 reveal reveal-delay-3" />
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding bg-white">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="reveal eyebrow">Our Experiences</span>
              <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3"
                  style={{ fontWeight: 400 }}>
                Crafted for{" "}
                <em>Your Space</em>
              </h2>
            </div>
            <Link href="/packages" className="reveal reveal-delay-2 btn-outline self-start md:self-auto shrink-0">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden
                            border border-brand-sand/80 bg-brand-cream p-10 md:p-12
                            transition-all duration-500 cursor-pointer hover:border-brand-gold/40
                            hover:bg-white hover:shadow-[0_16px_60px_rgba(0,0,0,0.07)]`}
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-brand-gold
                                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center
                                  border border-brand-sand group-hover:border-brand-gold
                                  text-brand-gold transition-all duration-300 shrink-0">
                    {svc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-display-sm text-brand-navy mb-3"
                        style={{ fontWeight: 400 }}>
                      {svc.title}
                    </h3>
                    <p className="font-body text-brand-muted leading-relaxed text-sm mb-4">
                      {svc.desc}
                    </p>
                    <p className="text-[11px] font-body text-brand-gold uppercase tracking-[0.15em]">
                      {svc.accent}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-brand-navy font-body text-xs
                                tracking-[0.15em] uppercase
                                opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                  Discover this experience
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          WHY STAYCAY — dark section
          ════════════════════════════════════════════════ */}
      <section className="section-gap relative overflow-hidden noise-overlay"
               style={{ background: "var(--color-navy)" }}>
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[800px] rounded-full bg-brand-gold/4 blur-[150px] pointer-events-none" />

        <RevealGroup className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left — Visual */}
            <div className="reveal relative">
              {/* Large decorative card */}
              <div className="relative aspect-[3/4] max-w-md">
                {/* Backdrop frame */}
                <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-brand-gold/15" />
                {/* Main panel — rich gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-[#0F2035] to-brand-obsidian
                                border border-brand-gold/20 overflow-hidden">
                  {/* Inner ambient glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/8 blur-[80px]" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-coral/6 blur-[60px]" />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                    <div className="ornament-line" />
                    <p className="font-display text-2xl text-white/70 text-center leading-relaxed"
                       style={{ fontWeight: 300 }}>
                      &ldquo;Your home.
                      <br />
                      <em className="text-brand-gold">Our artistry.</em>&rdquo;
                    </p>
                    <div className="ornament-line" />
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-obsidian p-6 min-w-[160px]">
                  <div className="font-display text-3xl" style={{ fontWeight: 300 }}>5★</div>
                  <div className="font-body text-[11px] uppercase tracking-[0.15em] mt-1 opacity-70">
                    Average client rating
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Copy */}
            <div>
              <span className="reveal eyebrow block">The StayCay Difference</span>
              <h2 className="reveal reveal-delay-1 font-display text-display-lg text-white mt-4 mb-10"
                  style={{ fontWeight: 300 }}>
                We Handle{" "}
                <em className="text-brand-gold">Every Detail.</em>
                <br />
                You Enjoy the Moment.
              </h2>

              <div className="space-y-8">
                {WHY_ITEMS.map((item, i) => (
                  <div key={item.title} className={`reveal reveal-delay-${i + 1} flex gap-5 group`}>
                    <div className="mt-1.5 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-white text-sm tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 reveal">
                <Link href="/membership" className="btn-primary">
                  Explore Membership
                </Link>
              </div>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          PROCESS — How It Works
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="reveal eyebrow">How It Works</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3"
                style={{ fontWeight: 400 }}>
              From Vision to{" "}
              <em>Reality</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-sand" />

            {[
              { num: "01", title: "Share Your Vision", desc: "Tell us the experience you have in mind — occasion, mood, preferences, and any special requests." },
              { num: "02", title: "We Design It", desc: "Our concierge team curates the perfect providers and crafts every detail of your experience." },
              { num: "03", title: "Review & Confirm", desc: "We walk you through the plan. Adjust anything until it feels exactly right for you." },
              { num: "04", title: "Sit Back & Enjoy", desc: "We coordinate arrival, setup, and service. Your only job is to be present and enjoy." },
            ].map((step, i) => (
              <div key={step.num} className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center px-6`}>
                <div className="relative z-10 w-16 h-16 border border-brand-sand flex items-center justify-center mb-6 bg-brand-cream">
                  <span className="font-display text-brand-gold text-xl" style={{ fontWeight: 300 }}>{step.num}</span>
                </div>
                <h3 className="font-body font-semibold text-brand-navy text-sm tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIALS
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding bg-white">
        <RevealGroup className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="reveal eyebrow">Client Experiences</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-brand-navy mt-3"
                style={{ fontWeight: 400 }}>
              What Our Clients{" "}
              <em>Say</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`reveal reveal-delay-${i + 1} relative p-10 border border-brand-sand bg-brand-cream
                                            transition-all duration-300 hover:border-brand-gold/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]`}>
                {/* Large quote mark */}
                <div className="font-display text-7xl text-brand-gold/20 leading-none mb-4 -mt-2"
                     style={{ fontWeight: 300 }}>
                  &ldquo;
                </div>
                <p className="font-body text-brand-charcoal/70 leading-relaxed text-sm mb-8 -mt-4">
                  {t.quote}
                </p>
                <div className="gradient-divider mb-6" />
                <div>
                  <div className="font-body font-semibold text-brand-navy text-sm">{t.name}</div>
                  <div className="text-brand-gold text-xs uppercase tracking-[0.15em] mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          MEMBERSHIP TEASER
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding"
               style={{ background: "linear-gradient(135deg, var(--color-obsidian) 0%, var(--color-navy) 100%)" }}>
        <RevealGroup className="max-w-5xl mx-auto">
          <div className="relative border border-brand-gold/20 p-12 md:p-20 text-center overflow-hidden">
            {/* Corner ornaments */}
            {[
              "top-0 left-0 border-t border-l",
              "top-0 right-0 border-t border-r",
              "bottom-0 left-0 border-b border-l",
              "bottom-0 right-0 border-b border-r",
            ].map((cls, i) => (
              <div key={i} className={`absolute w-6 h-6 ${cls} border-brand-gold/60`} />
            ))}

            <div className="absolute inset-0 glow-gold pointer-events-none opacity-50" />

            <span className="reveal eyebrow relative z-10">Membership</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-lg text-white mt-4 relative z-10"
                style={{ fontWeight: 300 }}>
              Elevate Every{" "}
              <em className="text-brand-gold">Experience</em>
            </h2>
            <p className="reveal reveal-delay-2 text-white/50 font-body mt-5 mb-10 max-w-xl mx-auto leading-relaxed relative z-10">
              Members enjoy waived coordination fees, priority booking with our most sought-after
              providers, and exclusive access to experiences before they&rsquo;re made public.
            </p>
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/membership" className="btn-primary">
                View Membership Plans
              </Link>
              <Link href="/contact" className="btn-ghost">
                Book Without Membership
              </Link>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA
          ════════════════════════════════════════════════ */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-3xl mx-auto text-center">
          <div className="ornament-line mb-8 reveal" />
          <h2 className="reveal font-display text-display-lg text-brand-navy" style={{ fontWeight: 400 }}>
            Ready to{" "}
            <em className="text-brand-coral">Experience</em>
            <br />
            Something Extraordinary?
          </h2>
          <p className="reveal reveal-delay-1 font-body text-brand-muted mt-6 mb-12 max-w-md mx-auto leading-relaxed">
            Tell us about the experience you have in mind and we&rsquo;ll craft it for you —
            in the comfort of your own home.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book an Experience
            </Link>
            <Link href="/packages" className="btn-outline">
              Browse Services
            </Link>
          </div>
          <div className="ornament-line mt-12 reveal reveal-delay-3" />
        </RevealGroup>
      </section>
    </>
  );
}
