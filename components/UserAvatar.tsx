import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  User as UserIcon,
  LayoutDashboard,
  LogOut as Logout,
} from "lucide-react";
import LogOut from "@/components/auth/LogOut";
import React from "react";
import Link from "next/link";
import { type User } from "@clerk/nextjs/dist/types/server";

export default function UserAvatar(props: {
  user: User;
  email: string | undefined;
}) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={props.user.imageUrl} alt="user avatar" />
            <AvatarFallback>
              {props.user.firstName
                ? props.user.firstName?.slice(0, 1) +
                  props.user.lastName?.slice(0, 1)
                : null}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-52">
          <DropdownMenuLabel>
            <div>
              {props.user.firstName + " " + props.user.lastName}
              <p className="text-xs font-normal dark:text-gray">
                {props.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={"/dashboard/profile"}>
            <DropdownMenuItem>
              <UserIcon className="w-4 h-4 mr-2 " /> Account
            </DropdownMenuItem>
          </Link>
          <Link href={"/dashboard/reservation"}>
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
  );
}
