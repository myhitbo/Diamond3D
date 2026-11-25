import { describe, expect, it } from 'vitest';
import { FAQ, allFaqItems } from '@/content/faq';
import { LOCALES } from '@/lib/configurator/schema';

describe('FAQ', () => {
  it('identifiants uniques', () => {
    const ids = [...FAQ.map((c) => c.id), ...allFaqItems().map((i) => i.id)];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('chaque question a sa réponse dans chaque langue', () => {
    for (const i of allFaqItems())
      for (const l of LOCALES) {
        expect(i.q[l].trim(), `${i.id} ${l}`).not.toBe('');
        expect(i.a[l].length, `${i.id} ${l}`).toBeGreaterThan(0);
        expect(i.a[l].every((p) => p.trim() !== '')).toBe(true);
      }
  });

  it('une réponse « source » cite au moins une source https', () => {
    for (const i of allFaqItems().filter((x) => x.status === 'source')) {
      expect(i.sources?.length, i.id).toBeGreaterThan(0);
      for (const s of i.sources!) expect(s.url.startsWith('https://'), s.url).toBe(true);
    }
  });

  it('aucun prix de bijou : seuls les montants communiqués par l’atelier pour la mise à taille et la livraison (16/11)', () => {
    for (const i of allFaqItems())
      for (const l of LOCALES)
        for (const p of i.a[l]) if (/[€$₪]/.test(p)) expect(['mise-a-taille', 'livraison'], `${i.id} : ${p}`).toContain(i.id);
  });

  it('le mot « laboratoire » ne qualifie jamais un diamant en français (décret 2002-65)', () => {
    for (const i of allFaqItems()) {
      const fr = [i.q.fr, ...i.a.fr].join(' ');
      expect(fr, i.id).not.toMatch(/diamants? (de laboratoire|de culture)/i);
    }
  });
});
