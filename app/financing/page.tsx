import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Financing Options",
  description:
    "Flexible payment plans for medical weight loss, body sculpting, and hormone therapy at Earth Angel Wellness. Apply through Cherry or CareCredit and start your protocol today.",
};

const pricing = [
  { service: "Semaglutide", price: "$399", period: "/ 4 weeks" },
  { service: "Tirzepatide", price: "$460", period: "/ 4 weeks" },
  { service: "Body Sculpting", price: "$497", period: "per session" },
  { service: "HRT for Men", price: "$150 - $300", period: "/ month" },
  { service: "Nutrition Coaching", price: "$100", period: "/ month" },
  { service: "Initial Consultation", price: "FREE", period: "" },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 px-6 text-center">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Payment Plans
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
            Financing Options
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Premium care should not be out of reach. We partner with Cherry and CareCredit so you
            can start your protocol now and pay on a schedule that works for you.
          </p>
        </AnimatedSection>
      </section>

      {/* Financing Providers */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              Our Partners
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-obsidian font-light leading-tight">
              Apply in Minutes
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cherry */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-obsidian/10 h-full flex flex-col">
                <div className="relative w-full h-48 bg-obsidian/5 flex items-center justify-center p-8">
                  <Image
                    src="/images/financing-cherry.png"
                    alt="Cherry payment plans"
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-10 h-px bg-gold mb-4" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-3">
                    Cherry
                  </h3>
                  <p className="text-obsidian/70 leading-relaxed mb-6 flex-1">
                    Split your treatment cost into manageable monthly payments. Cherry offers
                    flexible terms with a fast, easy online application. No hard credit pull
                    required to check your options.
                  </p>
                  <Link
                    href="https://pay.withcherry.com/earth-angel-wellness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:bg-gold/90 transition-colors text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* CareCredit */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-obsidian/10 h-full flex flex-col">
                <div className="relative w-full h-48 bg-obsidian/5 flex items-center justify-center p-8">
                  <Image
                    src="/images/financing-carecredit.webp"
                    alt="CareCredit healthcare financing"
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-10 h-px bg-gold mb-4" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-3">
                    CareCredit
                  </h3>
                  <p className="text-obsidian/70 leading-relaxed mb-6 flex-1">
                    The leading healthcare credit card, accepted at over 260,000 providers.
                    CareCredit offers promotional financing periods and competitive rates for
                    qualified applicants covering wellness and aesthetic treatments.
                  </p>
                  <Link
                    href="https://www.carecredit.com/go/484BPT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:bg-gold/90 transition-colors text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="bg-obsidian py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              Transparent Pricing
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream font-light leading-tight">
              Know What You Are Paying
            </h2>
            <p className="text-cream/60 text-lg mt-4 max-w-xl mx-auto">
              No surprise fees. No prior authorizations. You see the number before you commit.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-gold/20">
              {pricing.map((item, i) => (
                <div
                  key={item.service}
                  className={`flex items-center justify-between px-8 py-6 ${
                    i % 2 === 0 ? "bg-slate-warm" : "bg-obsidian"
                  } ${i !== pricing.length - 1 ? "border-b border-gold/10" : ""}`}
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-cream font-light">
                    {item.service}
                  </span>
                  <div className="text-right">
                    <span className="text-gold font-semibold text-xl">{item.price}</span>
                    {item.period && (
                      <span className="text-cream/50 text-sm ml-1">{item.period}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cash Clinic Note */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="w-10 h-px bg-gold mx-auto mb-8" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-obsidian font-light leading-tight mb-6">
              Cash Clinic
            </h2>
            <p className="text-obsidian/70 text-lg leading-relaxed mb-4">
              Earth Angel Wellness is a cash clinic. We do not accept medical insurance, which means
              no prior authorizations, no denied claims, and no delays getting started.
            </p>
            <p className="text-obsidian/70 text-lg leading-relaxed">
              We provide detailed paperwork so you can submit for reimbursement with your insurance
              provider or HSA on your own. Many patients find they are partially or fully
              reimbursed.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border border-obsidian/20 rounded-full px-6 py-3">
              <span className="text-gold font-[family-name:var(--font-cormorant)] text-base tracking-wider uppercase">
                HSA and FSA funds accepted
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-16 px-6 text-center">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Take the First Step
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-cream font-light leading-tight mb-6">
            Your First Consultation Is Free
          </h2>
          <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            No commitment required. Come in, ask every question you have, and see if we are the
            right fit.
          </p>
          <Link
            href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Book Free Consultation
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
