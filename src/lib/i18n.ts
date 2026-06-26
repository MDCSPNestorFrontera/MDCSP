import { Lang, languages, siteContent } from '@/content/siteContent';

export type { Lang };

export const defaultLang: Lang = 'es';

export function isLang(value: string | null | undefined): value is Lang {
  return languages.includes((value || '') as Lang);
}

export function getLangFromSearchParams(searchParams?: Record<string, string | string[] | undefined>): Lang {
  const raw = searchParams?.lang;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return isLang(value) ? value : defaultLang;
}

export function getContent(lang: Lang) {
  return siteContent[lang];
}
