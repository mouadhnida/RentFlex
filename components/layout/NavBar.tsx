import Link from "next/link";
import ThemeButton from "@/components/ui/ThemeButton";
import { Button } from "@/components/ui/button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { currentUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LayoutDashboard, LogOut as Logout } from "lucide-react";
import LogOut from "@/components/auth/LogOut";

export default async function NavBar() {
  const user = await currentUser();

  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <div className="flex items-center justify-between h-16 pt-5 mx-40 bg-white dark:bg-black max-lg:mx-16 max-sm:mx-4">
      <Link href={"/"}>
        <div className="text-3xl font-bold cursor-pointer">RENT FLEX</div>
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
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user.imageUrl} alt="user avatar" />
                    <AvatarFallback>
                      {user.firstName
                        ? user.firstName?.slice(0, 1) +
                          user.lastName?.slice(0, 1)
                        : null}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-52">
                  <DropdownMenuLabel>
                    <div>
                      {user.firstName + " " + user.lastName}
                      <p className="text-xs font-normal dark:text-gray">
                        {email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={"/dashboard/account"}>
                    <DropdownMenuItem>
                      <User className="w-4 h-4 mr-2 " /> Account
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/dashboard"}>
                    <DropdownMenuItem>
                      <LayoutDashboard className="w-4 h-4 mr-2 " /> Dashboard
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Logout className="w-4 h-4 mr-2 " /> <LogOut />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Link href={"/signin"}>
              <Button className="h-10">Sign In</Button>
            </Link>
          )}
        </li>
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
