import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Neurofeedback Therapy Salem, OR",
  description:
    "Non-invasive brain training for anxiety, ADHD, PTSD, and peak performance in Salem, Oregon.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const conditions = [
  "Anxiety and chronic stress",
  "Depression and mood instability",
  "ADHD and attention difficulties",
  "PTSD and trauma response",
  "Insomnia and sleep disruption",
  "Migraines and chronic pain",
  "Traumatic brain injury (TBI)",
  "Memory decline and brain fog",
];

const benefits = [
  {
    title: "Non-Invasive, No Side Effects",
    description:
      "Neurofeedback uses no medications, no electrical stimulation, and no invasive procedures. The brain learns through feedback alone. There is nothing to recover from after a session.",
  },
  {
    title: "Lasting Neurological Change",
    description:
      "Unlike medication that masks symptoms, neurofeedback trains the brain to self-regulate. Results accumulate over sessions and tend to persist long after treatment ends.",
  },
  {
    title: "Effective Across a Wide Range of Conditions",
    description:
      "From anxiety and ADHD to PTSD and migraines, the conditions that respond to neurofeedback share a common thread: dysregulated brainwave activity that can be retrained.",
  },
  {
    title: "Peak Performance for High Achievers",
    description:
      "Athletes, executives, and students use neurofeedback to sharpen mental focus, improve reaction time, and build emotional resilience under pressure.",
  },
];

const steps = [
  {
    number: "01",
    title: "Brain Mapping Intake",
    description:
      "We discuss your symptoms, goals, and history to establish a treatment protocol. Some clients begin with a quantitative EEG assessment to map baseline brainwave patterns.",
  },
  {
    number: "02",
    title: "Sensor Placement",
    description:
      "Small, non-invasive sensors are placed on your scalp using conductive gel. They read your brainwave activity in real time. Nothing goes into your skin.",
  },
  {
    number: "03",
    title: "Live Feedback Session",
    description:
      "You watch a screen or listen to audio that shifts based on your brainwave output. When your brain produces the target patterns, it gets rewarded with visual or auditory cues. When it drifts, the cues change.",
  },
  {
    number: "04",
    title: "Session Debrief",
    description:
      "Each 30 to 45 minute session ends with a brief check-in. We track how you felt during and after to refine the next session's protocol.",
  },
  {
    number: "05",
    title: "Progressive Results",
    description:
      "Most clients notice subtle changes within 6 to 10 sessions and significant improvement by 20 to 40 sessions. Results compound the more consistent you are.",
  },
];

const faqs = [
  {
    question: "How many sessions will I need?",
    answer:
      "This varies by condition and individual. Anxiety and sleep issues often respond in 10 to 20 sessions. ADHD and PTSD typically require 30 to 40 sessions for lasting change. Your provider will give you a more specific estimate after your intake.",
  },
  {
    question: "Is neurofeedback painful or uncomfortable?",
    answer:
      "No. The sensors sit on the surface of your scalp and read electrical activity passively. There is no electrical current sent into your brain. Most clients describe sessions as relaxing.",
  },
  {
    question: "Who benefits most from neurofeedback?",
    answer:
      "Anyone whose symptoms are rooted in brainwave dysregulation. This includes people with anxiety, ADHD, PTSD, insomnia, depression, migraines, TBI, and cognitive decline. Athletes and professionals also use it for mental edge and recovery.",
  },
  {
    question: "How long do the results last?",
    answer:
      "Results from neurofeedback are generally long-lasting because you are retraining the brain's default patterns, not suppressing symptoms temporarily. Most clients maintain their gains without ongoing sessions, though periodic tune-ups are an option.",
  },
  {
    question: "Can I do neurofeedback if I am on medication?",
    answer:
      "Yes. Neurofeedback is compatible with most medications. Some clients find they need lower doses over time as their symptoms improve. Any medication changes should be managed with your prescribing physician.",
  },
];

export default function NeurofeedbackPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-cormorant)]">
              Brain Training
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Neurofeedback Therapy
              <br />
              <span className="text-gold">Salem, OR</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mb-10">
              EEG-based brain training that teaches your nervous system to
              self-regulate. Non-invasive, medication-free, and effective for
              anxiety, ADHD, PTSD, insomnia, and peak performance.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden max-w-2xl">
              <Image
                src="/images/hero-neurofeedback.webp"
                alt="Neurofeedback therapy session at Earth Angel Wellness Salem Oregon"
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
                What Is Neurofeedback?
              </h2>
              <p className="text-obsidian/80 text-lg mb-6">
                Neurofeedback, or EEG biofeedback, is a form of brain training
                that uses real-time monitoring of your brainwave activity to
                teach the brain healthier patterns. Sensors placed on your scalp
                read electrical signals. Software translates those signals into
                visual and auditory feedback.
              </p>
              <p className="text-obsidian/80 text-lg mb-6">
                When your brain produces the target brainwave frequencies, you
                get a reward signal. When it drifts off, the signal changes.
                Over dozens of sessions, the brain learns to stay in regulated
                states on its own, without effort or medication.
              </p>
              <p className="text-obsidian/80 text-lg">
                Sessions run 30 to 45 minutes and are completely non-invasive.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-obsidian rounded-2xl p-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold mb-6">
                  Conditions We Address
                </h3>
                <ul className="space-y-3">
                  {conditions.map((condition) => (
                    <li key={condition} className="flex items-center gap-3 text-cream/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Peak Performance subsection */}
          <AnimatedSection delay={0.1}>
            <div className="mt-16 rounded-2xl overflow-hidden grid md:grid-cols-2">
              <div className="bg-slate-warm p-10 flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-gold mb-4">
                  Peak Performance Training
                </h3>
                <p className="text-cream/70 mb-4">
                  Neurofeedback is not just for treating dysfunction. Elite
                  athletes, surgeons, musicians, and executives use it to train
                  the mental edge that separates good from exceptional.
                </p>
                <p className="text-cream/70">
                  Targeted protocols improve sustained mental focus, reduce
                  performance anxiety, sharpen reaction time, and build emotional
                  control in high-pressure situations.
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/images/detail-peak-performance.jpg"
                  alt="Peak performance neurofeedback for athletes and professionals"
                  width={560}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-cream mb-4">
              Why Choose Neurofeedback
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mb-12">
              It addresses root causes, not just symptoms.
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
              What a Session Looks Like
            </h2>
            <p className="text-obsidian/60 text-lg max-w-2xl mb-12">
              Simple, comfortable, and nothing like what most people expect.
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
                  src="/images/detail-neurofeedback-overview.webp"
                  alt="Neurofeedback session overview with EEG sensors"
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
              Start Your Brain Training
            </h2>
            <p className="text-obsidian/70 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation to find out if neurofeedback is right for
              your goals. No commitment required.
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
