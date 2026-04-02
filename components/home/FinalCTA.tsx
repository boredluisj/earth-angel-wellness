"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="bg-obsidian py-24 px-6 text-center">
      <AnimatedSection>
        <div className="w-20 h-1 bg-gold mx-auto mb-8" />
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream mb-6">
          Your journey starts with one conversation.
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-lg text-cream/70 max-w-xl mx-auto mb-10">
          Book a free 15-minute consultation. No obligation. Just honest
          answers.
        </p>
        <a
          href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-obsidian px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors inline-block font-[family-name:var(--font-inter)]"
        >
          Book Your Free Consultation
        </a>
      </AnimatedSection>
    </section>
  );
}
