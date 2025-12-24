"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Projects = () => {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center text-[#E88FBF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Project image */}
              <div className="relative aspect-video bg-gradient-to-br from-[#7441c7] to-[#E88FBF] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white space-y-3 w-full">
                    <h3 className="text-2xl font-bold">{t(`items.${project.key}.title`)}</h3>

                    <div className="flex gap-3 mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                      >
                        {t('viewGithub')} →
                      </a>

                      {/* @ts-ignore -- demoLink is optional and not yet typed in the imported file */}
                      {project.demoLink && (
                        <a
                          /* @ts-ignore */
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                        >
                          {t('viewProject')} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="p-6 bg-[#1d1b2f]/80 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-3">{t(`items.${project.key}.title`)}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{t(`items.${project.key}.description`)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#7441c7]/30 text-[#F3B2D1] rounded-full text-xs font-medium border border-[#7441c7]/50 hover:bg-[#7441c7]/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
