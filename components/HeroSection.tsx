import React from "react";
import landingImage from "@/public/landingImage.svg";
import Link from "next/link";
import Button from "./Button";
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
          Whether you're searching for a cozy apartment,or a spacious house.
          Ourplatform connects you with the ideal rental that feels like home.
        </div>
        <Link href={"/sign-in"}>
          <Button
            text="Browse Rental"
            style="w-48 max-sm:w-auto h-14 dark:text-black dark:bg-white bg-black text-white dark:bg-opacity-100 dark:hover:bg-opacity-90 bg-opacity-100 hover:bg-opacity-80"
          />
        </Link>
        <Link href={"/sign-in"}>
          <Button
            text="List Your Property"
            style="w-48 max-sm:w-auto h-14 dark:text-white dark:bg-black bg-white text-black border  dark:border-white border-black ml-4 dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black"
          />
        </Link>
      </div>
      <Image
        src={landingImage}
        alt="landing image"
        className=" right-0 w-2/5 max-xl:absolute max-xl:mt-12 max-lg:hidden"
      ></Image>
    </div>
  );
};

export default HeroSection;
