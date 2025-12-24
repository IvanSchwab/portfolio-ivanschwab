"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import clsx from "clsx";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === "es" ? "en" : "es";
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale, scroll: false });
        });
    };

    return (
        <div
            className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-lg cursor-pointer"
            onClick={toggleLocale}
        >
            <button
                type="button"
                disabled={isPending}
                className={clsx(
                    "px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 pointer-events-none",
                    locale === "es"
                        ? "bg-white text-[#7441c7] shadow-sm"
                        : "text-white/80"
                )}
            >
                ES
            </button>
            <button
                type="button"
                disabled={isPending}
                className={clsx(
                    "px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 pointer-events-none",
                    locale === "en"
                        ? "bg-white text-[#7441c7] shadow-sm"
                        : "text-white/80"
                )}
            >
                EN
            </button>
        </div>
    );
}
