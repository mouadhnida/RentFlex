import Image from "next/image";
import React from "react";
import Pp from "@/public/pp.png";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center w-full mt-48">
      <h3 className="text-xl font-bold">Terstimonials</h3>
      <h1 className="text-4xl font-bold border-b w-fit border-b-black dark:border-b-white">
        Read What Others Have To Say
      </h1>
      <div className="flex flex-wrap justify-center mt-28 gap-x-4 gap-y-24">
        <div className="relative">
          <div className="absolute left-0 flex justify-center w-full -top-12">
            <Image
              src={Pp}
              alt="profile picture"
              className="w-24 h-24 rounded-full"
            ></Image>
          </div>
          <div className="flex min-h-[300px] w-80 flex-col items-center justify-center gap-4 rounded border border-darkborder">
            <p className="text-lg font-semibold ">Random guy</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 flex justify-center w-full -top-12">
            <Image
              src={Pp}
              alt="profile picture"
              className="w-24 h-24 rounded-full"
            ></Image>
          </div>
          <div className="flex min-h-[300px] w-80 flex-col items-center justify-center gap-4 rounded border border-darkborder">
            <p className="text-lg font-semibold ">Random guy</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 flex justify-center w-full -top-12">
            <Image
              src={Pp}
              alt="profile picture"
              className="w-24 h-24 rounded-full"
            ></Image>
          </div>
          <div className="flex min-h-[300px] w-80 flex-col items-center justify-center gap-4 rounded border border-darkborder">
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
