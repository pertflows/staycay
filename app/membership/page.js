"use client";
import Link from "next/link";
import { RevealGroup } from "@/components/useReveal";

const TIERS = [
  {
    name: "Indulge",
    price: "$XX",
    period: "/month",
    tagline: "For the discerning occasional host",
    featured: false,
    perks: [
      "Waived coordination fee on all bookings",
      "Access to member-only experiences",
      "Priority response from your concierge",
      "Monthly curated inspiration & exclusive offers",
      "Early access to new provider partnerships",
    ],
  },
  {
    name: "Bespoke",
    price: "$XX",
    period: "/month",
    tagline: "For those who live luxuriously",
    featured: true,
    perks: [
      "Everything in Indulge, plus:",
      "Dedicated personal experience specialist",
      "First access to limited & seasonal experiences",
      "Complimentary experience enhancement on every booking",
      "Annual surprise luxury gift from our curators",
      "Invitation to private StayCay member events",
      "Concierge available 7 days a week",
    ],
  },
];

const COMPARISON = [
  { feature: "Coordination fee waived",            indulge: true,  bespoke: true },
  { feature: "Member-only experiences",            indulge: true,  bespoke: true },
  { feature: "Priority concierge response",        indulge: true,  bespoke: true },
  { feature: "Monthly deals & inspiration",        indulge: true,  bespoke: true },
  { feature: "Early access to new partnerships",   indulge: true,  bespoke: true },
  { feature: "Dedicated personal specialist",      indulge: false, bespoke: true },
  { feature: "First access to limited experiences",indulge: false, bespoke: true },
  { feature: "Complimentary experience upgrade",   indulge: false, bespoke: true },
  { feature: "Annual luxury gift",                 indulge: false, bespoke: true },
  { feature: "Private member event invitations",   indulge: false, bespoke: true },
  { feature: "7-day concierge availability",       indulge: false, bespoke: true },
];

