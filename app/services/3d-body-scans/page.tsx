import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "3D Body Composition Analysis Salem, OR",
  description:
    "InBody 580 body composition analysis for precision weight loss tracking in Salem, Oregon.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const faqs = [
  {
    q: "What does the InBody 580 actually measure?",
    a: "The InBody 580 measures body fat percentage broken down by segment, lean muscle mass distribution across your limbs and trunk, total body water and intracellular versus extracellular fluid balance, and your basal metabolic rate. The result is a detailed map of your body composition rather than a single number on a scale.",
  },
  {
    q: "How accurate is it?",
    a: "The InBody 580 uses bioelectrical impedance analysis validated against DEXA scans, the clinical gold standard. It is trusted by hospitals, research institutions, and elite sports programs worldwide. Accuracy is high when scan conditions are consistent, which is why we guide you on how to prepare for repeatable results.",
  },
  {
    q: "How often should I scan?",
    a: "For active weight loss or body recomposition programs, scanning every 4 to 6 weeks gives you meaningful data without the noise of shorter intervals. We use your scan trend over time to make program adjustments rather than reacting to a single number.",
  },
  {
    q: "Is it included with my program?",
    a: "Yes. The InBody 580 scan is included as part of our weight loss programs. Initial scans establish your baseline before treatment begins. Follow-up scans track the real changes happening inside your body as the program progresses.",
  },
];

export default function BodyScansPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              Precision Body Analysis
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              3D Body Composition Analysis in Salem, OR
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              The InBody 580 gives you a clinical-grade breakdown of fat, muscle,
              water, and metabolic rate so your wellness plan is built on real data.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-obsidian px-8 py-4 font-semibold tracking-wide hover:bg-gold-light transition-colors"
            >
              Book a Scan
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Image
              src="/images/hero-inbody.png"
              alt="InBody 580 body composition analyzer at Earth Angel Wellness Salem OR"
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
              src="/images/hero-inbody.png"
              alt="InBody 580 scan results overview"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
              Data That Drives Better Decisions
            </h2>
            <p className="text-obsidian/70 mb-4">
              The scale tells you one number. The InBody 580 tells you what that
              number is actually made of. Body weight alone cannot distinguish fat
              loss from muscle loss, or dehydration from real progress. Knowing the
              difference changes how you train, eat, and approach your health.
            </p>
            <p className="text-obsidian/70 mb-4">
              The InBody 580 is trusted by healthcare professionals, research
              hospitals, and elite athletic programs worldwide. It uses
              bioelectrical impedance analysis validated against DEXA scanning to
              deliver segmental readings for each limb and the trunk separately,
              not just a whole-body estimate.
            </p>
            <p className="text-obsidian/70">
              Every weight loss program at Earth Angel Wellness includes InBody
              scans to establish your baseline and track the changes that matter
              as you progress.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm text-center mb-4">
              What the InBody 580 Measures
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream text-center mb-14">
              Complete Body Composition Picture
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Body Fat Percentage",
                body: "Segmental fat analysis shows where fat is concentrated, not just the total amount.",
              },
              {
                title: "Muscle Distribution",
                body: "See exactly how muscle mass is distributed across your arms, legs, and trunk.",
              },
              {
                title: "Body Water Balance",
                body: "Intracellular and extracellular fluid measurements reveal hydration status and potential inflammation.",
              },
              {
                title: "Basal Metabolic Rate",
                body: "Know how many calories your body burns at rest so your nutrition plan is built on your actual metabolism.",
              },
              {
                title: "Visceral Fat Level",
                body: "Visceral fat around internal organs is a key health risk marker the scale cannot detect.",
              },
              {
                title: "Progress Tracking",
                body: "Repeat scans over time reveal what is actually changing inside your body, not just on the surface.",
              },
            ].map((metric, i) => (
              <AnimatedSection key={metric.title} delay={i * 0.08}>
                <div className="border border-gold/20 p-8 h-full">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold mb-3">
                    {metric.title}
                  </h3>
                  <p className="text-cream/70">{metric.body}</p>
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
              The Scan Experience
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-8">
              What Happens During a Scan
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Preparation",
                  desc: "We ask you to arrive well hydrated and avoid eating or heavy exercise for 2 to 3 hours beforehand for the most accurate results.",
                },
                {
                  step: "02",
                  title: "The Scan",
                  desc: "You stand on the InBody 580 and hold the hand electrodes for about 60 to 90 seconds while bioelectrical signals are sent through your body.",
                },
                {
                  step: "03",
                  title: "Results Review",
                  desc: "Your provider reviews the detailed output with you immediately, explaining what each measurement means for your goals.",
                },
                {
                  step: "04",
                  title: "Plan Adjustment",
                  desc: "Scan data informs every subsequent decision in your wellness plan, from nutrition targets to which treatments to prioritize.",
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
              src="/images/hero-inbody.png"
              alt="InBody body scan process at Earth Angel Wellness"
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
              Know What You Are Working With
            </h2>
            <p className="text-obsidian/70 mb-4 text-lg">
              Included with weight loss programs. Book a consultation and your
              first InBody scan is part of the process.
            </p>
            <p className="text-obsidian/50 mb-10 text-base">
              Trusted by healthcare professionals worldwide.
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
