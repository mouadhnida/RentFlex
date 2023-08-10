import Link from "next/link";
import React from "react";
import { NewsLetterForm } from "../forms/NewsLetter";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="">
      <Separator className="m-0" />
      <div className="mx-40 my-14 grid grid-cols-4 max-lg:mx-16 max-md:grid-cols-2 max-md:gap-8 max-sm:mx-4 max-[500px]:grid-cols-1">
        <div className="text-xl font-bold">RENT FLEX</div>
        <div>
          <h1 className="font-semibold cursor-pointer ">RENT FLEX</h1>
          <Link href={"/"}>
            <p className="cursor-pointer">Home</p>
          </Link>
          <Link href={"/"}>
            <p className="cursor-pointer">Rent Property</p>
          </Link>
          <Link href={"/"}>
            <p className="cursor-pointer">Properties</p>
          </Link>
        </div>
        <div>
          <h1 className="font-semibold cursor-pointer">CONTACT</h1>
          <Link href={"/"}>
            <p className="cursor-pointer">Email</p>
          </Link>
          <Link href={"/"}>
            <p className="cursor-pointer">Linkedln</p>
          </Link>
          <Link href={"/"}>
            <p className="cursor-pointer">Twitter</p>
          </Link>
        </div>
        <NewsLetterForm />
      </div>
    </div>
  );
}
