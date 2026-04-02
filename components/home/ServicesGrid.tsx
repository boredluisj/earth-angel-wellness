"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/lib/data";

export default function ServicesGrid() {
  return (
    <section className="bg-cream py-20 px-6">
      <AnimatedSection>
        <h2 className="font-cormorant text-4xl md:text-5xl text-obsidian text-center mb-12">
          Our Services
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <AnimatedSection key={service.slug} delay={index * 0.1}>
            <Link href={`/services/${service.slug}`} className="block group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-xl font-semibold text-obsidian mb-2">
                    {service.name}
                  </h3>
                  <p className="font-inter text-sm text-slate-warm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-gold hover:text-gold-light inline-flex items-center gap-1 font-inter text-sm transition-colors">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
