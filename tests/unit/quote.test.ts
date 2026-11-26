import { describe, expect, it } from 'vitest';
import { getModel, MODELS } from '@/models';
import { defaultState } from '@/lib/configurator/logic';
import { buildQuoteEmail, checkPhotos, fieldsFromForm, parseQuote, PHOTO_LIMITS } from '@/lib/quote/request';
import { buildWhatsAppLink, buildWhatsAppMessage, normalizeWhatsAppNumber } from '@/lib/quote/whatsapp';
import { mailerStatus, smtpOptions } from '@/lib/quote/mailer';

const model = MODELS['ring-001'];
const valid = () => ({
  modelId: 'ring-001',
  locale: 'fr',
  config: defaultState(model),
  name: 'Jeanne Martin',
  email: 'jeanne@example.com',
  phone: '+33 6 12 34 56 78',
  ringSize: '52',
  message: 'Gravure « J & M »',
  consent: true,
  website: '',
});

describe('demande de devis : validation', () => {
  it('accepte une demande complète', () => {
    const r = parseQuote(valid(), getModel);
    expect(r.ok).toBe(true);
  });

  it('champs facultatifs absents', () => {
    const { phone: _p, ringSize: _r, message: _m, website: _w, ...min } = valid();
    const r = parseQuote(min, getModel);
    expect(r.ok && r.fields.phone).toBe('');
  });

  it('refuse e-mail invalide, nom vide et absence de consentement en les nommant', () => {
    const r = parseQuote({ ...valid(), email: 'pas-un-mail', name: ' ', consent: false }, getModel);
    expect(r.ok).toBe(false);
    if (!r.ok && r.error.code === 'invalid') expect(r.error.fields.sort()).toEqual(['consent', 'email', 'name']);
  });

  it('signale le champ piège rempli', () => {
    const r = parseQuote({ ...valid(), website: 'http://spam' }, getModel);
    expect(!r.ok && r.error.code === 'invalid' && r.error.fields).toContain('website');
  });

  it('refuse un modèle inconnu', () => {
    const r = parseQuote({ ...valid(), modelId: 'ring-999' }, getModel);
    expect(!r.ok && r.error.code).toBe('unknown_model');
  });

  it('refuse une configuration non prévue par le modèle', () => {
    const base = defaultState(model);
    for (const config of [
      { ...base, composition: 'inventee' },
      { ...base, stones: { ...base.stones, center: 'diamant-geant' } },
      { ...base, stones: { ...base.stones, intrus: 'x' } },
    ]) {
      const r = parseQuote({ ...valid(), config }, getModel);
      expect(!r.ok && r.error.code).toBe('invalid_config');
    }
    expect(parseQuote({ ...valid(), config: { ...base, metal: 'argent' } }, getModel).ok).toBe(false);
  });

  it('lit un FormData (config JSON, case cochée)', () => {
    const f = new FormData();
    const v = valid();
    for (const k of ['modelId', 'locale', 'name', 'email'] as const) f.set(k, v[k]);
    f.set('config', JSON.stringify(v.config));
    f.set('consent', 'on');
    expect(parseQuote(fieldsFromForm(f), getModel).ok).toBe(true);
    f.set('config', '{cassé');
    expect(parseQuote(fieldsFromForm(f), getModel).ok).toBe(false);
  });
});

describe('demande de devis : photos', () => {
  const jpg = (size: number) => ({ name: 'a.jpg', type: 'image/jpeg', size });
  it('accepte jusqu’à la limite', () => {
    expect(checkPhotos([])).toBeNull();
    expect(checkPhotos([jpg(1e6), jpg(1e6), jpg(1e6)])).toBeNull();
  });
  it('refuse nombre, type, taille unitaire et totale', () => {
    expect(checkPhotos(Array(PHOTO_LIMITS.maxCount + 1).fill(jpg(10)))).toMatchObject({ reason: 'count' });
    expect(checkPhotos([{ name: 'a.pdf', type: 'application/pdf', size: 10 }])).toMatchObject({ reason: 'type' });
    expect(checkPhotos([jpg(PHOTO_LIMITS.maxBytesEach + 1)])).toMatchObject({ reason: 'size' });
    expect(checkPhotos([jpg(2e6), jpg(2e6), jpg(1e6)])).toMatchObject({ reason: 'total' });
  });
});

