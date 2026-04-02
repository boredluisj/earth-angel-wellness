"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const valueItems = [
  "Free initial consultation",
  "Personalized medical protocol",
  "Weekly check-ins and support",
  "Monthly progress reviews",
  "Premium compounded medications",
  "InBody 580 body composition tracking",
  "Nutrition coaching guidance",
];

export default function FinancingSection() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Financing */}
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-obsidian mb-6">
            More Affordable Than You Think
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-slate-warm mb-8">
            We partner with leading financing companies to make premium weight
            loss treatment accessible.
          </p>

          <div className="flex flex-col gap-4">
            {/* Cherry */}
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
              <Image
                src="/images/financing-cherry.png"
                alt="Cherry Financing"
                width={120}
                height={50}
                className="object-contain"
              />
              <a
                href="https://pay.withcherry.com/earth-angel-wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-inter)] text-gold hover:underline"
              >
                Apply for Cherry Financing
              </a>
            </div>

            {/* CareCredit */}
            <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
              <Image
                src="/images/financing-carecredit.webp"
                alt="CareCredit"
                width={120}
                height={50}
                className="object-contain"
              />
              <a
                href="https://www.carecredit.com/go/484BPT/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-inter)] text-gold hover:underline"
              >
                Apply for CareCredit
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Right column - Value stack */}
        <AnimatedSection delay={0.15}>
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian mb-6">
            What&apos;s Included
          </h3>
          <div className="w-16 h-1 bg-gold mb-6" />
          <ul className="flex flex-col gap-4">
            {valueItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-gold shrink-0"
                  strokeWidth={2}
                />
                <span className="font-[family-name:var(--font-inter)] text-slate-warm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
