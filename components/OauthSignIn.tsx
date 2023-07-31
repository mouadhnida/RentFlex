"use client";

import { useSignIn } from "@clerk/nextjs";
import { type OAuthStrategy } from "@clerk/types";
import React from "react";
import { Button } from "./ui/button";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";

const OauthSignIn = () => {
  const { signIn } = useSignIn();
  const signInWith = (strategy: OAuthStrategy) => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/ssocallback",
      redirectUrlComplete: "/",
    });
  };
  return (
    <div className="flex gap-2 max-sm:flex-wrap">
      <Button
        className="w-full h-10 font-normal"
        variant="outline"
        onClick={() => signInWith("oauth_google")}
      >
        <AiOutlineGoogle className="mr-1 text-xl " /> Google
      </Button>
      <Button
        className="w-full h-10 font-normal"
        variant="outline"
        onClick={() => signInWith("oauth_facebook")}
      >
        <BiLogoFacebook className="mr-1 text-xl" /> Facebook
      </Button>
    </div>
  );
};

export default OauthSignIn;
