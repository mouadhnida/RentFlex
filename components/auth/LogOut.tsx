"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <SignOutButton
        signOutCallback={() => {
          router.push("/");
        }}
      />
    </div>
  );
}
