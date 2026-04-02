import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Muscle Recovery Therapy Salem, OR",
  description:
    "EMS therapy and neurofeedback for faster athletic recovery in Salem, Oregon.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const benefits = [
  {
    title: "Accelerated Circulation and Flush",
    description:
      "EMS electrical pulses stimulate muscle contractions that drive circulation, delivering oxygen and nutrients to damaged tissue while flushing lactic acid and metabolic waste significantly faster than passive rest.",
  },
  {
    title: "Mind-Body Recovery Integration",
    description:
      "Neurofeedback training addresses the neurological side of recovery. Athletes who train their brain to shift into low-arousal recovery states heal faster and sleep deeper, both of which are where physical repair happens.",
  },
  {
    title: "Body Composition Tracking",
    description:
      "Our InBody 580 analysis gives you precise data on muscle mass, body fat percentage, water balance, and segmental muscle distribution. You can track exactly how recovery is affecting your composition over time.",
  },
  {
    title: "Complementary Injection Support",
    description:
      "B12 and MICC injections boost energy metabolism during recovery. Sermorelin supports the growth hormone release that drives muscle repair overnight. These are not add-ons, they are force multipliers.",
  },
];

const steps = [
  {
    number: "01",
    title: "Recovery Assessment",
    description:
      "We assess the nature of your recovery need: post-competition, post-injury, overtraining, or chronic soreness. This determines which combination of modalities we deploy.",
  },
  {
    number: "02",
    title: "InBody 580 Baseline Scan",
    description:
      "A full body composition scan takes minutes and gives us objective data on muscle balance, hydration, and where your body is under stress. We use this to personalize your protocol and track progress.",
  },
  {
    number: "03",
    title: "EMS Therapy Session",
    description:
      "Electrode pads are placed over target muscle groups. Electrical pulses drive controlled contractions and release cycles that activate the circulatory response without loading the joint or connective tissue.",
  },
  {
    number: "04",
    title: "Neurofeedback Integration",
    description:
      "A neurofeedback session following EMS helps the nervous system down-regulate from high-intensity training states. This is where the physical and neurological sides of recovery converge.",
  },
  {
    number: "05",
    title: "Nutrition and Injection Support",
    description:
      "We review your recovery nutrition and, where appropriate, recommend B12, MICC, or Sermorelin to further accelerate repair during the recovery window.",
  },
];

const timelines = [
  { condition: "Minor muscle strain", range: "1 to 3 days with treatment" },
  { condition: "Post-competition soreness", range: "24 to 48 hours" },
  { condition: "Intensive training recovery", range: "1 week or more" },
  { condition: "Chronic overtraining syndrome", range: "Ongoing protocol" },
];

const faqs = [
  {
    question: "How does EMS therapy actually work?",
    answer:
      "Electrical muscle stimulation delivers low-level electrical pulses through electrode pads placed on the skin. These pulses trigger involuntary muscle contractions and releases that closely mimic the pumping action of active exercise without the mechanical load. The result is dramatically improved local circulation, faster removal of inflammatory byproducts, and accelerated delivery of repair nutrients.",
  },
  {
    question: "How many sessions do I need to feel a difference?",
    answer:
      "Most clients feel meaningful relief after a single session for acute soreness. For chronic overtraining or injury-related recovery, a series of 4 to 8 sessions over 2 to 4 weeks typically produces the most durable results. Your provider will give you a session recommendation after your initial assessment.",
  },
  {
    question: "Can I combine EMS with other services at Earth Angel Wellness?",
    answer:
      "Yes, and combining is usually more effective than any single modality alone. EMS pairs exceptionally well with neurofeedback for mind-body recovery, Sermorelin for overnight repair support, and nutrition coaching to ensure your intake matches your recovery demands.",
  },
  {
    question: "Is this only for serious athletes?",
    answer:
      "Not at all. Our muscle recovery program serves everyone from competitive athletes to people experiencing job-related muscle fatigue, post-surgical recovery, or chronic musculoskeletal discomfort. The protocols are adapted to your situation.",
  },
  {
    question: "What is the InBody 580 and why does it matter?",
    answer:
      "The InBody 580 is a clinical-grade body composition analyzer that measures muscle mass, fat mass, body water, and segmental lean mass in about 45 seconds. For recovery, it tells us whether you are genuinely rebuilding muscle, where you are carrying excess inflammation fluid, and whether your hydration status is supporting or undermining your recovery.",
  },
  {
    question: "Is EMS safe if I have injuries?",
    answer:
      "EMS is generally safe and is used widely in physical therapy settings. However, there are contraindications including certain implanted devices, open wounds over treatment areas, and some neurological conditions. Your provider will screen for these at your intake before recommending EMS.",
  },
];

