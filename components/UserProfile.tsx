"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Card, CardContent } from "@/components/ui/card";
import { UserProfileSchema } from "@/lib/validations/userProfile";
import { useForm } from "react-hook-form";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const form = useForm<z.infer<typeof UserProfileSchema>>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      //   firstName:
      //   lastName:
      //   email:
      //   phone:
      //   bio:
    },
  });
  console.log(
    user.profileImageUrl,
    user.firstName,
    user.lastName,
    user.primaryEmailAddress?.emailAddress
  );
  return (
    <div className="mt-5">
      <Card>
        <CardContent></CardContent>
      </Card>

      {/* <Image
        src={user.profileImageUrl}
        width={50}
        height={50}
        alt={"user image"}
      /> */}
    </div>
  );
}
