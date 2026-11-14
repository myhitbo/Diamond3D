import { describe, expect, it } from 'vitest';
import { GUIDES } from '@/content/guides';
import { TRANSFORMATION } from '@/content/transformation';
import { LOCALES } from '@/lib/configurator/schema';
import { buildTransformationEmail, buildTransformationWhatsApp, parseTransformation, transformationFieldsFromForm } from '@/lib/quote/transformation';

const valid = () => ({
  locale: 'fr',
  name: 'Jeanne Martin',
  email: 'jeanne@example.com',
  phone: '+972 50 123 4567',
  jewel: 'Bague en or jaune avec un diamant, héritée de ma grand-mère',
  wish: 'Une bague de fiançailles',
  consent: true,
  website: '',
});

describe('demande de transformation', () => {
  it('accepte une demande complète, et sans champs facultatifs', () => {
    expect(parseTransformation(valid()).ok).toBe(true);
    const { phone: _p, wish: _w, website: _s, ...min } = valid();
    expect(parseTransformation(min).ok).toBe(true);
  });

  it('refuse sans description du bijou, sans accord, ou avec le champ piège rempli', () => {
    const r1 = parseTransformation({ ...valid(), jewel: 'or' });
    expect(r1.ok === false && r1.error.code === 'invalid' && r1.error.fields).toEqual(['jewel']);
    const r2 = parseTransformation({ ...valid(), consent: false });
    expect(r2.ok === false && r2.error.code === 'invalid' && r2.error.fields).toEqual(['consent']);
    const r3 = parseTransformation({ ...valid(), website: 'http://spam' });
    expect(r3.ok === false && r3.error.code === 'invalid' && r3.error.fields).toEqual(['website']);
  });

  it('lit un FormData', () => {
    const form = new FormData();
    for (const [k, v] of Object.entries({ ...valid(), consent: 'on' })) form.set(k, String(v));
    const r = parseTransformation(transformationFieldsFromForm(form));
    expect(r.ok).toBe(true);
  });

  it('e-mail à l’atelier en français, objet sur une ligne', () => {
    const r = parseTransformation({ ...valid(), locale: 'he', name: 'Dana\nLevi' });
    if (!r.ok) throw new Error('invalide');
    const { subject, text } = buildTransformationEmail(r.fields, [{ name: 'bague.jpg', type: 'image/jpeg', size: 204800 }], 'https://jr.example/');
    expect(subject).toBe('Transformation d’un bijou — Dana Levi');
    expect(text).toContain('Langue du client : hébreu');
    expect(text).toContain('bague.jpg (200 Ko)');
    expect(text).toContain('https://jr.example/he/transformation');
  });

  it('message WhatsApp : champs vides omis, longueur bornée', () => {
    const text = buildTransformationWhatsApp({ name: ' Jeanne ', jewel: 'x'.repeat(5000), wish: '' });
    expect(text).toContain('Nom : Jeanne');
    expect(text).not.toContain('Mon souhait');
    expect(text.length).toBeLessThan(1100);
  });
});

describe('contenus', () => {
  it('page transformation : mêmes rubriques dans les trois langues', () => {
    for (const l of LOCALES) {
      expect(TRANSFORMATION[l].steps).toHaveLength(TRANSFORMATION.fr.steps.length);
      expect(TRANSFORMATION[l].frank).toHaveLength(TRANSFORMATION.fr.frank.length);
    }
  });

  it('guides : adresses uniques, sources présentes, vocabulaire légal', () => {
    expect(new Set(GUIDES.map((g) => g.slug)).size).toBe(GUIDES.length);
    for (const g of GUIDES) {
      expect(g.sources.length).toBeGreaterThan(0);
      for (const s of g.sources) expect(s.url).toMatch(/^https:\/\//);
      const text = JSON.stringify(g.sections);
      // Décret 2002-65 : « synthétique » seulement. Les expressions interdites ne sont citées qu'entre guillemets, pour les expliquer.
      expect(text.replace(/«[^»]*»/g, '')).not.toMatch(/de laboratoire|de culture|cultivé/i);
      for (const l of g.next) expect(l.href).toMatch(/^\/fr\//);
    }
  });
});
