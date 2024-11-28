"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default function Intro() {
    return (
        <section
            id="home"
            className="py-10 flex items-center justify-center px-4 sm:px-8"
        >
            <div className="flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.5,
                    }}
                    className="relative"
                >
                    <Image
                        src="/images/foto-cv.png"
                        alt="Iván Schwab"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="rounded-full border-4 border-white shadow-2xl"
                    />
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        🚀
                    </motion.span>
                </motion.div>

                <motion.h1
                    className="mt-6 text-2xl sm:text-3xl font-semibold leading-relaxed sm:leading-normal max-w-md sm:max-w-xl lg:max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="text-[#f0a5a3] font-bold block mb-2">Hola, soy Iván.</span>
                    <span className="block">
                        Soy analista de sistemas y desarrollador de software, especializado en aplicaciones web.
                    </span>
                    <span className="block">
                        Trabajo con distintas tecnologías como{" "} <br />
                        <span className="underline text-[#F1F0F6]">React, TypeScript y C#</span>.
                    </span>
                    <span className="block">
                        Me apasiona resolver problemas y crear soluciones innovadoras mediante la tecnología.
                    </span>
                </motion.h1>


                <motion.div
    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-lg font-medium"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
>
    <Link
        href="#contact"
        className="group bg-transparent text-[#F1F0F6] px-8 py-4 rounded-full transform transition duration-200 hover:text-[#816cf7] hover:scale-105"
    >
        Contáctame aquí
    </Link>
    
    <a 
        className="group bg-transparent text-[#F1F0F6] px-8 py-4 rounded-full border-2 border-[#7441c7] hover:bg-[#7441c7] hover:text-white transition duration-200"
        href="/Cv/ivanschwabcv.pdf"
        download
    >
        <span className="inline-flex items-center">
            <span className="mr-2">
                <FaDownload />
            </span>
            Descargar CV
        </span>
    </a>

    {/* Contenedor para LinkedIn y GitHub */}
    <div className="flex  sm:flex-row sm:gap-6 gap-4 sm:justify-start justify-center w-full sm:w-auto">
        <a
            className="bg-transparent p-4 text-[#F1F0F6] hover:text-[#7996f7] hover:bg-transparent transition duration-200"
            href="https://www.linkedin.com/in/iv%C3%A1n-schwab/"
            target="_blank"
        >
            <BsLinkedin size={28} />
        </a>

        <a
            className="bg-transparent p-4 text-[#F1F0F6] hover:text-[#39d353] hover:bg-transparent transition duration-200"
            href="https://github.com/IvanSchwab"
            target="_blank"
        >
            <FaGithubSquare size={28} />
        </a>
    </div>
</motion.div>


            </div>
        </section>
    );
}
