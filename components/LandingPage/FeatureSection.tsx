import React from "react";
import Tinyhouse from "@/public/Tinyhouse.svg";
import FilterImage from "@/public/FilterImage.svg";
import OrganizingImage from "@/public/OrganizingImage.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center mt-64">
      <h1 className="text-3xl font-bold border-b border-b-black dark:border-b-white">
        Explore Our Top Features
      </h1>
      <div className="grid grid-cols-5 grid-rows-3 mt-32 place-items-center max-md:grid-cols-3 max-md:place-items-start">
        <Image
          src={Tinyhouse}
          alt="tiny house"
          className="col-start-1 col-end-3 max-md:hidden"
        />
        <div className="flex flex-col justify-center col-span-3 gap-6">
          <h1 className="text-2xl font-bold">Extensive Property Listings </h1>
          <p className="max-w-[500px]">
            Access a wide range of rental properties, including apartments,
            houses, condos, and more, to suit different preference and budgets.
          </p>
          <Link href={"/properties"}>
            <Button
              text="Browse Rental"
              style="w-48 max-sm:w-auto h-14 dark:text-black dark:bg-white bg-black text-white dark:bg-opacity-100 dark:hover:bg-opacity-90 bg-opacity-100 hover:bg-opacity-80"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center col-span-2 gap-6">
          <h1 className="text-2xl font-bold">Advanced Search and fitlering</h1>
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
        <div className="flex flex-col justify-center col-span-3 gap-6">
          <h1 className="text-2xl font-bold">Efficient Property Management </h1>
          <p className="max-w-[500px]">
            Streamline your property management tasks with tools and features
            designed for agents. Easily create and manage property listings,
            track inquiries and tenant applications, schedule viewings, and
            handle lease agreements in one centralized platform.
          </p>
          <Link href={"/properties"}>
            <Button
              text="List Your Property"
              style="w-48 max-sm:w-auto h-14 dark:text-black dark:bg-white bg-black text-white dark:bg-opacity-100 dark:hover:bg-opacity-90 bg-opacity-100 hover:bg-opacity-80"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
