'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { Reveal } from '@/components/Reveal';

export function OfficePanel() {
  const { content } = useLanguage();

  return (
    <Reveal>
      <div className="glass rounded-2xl p-6 shadow-card">
        <h3 className="text-lg font-semibold text-ink">{content.officePanel.title}</h3>
        <div className="mt-4 space-y-2 text-sm text-slate">
          <a className="block hover:text-ink" href={content.clinic.mapsLink} target="_blank" rel="noreferrer">{content.clinic.address}</a>
          <p>{content.clinic.phone}</p>
          <p>{content.clinic.parkingNote}</p>
        </div>
        <div className="mt-4 space-y-2 text-xs text-slate/70">
          {content.clinic.hours.map((item) => (
            <p key={item.label}>
              <span className="font-semibold text-ink">{item.label}:</span> {item.value}
            </p>
          ))}
        </div>
        <a
          href={content.clinic.phoneLink}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate"
        >
          {content.officePanel.callLabel}
        </a>
      </div>
    </Reveal>
  );
}
