import { describe, expect, it } from 'vitest';
import { GUIDES, getGuide, ringSizeRow } from '@/content/guides';
import { DICTIONARIES } from '@/i18n/dictionaries';

describe('guides', () => {
  it('six guides, liens internes vers des guides existants', () => {
    expect(GUIDES.map((g) => g.slug)).toEqual([
      'diamant-synthetique-ou-naturel',
      'formes-de-diamant',
      'alliance-de-kiddouchin',
      'les-4-c-du-diamant',
      'or-14-ou-18-carats',
      'taille-de-doigt',
    ]);
    for (const g of GUIDES)
      for (const l of g.next) {
        const slug = l.href.match(/^\/fr\/guides\/(.+)$/)?.[1];
        if (slug) expect(getGuide(slug), `${g.slug} → ${l.href}`).toBeDefined();
      }
  });

  it('tableaux : en-tête et lignes de même largeur', () => {
    for (const g of GUIDES)
      for (const s of g.sections)
        if (s.table) for (const r of s.table.rows) expect(r).toHaveLength(s.table.head.length);
  });

  it('tailles de bague : ISO 8653, taille israélienne = ISO − 40, taille américaine au quart', () => {
    expect(ringSizeRow(52)).toEqual({ fr: '52', diameterMm: '16,6', il: '12', us: '6' });
    expect(ringSizeRow(46)).toEqual({ fr: '46', diameterMm: '14,6', il: '6', us: '3¾' });
    expect(ringSizeRow(50).us).toBe('5¼');
    expect(ringSizeRow(48).us).toBe('4½');
    expect(ringSizeRow(62).us).toBe('10');
    const table = getGuide('taille-de-doigt')!.sections.find((s) => s.table)!.table!;
    expect(table.rows.map((r) => r[0])).toEqual(Array.from({ length: 21 }, (_, i) => String(46 + i)));
  });

  it('configurateur : liens vers les guides en français seulement, plus d’affirmation sur la dureté', () => {
    expect(DICTIONARIES.fr.guideLinks?.size.href).toBe('/fr/guides/taille-de-doigt');
    expect(getGuide(DICTIONARIES.fr.guideLinks!.titre.href.split('/').pop()!)).toBeDefined();
    expect(DICTIONARIES.en.guideLinks).toBeNull();
    expect(DICTIONARIES.he.guideLinks).toBeNull();
    expect(DICTIONARIES.fr.titreNote).not.toMatch(/plus dur/);
    expect(DICTIONARIES.fr.originNote).not.toMatch(/laboratoire/);
  });
});
