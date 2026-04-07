import React from "react";
import { useLang } from "../context/LanguageContext.jsx";
const Header = () => {
  const { data } = useLang();
  const headerSection = data.headerSection;

  return (
    <div className="flex items-center justify-between mt-10">
      <div className="hidden sm:flex w-16 h-15 bg-[#EEEBFF] rounded-full items-center justify-center">
        <div className="rotate-30 text-[#7B61FF] font-semibold text-2xl">A</div>
      </div>
      <nav>
        <ul className="flex items-center gap-10  md:gap-24 ">
          {headerSection.map((item, index) => (
            <li key={index}>
              <a
                className="font-inter text-lg font-medium text-text dark:text-white"
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
