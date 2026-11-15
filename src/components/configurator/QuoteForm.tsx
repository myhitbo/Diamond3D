'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ErrorSummary, FieldMessages, collectErrors, commonFieldError, fieldAria, photoFiles, scrollBehavior, useFieldErrors } from '@/components/site/FormFeedback';
import type { Dict } from '@/i18n/dictionaries';
import type { ConfigState, Locale } from '@/lib/configurator/schema';
import { getModel } from '@/models';
import { checkPhotos, PHOTO_LIMITS, type QuoteError } from '@/lib/quote/request';
import { buildWhatsAppLink, buildWhatsAppMessage, normalizeWhatsAppNumber } from '@/lib/quote/whatsapp';
import { privacyPath } from '@/lib/routes';
import styles from './Configurator.module.css';

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string };

export const QUOTE_ENDPOINT = '/api/devis';

// Numéro WhatsApp de l'atelier (variable publique, fixée au build). Absent : le bouton WhatsApp n'apparaît pas.
const WHATSAPP = normalizeWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);

function errorMessage(t: Dict['quote'], e: (QuoteError | { code: string }) | undefined): string {
  if (!e) return t.errors.send_failed;
  if (e.code === 'photos' && 'reason' in e) return t.errors.photos[e.reason];
  if (e.code === 'invalid' && 'fields' in e && e.fields.length) {
    const names = e.fields.map((f) => t.fieldNames[f as keyof Dict['quote']['fieldNames']]).filter(Boolean);
    if (names.length) return t.errors.invalidFields(names.join(', '));
  }
  return t.errors[e.code as keyof Omit<Dict['quote']['errors'], 'photos' | 'invalidFields'>] ?? t.errors.send_failed;
}

const PREFIX = 'quote';

export default function QuoteForm({
  modelId,
  locale,
  state,
  t,
  suggestedMessage,
  onClose,
}: {
  modelId: string;
  locale: Locale;
  state: ConfigState;
  t: Dict['quote'];
  /** Texte proposé pour le message (ex. forme de pierre demandée). N'écrase jamais ce que la personne a écrit. */
  suggestedMessage?: string;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const { errors, summary, attempt, formRef, check, recheck } = useFieldErrors((form) => {
    const photoError = checkPhotos(photoFiles(form).map((f) => ({ name: f.name, type: f.type, size: f.size })));
    return collectErrors(form, (name, reason) => commonFieldError(t, name, reason) ?? t.errors.invalid, { photos: photoError ? errorMessage(t, photoError) : undefined });
  });
  const first = useRef<HTMLInputElement>(null);
  const done = useRef<HTMLParagraphElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const lastSuggestion = useRef('');

  // Pose le texte proposé si le champ est vide ou contient encore la proposition précédente.
  useEffect(() => {
    const field = message.current;
    if (!field || !suggestedMessage) return;
    if (field.value === '' || field.value === lastSuggestion.current) field.value = suggestedMessage;
    lastSuggestion.current = suggestedMessage;
    field.closest('section')?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  }, [suggestedMessage]);

  useEffect(() => {
    first.current?.focus({ preventScroll: true });
    first.current?.closest('section')?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  }, []);
  useEffect(() => {
    if (status.kind === 'sent') done.current?.focus();
  }, [status.kind]);

  async function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    if (!check(form)) return setStatus({ kind: 'idle' });
    const data = new FormData(form);
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

  /** Ouvre WhatsApp avec la configuration et les champs déjà saisis ; l'envoi reste à la main de la personne. */
  function openWhatsApp(form: HTMLFormElement) {
    const model = getModel(modelId);
    if (!WHATSAPP || !model) return;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '');
    const text = buildWhatsAppMessage(model, state, { name: get('name'), ringSize: get('ringSize'), message: get('message') }, window.location.href.split('?')[0]);
    window.open(buildWhatsAppLink(WHATSAPP, text), '_blank', 'noopener');
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
      <p className={styles.note}>{t.requiredNote}</p>
      <form ref={formRef} className={styles.form} onSubmit={submit} onChange={recheck} noValidate>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            {t.fieldNames.name} *
            <input
              ref={first}
              className={styles.input}
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              {...fieldAria(PREFIX, 'name', errors)}
            />
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
        <label className={styles.label}>
          {t.fieldNames.ringSize}
          <input className={styles.input} name="ringSize" maxLength={40} placeholder={t.ringSizePlaceholder} />
        </label>
        <label className={styles.label}>
          {t.fieldNames.message}
          <textarea ref={message} className={styles.input} name="message" rows={4} maxLength={3000} placeholder={t.messagePlaceholder} />
        </label>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            {t.fieldNames.photos}
            <input
              className={styles.file}
              name="photos"
              type="file"
              multiple
              accept={PHOTO_LIMITS.types.join(',')}
              {...fieldAria(PREFIX, 'photos', errors, true)}
            />
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
        <label className={styles.check}>
          <input name="publishConsent" type="checkbox" />
          <span>{t.fieldNames.publishConsent}</span>
        </label>
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
            <p className={styles.note}>{t.whatsAppNote}</p>
          </>
        )}
        <button type="button" className={styles.textButton} onClick={onClose} disabled={sending}>
          {t.cancel}
        </button>
      </form>
    </section>
  );
}
