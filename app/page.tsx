import CTASection from "@/components/LandingPage/CTASection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import Testimonials from "@/components/LandingPage/Testimonials";

export default function Home() {
  return (
    <div className="mt-32">
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
