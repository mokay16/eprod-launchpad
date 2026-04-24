import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import LogoWall from "@/components/case-studies/LogoWall";
import ImpactGrid from "@/components/case-studies/ImpactGrid";
import DifferentiatorBanner from "@/components/case-studies/DifferentiatorBanner";
import VoiceOfCustomer from "@/components/case-studies/VoiceOfCustomer";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CaseStudiesHero />
      <LogoWall />
      <ImpactGrid />
      <DifferentiatorBanner />
      <VoiceOfCustomer />
      <CaseStudiesCTA />
      <Footer />
    </div>
  );
};

export default CaseStudies;
