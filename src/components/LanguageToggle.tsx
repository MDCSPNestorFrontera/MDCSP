'use client';

import { useLanguage } from '@/components/LanguageProvider';

export function LanguageToggle({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { lang, setLang, content } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-2 py-1 text-xs font-semibold uppercase tracking-wide transition ${
        variant === 'dark'
          ? 'border-white/20 bg-white/10 text-white'
          : 'border-slate/20 bg-white text-slate'
      }`}
      role="group"
      aria-label={content.a11y.languageToggle}
    >
      <button
        type="button"
        onClick={() => setLang('es')}
        className={`rounded-full px-2 py-1 transition ${
          lang === 'es'
            ? 'bg-teal text-white shadow'
            : 'text-slate hover:bg-mist'
        }`}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-full px-2 py-1 transition ${
          lang === 'en'
            ? 'bg-teal text-white shadow'
            : 'text-slate hover:bg-mist'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
