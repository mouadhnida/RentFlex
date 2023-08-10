import Link from "next/link";
import landingImage from "@/public/landingImage.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="mt-24">
        <h1 className="max-w-[520px] text-6xl font-bold leading-tight max-sm:text-4xl">
          Find Your Perfect Rental Property
        </h1>
        <div className="mb-10 mt-12 max-w-[535px] text-lg">
          Discover a vast selection of rental properties tailored to your needs.
          Whether you're searching for a cozy apartment,or a spacious house. Our
          platform connects you with the ideal rental that feels like home.
        </div>
        <Link href={"/sign-in"}>
          <Button className="w-48 max-sm:w-auto">Browse Rental</Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button className="w-48 ml-4 max-sm:w-auto" variant="outline">
            List Your Property
          </Button>
        </Link>
      </div>
      <Image
        src={landingImage}
        alt="landing Image"
        className="right-0 w-2/5 max-w-5xl max-xl:absolute max-xl:mt-12 max-lg:hidden"
        loading="lazy"
      />
    </div>
  );
};

export default HeroSection;
