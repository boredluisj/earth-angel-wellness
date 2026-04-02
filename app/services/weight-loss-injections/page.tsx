import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Weight Loss Injections Salem, OR",
  description:
    "FDA-approved GLP-1 weight loss injections in Salem, Oregon. Semaglutide $399/4 weeks, Tirzepatide $460/4 weeks.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const benefits = [
  {
    title: "Appetite Suppression",
    description:
      "GLP-1 receptor agonists signal your brain to reduce hunger, making it significantly easier to maintain a caloric deficit without willpower battles.",
  },
  {
    title: "Blood Sugar Control",
    description:
      "Both Semaglutide and Tirzepatide improve insulin sensitivity and help stabilize glucose levels, reducing the risk of type 2 diabetes progression.",
  },
  {
    title: "Cardiovascular Health",
    description:
      "Clinical studies show meaningful reductions in cardiovascular risk markers, including blood pressure and LDL cholesterol, alongside weight loss.",
  },
  {
    title: "Sustainable Results",
    description:
      "A 68-week clinical study showed participants lost an average of 35 lbs. Gradual dose escalation supports lasting lifestyle change rather than crash dieting.",
  },
];

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We review your health history, current medications, and weight loss goals to determine which medication is the right fit for you.",
  },
  {
    number: "02",
    title: "Same-Day Injection Available",
    description:
      "Once cleared, you can receive your first injection the same day as your visit. No waiting weeks to get started.",
  },
  {
    number: "03",
    title: "Gradual Dose Escalation",
    description:
      "Your dose increases incrementally over 16 to 20 weeks, which minimizes side effects and trains your body to respond optimally.",
  },
  {
    number: "04",
    title: "Weekly Injections",
    description:
      "Injections are administered once weekly, either in-office or with a take-home kit, depending on your preference and comfort level.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Monthly check-ins track your progress. We adjust dosing as needed and can pair your program with nutrition coaching for compounded results.",
  },
];

const faqs = [
  {
    question: "How do GLP-1 medications actually work?",
    answer:
      "GLP-1 (glucagon-like peptide-1) receptor agonists mimic a hormone your gut naturally produces after eating. They slow gastric emptying, signal fullness to your brain, and improve insulin response. Tirzepatide adds a second mechanism by also activating GIP receptors, making it the most potent option currently available.",
  },
  {
    question: "What are the common side effects?",
    answer:
      "Most side effects are gastrointestinal and temporary: mild nausea, occasional constipation or loose stools, and reduced appetite. These typically resolve within the first few weeks as your body adjusts. Our compounded formulations include B6 and B12 to help ease nausea further.",
  },
  {
    question: "How long will I need to be on treatment?",
    answer:
      "Most clients follow a 16 to 20 week escalation protocol, then either continue at a maintenance dose or taper off. Duration depends on your weight loss goal and how your body responds. We reassess at every check-in.",
  },
  {
    question: "Does insurance cover these injections?",
    answer:
      "Insurance coverage varies widely. Our compounded formulations are priced transparently at $399 per 4 weeks for Semaglutide and $460 per 4 weeks for Tirzepatide, so you always know your cost upfront. We do not bill insurance for compounded medications.",
  },
  {
    question: "What is the difference between Semaglutide and Tirzepatide?",
    answer:
      "Semaglutide targets only the GLP-1 receptor, while Tirzepatide is a dual agonist targeting both GLP-1 and GIP receptors. In head-to-head data, Tirzepatide tends to produce greater weight loss. Some clients prefer starting with Semaglutide and switching if they want stronger results.",
  },
  {
    question: "Who is a good candidate?",
    answer:
      "Adults with a BMI of 27 or higher, or 25 or higher with a weight-related health condition, are generally good candidates. Certain medical histories, including pancreatitis or thyroid cancer, may be contraindications. We review all of this at your consultation.",
  },
];

export default function WeightLossInjectionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-cormorant)]">
              Medical Weight Loss
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Weight Loss Injections
              <br />
              <span className="text-gold">Salem, OR</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mb-10">
              Clinically proven GLP-1 receptor agonists that suppress appetite,
              stabilize blood sugar, and support lasting weight loss. Semaglutide
              starts at $399 per 4 weeks. Tirzepatide at $460 per 4 weeks.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden max-w-2xl">
              <Image
                src="/images/hero-weight-loss.webp"
                alt="Weight loss injection consultation at Earth Angel Wellness Salem Oregon"
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
              What Are Weight Loss Injections?
            </h2>
            <p className="text-obsidian/80 text-lg max-w-3xl mb-8">
              Weight loss injections at Earth Angel Wellness use compounded
              GLP-1 medications to help your body regulate hunger and metabolism
              at the hormonal level. These are not stimulants or crash-diet
              shortcuts. They work with your biology.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian mb-2">
                    Compounded Semaglutide
                  </h3>
                  <p className="text-obsidian/70">
                    Our Semaglutide formula is compounded with B6, B12, and
                    L-Carnitine to enhance energy metabolism and reduce nausea.
                    Administered once weekly at <strong>$399 per 4 weeks</strong>.
                  </p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian mb-2">
                    Compounded Tirzepatide
                  </h3>
                  <p className="text-obsidian/70">
                    A dual GLP-1 and GIP receptor agonist offering stronger
                    appetite suppression and metabolic improvement. Administered
                    once weekly at <strong>$460 per 4 weeks</strong>.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/detail-semaglutide.webp"
                  alt="Semaglutide and Tirzepatide compounded weight loss medications"
                  width={560}
                  height={380}
                  className="w-full object-cover"
                />
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
              Benefits of GLP-1 Therapy
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mb-12">
              The clinical data behind these medications is among the strongest
              in modern obesity medicine.
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
              How the Program Works
            </h2>
            <p className="text-obsidian/60 text-lg max-w-2xl mb-12">
              From your first visit to your goal weight, here is what to expect.
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
                  src="/images/detail-infographic.webp"
                  alt="Weight loss injection program timeline and process"
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
              Ready to Start?
            </h2>
            <p className="text-obsidian/70 text-lg mb-8 max-w-xl mx-auto">
              Same-day injections are available for qualified patients. Book your
              free consultation and get your questions answered with no
              commitment.
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
