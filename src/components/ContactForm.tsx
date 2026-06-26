'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

type FieldName = 'name' | 'phone' | 'email' | 'message';

export function ContactForm() {
  const { content } = useLanguage();
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!values.name.trim()) nextErrors.name = content.contact.form.error;
    if (!values.phone.trim()) nextErrors.phone = content.contact.form.error;
    if (!values.email.trim() || !values.email.includes('@')) nextErrors.email = content.contact.form.error;
    if (!values.message.trim()) nextErrors.message = content.contact.form.error;
    return nextErrors;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setValues({ name: '', phone: '', email: '', message: '' });
  };

  const onChange = (field: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate">
          {content.contact.form.fields.name}
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange('name')}
            className="mt-2 w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-ink"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" className="mt-2 block text-xs text-red-600">
              {content.contact.form.error}
            </span>
          )}
        </label>
        <label className="text-sm text-slate">
          {content.contact.form.fields.phone}
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={onChange('phone')}
            className="mt-2 w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-ink"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className="mt-2 block text-xs text-red-600">
              {content.contact.form.error}
            </span>
          )}
        </label>
        <label className="text-sm text-slate md:col-span-2">
          {content.contact.form.fields.email}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange('email')}
            className="mt-2 w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-ink"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="mt-2 block text-xs text-red-600">
              {content.contact.form.error}
            </span>
          )}
        </label>
        <label className="text-sm text-slate md:col-span-2">
          {content.contact.form.fields.message}
          <textarea
            name="message"
            value={values.message}
            onChange={onChange('message')}
            rows={4}
            className="mt-2 w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-ink"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <span id="message-error" className="mt-2 block text-xs text-red-600">
              {content.contact.form.error}
            </span>
          )}
        </label>
      </div>
      <p className="text-xs text-slate/70">{content.contact.form.disclaimer}</p>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate"
        >
          {content.contact.form.submit}
        </button>
        {status === 'success' && (
          <p className="text-sm text-teal" role="status">
            {content.contact.form.success}
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600" role="alert">
            {content.contact.form.error}
          </p>
        )}
      </div>
    </form>
  );
}
