import About from "@/src/components/about";
import Why from "../../components/why";
import DestinationsSection from "../../components/destination-section";
import HeroSection from "../../components/hero-sections";
import Next from "@/src/components/next";
import { getNextTours } from "@/src/actions/get-next-tours";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await params;
  const tours = await getNextTours(locale);
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
