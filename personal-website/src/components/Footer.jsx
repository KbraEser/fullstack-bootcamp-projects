import React from "react";
import { useLang } from "../context/LanguageContext.jsx";
const Footer = () => {
  const { data } = useLang();
  const footerSection = data.footerSection;
  return (
    <div className="bg-footer dark:bg-zinc-800  pt-26 px-31">
      <h2 className="max-w-135 font-inter  text-2xl lg:text-5xl font-semibold text-heading dark:text-black text-center lg:text-left">
        {footerSection.title}
      </h2>
      <div className=" flex flex-col lg:flex-row lg:justify-between text-center  mt-15  mb-15 lg:mb-35">
        <a href="mailto:almilasucode@gmail.com">
          <span className="text-[#AF0C48] dark:text-[#d587a4] font-inter font-medium text-xl ">
            👉 almilasucode@gmail.com
          </span>
        </a>
        <div className="flex flex-col lg:flex-row gap-5 font-inter font-medium text-lg pt-5 lg:pt-0">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Blog
          </a>
          <a
            className="text-[#00ab6b]"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-[#0077b5]"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
