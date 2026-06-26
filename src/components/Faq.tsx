'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { Reveal } from '@/components/Reveal';

export function Faq() {
  const { content } = useLanguage();

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <h2 className="text-2xl font-display text-ink md:text-3xl">{content.faq.title}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {content.faq.items.map((item) => (
            <Reveal key={item.question}>
              <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold text-ink">{item.question}</p>
                <p className="mt-2 text-sm text-slate/70">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
