import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

const quickLinks = [
  { label: "Financing", href: "/financing" },
  { label: "Telehealth", href: "/telehealth" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "HIPAA Notice", href: "/hipaa" },
  { label: "Refund Policy", href: "/refund" },
];

const navFooterLinks = navLinks.filter((l) =>
  ["About", "Services", "Blog", "Contact", "Products"].includes(l.label)
);

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Earth Angel Wellness logo"
                width={60}
                height={48}
                className="object-contain"
              />
              <span className="text-lg font-semibold leading-tight">
                Earth Angel Wellness
              </span>
            </Link>
            <p className="text-sm text-cream/60">Salem, OR</p>
            <p className="text-sm text-cream/75 leading-relaxed">
              Medical weight loss, hormone therapy, and wellness care rooted in
              real results and genuine support.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {navFooterLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-cream/75">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-3 hover:text-gold transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 hover:text-gold transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                <div className="flex flex-col gap-1">
                  <span>Tue, Wed, Thu: 11AM - 5PM</span>
                  <span>Fri: 11AM - 4PM</span>
                  <span>Sat: 9AM - 3PM</span>
                  <span className="text-cream/40">Sun - Mon: CLOSED</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + LegitScript row */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>

          <a
            href={siteConfig.legitScript}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LegitScript Certified"
          >
            <Image
              src="/images/legitscript-seal.png"
              alt="LegitScript certified"
              width={40}
              height={40}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/40">
          <p>
            Designed by{" "}
            <a
              href="https://luneredigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Lunere Digital
            </a>
          </p>
          <p>2026 Earth Angel Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
