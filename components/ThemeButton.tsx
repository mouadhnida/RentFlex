"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center p-2 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <HiOutlineSun className="text-2xl" />
      ) : (
        <HiOutlineMoon className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeButton;
