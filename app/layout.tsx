import { Inter } from "next/font/google";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Header from "@/components/Header";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Iván Schwab | Portfolio",
  description: "FullStack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#1d1b2f] text-[#f1f0f6] relative min-h-screen flex flex-col justify-center items-center sm:pt-36 dark:bg-[#2f2b3e] dark:text-[#f1f0f6] dark:text-opacity-90 overflow-x-hidden`}
      >
        {/* Fondos decorativos */}
        <div className="bg-[#ff7f7f] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#e6b7b1]"></div>
        <div className="bg-[#f6d8f2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#bfa0b7]"></div>
        <div className="bg-[#1d1b2f] absolute top-[50rem] -z-10 right-[10rem] h-[40rem] w-[55rem] rounded-full blur-[12rem] sm:w-[80rem]"></div>
        <div className="bg-[#f1d1c2] absolute top-[90rem] -z-10 right-[5rem] h-[20rem] w-[25rem] rounded-full blur-[8rem] sm:w-[40rem] dark:bg-[#433c58] hidden sm:block"></div>
        <div className="bg-[#1d1b2f] absolute top-[130rem] -z-10 right-[20rem] h-[50rem] w-[65rem] rounded-full blur-[16rem] sm:w-[100rem] hidden sm:block"></div>
        <div className="bg-[#f3d7d0] absolute top-[170rem] -z-10 left-[25rem] h-[55rem] w-[70rem] rounded-full blur-[18rem] sm:w-[110rem] dark:bg-[#1d1b2f] hidden sm:block"></div>
        <div className="bg-[#e1b7b2] absolute top-[210rem] -z-10 right-[30rem] h-[60rem] w-[75rem] rounded-full blur-[20rem] sm:w-[120rem] dark:bg-[#433c58] hidden sm:block"></div>

        {/* Contenido */}
        <Header />
        <Intro />
        <Divider></Divider>
        <About></About>
        <Divider></Divider>
        <Work></Work>
        <Divider></Divider>
        <Projects></Projects>
        <Divider></Divider>
        <Skills></Skills>
        <Footer></Footer>

        {children}
      </body>
    </html>
  );
}
