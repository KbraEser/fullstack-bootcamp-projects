import React from "react";
import { useLang } from "../context/LanguageContext.jsx";

const Skills = () => {
  const { data } = useLang();
  const skills = data.skillsSection.skills;

  return (
    <div id="skills" className="mt-10 md:mt-31 text-center lg:text-left ">
      <h2 className="font-inter text-5xl font-semibold text-heading mb-14 dark:text-white">
        {data.skillsSection.title}
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-32  lg:justify-between  ">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-inter text-3xl font-medium text-primary mb-8 ">
              {skill.title}
            </h3>
            <p className="font-inter text-center lg:text-left lg:w-75 w-full lg:h-12 text-xs font-normal text-text dark:text-white">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
