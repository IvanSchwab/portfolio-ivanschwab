"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      const pathWithoutLocale = pathname?.replace(`/${locale}`, '') || '';
      router.replace(`/${newLocale}${pathWithoutLocale}`);
    });
  };

  return (
    <div className="fixed top-6 right-6 z-[1000] flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <button
        onClick={() => switchLocale('es')}
        disabled={isPending}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          locale === 'es'
            ? 'bg-gradient-to-r from-[#7441c7] to-[#E88FBF] text-white shadow-lg scale-105'
            : 'text-[#F1F0F6] hover:bg-white/10 hover:scale-105'
        }`}
        aria-label="Cambiar a español"
      >
        🇦🇷 ES
      </button>
      <div className="w-px h-6 bg-white/30"></div>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          locale === 'en'
            ? 'bg-gradient-to-r from-[#7441c7] to-[#E88FBF] text-white shadow-lg scale-105'
            : 'text-[#F1F0F6] hover:bg-white/10 hover:scale-105'
        }`}
        aria-label="Switch to English"
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
