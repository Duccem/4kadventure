import DestinationsSection from "./components/destination-section";
import Footer from "./components/footers";
import HeroSection from "./components/hero-sections";
import TestimonialSection from "./components/TestimonialSection";
import ToursSection from "./components/tours-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DestinationsSection />
      <ToursSection />
      <TestimonialSection />

      <Footer />
    </div>
  );
}
