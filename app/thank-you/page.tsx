import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your message has been received. Our team will be in touch shortly to confirm your appointment.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-obsidian min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-lg mx-auto">
        <CheckCircle className="text-gold mx-auto mb-8" size={64} strokeWidth={1.25} />

        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-cream font-light leading-tight mb-6">
          Thank You
        </h1>

        <p className="text-cream/70 text-lg leading-relaxed mb-10">
          Thank you for submitting your information. Our staff will respond and confirm your
          appointment shortly.
        </p>

        <div className="bg-slate-warm rounded-2xl p-6 mb-10 text-left">
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase mb-4">
            Office Hours
          </p>
          <div className="space-y-2 text-cream/70 text-sm">
            <div className="flex justify-between">
              <span>Tuesday - Thursday</span>
              <span className="text-cream">11:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday</span>
              <span className="text-cream">11:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="text-cream">9:00 AM - 3:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday - Monday</span>
              <span className="text-cream/40">Closed</span>
            </div>
          </div>
          <div className="border-t border-cream/10 mt-5 pt-5">
            <p className="text-cream/50 text-sm">
              Need to reach us directly?{" "}
              <Link href="tel:+15035583776" className="text-gold hover:underline">
                (503) 558-3776
              </Link>
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block border border-gold/40 text-gold font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold hover:text-obsidian transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
