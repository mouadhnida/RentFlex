import Link from "next/link";
import ThemeButton from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { currentUser } from "@clerk/nextjs";
import UserAvatar from "../UserAvatar";
import MobileNav from "./MobileNav";
import { User } from "@clerk/nextjs/dist/types/server";

interface NavBarProps {
  user?: User | null;
  email?: string;
}

export default function NavBar({ user, email }: NavBarProps) {
  return (
    <div className="flex items-center justify-between h-16 pt-2 mx-40 bg-white dark:bg-black max-lg:mx-16 max-sm:mx-4">
      <Link href={"/"}>
        <div className="text-3xl font-bold cursor-pointer max-md:hidden">
          RENT FLEX
        </div>
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
        <li className="cursor-pointer">
          {user ? (
            <div className="">
              <UserAvatar user={user} email={email} />
            </div>
          ) : (
            <Link href={"/signin"}>
              <Button className="h-10">Sign In</Button>
            </Link>
          )}
        </li>
        <li>
          <ThemeButton />
        </li>
      </ul>
      <div className="items-center justify-between hidden w-full text-2xl max-md:flex">
        <MobileNav />
        <div className="text-3xl font-bold cursor-pointer">RENT FLEX</div>
        <div className="flex gap-4 max-sm:gap-2">
          {user ? (
            <UserAvatar user={user} email={email} />
          ) : (
            <Link href={"/signin"}>
              <Button className="h-10">Sign In</Button>
            </Link>
          )}
          <div className=" max-[450px]:hidden">
            <ThemeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
