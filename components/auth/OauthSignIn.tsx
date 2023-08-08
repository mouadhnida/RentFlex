"use client";

import { useSignIn } from "@clerk/nextjs";
import { type OAuthStrategy } from "@clerk/types";
import React from "react";
import { Button } from "../ui/button";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";

interface Response {
  user?: {
    id: string;
  };
}

const OauthSignIn = () => {
  const { signIn } = useSignIn();
  const signInWith = async (strategy: OAuthStrategy) => {
    try {
      const response = await signIn?.authenticateWithRedirect({
        strategy,
        redirectUrl: "/ssocallback",
        redirectUrlComplete: "/",
      });
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="flex gap-2 max-sm:flex-wrap">
      <Button
        className="h-10 w-full font-normal"
        variant="outline"
        onClick={() => signInWith("oauth_google")}
      >
        <AiOutlineGoogle className="mr-1 text-xl " /> Google
      </Button>
      <Button
        className="h-10 w-full font-normal"
        variant="outline"
        onClick={() => signInWith("oauth_facebook")}
      >
        <BiLogoFacebook className="mr-1 text-xl" /> Facebook
      </Button>
    </div>
  );
};

export default OauthSignIn;