describe('demande de devis : e-mail', () => {
  it('reprend la configuration recalculée et les coordonnées', () => {
    const r = parseQuote(valid(), getModel);
    if (!r.ok) throw new Error('demande invalide');
    const { subject, text } = buildQuoteEmail(r.model, r.state, r.fields, [{ name: 'main.jpg', type: 'image/jpeg', size: 2048 }], 'https://jr.example/');
    expect(subject).toContain('Jeanne Martin');
    expect(text).toContain('jeanne@example.com');
    expect(text).toContain('Gravure « J & M »');
    expect(text).toContain('Métal : ');
    expect(text).toContain('https://jr.example/fr/configurateur/ring-001');
    // Le lien de la page rouvre la configuration demandée (paramètres de l'adresse).
    expect(text).toContain(`https://jr.example/fr/configurateur/ring-001?composition=${r.state.composition}&metal=${r.state.metal}&origin=${r.state.diamondOrigin}`);
    expect(text).toContain('main.jpg (2 Ko)');
    expect(text).toContain(JSON.stringify(r.state));
  });

  it('solitaire cœur : la forme et les tailles des pierres sont écrites en français', () => {
    const heart = MODELS['ring-003'];
    const r = parseQuote({ ...valid(), modelId: 'ring-003', config: defaultState(heart) }, getModel);
    if (!r.ok) throw new Error('demande invalide');
    const { text } = buildQuoteEmail(r.model, r.state, r.fields, [], 'https://jr.example/');
    expect(text).toContain('Modèle : Solitaire cœur pavé (ring-003)');
    expect(text).toContain('Pierre centrale : Cœur 7,3 × 7,3 mm');
    expect(text).toContain('1 × Cœur 7,3 × 7,3 mm (≈ 1,424 ct estimés)');
    expect(text).toContain('38 × Ronde 0,8 – 0,85 – 0,9 – 1 – 1,3 – 1,4 – 1,6 – 1,7 – 1,8 mm');
    expect(text).toContain('https://jr.example/fr/configurateur/ring-003');
  });

  it('indique la langue hébraïque et l’accord de publication', () => {
    const r = parseQuote({ ...valid(), locale: 'he', publishConsent: true }, getModel);
    if (!r.ok) throw new Error('demande invalide');
    const { text } = buildQuoteEmail(r.model, r.state, r.fields, []);
    expect(text).toContain('Langue du client : hébreu');
    expect(text).toContain('Publication des photos et vidéos de fabrication : accord donné');
    const sans = parseQuote(valid(), getModel);
    if (!sans.ok) throw new Error('demande invalide');
    expect(buildQuoteEmail(sans.model, sans.state, sans.fields, []).text).toContain('Publication des photos et vidéos de fabrication : pas d’accord');
  });

  it('pas de saut de ligne injectable dans l’objet', () => {
    const r = parseQuote({ ...valid(), name: 'A\r\nBcc: x@y.z' }, getModel);
    if (!r.ok) throw new Error('demande invalide');
    expect(buildQuoteEmail(r.model, r.state, r.fields, []).subject).not.toMatch(/[\r\n]/);
  });
});

