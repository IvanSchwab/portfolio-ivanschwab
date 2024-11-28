import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Intro from "@/components/intro";
import Divider from "@/components/divider";
import About from "@/components/about";
import Skills from "@/components/Skills";

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
        className={`${inter.className} bg-[#1d1b2f] text-[#f1f0f6] relative min-h-screen flex flex-col justify-center items-center sm:pt-36 dark:bg-[#2f2b3e] dark:text-[#f1f0f6] dark:text-opacity-90`}
      >
        {/* Fondos decorativos */}
        <div className="bg-[#ff7f7f] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#e6b7b1]"></div>
        <div className="bg-[#f6d8f2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#bfa0b7]"></div>

        {/* Contenido principal */}
        <Header />
        <Intro />
        <Divider></Divider>
        <About></About>
        <Divider></Divider>
        <Skills></Skills>
        <Divider></Divider>

        {children}
      </body>
    </html>
  );
}
