'use client';

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import styles from '@/components/configurator/Configurator.module.css';
import type { Dict } from '@/i18n/dictionaries';

/**
 * Validation des formulaires de devis et de transformation, faite par la page plutôt que par le navigateur (`noValidate`).
 *
 * Pourquoi : la bulle d'erreur native disparaît au bout de quelques secondes, ne se traduit pas avec la page et n'est pas
 * lue de la même façon par tous les lecteurs d'écran. Ici, chaque erreur reste écrite sous son champ, le champ porte
 * `aria-invalid` et `aria-describedby` vers son message, un résumé `role="alert"` est annoncé à chaque envoi refusé, et le
 * focus va au premier champ à corriger (WCAG 3.3.1, 3.3.3 et 4.1.3). Les attributs `required`, `minLength` et `type="email"`
 * restent sur les champs : ils disent aux aides techniques qu'un champ est obligatoire, et le serveur revérifie tout.
 */

/** Messages d'erreur par nom de champ (`name` du contrôle). */
export type FieldErrors = Partial<Record<string, string>>;

export type InvalidReason = 'missing' | 'short' | 'format';

/** Champs invalides, dans l'ordre du formulaire, d'après leurs attributs de contrainte. Les fichiers sont vérifiés à part (`checkPhotos`). */
export function invalidFields(form: HTMLFormElement): { name: string; reason: InvalidReason }[] {
  const out: { name: string; reason: InvalidReason }[] = [];
  for (const el of Array.from(form.elements)) {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) || !el.name || el.disabled || el.type === 'file') continue;
    if (el instanceof HTMLInputElement && el.type === 'checkbox') {
      if (el.required && !el.checked) out.push({ name: el.name, reason: 'missing' });
      continue;
    }
    const value = el.value.trim();
    if (el.required && !value) out.push({ name: el.name, reason: 'missing' });
    // `validity.tooShort` ne vaut que pour une saisie au clavier : la longueur est comptée ici.
    else if (value && el.minLength > 0 && value.length < el.minLength) out.push({ name: el.name, reason: 'short' });
    else if (value && el instanceof HTMLInputElement && el.type === 'email' && el.validity.typeMismatch) out.push({ name: el.name, reason: 'format' });
  }
  return out;
}

/** Message d'un champ invalide commun au devis et au formulaire de transformation (nom, e-mail, accord). */
export function commonFieldError(t: Dict['quote'], name: string, reason: InvalidReason): string | undefined {
  if (name === 'email') return reason === 'format' ? t.fieldErrors.emailFormat : t.fieldErrors.email;
  if (name === 'name' || name === 'consent') return t.fieldErrors[name];
  return undefined;
}

/** Photos choisies dans le champ `photos` (fichiers non vides). */
export const photoFiles = (form: HTMLFormElement) =>
  new FormData(form).getAll('photos').filter((f): f is File => f instanceof File && f.size > 0);

/**
 * Erreurs d'un formulaire, dans l'ordre de ses champs : `message` donne le texte d'un champ invalide d'après ses contraintes,
 * `extra` ajoute les erreurs vérifiées à part (photos).
 */
export function collectErrors(form: HTMLFormElement, message: (name: string, reason: InvalidReason) => string, extra: FieldErrors = {}): FieldErrors {
  const out: FieldErrors = { ...extra };
  for (const f of invalidFields(form)) out[f.name] ??= message(f.name, f.reason);
  const order = Array.from(form.elements).map((el) => (el as HTMLInputElement).name);
  return Object.fromEntries(Object.entries(out).filter(([, m]) => m).sort(([a], [b]) => order.indexOf(a) - order.indexOf(b)));
}

/**
 * État des erreurs d'un formulaire. `check(form)` dit si l'envoi peut partir ; sinon il affiche les erreurs et met le focus sur
 * le premier champ à corriger. `recheck` (à brancher sur `onChange` du formulaire) retire l'erreur d'un champ dès qu'il est corrigé.
 * `summary` est l'état au dernier envoi refusé : il ne change pas pendant la saisie, pour ne pas être annoncé à chaque touche.
 */
export function useFieldErrors(validate: (form: HTMLFormElement) => FieldErrors) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [summary, setSummary] = useState<FieldErrors>({});
  /** Envois refusés : clé du résumé (nouvelle annonce à chaque refus) et déclencheur du focus. */
  const [attempt, setAttempt] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const firstInvalid = useRef<string | undefined>(undefined);

  useEffect(() => {
    const el = attempt && firstInvalid.current ? formRef.current?.elements.namedItem(firstInvalid.current) : null;
    if (el instanceof HTMLElement) el.focus();
  }, [attempt]);

  function check(form: HTMLFormElement): boolean {
    const found = validate(form);
    setErrors(found);
    setSummary(found);
    firstInvalid.current = Object.keys(found)[0];
    if (!firstInvalid.current) return true;
    setAttempt((n) => n + 1);
    return false;
  }

  function recheck(ev: FormEvent<HTMLFormElement>) {
    const name = (ev.target as HTMLInputElement).name;
    if (!errors[name] || validate(ev.currentTarget)[name]) return;
    setErrors((e) => {
      const next = { ...e };
      delete next[name];
      return next;
    });
  }

  return { errors, summary, attempt, formRef, check, recheck };
}

const errorId = (prefix: string, name: string) => `${prefix}-${name}-error`;
const hintId = (prefix: string, name: string) => `${prefix}-${name}-hint`;

/** Attributs d'un champ : état invalide et description (aide, puis erreur). */
export function fieldAria(prefix: string, name: string, errors: FieldErrors, hasHint = false) {
  const ids = [hasHint && hintId(prefix, name), errors[name] && errorId(prefix, name)].filter(Boolean).join(' ');
  return { 'aria-invalid': errors[name] ? (true as const) : undefined, 'aria-describedby': ids || undefined };
}

/** Aide et message d'erreur d'un champ, sous son étiquette. */
export function FieldMessages({ prefix, name, errors, hint }: { prefix: string; name: string; errors: FieldErrors; hint?: ReactNode }) {
  return (
    <>
      {hint && (
        <span id={hintId(prefix, name)} className={styles.note}>
          {hint}
        </span>
      )}
      {errors[name] && (
        <span id={errorId(prefix, name)} className={styles.fieldError}>
          {errors[name]}
        </span>
      )}
    </>
  );
}

/**
 * Résumé des erreurs, annoncé dès qu'il apparaît (`role="alert"`). Le parent lui donne une `key` qui change à chaque envoi
 * refusé : un nouvel élément est annoncé de nouveau, même si les erreurs n'ont pas changé.
 */
export function ErrorSummary({ title, errors }: { title: (n: number) => string; errors: FieldErrors }) {
  const messages = Object.values(errors).filter((m): m is string => !!m);
  if (!messages.length) return null;
  return (
    <div className={styles.error} role="alert">
      <p>{title(messages.length)}</p>
      <ul>
        {messages.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

/** Défilement doux, sauf si le système demande de réduire les animations. */
export const scrollBehavior = (): ScrollBehavior => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth');
