import React from "react";
import { useLang } from "../context/LanguageContext.jsx";
const LanguageToggle = () => {
  const { lang, setLang } = useLang();

  const handleClick = () => {
    setLang((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <div className="font-inter text-sm font-bold text-[#777777] dark:text-white">
      <button
        className="hover:text-primary dark:hover:text-primary cursor-pointer"
        onClick={handleClick}
      >
        {lang === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
      </button>
    </div>
  );
};

export default LanguageToggle;
