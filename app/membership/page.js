"use client";
import { useState } from "react";
import { RevealGroup } from "@/components/useReveal";

const TIERS = [
  {
    name: "Explorer",
    price: "$XX",
    period: "/month",
    tagline: "Perfect for occasional travelers",
    featured: false,
    perks: [
      "Waived coordination fee on all bookings",
      "Access to member-only packages",
      "Priority response from our concierge team",
      "Monthly newsletter with exclusive deals",
    ],
  },
  {
    name: "Voyager",
    price: "$XX",
    period: "/month",
    tagline: "For the dedicated adventurer",
    featured: true,
    perks: [
      "Everything in Explorer, plus:",
      "First access to new vendor partnerships",
      "Complimentary upgrade requests on accommodations",
      "Dedicated planning specialist",
      "Annual surprise experience gift",
      "VIP event invitations",
    ],
  },
];

const COMPARISON = [
  { feature: "Coordination fee waived",        explorer: true,  voyager: true },
  { feature: "Member-only packages",           explorer: true,  voyager: true },
  { feature: "Priority concierge response",    explorer: true,  voyager: true },
  { feature: "Monthly deals newsletter",       explorer: true,  voyager: true },
  { feature: "First access to new vendors",    explorer: false, voyager: true },
  { feature: "Complimentary upgrade requests", explorer: false, voyager: true },
  { feature: "Dedicated planning specialist",  explorer: false, voyager: true },
  { feature: "Annual surprise experience",     explorer: false, voyager: true },
  { feature: "VIP event invitations",          explorer: false, voyager: true },
];

const Check = () => (
  <svg className="w-5 h-5 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const Dash = () => (
  <span className="w-5 h-5 flex items-center justify-center text-brand-muted/40">&mdash;</span>
);

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="font-body text-brand-coral text-sm uppercase tracking-[0.15em] animate-fade-in">
            Membership
          </span>
          <h1 className="font-display text-display-xl text-brand-navy mt-3 mb-6 animate-fade-up">
            Travel Better, <span className="italic text-brand-coral">Save More</span>
          </h1>
          <p className="font-body text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up"
             style={{ animationDelay: "0.15s" }}>
            Membership unlocks waived coordination fees, priority booking,
            and exclusive perks. Anyone can book with StayCay — members
            just get more out of every trip.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="section-padding pb-section">
        <RevealGroup className="max-w-5xl mx-auto">
          {/* Billing toggle placeholder — uncomment if annual pricing is added
          <div className="flex items-center justify-center gap-4 mb-12 reveal">
            <button onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${billingCycle === "monthly" ? "bg-brand-navy text-white" : "text-brand-muted"}`}>Monthly</button>
            <button onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${billingCycle === "annual" ? "bg-brand-navy text-white" : "text-brand-muted"}`}>Annual (Save 20%)</button>
          </div>
          */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className={`reveal reveal-delay-${i + 1} relative rounded-brand p-10 transition-all duration-300
                  ${tier.featured
                    ? "bg-brand-navy text-white shadow-2xl scale-[1.02] border-2 border-brand-coral"
                    : "card-elevated"
                  }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-coral text-white
                                   text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <h3 className={`font-display text-display-sm ${tier.featured ? "text-white" : "text-brand-navy"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mt-1 ${tier.featured ? "text-white/60" : "text-brand-muted"}`}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="mb-8">
                  <span className={`font-display text-5xl ${tier.featured ? "text-brand-coral" : "text-brand-navy"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${tier.featured ? "text-white/50" : "text-brand-muted"}`}>
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {tier.featured ? (
                          <svg className="w-5 h-5 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <Check />
                        )}
                      </div>
                      <span className={`text-sm ${tier.featured ? "text-white/80" : "text-brand-charcoal"}`}>
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-brand font-body font-semibold text-sm uppercase tracking-wider
                              transition-all duration-300 ${
                    tier.featured
                      ? "bg-brand-coral text-white hover:bg-brand-coral/80"
                      : "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  Join {tier.name}
                </button>

                <p className={`text-center text-xs mt-3 ${tier.featured ? "text-white/40" : "text-brand-muted"}`}>
                  Cancel anytime &middot; Billed monthly via Stripe
                </p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── Comparison Table ── */}
      <section className="section-gap bg-brand-sand/30 section-padding">
        <RevealGroup className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="reveal font-display text-display-md text-brand-navy">
              Compare Plans
            </h2>
          </div>

          <div className="reveal reveal-delay-1 bg-white rounded-brand overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-brand-navy text-white">
              <div className="p-5 font-body font-semibold text-sm">Feature</div>
              <div className="p-5 font-body font-semibold text-sm text-center">Explorer</div>
              <div className="p-5 font-body font-semibold text-sm text-center">Voyager</div>
            </div>
            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-brand-sand/50 ${
                  i % 2 === 0 ? "bg-white" : "bg-brand-cream/50"
                }`}
              >
                <div className="p-4 text-sm text-brand-charcoal">{row.feature}</div>
                <div className="p-4 flex items-center justify-center">
                  {row.explorer ? <Check /> : <Dash />}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.voyager ? <Check /> : <Dash />}
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── Not a member? CTA ── */}
      <section className="section-gap section-padding">
        <RevealGroup className="max-w-3xl mx-auto text-center">
          <h2 className="reveal font-display text-display-md text-brand-navy">
            Not Ready to Commit?
          </h2>
          <p className="reveal reveal-delay-1 text-brand-muted mt-4 mb-8">
            No problem — you can still book experiences with StayCay.
            Non-members simply pay a coordination fee per booking. Try us out,
            and join when you&rsquo;re ready.
          </p>
          <a href="/contact" className="reveal reveal-delay-2 btn-primary inline-flex">
            Plan a Trip
          </a>
        </RevealGroup>
      </section>
    </>
  );
}
