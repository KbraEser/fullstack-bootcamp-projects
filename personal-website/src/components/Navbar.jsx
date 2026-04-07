import React from "react";
import ThemeModeToggle from "./ThemeModeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center mt-6  gap-4">
      <ThemeModeToggle />
      <div className="font-inter text-sm font-bold text-[#777777] dark:text-white">
        |
      </div>
      <LanguageToggle />
    </div>
  );
};

export default Navbar;
