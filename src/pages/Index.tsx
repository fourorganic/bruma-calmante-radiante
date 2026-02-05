import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import IdealForSection from "@/components/landing/IdealForSection";
import WhenToUseSection from "@/components/landing/WhenToUseSection";
import TrustSection from "@/components/landing/TrustSection";
import HowToUseSection from "@/components/landing/HowToUseSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <IdealForSection />
      <WhenToUseSection />
      <TrustSection />
      <HowToUseSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
