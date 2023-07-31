import CTASection from "@/components/LandingPage/CTASection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import Testimonials from "@/components/LandingPage/Testimonials";

export default function Home() {
  return (
    <div className="mx-40 mt-32 max-lg:mx-16 max-sm:mx-4">
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
