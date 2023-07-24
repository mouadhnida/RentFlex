import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="flex justify-center w-full mt-28">
      <div className="flex h-80 w-[990px] flex-col items-center gap-6 rounded-lg bg-gradient-to-b from-[rgb(80,80,80)] to-[rgb(235,235,235)] pt-14 dark:from-[rgb(212,212,212)] dark:to-[rgb(20,20,20)]">
        <p className="text-lg font-semibold text-white dark:text-black">
          ARE YOU READY ?
        </p>
        <h1 className="max-w-[500px] text-center text-4xl font-semibold text-white">
          Enhance Your Property Search, Join Us Today!
        </h1>
        <Link href={"/sign-in"}>
          <Button className="px-12 rounded-full">GET STARTED</Button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