describe('demande de devis : WhatsApp', () => {
  it('normalise le numéro et refuse les valeurs invalides', () => {
    expect(normalizeWhatsAppNumber('+972 50-123-4567')).toBe('972501234567');
    expect(normalizeWhatsAppNumber('00972501234567')).toBe('972501234567');
    expect(normalizeWhatsAppNumber('050-1234567')).toBeNull(); // numéro national : indicatif manquant
    expect(normalizeWhatsAppNumber('')).toBeNull();
    expect(normalizeWhatsAppNumber(undefined)).toBeNull();
  });

  it('message : configuration, champs saisis, pas de ligne vide inutile', () => {
    const r = parseQuote(valid(), getModel);
    if (!r.ok) throw new Error('demande invalide');
    const text = buildWhatsAppMessage(r.model, r.state, { name: ' Jeanne\nMartin ', ringSize: '52', message: 'Gravure « J & M »' }, 'https://jr.example/fr/configurateur/ring-001');
    expect(text).toContain('Métal : ');
    expect(text).toContain('Taille de doigt : 52');
    expect(text).toContain('Nom : Jeanne Martin');
    expect(text).toContain('Gravure « J & M »');
    expect(text).not.toMatch(/[€$₪]/);
    const sans = buildWhatsAppMessage(r.model, r.state, {});
    expect(sans).not.toContain('Nom :');
    expect(sans).not.toContain('Taille de doigt :');
    expect(sans).not.toContain('Pour quelle date :');
    expect(sans).not.toContain('Budget indicatif :');
  });

  it('date souhaitée et budget : facultatifs, repris dans le message WhatsApp et dans l’e-mail', () => {
    const r = parseQuote({ ...valid(), wantedDate: 'fiançailles le 14 février', budget: '5 000 à 7 000 ₪' }, getModel);
    if (!r.ok) throw new Error('demande invalide');
    const wa = buildWhatsAppMessage(r.model, r.state, { wantedDate: ' fiançailles\nle 14 février ', budget: '5 000 à 7 000 ₪' });
    expect(wa).toContain('Pour quelle date : fiançailles le 14 février');
    expect(wa).toContain('Budget indicatif : 5 000 à 7 000 ₪');
    const { text } = buildQuoteEmail(r.model, r.state, r.fields, []);
    expect(text).toContain('Pour quelle date : fiançailles le 14 février');
    expect(text).toContain('Budget indicatif : 5 000 à 7 000 ₪');
    const vide = parseQuote(valid(), getModel);
    if (!vide.ok) throw new Error('demande invalide');
    expect(buildQuoteEmail(vide.model, vide.state, vide.fields, []).text).toContain('Pour quelle date : —');
    expect(parseQuote({ ...valid(), budget: 'x'.repeat(61) }, getModel).ok).toBe(false);
  });

  it('surprise : signalée à l’atelier dans l’e-mail et dans le message WhatsApp, absente sinon', () => {
    const r = parseQuote({ ...valid(), surprise: true }, getModel);
    if (!r.ok) throw new Error('demande invalide');
    expect(buildQuoteEmail(r.model, r.state, r.fields, []).text).toContain('Surprise : OUI. Joindre uniquement par les coordonnées ci-dessus');
    expect(buildWhatsAppMessage(r.model, r.state, { surprise: true })).toContain('C’est une surprise : merci de me répondre uniquement ici.');
    const sans = parseQuote(valid(), getModel);
    if (!sans.ok) throw new Error('demande invalide');
    expect(buildQuoteEmail(sans.model, sans.state, sans.fields, []).text).toContain('Surprise : non signalée');
    expect(buildWhatsAppMessage(sans.model, sans.state, {})).not.toContain('surprise');
    const form = new FormData();
    form.set('surprise', 'on');
    expect(fieldsFromForm(form).surprise).toBe(true);
    expect(fieldsFromForm(new FormData()).surprise).toBe(false);
  });

  it('lien wa.me encodé', () => {
    const link = buildWhatsAppLink('972501234567', 'Bonjour & merci\nà bientôt');
    expect(link).toBe('https://wa.me/972501234567?text=Bonjour%20%26%20merci%0A%C3%A0%20bient%C3%B4t');
  });
});

describe('demande de devis : configuration de l’envoi', () => {
  it('simulation, SMTP ou non configuré', () => {
    expect(mailerStatus({ QUOTE_DRY_RUN: '1' })).toBe('dry-run');
    expect(mailerStatus({ SMTP_HOST: 'h', QUOTE_TO: 't@x.y', QUOTE_FROM: 'f@x.y' })).toBe('smtp');
    expect(mailerStatus({ SMTP_HOST: 'h' })).toBe('unconfigured');
    expect(mailerStatus({})).toBe('unconfigured');
  });

  it('connexion SMTP toujours chiffrée : TLS direct sur le port 465, STARTTLS imposé ailleurs', () => {
    expect(smtpOptions({ SMTP_HOST: 'h' })).toMatchObject({ port: 587, secure: false, requireTLS: true });
    expect(smtpOptions({ SMTP_HOST: 'h', SMTP_PORT: '465' })).toMatchObject({ port: 465, secure: true, requireTLS: false });
    expect(smtpOptions({ SMTP_HOST: 'h', SMTP_PORT: '2525', SMTP_SECURE: '1' })).toMatchObject({ secure: true, requireTLS: false });
    expect(smtpOptions({ SMTP_HOST: 'h', SMTP_PORT: '465', SMTP_SECURE: '0' })).toMatchObject({ secure: false, requireTLS: true });
    expect(smtpOptions({ SMTP_HOST: 'h', SMTP_USER: 'u', SMTP_PASS: 'p' }).auth).toEqual({ user: 'u', pass: 'p' });
    expect(smtpOptions({ SMTP_HOST: 'h' }).auth).toBeUndefined();
  });
});
