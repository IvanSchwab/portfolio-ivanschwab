"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Divider() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div
            className="bg-gray-200 my-24 h-2 w-10 sm:h-16 sm:w-1 sm:my-24 mx-auto rounded-full"
            data-aos="fade-up"
        />
    );
}