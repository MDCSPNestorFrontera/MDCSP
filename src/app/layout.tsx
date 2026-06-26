import './globals.css';

import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { siteContent } from '@/content/siteContent';
import { assetPath } from '@/lib/paths';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const defaultSeo = siteContent.es.seo;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: defaultSeo.pages.home.title,
  description: defaultSeo.pages.home.description,
  openGraph: {
    title: defaultSeo.openGraph.title,
    description: defaultSeo.openGraph.description,
    type: 'website',
    locale: 'es_PR',
  },
  alternates: {
    languages: {
      'es-PR': `${assetPath('/')}?lang=es`,
      'en-US': `${assetPath('/')}?lang=en`,
    },
  },
  icons: {
    icon: assetPath('/icon.svg'),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-white text-slate">
        {children}
      </body>
    </html>
  );
}
