import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { DashboardDemo } from "@/components/DashboardDemo";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TargetCustomers } from "@/components/TargetCustomers";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InterestForm } from "@/components/InterestForm";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <DashboardDemo />
      <BenefitsSection />
      <TargetCustomers />
      <PricingSection />
      <TestimonialsSection />
      <InterestForm />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
