"use client";
import React from "react";
import { skillsData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// Categorize skills
const frontendSkills = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue", "Tailwind"];
const backendSkills = ["Node.js", "C#", "Java", "Spring Boot", "APIs REST"];
const databaseSkills = ["MySQL", "MongoDB"];
const toolsSkills = ["Git", "Kotlin"];

export default function Skills() {
  const t = useTranslations('skills');

  const getSkillsByCategory = (category: string[]) => {
    return skillsData.filter(skill => category.includes(skill.name));
  };

  const renderSkillCategory = (title: string, skills: any[], color: string) => (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className={`text-xl font-bold mb-6 ${color}`}>{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-200 text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 px-4 sm:px-8">
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

        <div className="grid md:grid-cols-2 gap-8">
          {renderSkillCategory("Frontend", getSkillsByCategory(frontendSkills), "text-blue-400")}
          {renderSkillCategory("Backend", getSkillsByCategory(backendSkills), "text-purple-400")}
          {renderSkillCategory("Databases", getSkillsByCategory(databaseSkills), "text-green-400")}
          {renderSkillCategory("Tools & Others", getSkillsByCategory(toolsSkills), "text-pink-400")}
        </div>
      </div>
    </section>
  );
}
