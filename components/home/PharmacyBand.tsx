"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { pharmacies } from "@/lib/data";

export default function PharmacyBand() {
  return (
    <section className="bg-slate-warm py-12 px-6">
      <p
        className="text-xs tracking-widest text-gold text-center mb-8 uppercase"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Trusted Pharmacy Partners
      </p>

      <Marquee autoFill={true} pauseOnHover={true} speed={40} gradient={false}>
        {pharmacies.map((pharmacy) => (
          <Image
            key={pharmacy.name}
            src={pharmacy.logo}
            alt={pharmacy.name}
            width={150}
            height={60}
            className="mx-10 opacity-70 hover:opacity-100 transition-opacity object-contain h-[60px] w-auto"
          />
        ))}
      </Marquee>
    </section>
  );
}
