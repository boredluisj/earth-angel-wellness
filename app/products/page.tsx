import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Wellness products and injectable therapies at Earth Angel Wellness, including laser lipo, B-12, MICC injections, LDN, NAD+, Sermorelin, and more in Salem, OR.",
};

const BOOKING_URL =
  "https://www.myaestheticspro.com/BN/index.cfm?A1ADC6216482A474E49936A5127F073FF16AC4C3ED8430234F8EBFA67C25B884";

type ProductWithImage = {
  name: string;
  image: string;
  hasImage: true;
  description: string;
};

type ProductWithPlaceholder = {
  name: string;
  hasImage: false;
  description: string;
};

type Product = ProductWithImage | ProductWithPlaceholder;

const products: Product[] = [
  {
    name: "Laser Lipo",
    image: "/images/product-laser-lipo.webp",
    hasImage: true,
    description:
      "Non-invasive fat reduction using laser technology for targeted body contouring. No surgery, no downtime.",
  },
  {
    name: "B-12 Injections",
    image: "/images/product-b12.webp",
    hasImage: true,
    description:
      "Energy boost injection supporting metabolism and nervous system function. A fast, effective weekly add-on to any protocol.",
  },
  {
    name: "MICC Injections",
    image: "/images/product-micc.webp",
    hasImage: true,
    description:
      "Methionine, Inositol, Choline, and Cyanocobalamin combined to support fat metabolism, liver detox, and energy production.",
  },
  {
    name: "Bella",
    hasImage: false,
    description:
      "Premium wellness supplement for vitality and balance. Formulated to support overall wellbeing alongside your medical protocol.",
  },
  {
    name: "LDN",
    hasImage: false,
    description:
      "Low Dose Naltrexone for immune system modulation and inflammation reduction. Used in autoimmune support and chronic condition management.",
  },
  {
    name: "NAD+",
    hasImage: false,
    description:
      "Cellular energy restoration and anti-aging support at the cellular level. NAD+ supports mitochondrial function, mental clarity, and longevity.",
  },
  {
    name: "Sermorelin",
    hasImage: false,
    description:
      "Growth hormone releaser therapy for muscle growth, improved sleep quality, and tissue repair. A foundational peptide for aging well.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-obsidian pt-32 pb-16 px-6 text-center">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Treatments and Therapies
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl text-cream font-light leading-tight mb-6">
            Products
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Every product we offer is selected for clinical efficacy and sourced from accredited
            compounding pharmacies. Nothing gray market. Nothing cutting corners.
          </p>
        </AnimatedSection>
      </section>

      {/* Products Grid */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.08}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                  {product.hasImage ? (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="gold-gradient-placeholder h-48 rounded-t-xl flex items-center justify-center">
                      <span className="text-obsidian font-semibold text-xl font-[family-name:var(--font-cormorant)]">
                        {product.name}
                      </span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-8 h-px bg-gold mb-4" />
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-obsidian font-light mb-3">
                      {product.name}
                    </h3>
                    <p className="text-obsidian/70 leading-relaxed text-base flex-1 mb-6">
                      {product.description}
                    </p>
                    <Link
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-6 py-3 rounded-full hover:bg-gold/90 transition-colors text-center"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-widest uppercase mb-4">
            Not Sure Where to Start
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-cream font-light leading-tight mb-6">
            We Will Build Your Protocol Together
          </h2>
          <p className="text-cream/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Book a free consultation and we will walk through your goals, labs, and lifestyle to
            put together the right combination of treatments for you.
          </p>
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-obsidian font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Book Your Free Consultation
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
