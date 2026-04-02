"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentY > lastScrollY && currentY > 60) {
        setAnnouncementVisible(false);
      } else if (currentY < lastScrollY) {
        setAnnouncementVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
        style={{
          backgroundColor: "#0C0A0B",
          transform: announcementVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm font-medium"
          style={{ color: "#C9A96E" }}
        >
          <span>GLP-1 In-Stock: Injections Available Same Day!</span>
          <span>Veteran Owned &amp; Operated</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="fixed left-0 right-0 z-40 transition-all duration-300"
        style={{
          top: announcementVisible ? "36px" : "0px",
          backgroundColor: scrolled ? "rgba(10, 8, 9, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Earth Angel Wellness"
                width={60}
                height={48}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm transition-colors duration-200"
                  style={{ color: "#FAF7F4" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FAF7F4")}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={siteConfig.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold px-6 py-2 rounded transition-colors duration-200 text-sm"
                style={{
                  backgroundColor: "#C9A96E",
                  color: "#0A0809",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#D9B97E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A96E";
                }}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded transition-colors duration-200"
              style={{ color: "#FAF7F4" }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "#0A0809" }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Earth Angel Wellness"
                width={60}
                height={48}
              />
            </Link>
            <button
              className="flex items-center justify-center p-2 rounded transition-colors duration-200"
              style={{ color: "#FAF7F4" }}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-2xl font-medium transition-colors duration-200"
                style={{ color: "#FAF7F4" }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FAF7F4")}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={siteConfig.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-semibold px-8 py-3 rounded text-base transition-colors duration-200"
              style={{
                backgroundColor: "#C9A96E",
                color: "#0A0809",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
