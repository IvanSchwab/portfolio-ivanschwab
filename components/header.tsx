"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import HeaderMobile from "./HeaderMobile";
import { FaBars } from "react-icons/fa";  // Importando el ícono de hamburguesa

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hash: string) => {
    e.preventDefault();
    const target = document.querySelector(hash) as HTMLElement;
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 95,
            behavior: "smooth",
        });
    }
};

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para abrir/cerrar el menú

    // Detectar si estamos en móvil o escritorio
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        handleResize(); // Inicializa la detección al cargar

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Función para alternar el menú de la hamburguesa
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="z-[999]">
            {/* Fondo del header con transparencia en modo móvil */}
            <motion.div
                className={clsx(
                    "fixed top-0 left-1/2 h-[6rem] w-full sm:w-[48rem] sm:h-[4rem] rounded-none border border-white border-opacity-40 bg-transparent shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 sm:block hidden"
                )}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            {/* Menú para pantallas grandes */}
            <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 hidden sm:flex">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                onClick={(e) => scrollToSection(e, link.hash)}
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-[#f1f0f6] transition dark:text-[#e6b7b1] dark:hover:text-[#f6d8f2] lg:mt-1.5 mt-[-5px]",
                                    { "text-[#f1f0f6] dark:text-[#e6b7b1]": link.name }
                                )}
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Mostrar el HeaderMobile en dispositivos pequeños */}
            <HeaderMobile
    links={links}
    isMobile={isMobile}
    className="fixed top-0 left-1/2 h-[6rem] w-full transform -translate-x-1/2 z-[9999] bg-white dark:bg-gray-950 opacity-90" // z-index alto y fondo
/>


        </header>
    );
}
