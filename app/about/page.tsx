import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the veteran-owned team behind Earth Angel Wellness. Lacey and Wally Landecho are Air Force veterans who lost a combined 132 lbs using the same treatments they offer patients in Salem, OR.",
};

const values = [
  {
    heading: "Veteran-Owned Integrity",
    body: "Founded and operated by Air Force veterans. That means straight talk, accountability, and zero tolerance for wasting your time or money.",
  },
  {
    heading: "Premium Compounding Pharmacies",
    body: "We source exclusively from accredited compounding pharmacies. No gray-market peptides. No cut-rate suppliers. Your protocol is built on pharmacy-grade quality.",
  },
  {
    heading: "Personalized Protocols",
    body: "There is no one-size-fits-all program here. Every patient gets a plan built around their labs, lifestyle, and goals. We adjust as you progress.",
  },
  {
    heading: "Cash Clinic Transparency",
    body: "We do not bill insurance. That means no prior authorizations, no denied claims, and no hidden fees. You know exactly what you are paying before you ever walk through the door.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-20 text-center px-6">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
            Built by People Who&nbsp;
            <span className="text-gold italic">Lived It</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Earth Angel Wellness is a veteran-owned medical wellness clinic in Salem, Oregon. We
            offer the same treatments that transformed our founders&apos; lives to help you reach
            yours.
          </p>
        </AnimatedSection>
      </section>

      {/* Mission / Founding Story */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-hero.webp"
                alt="Lacey and Wally Landecho, founders of Earth Angel Wellness"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              The Founding Story
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6">
              They Tried It Before They Prescribed It
            </h2>
            <div className="space-y-5 text-obsidian/80 leading-relaxed text-lg">
              <p>
                Lacey Landecho spent years in the Air Force and years after struggling with her
                weight. She tried the diets. She tried the programs. Nothing stuck. Then she
                discovered the same medical treatments we offer today and lost 72 lbs.
              </p>
              <p>
                Her husband Wally, also an Air Force veteran, went through the same process
                alongside her and lost 60 lbs. Together they saw what personalized, medically
                supervised care could actually do when it was done right.
              </p>
              <p>
                So they built a clinic around it. Earth Angel Wellness opened in Salem, Oregon with
                one mission: give patients access to real treatments, delivered with military-grade
                integrity, no corporate fluff, no insurance runaround.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 border border-gold/40 rounded-full px-6 py-3">
              <span className="text-gold font-[family-name:var(--font-cormorant)] text-base tracking-wider uppercase">
                Veteran Owned &amp; Operated
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-obsidian py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              The Team
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream font-light leading-tight">
              The People Behind Your Protocol
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-slate-warm rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-10 h-px bg-gold mb-4" />
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-light mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                      {member.title}
                    </p>
                    <p className="text-cream/70 leading-relaxed text-sm flex-1">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
              What Sets Us Apart
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-obsidian font-light leading-tight">
              Why Patients Choose Earth Angel
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.heading} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-obsidian/10 h-full">
                  <div className="w-10 h-px bg-gold mb-6" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian font-light mb-3">
                    {v.heading}
                  </h3>
                  <p className="text-obsidian/70 leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-24 px-6 text-center">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Take the First Step
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-cream font-light leading-tight mb-6">
            Ready to Start?
          </h2>
          <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10">
            Book a free consultation and let us build a protocol around your body, your goals, and
            your life.
          </p>
          <Link
            href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Book Your Free Consultation
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
