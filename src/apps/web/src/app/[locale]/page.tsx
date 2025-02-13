import About from "@/src/components/about";
import Why from "../../components/why";
import DestinationsSection from "../../components/destination-section";
import Footer from "../../components/footers";
import HeroSection from "../../components/hero-sections";
import Next from "@/src/components/next";
import { getNextTours } from "@/src/actions/get-next-tours";

export default async function Home() {
  const tours = await getNextTours();
  return (
    <div className="">
      <HeroSection />
      <About />
      <DestinationsSection />
      <Next tours={tours} />
      <Why />
    </div>
  );
}
