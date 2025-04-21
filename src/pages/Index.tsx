
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <Gallery />
      <LocationMap />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
