"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-20 px-6">
      <AnimatedSection>
        <h2
          className="text-4xl md:text-5xl text-obsidian text-center mb-12"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          What Our Patients Say
        </h2>
      </AnimatedSection>

      <Marquee autoFill={true} pauseOnHover={true} speed={25} gradient={false}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-slate-warm rounded-xl p-6 mx-3 min-w-[320px] max-w-[400px]"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  className="text-gold"
                />
              ))}
            </div>
            <p
              className="text-cream/90 text-sm leading-relaxed mt-3 mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {testimonial.text}
            </p>
            <p
              className="text-gold font-semibold text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {testimonial.name}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
