"use client";

import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const rows = [
  {
    label: "Medical oversight",
    other: "Generic templates",
    earth: "Personalized medical protocols",
  },
  {
    label: "Follow-up care",
    other: "Minimal",
    earth: "Weekly check-ins included",
  },
  {
    label: "Prescription source",
    other: "Pharmacy chains",
    earth: "Premium compounding partners",
  },
  {
    label: "Results monitoring",
    other: "Quarterly only",
    earth: "Monthly progress reviews",
  },
  {
    label: "Support model",
    other: "Transactional",
    earth: "Relationship-based",
  },
];

export default function TheDifference() {
  return (
    <section className="bg-obsidian py-20 px-6">
      <AnimatedSection>
        <h2
          className="text-4xl md:text-5xl text-cream text-center mb-12"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          The Earth Angel Difference
        </h2>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto">
        {/* Header row */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-3 gap-4 px-4 mb-4">
            <div />
            <div className="text-center text-cream/50 text-sm font-medium uppercase tracking-wide">
              Other Clinics
            </div>
            <div className="text-center text-gold font-semibold text-sm uppercase tracking-wide">
              Earth Angel Wellness
            </div>
          </div>
        </AnimatedSection>

        {/* Comparison rows */}
        {rows.map((row, i) => (
          <AnimatedSection key={row.label} delay={0.15 + i * 0.08}>
            <div className="bg-slate-warm/30 rounded-lg p-4 mb-3 grid grid-cols-3 gap-4 items-center">
              <div className="text-cream/80 text-sm font-medium">{row.label}</div>
              <div className="text-center text-cream/50 text-sm">{row.other}</div>
              <div className="flex items-center justify-center gap-2 border-l-2 border-gold pl-4">
                <Check size={16} className="text-gold shrink-0" />
                <span className="text-cream text-sm">{row.earth}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
