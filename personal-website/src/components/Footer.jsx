import React from "react";
import { useLang } from "../context/LanguageContext.jsx";
const Footer = () => {
  const { data } = useLang();
  const footerSection = data.footerSection;
  return (
    <div
      id="footer"
      className="bg-footer dark:bg-zinc-800  pt-26 px-0 lg:px-31"
    >
      <h2 className="max-w-135 font-inter  text-2xl md:text-5xl font-semibold text-heading dark:text-black text-center lg:text-left">
        {footerSection.title}
      </h2>
      <div className=" flex flex-col lg:flex-row lg:justify-between text-center  mt-15  mb-15 lg:mb-35">
        <a
          className="block w-full text-center lg:w-auto lg:text-left"
          href="mailto:almilasucode@gmail.com"
        >
          <span className="inline-block text-[#AF0C48] dark:text-[#d587a4] font-inter font-medium text-xl">
            👉 almilasucode@gmail.com
          </span>
        </a>
        <div className="flex flex-col lg:flex-row gap-5 font-inter font-medium text-lg pt-5 lg:pt-0">
          <a
            href="https://www.youtube.com/@devK%C3%BCbraEser"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Blog
          </a>
          <a
            className="text-[#00ab6b]"
            href={footerSection.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-[#0077b5]"
            href={footerSection.linkedin}
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
