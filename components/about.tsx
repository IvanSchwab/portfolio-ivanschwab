"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
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
                Sobre mí
            </h2>
            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                Soy <span className="font-bold">Analista en Sistemas</span> titulado y estoy encaminándome a obtener una
                <span className="font-bold"> Ingeniería en Informática</span>. Apasionado por el desarrollo de software, me especializo en la creación de aplicaciones web modernas, con experiencia tanto en el
                <span className="italic"> frontend</span> como en el <span className="italic">backend</span>. Trabajo con tecnologías como
                <span className="underline decoration-[#E88FBF]"> React</span>, <span className="underline decoration-[#E88FBF]">TypeScript</span>,
                <span className="underline decoration-[#E88FBF]"> Java</span>, <span className="underline decoration-[#E88FBF]">C#</span> y <span className="underline decoration-[#E88FBF]">PHP</span>, y aplico principios sólidos de diseño mediante <span className="underline decoration-[#E88FBF]">diagramas UML</span>.
            </p>
            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                Actualmente me desempeño como <span className="text-[#F3B2D1] font-bold">Desarrollador Frontend</span> en
                <span className="font-bold"> Mapaprop</span>, donde diseño y desarrollo sitios web inmobiliarios personalizados según requerimientos específicos de clientes. Utilizo
                <span className="underline decoration-[#E88FBF]"> Figma</span> para la creación de prototipos visuales y tecnologías como
                <span className="underline decoration-[#E88FBF]"> PHP</span>, <span className="underline decoration-[#E88FBF]">TypeScript</span>,
                <span className="underline decoration-[#E88FBF]"> Vue.js</span> y <span className="underline decoration-[#E88FBF]">Tailwind CSS</span> para implementar las interfaces. Me encargo del ciclo completo: toma de requerimientos, diseño, desarrollo y entrega del sitio, en coordinación directa con el equipo técnico.
            </p>

            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                Previamente, trabajé como <span className="text-[#F3B2D1] font-bold">Desarrollador Full Stack</span> en
                <span className="font-bold"> Access Informática</span>, desarrollando una aplicación web para gestionar historiales de chats de una IA. Puedes ver el repositorio del proyecto en este{" "}
                <a
                    href="https://github.com/IvanSchwab/FrontHistorialChats_ProyectoAccess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E88FBF] font-semibold hover:text-[#F76FA4] underline decoration-dashed decoration-[#E88FBF] transition-all"
                >
                    enlace
                </a>. Implementé autenticación con Outlook y usé tecnologías como
                <span className="underline decoration-[#E88FBF]"> React</span>, <span className="underline decoration-[#E88FBF]">TypeScript</span>,
                <span className="underline decoration-[#E88FBF]"> MongoDB</span> y <span className="underline decoration-[#E88FBF]">Node.js</span>.
            </p>

            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl mb-6"
                data-aos="fade-up"
            >
                A lo largo de mi trayectoria también he adquirido experiencia en atención al cliente, perfeccionando mis habilidades para resolver problemas y gestionar relaciones interpersonales. Actualmente administro un sistema de registro digital para pagos de copropietarios, que refleja mi capacidad de organización y precisión técnica.
            </p>

            <p
                className="text-lg sm:text-xl leading-relaxed max-w-4xl"
                data-aos="fade-up"
            >
                Mi objetivo es seguir creciendo en el ámbito del desarrollo de software, enfrentando nuevos retos que me permitan innovar y aportar soluciones tecnológicas que marquen la diferencia.
            </p>
        </section>
    );
}