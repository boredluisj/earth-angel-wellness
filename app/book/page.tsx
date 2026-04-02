import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Clock, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Online",
  description:
    "Schedule your consultation with Earth Angel Wellness in Salem, OR. Book online, via telehealth, or call us directly. In-person and virtual appointments available.",
};

const hours = [
  { day: "Tuesday", time: "11:00 AM - 5:00 PM" },
  { day: "Wednesday", time: "11:00 AM - 5:00 PM" },
  { day: "Thursday", time: "11:00 AM - 5:00 PM" },
  { day: "Friday", time: "11:00 AM - 4:00 PM" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM" },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 text-center px-6">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
            Book Your Consultation
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto leading-relaxed">
            Choose the option that works best for you. In-person in Salem, OR or via telehealth
            from anywhere.
          </p>
        </AnimatedSection>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Primary Booking CTA */}
          <AnimatedSection className="text-center mb-16">
            <div className="bg-white rounded-2xl p-10 border border-obsidian/10 shadow-sm">
              <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-3">
                In-Person Appointment
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-obsidian font-light leading-tight mb-4">
                Book Online
              </h2>
              <p className="text-obsidian/60 mb-8 max-w-md mx-auto">
                Select your service, choose a time, and confirm your appointment directly through
                our scheduling system.
              </p>
              <Link
                href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-12 py-5 rounded-full hover:bg-gold/90 transition-colors text-lg"
              >
                Book Online Now
              </Link>
            </div>
          </AnimatedSection>

          {/* Secondary Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Telehealth */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-obsidian/10 h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Video className="text-gold" size={20} />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian font-light mb-3">
                  Telehealth Appointment
                </h3>
                <p className="text-obsidian/60 leading-relaxed mb-6 flex-1">
                  Prefer to meet virtually? Book a telehealth consultation from the comfort of
                  your home. Available to Oregon residents.
                </p>
                <Link
                  href="https://online.earthangelwellness.com/b/NzE5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gold text-gold font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:bg-gold hover:text-obsidian transition-colors text-center"
                >
                  Book Telehealth
                </Link>
              </div>
            </AnimatedSection>

            {/* Phone */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-obsidian/10 h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Phone className="text-gold" size={20} />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian font-light mb-3">
                  Call Us Directly
                </h3>
                <p className="text-obsidian/60 leading-relaxed mb-6 flex-1">
                  Have questions before booking? Our staff is happy to walk you through your
                  options and get you scheduled.
                </p>
                <Link
                  href="tel:+15035583776"
                  className="inline-block border border-obsidian/20 text-obsidian font-semibold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-colors text-center"
                >
                  (503) 558-3776
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Hours */}
          <AnimatedSection delay={0.15}>
            <div className="bg-obsidian rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-gold" size={20} />
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-light">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center border-b border-cream/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-cream/70">{h.day}</span>
                    <span className="text-gold font-[family-name:var(--font-cormorant)] text-lg">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-cream/40 text-sm mt-6">
                Sunday and Monday: Closed
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
