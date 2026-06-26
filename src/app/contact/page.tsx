import { Metadata } from 'next';
import { AppShell } from '@/components/AppShell';
import { ContactPageContent } from '@/components/pages/ContactPageContent';
import { defaultLang, getContent } from '@/lib/i18n';
import { assetPath } from '@/lib/paths';

const content = getContent(defaultLang);
const seo = content.seo.pages.contact;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: 'es_PR',
    images: [
      {
        url: assetPath('/assets/dr-nestor-frontera.jpg'),
        width: 1200,
        height: 630,
        alt: content.hero.imageAlt,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <AppShell lang={defaultLang}>
      <ContactPageContent />
    </AppShell>
  );
}
