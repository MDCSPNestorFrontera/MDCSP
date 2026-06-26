import React from 'react';

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="text-sm uppercase tracking-[0.3em] text-teal/70">{title}</p>
      {subtitle && (
        <h2 className="mt-3 text-3xl font-display text-ink md:text-4xl">{subtitle}</h2>
      )}
    </div>
  );
}
