'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { Reveal } from '@/components/Reveal';

export function Testimonials() {
  const { content } = useLanguage();

  return (
    <section className="bg-mist py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <h2 className="text-2xl font-display text-ink md:text-3xl">{content.testimonials.title}</h2>
          <p className="mt-2 text-sm text-slate/70">{content.testimonials.note}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.testimonials.items.map((item) => (
            <Reveal key={item.name}>
              <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
                <p className="text-sm text-slate">{item.quote}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal/70">
                  {item.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
