"use client";
import React from "react";
import { experiencesData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Work = () => {
  const t = useTranslations('experience');

  // Filter experiences by type
  const developmentExperiences = experiencesData.filter(experience => experience.type === 'dev');
  const otherExperiences = experiencesData.filter(experience => experience.type === 'other');

  return (
    <section id="experience" className="py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center text-[#E88FBF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('title')}
        </motion.h2>

        {/* Development Experience - Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#F3B2D1] mb-8">{t('developmentTitle')}</h3>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7441c7] to-[#E88FBF] hidden sm:block"></div>

            {developmentExperiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative pl-0 sm:pl-20 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-[#7441c7] rounded-full border-4 border-[#1d1b2f] shadow-lg hidden sm:block"></div>

                {/* Content card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <h4 className="text-2xl font-bold text-white">{t(`experiences.${experience.key}.title`)}</h4>
                    <span className="text-sm text-gray-300 bg-[#7441c7]/30 px-3 py-1 rounded-full">{t(`experiences.${experience.key}.date`)}</span>
                  </div>
                  <p className="text-[#E88FBF] font-semibold mb-3 text-lg">{t(`experiences.${experience.key}.location`)}</p>
                  <p className="text-gray-200 leading-relaxed mb-4">{t(`experiences.${experience.key}.description`)}</p>

                  {/* Tech tags */}
                  {experience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#7441c7]/20 text-[#F3B2D1] px-3 py-1 rounded-full text-sm font-medium border border-[#7441c7]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Experience - Smaller cards */}
        <div>
          <h3 className="text-xl font-medium text-gray-400 mb-6 opacity-70">{t('otherTitle')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherExperiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">{t(`experiences.${experience.key}.title`)}</h4>
                <p className="text-sm text-gray-300 mb-2">{t(`experiences.${experience.key}.location`)}</p>
                <p className="text-sm text-gray-400 mb-3">{t(`experiences.${experience.key}.description`)}</p>
                <span className="text-xs text-gray-500">{t(`experiences.${experience.key}.date`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
