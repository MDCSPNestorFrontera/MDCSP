import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getContent, getLangFromSearchParams } from '@/lib/i18n';
import { Reveal } from '@/components/Reveal';
import { ServiceGrid } from '@/components/ServiceGrid';
import { OfficePanel } from '@/components/OfficePanel';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { ContactCTA } from '@/components/ContactCTA';
import { AppShell } from '@/components/AppShell';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}): Promise<Metadata> {
  const lang = getLangFromSearchParams(searchParams);
  const content = getContent(lang);
  const seo = content.seo.pages.home;
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

export default function HomePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const lang = getLangFromSearchParams(searchParams);
  const content = getContent(lang);

  return (
    <AppShell lang={lang}>
      <div>
      <section className="relative overflow-hidden bg-hero pb-20 pt-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-mist" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-teal/70">{content.hero.featureNote}</p>
            <h1 className="mt-4 text-4xl font-display text-ink md:text-5xl lg:text-6xl">
              {content.hero.headline}
            </h1>
            <p className="mt-4 text-base text-slate/80 md:text-lg">
              {content.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={content.clinic.phoneLink}
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
              >
                {content.hero.primaryCta}
              </a>
              <Link
                href={`/about?lang=${lang}`}
                className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
              >
                {content.hero.secondaryCta}
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="glass relative overflow-hidden rounded-2xl p-3 shadow-soft">
              <Image
                src="/assets/dr-nestor-frontera.jpg"
                alt={content.hero.imageAlt}
                width={520}
                height={520}
                className="aspect-[4/5] h-full w-full rounded-xl object-cover object-top"
                priority
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/92 px-4 py-3 text-xs font-semibold text-ink shadow-card">
                {content.clinic.name}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl font-display text-ink md:text-4xl">{content.trust.title}</h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {content.trust.items.map((item) => (
                <Reveal key={item.label}>
                  <div className="rounded-2xl border border-slate/10 bg-white p-5 shadow-card">
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="mt-2 text-sm text-slate/70">{item.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <OfficePanel />
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-teal/70">{content.servicesPreview.title}</p>
            <h2 className="mt-3 text-3xl font-display text-ink md:text-4xl">
              {content.servicesPreview.subtitle}
            </h2>
          </Reveal>
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-display text-ink md:text-4xl">{content.why.title}</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {content.why.points.map((point) => (
              <Reveal key={point.title}>
                <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm text-slate/70">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Faq />
      <ContactCTA />
      </div>
    </AppShell>
  );
}
