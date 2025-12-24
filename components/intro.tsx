"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Intro() {
    const t = useTranslations('hero');
    const locale = useLocale();
    const activeLocale = locale.toUpperCase();

    return (
        <section
            id="home"
            className="min-h-screen"
        >
            {/* Language Switcher */}
            <div className="absolute top-4 right-4 z-50 sm:top-8 sm:right-8">
                <LocaleSwitcher />
            </div>
            {/* Animated blob backgrounds */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-[#ff7f7f] rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -50, 20, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                ></motion.div>
                <motion.div
                    className="absolute top-40 right-10 w-72 h-72 bg-[#f6d8f2] rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        x: [0, -30, 20, 0],
                        y: [0, 40, -30, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                ></motion.div>
                <motion.div
                    className="absolute -bottom-8 left-40 w-72 h-72 bg-[#e88fbf] rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        x: [0, 40, -10, 0],
                        y: [0, -30, 40, 0],
                        scale: [1, 1.05, 0.95, 1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                ></motion.div>
            </div>

            {/* Gradient fade-out overlay at bottom for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0a0f] z-10 pointer-events-none"></div>

            <div className="relative z-20 max-w-6xl mx-auto py-20 px-4 sm:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <div className="space-y-8 text-center md:text-left">
                    <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f0a5a3] via-[#E88FBF] to-[#7441c7]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t('greeting')}
                    </motion.h1>

                    <motion.div
                        className="space-y-4 text-lg sm:text-xl text-gray-200 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <p>{t('intro')}</p>
                        <p>
                            {t('tech')}{" "}
                            <span className="font-semibold text-[#F3B2D1]">{t('techHighlight')}</span>.
                        </p>
                        <p className="text-gray-300">{t('passion')}</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-[#7441c7] to-[#E88FBF] text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            {t('ctaContact')}
                        </Link>
                        <a
                            href={`/Cv/CV-IvanSchwab-${activeLocale}-2025.pdf`}
                            download={`CV-IvanSchwab-${activeLocale}-2025.pdf`}
                            className="px-8 py-4 border-2 border-[#7441c7] text-[#F1F0F6] rounded-full font-semibold hover:bg-[#7441c7] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                        >
                            <FaDownload />
                            {t('ctaDownload')}
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        className="flex gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <a
                            href="https://www.linkedin.com/in/iv%C3%A1n-schwab/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-[#F1F0F6] hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            <BsLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/IvanSchwab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-[#F1F0F6] hover:bg-[#333] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            <FaGithubSquare size={24} />
                        </a>
                    </motion.div>
                </div>

                {/* Right side - Image */}
                <motion.div
                    className="relative flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="relative">
                        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto md:mx-0 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500 backdrop-blur-sm">
                            <Image
                                src="/images/foto-cv.png"
                                alt="Iván Schwab"
                                width="384"
                                height="384"
                                quality="95"
                                priority={true}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
