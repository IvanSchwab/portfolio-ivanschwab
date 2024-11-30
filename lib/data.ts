import React from "react";
import { CgWorkAlt } from "react-icons/cg";


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
        id: 5,
        name: "Experiencia",
        hash: "#experience",
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
        imageUrl: "/images/ProyectAccess.png",
        imageMobileUrl: "/images/ProyectAccessMobil1.png",
        link: "https://github.com/IvanSchwab/FrontHistorialChats_ProyectoAccess",
    },
    {
        title: "Gestor de Propiedades para Inmobiliarias",
        description:
            "Página web diseñada para una inmobiliaria que permite gestionar y almacenar propiedades, brindando a los clientes la posibilidad de realizar consultas y organizar información relevante.",
        tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
        imageUrl: "/images/ProyectRealState.png",
        imageMobileUrl: "/images/RealStateMobile.png",
        link: "https://github.com/IvanSchwab/Real-State-App",
    },
] as const;

export const skillsData = [
    { name: "HTML5", icon: "/icons/html-5-svgrepo-com.svg" },
    { name: "CSS3", icon: "/icons/css-3-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
    { name: "TypeScript", icon: "/icons/typescript-official-svgrepo-com.svg" },
    { name: "React", icon: "/icons/react-svgrepo-com.svg" },
    { name: "Vue", icon: "/icons/vue-svgrepo-com.svg" },
    { name: "Node.js", icon: "/icons/node-js-svgrepo-com.svg" },
    { name: "C#", icon: "/icons/csharp-svgrepo-com.svg" },
    { name: "Kotlin", icon: "/icons/kotlin-svgrepo-com.svg" },
    { name: "Git", icon: "/icons/github-142-svgrepo-com.svg" },
    { name: "MySQL", icon: "/icons/mysql-svgrepo-com.svg" },
    { name: "MongoDB", icon: "/icons/mongodb-svgrepo-com.svg" },
    { name: "Java", icon: "/icons/java-svgrepo-com.svg" },
    { name: "Spring Boot", icon: "/icons/spring-svgrepo-com.svg" },
    { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
    { name: "APIs REST", icon: "/icons/rest-api-svgrepo-com.svg" },
    { name: "WPF", icon: "/icons/windows-applications-svgrepo-com.svg" },
] as const;
