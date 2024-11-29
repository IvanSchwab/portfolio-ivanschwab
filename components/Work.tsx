import React from "react";
import { experiencesData } from "../lib/data";

const Work = () => {
  return (
    <section id="experience">
      <div className="py-16 px-8">
        <h2 className="select-none px-4 sm:px-8 text-3xl sm:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up">
          Mi Experiencia de Trabajo
        </h2>
        <br /><br />
        <div className="space-y-8">
          {experiencesData.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-xl bg-white/10 shadow-lg transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="text-5xl text-[#E88FBF] flex-shrink-0">
                {experience.icon}
              </div>
              <div className="flex flex-col gap-2 text-white">
                <h3 className="text-2xl font-semibold">{experience.title}</h3>
                <p className="text-sm text-gray-300 italic">{experience.location}</p>
                <p className="text-gray-200">{experience.description}</p>
                <p className="text-sm text-gray-400 mt-2">{experience.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
