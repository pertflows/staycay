"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",           label: "Home" },
  { href: "/packages",   label: "Packages" },
  { href: "/membership", label: "Membership" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between section-padding">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className="font-display text-2xl md:text-3xl tracking-tight text-brand-navy">
              Stay<span className="text-brand-coral">Cay</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm tracking-wide uppercase transition-colors duration-300
                  ${pathname === link.href
                    ? "text-brand-coral"
                    : "text-brand-navy hover:text-brand-coral"
                  }
                `}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-coral rounded-full" />
                )}
              </Link>
            ))}
            <Link href="/membership" className="btn-primary !py-3 !px-6 !text-xs">
              Join Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-brand-cream transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-display text-3xl transition-all duration-500 ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } ${pathname === link.href ? "text-brand-coral" : "text-brand-navy"}`}
            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/membership"
          className={`btn-primary mt-4 transition-all duration-500 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: mobileOpen ? `${NAV_LINKS.length * 80}ms` : "0ms" }}
        >
          Join Now
        </Link>
      </div>
    </>
  );
}
