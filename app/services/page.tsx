import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Browse all medical wellness services at Earth Angel Wellness in Salem, OR. GLP-1 weight loss injections, HRT, neurofeedback, body sculpting, green laser, nutrition coaching, and more.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

const extraServices = [
  {
    name: "Body Sculpting",
    slug: "body-sculpting",
    image: "/images/service-semaglutide.webp",
    description:
      "Non-invasive EMS-based body contouring to tone muscle and reduce stubborn fat without surgery or downtime.",
    price: "Consultation-based",
  },
  {
    name: "Green Laser",
    slug: "green-laser",
    image: "/images/service-semaglutide.webp",
    description:
      "Emerald green laser therapy for non-invasive fat reduction and skin rejuvenation with zero recovery time.",
    price: "Consultation-based",
  },
];

const allServices = [...services, ...extraServices];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-16 text-center px-6">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
            Our Services
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive medical wellness, all under one roof.
          </p>
        </AnimatedSection>
      </section>

      {/* Service Grid */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <AnimatedSection key={`${service.slug}-${i}`} delay={(i % 3) * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-obsidian/10 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-8 h-px bg-gold mb-4" />
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian font-light mb-3 group-hover:text-rose transition-colors duration-200">
                      {service.name}
                    </h2>
                    <p className="text-obsidian/70 leading-relaxed text-sm flex-1 mb-5">
                      {service.description}
                    </p>

                    {/* Price badge */}
                    <div className="mt-auto">
                      <span className="inline-block bg-obsidian text-gold text-xs tracking-widest uppercase font-semibold px-4 py-2 rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-obsidian py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Not Sure Where to Start?
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-cream font-light leading-tight mb-6 max-w-2xl mx-auto">
            Not sure which service is right for you? Book a free consultation.
          </h2>
          <p className="text-cream/70 text-base max-w-xl mx-auto mb-10">
            Our team will review your goals, labs, and history to recommend the right protocol. No
            pressure, no upselling.
          </p>
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Book a Free Consultation
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
