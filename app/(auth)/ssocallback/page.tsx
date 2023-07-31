import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import { LucideLoader2 } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <AuthenticateWithRedirectCallback />
    </>
  );
};

export default page;