const testimonials = [
  {
    quote:
      "I came in barely able to walk after a heavy training week. One EMS session and I was back in the gym the next day. I was not expecting that.",
    name: "Marcus T.",
    context: "Competitive athlete",
  },
  {
    quote:
      "The combination of EMS and neurofeedback has been a game-changer for how fast I bounce back. My coaches noticed before I even mentioned I was doing it.",
    name: "Jenna P.",
    context: "Endurance athlete",
  },
];

export default function MuscleRecoveryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-cormorant)]">
              Athletic Recovery
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Muscle Recovery Therapy
              <br />
              <span className="text-gold">Salem, OR</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mb-10">
              EMS therapy combined with neurofeedback, nutrition coaching, and
              InBody 580 analysis for recovery that is measurably faster and
              more complete.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden max-w-2xl">
              <Image
                src="/images/hero-muscle-recovery.webp"
                alt="Muscle recovery therapy at Earth Angel Wellness Salem Oregon"
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
                Recovery Is Where Performance Is Built
              </h2>
              <p className="text-obsidian/80 text-lg mb-5">
                The training session breaks you down. Recovery is where you
                actually get stronger, faster, and more resilient. Most people
                underinvest in this phase. We have built a program that treats
                it as the priority it actually is.
              </p>
              <p className="text-obsidian/80 text-lg mb-5">
                Our approach combines EMS therapy to accelerate the circulatory
                and muscular side of recovery, neurofeedback to address the
                neurological side, and data from the InBody 580 to track exactly
                what is happening inside your body over time.
              </p>
              <p className="text-obsidian/80 text-lg">
                Complementary B12, MICC, and Sermorelin injections are available
                to further support repair during the critical recovery window.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-obsidian rounded-2xl p-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold mb-6">
                  Typical Recovery Timelines
                </h3>
                <div className="space-y-4">
                  {timelines.map((item) => (
                    <div key={item.condition} className="flex justify-between items-start gap-4 border-b border-cream/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-cream/80 text-sm">{item.condition}</span>
                      <span className="text-gold text-sm font-medium text-right flex-shrink-0">{item.range}</span>
                    </div>
                  ))}
                </div>
                <p className="text-cream/50 text-xs mt-6">
                  Timelines reflect typical outcomes with active treatment protocols.
                  Individual results vary.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-cream mb-4">
              Why This Program Works
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mb-12">
              Recovery is multi-system. Our protocol addresses all of them.
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
              What a Recovery Session Looks Like
            </h2>
            <p className="text-obsidian/60 text-lg max-w-2xl mb-12">
              Every session is built around your current state, not a template.
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
                  src="/images/detail-muscle-recovery-1.webp"
                  alt="EMS muscle recovery therapy session process"
                  width={560}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-obsidian py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-cream mb-12">
              What Clients Say
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                <div className="bg-slate-warm rounded-2xl p-8">
                  <div className="text-gold text-4xl font-[family-name:var(--font-cormorant)] mb-4 leading-none">&ldquo;</div>
                  <p className="text-cream/80 text-lg italic mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-gold font-semibold">{testimonial.name}</p>
                    <p className="text-cream/50 text-sm">{testimonial.context}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/detail-muscle-recovery-2.webp"
                alt="Athletic muscle recovery results and body composition tracking"
                width={1120}
                height={360}
                className="w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-12">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border-b border-obsidian/10 pb-8">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-obsidian/70">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 border-t border-obsidian/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-4">
              Recover Faster, Perform Better
            </h2>
            <p className="text-obsidian/70 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation and we will design a recovery protocol
              around your sport, your schedule, and your body composition data.
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
