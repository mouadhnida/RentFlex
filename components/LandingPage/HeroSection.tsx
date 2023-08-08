import Link from "next/link";
import LandingImage from "@/components/LandingPage/LandingImage";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="mt-24">
        <h1 className="max-w-[520px] text-6xl font-bold leading-tight max-sm:text-4xl">
          Find Your Perfect Rental Property
        </h1>
        <div className="mb-10 mt-12 max-w-[535px] text-lg">
          Discover a vast selection of rental properties tailored to your needs.
          Whether you're searching for a cozy apartment,or a spacious house.
          Ourplatform connects you with the ideal rental that feels like home.
        </div>
        <Link href={"/sign-in"}>
          <Button className="w-48 max-sm:w-auto">Browse Rental</Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button className="ml-4 w-48 max-sm:w-auto" variant="outline">
            List Your Property
          </Button>
        </Link>
      </div>
      <LandingImage />
    </div>
  );
};

export default HeroSection;
