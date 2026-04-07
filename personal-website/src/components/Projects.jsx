import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLang } from "../context/LanguageContext.jsx";

function ProjectCard({ project }) {
  const { data, lang } = useLang();

  return (
    <div className="mx-auto max-w-75 lg:max-w-none">
      <img
        className="h-45 w-75 object-cover"
        src={project.image}
        alt={project.title}
      />
      <h3 className="font-inter font-medium text-3xl text-primary my-2">
        {project.title}
      </h3>
      <p className="mb-6 h-32 w-75 font-normal text-sm font-inter text-text">
        {project.description}
      </p>
      <ul className="flex gap-2">
        {project.features.map((feature, idx) => (
          <li
            key={idx}
            className="mb-1 rounded-md border border-secondary px-4 py-1 font-inter text-sm text-secondary"
          >
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex w-75 justify-between">
        <a
          className="link-primary"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="link-primary"
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {lang === "en" ? "View Site" : "Siteyi Görüntüle"}
        </a>
      </div>
    </div>
  );
}

const Projects = () => {
  const { data, lang } = useLang();
  const projects = data.projectsSection.projects;

  return (
    <div className="mb-35 flex flex-col">
      <hr className="mt-11" />
      <h2 className="mb-14 mt-10 text-center font-inter text-5xl font-semibold text-heading lg:text-left">
        Projects
      </h2>

      <div className="lg:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="projects-swiper pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title + index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden gap-10 lg:grid lg:grid-cols-3 lg:items-start lg:gap-40">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
