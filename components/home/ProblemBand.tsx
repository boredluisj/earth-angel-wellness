"use client";

import AnimatedSection from "@/components/AnimatedSection";

const painPoints = [
  "The programs that promise quick results but leave you right back where you started.",
  "The guilt of feeling like it's somehow your fault.",
  "The exhaustion of fighting your own body every single day.",
];

export default function ProblemBand() {
  return (
    <section className="bg-cream text-obsidian py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">

        <AnimatedSection>
          <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-center leading-snug">
            You&apos;ve tried everything. Diets. Exercise plans. Willpower.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {painPoints.map((point) => (
              <li
                key={point}
                className="text-lg text-slate-warm text-center leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </AnimatedSection>

      </div>
    </section>
  );
}
