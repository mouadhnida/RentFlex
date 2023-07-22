import Link from "next/link";
import React from "react";
import ThemeButton from "@/components/ThemeButton";
import Button from "@/components/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function NavBar() {
  return (
    <div className="flex w-full justify-between pt-5">
      <Link href={"/"}>
        <div className="cursor-pointer text-3xl font-bold">RENT FLEX</div>
      </Link>
      <div className="absolute left-96 top-[-460px] h-[500px] w-96 rounded-full bg-white blur-3xl max-md:hidden"></div>
      <ul className="flex w-[450px] items-center justify-between max-md:hidden">
        <Link href={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link href={"/properties"}>
          <li className="cursor-pointer">Properties</li>
        </Link>
        <Link href={"/dashboard/favorite"}>
          <li className="cursor-pointer">Favorite</li>
        </Link>
        <Link href={"/about-us"}>
          <li className="cursor-pointer">About us</li>
        </Link>
        <Link href={"/sign-in"}>
          <li className="cursor-pointer">
            <Button
              text="Sign In"
              style="dark:bg-white dark:text-black bg-black text-white dark:bg-opacity-100 dark:hover:bg-opacity-90 bg-opacity-100 hover:bg-opacity-80"
            />
          </li>
        </Link>
        <li className="">
          <ThemeButton />
        </li>
      </ul>
      <div className="hidden text-2xl max-md:block">
        <HiOutlineMenuAlt1 />
      </div>
    </div>
  );
}
