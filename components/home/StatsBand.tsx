"use client";

import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

const stats = [
  { end: 240, suffix: "+", label: "Five-Star Reviews" },
  { end: 11, suffix: "", label: "Services Offered" },
  { end: 50, suffix: "", label: "States Served via Telehealth" },
];

export default function StatsBand() {
  return (
    <section className="bg-obsidian py-16 px-6">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {stats.map(({ end, suffix, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <span className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl font-bold text-gold leading-none">
                <CountUp end={end} suffix={suffix} />
              </span>
              <span className="text-cream/70 text-base leading-relaxed">
                {label}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
