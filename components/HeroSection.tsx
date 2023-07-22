import React from "react";
import landingImage from "@/public/landingImage.svg";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="mt-24">
        <h1 className="w-[520px] text-6xl font-bold leading-tight">
          Find Your Perfect Rental Property
        </h1>
        <div className="mb-10 mt-12 w-[600px] text-lg">
          Discover a vast selection of rental properties tailored to your needs.
          Whether you're searching for a cozy apartment,or a spacious house.
          Ourplatform connects you with the ideal rental that feels like home.
        </div>
        <Link href={"/sign-in"}>
          <Button
            text="Browse Rental"
            style="w-48 h-14 dark:text-black dark:bg-white bg-black text-white"
          ></Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button
            text="List Your Property"
            style="w-48 h-14 dark:text-white dark:bg-black bg-white text-black border  dark:border-white border-black ml-4"
          ></Button>
        </Link>
      </div>
      <div>
        <Image src={landingImage} alt="landing image"></Image>
      </div>
    </div>
  );
};

export default HeroSection;
