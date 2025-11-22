import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DirectionsSection from '@/components/DirectionsSection';
import ScheduleSection from '@/components/ScheduleSection';
import PricingSection from '@/components/PricingSection';
import GallerySection from '@/components/GallerySection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white py-0 my-0" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Header />
      <HeroSection />
      <DirectionsSection />
      <ScheduleSection />
      <PricingSection />
      <GallerySection />
      <ContactsSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;