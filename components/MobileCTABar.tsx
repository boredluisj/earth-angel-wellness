"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-slate-warm/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.3)] px-4 py-3 flex items-center gap-3">
        <a
          href={siteConfig.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gold text-obsidian font-semibold text-center py-3 rounded-lg hover:bg-gold-light transition-colors"
        >
          Book Now
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="text-cream/60 hover:text-cream p-1"
          aria-label="Dismiss booking bar"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
