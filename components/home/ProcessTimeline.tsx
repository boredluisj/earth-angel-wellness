"use client";

import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: 1,
    title: "Book Free Consultation",
    description:
      "Schedule a 15-minute call to discuss your goals and answer all questions.",
  },
  {
    number: 2,
    title: "Get Your Personalized Plan",
    description:
      "Our medical team designs a treatment protocol specific to your body and needs.",
  },
  {
    number: 3,
    title: "Start Your Treatment",
    description:
      "Begin with regular check-ins, medication management, and ongoing support.",
  },
  {
    number: 4,
    title: "See Real Results",
    description:
      "Track progress monthly. Adjust protocol as needed. Achieve your dream body.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-obsidian py-20 px-6">
      <AnimatedSection>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream text-center mb-16">
          How It Works
        </h2>
      </AnimatedSection>

      {/* Desktop timeline */}
      <div className="max-w-4xl mx-auto hidden md:block">
        <div className="relative">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.15}>
              <div className="flex gap-8 relative">
                {/* Circle + connecting line column */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold text-obsidian flex items-center justify-center font-bold text-lg font-[family-name:var(--font-cormorant)] shrink-0 z-10">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 bg-gold/30 flex-1 my-2 min-h-[48px]" />
                  )}
                </div>

                {/* Step content */}
                <div className="pb-10">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-cream/70 text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="flex md:hidden gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        {steps.map((step, index) => (
          <AnimatedSection
            key={step.number}
            delay={index * 0.1}
            className="min-w-[260px] snap-start shrink-0 bg-slate-warm rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-full bg-gold text-obsidian flex items-center justify-center font-bold text-lg font-[family-name:var(--font-cormorant)] mb-4">
              {step.number}
            </div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-semibold mb-2">
              {step.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-cream/70 text-base">
              {step.description}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
