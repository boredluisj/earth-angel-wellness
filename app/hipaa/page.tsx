import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "HIPAA Privacy Notice",
  description:
    "Earth Angel Wellness HIPAA Privacy Notice. Learn how we use and protect your protected health information (PHI) in accordance with federal law.",
};

export default function HipaaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-12 text-center px-6">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream font-light leading-tight">
            HIPAA Privacy Notice
          </h1>
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-12">
              <p className="text-obsidian/80 text-sm leading-relaxed">
                <strong className="text-obsidian">Notice of Privacy Practices.</strong> This
                notice describes how medical information about you may be used and disclosed
                and how you can get access to this information. Please review it carefully.
              </p>
            </div>

            <div className="space-y-12 text-obsidian/80 leading-relaxed">

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Our Commitment to Your Privacy
                </h2>
                <p>
                  Earth Angel Wellness is committed to protecting the privacy of your
                  protected health information (PHI) as required by the Health Insurance
                  Portability and Accountability Act (HIPAA). We are required by law to
                  maintain the privacy of your PHI, provide you with this notice of our
                  legal duties and privacy practices, and follow the terms of the notice
                  currently in effect.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  How We May Use and Disclose Your Health Information
                </h2>
                <p className="mb-4">
                  The following describes the ways we may use and disclose health
                  information that identifies you. Not every use or disclosure in a
                  category will be listed, but all of the ways we are permitted to use and
                  disclose information will fall within one of these categories.
                </p>

                <div className="space-y-5">
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Treatment
                    </h3>
                    <p>
                      We may use your health information to provide, coordinate, or manage
                      your healthcare and related services. For example, we may disclose your
                      PHI to a referring physician, specialist, or other healthcare provider
                      involved in your care to ensure you receive appropriate treatment.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Payment
                    </h3>
                    <p>
                      We may use and disclose your health information to obtain payment for
                      services we provide to you. For example, we may disclose your PHI to
                      process billing, verify coverage, or obtain reimbursement for the
                      services we have rendered.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Healthcare Operations
                    </h3>
                    <p>
                      We may use and disclose your health information in connection with our
                      healthcare operations. These activities may include quality assessment
                      and improvement activities, training programs, accreditation, licensing,
                      and other business management functions necessary to run our practice.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Your Rights Regarding Your Health Information
                </h2>
                <p className="mb-5">
                  You have the following rights with respect to your protected health
                  information:
                </p>

                <div className="space-y-5">
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Right to Access Your Records
                    </h3>
                    <p>
                      You have the right to inspect and request copies of your medical
                      records and other health information we maintain about you. We may
                      charge a reasonable fee for copies. To request access to your records,
                      please contact our Privacy Official using the information below.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Right to Amend Your Records
                    </h3>
                    <p>
                      If you believe that information in your health record is incorrect or
                      incomplete, you have the right to request an amendment. We may deny
                      your request in certain circumstances, and if we do, we will explain
                      our reason in writing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Right to Restrict Disclosure
                    </h3>
                    <p>
                      You have the right to request restrictions on how we use or disclose
                      your health information for treatment, payment, or healthcare
                      operations. We are not required to agree to your request, except in
                      limited circumstances required by law.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Right to an Accounting of Disclosures
                    </h3>
                    <p>
                      You have the right to request a list of certain disclosures we have
                      made of your health information in the six years prior to your request.
                      This does not include disclosures made for treatment, payment,
                      healthcare operations, or disclosures you authorized in writing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-obsidian font-light mb-2">
                      Right to Confidential Communications
                    </h3>
                    <p>
                      You have the right to request that we communicate with you about your
                      health matters in a certain way or at a certain location. For example,
                      you may ask that we contact you only by phone at your work number or
                      only by mail at a specific address. We will accommodate reasonable
                      requests.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Changes to This Notice
                </h2>
                <p>
                  We reserve the right to change our privacy practices and to make the new
                  provisions effective for all health information we maintain. If we make a
                  material change to our privacy practices, we will update this notice on
                  our website and make the revised notice available upon request.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Complaints
                </h2>
                <p>
                  If you believe your privacy rights have been violated, you have the right
                  to file a complaint with Earth Angel Wellness or with the U.S. Department
                  of Health and Human Services Office for Civil Rights. We will not
                  retaliate against you for filing a complaint. All complaints must be
                  submitted in writing.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Contact Our Privacy Official
                </h2>
                <p className="mb-4">
                  For questions about this notice or to exercise any of your rights, please
                  contact our designated Privacy Official:
                </p>
                <div className="bg-white rounded-xl p-6 border border-obsidian/10">
                  <p className="font-medium text-obsidian mb-1">Privacy Official: Lacey</p>
                  <p>
                    <a href="mailto:landechol@yahoo.com" className="text-gold hover:underline">
                      landechol@yahoo.com
                    </a>
                  </p>
                  <p className="mt-3 text-obsidian font-medium">Earth Angel Wellness</p>
                  <p>525 Glen Creek Rd. NW, Suite #230</p>
                  <p>Salem, OR 97304</p>
                  <p className="mt-2">
                    <a href="tel:+15035583776" className="text-gold hover:underline">
                      (503) 558-3776
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
