import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BankPartnershipsSection from "@/components/BankPartnershipsSection";
import ProofSection from "@/components/ProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BankPartnershipsSection />
      <ProofSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DifferentiationSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
