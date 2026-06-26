import Image from 'next/image';
import { Metadata } from 'next';
import { getContent, getLangFromSearchParams } from '@/lib/i18n';
import { Reveal } from '@/components/Reveal';
import { AppShell } from '@/components/AppShell';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}): Promise<Metadata> {
  const lang = getLangFromSearchParams(searchParams);
  const content = getContent(lang);
  const seo = content.seo.pages.about;
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
          alt: content.about.headshotAlt,
        },
      ],
    },
  };
}

export default function AboutPage({
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
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative">
            <div className="glass rounded-2xl p-3 shadow-soft">
              <Image
                src="/assets/dr-nestor-frontera.jpg"
                alt={content.about.headshotAlt}
                width={520}
                height={640}
                className="aspect-[4/5] h-full w-full rounded-xl object-cover object-top"
                priority
              />
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.35em] text-teal/70">{content.about.title}</p>
              <h1 className="mt-3 text-4xl font-display text-ink md:text-5xl">{content.about.name}</h1>
              <p className="mt-2 text-sm font-semibold text-slate/70">{content.about.specialty}</p>
            </Reveal>
            <Reveal>
              <p className="text-base text-slate/80">{content.about.intro}</p>
            </Reveal>
            <Reveal>
              <div className="space-y-3 text-sm text-slate/70">
                {content.about.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-display text-ink md:text-4xl">{content.about.title}</h2>
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold text-ink">{content.about.sections.credentials}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate/70">
                  {content.about.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold text-ink">{content.about.sections.values}</h3>
                <div className="mt-4 space-y-3 text-sm text-slate/70">
                  {content.about.values.map((value) => (
                    <div key={value.title}>
                      <p className="font-semibold text-ink">{value.title}</p>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-10">
            <Reveal>
              <div className="rounded-2xl border border-slate/10 bg-mist p-6">
                <h3 className="text-lg font-semibold text-ink">{content.about.sections.timeline}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {content.about.timeline.map((item) => (
                    <div key={item.year} className="rounded-xl bg-white p-4 shadow-card">
                      <p className="text-sm font-semibold text-ink">{item.year}</p>
                      <p className="mt-2 text-sm text-slate/70">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      </div>
    </AppShell>
  );
}
