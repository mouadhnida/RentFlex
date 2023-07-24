import React from "react";
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
        {/* <Link href={"/sign-in"}>
          <Button
            text="Browse Rental"
            style="w-48 max-sm:w-auto h-14 dark:text-black dark:bg-white bg-black text-white dark:bg-opacity-100 dark:hover:bg-opacity-90 bg-opacity-100 hover:bg-opacity-80"
          />
        </Link>
        <Link href={"/sign-in"}>
          <Button
            text="List Your Property"
            style="w-48 max-sm:w-auto h-14 dark:text-white dark:bg-black bg-white text-black border  dark:border-darkborder border-black ml-4 dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black"
          />
        </Link> */}
        <Link href={"/sign-in"}>
          <Button className="w-48 max-sm:w-auto">Browse Rental</Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button className="w-48 ml-4 max-sm:w-auto" variant="outline">
            Browse Rental
          </Button>
        </Link>
      </div>
      <LandingImage />
    </div>
  );
};

export default HeroSection;
