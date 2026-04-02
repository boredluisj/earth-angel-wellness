import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Earth Angel Wellness Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-12 text-center px-6">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream font-light leading-tight">
            Privacy Policy
          </h1>
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-obsidian/50 text-sm mb-12">Last Updated: 2026</p>

            <div className="space-y-12 text-obsidian/80 leading-relaxed">

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Introduction
                </h2>
                <p>
                  Earth Angel Wellness (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a medical wellness clinic
                  based in Salem, Oregon, United States. This Privacy Policy explains how we
                  collect, use, disclose, and protect information about you when you visit our
                  website or interact with our services.
                </p>
                <p className="mt-3">
                  By using our website or submitting your information through any of our
                  forms, you consent to the practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Information We Collect
                </h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing or physical address</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                </ul>
                <p className="mt-3">
                  This information is collected when you voluntarily submit a contact form,
                  book an appointment, sign up for communications, or interact with our
                  website and social media pages.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>Schedule and confirm appointments</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Send appointment reminders and follow-up communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Analytics
                </h2>
                <p>
                  We use Google Analytics to understand how visitors interact with our
                  website. Google Analytics collects anonymized data including page views,
                  session duration, and traffic sources. We do not use this data to
                  personally identify you. You may opt out of Google Analytics tracking by
                  installing the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Sharing of Your Information
                </h2>
                <p>
                  We do not sell, share, rent, or trade your personal information or phone
                  numbers to third parties for their marketing purposes. We may share your
                  information only in the following limited circumstances:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>With service providers who assist in operating our website or clinic, under strict confidentiality agreements</li>
                  <li>When required by law, regulation, or valid legal process</li>
                  <li>To protect the rights, property, or safety of Earth Angel Wellness, our patients, or others</li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Security
                </h2>
                <p>
                  Our website uses SSL/HTTPS encryption to protect data transmitted between
                  your browser and our servers. We implement HIPAA-compliant security
                  practices to safeguard protected health information. While we take
                  reasonable precautions, no method of transmission over the internet is
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Consent and Communication
                </h2>
                <p>
                  By submitting a contact form on our website or through a Facebook lead
                  form, you consent to receive communications from Earth Angel Wellness,
                  including appointment reminders and health-related updates. Standard
                  messaging rates may apply.
                </p>
                <p className="mt-3">
                  To opt out of text message communications, reply STOP or UNSUBSCRIBE at
                  any time. To opt out of email communications, use the unsubscribe link
                  included in our emails or contact us directly.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Embedded Content
                </h2>
                <p>
                  Our website may include embedded content from third-party platforms such
                  as Facebook and YouTube. Embedded content from these services behaves as
                  though you have visited those websites directly, and those services may
                  collect data about you, use cookies, and track your interaction with the
                  embedded content. We encourage you to review the privacy policies of those
                  services directly.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary to provide
                  our services and comply with our legal obligations. If you would like your
                  data removed from our records, please contact us at the information below
                  and we will process your request promptly.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Your Rights
                </h2>
                <p>
                  Depending on your location, you may have the right to access, correct,
                  delete, or restrict the processing of your personal information. To
                  exercise any of these rights, please contact us using the information
                  below.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions or concerns about this Privacy Policy or how your
                  information is handled, please contact us:
                </p>
                <div className="mt-4 bg-white rounded-xl p-6 border border-obsidian/10">
                  <p className="font-medium text-obsidian mb-1">Earth Angel Wellness</p>
                  <p>525 Glen Creek Rd. NW, Suite #230</p>
                  <p>Salem, OR 97304</p>
                  <p className="mt-2">
                    <a href="mailto:info@earthangelwellness.com" className="text-gold hover:underline">
                      info@earthangelwellness.com
                    </a>
                  </p>
                  <p>
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
