"use client";

import { CalendarCheck2, Heart, PlusSquare, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Separator } from "../ui/separator";

const data = [
  {
    name: "Account",
    icon: <User className="w-5" />,
    href: "/dashboard/profile",
  },
  {
    name: "Favorite",
    icon: <Heart className="w-5" />,
    href: "/dashboard/favorite",
  },
  {
    name: "Your Reservation",
    icon: <CalendarCheck2 className="w-5" />,
    href: "/dashboard/resevation",
  },
  {
    name: "Add Your Space",
    icon: <PlusSquare className="w-5" />,
    href: "/dashboard/addspace",
  },
];

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="relative h-full w-96">
      <Separator
        orientation="vertical"
        className="absolute right-0 h-full -mt-10"
      />
      <div className="flex flex-col gap-2 mt-10 ml-40 mr-6">
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "bg-gray bg-opacity-25 text-white"
                  : "text-gray hover:bg-gray hover:bg-opacity-25 hover:text-white"
              } flex items-center gap-2 rounded px-2 py-1`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
