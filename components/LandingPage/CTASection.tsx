import React from "react";
import Button from "@/components/ui/Button";

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
        <Button
          text="GET STARTED"
          style="w-56 rounded-full max-sm:w-auto h-14 dark:text-black dark:bg-white bg-black text-white dark:bg-opacity-100 dark:hover:bg-opacity-90 bg-opacity-100 hover:bg-opacity-80"
        />
      </div>
    </div>
  );
};

export default CTASection;
