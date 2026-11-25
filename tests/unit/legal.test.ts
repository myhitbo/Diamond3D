import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { BUSINESS, BUSINESS_LABELS, businessText, missingBusinessFields, type BusinessField } from '@/config/business';
import { ACCESSIBILITY, ACCESSIBILITY_STATUS, ACCESSIBILITY_UPDATED, PRIVACY, PRIVACY_UPDATED, sectionTexts, tokensOf, type LegalPage } from '@/content/legal';
import { LOCALES } from '@/lib/configurator/schema';
import { defaultState } from '@/lib/configurator/logic';
import { MAX_PER_WINDOW, WINDOW_MS } from '@/lib/quote/rateLimit';
import { PHOTO_LIMITS, QuoteFields } from '@/lib/quote/request';
import { TransformationFields } from '@/lib/quote/transformation';
import { MODELS } from '@/models';

const PAGES: Record<string, Record<(typeof LOCALES)[number], LegalPage>> = { accessibilité: ACCESSIBILITY, confidentialité: PRIVACY };

describe('pages légales : les trois langues se suivent', () => {
  for (const [name, page] of Object.entries(PAGES)) {
    it(`${name} : mêmes rubriques, dans le même ordre, mêmes informations à compléter, mêmes liens`, () => {
      const ids = page.fr.sections.map((s) => s.id);
      for (const l of LOCALES) {
        expect(page[l].sections.map((s) => s.id), l).toEqual(ids);
        expect(page[l].links.map((x) => x.url), l).toEqual(page.fr.links.map((x) => x.url));
        page[l].sections.forEach((s, i) => {
          expect(sectionTexts(s).flatMap(tokensOf).sort(), `${l} ${s.id}`).toEqual(sectionTexts(page.fr.sections[i]).flatMap(tokensOf).sort());
          expect(s.slot, `${l} ${s.id}`).toBe(page.fr.sections[i].slot);
          expect(s.list?.length ?? 0, `${l} ${s.id}`).toBe(page.fr.sections[i].list?.length ?? 0);
        });
      }
    });
  }

  it('badge « Brouillon » dans chaque langue ; l’hébreu signale aussi la traduction à relire', () => {
    for (const page of Object.values(PAGES)) {
      expect(page.fr.badge).toMatch(/^Brouillon · à valider par un avocat/);
      expect(page.en.badge).toMatch(/^Draft · to be reviewed by a lawyer/);
      expect(page.he.badge).toMatch(/טיוטה/);
      expect(page.he.badge).toMatch(/תרגום/);
    }
  });

  it('liens de référence en https', () => {
    for (const page of Object.values(PAGES)) for (const l of LOCALES) for (const link of page[l].links) expect(link.url, link.label).toMatch(/^https:\/\//);
  });
});

describe('informations de l’entreprise (src/config/business.ts)', () => {
  const used = new Set(Object.values(PAGES).flatMap((p) => p.fr.sections.flatMap(sectionTexts).flatMap(tokensOf)));

  it('chaque information appelée par une page existe, et chaque information sert', () => {
    expect([...used].sort()).toEqual(Object.keys(BUSINESS).sort());
  });

  it('libellé dans les trois langues', () => {
    for (const f of Object.keys(BUSINESS) as BusinessField[]) for (const l of LOCALES) expect(BUSINESS_LABELS[f][l].length, `${f} ${l}`).toBeGreaterThan(0);
  });

  it('information manquante : marque visible dans la langue de la page ; remplie : la valeur', () => {
    expect(BUSINESS.email).toBeNull();
    expect(businessText('email', 'fr')).toEqual({ text: '[à compléter : adresse e-mail]', missing: true });
    expect(businessText('email', 'en')).toEqual({ text: '[to be completed: email address]', missing: true });
    expect(businessText('email', 'he')).toEqual({ text: '[להשלמה: כתובת דוא״ל]', missing: true });
    BUSINESS.email = 'atelier@example.com';
    BUSINESS.address = { fr: 'Ramat Gan', en: 'Ramat Gan', he: 'רמת גן' };
    try {
      expect(businessText('email', 'he')).toEqual({ text: 'atelier@example.com', missing: false });
      expect(businessText('address', 'he')).toEqual({ text: 'רמת גן', missing: false });
      expect(missingBusinessFields()).not.toContain('email');
    } finally {
      BUSINESS.email = null;
      BUSINESS.address = null;
    }
  });

  it('informations de l’atelier du 16/11 : nom, numéro d’osek patour, téléphone, paiement, livraison', () => {
    expect(BUSINESS.legalName).toBe('Diamdor');
    expect(businessText('registrationNumber', 'fr').text).toBe('Osek patour (עוסק פטור) n° 345837116');
    expect(businessText('registrationNumber', 'en').text).toBe('Exempt dealer (עוסק פטור) No. 345837116');
    expect(businessText('registrationNumber', 'he').text).toBe('עוסק פטור מס׳ 345837116');
    expect(BUSINESS.phone).toBe('+972 55-255-0455');
    expect(businessText('payment', 'fr').text).toBe('carte bancaire en ligne et Bit');
    expect(businessText('delivery', 'fr').text).toMatch(/^en Israël, par coursier .*150 à 200 ₪.*retrait à l’atelier/);
    // Rien sur l'étranger tant que l'atelier ne l'a pas confirmé ; e-mail, adresse et annulation restent à compléter.
    for (const l of ['fr', 'en', 'he'] as const) expect(businessText('delivery', l).text).not.toMatch(/France|étranger|abroad|חו״ל/);
    for (const f of ['email', 'address', 'cancellation'] as const) expect(BUSINESS[f]).toBeNull();
  });
});

describe('politique de confidentialité : conforme au code', () => {
  const fr = (id: string) => sectionTexts(PRIVACY.fr.sections.find((s) => s.id === id)!).join(' ');
  const mb = (n: number) => n / 1024 / 1024;

  it('limites des photos et de la fréquence d’envoi', () => {
    expect(fr('donnees')).toContain(`Photos : ${PHOTO_LIMITS.maxCount} au plus`);
    expect(fr('donnees')).toContain(`${mb(PHOTO_LIMITS.maxBytesEach)} Mo chacune et ${mb(PHOTO_LIMITS.maxBytesTotal)} Mo en tout`);
    expect(fr('acheminement')).toContain(`${MAX_PER_WINDOW} demandes au plus en ${WINDOW_MS / 60_000} minutes`);
  });

  it('champs obligatoires : ceux que la politique annonce, et eux seuls', () => {
    const quote = { modelId: 'ring-001', locale: 'fr', config: defaultState(MODELS['ring-001']), name: 'Jeanne Martin', email: 'jeanne@example.com', consent: true };
    expect(QuoteFields.safeParse(quote).success).toBe(true);
    for (const k of ['name', 'email', 'consent']) expect(QuoteFields.safeParse({ ...quote, [k]: undefined }).success, k).toBe(false);
    const transformation = { locale: 'fr', name: 'Jeanne Martin', email: 'jeanne@example.com', jewel: 'Bague en or jaune', consent: true };
    expect(TransformationFields.safeParse(transformation).success).toBe(true);
    for (const k of ['name', 'email', 'jewel', 'consent']) expect(TransformationFields.safeParse({ ...transformation, [k]: undefined }).success, k).toBe(false);
    expect(fr('donnees')).toContain('nom et e-mail (obligatoires)');
    expect(fr('donnees')).toContain('nom, e-mail et description du bijou (obligatoires)');
  });

  it('aucun cookie ni stockage du navigateur dans le code du site', () => {
    const files: string[] = [];
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) walk(path);
        else if (/\.(ts|tsx)$/.test(name)) files.push(path);
      }
    };
    walk(join(process.cwd(), 'src'));
    // Les textes de la politique, qui parlent des cookies, ne sont pas du code qui en dépose.
    const code = files.filter((f) => !f.includes(join('src', 'content', 'legal')));
    for (const f of code) expect(readFileSync(f, 'utf8'), f).not.toMatch(/document\.cookie|localStorage|sessionStorage|indexedDB|cookies\(\)|\.cookies\.set/);
  });
});

