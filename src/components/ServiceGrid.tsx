'use client';

import { Icon } from '@/components/Icon';
import { useLanguage } from '@/components/LanguageProvider';
import { Reveal } from '@/components/Reveal';

export function ServiceGrid() {
  const { content } = useLanguage();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {content.services.map((service) => (
        <Reveal key={service.id} className="h-full">
          <div className="h-full rounded-2xl border border-slate/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-teal">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
            <p className="mt-2 text-sm text-slate/70">{service.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
