import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PartnersStrip } from "@/components/PartnersStrip";
import { FoundationalValues } from "@/components/FoundationalValues";
import { ProductsSection } from "@/components/ProductsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TeksysChatbot } from "@/components/TeksysChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersStrip />
        <FoundationalValues />
        <ProductsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <TeksysChatbot />
    </div>
  );
};

export default Index;
