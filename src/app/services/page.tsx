import { Metadata } from 'next';
import { getContent, getLangFromSearchParams } from '@/lib/i18n';
import { Reveal } from '@/components/Reveal';
import { ServiceGrid } from '@/components/ServiceGrid';
import { AppShell } from '@/components/AppShell';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}): Promise<Metadata> {
  const lang = getLangFromSearchParams(searchParams);
  const content = getContent(lang);
  const seo = content.seo.pages.services;
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: lang === 'es' ? 'es_PR' : 'en_US',
      images: [
        {
          url: '/assets/dr-nestor-frontera.jpg',
          width: 1200,
          height: 630,
          alt: content.hero.imageAlt,
        },
      ],
    },
  };
}

export default function ServicesPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const lang = getLangFromSearchParams(searchParams);
  const content = getContent(lang);

  return (
    <AppShell lang={lang}>
      <div>
      <section className="bg-mist py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-teal/70">{content.servicesPage.title}</p>
            <h1 className="mt-3 text-4xl font-display text-ink md:text-5xl">{content.servicesPage.subtitle}</h1>
          </Reveal>
          <div className="mt-10">
            <ServiceGrid />
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-slate/70">{content.servicesPage.disclaimer}</p>
          </Reveal>
        </div>
      </section>
      </div>
    </AppShell>
  );
}
