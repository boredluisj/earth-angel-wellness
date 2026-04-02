import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Anti-Aging Treatments Salem, OR",
  description:
    "Peptide therapy, Sermorelin, NAD+, and hormone replacement in Salem, Oregon for cellular renewal.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const treatments = [
  {
    name: "Peptide Therapy",
    description:
      "Short chains of amino acids that act as biological messengers. Depending on the peptide used, targets include skin elasticity, metabolic rate, tissue repair, immune function, and libido.",
  },
  {
    name: "Sermorelin Injections",
    description:
      "A growth hormone releasing hormone (GHRH) analog that stimulates your pituitary to produce its own growth hormone. Benefits include lean muscle support, improved sleep, faster recovery, and fat reduction.",
  },
  {
    name: "NAD+ Injections",
    description:
      "NAD+ is a coenzyme essential to cellular energy production and DNA repair. Levels decline with age. Supplementing restores mitochondrial function, reduces oxidative stress, and supports cognitive clarity.",
  },
  {
    name: "Hormone Replacement",
    description:
      "Targeted hormone optimization for both men and women. Addresses fatigue, mood disruption, body composition changes, and libido decline caused by natural hormonal shifts over time.",
  },
  {
    name: "MICC and B12 Injections",
    description:
      "Methionine, Inositol, Choline, and Cyanocobalamin injections that support liver function, fat metabolism, and energy. A powerful complement to any anti-aging protocol.",
  },
];

const benefits = [
  {
    title: "Cellular Energy Restoration",
    description:
      "NAD+ and peptide therapies work at the mitochondrial level to restore the energy production capacity that declines with age. Clients consistently report improved stamina and mental sharpness.",
  },
  {
    title: "Lean Muscle and Body Composition",
    description:
      "Sermorelin and hormone optimization support lean mass retention and fat loss through the same biological pathways that decline in your 30s and 40s.",
  },
  {
    title: "Skin, Tissue, and Recovery",
    description:
      "Specific peptides directly support collagen synthesis, wound healing, and tissue repair, delivering visible improvements to skin texture and recovery speed.",
  },
  {
    title: "Transparent Pricing, Flexible Financing",
    description:
      "Every treatment is priced clearly upfront. We accept CareCredit financing so you can start your protocol without delaying results while waiting to save up.",
  },
];

const steps = [
  {
    number: "01",
    title: "Comprehensive Consultation",
    description:
      "We review your symptoms, bloodwork, and health goals to identify where your biology is falling short and which interventions address the root causes.",
  },
  {
    number: "02",
    title: "Lab Work Review",
    description:
      "Hormone panels, NAD+ markers, and metabolic indicators give us a precise baseline. We do not guess. We treat to data.",
  },
  {
    number: "03",
    title: "Protocol Design",
    description:
      "Your provider builds a layered protocol combining the therapies most relevant to your specific profile: peptides, Sermorelin, NAD+, hormone replacement, or a combination.",
  },
  {
    number: "04",
    title: "Treatment Begins",
    description:
      "Most therapies are administered via subcutaneous injection, which clients learn to do at home. In-office visits are available for those who prefer it.",
  },
  {
    number: "05",
    title: "Monitoring and Optimization",
    description:
      "Follow-up labs and check-ins let us track your response and refine dosing. Anti-aging is a long game. We stay with you.",
  },
];

const faqs = [
  {
    question: "What is the best anti-aging treatment to start with?",
    answer:
      "It depends on your primary concern. If energy and cognition are the issue, NAD+ is often the fastest-acting place to start. If body composition and sleep are suffering, Sermorelin typically produces the most meaningful shift. Your provider will recommend based on your labs and goals at consultation.",
  },
  {
    question: "How long before I notice results?",
    answer:
      "NAD+ clients often feel a difference within days of their first injection. Sermorelin typically shows meaningful results in 4 to 8 weeks. Peptide therapy and hormone optimization usually require 6 to 12 weeks for full effect, as the body needs time to recalibrate.",
  },
  {
    question: "Are these therapies safe for long-term use?",
    answer:
      "Yes, when properly monitored. We track bloodwork at regular intervals to ensure your levels stay in optimal ranges. Sermorelin stimulates your body's own hormone production rather than introducing exogenous hormones, making it particularly well-suited for long-term protocols.",
  },
  {
    question: "How much do anti-aging treatments cost?",
    answer:
      "Pricing varies by treatment and protocol length. All pricing is disclosed upfront at your consultation with no surprises. We also accept CareCredit financing, which allows you to start your protocol and pay over time.",
  },
  {
    question: "Can I combine multiple therapies?",
    answer:
      "Yes, and many clients do. Sermorelin and peptide therapy are frequently combined, as are NAD+ injections and MICC/B12 shots. Your provider will design a protocol that layers treatments intelligently rather than stacking arbitrarily.",
  },
  {
    question: "Do I need a prescription?",
    answer:
      "Yes. Sermorelin, hormone replacement, and most peptides require a prescription. Your Earth Angel Wellness provider will handle prescribing as part of your care. We do not dispense these medications without a proper clinical evaluation.",
  },
];

export default function AntiAgingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-cormorant)]">
              Cellular Renewal
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Anti-Aging Treatments
              <br />
              <span className="text-gold">Salem, OR</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mb-10">
              Peptide therapy, Sermorelin, NAD+ injections, and hormone
              replacement that work at the cellular level to restore what time
              takes away.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden max-w-2xl">
              <Image
                src="/images/hero-anti-aging.webp"
                alt="Anti-aging treatments at Earth Angel Wellness Salem Oregon"
                width={600}
                height={400}
                className="w-full object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
              A Multi-Layered Approach to Aging Well
            </h2>
            <p className="text-obsidian/80 text-lg max-w-3xl mb-12">
              Aging is biological, not inevitable at the pace most people accept.
              The decline in hormones, NAD+ levels, and growth hormone output that
              begins in your 30s drives most of what we associate with
              getting older: fatigue, body composition shifts, slower recovery,
              cognitive fog, and reduced libido. Our anti-aging protocols target
              these mechanisms directly.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {treatments.map((treatment, i) => (
              <AnimatedSection key={treatment.name} delay={i * 0.08}>
                <div className="border-l-2 border-gold pl-6 py-2">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-obsidian/70">{treatment.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/detail-anti-aging-1.webp"
                alt="Peptide therapy and anti-aging treatment overview"
                width={1120}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-cream mb-4">
              What You Can Expect
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mb-12">
              Clients describe feeling like a younger version of themselves, not
              a medicated one.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="bg-slate-warm rounded-2xl p-8 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-cream/70">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-4">
              How We Build Your Protocol
            </h2>
            <p className="text-obsidian/60 text-lg max-w-2xl mb-12">
              Precision over guesswork, every step.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <span className="font-[family-name:var(--font-cormorant)] text-5xl text-gold/30 leading-none flex-shrink-0 w-14">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian mb-1">
                        {step.title}
                      </h3>
                      <p className="text-obsidian/70">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/detail-anti-aging-2.webp"
                  alt="Anti-aging protocol design and monitoring process"
                  width={560}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-obsidian py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-cream mb-12">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border-b border-cream/10 pb-8">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-gold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-cream/70">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-4">
              Start Reversing the Clock
            </h2>
            <p className="text-obsidian/70 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation and we will review your symptoms, goals,
              and treatment options together. CareCredit financing available.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-obsidian font-semibold px-10 py-4 rounded-full hover:bg-gold/90 transition-colors text-lg"
            >
              Book Your Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