const Check = () => (
  <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const Dash = () => (
  <span className="w-4 h-4 flex items-center justify-center text-brand-muted/30 text-sm">&mdash;</span>
);

export default function MembershipPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-44 pb-24 section-padding overflow-hidden hero-gradient">
        <div className="absolute bottom-0 right-[15%] w-[500px] h-[500px] rounded-full
                        bg-brand-gold/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="h-px w-8 bg-brand-gold" />
            <span className="font-body text-brand-gold text-xs uppercase tracking-[0.3em]">
              Membership
            </span>
            <div className="h-px w-8 bg-brand-gold" />
          </div>
          <h1 className="font-display text-display-xl text-white mb-7 animate-fade-up"
              style={{ fontWeight: 300 }}>
            Live Beautifully.{" "}
            <em className="text-brand-gold">Often.</em>
          </h1>
          <p className="font-body text-white/55 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up"
             style={{ animationDelay: "0.15s" }}>
            Membership gives you elevated access — fewer fees, better service, and
            exclusive experiences that aren&rsquo;t available to the public.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className={`reveal reveal-delay-${i + 1} relative transition-all duration-300 ${
                  tier.featured
                    ? "shadow-[0_20px_80px_rgba(0,0,0,0.2)]"
                    : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-px left-0 right-0 h-0.5 shimmer-border" />
                )}

                <div className={`relative h-full p-12 ${
                  tier.featured
                    ? "bg-brand-navy text-white border border-brand-gold/20"
                    : "bg-white border border-brand-sand"
                }`}>
                  {tier.featured && (
                    <span className="absolute top-8 right-8 font-body text-[10px] uppercase tracking-[0.2em]
                                     text-brand-gold border border-brand-gold/40 px-3 py-1.5">
                      Most Popular
                    </span>
                  )}

                  {/* Tier name */}
                  <div className="mb-8">
                    <h3 className={`font-display text-display-md ${tier.featured ? "text-white" : "text-brand-navy"}`}
                        style={{ fontWeight: 300 }}>
                      {tier.name}
                    </h3>
                    <p className={`text-xs uppercase tracking-[0.15em] mt-2 ${
                      tier.featured ? "text-brand-gold/70" : "text-brand-muted"
                    }`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-10 pb-10 border-b border-current/10">
                    <span className={`font-display text-5xl ${tier.featured ? "text-brand-gold" : "text-brand-navy"}`}
                          style={{ fontWeight: 300 }}>
                      {tier.price}
                    </span>
                    <span className={`text-xs ml-1 ${tier.featured ? "text-white/40" : "text-brand-muted"}`}>
                      {tier.period}
                    </span>
                  </div>

                  {/* Perks */}
                  <ul className="space-y-4 mb-10">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-4">
                        {perk.endsWith(":") ? (
                          <span className={`text-xs uppercase tracking-[0.15em] font-semibold w-full block ${
                            tier.featured ? "text-brand-gold/60" : "text-brand-gold"
                          }`}>
                            {perk}
                          </span>
                        ) : (
                          <>
                            <div className="mt-0.5 shrink-0">
                              {tier.featured ? (
                                <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              ) : (
                                <Check />
                              )}
                            </div>
                            <span className={`text-sm ${tier.featured ? "text-white/75" : "text-brand-charcoal/70"}`}>
                              {perk}
                            </span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-4 font-body font-semibold text-xs tracking-[0.18em] uppercase
                                transition-all duration-300 ${
                      tier.featured
                        ? "bg-brand-gold text-brand-obsidian hover:shadow-[0_8px_30px_rgba(201,169,110,0.4)]"
                        : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream"
                    }`}
                  >
                    Join {tier.name}
                  </button>

                  <p className={`text-center text-[10px] tracking-wide mt-3 ${
                    tier.featured ? "text-white/30" : "text-brand-muted/60"
                  }`}>
                    Cancel anytime &middot; Billed monthly
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── Comparison Table ── */}
      <section className="section-gap bg-white section-padding">
        <RevealGroup className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="reveal eyebrow">Side by Side</span>
            <h2 className="reveal reveal-delay-1 font-display text-display-md text-brand-navy mt-3"
                style={{ fontWeight: 400 }}>
              Compare Plans
            </h2>
          </div>

          <div className="reveal reveal-delay-1 border border-brand-sand overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-brand-navy text-white">
              <div className="p-5 font-body text-xs uppercase tracking-[0.15em]">Feature</div>
              <div className="p-5 font-body text-xs uppercase tracking-[0.15em] text-center border-l border-white/10">
                Indulge
              </div>
              <div className="p-5 font-body text-xs uppercase tracking-[0.15em] text-center border-l border-white/10 text-brand-gold">
                Bespoke
              </div>
            </div>
            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-t border-brand-sand/60 ${
                  i % 2 === 0 ? "bg-white" : "bg-brand-cream/40"
                }`}
              >
                <div className="p-4 text-sm text-brand-charcoal/70">{row.feature}</div>
                <div className="p-4 flex items-center justify-center border-l border-brand-sand/40">
                  {row.indulge ? <Check /> : <Dash />}
                </div>
                <div className="p-4 flex items-center justify-center border-l border-brand-sand/40">
                  {row.bespoke ? <Check /> : <Dash />}
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── Not a member CTA ── */}
      <section className="section-gap section-padding bg-brand-cream">
        <RevealGroup className="max-w-3xl mx-auto text-center">
          <div className="ornament-line mb-8 reveal" />
          <h2 className="reveal font-display text-display-md text-brand-navy" style={{ fontWeight: 400 }}>
            Not Ready to Commit?
          </h2>
          <p className="reveal reveal-delay-1 text-brand-muted mt-5 mb-10 leading-relaxed">
            Absolutely no problem. You can book any experience as a non-member —
            a coordination fee simply applies. Try us, fall in love, and join whenever
            it feels right.
          </p>
          <Link href="/contact" className="reveal reveal-delay-2 btn-primary inline-flex">
            Book a One-Off Experience
          </Link>
          <div className="ornament-line mt-12 reveal reveal-delay-3" />
        </RevealGroup>
      </section>
    </>
  );
}
