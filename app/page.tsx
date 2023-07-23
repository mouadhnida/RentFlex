import FeatureSection from "@/components/LandingPage/FeatureSection";
import HeroSection from "@/components/LandingPage/HeroSection";

export default function Home() {
  return (
    <div className="mt-32">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
