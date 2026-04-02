import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description:
    "Earth Angel Wellness Return and Refund Policy. Understand our policies on services, products, subscriptions, and chargebacks.",
};

export default function RefundPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-12 text-center px-6">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream font-light leading-tight">
            Return &amp; Refund Policy
          </h1>
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-obsidian/50 text-sm mb-12">
              Please read this policy carefully before making a purchase or scheduling a service.
            </p>

            <div className="space-y-12 text-obsidian/80 leading-relaxed">

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Cash Clinic
                </h2>
                <p>
                  Earth Angel Wellness operates as a cash-pay clinic and does not accept
                  medical insurance as payment. For patients who wish to seek reimbursement
                  through their insurance provider, we are happy to provide the necessary
                  documentation and receipts to support your claim. However, we cannot
                  guarantee coverage or reimbursement by any insurance carrier.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  No Refund Items
                </h2>
                <p className="mb-4">
                  The following are not eligible for refunds under any circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Services that have already been rendered or administered</li>
                  <li>Prescription medications (once dispensed, these cannot be returned)</li>
                  <li>Products that have been opened, used, or have damaged packaging</li>
                  <li>Products not purchased directly through Earth Angel Wellness</li>
                </ul>
                <p className="mt-4">
                  All sales on services, prescription medications, and opened products are
                  final.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Eligible for Replacement
                </h2>
                <p className="mb-4">
                  We will provide a replacement (not a refund) in the following situations:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Products subject to a manufacturer or pharmacy recall</li>
                  <li>Incorrect products shipped due to an error on our part</li>
                  <li>Products damaged in transit by the shipping carrier</li>
                </ul>
                <p className="mt-4">
                  To be eligible for a replacement, you must notify us within 7 days of
                  receiving your order. Requests made after this window will not be accepted.
                  We may require photographic evidence of the damage or incorrect item before
                  processing a replacement.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  How to Submit a Claim
                </h2>
                <p>
                  To report a damaged shipment, incorrect item, or recalled product, contact
                  us within 7 days of receipt. Include your order information, a description
                  of the issue, and photos where applicable. Send all communications to:
                </p>
                <div className="mt-4 bg-white rounded-xl p-5 border border-obsidian/10">
                  <p className="font-medium text-obsidian">Earth Angel Wellness</p>
                  <p>525 Glen Creek Rd NW, Suite #230</p>
                  <p>Salem, OR 97304</p>
                  <p className="mt-2">
                    <a href="tel:+15035583776" className="text-gold hover:underline">
                      (503) 558-3776
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Monthly Subscription Cancellation
                </h2>
                <p>
                  If you are enrolled in a monthly subscription or membership program, you
                  must provide written notice at least 30 days prior to your desired
                  cancellation date. Cancellations requested without 30-day notice may result
                  in one additional billing cycle. Verbal cancellation requests are not
                  accepted.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Minimum Refund Threshold
                </h2>
                <p>
                  Refunds will not be issued for amounts under $25.00. In cases where a
                  refund is determined to be applicable and the eligible amount is less than
                  $25.00, a credit toward future services may be offered at our discretion
                  in lieu of a cash refund.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Chargeback Policy
                </h2>
                <p>
                  We take chargebacks seriously. If a chargeback is initiated with your
                  bank or credit card issuer, Earth Angel Wellness will dispute the claim
                  and provide full documentation of services rendered, signed consent forms,
                  payment receipts, and all relevant communications. We encourage patients
                  to contact us directly to resolve any billing concerns before initiating a
                  dispute with their financial institution. Fraudulent chargebacks may be
                  subject to further action.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this policy or need assistance with a specific
                  situation, please reach out to us:
                </p>
                <div className="mt-4 bg-white rounded-xl p-5 border border-obsidian/10">
                  <p className="font-medium text-obsidian">Earth Angel Wellness</p>
                  <p>525 Glen Creek Rd NW, Suite #230</p>
                  <p>Salem, OR 97304</p>
                  <p className="mt-2">
                    <a href="tel:+15035583776" className="text-gold hover:underline">
                      (503) 558-3776
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@earthangelwellness.com" className="text-gold hover:underline">
                      info@earthangelwellness.com
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
