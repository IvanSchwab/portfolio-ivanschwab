"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * AOSProvider initializes the AOS (Animate On Scroll) library once at the app level.
 * This prevents hydration mismatches by ensuring AOS only runs on the client after mount.
 */
export default function AOSProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return <>{children}</>;
}
