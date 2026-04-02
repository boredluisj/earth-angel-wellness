import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Telehealth Weight Loss",
  description:
    "Medical weight loss from anywhere. Virtual consultations with the same clinical protocols and pharmacy-grade medications shipped directly to you, available in all 50 states.",
};

const steps = [
  {
    number: "01",
    heading: "Virtual Consultation",
    body: "Meet with our medical team over a secure video call. No travel, no waiting rooms. You talk, we listen, and we build your protocol from there.",
  },
  {
    number: "02",
    heading: "Medical Assessment",
    body: "We review your health history, labs, and goals. Every protocol is personalized. You get the same clinical standards as an in-person visit.",
  },
  {
    number: "03",
    heading: "Medication Shipped to You",
    body: "Your prescription is sent directly from a licensed compounding pharmacy to your door. Pharmacy-grade quality, no gray-market suppliers.",
  },
  {
    number: "04",
    heading: "Regular Virtual Check-Ins",
    body: "We monitor your progress and adjust your protocol as needed. You are never left to figure it out on your own.",
  },
];

const benefits = [
  {
    heading: "Total Convenience",
    body: "No commute, no time off work, no waiting rooms. Your consultation happens wherever you are most comfortable.",
  },
  {
    heading: "Complete Privacy",
    body: "Your health journey is personal. Telehealth keeps it that way. No neighbors in the parking lot, no awkward run-ins.",
  },
  {
    heading: "Same Medical Standards",
    body: "Telehealth does not mean a lower standard of care. You get the same clinical protocols, the same oversight, the same results.",
  },
  {
    heading: "Medication Delivery",
    body: "Medications are shipped from an accredited compounding pharmacy directly to your address. Discreet, reliable, and fast.",
  },
  {
    heading: "Available in All 50 States",
    body: "No matter where you live in the US, you can access Earth Angel Wellness protocols. We are licensed to serve patients nationwide.",
  },
];

export default function TelehealthPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              Virtual Care
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
              Telehealth Weight Loss
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed mb-10">
              Medical weight loss from anywhere. Same protocols, same results, from the comfort of
              home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://online.earthangelwellness.com/b/NzE5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:bg-gold/90 transition-colors text-center"
              >
                Start Virtual Consultation
              </Link>
              <Link
                href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gold/50 text-gold font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:border-gold hover:bg-gold/10 transition-colors text-center"
              >
                Book Appointment
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-telehealth.webp"
                alt="Telehealth weight loss consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              The Process
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-obsidian font-light leading-tight">
              How Telehealth Works
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-obsidian/10 h-full">
                  <span className="font-[family-name:var(--font-cormorant)] text-5xl text-gold/30 font-light block mb-4">
                    {step.number}
                  </span>
                  <div className="w-10 h-px bg-gold mb-4" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian font-light mb-3">
                    {step.heading}
                  </h3>
                  <p className="text-obsidian/70 leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              Why Telehealth
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream font-light leading-tight">
              The Advantages of Virtual Care
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.heading} delay={i * 0.1}>
                <div className="bg-slate-warm rounded-2xl p-8 h-full">
                  <div className="w-10 h-px bg-gold mb-6" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-light mb-3">
                    {benefit.heading}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">{benefit.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Images */}
      <section className="bg-obsidian py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/detail-telehealth-1.webp"
                alt="Virtual consultation in progress"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/detail-telehealth-2.webp"
                alt="Medication delivered to your door"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 px-6 text-center">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-obsidian font-light leading-tight mb-6">
            Start Your Virtual Consultation
          </h2>
          <p className="text-obsidian/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Available in all 50 states. No insurance required. Get access to the same clinical
            protocols from wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://online.earthangelwellness.com/b/NzE5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
            >
              Telehealth Portal
            </Link>
            <Link
              href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-obsidian/40 text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:border-obsidian hover:bg-obsidian/10 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
