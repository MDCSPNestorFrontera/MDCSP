'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

interface LocalizedLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function LocalizedLink({ href, className, children, onClick }: LocalizedLinkProps) {
  const { lang } = useLanguage();
  const url = `${href}?lang=${lang}`;

  return (
    <Link href={url} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
