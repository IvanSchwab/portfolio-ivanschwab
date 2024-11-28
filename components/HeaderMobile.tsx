import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';

type HeaderMobileProps = {
    links: readonly { name: string; hash: string }[];
    isMobile: boolean;
    className?: string; // Agregamos esta propiedad opcional

};

const HeaderMobile: React.FC<HeaderMobileProps> = ({ links, isMobile }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div>
            {/* Botón animado para abrir/cerrar el menú */}
            <motion.button
                onClick={toggleMenu}
                className="sm:hidden fixed  top-4 left-4 z-10"
                whileHover={{ scale: 1.1 }} // Animación al pasar el ratón
                whileTap={{ scale: 0.9 }}   // Animación al hacer clic
            >
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: menuOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {menuOpen ? (
                        <FaTimes className="text-2xl text-gray-800 dark:text-white" />
                    ) : (
                        <FaBars className="text-2xl text-gray-800 dark:text-white" />
                    )}
                </motion.div>
            </motion.button>

            {/* Menú desplegable */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20"
                    onClick={closeMenu}
                >
                    <div
                        className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-lg w-4/5 max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col items-center gap-4 text-xl text-gray-800 dark:text-white">
                            {links.map((link) => (
                                <motion.li
                                    className="w-full text-center"
                                    key={link.hash}
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Link
                                        href={link.hash}
                                        className="block py-2"
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default HeaderMobile;
