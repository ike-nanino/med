import BoardMembers from "@/components/BoardMembers";
import HeroSection from "@/components/HeroSection";
import Mission from "@/components/Mission";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
// import WhyChooseUs from "@/components/WhyChooseUs";
// import MissionValues from "@/components/MissionValues";
// import BoardSection from "@/components/BoardSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import AffiliationsSection from "@/components/AffiliationsSection";
// import CTABanner from "@/components/CTABanner";
// import GalleryStrip from "@/components/GalleryStrip";

export default function HomePage() {
  return (
    <>

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <Mission />
      <Values />
      <BoardMembers />
      <Testimonials />


    </>
  );
}