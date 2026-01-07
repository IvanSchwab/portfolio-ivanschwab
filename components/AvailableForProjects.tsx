"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AvailableForProjects = () => {
    const t = useTranslations('availableForProjects');

    const strengths = [
        { key: "clarity", icon: "✦" },
        { key: "systemsThinking", icon: "✦" },
        { key: "preparation", icon: "✦" },
        { key: "technicalJudgment", icon: "✦" },
    ];

    const projectTypes = [
        "webApps", "backendAPIs", "desktopApps", "integrations", "creativeProjects"
    ];

    const excludedProjects = ["databaseOnly", "legacyCode", "noScope"];

    const techStack = [
        "Java", "C#", "JavaScript", "TypeScript", "React", "Vue", "Node.js", "MySQL", "MongoDB"
    ];

    return (
        <section id="available" className="py-16 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-8 text-center text-[#E88FBF]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t('title')}
                </motion.h2>

                {/* Positioning Statement */}
                <motion.p
                    className="text-xl sm:text-2xl text-center text-white/90 max-w-3xl mx-auto mb-6 font-medium leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {t('positioning')}
                </motion.p>

                {/* Context */}
                <motion.p
                    className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {t('context')}
                </motion.p>

                {/* How I Work - Primary emphasis */}
                <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h3 className="text-xl font-bold text-white mb-6">
                        {t('howIWork.title')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {strengths.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-[#E88FBF] mt-1">{item.icon}</span>
                                <p className="text-gray-200">{t(`howIWork.items.${item.key}`)}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Projects & Exclusions - Secondary, compact */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {/* Project Types */}
                    <div className="flex-1 bg-white/5 rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                            {t('projectTypes.title')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {projectTypes.map((key, index) => (
                                <span
                                    key={index}
                                    className="text-sm text-gray-300"
                                >
                                    {t(`projectTypes.items.${key}`)}{index < projectTypes.length - 1 ? " ·" : ""}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Not a good fit */}
                    <div className="sm:w-72 bg-white/5 rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                            {t('projectTypes.excludedLabel')}
                        </h4>
                        <ul className="space-y-1">
                            {excludedProjects.map((key, index) => (
                                <li key={index} className="text-sm text-gray-500 flex items-center gap-2">
                                    <span className="text-gray-600">—</span>
                                    {t(`projectTypes.excluded.${key}`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Stack & Languages - Supportive footer */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className="flex flex-wrap justify-center gap-2">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-[#7441c7]/15 text-[#F3B2D1]/80 rounded-full text-xs border border-[#7441c7]/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <span className="hidden sm:block text-gray-600">|</span>
                    <span className="text-gray-400">
                        {t('languages.spanish')} · {t('languages.english')}
                    </span>
                </motion.div>

                {/* CTA - Understated */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7441c7] to-[#E88FBF] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#7441c7]/25 transition-all duration-300"
                    >
                        {t('cta.button')} →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AvailableForProjects;
