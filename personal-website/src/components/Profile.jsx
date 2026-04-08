import React from "react";

import { useLang } from "../context/LanguageContext.jsx";

const Profile = () => {
  const { data } = useLang();
  const userProfile = data.profileSection.profile;

  return (
    <div className="flex flex-col">
      <hr className="mt-11" />
      <h2 className="font-inter text-5xl font-semibold text-center lg:text-left text-heading mb-14 mt-10 dark:text-white">
        {data.profileSection.title}
      </h2>

      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <section>
          <h3 className="font-inter text-3xl font-medium text-primary">
            {data.profileSection.title}
          </h3>
          <div className="mt-5 flex gap-8 md:gap-16 lg:gap-12">
            <div className="flex min-w-0 flex-col gap-3 font-inter font-semibold text-lg text-[#000000] dark:text-zinc-200">
              {userProfile.map((item, index) => (
                <div key={`label-${index}`}>{item.label}</div>
              ))}
            </div>
            <div className="flex min-w-0 flex-col gap-3 font-inter text-lg font-normal text-[#000000] dark:text-zinc-100">
              {userProfile.map((item, index) => (
                <div key={`value-${index}`}>{item.value}</div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-inter text-3xl font-medium text-primary">
            {data.profileSection.aboutMe.title}
          </h3>
          <div className="mt-5 max-w-xl space-y-4 font-inter text-lg text-text dark:text-white">
            <p>{data.profileSection.aboutMe.description1}</p>
            <p>{data.profileSection.aboutMe.description2}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
