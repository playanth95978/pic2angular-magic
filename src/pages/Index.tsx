import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import PromoSection from "@/components/PromoSection";
import OffersSection from "@/components/OffersSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <PromoSection />
      <OffersSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
