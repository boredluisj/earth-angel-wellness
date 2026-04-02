import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telehealth Weight Loss: How to Lose Weight from Home in Oregon",
  description:
    "Oregon residents can access the same clinical GLP-1 weight loss programs through Earth Angel Wellness telehealth. Virtual consultations, prescriptions, and medication shipped to your door.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Telehealth Weight Loss: How to Lose Weight from Home in Oregon",
  description:
    "Oregon residents can access the same clinical GLP-1 weight loss programs through Earth Angel Wellness telehealth. Virtual consultations, prescriptions, and medication shipped to your door.",
  author: {
    "@type": "Organization",
    name: "Earth Angel Wellness",
    url: "https://earthangelwellness.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Earth Angel Wellness",
    url: "https://earthangelwellness.com",
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  url: "https://earthangelwellness.com/blog/telehealth-weight-loss-oregon",
  mainEntityOfPage: "https://earthangelwellness.com/blog/telehealth-weight-loss-oregon",
};

export default function TelehealthWeightLossOregonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 px-6 text-center">
        <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
          Telehealth
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-cream font-light leading-tight mb-6 max-w-4xl mx-auto">
          Telehealth Weight Loss: How to Lose Weight from Home in Oregon
        </h1>
        <div className="flex items-center justify-center gap-4 text-cream/50 text-sm tracking-wide">
          <span>March 18, 2026</span>
          <span className="w-1 h-1 rounded-full bg-gold inline-block" />
          <span>Earth Angel Wellness</span>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-cream py-16 px-6">
        <article className="max-w-3xl mx-auto text-obsidian/80 leading-relaxed text-lg">

          {/* Intro */}
          <p className="mb-6">
            For years, access to quality medical weight loss care required living close to a clinic,
            having the flexibility to take time off work, and tolerating waiting rooms. For a lot of
            Oregonians, especially those outside the Salem area, that meant the best programs were
            effectively out of reach.
          </p>
          <p className="mb-10">
            Telehealth has changed that. Earth Angel Wellness now serves patients across Oregon
            through a fully virtual program that delivers the same clinical-grade GLP-1 protocols,
            the same medical oversight, and the same level of support as our in-person clinic, with
            medication shipped directly to your door. You do not have to leave your house to start
            losing weight under real medical supervision.
          </p>

          {/* How It Works */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            How the Telehealth Program Works
          </h2>
          <p className="mb-6">
            The process follows the same clinical pathway as our in-person program, adapted for a
            virtual environment.
          </p>
          <p className="mb-4">
            <strong className="text-obsidian">Virtual consultation.</strong> Your first step is a
            video or phone consultation with one of our licensed providers. You discuss your health
            history, weight loss goals, any previous attempts, and what you are looking for in a
            program. This is the same conversation that happens in the clinic, just without the
            commute.
          </p>
          <p className="mb-4">
            <strong className="text-obsidian">Medical assessment.</strong> We direct you to a local
            lab for bloodwork, or we can work with recent labs you already have on file. Your
            provider reviews the results, evaluates any relevant health conditions, and confirms
            which medications are appropriate for your situation.
          </p>
          <p className="mb-4">
            <strong className="text-obsidian">Prescription and protocol.</strong> Once cleared, your
            provider builds your personalized protocol and sends a prescription to our partner
            compounding pharmacy. You do not need to pick anything up or navigate a pharmacy counter.
          </p>
          <p className="mb-10">
            <strong className="text-obsidian">Medication delivered.</strong> Your{" "}
            <Link href="/services/weight-loss-injections" className="text-gold hover:text-gold/70 underline underline-offset-2 transition-colors">
              GLP-1 medication
            </Link>{" "}
            arrives at your home within a few business days, along with instructions for
            self-administration. The injections are subcutaneous, similar to an insulin pen, and
            straightforward to do on your own with a brief walkthrough from your provider.
          </p>

          {/* Convenience */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            The Convenience Is Real, Not Just a Selling Point
          </h2>
          <p className="mb-6">
            No commute. No parking. No waiting room. For patients who work full-time, have kids at
            home, live more than 30 minutes from Salem, or simply prefer not to take half a day off
            work for a medical appointment, the logistics alone make telehealth a better fit.
          </p>
          <p className="mb-6">
            Follow-up appointments happen the same way, virtually, on your schedule. If your dose
            needs adjustment, your provider adjusts it remotely. If you have a question between
            appointments, you reach out and get an actual response. The experience is built around
            your life, not around clinic hours.
          </p>
          <p className="mb-10">
            And this is not a lower tier of care. The clinical standards are identical to what
            happens in the Salem clinic. Same provider qualifications, same pharmacy sourcing, same
            protocol structure.
          </p>

          {/* Privacy */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Privacy and Confidentiality
          </h2>
          <p className="mb-6">
            Weight is a personal topic. Some people are not ready to walk into a clinic and talk
            about their body with staff they have never met. Telehealth removes that barrier.
          </p>
          <p className="mb-10">
            Your consultation happens from your home, on your terms. All communications are
            HIPAA-compliant. Your medical records are yours, handled with the same privacy standards
            as any licensed medical provider. The people you interact with are clinical professionals,
            not salespeople.
          </p>

          {/* Medication Delivery */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Medication Shipped Directly to You
          </h2>
          <p className="mb-6">
            Once your prescription is submitted, your medication ships from an accredited compounding
            pharmacy and arrives at your door, typically within two to five business days depending
            on your location in Oregon.
          </p>
          <p className="mb-6">
            Medications are packaged appropriately for their storage requirements. Your provider
            walks you through storage, handling, and self-injection during your onboarding
            appointment so there is no guesswork on your end.
          </p>
          <p className="mb-10">
            Refills follow the same process. As you progress through your titration schedule, your
            provider adjusts your prescription and the next supply ships without you needing to
            initiate anything.
          </p>

          {/* What You Need */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            What You Need to Get Started
          </h2>
          <p className="mb-6">
            The technical requirements are minimal. You need a reliable internet connection, a
            smartphone, tablet, or computer with a camera and microphone, and a quiet space for your
            virtual appointment. If you can do a video call, you can do this program.
          </p>
          <p className="mb-10">
            Beyond the tech, you need to be an Oregon resident, at least 18 years old, and willing
            to complete the required lab work if your provider determines it is needed. That is the
            full list of prerequisites.
          </p>

          {/* Cost */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Cost: Same as In-Person, with Financing Available
          </h2>
          <p className="mb-6">
            Telehealth patients pay the same pricing as in-person clinic patients. Semaglutide is
            $399 per four-week supply. Tirzepatide is $460 per four-week supply. The consultation
            itself is free.
          </p>
          <p className="mb-6">
            We are a cash-pay clinic, which means no insurance billing and no prior authorization
            delays. You know what you are paying before anything is ordered.
          </p>
          <p className="mb-10">
            If upfront cost is a concern, we offer{" "}
            <Link href="/financing" className="text-gold hover:text-gold/70 underline underline-offset-2 transition-colors">
              financing through Cherry and CareCredit
            </Link>
            , both of which can be applied for in minutes with no impact to your credit score for
            the initial check. Many patients use financing to cover their first one to three months
            while establishing momentum, then continue paying out of pocket as results motivate the
            commitment.
          </p>

          {/* CTA */}
          <div className="bg-obsidian rounded-2xl p-8 text-center mt-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-cream font-light mb-4">
              Start Your Telehealth Consultation Today
            </h2>
            <p className="text-cream/70 mb-6 max-w-xl mx-auto">
              Oregon residents can get started entirely online. Book a free virtual consultation
              and your provider will walk you through everything from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/telehealth"
                className="inline-block border border-gold/50 text-gold font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:border-gold hover:bg-gold/10 transition-colors"
              >
                Learn About Telehealth
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
