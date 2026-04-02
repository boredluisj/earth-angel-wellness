import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Body Sculpting Salem, OR",
  description:
    "EMS body sculpting, ultrasonic cavitation, and radiofrequency therapy in Salem, Oregon. $497 package.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const faqs = [
  {
    q: "How does EMS body sculpting work?",
    a: "EMS uses high-intensity focused electromagnetic energy to trigger supra-maximal muscle contractions, contractions your muscles physically cannot replicate through voluntary exercise. The PERFECT SHAPE NEO system with HICMMT technology penetrates up to 7 cm deep, stimulating thousands of contractions per 30-minute session and forcing muscle remodeling alongside fat reduction.",
  },
  {
    q: "Is it painful?",
    a: "Most clients describe it as an intense muscle workout sensation rather than pain. The contractions are strong but the session is non-invasive and requires no anesthesia. Ultrasonic cavitation and radiofrequency treatments are generally described as warm and comfortable.",
  },
  {
    q: "How many sessions will I need?",
    a: "Initial results appear in 1 to 4 weeks. Optimal results develop over 8 to 12 weeks of consistent sessions. Your provider will build a session schedule based on your body composition goals and target areas.",
  },
  {
    q: "Is there a BMI requirement?",
    a: "EMS body sculpting works best for candidates with a BMI under 35. It is designed for targeted contouring, not primary weight loss. If you are above that threshold, we can discuss complementary programs to get you into the optimal range first.",
  },
];

export default function BodySculptingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              Non-Invasive Body Contouring
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Body Sculpting in Salem, OR
            </h1>
            <p className="text-cream/70 text-lg mb-4">
              EMS muscle stimulation, ultrasonic cavitation, and radiofrequency
              skin tightening. One package, real results.
            </p>
            <p className="text-gold font-semibold text-xl mb-8">
              $497 Package
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-obsidian px-8 py-4 font-semibold tracking-wide hover:bg-gold-light transition-colors"
            >
              Book a Session
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Image
              src="/images/hero-green-laser.webp"
              alt="Body sculpting treatment in Salem OR"
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
              src="/images/detail-body-sculpting-1.webp"
              alt="EMS body sculpting device overview"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
              Three Technologies, One Goal
            </h2>
            <p className="text-obsidian/70 mb-4">
              Our body sculpting package combines three clinically validated
              modalities. The PERFECT SHAPE NEO system uses HICMMT electromagnetic
              technology to deliver thousands of supra-maximal muscle contractions
              in a single 30-minute session. The energy penetrates up to 7 cm deep,
              reaching muscle layers no exercise routine can consistently activate.
            </p>
            <p className="text-obsidian/70 mb-4">
              Ultrasonic cavitation uses low-frequency sound waves to disrupt and
              break down fat cell membranes, releasing their contents to be cleared
              naturally by the body&apos;s lymphatic system.
            </p>
            <p className="text-obsidian/70">
              Radiofrequency therapy heats the deeper layers of skin to stimulate
              collagen production and tighten loose or lax tissue, complementing
              the contouring work of EMS and cavitation with improved skin quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm text-center mb-4">
              Target Areas and Results
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream text-center mb-14">
              What We Can Treat
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Abdomen",
                body: "The most requested area. EMS and cavitation work together to reduce belly fat and strengthen core muscle definition.",
              },
              {
                title: "Thighs",
                body: "Supra-maximal contractions reshape inner and outer thighs while cavitation reduces stubborn fat pockets.",
              },
              {
                title: "Buttocks",
                body: "EMS stimulates gluteal muscles for lift and definition without surgery or injections.",
              },
              {
                title: "Upper Arms",
                body: "Tighten and tone the tricep area using EMS and radiofrequency skin firming.",
              },
              {
                title: "Back and Flanks",
                body: "Target love handles and back fat with cavitation while radiofrequency smooths the overlying skin.",
              },
              {
                title: "Under Chin",
                body: "Precision radiofrequency and cavitation work to reduce submental fullness and tighten jaw definition.",
              },
            ].map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.08}>
                <div className="border border-gold/20 p-8 h-full">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-gold mb-3">
                    {area.title}
                  </h3>
                  <p className="text-cream/70">{area.body}</p>
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
              Timeline
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-8">
              When You Will See Results
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Consultation and Assessment",
                  desc: "We evaluate your target areas, review your BMI, and design a session plan tailored to your goals.",
                },
                {
                  step: "02",
                  title: "Session Series Begins",
                  desc: "30-minute EMS sessions are combined with cavitation and radiofrequency in a coordinated protocol.",
                },
                {
                  step: "03",
                  title: "Initial Results (Weeks 1 to 4)",
                  desc: "Muscle tone improvements become visible and early fat reduction in target areas begins to show.",
                },
                {
                  step: "04",
                  title: "Optimal Results (Weeks 8 to 12)",
                  desc: "Full contouring results are visible as collagen remodeling completes and fat clearance finishes.",
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
              src="/images/detail-sculpting-device.webp"
              alt="Body sculpting device at Earth Angel Wellness"
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
              Start Sculpting Today
            </h2>
            <p className="text-obsidian/70 mb-4 text-lg">
              The $497 package includes EMS, cavitation, and radiofrequency
              sessions designed for real, lasting results.
            </p>
            <p className="text-obsidian/50 mb-10 text-base">
              Best results for BMI under 35.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-obsidian text-cream px-10 py-4 font-semibold tracking-wide hover:bg-slate-warm transition-colors"
            >
              Book Your Session
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
