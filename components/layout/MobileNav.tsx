import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <div className="text-3xl font-bold cursor-pointer">RENT FLEX</div>
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col mt-14">
          <Link href={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Separator />
          <Link href={"/properties"}>
            <li className="cursor-pointer">Properties</li>
          </Link>
          <Separator />
          <Link href={"/dashboard/favorite"}>
            <li className="cursor-pointer">Favorite</li>
          </Link>
          <Separator />
          <Link href={"/about-us"}>
            <li className="cursor-pointer">About us</li>
          </Link>
          <Separator />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
