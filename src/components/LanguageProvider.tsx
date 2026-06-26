'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Lang, defaultLang, getContent, isLang } from '@/lib/i18n';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface LanguageContextValue {
  lang: Lang;
  content: ReturnType<typeof getContent>;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(searchParam: string | null, fallback?: Lang) {
  if (isLang(searchParam)) return searchParam;
  if (typeof window === 'undefined') return defaultLang;
  const stored = window.localStorage.getItem('lang');
  return isLang(stored) ? stored : fallback ?? defaultLang;
}

export function LanguageProvider({ children, initialLang }: { children: React.ReactNode; initialLang?: Lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [lang, setLangState] = useState<Lang>(initialLang ?? defaultLang);

  useEffect(() => {
    const langFromQuery = searchParams.get('lang');
    setLangState(getInitialLang(langFromQuery, initialLang));
  }, [searchParams, initialLang]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dataset.lang = lang;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.set("lang", nextLang);
    router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  const value = useMemo(
    () => ({ lang, content: getContent(lang), setLang }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
