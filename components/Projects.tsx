"use client";
import React from "react";
import { projectsData } from "../lib/data";
import AOS from "aos";

const Projects = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="projects">
      <div className="text-white py-16 px-8">
        <h2 className="select-none mb-12 text-3xl sm:text-4xl font-bold text-center text-[#E88FBF]"
          data-aos="fade-up">
          Proyectos Destacados
        </h2>
        <br />
        <br />
        <br />
        <div className="flex max-w-[1250px] flex-col gap-16">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center md:items-stretch gap-8`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={`${index * 100}`}
            >
              <div className="sm:hidden select-none relative flex-1 h-64 sm:h-80 group mb-8 md:mb-0">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg transition-filter duration-300 group-hover:filter-none filter brightness-[0.8] blur-[2px]"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    objectPosition: "center top",
                    objectFit: "cover",
                  }}
                ></div>
              </div>

              <div className="hidden sm:block select-none relative flex-1 h-64 sm:h-80 md:h-auto group mb-8 md:mb-0">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg transition-filter duration-300 group-hover:filter-none filter brightness-[0.8] blur-[2px]"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                ></div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="select-none text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="select-none flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-[#7441c7] rounded-full text-white shadow-md transform transition-all duration-300 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block bg-[#7441c7] text-white px-6 py-3 rounded-lg shadow-lg transform transition hover:scale-105"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
