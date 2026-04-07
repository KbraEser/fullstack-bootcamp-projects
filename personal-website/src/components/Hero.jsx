import React from "react";
import heroImage from "../img/hero-img.png";

import { useLang } from "../context/LanguageContext.jsx";

const Hero = () => {
  const { data } = useLang();
  const buttons = data.heroSection.buttons;
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 mt-22 items-center">
      <div className="flex flex-col justify-around gap-2 w-full lg:w-[598px] lg:h-[428px]">
        <div className="flex  items-center lg:justify-start justify-center gap-2">
          <hr className="border-b border-secondary w-25" />
          <h1 className="font-inter text-xl font-medium text-primary">
            Almila Su
          </h1>
        </div>
        <h1 className="font-inter text-center lg:text-left   text-3xl  md:text-6xl  font-bold text-[#1F2937] dark:text-primary">
          {data.heroSection.title}
        </h1>
        <p className="font-inter lg:text-lg text-base font-normal text-text dark:text-white">
          {data.heroSection.description}
        </p>
        <div className="flex items-center md:flex-row lg:justify-start justify-center gap-3 ">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.url}
              target={button.url?.startsWith("http") ? "_blank" : undefined}
              rel={
                button.url?.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="button-primary flex items-center justify-center gap-2"
            >
              {button.icon ? <button.icon /> : null}
              {button.text}
            </a>
          ))}
        </div>
      </div>
      <div className="">
        <img
          className="w-60 h-47 md:w-119 md:h-94 rounded-lg    "
          src={heroImage}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
