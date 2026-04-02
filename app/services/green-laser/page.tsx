import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Green Laser Therapy Salem, OR",
  description:
    "Non-invasive cold laser fat reduction in Salem, Oregon. FDA cleared for BMI up to 40.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const faqs = [
  {
    q: "How does green laser fat reduction work?",
    a: "The Green 10D Cold Laser system uses multiple diode laser wavelengths to create temporary pores in fat cell walls. The fat stored inside those cells is released into the interstitial space and then cleared naturally by the lymphatic system. The fat cells themselves remain intact but shrink as their contents are expelled.",
  },
  {
    q: "Is it painful?",
    a: "No. Cold laser therapy is entirely non-invasive with no cutting, no needles, and no heat damage. Sessions are typically described as comfortable. There is no anesthesia, no recovery period, and you can return to normal activity immediately after.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most clients follow a series of 6 to 12 sessions depending on their goals and target areas. Sessions run 30 to 40 minutes. Your provider will recommend a schedule based on your starting point and what you want to achieve.",
  },
  {
    q: "Is it FDA cleared?",
    a: "Yes. The Green 10D Cold Laser system is FDA cleared for non-invasive fat reduction and body contouring. It is one of the few laser fat reduction technologies cleared for individuals with a BMI up to 40, making it accessible to a broader range of candidates than many competing devices.",
  },
];

export default function GreenLaserPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              Cold Laser Fat Reduction
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Green Laser Therapy in Salem, OR
            </h1>
            <p className="text-cream/70 text-lg mb-4">
              Non-invasive fat reduction with no pain, no cutting, and no downtime.
              FDA cleared for BMI up to 40.
            </p>
            <p className="text-cream/50 text-sm mb-8">
              Sessions 30 to 40 minutes
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
              src="/images/detail-green-laser-device.png"
              alt="Green 10D Cold Laser system at Earth Angel Wellness Salem OR"
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
              src="/images/detail-green-laser-facial.jpg"
              alt="Green laser therapy treatment overview"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
              Fat Reduction Without Surgery
            </h2>
            <p className="text-obsidian/70 mb-4">
              The Green 10D Cold Laser system uses an array of diode lasers to
              deliver targeted energy directly to fat cells beneath the skin.
              Unlike heat-based systems, cold laser creates temporary pores in fat
              cell membranes without damaging surrounding tissue. The released fat
              content moves into the interstitial fluid and is cleared by your body
              naturally through the lymphatic system.
            </p>
            <p className="text-obsidian/70 mb-4">
              Because there is no cutting, no heat damage, and no downtime, green
              laser therapy fits easily into a regular schedule. Sessions run 30 to
              40 minutes and you leave ready to carry on with your day.
            </p>
            <p className="text-obsidian/70">
              FDA clearance for BMI up to 40 means this technology is available to
              a much wider range of people than most laser fat reduction systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm text-center mb-4">
              What It Treats
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream text-center mb-14">
              Benefits of Green Laser Therapy
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Love Handles",
                body: "Precisely target flanks and side fat that resist diet and exercise.",
              },
              {
                title: "Belly Fat",
                body: "Reduce abdominal fat volume and improve overall midsection contour.",
              },
              {
                title: "Inner and Outer Thighs",
                body: "Address stubborn thigh fat pockets without surgery or compression.",
              },
              {
                title: "Arms",
                body: "Tone and slim upper arms with targeted cold laser sessions.",
              },
              {
                title: "Double Chin",
                body: "Reduce submental fat and improve jaw definition without injection or incision.",
              },
              {
                title: "Skin and Lymphatic Health",
                body: "Treatment supports lymphatic drainage, detoxification, reduced cellulite appearance, and skin tightening.",
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
              What to Expect
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-8">
              Your Green Laser Experience
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "We confirm you are a candidate, review your target areas, and design a session series.",
                },
                {
                  step: "02",
                  title: "Session Setup",
                  desc: "Laser paddles are positioned over target areas. No preparation, no anesthesia, nothing invasive.",
                },
                {
                  step: "03",
                  title: "30 to 40 Minute Treatment",
                  desc: "Relax while the cold laser works. Most clients read, scroll, or simply rest during treatment.",
                },
                {
                  step: "04",
                  title: "Immediate Return to Activity",
                  desc: "There is no downtime. You leave and carry on with your day while your lymphatic system clears the released fat naturally.",
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
              src="/images/detail-emerald-laser.jpg"
              alt="Emerald green laser fat reduction device"
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
              No Surgery. No Downtime. Real Results.
            </h2>
            <p className="text-obsidian/70 mb-10 text-lg">
              FDA cleared for BMI up to 40. Book a session and start targeted fat
              reduction today.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-obsidian text-cream px-10 py-4 font-semibold tracking-wide hover:bg-slate-warm transition-colors"
            >
              Book a Green Laser Session
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
