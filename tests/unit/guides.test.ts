import { describe, expect, it } from 'vitest';
import { GUIDE_LOCALES, GUIDES, getGuide, guideAlternates, ringSizeRow } from '@/content/guides';
import { DICTIONARIES } from '@/i18n/dictionaries';

describe('guides', () => {
  it('six guides par langue, dans le même ordre', () => {
    expect(GUIDE_LOCALES).toEqual(['fr', 'en']);
    expect(GUIDES.fr.map((g) => g.slug)).toEqual([
      'diamant-synthetique-ou-naturel',
      'formes-de-diamant',
      'alliance-de-kiddouchin',
      'les-4-c-du-diamant',
      'or-14-ou-18-carats',
      'taille-de-doigt',
    ]);
    expect(GUIDES.en.map((g) => g.slug)).toEqual([
      'lab-grown-or-natural-diamond',
      'diamond-shapes',
      'kiddushin-wedding-ring',
      'the-4cs-of-diamonds',
      '14k-or-18k-gold',
      'ring-size',
    ]);
    expect(GUIDES.en.map((g) => g.id)).toEqual(GUIDES.fr.map((g) => g.id));
  });

  it('la version anglaise suit la française : mêmes rubriques, mêmes sources, même date de vérification', () => {
    GUIDES.fr.forEach((fr, i) => {
      const en = GUIDES.en[i];
      expect(en.sections.map((s) => s.id), fr.id).toEqual(fr.sections.map((s) => s.id));
      expect(en.sources.map((s) => s.url), fr.id).toEqual(fr.sources.map((s) => s.url));
      expect(en.verified, fr.id).toBe(fr.verified);
      expect(en.next.length, fr.id).toBe(fr.next.length);
      en.sections.forEach((s, j) => {
        const f = fr.sections[j];
        expect([s.paragraphs?.length, s.list?.length, s.table?.rows.length, s.after?.length], `${fr.id}/${s.id}`).toEqual([
          f.paragraphs?.length,
          f.list?.length,
          f.table?.rows.length,
          f.after?.length,
        ]);
      });
    });
  });

  it('liens internes : vers la même langue, vers des guides existants', () => {
    for (const locale of GUIDE_LOCALES)
      for (const g of GUIDES[locale])
        for (const l of g.next) {
          expect(l.href.startsWith(`/${locale}/`), `${locale}/${g.slug} → ${l.href}`).toBe(true);
          const slug = l.href.match(/^\/(?:fr|en)\/guides\/(.+)$/)?.[1];
          if (slug) expect(getGuide(locale, slug), `${locale}/${g.slug} → ${l.href}`).toBeDefined();
        }
  });

  it('chaque guide a son adresse dans les deux langues ; pas de guide en hébreu', () => {
    expect(guideAlternates('taille')).toEqual({ fr: '/fr/guides/taille-de-doigt', en: '/en/guides/ring-size' });
    expect(getGuide('fr', 'ring-size')).toBeUndefined();
    expect(getGuide('he', 'taille-de-doigt')).toBeUndefined();
  });

  it('tableaux : en-tête et lignes de même largeur', () => {
    for (const locale of GUIDE_LOCALES)
      for (const g of GUIDES[locale]) for (const s of g.sections) if (s.table) for (const r of s.table.rows) expect(r).toHaveLength(s.table.head.length);
  });

  it('tailles de bague : taille européenne ISO 8653 (référence de l’atelier), taille américaine au quart, décimale selon la langue', () => {
    expect(ringSizeRow(52)).toEqual({ eu: '52', diameterMm: '16,6', us: '6' });
    expect(ringSizeRow(52, 'en')).toEqual({ eu: '52', diameterMm: '16.6', us: '6' });
    expect(ringSizeRow(46)).toEqual({ eu: '46', diameterMm: '14,6', us: '3¾' });
    expect(ringSizeRow(50).us).toBe('5¼');
    expect(ringSizeRow(48).us).toBe('4½');
    expect(ringSizeRow(62).us).toBe('10');
    for (const [locale, slug] of [
      ['fr', 'taille-de-doigt'],
      ['en', 'ring-size'],
    ] as const) {
      const table = getGuide(locale, slug)!.sections.find((s) => s.table)!.table!;
      expect(table.rows.map((r) => r[0])).toEqual(Array.from({ length: 21 }, (_, i) => String(46 + i)));
    }
  });

  it('configurateur : liens vers les guides en français et en anglais, pas en hébreu ; plus d’affirmation sur la dureté', () => {
    for (const locale of GUIDE_LOCALES) {
      const links = DICTIONARIES[locale].guideLinks!;
      for (const l of [links.size, links.titre]) {
        expect(l.href.startsWith(`/${locale}/guides/`)).toBe(true);
        expect(getGuide(locale, l.href.split('/').pop()!), l.href).toBeDefined();
      }
    }
    expect(DICTIONARIES.fr.guideLinks?.size.href).toBe('/fr/guides/taille-de-doigt');
    expect(DICTIONARIES.he.guideLinks).toBeNull();
    expect(DICTIONARIES.fr.titreNote).not.toMatch(/plus dur/);
    expect(DICTIONARIES.fr.originNote).not.toMatch(/laboratoire/);
  });
});
