'use client';

import { useLanguage } from '@/components/LanguageProvider';

export function MapPlaceholder({ title }: { title: string }) {
  const { content } = useLanguage();

  return (
    <div className="rounded-2xl border border-dashed border-slate/30 bg-white p-6">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <div className="mt-4 h-48 w-full rounded-xl bg-gradient-to-br from-mist to-white"></div>
      <p className="mt-3 text-xs text-slate/60">{content.contact.mapNote}</p>
    </div>
  );
}
