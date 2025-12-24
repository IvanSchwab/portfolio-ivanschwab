"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

type HeaderMobileProps = {
    navLinks: { hash: string; key: string }[];
    className?: string;
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({ navLinks }) => {
    const t = useTranslations('nav');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        const target = document.querySelector(hash) as HTMLElement;
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 95,
                behavior: "smooth",
            });
        }
        closeMenu();
    };

    return (
        <div className="md:hidden">
            {/* Animated Burger Menu Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-4 left-4 z-[1001] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 active:scale-95 transition-all duration-200"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    {/* Top line */}
                    <span
                        className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                            menuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                    />
                    {/* Middle line */}
                    <span
                        className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                            menuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    {/* Bottom line */}
                    <span
                        className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                            menuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                    />
                </div>
            </button>

            {/* Backdrop */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
                        onClick={closeMenu}
                    />
                )}
            </AnimatePresence>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-16 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl z-[1000] overflow-hidden"
                    >
                        <nav className="px-6 py-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.hash}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.hash}
                                        onClick={(e) => scrollToSection(e, link.hash)}
                                        className="block py-4 text-lg font-medium text-white hover:text-[#E88FBF] active:bg-white/5 active:scale-[0.98] border-b border-white/10 last:border-0 transition-all duration-200"
                                    >
                                        {t(link.key as any)}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeaderMobile;
