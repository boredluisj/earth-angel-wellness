import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Weight Loss in Salem, OR: What to Expect",
  description:
    "Medical weight loss clinic in Salem, Oregon. Learn what to expect at your first consultation, from lab work and InBody scanning to your personalized GLP-1 protocol.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Medical Weight Loss in Salem, OR: What to Expect",
  description:
    "Medical weight loss clinic in Salem, Oregon. Learn what to expect at your first consultation, from lab work and InBody scanning to your personalized GLP-1 protocol.",
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
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  url: "https://earthangelwellness.com/blog/medical-weight-loss-salem-or",
  mainEntityOfPage: "https://earthangelwellness.com/blog/medical-weight-loss-salem-or",
};

export default function MedicalWeightLossSalemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 px-6 text-center">
        <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
          Medical Weight Loss
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-cream font-light leading-tight mb-6 max-w-4xl mx-auto">
          Medical Weight Loss in Salem, OR: What to Expect
        </h1>
        <div className="flex items-center justify-center gap-4 text-cream/50 text-sm tracking-wide">
          <span>April 1, 2026</span>
          <span className="w-1 h-1 rounded-full bg-gold inline-block" />
          <span>Earth Angel Wellness</span>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-cream py-16 px-6">
        <article className="max-w-3xl mx-auto text-obsidian/80 leading-relaxed text-lg">

          {/* Intro */}
          <p className="mb-6">
            Salem has no shortage of weight loss options. There are apps, supplement shops, gym
            memberships, and a new diet trend every other month. Most people reading this have tried
            at least a few of them. The results tend to be the same: initial progress, then a
            plateau, then a slow drift back to where you started.
          </p>
          <p className="mb-6">
            Medical weight loss is different in one fundamental way: a licensed medical provider
            evaluates your body specifically, identifies what is actually working against you, and
            prescribes a protocol designed around your biology. At Earth Angel Wellness in Salem,
            that process starts with a free consultation and moves quickly from there.
          </p>
          <p className="mb-10">
            Here is exactly what to expect.
          </p>

          {/* Section 1 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Why Salem Residents Choose Medical Weight Loss Over Fad Diets
          </h2>
          <p className="mb-6">
            Fad diets treat everyone the same. They hand you a meal plan and a motivational tagline
            and send you on your way. The problem is that weight gain is not a discipline problem for
            most people. It is a metabolic one. Hormonal imbalances, insulin resistance, thyroid
            issues, and chronically elevated cortisol all drive weight gain in ways that willpower
            simply cannot overcome.
          </p>
          <p className="mb-10">
            Medical weight loss addresses the actual cause. GLP-1 medications, for example, work by
            regulating hunger hormones, slowing gastric emptying, and improving insulin sensitivity.
            You are not white-knuckling your way through hunger. Your body is chemically guided
            toward a healthier state.
          </p>

          {/* Section 2 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Your First Appointment: The Free Consultation
          </h2>
          <p className="mb-6">
            The first step is a no-cost, no-pressure consultation. You sit down with one of our
            providers and talk through your health history, your previous weight loss attempts, your
            goals, and any concerns you have. There is no sales pitch. The conversation is purely
            clinical.
          </p>
          <p className="mb-6">
            By the end of that first conversation, you will have a clear picture of whether medical
            weight loss is right for you, which treatment options fit your situation, and what the
            realistic timeline looks like. If you decide to move forward, we schedule your full
            assessment the same visit.
          </p>
          <p className="mb-10">
            The whole appointment typically takes 30 to 45 minutes. You leave with information, not
            a hard close.
          </p>

          {/* Section 3 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Medical Assessment: Lab Work, InBody 580 Scan, and Health History
          </h2>
          <p className="mb-6">
            Before any medication is prescribed, we need a full picture of your body. That means
            three things.
          </p>
          <p className="mb-4">
            <strong className="text-obsidian">Lab work.</strong> A comprehensive metabolic panel
            gives us data on blood sugar, kidney and liver function, thyroid markers, and lipid
            levels. This tells us whether any underlying conditions are contributing to your weight
            and ensures that the medications we recommend are safe for you specifically.
          </p>
          <p className="mb-4">
            <strong className="text-obsidian">InBody 580 scan.</strong> This clinical-grade body
            composition analysis breaks down your weight into muscle mass, body fat, visceral fat,
            and water. The number on the scale tells you almost nothing useful. The InBody scan
            tells you what is actually happening inside your body. We use it as a baseline and track
            it throughout your program.
          </p>
          <p className="mb-10">
            <strong className="text-obsidian">Health history review.</strong> Our provider goes
            through your full medical history, current medications, allergies, and any prior
            treatments. This ensures there are no contraindications and allows us to personalize
            your protocol from the start.
          </p>

          {/* Section 4 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Your Personalized Protocol
          </h2>
          <p className="mb-6">
            Once your assessment is complete, your provider builds a protocol specific to you. For
            most patients, this includes a{" "}
            <Link href="/services/weight-loss-injections" className="text-gold hover:text-gold/70 underline underline-offset-2 transition-colors">
              GLP-1 medication
            </Link>{" "}
            such as semaglutide or tirzepatide, dosed at a starting level appropriate for your
            weight and health history, with a titration schedule that ramps up gradually to minimize
            side effects.
          </p>
          <p className="mb-6">
            GLP-1 medications are the core of most programs, but they are not the whole picture.
            Many patients also benefit from{" "}
            <Link href="/services/nutrition-coaching" className="text-gold hover:text-gold/70 underline underline-offset-2 transition-colors">
              nutrition coaching
            </Link>{" "}
            to build habits that support and extend their medication results. Others incorporate
            additional treatments based on their individual labs and goals.
          </p>
          <p className="mb-10">
            The protocol is yours. It is not a template. And it changes as your body changes.
          </p>

          {/* Section 5 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-4 mt-10">
            Ongoing Support: Check-ins, Progress Monitoring, and Adjustments
          </h2>
          <p className="mb-6">
            Ongoing support is where most programs fall short. You get a prescription and then you
            are mostly on your own. That is not how it works here.
          </p>
          <p className="mb-6">
            Every patient gets regular check-ins with their provider. We track your progress,
            review how you are tolerating your current dose, and make adjustments when needed. If
            you hit a plateau or experience side effects, we do not just wait for your next scheduled
            appointment. We address it.
          </p>
          <p className="mb-6">
            Repeat InBody scans throughout your program let us measure actual body composition
            changes, not just weight. Seeing your visceral fat drop while your muscle mass holds is
            a very different picture from just watching the scale.
          </p>
          <p className="mb-10">
            Prefer remote check-ins? We offer{" "}
            <Link href="/telehealth" className="text-gold hover:text-gold/70 underline underline-offset-2 transition-colors">
              telehealth appointments
            </Link>{" "}
            for patients who cannot always make it into the clinic.
          </p>

          {/* FAQs */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light leading-snug mb-6 mt-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-10">
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                Do I need insurance to get started?
              </h3>
              <p className="text-obsidian/70">
                No. Earth Angel Wellness is a cash-pay clinic. We do not bill insurance, which means
                no prior authorizations, no denied claims, and transparent pricing before you commit
                to anything. Financing is available through Cherry and CareCredit if needed.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                How fast will I see results?
              </h3>
              <p className="text-obsidian/70">
                Most patients notice appetite suppression within the first two weeks. Meaningful
                weight loss typically shows up between weeks four and eight, depending on starting
                dose and individual response. Clinical studies show an average of 35 lbs lost over
                the course of a full semaglutide program.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                Are the medications safe?
              </h3>
              <p className="text-obsidian/70">
                GLP-1 medications have extensive clinical data behind them. We source exclusively
                from accredited compounding pharmacies, no gray-market peptides. Your lab work
                screens for contraindications before anything is prescribed.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                What if I am not local to Salem?
              </h3>
              <p className="text-obsidian/70">
                We serve patients across Oregon through our telehealth program. Your consultation,
                follow-ups, and prescription management all happen virtually, and medication is
                shipped directly to your door.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-obsidian rounded-2xl p-8 text-center mt-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-cream font-light mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-cream/70 mb-6 max-w-xl mx-auto">
              Book your free consultation today. No obligation, no pressure. Just a real conversation
              about what medical weight loss can do for you.
            </p>
            <Link
              href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
