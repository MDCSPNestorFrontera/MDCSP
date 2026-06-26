import { Metadata } from 'next';
import { getContent, getLangFromSearchParams } from '@/lib/i18n';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { MapPlaceholder } from '@/components/MapPlaceholder';
import { AppShell } from '@/components/AppShell';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}): Promise<Metadata> {
  const lang = getLangFromSearchParams(searchParams);
  const content = getContent(lang);
  const seo = content.seo.pages.contact;
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

export default function ContactPage({
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
            <p className="text-sm uppercase tracking-[0.35em] text-teal/70">{content.contact.title}</p>
            <h1 className="mt-3 text-4xl font-display text-ink md:text-5xl">{content.contact.subtitle}</h1>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
                <h2 className="text-lg font-semibold text-ink">{content.contact.title}</h2>
                <div className="mt-4 space-y-2 text-sm text-slate">
                  <div>
                    {content.clinic.phones.map((phone) => (
                      <p key={phone}>{phone}</p>
                    ))}
                  </div>
                  <a className="block hover:text-ink" href={content.clinic.mapsLink} target="_blank" rel="noreferrer">{content.clinic.address}</a>
                  <p className="font-medium text-ink">{content.clinic.planNote}</p>
                  {content.clinic.email ? <p>{content.clinic.email}</p> : null}
                </div>
                <div className="mt-4 space-y-2 text-xs text-slate/70">
                  {content.clinic.hours.map((item) => (
                    <p key={item.label}>
                      <span className="font-semibold text-ink">{item.label}:</span> {item.value}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <MapPlaceholder title={content.contact.mapTitle} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl font-display text-ink md:text-3xl">{content.contact.form.title}</h2>
          </Reveal>
          <div className="mt-6 rounded-2xl border border-slate/10 bg-white p-6 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>
      </div>
    </AppShell>
  );
}
