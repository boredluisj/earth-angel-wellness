import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Hormone Replacement for Men Salem, OR",
  description:
    "Testosterone replacement therapy in Salem, Oregon. $150-$300/month personalized treatment plans.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const faqs = [
  {
    q: "What does testosterone replacement therapy actually do?",
    a: "TRT restores testosterone to a healthy physiological range. Most men report improvements in energy, mood, libido, body composition, and mental sharpness. It works by supplementing what your body no longer produces in sufficient quantities, not by forcing levels unnaturally high.",
  },
  {
    q: "How much does men's HRT cost?",
    a: "Our personalized treatment plans run $150 to $300 per month depending on the protocol, delivery method, and monitoring frequency. We provide transparent pricing upfront with no hidden fees.",
  },
  {
    q: "How long before I see results?",
    a: "Many men notice improved energy and mood within 3 to 6 weeks. Libido and sexual function often improve in 4 to 8 weeks. Changes in muscle mass and body composition develop over 3 to 6 months with consistent treatment.",
  },
  {
    q: "Are there side effects with TRT?",
    a: "When properly dosed and monitored, TRT is well tolerated. Some men experience minor adjustments early on. Regular lab monitoring allows us to catch and address any changes quickly, keeping your treatment safe and effective throughout.",
  },
];

export default function HRTMenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              Men&apos;s Hormonal Health
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Hormone Replacement for Men in Salem, OR
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              Personalized testosterone replacement therapy starting at $150/month.
              Reclaim your energy, strength, and clarity.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-obsidian px-8 py-4 font-semibold tracking-wide hover:bg-gold-light transition-colors"
            >
              Book a Consultation
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Image
              src="/images/hero-hrt-men.webp"
              alt="Hormone Replacement Therapy for Men in Salem OR"
              width={600}
              height={400}
              className="w-full object-cover"
              priority
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <Image
              src="/images/detail-hrt-men-1.webp"
              alt="Men's testosterone replacement therapy overview"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
              Testosterone Declines. Performance Does Not Have To.
            </h2>
            <p className="text-obsidian/70 mb-4">
              Testosterone levels begin declining in most men as early as their
              30s and 40s, often by 1 to 2 percent per year. The result is a slow
              accumulation of symptoms that many men accept as inevitable: fatigue,
              low drive, mental fog, and a body that no longer responds the way it
              used to.
            </p>
            <p className="text-obsidian/70 mb-4">
              Our testosterone replacement therapy is built around your labs and
              your life, not a generic protocol. We offer two primary delivery
              methods: injections for precise, consistent dosing, and topical gels
              for those who prefer a daily application without injections.
            </p>
            <p className="text-obsidian/70">
              Every plan includes ongoing lab monitoring to ensure your levels stay
              in a healthy range and your results continue to improve over time.
              Plans start at $150 per month.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm text-center mb-4">
              What You Gain
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream text-center mb-14">
              Benefits of Men&apos;s HRT
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Increased Vitality",
                body: "Higher testosterone directly translates to sustained energy throughout the day without the afternoon crash.",
              },
              {
                title: "Enhanced Libido",
                body: "Testosterone is the primary driver of male sexual desire. Restoring healthy levels restores that drive.",
              },
              {
                title: "Improved Mood and Cognition",
                body: "Many men on TRT report better focus, reduced irritability, and a more positive overall outlook.",
              },
              {
                title: "Muscle and Fat Composition",
                body: "Testosterone supports lean muscle development and helps the body preferentially burn fat rather than store it.",
              },
              {
                title: "Better Sleep",
                body: "Optimized hormone levels improve sleep architecture, leading to deeper rest and easier recovery.",
              },
              {
                title: "Ongoing Optimization",
                body: "Regular lab reviews mean your protocol evolves with you, keeping results consistent as you age.",
              },
            ].map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.08}>
                <div className="border border-gold/20 p-8 h-full">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-cream/70">{benefit.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              The 5-Step Process
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-8">
              How Your Treatment Works
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  desc: "We review your symptoms, health history, and goals to determine whether TRT is the right path.",
                },
                {
                  step: "02",
                  title: "Comprehensive Lab Testing",
                  desc: "A full hormone panel including testosterone, estrogen, thyroid, and metabolic markers gives us the full picture.",
                },
                {
                  step: "03",
                  title: "Custom Treatment Plan",
                  desc: "Your provider designs a protocol around your specific results, choosing the delivery method and dosage that fits you.",
                },
                {
                  step: "04",
                  title: "HRT Initiation",
                  desc: "You begin therapy using your selected delivery method, injections or topical gel, with clear instructions throughout.",
                },
                {
                  step: "05",
                  title: "Ongoing Optimization",
                  desc: "Follow-up labs and check-ins allow us to fine-tune your protocol as your body responds and your goals evolve.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl text-gold/40 leading-none pt-1">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">
                      {item.title}
                    </h4>
                    <p className="text-obsidian/60 text-base">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Image
              src="/images/detail-hrt-men-2.webp"
              alt="Men's HRT process at Earth Angel Wellness"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-obsidian py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm text-center mb-4">
              Common Questions
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream text-center mb-14">
              FAQ
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border-b border-gold/20 pb-8">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-cream/70">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-obsidian mb-6">
              Take Back Your Edge
            </h2>
            <p className="text-obsidian/70 mb-10 text-lg">
              Start with a consultation and full hormone panel. We will build a
              plan around your labs, not a guess. Plans from $150/month.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-obsidian text-cream px-10 py-4 font-semibold tracking-wide hover:bg-slate-warm transition-colors"
            >
              Book Your Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
