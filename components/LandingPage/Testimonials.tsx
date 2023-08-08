import Image from "next/image";
import React from "react";
import Pp from "@/public/pp.png";

const Testimonials = () => {
  return (
    <div className="mt-48 flex w-full flex-col items-center">
      <h3 className="text-xl font-bold max-sm:text-lg">Terstimonials</h3>
      <h1 className="w-fit border-b border-b-black text-4xl font-bold dark:border-b-white max-sm:text-2xl">
        Read What Others Have To Say
      </h1>
      <div className="mt-28 flex flex-wrap justify-center gap-x-4 gap-y-24">
        <div className="relative">
          <div className="absolute -top-12 left-0 flex w-full justify-center">
            <Image
              src={Pp}
              alt="profile picture"
              className="h-24 w-24 rounded-full"
            ></Image>
          </div>
          <div className="border-darkborder flex min-h-[300px] w-80 flex-col items-center justify-center gap-4 rounded border">
            <p className="text-lg font-semibold ">Random guy</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 left-0 flex w-full justify-center">
            <Image
              src={Pp}
              alt="profile picture"
              className="h-24 w-24 rounded-full"
            ></Image>
          </div>
          <div className="border-darkborder flex min-h-[300px] w-80 flex-col items-center justify-center gap-4 rounded border">
            <p className="text-lg font-semibold ">Random guy</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 left-0 flex w-full justify-center">
            <Image
              src={Pp}
              alt="profile picture"
              className="h-24 w-24 rounded-full"
            ></Image>
          </div>
          <div className="border-darkborder flex min-h-[300px] w-80 flex-col items-center justify-center gap-4 rounded border">
            <p className="text-lg font-semibold ">Random guy</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
