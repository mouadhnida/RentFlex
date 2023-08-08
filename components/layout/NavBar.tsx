import Link from "next/link";
import React, { use } from "react";
import ThemeButton from "@/components/ui/ThemeButton";
import { Button } from "@/components/ui/button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { currentUser, UserButton } from "@clerk/nextjs";

export default async function NavBar() {
  const user = await currentUser();
  return (
    <div className="mx-40 flex h-16 justify-between bg-white pt-5 dark:bg-black max-lg:mx-16 max-sm:mx-4">
      <Link href={"/"}>
        <div className="cursor-pointer text-3xl font-bold">RENT FLEX</div>
      </Link>

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
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Button className="h-10">Sign In</Button>
            )}
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
