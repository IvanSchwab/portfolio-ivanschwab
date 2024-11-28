import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ProyectAccessImg from "@/public/images/ProyectAccess.png";
import ProyectRealStateImg from "@/public/images/ProyectRealState.png";

export const links = [
    {
        id: 1,
        name: "Inicio",
        hash: "#home",
    },
    {
        id: 2,
        name: "Sobre mí",
        hash: "#about",
    },
    {
        id: 3,
        name: "Proyectos",
        hash: "#projects",
    },
    {
        id: 4,
        name: "Habilidades",
        hash: "#skills",
    },
    {
        id: 5,
        name: "Experiencia",
        hash: "#experience",
    },
    {
        id: 6,
        name: "Contacto",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Desarrollador Full Stack",
        location: "Access Informática",
        description:
            "Desarrollé una aplicación web para gestionar y visualizar historiales de chats de una IA, incluyendo autenticación mediante cuentas propias o verificación de Outlook.",
        icon: React.createElement(CgWorkAlt),
        date: "Marzo - Julio 2024",
    },
    {
        title: "Atención al Cliente",
        location: "Empresa de Gestión de Cobranzas",
        description:
            "Gestioné procesos de cobranza, resolviendo pagos pendientes y ofreciendo soluciones personalizadas para regularizar la situación de los clientes.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        title: "Administrador de Datos de Consorcio",
        location: "Autónomo",
        description:
            "Gestiono un sistema digital de registros mensuales de copropietarios, incluyendo datos como nombres, departamentos y montos a abonar.",
        icon: React.createElement(CgWorkAlt),
        date: "Actualmente",
    },
] as const;

export const projectsData = [
    {
        title: "Gestor de Historiales de Chats",
        description:
            "Aplicación web desarrollada para Access Informática, que permite gestionar y visualizar historiales de chats de una IA con autenticación mediante cuentas propias o verificación de Outlook.",
        tags: ["React", "TypeScript", "Node.js", "MongoDB", "Git"],
        imageUrl: ProyectAccessImg,
    },
    {
        title: "Gestor de Propiedades para Inmobiliarias",
        description:
            "Página web diseñada para una inmobiliaria que permite gestionar y almacenar propiedades, brindando a los clientes la posibilidad de realizar consultas y organizar información relevante.",
        tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
        imageUrl: ProyectRealStateImg,
    },
] as const;

export const skillsData = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "C#",
    "Kotlin",
    "Git",
    "MySQL",
    "MongoDB",
    "Java",
    "Spring Boot",
    "Tailwind",
    "APIs REST",
    "WPF",
] as const;
