'use client';

import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/components/LanguageProvider';
import { LocalizedLink } from '@/components/LocalizedLink';

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-slate/10 bg-mist">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-ink">{content.clinic.name}</p>
          <p className="mt-2 text-sm text-slate/70">{content.clinic.tagline}</p>
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </div>
        <div className="text-sm text-slate">
          <p className="font-semibold text-ink">{content.footer.contactLabel}</p>
          <a className="mt-2 block hover:text-ink" href={content.clinic.mapsLink} target="_blank" rel="noreferrer">{content.clinic.address}</a>
          <div className="mt-2 space-y-1">
            {content.clinic.phones.map((phone) => (
              <p key={phone}>{phone}</p>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate/70">{content.clinic.planNote}</p>
          {content.clinic.email ? <p className="mt-2">{content.clinic.email}</p> : null}
        </div>
        <div className="text-sm text-slate">
          <p className="font-semibold text-ink">{content.footer.hoursLabel}</p>
          <ul className="mt-2 space-y-2">
            {content.clinic.hours.map((item) => (
              <li key={item.label}>
                <span className="font-medium text-ink">{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate/70">
            <LocalizedLink href="/" className="hover:text-ink">
              {content.nav.home}
            </LocalizedLink>
            <LocalizedLink href="/about" className="hover:text-ink">
              {content.nav.about}
            </LocalizedLink>
            <LocalizedLink href="/services" className="hover:text-ink">
              {content.nav.services}
            </LocalizedLink>
            <LocalizedLink href="/contact" className="hover:text-ink">
              {content.nav.contact}
            </LocalizedLink>
          </div>
        </div>
      </div>
      <div className="border-t border-slate/10 bg-white py-4 text-center text-xs text-slate/60">
        © 2026 {content.clinic.name}. {content.footer.rights}
      </div>
    </footer>
  );
}
