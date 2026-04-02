import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Experiences",
    links: [
      { href: "/packages",   label: "Private Chef Dining" },
      { href: "/packages",   label: "In-Home Spa" },
      { href: "/packages",   label: "Romance & Date Nights" },
      { href: "/packages",   label: "Luxury Gatherings" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about",      label: "Our Story" },
      { href: "/membership", label: "Membership" },
      { href: "/contact",    label: "Book an Experience" },
      { href: "/about#faq",  label: "FAQs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
            style={{ background: "var(--color-obsidian)" }}>

      {/* Top gradient border */}
      <div className="gradient-divider" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]
                      bg-brand-gold/3 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/">
              <span className="font-display text-3xl tracking-tight text-white">
                Stay<span className="text-brand-gold">Cay</span>
              </span>
            </Link>
            <p className="mt-5 text-white/45 font-body leading-relaxed max-w-sm text-sm">
              Bespoke at-home luxury experiences — private chefs, in-home spa rituals,
              romantic setups, and intimate gatherings. Your world, elevated.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-7">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50
                           hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50
                           hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <h4 className="font-body font-semibold text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-brand-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-body font-semibold text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-5">
              Stay in the loop
            </h4>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              New experiences, member offers, and luxury inspiration — straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 px-4 py-3
                           text-sm text-white placeholder:text-white/30
                           focus:outline-none focus:border-brand-gold/50
                           transition-colors duration-300"
              />
              <button className="bg-brand-gold text-brand-obsidian px-5 py-3
                                 text-xs font-semibold tracking-[0.15em] uppercase
                                 hover:bg-brand-gold-light transition-colors duration-300 shrink-0">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gradient-divider mb-7" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/25 text-[11px] tracking-wide">
          <span>&copy; {new Date().getFullYear()} StayCay. All rights reserved.</span>
          <div className="flex gap-7">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
