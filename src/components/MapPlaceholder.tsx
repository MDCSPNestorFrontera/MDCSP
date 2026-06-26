'use client';

import { useLanguage } from '@/components/LanguageProvider';

export function MapPlaceholder({ title }: { title: string }) {
  const { content } = useLanguage();

  return (
    <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <a
        href={content.clinic.mapsLink}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex h-48 w-full items-center justify-center rounded-xl border border-slate/10 bg-mist p-6 text-center text-sm font-semibold text-ink transition hover:border-teal/40 hover:bg-white"
      >
        {content.clinic.address}
      </a>
      <p className="mt-3 text-xs text-slate/60">{content.contact.mapNote}</p>
    </div>
  );
}
