import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Nutrition Coaching Salem, OR",
  description:
    "Personalized nutrition coaching and meal planning in Salem, Oregon. $100/month wellness coaching package.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const benefits = [
  {
    title: "Improved Metabolic Health",
    description:
      "Personalized macros calibrated to your metabolic rate help normalize blood sugar, reduce inflammation, and create the conditions your body needs to burn fat efficiently.",
  },
  {
    title: "Mindful Eating Habits",
    description:
      "We work on the relationship with food, not just the food itself. You will learn to recognize hunger cues, eat with intention, and stop using restriction as your primary strategy.",
  },
  {
    title: "Emotional Balance",
    description:
      "Nutrition profoundly affects mood and energy. Clients consistently report improved mental clarity, reduced anxiety, and steadier energy throughout the day within the first few weeks.",
  },
  {
    title: "Sustainable Weight Management",
    description:
      "Crash diets fail because they are not built to last. Our coaching builds the habits, knowledge, and accountability that make the results stick without misery.",
  },
];

const steps = [
  {
    number: "01",
    title: "Metabolic and Lifestyle Assessment",
    description:
      "We start with your metabolic rate, activity level, food preferences, and health history. This data drives every recommendation we make.",
  },
  {
    number: "02",
    title: "Custom Meal Plan",
    description:
      "You receive a personalized plan with macro targets, meal timing guidance, and food options that fit your taste. No generic templates.",
  },
  {
    number: "03",
    title: "Portion and Macro Education",
    description:
      "We teach you how to read your own hunger, size portions intuitively, and understand how different foods affect your energy and body composition.",
  },
  {
    number: "04",
    title: "Monthly Check-Ins",
    description:
      "Every month we review your progress, adjust your plan based on what is working, and address any obstacles. This is where the coaching relationship makes the difference.",
  },
  {
    number: "05",
    title: "Long-Term Habit Building",
    description:
      "The goal is for you to not need a meal plan indefinitely. We build the intuition and habits that let you make good decisions automatically.",
  },
];

const faqs = [
  {
    question: "What is included in the $100/month package?",
    answer:
      "Your monthly package includes a personalized meal plan, macro and portion guidance, monthly one-on-one check-in sessions, and ongoing support between sessions. We adjust your plan as your body and goals evolve.",
  },
  {
    question: "Can I still eat foods I enjoy?",
    answer:
      "Yes. Sustainable nutrition has to include the foods you actually want to eat, or it will not last. We work with your preferences and cultural food norms to build a plan that feels livable, not punishing.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients notice energy improvements within 1 to 2 weeks. Visible body composition changes typically follow in 4 to 8 weeks, depending on starting point and adherence. Sustainable fat loss averages 0.5 to 1.5 lbs per week.",
  },
  {
    question: "Can I combine nutrition coaching with weight loss injections?",
    answer:
      "Absolutely, and we recommend it. GLP-1 medications reduce appetite significantly, but what you eat on a reduced calorie intake still matters enormously for muscle preservation and nutrient sufficiency. Nutrition coaching maximizes what your injections can do.",
  },
  {
    question: "Do I need to track every meal?",
    answer:
      "Not necessarily. We offer both tracking-based and intuitive approaches depending on what fits your personality and lifestyle. Some clients thrive with precise tracking. Others do better with structured guidelines and a looser approach.",
  },
];

export default function NutritionCoachingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-cormorant)]">
              Wellness Coaching
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Nutrition Coaching
              <br />
              <span className="text-gold">Salem, OR</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mb-10">
              Personalized meal planning and nutrition coaching built around your
              metabolism, your lifestyle, and your actual food preferences.
              Starting at $100 per month.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden max-w-2xl">
              <Image
                src="/images/hero-nutrition.webp"
                alt="Nutrition coaching session at Earth Angel Wellness Salem Oregon"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
                Nutrition That Actually Fits Your Life
              </h2>
              <p className="text-obsidian/80 text-lg mb-5">
                Most diet programs hand you a rigid meal plan and expect you to
                force your life around it. Our approach is the opposite. We start
                with you: your metabolic rate, your activity patterns, your food
                preferences, and your schedule.
              </p>
              <p className="text-obsidian/80 text-lg mb-5">
                From there, we build a plan with balanced macros, realistic
                portion guidance, and room for the foods you enjoy. Then we
                teach you to understand it well enough that you do not need a
                plan forever.
              </p>
              <p className="text-obsidian/80 text-lg">
                At $100 per month, it is the most cost-effective thing you can
                do to accelerate any other wellness goal you are working toward.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/detail-metabolic-health.webp"
                  alt="Metabolic health assessment and personalized nutrition planning"
                  width={560}
                  height={420}
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
              What Changes When You Eat Right
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mb-12">
              Food is information. The right inputs change everything downstream.
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
              How the Coaching Program Works
            </h2>
            <p className="text-obsidian/60 text-lg max-w-2xl mb-12">
              A repeatable system, not a one-size-fits-all pamphlet.
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
                  src="/images/detail-long-term-wellness.webp"
                  alt="Long-term wellness and sustainable nutrition habits"
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
              Let&apos;s Build Your Plan
            </h2>
            <p className="text-obsidian/70 text-lg mb-8 max-w-xl mx-auto">
              A free consultation is the first step. We will talk through your
              goals and give you a clear picture of what coaching can do for you.
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
