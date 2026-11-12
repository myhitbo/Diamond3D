'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import type { Dict } from '@/i18n/dictionaries';
import type { ConfigState, Locale } from '@/lib/configurator/schema';
import { checkPhotos, PHOTO_LIMITS, type QuoteError } from '@/lib/quote/request';
import styles from './Configurator.module.css';

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string };

export const QUOTE_ENDPOINT = '/api/devis';

function errorMessage(t: Dict['quote'], e: (QuoteError | { code: string }) | undefined): string {
  if (!e) return t.errors.send_failed;
  if (e.code === 'photos' && 'reason' in e) return t.errors.photos[e.reason];
  if (e.code === 'invalid' && 'fields' in e && e.fields.length) {
    const names = e.fields.map((f) => t.fieldNames[f as keyof Dict['quote']['fieldNames']]).filter(Boolean);
    if (names.length) return t.errors.invalidFields(names.join(', '));
  }
  return t.errors[e.code as keyof Omit<Dict['quote']['errors'], 'photos' | 'invalidFields'>] ?? t.errors.send_failed;
}

export default function QuoteForm({
  modelId,
  locale,
  state,
  t,
  onClose,
}: {
  modelId: string;
  locale: Locale;
  state: ConfigState;
  t: Dict['quote'];
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const first = useRef<HTMLInputElement>(null);
  const done = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    first.current?.focus({ preventScroll: true });
    first.current?.closest('section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
  useEffect(() => {
    if (status.kind === 'sent') done.current?.focus();
  }, [status.kind]);

  async function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const photos = data.getAll('photos').filter((f): f is File => f instanceof File && f.size > 0);
    const photoError = checkPhotos(photos.map((f) => ({ name: f.name, type: f.type, size: f.size })));
    if (photoError) return setStatus({ kind: 'error', message: errorMessage(t, photoError) });
    data.set('modelId', modelId);
    data.set('locale', locale);
    data.set('config', JSON.stringify(state));
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch(QUOTE_ENDPOINT, { method: 'POST', body: data });
      const body = (await res.json().catch(() => null)) as { ok: boolean; error?: QuoteError } | null;
      if (res.ok && body?.ok) {
        form.reset();
        setStatus({ kind: 'sent' });
      } else setStatus({ kind: 'error', message: errorMessage(t, body?.error) });
    } catch {
      setStatus({ kind: 'error', message: t.errors.network });
    }
  }

  if (status.kind === 'sent') {
    return (
      <section className={styles.quote} aria-labelledby="quote-title">
        <h2 id="quote-title" className={styles.summaryTitle}>
          {t.successTitle}
        </h2>
        <p ref={done} tabIndex={-1} role="status" className={styles.value}>
          {t.successText}
        </p>
        <button type="button" className={styles.textButton} onClick={onClose}>
          {t.close}
        </button>
      </section>
    );
  }

  const sending = status.kind === 'sending';
  const mb = (n: number) => Math.round(n / 1024 / 1024);
  return (
    <section className={styles.quote} aria-labelledby="quote-title">
      <h2 id="quote-title" className={styles.summaryTitle}>
        {t.title}
      </h2>
      <p className={styles.note}>{t.intro}</p>
      <form className={styles.form} onSubmit={submit} noValidate={false}>
        <label className={styles.label}>
          {t.fieldNames.name} *
          <input ref={first} className={styles.input} name="name" autoComplete="name" required minLength={2} maxLength={100} />
        </label>
        <label className={styles.label}>
          {t.fieldNames.email} *
          <input className={styles.input} name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
        <label className={styles.label}>
          {t.fieldNames.phone}
          <input className={styles.input} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label className={styles.label}>
          {t.fieldNames.ringSize}
          <input className={styles.input} name="ringSize" maxLength={40} placeholder={t.ringSizePlaceholder} />
        </label>
        <label className={styles.label}>
          {t.fieldNames.message}
          <textarea className={styles.input} name="message" rows={4} maxLength={3000} placeholder={t.messagePlaceholder} />
        </label>
        <label className={styles.label}>
          {t.fieldNames.photos}
          <input className={styles.file} name="photos" type="file" multiple accept={PHOTO_LIMITS.types.join(',')} />
          <span className={styles.note}>{t.photosHint(PHOTO_LIMITS.maxCount, mb(PHOTO_LIMITS.maxBytesEach), mb(PHOTO_LIMITS.maxBytesTotal))}</span>
        </label>
        {/* Champ piège : invisible pour les personnes, rempli par les robots. */}
        <label className={styles.trap} aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className={styles.check}>
          <input name="consent" type="checkbox" required />
          <span>{t.fieldNames.consent}</span>
        </label>
        <label className={styles.check}>
          <input name="publishConsent" type="checkbox" />
          <span>{t.fieldNames.publishConsent}</span>
        </label>
        {status.kind === 'error' && (
          <p className={styles.error} role="alert">
            {status.message}
          </p>
        )}
        <button type="submit" className={styles.primary} disabled={sending} aria-busy={sending}>
          {sending ? t.sending : t.send}
        </button>
        <button type="button" className={styles.textButton} onClick={onClose} disabled={sending}>
          {t.cancel}
        </button>
      </form>
    </section>
  );
}
