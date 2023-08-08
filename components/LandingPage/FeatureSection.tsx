import React from "react";
import Tinyhouse from "@/public/Tinyhouse.svg";
import FilterImage from "@/public/FilterImage.svg";
import OrganizingImage from "@/public/OrganizingImage.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <div className="mt-64 flex flex-col items-center max-sm:mt-44">
      <h1 className="border-b border-b-black text-4xl font-bold dark:border-b-white max-sm:text-2xl">
        Explore Our Top Features
      </h1>
      <div className="mt-32 grid grid-cols-5 grid-rows-3 place-items-center max-md:grid-cols-3 max-md:place-items-start">
        <Image
          src={Tinyhouse}
          alt="tiny house"
          className="col-start-1 col-end-3 max-md:hidden"
        />
        <div className="col-span-3 flex flex-col justify-center gap-6">
          <h1 className="text-2xl font-bold max-sm:text-xl">
            Extensive Property Listings
          </h1>
          <p className="max-w-[500px]">
            Access a wide range of rental properties, including apartments,
            houses, condos, and more, to suit different preference and budgets.
          </p>
          <Link href={"/properties"}>
            <Button className="w-48 max-sm:w-auto">Browse Rental</Button>
          </Link>
        </div>
        <div className="col-span-2 flex flex-col justify-center gap-6">
          <h1 className="text-2xl font-bold max-sm:text-xl">
            Advanced Search and fitlering
          </h1>
          <p className="max-w-[500px]">
            Easily find the perfect rental property by using advanced search
            filters such as location, price range, number of bedrooms,
            amenities, and more.
          </p>
        </div>
        <Image
          src={FilterImage}
          alt="filter Image"
          className="col-start-3 col-end-6 max-md:hidden"
        />

        <Image
          src={OrganizingImage}
          alt="Organizing Image"
          className="col-start-1 col-end-3 max-md:hidden"
        />
        <div className="col-span-3 flex flex-col justify-center gap-6">
          <h1 className="text-2xl font-bold max-sm:text-xl">
            Efficient Property Management{" "}
          </h1>
          <p className="max-w-[500px]">
            Streamline your property management tasks with tools and features
            designed for agents. Easily create and manage property listings,
            track inquiries and tenant applications, schedule viewings, and
            handle lease agreements in one centralized platform.
          </p>
          <Link href={"/properties"}>
            <Button className="w-48 max-sm:w-auto">Browse Rental</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
