import About from "@/src/components/about";
import Why from "../../components/why";
import DestinationsSection from "../../components/destination-section";
import Footer from "../../components/footers";
import HeroSection from "../../components/hero-sections";
import Next from "@/src/components/next";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <DestinationsSection />
      <Next />
      <Why />
      <Footer />


    </div>
  );
}
