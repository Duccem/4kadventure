import DestinationsSection from "./components/destination-section";
import Footer from "./components/footers";
import HeroSection from "./components/hero-sections";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DestinationsSection />
      <TestimonialSection />
      <Footer />
      <h1 className='text-blue-500 text-3xl'>Hola</h1>

    </div>
  );
}
