"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const pairs = [
  { before: "/images/before-1.webp", after: "/images/after-1.webp" },
  { before: "/images/before-2.webp", after: "/images/after-2.webp" },
  { before: "/images/before-3.webp", after: "/images/after-3.webp" },
];

export default function BeforeAfter() {
  return (
    <section className="bg-cream py-20 px-6">
      <AnimatedSection>
        <h2 className="font-cormorant text-4xl md:text-5xl text-obsidian text-center mb-4">
          Real Transformations
        </h2>
        <p className="font-inter text-lg text-slate-warm text-center mb-12">
          See what's possible with personalized medical weight loss.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pairs.map((pair, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <Image
                    src={pair.before}
                    alt={`Before transformation ${index + 1}`}
                    width={250}
                    height={300}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                  <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-inter font-semibold text-white bg-obsidian/60 py-1 rounded-b-lg">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <Image
                    src={pair.after}
                    alt={`After transformation ${index + 1}`}
                    width={250}
                    height={300}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                  <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-inter font-semibold text-white bg-gold/80 py-1 rounded-b-lg">
                    After
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <p className="font-inter text-sm text-slate-warm/70 text-center max-w-3xl mx-auto mt-8">
          Individual results may vary. These photos are real patient transformations shared with consent. Results depend on adherence to treatment plan, nutrition guidance, and lifestyle changes.
        </p>
      </AnimatedSection>
    </section>
  );
}
