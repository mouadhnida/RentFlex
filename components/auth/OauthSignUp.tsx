"use client";

import { useSignUp } from "@clerk/nextjs";
import { type OAuthStrategy } from "@clerk/types";
import React from "react";
import { Button } from "../ui/button";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";

const OauthSignUp = () => {
  const { signUp } = useSignUp();
  const signUpWith = (strategy: OAuthStrategy) => {
    return signUp?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/ssocallback",
      redirectUrlComplete: "/",
    });
  };
  return (
    <div className="flex gap-2 max-sm:flex-wrap">
      <Button
        className="h-10 w-full font-normal"
        variant="outline"
        onClick={() => signUpWith("oauth_google")}
      >
        <AiOutlineGoogle className="mr-1 text-xl " /> Google
      </Button>
      <Button
        className="h-10 w-full font-normal"
        variant="outline"
        onClick={() => signUpWith("oauth_facebook")}
      >
        <BiLogoFacebook className="mr-1 text-xl" /> Facebook
      </Button>
    </div>
  );
};

export default OauthSignUp;
