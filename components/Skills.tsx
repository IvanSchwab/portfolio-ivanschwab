"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.9, 
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05 * index,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};


export default function Skills() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="mb-18 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white mb-8">
        Habilidades
      </h2>

      {/* Lista de habilidades */}
      <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800 dark:text-white">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border-2 border-gray-800 rounded-xl px-6 py-4 text-center transition-all duration-300 transform hover:bg-gray-800 hover:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:hover:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
