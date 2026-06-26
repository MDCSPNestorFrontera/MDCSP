'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Lang, defaultLang, getContent, isLang } from '@/lib/i18n';

interface LanguageContextValue {
  lang: Lang;
  content: ReturnType<typeof getContent>;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(fallback?: Lang) {
  if (typeof window === 'undefined') return fallback ?? defaultLang;
  const params = new URLSearchParams(window.location.search);
  const langFromQuery = params.get('lang');
  if (isLang(langFromQuery)) return langFromQuery;
  const stored = window.localStorage.getItem('lang');
  return isLang(stored) ? stored : fallback ?? defaultLang;
}

export function LanguageProvider({ children, initialLang }: { children: React.ReactNode; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? defaultLang);

  useEffect(() => {
    setLangState(getInitialLang(initialLang));
  }, [initialLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set('lang', nextLang);
    window.history.pushState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }, []);

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
