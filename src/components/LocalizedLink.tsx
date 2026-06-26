'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useSearchParams } from 'next/navigation';

interface LocalizedLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function LocalizedLink({ href, className, children, onClick }: LocalizedLinkProps) {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set('lang', lang);
  const url = `${href}?${params.toString()}`;

  return (
    <Link href={url} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
