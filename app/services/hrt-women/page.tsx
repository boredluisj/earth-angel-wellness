import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Hormone Replacement for Women Salem, OR",
  description:
    "Bioidentical hormone therapy for menopause and hormonal balance in Salem, Oregon.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const faqs = [
  {
    q: "What is bioidentical hormone replacement therapy?",
    a: "Bioidentical HRT uses hormones derived from plant sources that are molecularly identical to the hormones your body produces naturally. Because they match your body's own hormones exactly, they interact with receptors the same way, producing effects that feel more natural than synthetic alternatives.",
  },
  {
    q: "Is HRT safe for women?",
    a: "When prescribed and monitored by a qualified provider, bioidentical HRT has a strong safety profile. We begin with comprehensive lab testing to establish your baseline and tailor your therapy to your specific needs. Ongoing monitoring keeps your levels in an optimal range throughout treatment.",
  },
  {
    q: "How long does treatment take?",
    a: "Most women begin noticing improvements within 4 to 6 weeks. Full benefits typically develop over 3 to 6 months. HRT is generally a long-term therapy maintained as long as symptoms and health goals warrant it, with regular lab reviews to guide adjustments.",
  },
  {
    q: "Are there side effects?",
    a: "Some women experience minor adjustment symptoms early in treatment, such as mild bloating or breast tenderness. These usually resolve as your body adapts. Because we use bioidentical hormones calibrated to your labs, side effects are minimized compared to one-size-fits-all protocols.",
  },
];

export default function HRTWomenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm mb-4">
              Women&apos;s Hormonal Health
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream mb-6 leading-tight">
              Hormone Replacement for Women in Salem, OR
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              Restore balance, reclaim energy, and feel like yourself again with
              personalized bioidentical hormone therapy.
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
              src="/images/hero-hrt-women.webp"
              alt="Hormone Replacement Therapy for Women in Salem OR"
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
              src="/images/detail-hrt-women-1.webp"
              alt="Bioidentical hormone therapy overview"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-6">
              What Is Bioidentical HRT?
            </h2>
            <p className="text-obsidian/70 mb-4">
              Bioidentical hormones are derived from plant sources and engineered
              to be structurally identical to the hormones your body makes
              naturally. Unlike conventional synthetic hormones, bioidentical
              versions bind to your receptors the same way your own hormones do.
            </p>
            <p className="text-obsidian/70 mb-4">
              Our program addresses menopause, perimenopause, and a wide range of
              hormonal imbalances. Whether you are dealing with the sudden onset
              of hot flashes or years of unresolved fatigue, we start with
              comprehensive lab testing to understand exactly where your levels
              stand before building your protocol.
            </p>
            <p className="text-obsidian/70">
              Administration options include topical creams and gels, patches,
              and oral tablets, giving you flexibility based on your lifestyle and
              how your body responds.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-obsidian py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-widest text-sm text-center mb-4">
              What You Can Expect
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream text-center mb-14">
              Benefits of Women&apos;s HRT
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fewer Hot Flashes",
                body: "Balanced estrogen levels significantly reduce the frequency and severity of hot flashes and night sweats.",
              },
              {
                title: "Improved Sexual Health",
                body: "HRT addresses vaginal dryness and low libido, restoring comfort and intimacy.",
              },
              {
                title: "Mental Clarity",
                body: "Many women report lifting of brain fog and improved focus within weeks of starting therapy.",
              },
              {
                title: "Stronger Bones",
                body: "Estrogen plays a direct role in bone density. Maintaining healthy levels helps protect against osteoporosis.",
              },
              {
                title: "Metabolic Support",
                body: "Hormonal balance supports a healthier metabolism, making it easier to maintain a stable weight.",
              },
              {
                title: "Better Sleep",
                body: "Reduced night sweats and improved hormonal balance translate directly into deeper, more restorative sleep.",
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
              How It Works
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian mb-8">
              Your Treatment Journey
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Comprehensive Lab Testing",
                  desc: "We draw labs to measure your hormone levels, thyroid function, and key metabolic markers before recommending anything.",
                },
                {
                  step: "02",
                  title: "Personalized Protocol",
                  desc: "Your provider reviews your results and symptoms together to create a protocol tailored to your biology, not a generic template.",
                },
                {
                  step: "03",
                  title: "Therapy Initiation",
                  desc: "You start therapy using your chosen delivery method, whether that is a cream, patch, or oral tablet.",
                },
                {
                  step: "04",
                  title: "Ongoing Optimization",
                  desc: "We monitor your labs and symptoms over time and adjust your protocol as your body responds and your needs evolve.",
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
              src="/images/detail-hrt-women-2.webp"
              alt="Women's HRT treatment process"
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
              Ready to Feel Balanced Again?
            </h2>
            <p className="text-obsidian/70 mb-10 text-lg">
              Book a consultation and we will start with labs to understand where
              you are before building a protocol that fits your life.
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
