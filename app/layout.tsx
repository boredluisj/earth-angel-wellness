import type { Metadata } from "next";
import { cormorant, inter } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ScrollProgress from "@/components/ScrollProgress";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
  title: {
    default: "Medical Weight Loss Salem, OR | Earth Angel Wellness",
    template: "%s | Earth Angel Wellness",
  },
  description:
    "Personalized GLP-1 weight loss treatment in Salem, OR. Expert medical supervision, premium support, real results. Book your free consultation today.",
  metadataBase: new URL("https://earthangelwellness.com"),
  openGraph: {
    title: "Medical Weight Loss Salem, OR | Earth Angel Wellness",
    description:
      "Personalized GLP-1 weight loss treatment in Salem, OR. Expert medical supervision, premium support, real results.",
    url: "https://earthangelwellness.com",
    siteName: "Earth Angel Wellness",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Weight Loss Salem, OR | Earth Angel Wellness",
    description:
      "Personalized GLP-1 weight loss treatment in Salem, OR. Expert medical supervision, premium support, real results.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/favicon.webp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Earth Angel Wellness",
  description: "Medical weight loss clinic in Salem, Oregon offering GLP-1 injections, neurofeedback, HRT, body sculpting, and nutrition coaching.",
  url: "https://earthangelwellness.com",
  telephone: "(503) 558-3776",
  email: "info@earthangelwellness.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "525 Glen Creek Rd. NW Suite #230",
    addressLocality: "Salem",
    addressRegion: "OR",
    postalCode: "97304",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9429,
    longitude: -123.0637,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "11:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "240",
    bestRating: "5",
  },
  sameAs: [
    "https://www.facebook.com/earthangelwellness/",
    "https://www.instagram.com/earthangelwellness_/",
  ],
  medicalSpecialty: "Weight Loss Management",
  image: "https://earthangelwellness.com/images/og-image.webp",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileCTABar />
        </LenisProvider>
      </body>
    </html>
  );
}
