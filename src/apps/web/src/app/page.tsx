import BumperBox from "./components/bumper-box";
import DestinationsSection from "./components/destination-section";
import Footer from "./components/footers";
import HeroSection from "./components/hero-sections";
import Plans from "./components/plans";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DestinationsSection />
      <BumperBox />
      <TestimonialSection />
      <Plans />
      <Footer />

    </div>
  );
}
