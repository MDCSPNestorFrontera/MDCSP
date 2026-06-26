import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { Lang } from '@/lib/i18n';

export function AppShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <LanguageProvider initialLang={lang}>
      <Header />
      <main id="main" className="pt-24">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
