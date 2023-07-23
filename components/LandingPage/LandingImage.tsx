"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import landingImage from "@/public/landingImage.svg";
import landingImage1 from "@/public/landingImage1.svg";
import { useTheme } from "next-themes";

const LandingImage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Image
      src={theme === "dark" ? landingImage : landingImage1}
      alt="landing image"
      className="right-0 w-2/5 max-w-5xl max-xl:absolute max-xl:mt-12 max-lg:hidden"
    ></Image>
  );
};

export default LandingImage;
