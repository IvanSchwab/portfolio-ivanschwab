"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('about');

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <section
            id="about"
            className="py-12 px-4 sm:px-8 flex flex-col items-center text-center text-[#ffeff4]"
        >
            <h2
                className="text-4xl sm:text-5xl font-semibold text-[#E88FBF] mb-8"
                data-aos="fade-up"
            >
                {t('title')}
            </h2>
            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                {t('paragraph1')}
            </p>
            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                {t('paragraph2')}
            </p>

            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                {t('paragraph3')}{" "}
                <a
                    href="https://github.com/IvanSchwab/FrontHistorialChats_ProyectoAccess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E88FBF] font-semibold hover:text-[#F76FA4] underline decoration-dashed decoration-[#E88FBF] transition-all"
                >
                    {t('link')}
                </a>. {t('paragraph4')}
            </p>

            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                {t('paragraph5')}
            </p>

            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl"
                data-aos="fade-up"
            >
                {t('paragraph6')}
            </p>
        </section>
    );
}