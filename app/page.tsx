import Hero from "@/components/home/Hero";
import ProblemBand from "@/components/home/ProblemBand";
import StatsBand from "@/components/home/StatsBand";
import ServicesGrid from "@/components/home/ServicesGrid";
import EmpathySection from "@/components/home/EmpathySection";
import BeforeAfter from "@/components/home/BeforeAfter";
import TheDifference from "@/components/home/TheDifference";
import TeamSection from "@/components/home/TeamSection";
import PharmacyBand from "@/components/home/PharmacyBand";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import FinancingSection from "@/components/home/FinancingSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemBand />
      <StatsBand />
      <ServicesGrid />
      <EmpathySection />
      <BeforeAfter />
      <TheDifference />
      <TeamSection />
      <PharmacyBand />
      <TestimonialsSection />
      <ProcessTimeline />
      <FinancingSection />
      <FinalCTA />
    </>
  );
}
