"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { team } from "@/lib/data";

export default function TeamSection() {
  return (
    <section className="bg-cream py-20 px-6">
      <AnimatedSection>
        <h2
          className="text-4xl md:text-5xl text-obsidian text-center mb-12"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Meet Your Team
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <AnimatedSection key={member.name} delay={0.1 + i * 0.12}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="object-cover w-full h-80"
              />
              <div className="p-6">
                <div className="w-12 h-0.5 bg-gold mb-3" />
                <h3
                  className="text-xl font-semibold text-obsidian"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-3">{member.title}</p>
                <p
                  className="text-sm text-slate-warm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
