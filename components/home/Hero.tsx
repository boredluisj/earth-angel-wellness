"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-obsidian min-h-screen flex items-center pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Text column */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <motion.h1
            initial={{ opacity: 0.95, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-[family-name:var(--font-cormorant)] italic text-5xl md:text-7xl lg:text-[100px] leading-[1.05] text-gold"
          >
            It&apos;s not willpower. It&apos;s biology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg text-cream/80 max-w-xl leading-relaxed"
          >
            Personalized medical weight loss in Salem, backed by science and guided by people who actually listen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          >
            <Link
              href="https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-obsidian px-8 py-4 rounded-lg font-semibold text-base transition-transform duration-200 hover:scale-105 hover:brightness-105 active:scale-100"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="flex-1 w-full flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-healthy-life.webp"
              alt="A person living a healthy, active life"
              width={600}
              height={500}
              priority
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
