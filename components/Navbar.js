"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",           label: "Home" },
  { href: "/packages",   label: "Experiences" },
  { href: "/membership", label: "Membership" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Determine whether we're on a light-background page (non-hero) */
  const isTransparent = !scrolled && !mobileOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.07)] py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between section-padding">

          {/* ── Logo ── */}
          <Link href="/" className="relative z-10 group">
            <span className={`font-display text-2xl md:text-3xl tracking-tight transition-colors duration-500 ${
              isTransparent ? "text-white" : "text-brand-navy"
            }`}>
              Stay<span className={`transition-colors duration-500 ${
                isTransparent ? "text-brand-gold" : "text-brand-coral"
              }`}>Cay</span>
            </span>
            {/* Subtle underline animation */}
            <span className={`block h-px w-0 group-hover:w-full transition-all duration-500 ${
              isTransparent ? "bg-brand-gold" : "bg-brand-coral"
            }`} />
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isTransparent
                    ? pathname === link.href
                      ? "text-brand-gold"
                      : "text-white/80 hover:text-white"
                    : pathname === link.href
                      ? "text-brand-coral"
                      : "text-brand-navy hover:text-brand-coral"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className={`absolute -bottom-1 left-0 w-full h-px transition-colors duration-300 ${
                    isTransparent ? "bg-brand-gold" : "bg-brand-coral"
                  }`} />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`font-body font-semibold text-xs tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300 ${
                isTransparent
                  ? "border border-white/40 text-white hover:bg-white/10 hover:border-white/70"
                  : "bg-brand-gold text-brand-obsidian hover:shadow-[0_4px_20px_rgba(201,169,110,0.3)]"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px transition-all duration-400 ${
                  mobileOpen || scrolled ? "bg-brand-navy" : "bg-white"
                } ${
                  i === 0 ? `w-6 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}` :
                  i === 1 ? `w-4 ${mobileOpen ? "opacity-0 w-6" : ""}` :
                  `w-6 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`
                }`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer — dark luxury ── */}
      <div
        className={`fixed inset-0 z-40 bg-brand-obsidian transition-all duration-600 md:hidden flex flex-col
                    items-center justify-center gap-10 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 glow-gold pointer-events-none" />

        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-display text-4xl transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } ${pathname === link.href ? "text-brand-gold" : "text-white/85 hover:text-white"}`}
            style={{ transitionDelay: mobileOpen ? `${i * 70 + 50}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className={`btn-primary mt-2 transition-all duration-500 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: mobileOpen ? `${NAV_LINKS.length * 70 + 50}ms` : "0ms" }}
        >
          Book an Experience
        </Link>
      </div>
    </>
  );
}
