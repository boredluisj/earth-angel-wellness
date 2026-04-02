"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function EmpathySection() {
  return (
    <section className="bg-obsidian py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <AnimatedSection className="lg:w-1/2 w-full">
          <Image
            src="/images/empathy-not-your-fault.webp"
            alt="It's not your fault"
            width={600}
            height={430}
            className="rounded-xl w-full h-auto"
          />
        </AnimatedSection>

        <AnimatedSection className="lg:w-1/2 w-full" delay={0.15}>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h2 className="font-cormorant text-4xl md:text-5xl text-cream mb-6">
            It's Not Your Fault
          </h2>
          <div className="space-y-4">
            <p className="font-inter text-cream/80 text-lg leading-relaxed">
              You're not broken. Your metabolism isn't lazy. It's biology.
            </p>
            <p className="font-inter text-cream/80 text-lg leading-relaxed">
              Recent studies show that weight gain is driven by hormonal imbalances, not willpower. That's why restrictive diets fail. Your body is working against you.
            </p>
            <p className="font-inter text-cream/80 text-lg leading-relaxed">
              At Earth Angel Wellness, we don't fight biology. We work with it. Our GLP-1 treatment addresses the root cause: your hormones. Combined with personalized nutrition and support, you finally get results that stick.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
