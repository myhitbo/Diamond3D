'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ErrorSummary, FieldMessages, collectErrors, commonFieldError, fieldAria, photoFiles, useFieldErrors } from '@/components/site/FormFeedback';
import { TRANSFORMATION } from '@/content/transformation';
import { DICTIONARIES, type Dict } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/configurator/schema';
import { checkPhotos, PHOTO_LIMITS, type QuoteError } from '@/lib/quote/request';
import { buildTransformationWhatsApp } from '@/lib/quote/transformation';
import { buildWhatsAppLink, normalizeWhatsAppNumber } from '@/lib/quote/whatsapp';
import { privacyPath } from '@/lib/routes';
import styles from '@/components/configurator/Configurator.module.css';

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string };

const PREFIX = 'transformation';

export const TRANSFORMATION_ENDPOINT = '/api/transformation';

// Numéro WhatsApp de l'atelier (variable publique, fixée au build). Absent : le bouton WhatsApp n'apparaît pas.
const WHATSAPP = normalizeWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);

/** Les textes sont lus ici, côté client : un dictionnaire contient des fonctions, non transmissibles depuis une page serveur. */
export default function TransformationForm({ locale }: { locale: Locale }) {
  const t = DICTIONARIES[locale].quote;
  const c = TRANSFORMATION[locale];
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const done = useRef<HTMLParagraphElement>(null);
  const { errors, summary, attempt, formRef, check, recheck } = useFieldErrors((form) => {
    const photoError = checkPhotos(photoFiles(form).map((f) => ({ name: f.name, type: f.type, size: f.size })));
    return collectErrors(form, (name, reason) => (name === 'jewel' ? c.jewelError : (commonFieldError(t, name, reason) ?? t.errors.invalid)), {
      photos: photoError ? errorMessage(photoError) : undefined,
    });
  });

  useEffect(() => {
    if (status.kind === 'sent') done.current?.focus();
  }, [status.kind]);

  function errorMessage(e: (QuoteError | { code: string }) | undefined): string {
    if (!e) return t.errors.send_failed;
    if (e.code === 'photos' && 'reason' in e) return t.errors.photos[e.reason];
    if (e.code === 'invalid' && 'fields' in e && e.fields.length) {
      const own: Record<string, string> = { jewel: c.fields.jewel, wish: c.fields.wish };
      const names = e.fields.map((f) => own[f] ?? t.fieldNames[f as keyof Dict['quote']['fieldNames']]).filter(Boolean);
      if (names.length) return t.errors.invalidFields(names.join(', '));
    }
    return t.errors[e.code as keyof Omit<Dict['quote']['errors'], 'photos' | 'invalidFields'>] ?? t.errors.send_failed;
  }

  async function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    if (!check(form)) return setStatus({ kind: 'idle' });
    const data = new FormData(form);
    data.set('locale', locale);
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch(TRANSFORMATION_ENDPOINT, { method: 'POST', body: data });
      const body = (await res.json().catch(() => null)) as { ok: boolean; error?: QuoteError } | null;
      if (res.ok && body?.ok) {
        form.reset();
        setStatus({ kind: 'sent' });
      } else setStatus({ kind: 'error', message: errorMessage(body?.error) });
    } catch {
      setStatus({ kind: 'error', message: t.errors.network });
    }
  }

  /** Ouvre WhatsApp avec la description déjà saisie ; l'envoi et les photos restent à la main de la personne. */
  function openWhatsApp(form: HTMLFormElement) {
    if (!WHATSAPP) return;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '');
    window.open(buildWhatsAppLink(WHATSAPP, buildTransformationWhatsApp({ name: get('name'), jewel: get('jewel'), wish: get('wish') })), '_blank', 'noopener');
  }

  if (status.kind === 'sent') {
    return (
      <section className={styles.quote} aria-labelledby="transformation-form-title">
        <h2 id="transformation-form-title" className={styles.summaryTitle}>
          {t.successTitle}
        </h2>
        <p ref={done} tabIndex={-1} role="status" className={styles.value}>
          {c.successText}
        </p>
      </section>
    );
  }

  const sending = status.kind === 'sending';
  const mb = (n: number) => Math.round(n / 1024 / 1024);
  return (
    <section className={styles.quote} aria-labelledby="transformation-form-title">
      <h2 id="transformation-form-title" className={styles.summaryTitle}>
        {c.formTitle}
      </h2>
      <p className={styles.note}>{c.formIntro}</p>
      <p className={styles.note}>{t.requiredNote}</p>
      <form ref={formRef} className={styles.form} onSubmit={submit} onChange={recheck} noValidate>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            {t.fieldNames.name} *
            <input className={styles.input} name="name" autoComplete="name" required minLength={2} maxLength={100} {...fieldAria(PREFIX, 'name', errors)} />
          </label>
          <FieldMessages prefix={PREFIX} name="name" errors={errors} />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            {t.fieldNames.email} *
            <input className={styles.input} name="email" type="email" autoComplete="email" required maxLength={200} {...fieldAria(PREFIX, 'email', errors)} />
          </label>
          <FieldMessages prefix={PREFIX} name="email" errors={errors} />
        </div>
        <label className={styles.label}>
          {t.fieldNames.phone}
          <input className={styles.input} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            {c.fields.jewel} *
            <textarea
              className={styles.input}
              name="jewel"
              rows={3}
              required
              minLength={5}
              maxLength={2000}
              placeholder={c.jewelPlaceholder}
              {...fieldAria(PREFIX, 'jewel', errors)}
            />
          </label>
          <FieldMessages prefix={PREFIX} name="jewel" errors={errors} />
        </div>
        <label className={styles.label}>
          {c.fields.wish}
          <textarea className={styles.input} name="wish" rows={3} maxLength={3000} placeholder={c.wishPlaceholder} />
        </label>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            {c.fields.photos}
            <input className={styles.file} name="photos" type="file" multiple accept={PHOTO_LIMITS.types.join(',')} {...fieldAria(PREFIX, 'photos', errors, true)} />
          </label>
          <FieldMessages
            prefix={PREFIX}
            name="photos"
            errors={errors}
            hint={t.photosHint(PHOTO_LIMITS.maxCount, mb(PHOTO_LIMITS.maxBytesEach), mb(PHOTO_LIMITS.maxBytesTotal))}
          />
        </div>
        {/* Champ piège : invisible pour les personnes, rempli par les robots. */}
        <label className={styles.trap} aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <div className={styles.fieldGroup}>
          <label className={styles.check}>
            <input name="consent" type="checkbox" required {...fieldAria(PREFIX, 'consent', errors)} />
            <span>{t.fieldNames.consent} *</span>
          </label>
          <FieldMessages prefix={PREFIX} name="consent" errors={errors} />
        </div>
        {/* Nouvel onglet : la saisie en cours reste dans le formulaire. */}
        <p className={styles.note}>
          {t.privacyNote}{' '}
          <a href={privacyPath(locale)} target="_blank" rel="noopener">
            {t.privacyLink}
          </a>
        </p>
        {/* Une seule alerte à la fois : erreurs de saisie (avant envoi) ou erreur d'envoi (réponse du serveur). */}
        <ErrorSummary key={attempt} title={t.errorSummary} errors={summary} />
        {status.kind === 'error' && (
          <p className={styles.error} role="alert">
            {status.message}
          </p>
        )}
        <button type="submit" className={styles.primary} disabled={sending} aria-busy={sending}>
          {sending ? t.sending : t.send}
        </button>
        {WHATSAPP && (
          <>
            <button type="button" className={styles.secondary} onClick={(ev) => openWhatsApp(ev.currentTarget.form!)} disabled={sending}>
              {t.sendWhatsApp}
            </button>
            <p className={styles.note}>{c.whatsAppNote}</p>
          </>
        )}
      </form>
    </section>
  );
}
