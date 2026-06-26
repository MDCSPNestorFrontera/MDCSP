'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { Reveal } from '@/components/Reveal';

export function ContactCTA() {
  const { content } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl bg-ink px-8 py-12 text-white md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-display">{content.cta.title}</h2>
              <p className="mt-3 text-sm text-white/80">{content.cta.subtitle}</p>
            </div>
            <a
              href={content.clinic.phoneLink}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand md:mt-0"
            >
              {content.cta.button}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