describe('déclaration d’accessibilité : état de conformité', () => {
  it('dates cohérentes ; un résultat « partiel » ou « conforme » s’appuie sur des résultats', () => {
    expect(ACCESSIBILITY_STATUS.checkedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(ACCESSIBILITY_STATUS.checkedOn <= ACCESSIBILITY_UPDATED).toBe(true);
    expect(PRIVACY_UPDATED).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    if (ACCESSIBILITY_STATUS.conformance !== 'not-evaluated') expect(ACCESSIBILITY_STATUS.results.length).toBeGreaterThan(0);
    for (const item of [...ACCESSIBILITY_STATUS.methods, ...ACCESSIBILITY_STATUS.results, ...ACCESSIBILITY_STATUS.limits])
      for (const l of LOCALES) expect(item[l].length, l).toBeGreaterThan(0);
  });

  it('la rubrique de l’état existe dans les trois langues', () => {
    for (const l of LOCALES) expect(ACCESSIBILITY[l].sections.filter((s) => s.slot === 'status')).toHaveLength(1);
  });
});

describe('lien « Aller au contenu »', () => {
  it('chaque page qui a un <main> lui donne l’identifiant cible (MAIN_ID)', () => {
    const files: string[] = [];
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) walk(path);
        else if (name.endsWith('.tsx')) files.push(path);
      }
    };
    walk(join(process.cwd(), 'src/app'));
    walk(join(process.cwd(), 'src/components'));
    const withMain = files.filter((f) => /<main[\s>]/.test(readFileSync(f, 'utf8')));
    expect(withMain.length).toBeGreaterThan(5);
    for (const f of withMain) for (const tag of readFileSync(f, 'utf8').match(/<main[^>]*>/g)!) expect(tag, f).toContain('id={MAIN_ID}');
  });
});
