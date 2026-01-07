"use client";

/**
 * Divider component - simple visual separator between sections.
 * AOS animation is handled by the parent AOSProvider.
 */
export default function Divider() {
    return (
        <div
            className="bg-gray-200 my-24 h-2 w-10 sm:h-16 sm:w-1 sm:my-24 mx-auto rounded-full"
            data-aos="fade-up"
        />
    );
}