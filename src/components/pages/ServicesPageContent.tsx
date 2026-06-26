'use client';

import { Reveal } from '@/components/Reveal';
import { ServiceGrid } from '@/components/ServiceGrid';
import { useLanguage } from '@/components/LanguageProvider';

export function ServicesPageContent() {
  const { content } = useLanguage();

  return (
    <div>
      <section className="bg-mist py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-teal/70">{content.servicesPage.title}</p>
            <h1 className="mt-3 text-4xl font-display text-ink md:text-5xl">{content.servicesPage.subtitle}</h1>
          </Reveal>
          <div className="mt-10">
            <ServiceGrid />
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-slate/70">{content.servicesPage.disclaimer}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
