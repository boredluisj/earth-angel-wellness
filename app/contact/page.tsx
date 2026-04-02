import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Earth Angel Wellness in Salem, OR. Call, email, or send a message and our team will get back to you shortly.",
};

const hours = [
  { day: "Tuesday - Thursday", time: "11:00 AM - 5:00 PM" },
  { day: "Friday", time: "11:00 AM - 4:00 PM" },
  { day: "Saturday", time: "9:00 AM - 3:00 PM" },
  { day: "Sunday - Monday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 text-center px-6">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Reach Out
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
            Contact Us
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto leading-relaxed">
            Questions about a treatment, your protocol, or how to get started? We are here.
          </p>
        </AnimatedSection>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Contact Info */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-obsidian/10 h-full">
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="text-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-obsidian/50 text-sm tracking-widest uppercase mb-1">
                        Phone
                      </p>
                      <Link
                        href="tel:+15035583776"
                        className="text-obsidian text-lg font-medium hover:text-gold transition-colors"
                      >
                        (503) 558-3776
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="text-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-obsidian/50 text-sm tracking-widest uppercase mb-1">
                        Email
                      </p>
                      <Link
                        href="mailto:info@earthangelwellness.com"
                        className="text-obsidian text-lg font-medium hover:text-gold transition-colors"
                      >
                        info@earthangelwellness.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="text-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-obsidian/50 text-sm tracking-widest uppercase mb-1">
                        Address
                      </p>
                      <address className="not-italic text-obsidian leading-relaxed">
                        525 Glen Creek Rd. NW, Suite #230
                        <br />
                        Salem, OR 97304
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="text-gold" size={18} />
                    </div>
                    <div>
                      <p className="text-obsidian/50 text-sm tracking-widest uppercase mb-1">
                        Hours
                      </p>
                      <div className="space-y-1">
                        {hours.map((h) => (
                          <div key={h.day} className="flex gap-2 text-obsidian">
                            <span className="text-obsidian/60 min-w-[160px]">{h.day}</span>
                            <span>{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-obsidian/10 h-full">
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-obsidian font-light mb-8">
                  Send a Message
                </h2>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
                  <input type="hidden" name="redirect" value="/thank-you" />

                  <div>
                    <label htmlFor="name" className="block text-sm text-obsidian/60 mb-2 tracking-wide">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-warm/20 bg-cream focus:outline-none focus:ring-2 focus:ring-gold/40 text-obsidian placeholder:text-obsidian/30 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-obsidian/60 mb-2 tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-warm/20 bg-cream focus:outline-none focus:ring-2 focus:ring-gold/40 text-obsidian placeholder:text-obsidian/30 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-obsidian/60 mb-2 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(503) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-warm/20 bg-cream focus:outline-none focus:ring-2 focus:ring-gold/40 text-obsidian placeholder:text-obsidian/30 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-obsidian/60 mb-2 tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-warm/20 bg-cream focus:outline-none focus:ring-2 focus:ring-gold/40 text-obsidian placeholder:text-obsidian/30 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm py-4 rounded-full hover:bg-gold/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-obsidian/10 h-64">
              <iframe
                title="Earth Angel Wellness Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.6!2d-123.0522!3d44.9428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bffefb87f58db3%3A0x2e77a4c4b8c89f2!2s525%20Glen%20Creek%20Rd%20NW%20%23230%2C%20Salem%2C%20OR%2097304!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-obsidian/50 text-sm mt-3 text-center">
              525 Glen Creek Rd. NW, Suite #230 &bull; Salem, OR 97304
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
