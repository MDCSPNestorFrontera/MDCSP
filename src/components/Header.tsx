'use client';

import { LocalizedLink } from '@/components/LocalizedLink';
import { useEffect, useState } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/components/LanguageProvider';

export function Header() {
  const { content } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '/', label: content.nav.home },
    { href: '/about', label: content.nav.about },
    { href: '/services', label: content.nav.services },
    { href: '/contact', label: content.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
      >
        {content.header.skipToContent}
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <LocalizedLink href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
            <span className="text-sm font-semibold">{content.clinic.initials}</span>
          </div>
          <div className="hidden text-left md:block">
            <p className="text-sm font-semibold text-ink">{content.clinic.name}</p>
            <p className="text-xs text-slate/70">{content.clinic.tagline}</p>
          </div>
        </LocalizedLink>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
          {navItems.map((item) => (
            <LocalizedLink key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </LocalizedLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate/20 bg-white px-3 py-2 text-sm font-semibold text-ink"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? content.header.menuClose : content.header.menuOpen}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="mx-auto w-full max-w-6xl px-6 pb-6">
          <div className="rounded-2xl border border-slate/10 bg-white/95 p-5 shadow-sm">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate">
              {navItems.map((item) => (
                <LocalizedLink
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </LocalizedLink>
              ))}
            </nav>
            <div className="mt-4">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
