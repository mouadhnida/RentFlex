import SideNav from "@/components/layout/SideNav";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <Separator className="m-0" />
      <div className="flex">
        <div className="max-md:hidden">
          <SideNav />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
